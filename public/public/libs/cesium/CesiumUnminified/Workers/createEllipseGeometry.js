define(['./Matrix3-81bdfbf4', './defaultValue-040c41f9', './EllipseGeometry-3d9c80e6', './Check-e01dbea3', './Math-f7bd710c', './Transforms-b34b6ebc', './Matrix2-48a38c21', './RuntimeError-3c5db370', './combine-6eb6e848', './ComponentDatatype-614bb7b9', './WebGLConstants-f7267ced', './EllipseGeometryLibrary-f046111a', './GeometryAttribute-64873e1d', './GeometryAttributes-52134c76', './GeometryInstance-c4662957', './GeometryOffsetAttribute-b6810db4', './GeometryPipeline-68970aa4', './AttributeCompression-d657fc09', './EncodedCartesian3-ec1b16bd', './IndexDatatype-086e75a1', './IntersectionTests-3483e283', './Plane-c6f53110', './VertexFormat-4802f782'], (function (Matrix3, defaultValue, EllipseGeometry, Check, Math, Transforms, Matrix2, RuntimeError, combine, ComponentDatatype, WebGLConstants, EllipseGeometryLibrary, GeometryAttribute, GeometryAttributes, GeometryInstance, GeometryOffsetAttribute, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, VertexFormat) { 'use strict';

  function createEllipseGeometry(ellipseGeometry, offset) {
    if (defaultValue.defined(offset)) {
      ellipseGeometry = EllipseGeometry.EllipseGeometry.unpack(ellipseGeometry, offset);
    }
    ellipseGeometry._center = Matrix3.Cartesian3.clone(ellipseGeometry._center);
    ellipseGeometry._ellipsoid = Matrix3.Ellipsoid.clone(ellipseGeometry._ellipsoid);
    return EllipseGeometry.EllipseGeometry.createGeometry(ellipseGeometry);
  }

  return createEllipseGeometry;

}));
