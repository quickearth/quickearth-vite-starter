define(['./defaultValue-040c41f9', './EllipsoidGeometry-8335f3fa', './Transforms-b34b6ebc', './Matrix3-81bdfbf4', './Check-e01dbea3', './Math-f7bd710c', './Matrix2-48a38c21', './RuntimeError-3c5db370', './combine-6eb6e848', './ComponentDatatype-614bb7b9', './WebGLConstants-f7267ced', './GeometryAttribute-64873e1d', './GeometryAttributes-52134c76', './GeometryOffsetAttribute-b6810db4', './IndexDatatype-086e75a1', './VertexFormat-4802f782'], (function (defaultValue, EllipsoidGeometry, Transforms, Matrix3, Check, Math, Matrix2, RuntimeError, combine, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, GeometryOffsetAttribute, IndexDatatype, VertexFormat) { 'use strict';

  function createEllipsoidGeometry(ellipsoidGeometry, offset) {
    if (defaultValue.defined(offset)) {
      ellipsoidGeometry = EllipsoidGeometry.EllipsoidGeometry.unpack(ellipsoidGeometry, offset);
    }
    return EllipsoidGeometry.EllipsoidGeometry.createGeometry(ellipsoidGeometry);
  }

  return createEllipsoidGeometry;

}));
