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

/***/ "./src/app/dom/components/board.js":
/*!*****************************************!*\
  !*** ./src/app/dom/components/board.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createBoard)\n/* harmony export */ });\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helpers */ \"./src/app/helpers/helpers.js\");\n\nfunction createBoard() {\n  var boardContainer = document.createElement(\"div\");\n  var yCoordinateContainer = document.createElement(\"div\");\n  var xCoordinateContainer = document.createElement(\"div\");\n  var BOARD_SIZE = 10;\n  yCoordinateContainer.classList.add(\"y-coordinates\");\n  xCoordinateContainer.classList.add(\"x-coordinates\");\n  boardContainer.classList.add(\"game-board\");\n\n  for (var i = 0; i < BOARD_SIZE; i++) {\n    var yCoordinates = document.createElement(\"div\");\n    var xCoordinates = document.createElement(\"div\");\n    yCoordinates.classList.add(\"y-coordinate\");\n    yCoordinates.textContent = i;\n    yCoordinateContainer.appendChild(yCoordinates);\n    xCoordinates.classList.add(\"x-coordinate\");\n    xCoordinates.textContent = i;\n    xCoordinateContainer.appendChild(xCoordinates);\n    boardContainer.prepend(yCoordinateContainer);\n    boardContainer.prepend(xCoordinateContainer);\n\n    for (var j = 0; j < BOARD_SIZE; j++) {\n      var squares = document.createElement(\"div\");\n      (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().addAttributesToSquare(squares, i, j);\n      boardContainer.appendChild(squares);\n    }\n  }\n\n  return boardContainer;\n}\n\n//# sourceURL=webpack://battleship/./src/app/dom/components/board.js?");

/***/ }),

/***/ "./src/app/dom/components/render.js":
/*!******************************************!*\
  !*** ./src/app/dom/components/render.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/app/dom/components/board.js\");\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships */ \"./src/app/dom/components/ships.js\");\n\n\n\nvar renderElements = function () {\n  // test\n  var mainContent = document.querySelector(\".player-board\");\n  mainContent.appendChild((0,_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  (0,_ships__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  var squares = document.querySelectorAll(\".square\");\n\n  for (var i = 0; i < 10 * 10; i++) {\n    squares[i].setAttribute(\"data-index\", i);\n  }\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderElements);\n\n//# sourceURL=webpack://battleship/./src/app/dom/components/render.js?");

/***/ }),

/***/ "./src/app/dom/components/ships.js":
/*!*****************************************!*\
  !*** ./src/app/dom/components/ships.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createShips)\n/* harmony export */ });\nfunction createDivs(size, type) {\n  for (var i = 0; i < size; i++) {\n    var div = document.createElement(\"div\");\n    div.classList.add(\"ship-square\");\n    type.appendChild(div);\n  }\n}\n\nfunction createShips() {\n  var carrier = document.querySelector(\".carrier\");\n  var battleship = document.querySelector(\".battleship\");\n  var cruiser = document.querySelector(\".cruiser\");\n  var submarine = document.querySelector(\".submarine\");\n  var destroyer = document.querySelector(\".destroyer\");\n  createDivs(5, carrier);\n  createDivs(4, battleship);\n  createDivs(3, cruiser);\n  createDivs(3, submarine);\n  createDivs(2, destroyer);\n}\n\n//# sourceURL=webpack://battleship/./src/app/dom/components/ships.js?");

/***/ }),

/***/ "./src/app/dom/dom.js":
/*!****************************!*\
  !*** ./src/app/dom/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/render */ \"./src/app/dom/components/render.js\");\n\n\nvar dom = function () {}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://battleship/./src/app/dom/dom.js?");

/***/ }),

