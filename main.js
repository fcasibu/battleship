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

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories_Players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/Players */ \"./src/app/factories/Players.js\");\n/* harmony import */ var _factories_ComputerPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/ComputerPlayer */ \"./src/app/factories/ComputerPlayer.js\");\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/helpers */ \"./src/app/helpers/helpers.js\");\n\n\n\n\nvar game = function (name) {\n  var _helpers = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      createRandomShips = _helpers.createRandomShips;\n\n  var playerOne = new _factories_Players__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\n  var playerTwo = new _factories_ComputerPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  var playerBoard = document.querySelectorAll(\".player-board > .game-board > .square\");\n\n  function computerAttack() {\n    var _playerTwo$randomAtta = playerTwo.randomAttack(playerOne.ship),\n        xCoord = _playerTwo$randomAtta.xCoord,\n        yCoord = _playerTwo$randomAtta.yCoord;\n\n    for (var i = 0; i < playerBoard.length; i++) {\n      var square = document.querySelector(\"[data-x=\\\"\".concat(xCoord, \"\\\"][data-y=\\\"\").concat(yCoord, \"\\\"]\"));\n\n      if (square.classList.contains(\"occupied\")) {\n        square.classList.add(\"hit\");\n      } else {\n        square.classList.add(\"miss\");\n      }\n    }\n\n    return {\n      xCoord: xCoord,\n      yCoord: yCoord\n    };\n  }\n\n  function createEnemyShips() {\n    createRandomShips(playerTwo, \"enemy-board\");\n  }\n\n  function createPlayerShips() {\n    createRandomShips(playerOne, \"player-board\");\n  }\n\n  function checkWinCondition(endGame) {\n    var allEnemyShipDown = playerTwo.ship.checkAllSunkShip();\n    var allPlayerShipDown = playerOne.ship.checkAllSunkShip();\n\n    if (allEnemyShipDown) {\n      endGame();\n    }\n\n    if (allPlayerShipDown) {\n      endGame();\n    }\n  }\n\n  return {\n    playerOne: playerOne,\n    playerTwo: playerTwo,\n    playerBoard: playerBoard,\n    computerAttack: computerAttack,\n    createEnemyShips: createEnemyShips,\n    createPlayerShips: createPlayerShips,\n    checkWinCondition: checkWinCondition\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\n\n//# sourceURL=webpack://battleship/./src/app/app.js?");

/***/ }),

/***/ "./src/app/dom/components/board.js":
/*!*****************************************!*\
  !*** ./src/app/dom/components/board.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createBoard)\n/* harmony export */ });\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helpers */ \"./src/app/helpers/helpers.js\");\n\nfunction createBoard() {\n  var boardContainer = document.createElement(\"div\");\n  var yCoordinateContainer = document.createElement(\"div\");\n  var xCoordinateContainer = document.createElement(\"div\");\n  var BOARD_SIZE = 10;\n  yCoordinateContainer.classList.add(\"y-coordinates\");\n  xCoordinateContainer.classList.add(\"x-coordinates\");\n  boardContainer.classList.add(\"game-board\");\n\n  for (var i = 0; i < BOARD_SIZE; i++) {\n    var yCoordinates = document.createElement(\"div\");\n    var xCoordinates = document.createElement(\"div\");\n    yCoordinates.classList.add(\"y-coordinate\");\n    xCoordinates.classList.add(\"x-coordinate\");\n    yCoordinates.textContent = i;\n    xCoordinates.textContent = i;\n    yCoordinateContainer.appendChild(yCoordinates);\n    xCoordinateContainer.appendChild(xCoordinates);\n    boardContainer.prepend(yCoordinateContainer);\n    boardContainer.prepend(xCoordinateContainer);\n\n    for (var j = 0; j < BOARD_SIZE; j++) {\n      var squares = document.createElement(\"div\");\n      (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().addAttributesToSquare(squares, i, j);\n      boardContainer.appendChild(squares);\n    }\n  }\n\n  return boardContainer;\n}\n\n//# sourceURL=webpack://battleship/./src/app/dom/components/board.js?");

/***/ }),

