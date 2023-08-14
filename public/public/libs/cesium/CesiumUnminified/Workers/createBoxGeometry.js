define(['./BoxGeometry-c7f1751e', './defaultValue-040c41f9', './Transforms-b34b6ebc', './Matrix3-81bdfbf4', './Check-e01dbea3', './Math-f7bd710c', './Matrix2-48a38c21', './RuntimeError-3c5db370', './combine-6eb6e848', './ComponentDatatype-614bb7b9', './WebGLConstants-f7267ced', './GeometryAttribute-64873e1d', './GeometryAttributes-52134c76', './GeometryOffsetAttribute-b6810db4', './VertexFormat-4802f782'], (function (BoxGeometry, defaultValue, Transforms, Matrix3, Check, Math, Matrix2, RuntimeError, combine, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, GeometryOffsetAttribute, VertexFormat) { 'use strict';

  function createBoxGeometry(boxGeometry, offset) {
    if (defaultValue.defined(offset)) {
      boxGeometry = BoxGeometry.BoxGeometry.unpack(boxGeometry, offset);
    }
    return BoxGeometry.BoxGeometry.createGeometry(boxGeometry);
  }

  return createBoxGeometry;

}));
