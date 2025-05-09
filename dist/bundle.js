/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/validator.ts":
/*!*****************************!*\
  !*** ./src/ts/validator.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Validator {
}
exports["default"] = Validator;


/***/ }),

/***/ "./src/ts/validators/SouthAfrica.ts":
/*!******************************************!*\
  !*** ./src/ts/validators/SouthAfrica.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const validator_1 = __webpack_require__(/*! ../validator */ "./src/ts/validator.ts");
class ZAValidator extends validator_1.default {
    validate(idNumber) {
        let oddCheck = 0;
        let evenResultAdd = 0;
        for (let i = 0; i < 12; i += 2) {
            oddCheck += parseInt(idNumber[i]);
        }
        let evenCheckString = "";
        for (let i = 1; i < 12; i += 2) {
            evenCheckString += idNumber[i];
        }
        let evenCheckNum = parseInt(evenCheckString) * 2;
        evenCheckNum
            .toString()
            .split("")
            .forEach((digit) => (evenResultAdd += parseInt(digit)));
        let addChecks = oddCheck + evenResultAdd;
        let lastDigitCheck = 10 - (addChecks % 10);
        if (lastDigitCheck >= 10) {
            lastDigitCheck %= 10;
        }
        return lastDigitCheck === parseInt(idNumber[12]);
    }
}
exports["default"] = ZAValidator;


/***/ }),

/***/ "./src/ts/validators/Test.ts":
/*!***********************************!*\
  !*** ./src/ts/validators/Test.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const validator_1 = __webpack_require__(/*! ../validator */ "./src/ts/validator.ts");