/***/ "./src/app/dom/components/render.js":
/*!******************************************!*\
  !*** ./src/app/dom/components/render.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderBoard)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/app/dom/components/board.js\");\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships */ \"./src/app/dom/components/ships.js\");\n\n\nfunction renderBoard() {\n  var playerBoard = document.querySelector(\".player-board\");\n  var enemyBoard = document.querySelector(\".enemy-board\");\n  var player = (0,_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  var playerTwo = (0,_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  playerTwo.classList.add(\"hide-board\");\n  playerBoard.appendChild(player);\n  enemyBoard.appendChild(playerTwo);\n  (0,_ships__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  var squares = document.querySelectorAll(\".square\");\n\n  for (var i = 0; i < 10 * 10; i++) {\n    squares[i].setAttribute(\"data-index\", i);\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/app/dom/components/render.js?");

/***/ }),

/***/ "./src/app/dom/components/ships.js":
/*!*****************************************!*\
  !*** ./src/app/dom/components/ships.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createShips)\n/* harmony export */ });\nfunction createShipsToDeploy(size, type) {\n  for (var i = 0; i < size; i++) {\n    var div = document.createElement(\"div\");\n    div.classList.add(\"ship-square\");\n    type.appendChild(div);\n  }\n}\n\nfunction createShips() {\n  var carrier = document.querySelector(\".carrier\");\n  var battleship = document.querySelector(\".battleship\");\n  var cruiser = document.querySelector(\".cruiser\");\n  var submarine = document.querySelector(\".submarine\");\n  var destroyer = document.querySelector(\".destroyer\");\n  createShipsToDeploy(5, carrier);\n  createShipsToDeploy(4, battleship);\n  createShipsToDeploy(3, cruiser);\n  createShipsToDeploy(3, submarine);\n  createShipsToDeploy(2, destroyer);\n}\n\n//# sourceURL=webpack://battleship/./src/app/dom/components/ships.js?");

/***/ }),

/***/ "./src/app/dom/dom.js":
/*!****************************!*\
  !*** ./src/app/dom/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/render */ \"./src/app/dom/components/render.js\");\n\n\nvar dom = function () {\n  (0,_components_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  var optionsMenu = document.querySelector(\".options\");\n  var shipsContainer = document.querySelector(\".ships-container\");\n  var playerBoard = document.querySelector(\".player-board > .game-board\");\n  var enemyBoard = document.querySelector(\".enemy-board > .game-board\");\n  var buttonsContainer = document.querySelector(\".buttons\");\n  var playersShips = document.querySelectorAll(\".ships\");\n  playersShips.forEach(function (player) {\n    return player.classList.add(\"hide-options\");\n  });\n\n  function removeShipsToDeploy() {\n    var shipsToDeploy = document.querySelectorAll(\"[selected=\\\"false\\\"]\");\n    shipsToDeploy.forEach(function (ship) {\n      return ship.setAttribute(\"hidden\", \"true\");\n    });\n  }\n\n  function removeOccupied() {\n    var occupiedPositions = document.querySelectorAll(\".occupied\");\n    occupiedPositions.forEach(function (position) {\n      return position.classList.remove(\"occupied\");\n    });\n  }\n\n  function addOccupied() {\n    var hoveredElements = document.querySelectorAll(\".hovered\");\n    hoveredElements.forEach(function (element) {\n      return element.classList.add(\"occupied\");\n    });\n  }\n\n  function removeHoveredElements() {\n    var hoveredElements = document.querySelectorAll(\".hovered\");\n    hoveredElements.forEach(function (element) {\n      return element.classList.remove(\"hovered\");\n    });\n  }\n\n  function startGame() {\n    optionsMenu.classList.add(\"hide-options\");\n    enemyBoard.classList.remove(\"hide-board\");\n    playerBoard.classList.add(\"game-start\");\n    playersShips.forEach(function (player) {\n      return player.classList.remove(\"hide-options\");\n    });\n  }\n\n  function endGame() {\n    enemyBoard.style.opacity = \"0.5\";\n    enemyBoard.style.pointerEvents = \"none\";\n  }\n\n  function hoverOnBoard(xCoord, yCoord, shipLength) {\n    for (var i = 0; i < shipLength; i++) {\n      var square = document.querySelector(\"[data-x=\\\"\".concat(xCoord - i, \"\\\"][data-y=\\\"\").concat(yCoord, \"\\\"]\"));\n\n      if (square && !square.classList.contains(\"occupied\")) {\n        square.classList.add(\"hovered\");\n      }\n    }\n  }\n\n  return {\n    shipsContainer: shipsContainer,\n    buttonsContainer: buttonsContainer,\n    playerBoard: playerBoard,\n    enemyBoard: enemyBoard,\n    playersShips: playersShips,\n    removeShipsToDeploy: removeShipsToDeploy,\n    removeOccupied: removeOccupied,\n    removeHoveredElements: removeHoveredElements,\n    addOccupied: addOccupied,\n    startGame: startGame,\n    endGame: endGame,\n    hoverOnBoard: hoverOnBoard\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://battleship/./src/app/dom/dom.js?");

