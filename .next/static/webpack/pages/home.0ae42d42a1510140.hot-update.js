"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_91946_Desktop_Project_1_user_authentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_91946_Desktop_Project_1_user_authentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_91946_Desktop_Project_1_user_authentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n// import React from 'react';\n// const Home = () => {\n//   // Handle form submission\n//   const handleSubmit = async (event) => {\n//     // Prevent the default form submission behavior\n//     event.preventDefault();\n//     // Access the form elements and their values\n//     const form = event.target;\n//     const elements = form.elements;\n//     const name = elements.name.value;\n//     const email = elements.email.value;\n//     const phone = elements.phone.value;\n//     const branch = elements.branch.value;\n//     const rollNo = elements.rollNo.value;\n//     const cgpa = elements.cgpa.value;\n//     // Send a POST request to the server with the form data\n//     const data = { name, email, phone, branch, rollNo, cgpa };\n//     const options = {\n//       method: 'POST',\n//       headers: { 'Content-Type': 'application/json' },\n//       body: JSON.stringify(data),\n//     };\n//     const response = await fetch('/api/submit', options);\n//     const result = await response.json();\n//     console.log(result);\n//   };\n//   // Render the form\n//   return (\n//     <form onSubmit={handleSubmit}>\n//       {/* Render the form fields */}\n//       <div>\n//         <label>Name:</label>\n//         <input type=\"text\" name=\"name\" />\n//       </div>\n//       <div>\n//         <label>Email:</label>\n//         <input type=\"email\" name=\"email\" />\n//       </div>\n//       <div>\n//         <label>Phone:</label>\n//         <input type=\"text\" name=\"phone\" />\n//       </div>\n//       <div>\n//         <label>Branch:</label>\n//         <input type=\"text\" name=\"branch\" />\n//       </div>\n//       <div>\n//         <label>Roll No:</label>\n//         <input type=\"text\" name=\"rollNo\" />\n//       </div>\n//       <div>\n//         <label>CGPA:</label>\n//         <input type=\"text\" name=\"cgpa\" />\n//       </div>\n//       <div>\n//         {/* Render the submit button for the form */}\n//         <input type=\"submit\" value=\"Submit\" />\n//       </div>\n//     </form>\n//   );\n// };\n// export default Home;\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    // Declare a state variable to store the form submission status\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), formSubmitted = ref[0], setFormSubmitted = ref[1];\n    // Handle form submission\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(C_Users_91946_Desktop_Project_1_user_authentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var form, elements, name, email, phone, branch, rollNo, cgpa, data, options, response, result;\n            return C_Users_91946_Desktop_Project_1_user_authentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        // Prevent the default form submission behavior\n                        event.preventDefault();\n                        form = event.target;\n                        elements = form.elements;\n                        name = elements.name.value;\n                        email = elements.email.value;\n                        phone = elements.phone.value;\n                        branch = elements.branch.value;\n                        rollNo = elements.rollNo.value;\n                        cgpa = elements.cgpa.value;\n                        data = {\n                            name: name,\n                            email: email,\n                            phone: phone,\n                            branch: branch,\n                            rollNo: rollNo,\n                            cgpa: cgpa\n                        };\n                        options = {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify(data)\n                        };\n                        _ctx.next = 13;\n                        return fetch(\"/api/submit\", options);\n                    case 13:\n                        response = _ctx.sent;\n                        _ctx.next = 16;\n                        return response.json();\n                    case 16:\n                        result = _ctx.sent;\n                        console.log(result);\n                        // Set the form submission status to true\n                        setFormSubmitted(true);\n                    case 19:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Render the form\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"Name:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"Email:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        name: \"email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"Phone:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"phone\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"Branch:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"branch\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"Roll No:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"rollNo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"CGPA:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"cgpa\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    type: \"submit\",\n                    value: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                    lineNumber: 136,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, _this),\n            formSubmitted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: \"Form submitted!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n                lineNumber: 139,\n                columnNumber: 25\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\home.js\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHOztrQ0FDRiw4REFBQ0MsT0FBSztrQ0FBQyxTQUFPOzs7Ozs2QkFBUTtrQ0FDdEIsOERBQUNDLE9BQUs7d0JBQUNDLElBQUksRUFBQyxNQUFNO3dCQUFDMUIsSUFBSSxFQUFDLFFBQVE7Ozs7OzZCQUFHOzs7Ozs7cUJBQy9COzBCQUNOLDhEQUFDdUIsS0FBRzs7a0NBQ0YsOERBQUNDLE9BQUs7a0NBQUMsVUFBUTs7Ozs7NkJBQVE7a0NBQ3ZCLDhEQUFDQyxPQUFLO3dCQUFDQyxJQUFJLEVBQUMsTUFBTTt3QkFBQzFCLElBQUksRUFBQyxRQUFROzs7Ozs2QkFBRzs7Ozs7O3FCQUMvQjswQkFDTiw4REFBQ3VCLEtBQUc7O2tDQUNGLDhEQUFDQyxPQUFLO2tDQUFDLE9BQUs7Ozs7OzZCQUFRO2tDQUNwQiw4REFBQ0MsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07d0JBQUMxQixJQUFJLEVBQUMsTUFBTTs7Ozs7NkJBQUc7Ozs7OztxQkFDN0I7MEJBQ04sOERBQUN1QixLQUFHOzBCQUVGLDRFQUFDRSxPQUFLO29CQUFDQyxJQUFJLEVBQUMsUUFBUTtvQkFBQ2QsS0FBSyxFQUFDLFFBQVE7Ozs7O3lCQUFHOzs7OztxQkFDbEM7WUFFTGxCLGFBQWEsa0JBQUksOERBQUM2QixLQUFHOzBCQUFDLGlCQUFlOzs7OztxQkFBTTs7Ozs7O2FBQ3ZDLENBQ1A7Q0FDSDtHQXRFSzlCLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQXdFViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUuanM/MTY3OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBjb25zdCBIb21lID0gKCkgPT4ge1xuLy8gICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4vLyAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuLy8gICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIGJlaGF2aW9yXG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuLy8gICAgIC8vIEFjY2VzcyB0aGUgZm9ybSBlbGVtZW50cyBhbmQgdGhlaXIgdmFsdWVzXG4vLyAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldDtcbi8vICAgICBjb25zdCBlbGVtZW50cyA9IGZvcm0uZWxlbWVudHM7XG4vLyAgICAgY29uc3QgbmFtZSA9IGVsZW1lbnRzLm5hbWUudmFsdWU7XG4vLyAgICAgY29uc3QgZW1haWwgPSBlbGVtZW50cy5lbWFpbC52YWx1ZTtcbi8vICAgICBjb25zdCBwaG9uZSA9IGVsZW1lbnRzLnBob25lLnZhbHVlO1xuLy8gICAgIGNvbnN0IGJyYW5jaCA9IGVsZW1lbnRzLmJyYW5jaC52YWx1ZTtcbi8vICAgICBjb25zdCByb2xsTm8gPSBlbGVtZW50cy5yb2xsTm8udmFsdWU7XG4vLyAgICAgY29uc3QgY2dwYSA9IGVsZW1lbnRzLmNncGEudmFsdWU7XG5cbi8vICAgICAvLyBTZW5kIGEgUE9TVCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgd2l0aCB0aGUgZm9ybSBkYXRhXG4vLyAgICAgY29uc3QgZGF0YSA9IHsgbmFtZSwgZW1haWwsIHBob25lLCBicmFuY2gsIHJvbGxObywgY2dwYSB9O1xuLy8gICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4vLyAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuLy8gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4vLyAgICAgfTtcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3N1Ym1pdCcsIG9wdGlvbnMpO1xuLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuLy8gICB9O1xuXG4vLyAgIC8vIFJlbmRlciB0aGUgZm9ybVxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuLy8gICAgICAgey8qIFJlbmRlciB0aGUgZm9ybSBmaWVsZHMgKi99XG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8bGFiZWw+TmFtZTo8L2xhYmVsPlxuLy8gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIC8+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxsYWJlbD5FbWFpbDo8L2xhYmVsPlxuLy8gICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPGxhYmVsPlBob25lOjwvbGFiZWw+XG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwaG9uZVwiIC8+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxsYWJlbD5CcmFuY2g6PC9sYWJlbD5cbi8vICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJyYW5jaFwiIC8+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxsYWJlbD5Sb2xsIE5vOjwvbGFiZWw+XG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJyb2xsTm9cIiAvPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8bGFiZWw+Q0dQQTo8L2xhYmVsPlxuLy8gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2dwYVwiIC8+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIHsvKiBSZW5kZXIgdGhlIHN1Ym1pdCBidXR0b24gZm9yIHRoZSBmb3JtICovfVxuLy8gICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvZm9ybT5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAvLyBEZWNsYXJlIGEgc3RhdGUgdmFyaWFibGUgdG8gc3RvcmUgdGhlIGZvcm0gc3VibWlzc2lvbiBzdGF0dXNcbiAgY29uc3QgW2Zvcm1TdWJtaXR0ZWQsIHNldEZvcm1TdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gYmVoYXZpb3JcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gQWNjZXNzIHRoZSBmb3JtIGVsZW1lbnRzIGFuZCB0aGVpciB2YWx1ZXNcbiAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZm9ybS5lbGVtZW50cztcbiAgICBjb25zdCBuYW1lID0gZWxlbWVudHMubmFtZS52YWx1ZTtcbiAgICBjb25zdCBlbWFpbCA9IGVsZW1lbnRzLmVtYWlsLnZhbHVlO1xuICAgIGNvbnN0IHBob25lID0gZWxlbWVudHMucGhvbmUudmFsdWU7XG4gICAgY29uc3QgYnJhbmNoID0gZWxlbWVudHMuYnJhbmNoLnZhbHVlO1xuICAgIGNvbnN0IHJvbGxObyA9IGVsZW1lbnRzLnJvbGxOby52YWx1ZTtcbiAgICBjb25zdCBjZ3BhID0gZWxlbWVudHMuY2dwYS52YWx1ZTtcblxuICAgIC8vIFNlbmQgYSBQT1NUIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB3aXRoIHRoZSBmb3JtIGRhdGFcbiAgICBjb25zdCBkYXRhID0geyBuYW1lLCBlbWFpbCwgcGhvbmUsIGJyYW5jaCwgcm9sbE5vLCBjZ3BhIH07XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvc3VibWl0Jywgb3B0aW9ucyk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICAvLyBTZXQgdGhlIGZvcm0gc3VibWlzc2lvbiBzdGF0dXMgdG8gdHJ1ZVxuICAgIHNldEZvcm1TdWJtaXR0ZWQodHJ1ZSk7XG4gIH07XG5cbiAgLy8gUmVuZGVyIHRoZSBmb3JtXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICB7LyogUmVuZGVyIHRoZSBmb3JtIGZpZWxkcyAqL31cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD5OYW1lOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWw+UGhvbmU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPkJyYW5jaDo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYnJhbmNoXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPlJvbGwgTm86PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJvbGxOb1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD5DR1BBOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjZ3BhXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgey8qIFJlbmRlciB0aGUgc3VibWl0IGJ1dHRvbiBmb3IgdGhlIGZvcm0gKi99XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogSWYgdGhlIGZvcm0gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHN1Ym1pdHRlZCwgcmVuZGVyIGEgbWVzc2FnZSAqL31cbiAgICAgIHtmb3JtU3VibWl0dGVkICYmIDxkaXY+Rm9ybSBzdWJtaXR0ZWQhPC9kaXY+fVxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJmb3JtU3VibWl0dGVkIiwic2V0Rm9ybVN1Ym1pdHRlZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwiZm9ybSIsImVsZW1lbnRzIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJicmFuY2giLCJyb2xsTm8iLCJjZ3BhIiwiZGF0YSIsIm9wdGlvbnMiLCJyZXNwb25zZSIsInJlc3VsdCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJkaXYiLCJsYWJlbCIsImlucHV0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ })

});