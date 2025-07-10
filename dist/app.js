/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'animejs/lib/anime.es.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


document.addEventListener('DOMContentLoaded', () => {
  console.log('ページが読み込まれました');

  const form = document.getElementById('basic_form');

  // アニメーション用ボタンを追加
  const animBtn = document.createElement('button');
  animBtn.textContent = 'フォームをアニメーション表示';
  animBtn.style.display = 'block';
  animBtn.style.margin = '20px auto';
  document.body.insertBefore(animBtn, form);

  // ボタンをクリックしたときにアニメーション
  animBtn.addEventListener('click', () => {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'animejs/lib/anime.es.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      targets: '#basic_form',
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutElastic(1, .6)',
    });
  });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7OztBQ040Qzs7QUFFNUM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksc0pBQUs7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvdWRjb25wdXRpbmdfMnEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2xvdWRjb25wdXRpbmdfMnEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbG91ZGNvbnB1dGluZ18ycS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzL2xpYi9hbmltZS5lcy5qcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCfjg5rjg7zjgrjjgYzoqq3jgb/ovrzjgb7jgozjgb7jgZfjgZ8nKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2ljX2Zvcm0nKTtcblxuICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PnlKjjg5zjgr/jg7PjgpLov73liqBcbiAgY29uc3QgYW5pbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhbmltQnRuLnRleHRDb250ZW50ID0gJ+ODleOCqeODvOODoOOCkuOCouODi+ODoeODvOOCt+ODp+ODs+ihqOekuic7XG4gIGFuaW1CdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGFuaW1CdG4uc3R5bGUubWFyZ2luID0gJzIwcHggYXV0byc7XG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGFuaW1CdG4sIGZvcm0pO1xuXG4gIC8vIOODnOOCv+ODs+OCkuOCr+ODquODg+OCr+OBl+OBn+OBqOOBjeOBq+OCouODi+ODoeODvOOCt+ODp+ODs1xuICBhbmltQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFuaW1lKHtcbiAgICAgIHRhcmdldHM6ICcjYmFzaWNfZm9ybScsXG4gICAgICBzY2FsZTogWzAuOCwgMV0sXG4gICAgICBvcGFjaXR5OiBbMCwgMV0sXG4gICAgICBkdXJhdGlvbjogMTIwMCxcbiAgICAgIGVhc2luZzogJ2Vhc2VPdXRFbGFzdGljKDEsIC42KScsXG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=