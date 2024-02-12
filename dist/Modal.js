"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
var _react = _interopRequireDefault(require("react"));
function Modal(_ref) {
  let {
    isOpen,
    handleClose,
    children
  } = _ref;
  const modalContainerBlock = {
    display: 'block',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto'
  };
  const modalContainerNone = {
    display: 'none'
  };
  const modalContent = {
    position: 'relative',
    backgroundColor: '#ffffff',
    margin: '300px auto',
    padding: '20px',
    width: '510px',
    borderRadius: '8px',
    boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.3)',
    display: 'flex'
  };
  const modalText = {
    width: '146px'
  };
  const modalButton = {
    position: 'relative',
    top: '-42px',
    left: '356px',
    fontSize: '32px',
    borderRadius: '50px',
    color: '#FFFFFF',
    backgroundColor: '#000000',
    padding: '8px 16px',
    border: 'none'
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: isOpen ? modalContainerBlock : modalContainerNone
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: modalContent
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: modalText
  }, children), /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleClose,
    style: modalButton
  }, "X"))));
}
;