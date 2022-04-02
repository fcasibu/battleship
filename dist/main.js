(()=>{"use strict";function e(){var e=["Ferdinand Magellan","Bartholomew Roberts","Horatio Nelson","John Rackham","William Kidd","Francis Drake","Christopher Columbus","Edward Teach","Henry Morgan","James Cook"];return{shipsInfo:{Carrier:{type:"Carrier",size:5},Battleship:{type:"Battleship",size:4},Cruiser:{type:"Cruiser",size:3},Submarine:{type:"Submarine",size:3},Destroyer:{type:"Destroyer",size:2}},getRandomShip:function(e){var t=e[Math.floor(Math.random()*e.length)];return e.splice(e.indexOf(t),1)},getRandomName:function(){return e[Math.floor(Math.random()*e.length)]},addAttributesToSquare:function(e,t,r){e.classList.add("square"),e.dataset.y=t,e.dataset.x=r},createRandomShips:function(e,t){if(e.ship.autoPlaceShips(),"player-board"===t)for(var r=0;r<e.ship.getBoard().length;r++)for(var n=e.ship.getBoard()[r],o=0;o<n.length;o++){var a=document.querySelector(".".concat(t,' > .game-board .square[data-y="').concat(r,'"][data-x="').concat(o,'"]'));n[o]&&a.classList.add("occupied")}}}}function t(){var t=document.createElement("div"),r=document.createElement("div"),n=document.createElement("div");r.classList.add("y-coordinates"),n.classList.add("x-coordinates"),t.classList.add("game-board");for(var o=0;o<10;o++){var a=document.createElement("div"),i=document.createElement("div");a.classList.add("y-coordinate"),i.classList.add("x-coordinate"),a.textContent=o,i.textContent=o,r.appendChild(a),n.appendChild(i),t.prepend(r),t.prepend(n);for(var c=0;c<10;c++){var u=document.createElement("div");e().addAttributesToSquare(u,o,c),t.appendChild(u)}}return t}function r(e,t){for(var r=0;r<e;r++){var n=document.createElement("div");n.classList.add("ship-square"),t.appendChild(n)}}var n=function(){!function(){var e,n,o,a,i,c=document.querySelector(".player-board"),u=document.querySelector(".enemy-board"),s=t(),d=t();d.classList.add("hide-board"),c.appendChild(s),u.appendChild(d),e=document.querySelector(".carrier"),n=document.querySelector(".battleship"),o=document.querySelector(".cruiser"),a=document.querySelector(".submarine"),i=document.querySelector(".destroyer"),r(5,e),r(4,n),r(3,o),r(3,a),r(2,i);for(var l=document.querySelectorAll(".square"),f=0;f<100;f++)l[f].setAttribute("data-index",f)}();var e=document.querySelector(".options"),n=document.querySelector(".ships-container"),o=document.querySelector(".player-board > .game-board"),a=document.querySelector(".enemy-board > .game-board"),i=document.querySelector(".buttons"),c=document.querySelectorAll(".ships");return c.forEach((function(e){return e.classList.add("hide-options")})),{shipsContainer:n,buttonsContainer:i,playerBoard:o,enemyBoard:a,playersShips:c,removeShipsToDeploy:function(){document.querySelectorAll('[selected="false"').forEach((function(e){return e.setAttribute("hidden",!0)}))},removeOccupied:function(){document.querySelectorAll(".occupied").forEach((function(e){return e.classList.remove("occupied")}))},removeHoveredElements:function(){document.querySelectorAll(".hovered").forEach((function(e){return e.classList.remove("hovered")}))},addOccupied:function(){document.querySelectorAll(".hovered").forEach((function(e){return e.classList.add("occupied")}))},startGame:function(){e.classList.add("hide-options"),a.classList.remove("hide-board"),o.classList.add("game-start"),c.forEach((function(e){return e.classList.remove("hide-options")}))},endGame:function(){a.style.opacity=.5,a.style.pointerEvents="none"},hoverOnBoard:function(e,t,r){for(var n=0;n<e;n++){var o=document.querySelector('[data-x="'.concat(t-n,'"][data-y="').concat(r,'"]'));o&&!o.classList.contains("occupied")&&o.classList.add("hovered")}}}}();const o=n;function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(){var t=Array.from({length:10},(function(){return Array.from({length:10},(function(){return""}))})),r=["Carrier","Battleship","Cruiser","Submarine","Destroyer"],n=[],o=[];function i(){for(var e=[],r=0;r<t.length;r++)for(var n=t[r],o=0;o<n.length;o++)n[o]&&e.push(n[o]);return e}function c(e,t,r){var n=t<0||r<0||r>9;return!!("Carrier"===e&&t>5||n||"Battleship"===e&&t>6||n||("Cruiser"===e||"Submarine"===e)&&t>7||n||"Destroyer"===e&&t>8||n)}function u(r,n){var o,i,u=(i=2,function(e){if(Array.isArray(e))return e}(o=n)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(o,i)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=u[0],d=u[1],l=e().shipsInfo[r],f=function(e){var t=e.size,r=e.type,n=Array.from({length:t},(function(){return""}));return{getShip:function(){return n},getNonHitPositions:function(){return n.filter((function(e){return"hit"!==e}))},isSunk:function(){return n.every((function(e){return"hit"===e}))},hit:function(e){n.splice(e,1,"hit")},size:t,type:r}}(l);if(c(r,s,d))return!1;var p=function(e,r,n,o){for(var a=0;a<o;a++){if(t[r][e+a]||t[r][e-1+o])return console.log(e+a),!0;t[r][e+a]=n}return!1}(s,d,f,l.size);return!p}return{getBoard:function(){return t},getAllShips:i,placeShip:u,receiveAttack:function(e,r){if(function(e,t){return e<0||e>9||t<0||t>9}(e,r))return"Invalid coordinates";var a=t[r][e];if(function(e,r){return function(e,r){return!!t[r][e]&&t[r][e].isSunk()}(e,r)}(e,r))return!1;if(function(e,t){return o.some((function(r){return r.xCoord===e&&r.yCoord===t}))}(e,r))return!1;if(function(e,t){return n.some((function(r){return r.xCoord===e&&r.yCoord===t}))}(e,r))return!1;if(a){var i=t[r][e].getNonHitPositions().length;return o.push({xCoord:e,yCoord:r}),t[r][e].hit(i-1),"Hit"}return n.push({xCoord:e,yCoord:r}),"Miss"},getMissedHits:function(){return n},checkAllSunkShip:function(){return i().every((function(e){return e.isSunk()}))},checkBoardEdges:c,autoPlaceShips:function(){!function(){for(var t=0;t<5;t++)u(e().getRandomShip(r),[Math.floor(6*Math.random()),t])}(),function(){for(var e=t.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),n=[t[r],t[e]];t[e]=n[0],t[r]=n[1]}}()},resetBoard:function(){t=Array.from({length:10},(function(){return Array.from({length:10},(function(){return""}))})),r=["Carrier","Battleship","Cruiser","Submarine","Destroyer"]}}}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var s=u((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.ship=i()}));function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var m,v,b,S,g=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(c,t);var r,n,o,a,i=(o=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(o);if(a){var r=y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return h(this,e)});function c(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e().getRandomName();return l(this,c),(t=i.call(this,r)).attackArray=[],t}return r=c,(n=[{key:"randomAttack",value:function(e){var t=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());return this.attackArray.some((function(e){return e.xCoord===t&&e.yCoord===r}))?this.randomAttack(e):(e.receiveAttack(t,r),this.attackArray.push({xCoord:t,yCoord:r}),{xCoord:t,yCoord:r})}}])&&f(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),c}(s);const C=(m=e().createRandomShips,v=new s(void 0),b=new g,S=document.querySelectorAll(".player-board > .game-board > .square"),{playerOne:v,playerTwo:b,playerBoard:S,computerAttack:function(){for(var e=b.randomAttack(v.ship),t=e.xCoord,r=e.yCoord,n=0;n<S.length;n++){var o=document.querySelector('[data-x="'.concat(t,'"][data-y="').concat(r,'"]'));o.classList.contains("occupied")?o.classList.add("hit"):o.classList.add("miss")}return{xCoord:t,yCoord:r}},createEnemyShips:function(){m(b,"enemy-board")},createPlayerShips:function(){m(v,"player-board")},checkWinCondition:function(e){var t=b.ship.checkAllSunkShip(),r=v.ship.checkAllSunkShip();t&&e(),r&&e()}});var A=function(){var e=o.shipsContainer,t=o.buttonsContainer,r=o.playerBoard,n=o.enemyBoard,a=o.removeShipsToDeploy,i=o.removeOccupied,c=o.removeHoveredElements,u=o.addOccupied,s=o.startGame,d=o.endGame,l=o.hoverOnBoard,f=C.playerOne,p=C.playerTwo,h=C.checkWinCondition;return{dragHandler:function(){r.addEventListener("mouseover",(function(e){var t,r,n=document.querySelector('[selected="'.concat(!0,'"]')),o=!1;if(n&&(r=n.dataset.type,t=n.childElementCount,o=!0),o){var a=e.target.dataset,i=a.x,s=a.y;l(t,i,s),e.target.addEventListener("mouseout",(function(){c()})),e.target.addEventListener("click",(function(){f.ship.placeShip(r,[+i-(t-1),+s])&&(n.setAttribute("selected",!1),n.setAttribute("hidden",!0),u())}))}}))},clickHandler:function(){e.addEventListener("click",(function(e){var t=document.querySelectorAll(".ship");e.target.dataset.type&&(t.forEach((function(e){return e.setAttribute("selected",!1)})),e.target.setAttribute("selected",!0))})),n.addEventListener("click",(function(e){if(e.target.classList.contains("square")){var t=e.target.dataset,r=t.x,n=t.y,o=p.ship.receiveAttack(r,n);"Hit"===o?(e.target.classList.add("hit"),e.target.classList.remove("hide-ship"),C.computerAttack()):"Miss"===o&&(e.target.classList.add("miss"),C.computerAttack()),h(d)}})),t.addEventListener("click",(function(e){e.target.classList.contains("start-btn")&&f.ship.getAllShips().length>=17&&(s(),C.createEnemyShips()),e.target.classList.contains("auto-place")&&(f.ship.getAllShips().length?(i(),f.ship.resetBoard(),C.createPlayerShips()):C.createPlayerShips(),a())}))}}}();const k=A;k.clickHandler(),k.dragHandler()})();