/***/ "./src/app/eventHandler/eventHandler.js":
/*!**********************************************!*\
  !*** ./src/app/eventHandler/eventHandler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories_Players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/Players */ \"./src/app/factories/Players.js\");\n/* harmony import */ var _factories_ComputerPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/ComputerPlayer */ \"./src/app/factories/ComputerPlayer.js\");\n\n\n\nvar eventHandler = function () {\n  var player = new _factories_Players__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"nevz\");\n  var computer = new _factories_ComputerPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  var shipsContainer = document.querySelector(\".ships-container\");\n  var boardContainer = document.querySelector(\".player-board > .game-board\");\n  var enemyBoard = document.querySelector(\".enemy-board > .game-board\");\n\n  var dragHandler = function dragHandler() {\n    boardContainer.addEventListener(\"mouseover\", function (e) {\n      var selectedShip = document.querySelector(\"[selected=\\\"\".concat(true, \"\\\"]\"));\n      var canOccupy = false;\n      var shipLength;\n      var shipName;\n\n      if (selectedShip) {\n        shipName = selectedShip.dataset.type;\n        shipLength = selectedShip.childElementCount;\n        canOccupy = true;\n      }\n\n      if (canOccupy) {\n        e.target.classList.add(\"hovered\");\n        var xCoord = e.target.dataset.x;\n        var yCoord = e.target.dataset.y;\n\n        for (var i = 0; i < shipLength; i++) {\n          var square = document.querySelector(\"[data-x=\\\"\".concat(xCoord - i, \"\\\"][data-y=\\\"\").concat(yCoord, \"\\\"]\"));\n\n          if (square) {\n            square.classList.add(\"hovered\");\n          }\n        }\n\n        e.target.addEventListener(\"mouseout\", function () {\n          var hoveredElements = document.querySelectorAll(\".hovered\");\n          hoveredElements.forEach(function (element) {\n            return element.classList.remove(\"hovered\");\n          });\n        });\n        e.target.addEventListener(\"click\", function () {\n          var hoveredElements = document.querySelectorAll(\".hovered\");\n          var canBeOccupied = player.ship.placeShip(shipName, [xCoord - (shipLength - 1), yCoord]);\n\n          if (canBeOccupied) {\n            hoveredElements.forEach(function (element) {\n              return element.classList.add(\"occupied\");\n            });\n            selectedShip.setAttribute(\"selected\", false);\n            selectedShip.setAttribute(\"hidden\", true);\n          }\n        });\n      }\n    });\n  };\n\n  var clickHandler = function clickHandler() {\n    shipsContainer.addEventListener(\"click\", function (e) {\n      if (e.target.dataset.type) {\n        e.target.setAttribute(\"selected\", true);\n      }\n    });\n    enemyBoard.addEventListener(\"click\", function (e) {\n      if (e.target.classList.contains(\"square\")) {\n        var xCoord = e.target.dataset.x;\n        var yCoord = e.target.dataset.y;\n        var canBeAttacked = computer.ship.receiveAttack(xCoord, yCoord);\n        var allShipDown = computer.ship.checkAllSunkShip();\n\n        if (canBeAttacked) {\n          e.target.classList.add(\"hit\");\n          e.target.classList.remove(\"hide-ship\");\n        } else {\n          e.target.classList.add(\"miss\");\n        }\n\n        if (allShipDown) {\n          enemyBoard.style.opacity = 0.5;\n          enemyBoard.style.pointerEvents = \"none\";\n        }\n      }\n    });\n  };\n\n  return {\n    dragHandler: dragHandler,\n    clickHandler: clickHandler,\n    computer: computer\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventHandler);\n\n//# sourceURL=webpack://battleship/./src/app/eventHandler/eventHandler.js?");

/***/ }),

/***/ "./src/app/factories/ComputerPlayer.js":
/*!*********************************************!*\
  !*** ./src/app/factories/ComputerPlayer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Computer)\n/* harmony export */ });\n/* harmony import */ var _Players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Players */ \"./src/app/factories/Players.js\");\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ \"./src/app/helpers/helpers.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar Computer = /*#__PURE__*/function (_Player) {\n  _inherits(Computer, _Player);\n\n  var _super = _createSuper(Computer);\n\n  function Computer() {\n    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().getRandomName();\n\n    _classCallCheck(this, Computer);\n\n    return _super.call(this, name);\n  }\n\n  return _createClass(Computer);\n}(_Players__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://battleship/./src/app/factories/ComputerPlayer.js?");

/***/ }),

