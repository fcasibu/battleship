/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/factories/Gameboard.js":
/*!****************************************!*\
  !*** ./src/app/factories/Gameboard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _Ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ships */ \"./src/app/factories/Ships.js\");\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ \"./src/app/helpers/helpers.js\");\n\n\nfunction Gameboard() {\n  var board = Array.from({\n    length: 10\n  }, function () {\n    return Array.from({\n      length: 10\n    }, function () {\n      return null;\n    });\n  });\n  var missedHits = [];\n  var successfulHits = [];\n\n  function getBoard() {\n    return board;\n  }\n\n  function getMissedHits() {\n    return missedHits;\n  }\n\n  function getAllShip() {\n    var shipArr = [];\n\n    for (var i = 0; i < board.length; i++) {\n      var row = board[i];\n\n      for (var j = 0; j < row.length; j++) {\n        if (row[j] !== null) {\n          shipArr.push(row[j]);\n        }\n      }\n    }\n\n    return shipArr;\n  }\n\n  function checkSunkShip(x, y) {\n    return board[y][x] === null ? false : board[y][x].isSunk();\n  }\n\n  function checkAllSunkShip() {\n    return getAllShip().every(function (el) {\n      return el.isSunk();\n    });\n  }\n\n  function checkBoardEdges(type, x) {\n    if (type === \"Carrier\" && x > 5 || x < 0) {\n      return true;\n    }\n\n    if (type === \"Battleship\" && x > 6 || x < 0) {\n      return true;\n    }\n\n    if ((type === \"Cruiser\" || type === \"Submarine\") && x > 7 || x < 0) {\n      return true;\n    }\n\n    if (type === \"Destroyer\" && x > 8 || x < 0) {\n      return true;\n    }\n\n    return false;\n  }\n\n  function occupySpace(xCoord, yCoord, ship, size) {\n    var isOccupied = false;\n\n    for (var i = 0; i < size; i++) {\n      if (board[yCoord][xCoord - 1 + size] || board[yCoord][xCoord + i]) {\n        return true;\n      }\n\n      board[yCoord][xCoord + i] = ship;\n    }\n\n    return isOccupied;\n  }\n\n  function placeShip(type, coord) {\n    var getShip = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().SHIP_INFO;\n    var ship = (0,_Ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(getShip[type]);\n    var xCoord = coord[0];\n    var yCoord = coord[1];\n    var isShipOnEdgeOfBoard = checkBoardEdges(type, xCoord);\n\n    if (isShipOnEdgeOfBoard) {\n      return \"\".concat(type, \" can't be placed there\");\n    }\n\n    if (occupySpace(xCoord, yCoord, ship, getShip[type].size)) {\n      return \"Position is Occupied\";\n    }\n\n    return \"Ship placed successfully\";\n  }\n\n  function receiveAttack(x, y) {\n    var isSameAttackPos = successfulHits.some(function (coord) {\n      return coord.x === x && coord.y === y;\n    });\n    if (x < 0 || x > 9 || y < 0 || y > 9) return \"Invalid coordinates\";\n    var isShipDown = checkSunkShip(x, y);\n    if (isShipDown) return \"Ship has sunk\";\n    if (isSameAttackPos) return \"Can't attack the same coordinates\";\n\n    if (board[y][x]) {\n      var getNonHitLength = board[y][x].getNonHitPositions().length;\n      successfulHits.push({\n        x: x,\n        y: y\n      });\n      board[y][x].hit(getNonHitLength - 1);\n      return \"Position x: \".concat(x, \" and y: \").concat(y, \" has been hit\");\n    }\n\n    missedHits.push({\n      x: x,\n      y: y\n    });\n    return \"Missed at x: \".concat(x, \" and y: \").concat(y);\n  }\n\n  return {\n    getBoard: getBoard,\n    placeShip: placeShip,\n    receiveAttack: receiveAttack,\n    getMissedHits: getMissedHits,\n    checkAllSunkShip: checkAllSunkShip,\n    checkBoardEdges: checkBoardEdges\n  };\n}\n\n//# sourceURL=webpack://battleship/./src/app/factories/Gameboard.js?");

/***/ }),

/***/ "./src/app/factories/Ships.js":
/*!************************************!*\
  !*** ./src/app/factories/Ships.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction Ship(SHIP_INFO) {\n  var size = SHIP_INFO.size,\n      type = SHIP_INFO.type;\n  var ship = Array.from({\n    length: size\n  }, function () {\n    return null;\n  });\n\n  function getLength() {\n    return size;\n  }\n\n  function getNonHitPositions() {\n    return ship.filter(function (pos) {\n      return pos !== \"hit\";\n    });\n  }\n\n  function getShip() {\n    return ship;\n  }\n\n  function getType() {\n    return type;\n  }\n\n  function hit(pos) {\n    ship.splice(pos, 1, \"hit\");\n    console.log(ship);\n  }\n\n  function isSunk() {\n    return ship.every(function (pos) {\n      return pos === \"hit\";\n    });\n  }\n\n  return {\n    getLength: getLength,\n    getShip: getShip,\n    getType: getType,\n    getNonHitPositions: getNonHitPositions,\n    isSunk: isSunk,\n    hit: hit\n  };\n}\n\n//# sourceURL=webpack://battleship/./src/app/factories/Ships.js?");

/***/ }),

/***/ "./src/app/helpers/helpers.js":
/*!************************************!*\
  !*** ./src/app/helpers/helpers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ helpers)\n/* harmony export */ });\nfunction helpers() {\n  var SHIP_INFO = {\n    Carrier: {\n      type: \"Carrier\",\n      size: 5\n    },\n    Battleship: {\n      type: \"Battleship\",\n      size: 4\n    },\n    Cruiser: {\n      type: \"Cruiser\",\n      size: 3\n    },\n    Submarine: {\n      type: \"Submarine\",\n      size: 3\n    },\n    Destroyer: {\n      type: \"Destroyer\",\n      size: 2\n    }\n  };\n  return {\n    SHIP_INFO: SHIP_INFO\n  };\n}\n\n//# sourceURL=webpack://battleship/./src/app/helpers/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _app_factories_Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/factories/Gameboard */ \"./src/app/factories/Gameboard.js\");\n/* harmony import */ var _app_factories_Ships__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/factories/Ships */ \"./src/app/factories/Ships.js\");\n\n\n\nvar gameBoard = (0,_app_factories_Gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nvar enemyBoard = (0,_app_factories_Gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nenemyBoard.placeShip(\"Carrier\", [1, 7]);\nconsole.log(gameBoard.placeShip(\"Carrier\", [5, 6]));\nconsole.log(gameBoard.placeShip(\"Battleship\", [3, 2]));\nconsole.log(gameBoard.placeShip(\"Cruiser\", [0, 4]));\nconsole.log(gameBoard.placeShip(\"Submarine\", [5, 4]));\nconsole.log(gameBoard.placeShip(\"Destroyer\", [7, 9]));\nconsole.log(gameBoard.placeShip(\"Destroyer\", [4, 9]));\nconsole.log(gameBoard.receiveAttack(5, 6));\nconsole.table(gameBoard.getBoard());\nconsole.log(gameBoard.checkAllSunkShip());\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://battleship/./src/styles/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;