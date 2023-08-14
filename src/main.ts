import L from "leaflet"
import {GrayImageGridDataProvider, GridDataGLFillMode, GridDataType, IConfigCreatableLayer, IGridDataOptions, IPixelLayerStyle3DOptions, IPixelLayerStyleOptions, consts, ensureGridDataOptions, init, predefinedImageTiles, resourceService} from "@quickearth/core"
import {LMap, LPixelLayer, createTileLayer} from "@quickearth/leaflet";
import {CPixelLayer, CView} from "@quickearth/cesium";
import "leaflet/dist/leaflet.css"
import {Ion} from "cesium";

Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NjE0YzZiNS0wNjJiLTQ5NjEtYmMyZC01YWYzZjk1NmYzMzYiLCJpZCI6OTgxOCwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU1NDk5MTkxNn0.RMgKv7MDKkXaV0df21IBBqikp2abPoUYeAPB42fHJes";
init();
const map = new LMap("map", { crs: L.CRS.EPSG3857, fadeAnimation: false, zoomControl: false }).setView([25.5, 116.5], 7);
const tileLayer = createTileLayer(predefinedImageTiles.windy, { pane: consts.customPanes.topmap.name });
map.addLayer(tileLayer);
const view = new CView("map3d");
view.goto(116.5, 25.5, 2000000, { pitch: -30, duration: 0.5 });

const createPrecpLayer = async (is3D = false) => {
    const gridOptions: IGridDataOptions = {
        xStart: 0,
        // xDelta: 0.25,
        xDelta: 0.5,
        // xSize: 1440,
        xSize: 720,
        yStart: 90,
        // yDelta: -0.25,
        yDelta: -0.5,
        // ySize: 721
        ySize: 361
    };
    ensureGridDataOptions(gridOptions);
    const provider = await GrayImageGridDataProvider.fromURL("http://qecloud.91weather.com/public/demos/data/mqe/GFS0P50_20220411020000_precp_single_33300.mqe", false, {
        gridOptions,
        scale: 0.1,
        offset: 0,
        dataType: GridDataType.UInt16,
        algo: 1,
        autoLoadToMemory: true
    });
    const style: IPixelLayerStyleOptions = {
        fillColor: "color-precp#res",
        fillMode: GridDataGLFillMode.pixel1
    };
    let layer: IConfigCreatableLayer;
    if (is3D) {
        const style3d = style as IPixelLayerStyle3DOptions;
        style3d.extrudeScale = 10000; // 不设置则不使用压效果
        layer = new CPixelLayer();
    } else {
        layer = new LPixelLayer();
    }
    layer.setDrawOptions(style);
    layer.setDataSource(provider);
    return layer;
}

const load = async () => {
    await resourceService.loadResourceFromConfigPath("demos/styles/demo.config.json");
    const layer2d = await createPrecpLayer(false);
    map.addLayer(layer2d as any);
    const layer3d = await createPrecpLayer(true);
    view.gridLayers.add(layer3d);
}

load();