/***/ "./src/app/factories/Gameboard.js":
/*!****************************************!*\
  !*** ./src/app/factories/Gameboard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _Ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ships */ \"./src/app/factories/Ships.js\");\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ \"./src/app/helpers/helpers.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nfunction Gameboard() {\n  var board = Array.from({\n    length: 10\n  }, function () {\n    return Array.from({\n      length: 10\n    }, function () {\n      return \"\";\n    });\n  });\n  var missedHits = [];\n  var successfulHits = [];\n  var shipsToDeploy = [\"Carrier\", \"Battleship\", \"Cruiser\", \"Submarine\", \"Destroyer\"];\n\n  function getBoard() {\n    return board;\n  }\n\n  function getMissedHits() {\n    return missedHits;\n  }\n\n  function getAllShips() {\n    var deployedShips = [];\n\n    for (var i = 0; i < board.length; i++) {\n      var row = board[i];\n\n      for (var j = 0; j < row.length; j++) {\n        if (row[j]) {\n          deployedShips.push(row[j]);\n        }\n      }\n    }\n\n    return deployedShips;\n  }\n\n  function checkSunkShip(xCoord, yCoord) {\n    return !board[yCoord][xCoord] ? false : board[yCoord][xCoord].isSunk();\n  }\n\n  function checkAllSunkShip() {\n    return getAllShips().every(function (ship) {\n      return ship.isSunk();\n    });\n  }\n\n  function checkBoardEdges(type, xCoord, yCoord) {\n    var isNegative = xCoord < 0 || yCoord < 0;\n    var isOverBoard = yCoord > 9;\n    var isEdgeOfBoard = isNegative || isOverBoard;\n\n    if (type === \"Carrier\" && xCoord > 5 || isEdgeOfBoard) {\n      return true;\n    }\n\n    if (type === \"Battleship\" && xCoord > 6 || isEdgeOfBoard) {\n      return true;\n    }\n\n    if ((type === \"Cruiser\" || type === \"Submarine\") && xCoord > 7 || isEdgeOfBoard) {\n      return true;\n    }\n\n    if (type === \"Destroyer\" && xCoord > 8 || isEdgeOfBoard) {\n      return true;\n    }\n\n    return false;\n  }\n\n  function occupySpace(xCoord, yCoord, ship, size) {\n    for (var i = 0; i < size; i++) {\n      if (board[yCoord][xCoord - 1 + size] || board[yCoord][xCoord + i]) {\n        return true;\n      }\n\n      board[yCoord][xCoord + i] = ship;\n    }\n\n    return false;\n  }\n\n  function placeShip(type, _ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        xCoord = _ref2[0],\n        yCoord = _ref2[1];\n\n    var getShipInfo = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().shipsInfo[type];\n    var ship = (0,_Ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(getShipInfo);\n    var isShipOnEdgeOfBoard = checkBoardEdges(type, xCoord, yCoord);\n\n    if (isShipOnEdgeOfBoard) {\n      return false;\n    }\n\n    var isSpaceOccupied = occupySpace(xCoord, yCoord, ship, getShipInfo.size);\n\n    if (isSpaceOccupied) {\n      return false;\n    }\n\n    return true;\n  }\n\n  function receiveAttack(xCoord, yCoord) {\n    if (xCoord < 0 || xCoord > 9 || yCoord < 0 || yCoord > 9) return \"Invalid coordinates\";\n    var coordinatesHasShip = board[yCoord][xCoord];\n    var isShipDown = checkSunkShip(xCoord, yCoord);\n    var isSameAttackCoord = successfulHits.some(function (hits) {\n      return hits.xCoord === xCoord && hits.yCoord === yCoord;\n    });\n    var isSameMissedAttackCoord = missedHits.some(function (hits) {\n      return hits.xCoord === xCoord && hits.yCoord === yCoord;\n    });\n    if (isShipDown) return \"Ship has sunk\";\n    if (isSameAttackCoord) return \"Can't attack the same coordinates\";\n    if (isSameMissedAttackCoord) return \"Can't attack the same coordinates\";\n\n    if (coordinatesHasShip) {\n      var getNonHitLength = board[yCoord][xCoord].getNonHitPositions().length;\n      successfulHits.push({\n        xCoord: xCoord,\n        yCoord: yCoord\n      });\n      board[yCoord][xCoord].hit(getNonHitLength - 1);\n      return true;\n    }\n\n    missedHits.push({\n      xCoord: xCoord,\n      yCoord: yCoord\n    });\n    return false;\n  }\n\n  function randomizeShipPlacement() {\n    var SHIP_COUNT = 5;\n\n    for (var i = 0; i < SHIP_COUNT; i++) {\n      var randomShip = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().getRandomShip(shipsToDeploy);\n      var randomIndex = Math.floor(Math.random() * (SHIP_COUNT + 1));\n      placeShip(randomShip, [randomIndex, i]);\n    }\n  }\n\n  function randomizeBoard() {\n    for (var i = board.length - 1; i > 0; i--) {\n      var randomIndex = Math.floor(Math.random() * (i + 1));\n      var _ref3 = [board[randomIndex], board[i]];\n      board[i] = _ref3[0];\n      board[randomIndex] = _ref3[1];\n    }\n  }\n\n  function autoPlaceShips() {\n    randomizeShipPlacement();\n    randomizeBoard();\n  }\n\n  return {\n    getBoard: getBoard,\n    placeShip: placeShip,\n    receiveAttack: receiveAttack,\n    getMissedHits: getMissedHits,\n    checkAllSunkShip: checkAllSunkShip,\n    checkBoardEdges: checkBoardEdges,\n    autoPlaceShips: autoPlaceShips\n  };\n}\n\n//# sourceURL=webpack://battleship/./src/app/factories/Gameboard.js?");

