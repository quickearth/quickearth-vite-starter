define(['./PrimitivePipeline-f79cb004', './createTaskProcessorWorker', './Transforms-b34b6ebc', './Matrix3-81bdfbf4', './Check-e01dbea3', './defaultValue-040c41f9', './Math-f7bd710c', './Matrix2-48a38c21', './RuntimeError-3c5db370', './combine-6eb6e848', './ComponentDatatype-614bb7b9', './WebGLConstants-f7267ced', './GeometryAttribute-64873e1d', './GeometryAttributes-52134c76', './GeometryPipeline-68970aa4', './AttributeCompression-d657fc09', './EncodedCartesian3-ec1b16bd', './IndexDatatype-086e75a1', './IntersectionTests-3483e283', './Plane-c6f53110', './WebMercatorProjection-be6ac8f9'], (function (PrimitivePipeline, createTaskProcessorWorker, Transforms, Matrix3, Check, defaultValue, Math, Matrix2, RuntimeError, combine, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, WebMercatorProjection) { 'use strict';

  function combineGeometry(packedParameters, transferableObjects) {
    const parameters = PrimitivePipeline.PrimitivePipeline.unpackCombineGeometryParameters(
      packedParameters
    );
    const results = PrimitivePipeline.PrimitivePipeline.combineGeometry(parameters);
    return PrimitivePipeline.PrimitivePipeline.packCombineGeometryResults(
      results,
      transferableObjects
    );
  }
  var combineGeometry$1 = createTaskProcessorWorker(combineGeometry);

  return combineGeometry$1;

}));
