/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/registration.js":
/*!**************************************!*\
  !*** ./resources/js/registration.js ***!
  \**************************************/
/***/ (() => {

eval("var firstForm = document.getElementById(\"first-form\");\nvar secondForm = document.getElementById(\"second-form\");\nvar nextbtn = document.getElementById(\"nextbtn\");\nvar previousbtn = document.getElementById(\"previousbtn\");\nvar submitbtn = document.getElementById(\"submitbtn\");\nwindow.next = function next() {\n  //First form input values\n  var username = document.forms['firstForm']['username'].value;\n  var email = document.forms['firstForm']['email'].value;\n  var password = document.forms['firstForm']['password'].value;\n  var password_confirmation = document.forms['firstForm']['password_confirmation'].value;\n\n  //Check if all of thee input fields have value\n  if (username != '' && email != '' && password != '' && password_confirmation != '') {\n    //Hide first form (username, password and email)\n    firstForm.style.display = 'none';\n\n    //Hide next button, show submit button and show previous button\n    nextbtn.style.display = 'none'; //Hide next button\n    submitbtn.style.display = null; //Display submit button\n    previousbtn.style.display = null; //Display previous button\n\n    //Show Second form (tags)\n    secondForm.style.display = null;\n  }\n};\nwindow.previous = function previous() {\n  //Show first form (username, password and email)\n  firstForm.style.display = null;\n\n  //Show next button, hide submit button and hide previous button\n  nextbtn.style.display = null; //Show next button\n  submitbtn.style.display = 'none'; //Hide submit button\n  previousbtn.style.display = 'none'; //Hide previous button\n\n  //Hide Second form (tags)\n  secondForm.style.display = 'none';\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcmVnaXN0cmF0aW9uLmpzLmpzIiwibmFtZXMiOlsiZmlyc3RGb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlY29uZEZvcm0iLCJuZXh0YnRuIiwicHJldmlvdXNidG4iLCJzdWJtaXRidG4iLCJ3aW5kb3ciLCJuZXh0IiwidXNlcm5hbWUiLCJmb3JtcyIsInZhbHVlIiwiZW1haWwiLCJwYXNzd29yZCIsInBhc3N3b3JkX2NvbmZpcm1hdGlvbiIsInN0eWxlIiwiZGlzcGxheSIsInByZXZpb3VzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcmVnaXN0cmF0aW9uLmpzP2YxNzMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmlyc3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXJzdC1mb3JtXCIpO1xuY29uc3Qgc2Vjb25kRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Vjb25kLWZvcm1cIik7XG5jb25zdCBuZXh0YnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0YnRuXCIpO1xuY29uc3QgcHJldmlvdXNidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZpb3VzYnRuXCIpO1xuY29uc3Qgc3VibWl0YnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRidG5cIik7XG5cbndpbmRvdy5uZXh0ID0gZnVuY3Rpb24gbmV4dCgpXG57XG4gICAgLy9GaXJzdCBmb3JtIGlucHV0IHZhbHVlc1xuICAgIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuZm9ybXNbJ2ZpcnN0Rm9ybSddWyd1c2VybmFtZSddLnZhbHVlO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZm9ybXNbJ2ZpcnN0Rm9ybSddWydlbWFpbCddLnZhbHVlO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQuZm9ybXNbJ2ZpcnN0Rm9ybSddWydwYXNzd29yZCddLnZhbHVlO1xuICAgIGNvbnN0IHBhc3N3b3JkX2NvbmZpcm1hdGlvbiA9IGRvY3VtZW50LmZvcm1zWydmaXJzdEZvcm0nXVsncGFzc3dvcmRfY29uZmlybWF0aW9uJ10udmFsdWU7XG5cbiAgICAvL0NoZWNrIGlmIGFsbCBvZiB0aGVlIGlucHV0IGZpZWxkcyBoYXZlIHZhbHVlXG4gICAgaWYgKHVzZXJuYW1lICE9ICcnICYmIGVtYWlsICE9ICcnICYmIHBhc3N3b3JkICE9ICcnICYmIHBhc3N3b3JkX2NvbmZpcm1hdGlvbiAhPSAnJylcbiAgICB7XG4gICAgICAgIC8vSGlkZSBmaXJzdCBmb3JtICh1c2VybmFtZSwgcGFzc3dvcmQgYW5kIGVtYWlsKVxuICAgICAgICBmaXJzdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAvL0hpZGUgbmV4dCBidXR0b24sIHNob3cgc3VibWl0IGJ1dHRvbiBhbmQgc2hvdyBwcmV2aW91cyBidXR0b25cbiAgICAgICAgbmV4dGJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvL0hpZGUgbmV4dCBidXR0b25cbiAgICAgICAgc3VibWl0YnRuLnN0eWxlLmRpc3BsYXkgPSBudWxsOyAvL0Rpc3BsYXkgc3VibWl0IGJ1dHRvblxuICAgICAgICBwcmV2aW91c2J0bi5zdHlsZS5kaXNwbGF5ID0gbnVsbDsgLy9EaXNwbGF5IHByZXZpb3VzIGJ1dHRvblxuXG4gICAgICAgIC8vU2hvdyBTZWNvbmQgZm9ybSAodGFncylcbiAgICAgICAgc2Vjb25kRm9ybS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICB9XG59XG5cbndpbmRvdy5wcmV2aW91cyA9IGZ1bmN0aW9uIHByZXZpb3VzKClcbntcbiAgICAvL1Nob3cgZmlyc3QgZm9ybSAodXNlcm5hbWUsIHBhc3N3b3JkIGFuZCBlbWFpbClcbiAgICBmaXJzdEZvcm0uc3R5bGUuZGlzcGxheSA9IG51bGw7XG5cbiAgICAvL1Nob3cgbmV4dCBidXR0b24sIGhpZGUgc3VibWl0IGJ1dHRvbiBhbmQgaGlkZSBwcmV2aW91cyBidXR0b25cbiAgICBuZXh0YnRuLnN0eWxlLmRpc3BsYXkgPSBudWxsOyAvL1Nob3cgbmV4dCBidXR0b25cbiAgICBzdWJtaXRidG4uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy9IaWRlIHN1Ym1pdCBidXR0b25cbiAgICBwcmV2aW91c2J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvL0hpZGUgcHJldmlvdXMgYnV0dG9uXG5cbiAgICAvL0hpZGUgU2Vjb25kIGZvcm0gKHRhZ3MpXG4gICAgc2Vjb25kRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQztBQUN2RCxJQUFNQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQztBQUN6RCxJQUFNRSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQztBQUNsRCxJQUFNRyxXQUFXLEdBQUdKLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQztBQUMxRCxJQUFNSSxTQUFTLEdBQUdMLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQztBQUV0REssTUFBTSxDQUFDQyxJQUFJLEdBQUcsU0FBU0EsSUFBSSxHQUMzQjtFQUNJO0VBQ0EsSUFBTUMsUUFBUSxHQUFHUixRQUFRLENBQUNTLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsS0FBSztFQUM5RCxJQUFNQyxLQUFLLEdBQUdYLFFBQVEsQ0FBQ1MsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxLQUFLO0VBQ3hELElBQU1FLFFBQVEsR0FBR1osUUFBUSxDQUFDUyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUNDLEtBQUs7RUFDOUQsSUFBTUcscUJBQXFCLEdBQUdiLFFBQVEsQ0FBQ1MsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNDLEtBQUs7O0VBRXhGO0VBQ0EsSUFBSUYsUUFBUSxJQUFJLEVBQUUsSUFBSUcsS0FBSyxJQUFJLEVBQUUsSUFBSUMsUUFBUSxJQUFJLEVBQUUsSUFBSUMscUJBQXFCLElBQUksRUFBRSxFQUNsRjtJQUNJO0lBQ0FkLFNBQVMsQ0FBQ2UsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTs7SUFFaEM7SUFDQVosT0FBTyxDQUFDVyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNoQ1YsU0FBUyxDQUFDUyxLQUFLLENBQUNDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNoQ1gsV0FBVyxDQUFDVSxLQUFLLENBQUNDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQzs7SUFFbEM7SUFDQWIsVUFBVSxDQUFDWSxLQUFLLENBQUNDLE9BQU8sR0FBRyxJQUFJO0VBQ25DO0FBQ0osQ0FBQztBQUVEVCxNQUFNLENBQUNVLFFBQVEsR0FBRyxTQUFTQSxRQUFRLEdBQ25DO0VBQ0k7RUFDQWpCLFNBQVMsQ0FBQ2UsS0FBSyxDQUFDQyxPQUFPLEdBQUcsSUFBSTs7RUFFOUI7RUFDQVosT0FBTyxDQUFDVyxLQUFLLENBQUNDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQztFQUM5QlYsU0FBUyxDQUFDUyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQztFQUNsQ1gsV0FBVyxDQUFDVSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQzs7RUFFcEM7RUFDQWIsVUFBVSxDQUFDWSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0FBQ3JDLENBQUMifQ==\n//# sourceURL=webpack-internal:///./resources/js/registration.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/registration.js"]();
/******/ 	
/******/ })()
;