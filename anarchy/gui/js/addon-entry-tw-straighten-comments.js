(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-tw-straighten-comments"],{

/***/ "./src/addons/addons/tw-straighten-comments/_runtime_entry.js":
/*!********************************************************************!*\
  !*** ./src/addons/addons/tw-straighten-comments/_runtime_entry.js ***!
  \********************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/tw-straighten-comments/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/tw-straighten-comments/userscript.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/tw-straighten-comments/userscript.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  global,
  console
}) {
  // see fix-editor-comments
  const Blockly = await addon.tab.traps.getBlockly();
  const originalCommentEndDrag = Blockly.BubbleDragger.prototype.endBubbleDrag;

  Blockly.BubbleDragger.prototype.endBubbleDrag = function (e, currentDragDeltaXY) {
    if (!addon.self.disabled && this.draggingBubble_.comment) {
      const y = this.draggingBubble_.comment.iconXY_.y - Blockly.ScratchBubble.TOP_BAR_HEIGHT / 2;
      currentDragDeltaXY.y = y - this.startXY_.y;
    }

    return originalCommentEndDrag.call(this, e, currentDragDeltaXY);
  };
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-tw-straighten-comments.js.map