class TestValidator extends validator_1.default {
    validate(idNumber) {
        console.log(idNumber, " is valid");
        return true;
    }
}
exports["default"] = TestValidator;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Test_1 = __webpack_require__(/*! ./validators/Test */ "./src/ts/validators/Test.ts");
const SouthAfrica_1 = __webpack_require__(/*! ./validators/SouthAfrica */ "./src/ts/validators/SouthAfrica.ts");
function isValid(idNumber, countryCode) {
    const validator = getValidator(countryCode);
    const result = validator.validate(idNumber);
    return result;
}
function getValidator(countryCode) {
    switch (countryCode) {
        case "ZA":
            return new SouthAfrica_1.default();
        default:
            return new Test_1.default();
    }
}
// This exposes the function to the window of the browser so it's easily accessed
window["isValid"] = isValid;
// Don't know if it's best practice but we ball

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE1BQThCLFNBQVM7Q0FFdEM7QUFGRCwrQkFFQzs7Ozs7Ozs7Ozs7OztBQ0ZELHFGQUFxQztBQUVyQyxNQUFxQixXQUFZLFNBQVEsbUJBQVM7SUFDaEQsUUFBUSxDQUFDLFFBQWdCO1FBQ3ZCLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFFdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDL0IsUUFBUSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBRUQsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQy9CLGVBQWUsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVELElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsWUFBWTthQUNULFFBQVEsRUFBRTthQUNWLEtBQUssQ0FBQyxFQUFFLENBQUM7YUFDVCxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsYUFBYSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUQsSUFBSSxTQUFTLEdBQUcsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUV6QyxJQUFJLGNBQWMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFM0MsSUFBSSxjQUFjLElBQUksRUFBRSxFQUFFLENBQUM7WUFDekIsY0FBYyxJQUFJLEVBQUUsQ0FBQztRQUN2QixDQUFDO1FBRUQsT0FBTyxjQUFjLEtBQUssUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRjtBQTlCRCxpQ0E4QkM7Ozs7Ozs7Ozs7Ozs7QUNoQ0QscUZBQXFDO0FBRXJDLE1BQXFCLGFBQWMsU0FBUSxtQkFBUztJQUNsRCxRQUFRLENBQUMsUUFBZ0I7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7QUFMRCxtQ0FLQzs7Ozs7OztVQ1BEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3JCQSwyRkFBOEM7QUFDOUMsZ0hBQW1EO0FBRW5ELFNBQVMsT0FBTyxDQUFDLFFBQWdCLEVBQUUsV0FBbUI7SUFDcEQsTUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLFdBQW1CO0lBQ3ZDLFFBQVEsV0FBVyxFQUFFLENBQUM7UUFDcEIsS0FBSyxJQUFJO1lBQ1AsT0FBTyxJQUFJLHFCQUFXLEVBQUUsQ0FBQztRQUUzQjtZQUNFLE9BQU8sSUFBSSxjQUFhLEVBQUUsQ0FBQztJQUMvQixDQUFDO0FBQ0gsQ0FBQztBQUVELGlGQUFpRjtBQUNqRixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQzVCLCtDQUErQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90cy92YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3ZhbGlkYXRvcnMvU291dGhBZnJpY2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3ZhbGlkYXRvcnMvVGVzdC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFZhbGlkYXRvciB7XHJcbiAgYWJzdHJhY3QgdmFsaWRhdGUoaWROdW1iZXI6IHN0cmluZyk6IGJvb2xlYW47XHJcbn1cclxuIiwiaW1wb3J0IFZhbGlkYXRvciBmcm9tIFwiLi4vdmFsaWRhdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBaQVZhbGlkYXRvciBleHRlbmRzIFZhbGlkYXRvciB7XHJcbiAgdmFsaWRhdGUoaWROdW1iZXI6IHN0cmluZykge1xyXG4gICAgbGV0IG9kZENoZWNrID0gMDtcclxuICAgIGxldCBldmVuUmVzdWx0QWRkID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpICs9IDIpIHtcclxuICAgICAgb2RkQ2hlY2sgKz0gcGFyc2VJbnQoaWROdW1iZXJbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBldmVuQ2hlY2tTdHJpbmcgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMjsgaSArPSAyKSB7XHJcbiAgICAgIGV2ZW5DaGVja1N0cmluZyArPSBpZE51bWJlcltpXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZXZlbkNoZWNrTnVtID0gcGFyc2VJbnQoZXZlbkNoZWNrU3RyaW5nKSAqIDI7XHJcbiAgICBldmVuQ2hlY2tOdW1cclxuICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgLnNwbGl0KFwiXCIpXHJcbiAgICAgIC5mb3JFYWNoKChkaWdpdCkgPT4gKGV2ZW5SZXN1bHRBZGQgKz0gcGFyc2VJbnQoZGlnaXQpKSk7XHJcblxyXG4gICAgbGV0IGFkZENoZWNrcyA9IG9kZENoZWNrICsgZXZlblJlc3VsdEFkZDtcclxuXHJcbiAgICBsZXQgbGFzdERpZ2l0Q2hlY2sgPSAxMCAtIChhZGRDaGVja3MgJSAxMCk7XHJcblxyXG4gICAgaWYgKGxhc3REaWdpdENoZWNrID49IDEwKSB7XHJcbiAgICAgIGxhc3REaWdpdENoZWNrICU9IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsYXN0RGlnaXRDaGVjayA9PT0gcGFyc2VJbnQoaWROdW1iZXJbMTJdKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFZhbGlkYXRvciBmcm9tIFwiLi4vdmFsaWRhdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0VmFsaWRhdG9yIGV4dGVuZHMgVmFsaWRhdG9yIHtcclxuICB2YWxpZGF0ZShpZE51bWJlcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZE51bWJlciwgXCIgaXMgdmFsaWRcIik7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCBWYWxpZGF0b3IgZnJvbSBcIi4vdmFsaWRhdG9yXCI7XHJcbmltcG9ydCBUZXN0VmFsaWRhdG9yIGZyb20gXCIuL3ZhbGlkYXRvcnMvVGVzdFwiO1xyXG5pbXBvcnQgWkFWYWxpZGF0b3IgZnJvbSBcIi4vdmFsaWRhdG9ycy9Tb3V0aEFmcmljYVwiO1xyXG5cclxuZnVuY3Rpb24gaXNWYWxpZChpZE51bWJlcjogc3RyaW5nLCBjb3VudHJ5Q29kZTogc3RyaW5nKSB7XHJcbiAgY29uc3QgdmFsaWRhdG9yID0gZ2V0VmFsaWRhdG9yKGNvdW50cnlDb2RlKTtcclxuICBjb25zdCByZXN1bHQgPSB2YWxpZGF0b3IudmFsaWRhdGUoaWROdW1iZXIpO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbGlkYXRvcihjb3VudHJ5Q29kZTogc3RyaW5nKTogVmFsaWRhdG9yIHtcclxuICBzd2l0Y2ggKGNvdW50cnlDb2RlKSB7XHJcbiAgICBjYXNlIFwiWkFcIjpcclxuICAgICAgcmV0dXJuIG5ldyBaQVZhbGlkYXRvcigpO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBuZXcgVGVzdFZhbGlkYXRvcigpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gVGhpcyBleHBvc2VzIHRoZSBmdW5jdGlvbiB0byB0aGUgd2luZG93IG9mIHRoZSBicm93c2VyIHNvIGl0J3MgZWFzaWx5IGFjY2Vzc2VkXHJcbndpbmRvd1tcImlzVmFsaWRcIl0gPSBpc1ZhbGlkO1xyXG4vLyBEb24ndCBrbm93IGlmIGl0J3MgYmVzdCBwcmFjdGljZSBidXQgd2UgYmFsbFxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=