/***/ }),

/***/ "./src/app/eventHandler/eventHandler.js":
/*!**********************************************!*\
  !*** ./src/app/eventHandler/eventHandler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ \"./src/app/app.js\");\n/* harmony import */ var _dom_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/dom */ \"./src/app/dom/dom.js\");\n\n\n\nvar eventHandler = function () {\n  var shipsContainer = _dom_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shipsContainer,\n      buttonsContainer = _dom_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].buttonsContainer,\n      playerBoard = _dom_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerBoard,\n      enemyBoard = _dom_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].enemyBoard,\n      removeShipsToDeploy = _dom_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeShipsToDeploy,\n      removeOccupied = _dom_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeOccupied,\n      removeHoveredElements = _dom_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeHoveredElements,\n      addOccupied = _dom_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addOccupied,\n      startGame = _dom_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].startGame,\n      endGame = _dom_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].endGame,\n      hoverOnBoard = _dom_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hoverOnBoard;\n  var playerOne = _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playerOne,\n      playerTwo = _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playerTwo,\n      checkWinCondition = _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkWinCondition;\n\n  var clickHandler = function clickHandler() {\n    shipsContainer.addEventListener(\"click\", function (e) {\n      var allShips = document.querySelectorAll(\".ship\");\n\n      if (e.target.dataset.type) {\n        allShips.forEach(function (ship) {\n          return ship.setAttribute(\"selected\", \"false\");\n        });\n        e.target.setAttribute(\"selected\", true);\n      }\n    });\n    enemyBoard.addEventListener(\"click\", function (e) {\n      if (e.target.classList.contains(\"square\")) {\n        var _e$target$dataset = e.target.dataset,\n            xCoord = _e$target$dataset.x,\n            yCoord = _e$target$dataset.y;\n        var canBeAttacked = playerTwo.ship.receiveAttack(xCoord, yCoord);\n\n        if (canBeAttacked === \"Hit\") {\n          e.target.classList.add(\"hit\");\n          e.target.classList.remove(\"hide-ship\");\n          _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].computerAttack(); // Computer's turn\n        } else if (canBeAttacked === \"Miss\") {\n          e.target.classList.add(\"miss\");\n          _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].computerAttack(); // Computer's turn\n        }\n\n        checkWinCondition(endGame);\n      }\n    });\n    buttonsContainer.addEventListener(\"click\", function (e) {\n      if (e.target.classList.contains(\"start-btn\")) {\n        var shipCount = playerOne.ship.getAllShips().length;\n\n        if (shipCount >= 17) {\n          startGame();\n          _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createEnemyShips();\n        }\n      }\n\n      if (e.target.classList.contains(\"auto-place\")) {\n        var isShipContainerEmpty = playerOne.ship.getAllShips().length;\n        console.log(isShipContainerEmpty);\n\n        if (!isShipContainerEmpty) {\n          _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createPlayerShips();\n        } else {\n          removeOccupied();\n          playerOne.ship.resetBoard();\n          _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createPlayerShips();\n        }\n\n        removeShipsToDeploy();\n      }\n    });\n    playerBoard.addEventListener(\"click\", function (e) {\n      if (e.target.classList.contains(\"square\")) {\n        var selectedShip = document.querySelector(\"[selected=\\\"\".concat(true, \"\\\"]\"));\n\n        if (selectedShip) {\n          var shipName = selectedShip.dataset.type;\n          var shipLength = selectedShip.childElementCount;\n          var _e$target$dataset2 = e.target.dataset,\n              xCoord = _e$target$dataset2.x,\n              yCoord = _e$target$dataset2.y;\n          console.log(playerOne.ship.board);\n          var isSpaceAvailable = playerOne.ship.checkAvailableSpace(+xCoord - (shipLength - 1), +yCoord, shipName, shipLength);\n\n          if (isSpaceAvailable) {\n            playerOne.ship.placeShip(shipName, [+xCoord - (shipLength - 1), +yCoord]);\n            addOccupied();\n            selectedShip.setAttribute(\"selected\", \"false\");\n            selectedShip.setAttribute(\"hidden\", \"true\");\n          }\n        }\n      }\n    });\n  };\n\n  var hoverHandler = function hoverHandler() {\n    playerBoard.addEventListener(\"mouseover\", function (e) {\n      var selectedShip = document.querySelector(\"[selected=\\\"\".concat(true, \"\\\"]\"));\n      var canHoverOnBoard = false;\n      var shipLength;\n\n      if (selectedShip) {\n        shipLength = selectedShip.childElementCount;\n        canHoverOnBoard = true;\n      }\n\n      if (canHoverOnBoard) {\n        var _e$target$dataset3 = e.target.dataset,\n            xCoord = _e$target$dataset3.x,\n            yCoord = _e$target$dataset3.y;\n        hoverOnBoard(xCoord, yCoord, shipLength);\n        e.target.addEventListener(\"mouseout\", function () {\n          removeHoveredElements();\n        });\n      }\n    });\n  };\n\n  return {\n    hoverHandler: hoverHandler,\n    clickHandler: clickHandler\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventHandler);\n\n//# sourceURL=webpack://battleship/./src/app/eventHandler/eventHandler.js?");