/***/ }),

/***/ "./src/app/factories/Players.js":
/*!**************************************!*\
  !*** ./src/app/factories/Players.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/app/factories/Gameboard.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Player = /*#__PURE__*/_createClass(function Player(name) {\n  _classCallCheck(this, Player);\n\n  this.name = name;\n  this.ship = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\n\n\n//# sourceURL=webpack://battleship/./src/app/factories/Players.js?");

/***/ }),

/***/ "./src/app/factories/Ships.js":
/*!************************************!*\
  !*** ./src/app/factories/Ships.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction Ship(shipsInfo) {\n  var size = shipsInfo.size,\n      type = shipsInfo.type;\n  var ship = Array.from({\n    length: size\n  }, function () {\n    return \"\";\n  });\n\n  function getNonHitPositions() {\n    return ship.filter(function (pos) {\n      return pos !== \"hit\";\n    });\n  }\n\n  function getShip() {\n    return ship;\n  }\n\n  function hit(pos) {\n    ship.splice(pos, 1, \"hit\");\n  }\n\n  function isSunk() {\n    return ship.every(function (pos) {\n      return pos === \"hit\";\n    });\n  }\n\n  return {\n    getShip: getShip,\n    getNonHitPositions: getNonHitPositions,\n    isSunk: isSunk,\n    hit: hit,\n    size: size,\n    type: type\n  };\n}\n\n//# sourceURL=webpack://battleship/./src/app/factories/Ships.js?");

/***/ }),

/***/ "./src/app/helpers/helpers.js":
/*!************************************!*\
  !*** ./src/app/helpers/helpers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ helpers)\n/* harmony export */ });\nfunction helpers() {\n  var shipsInfo = {\n    Carrier: {\n      type: \"Carrier\",\n      size: 5\n    },\n    Battleship: {\n      type: \"Battleship\",\n      size: 4\n    },\n    Cruiser: {\n      type: \"Cruiser\",\n      size: 3\n    },\n    Submarine: {\n      type: \"Submarine\",\n      size: 3\n    },\n    Destroyer: {\n      type: \"Destroyer\",\n      size: 2\n    }\n  };\n  var computerNames = [\"Ferdinand Magellan\", \"Bartholomew Roberts\", \"Horatio Nelson\", \"John Rackham\", \"William Kidd\", \"Francis Drake\", \"Christopher Columbus\", \"Edward Teach\", \"Henry Morgan\", \"James Cook\"];\n\n  function addAttributesToSquare(squares, x, y) {\n    squares.classList.add(\"square\");\n    squares.dataset.y = x;\n    squares.dataset.x = y;\n  }\n\n  function getRandomName() {\n    return computerNames[Math.floor(Math.random() * computerNames.length)];\n  }\n\n  function getRandomShip(ship) {\n    var randomShip = ship[Math.floor(Math.random() * ship.length)];\n    return ship.splice(ship.indexOf(randomShip), 1);\n  }\n\n  return {\n    shipsInfo: shipsInfo,\n    getRandomShip: getRandomShip,\n    getRandomName: getRandomName,\n    addAttributesToSquare: addAttributesToSquare\n  };\n}\n\n//# sourceURL=webpack://battleship/./src/app/helpers/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _app_factories_Players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/factories/Players */ \"./src/app/factories/Players.js\");\n/* harmony import */ var _app_factories_ComputerPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/factories/ComputerPlayer */ \"./src/app/factories/ComputerPlayer.js\");\n/* harmony import */ var _app_dom_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/dom/dom */ \"./src/app/dom/dom.js\");\n/* harmony import */ var _app_eventHandler_eventHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/eventHandler/eventHandler */ \"./src/app/eventHandler/eventHandler.js\");\n\n\n\n\n // Test dom\n\nvar x = new _app_factories_Players__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"john\");\nvar computer = _app_eventHandler_eventHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"].computer;\n_app_eventHandler_eventHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"].clickHandler();\n_app_eventHandler_eventHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dragHandler();\ncomputer.ship.autoPlaceShips();\n\nfor (var i = 0; i < computer.ship.getBoard().length; i++) {\n  var row = computer.ship.getBoard()[i];\n\n  for (var j = 0; j < row.length; j++) {\n    var enemyBoardContainer = document.querySelector(\".enemy-board .square[data-y=\\\"\".concat(i, \"\\\"][data-x=\\\"\").concat(j, \"\\\"]\"));\n\n    if (row[j]) {\n      enemyBoardContainer.classList.add(\"placed\", \"hide-ship\");\n    }\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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