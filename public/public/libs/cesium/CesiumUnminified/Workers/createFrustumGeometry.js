define(['./defaultValue-040c41f9', './FrustumGeometry-77aaba5a', './Transforms-b34b6ebc', './Matrix3-81bdfbf4', './Check-e01dbea3', './Math-f7bd710c', './Matrix2-48a38c21', './RuntimeError-3c5db370', './combine-6eb6e848', './ComponentDatatype-614bb7b9', './WebGLConstants-f7267ced', './GeometryAttribute-64873e1d', './GeometryAttributes-52134c76', './Plane-c6f53110', './VertexFormat-4802f782'], (function (defaultValue, FrustumGeometry, Transforms, Matrix3, Check, Math, Matrix2, RuntimeError, combine, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, Plane, VertexFormat) { 'use strict';

  function createFrustumGeometry(frustumGeometry, offset) {
    if (defaultValue.defined(offset)) {
      frustumGeometry = FrustumGeometry.FrustumGeometry.unpack(frustumGeometry, offset);
    }
    return FrustumGeometry.FrustumGeometry.createGeometry(frustumGeometry);
  }

  return createFrustumGeometry;

}));