/***/ }),

/***/ "./src/app/factories/ComputerPlayer.js":
/*!*********************************************!*\
  !*** ./src/app/factories/ComputerPlayer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Computer)\n/* harmony export */ });\n/* harmony import */ var _Players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Players */ \"./src/app/factories/Players.js\");\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ \"./src/app/helpers/helpers.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar Computer = /*#__PURE__*/function (_Player) {\n  _inherits(Computer, _Player);\n\n  var _super = _createSuper(Computer);\n\n  function Computer() {\n    var _this;\n\n    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().getRandomName();\n\n    _classCallCheck(this, Computer);\n\n    _this = _super.call(this, name);\n    _this.attackArray = [];\n    return _this;\n  }\n\n  _createClass(Computer, [{\n    key: \"randomAttack\",\n    value: function randomAttack(opponent) {\n      var xCoord = Math.floor(Math.random() * 10);\n      var yCoord = Math.floor(Math.random() * 10);\n      var isSameCoord = this.attackArray.some(function (hits) {\n        return hits.xCoord === xCoord && hits.yCoord === yCoord;\n      });\n\n      if (isSameCoord) {\n        return this.randomAttack(opponent);\n      }\n\n      opponent.receiveAttack(xCoord, yCoord);\n      this.attackArray.push({\n        xCoord: xCoord,\n        yCoord: yCoord\n      });\n      return {\n        xCoord: xCoord,\n        yCoord: yCoord\n      };\n    }\n  }]);\n\n  return Computer;\n}(_Players__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://battleship/./src/app/factories/ComputerPlayer.js?");

/***/ }),

/***/ "./src/app/factories/Gameboard.js":
/*!****************************************!*\
  !*** ./src/app/factories/Gameboard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _Ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ships */ \"./src/app/factories/Ships.js\");\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ \"./src/app/helpers/helpers.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nfunction Gameboard() {\n  var board = Array.from({\n    length: 10\n  }, function () {\n    return Array.from({\n      length: 10\n    }, function () {\n      return \"\";\n    });\n  });\n  var shipsToDeploy = [\"Carrier\", \"Battleship\", \"Cruiser\", \"Submarine\", \"Destroyer\"];\n  var missedHits = [];\n  var successfulHits = [];\n\n  function getMissedHits() {\n    return missedHits;\n  }\n\n  function getAllShips() {\n    var deployedShips = [];\n\n    for (var i = 0; i < board.length; i++) {\n      var row = board[i];\n\n      for (var j = 0; j < row.length; j++) {\n        if (row[j]) {\n          deployedShips.push(row[j]);\n        }\n      }\n    }\n\n    return deployedShips;\n  }\n\n  function checkSunkShip(xCoord, yCoord) {\n    return !board[yCoord][xCoord] ? false : board[yCoord][xCoord].isSunk();\n  }\n\n  function checkAllSunkShip() {\n    return getAllShips().every(function (ship) {\n      return ship.isSunk();\n    });\n  }\n\n  function checkBoardEdges(xCoord, yCoord, type) {\n    var isNegative = xCoord < 0 || yCoord < 0;\n    var isOverBoard = yCoord > 9;\n    var isEdgeOfBoard = isNegative || isOverBoard;\n\n    if (type === \"Carrier\" && xCoord > 5 || isEdgeOfBoard) {\n      return true;\n    }\n\n    if (type === \"Battleship\" && xCoord > 6 || isEdgeOfBoard) {\n      return true;\n    }\n\n    if ((type === \"Cruiser\" || type === \"Submarine\") && xCoord > 7 || isEdgeOfBoard) {\n      return true;\n    }\n\n    return type === \"Destroyer\" && xCoord > 8 || isEdgeOfBoard;\n  }\n\n  function checkAvailableSpace(xCoord, yCoord, type, size) {\n    var isEdgeOfBoard = checkBoardEdges(xCoord, yCoord, type);\n    if (isEdgeOfBoard) return false;\n    var leftOfShip = board[yCoord][xCoord];\n    var rightOfShip = board[yCoord][xCoord + size - 1];\n    return !(leftOfShip || rightOfShip);\n  }\n\n  function occupySpace(xCoord, yCoord, ship, size) {\n    for (var i = 0; i < size; i++) {\n      board[yCoord][xCoord + i] = ship;\n    }\n  }\n\n  function placeShip(type, _ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        xCoord = _ref2[0],\n        yCoord = _ref2[1];\n\n    var getShipInfo = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().shipsInfo[type];\n    var ship = (0,_Ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(getShipInfo);\n    occupySpace(xCoord, yCoord, ship, getShipInfo.size);\n  }\n\n  function isCoordinatesValid(xCoord, yCoord) {\n    return xCoord < 0 || xCoord > 9 || yCoord < 0 || yCoord > 9;\n  }\n\n  function isShipDown(xCoord, yCoord) {\n    return checkSunkShip(xCoord, yCoord);\n  }\n\n  function isSameAttackCoord(xCoord, yCoord) {\n    return successfulHits.some(function (hits) {\n      return hits.xCoord === xCoord && hits.yCoord === yCoord;\n    });\n  }\n\n  function isSameMissedAttackCoord(xCoord, yCoord) {\n    return missedHits.some(function (hits) {\n      return hits.xCoord === xCoord && hits.yCoord === yCoord;\n    });\n  }\n\n  function receiveAttack(xCoord, yCoord) {\n    if (isCoordinatesValid(xCoord, yCoord)) return \"Invalid coordinates\";\n    var coordinatesHasShip = board[yCoord][xCoord];\n    if (isShipDown(xCoord, yCoord)) return false;\n    if (isSameAttackCoord(xCoord, yCoord)) return false;\n    if (isSameMissedAttackCoord(xCoord, yCoord)) return false;\n\n    if (coordinatesHasShip) {\n      var getNonHitLength = board[yCoord][xCoord].getNonHitPositions().length;\n      successfulHits.push({\n        xCoord: xCoord,\n        yCoord: yCoord\n      });\n      board[yCoord][xCoord].hit(getNonHitLength - 1);\n      return \"Hit\";\n    }\n\n    missedHits.push({\n      xCoord: xCoord,\n      yCoord: yCoord\n    });\n    return \"Miss\";\n  }\n\n  function randomizeShipPlacement() {\n    var SHIP_COUNT = 5;\n\n    for (var i = 0; i < SHIP_COUNT; i++) {\n      var randomShip = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().getRandomShip(shipsToDeploy);\n      var randomIndex = Math.floor(Math.random() * (SHIP_COUNT + 1));\n      placeShip(randomShip, [randomIndex, i]);\n    }\n  }\n\n  function randomizeBoard() {\n    for (var i = board.length - 1; i > 0; i--) {\n      var randomIndex = Math.floor(Math.random() * (i + 1));\n      var _ref3 = [board[randomIndex], board[i]];\n      board[i] = _ref3[0];\n      board[randomIndex] = _ref3[1];\n    }\n  }\n\n  function autoPlaceShips() {\n    randomizeShipPlacement();\n    randomizeBoard();\n  }\n\n  function resetBoard() {\n    board = Array.from({\n      length: 10\n    }, function () {\n      return Array.from({\n        length: 10\n      }, function () {\n        return \"\";\n      });\n    });\n    shipsToDeploy = [\"Carrier\", \"Battleship\", \"Cruiser\", \"Submarine\", \"Destroyer\"];\n  }\n\n  return {\n    board: board,\n    getAllShips: getAllShips,\n    placeShip: placeShip,\n    receiveAttack: receiveAttack,\n    getMissedHits: getMissedHits,\n    checkAllSunkShip: checkAllSunkShip,\n    checkAvailableSpace: checkAvailableSpace,\n    checkBoardEdges: checkBoardEdges,\n    autoPlaceShips: autoPlaceShips,\n    resetBoard: resetBoard\n  };\n}\n\n//# sourceURL=webpack://battleship/./src/app/factories/Gameboard.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ helpers)\n/* harmony export */ });\nfunction helpers() {\n  var shipsInfo = {\n    Carrier: {\n      type: \"Carrier\",\n      size: 5\n    },\n    Battleship: {\n      type: \"Battleship\",\n      size: 4\n    },\n    Cruiser: {\n      type: \"Cruiser\",\n      size: 3\n    },\n    Submarine: {\n      type: \"Submarine\",\n      size: 3\n    },\n    Destroyer: {\n      type: \"Destroyer\",\n      size: 2\n    }\n  };\n  var computerNames = [\"Ferdinand Magellan\", \"Bartholomew Roberts\", \"Horatio Nelson\", \"John Rackham\", \"William Kidd\", \"Francis Drake\", \"Christopher Columbus\", \"Edward Teach\", \"Henry Morgan\", \"James Cook\"];\n\n  function addAttributesToSquare(squares, x, y) {\n    squares.classList.add(\"square\");\n    squares.dataset.y = x;\n    squares.dataset.x = y;\n  }\n\n  function getRandomName() {\n    return computerNames[Math.floor(Math.random() * computerNames.length)];\n  }\n\n  function getRandomShip(ship) {\n    var randomShip = ship[Math.floor(Math.random() * ship.length)];\n    return ship.splice(ship.indexOf(randomShip), 1);\n  }\n\n  function createRandomShips(player, playerBoardClass) {\n    player.ship.autoPlaceShips();\n\n    if (playerBoardClass === \"player-board\") {\n      for (var i = 0; i < player.ship.board.length; i++) {\n        var row = player.ship.board[i];\n\n        for (var j = 0; j < row.length; j++) {\n          var playerBoard = document.querySelector(\".\".concat(playerBoardClass, \" > .game-board .square[data-y=\\\"\").concat(i, \"\\\"][data-x=\\\"\").concat(j, \"\\\"]\"));\n\n          if (row[j]) {\n            playerBoard.classList.add(\"occupied\");\n          }\n        }\n      }\n    }\n  }\n\n  return {\n    shipsInfo: shipsInfo,\n    getRandomShip: getRandomShip,\n    getRandomName: getRandomName,\n    addAttributesToSquare: addAttributesToSquare,\n    createRandomShips: createRandomShips\n  };\n}\n\n//# sourceURL=webpack://battleship/./src/app/helpers/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _app_dom_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/dom/dom */ \"./src/app/dom/dom.js\");\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ \"./src/app/app.js\");\n/* harmony import */ var _app_eventHandler_eventHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/eventHandler/eventHandler */ \"./src/app/eventHandler/eventHandler.js\");\n\n\n\n\n_app_eventHandler_eventHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].clickHandler();\n_app_eventHandler_eventHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hoverHandler();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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