"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/admin";
exports.ids = ["pages/admin"];
exports.modules = {

/***/ "./model/schema_form.js":
/*!******************************!*\
  !*** ./model/schema_form.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar _mongoose = _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n// Define the user schema\nconst formDataSchema = new _mongoose.default.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    phone: {\n        type: String,\n        required: true\n    },\n    branch: {\n        type: String,\n        required: true\n    },\n    rollNo: {\n        type: String,\n        required: true\n    },\n    cgpa: {\n        type: String,\n        required: true\n    }\n});\n// Export the form data model\nmodule.exports = _mongoose.default.models.FormData || _mongoose.default.model(\"FormData\", formDataSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbC9zY2hlbWFfZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFxQixhQUFVLDhDQUFWLDBCQUFVOzs7Ozs7QUFFL0IseUJBQXlCO0FBQ3pCLE1BQU1BLGNBQWMsR0FBRyxJQUFJQyxTQUFRLFNBQUNDLE1BQU0sQ0FBQztJQUN6Q0MsSUFBSSxFQUFFO1FBQ0pDLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0RDLEtBQUssRUFBRTtRQUNMSCxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNERSxLQUFLLEVBQUU7UUFDTEosSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDREcsTUFBTSxFQUFFO1FBQ05MLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0RJLE1BQU0sRUFBRTtRQUNOTixJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNESyxJQUFJLEVBQUU7UUFDSlAsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7Q0FDRixDQUFDO0FBRUYsNkJBQTZCO0FBQzdCTSxNQUFNLENBQUNDLE9BQU8sR0FBR1osU0FBUSxTQUFDYSxNQUFNLENBQUNDLFFBQVEsSUFBSWQsU0FBUSxTQUFDZSxLQUFLLENBQUMsVUFBVSxFQUFFaEIsY0FBYyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbC9zY2hlbWFfZm9ybS5qcz82NmMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG4vLyBEZWZpbmUgdGhlIHVzZXIgc2NoZW1hXHJcbmNvbnN0IGZvcm1EYXRhU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgbmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIGVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgcGhvbmU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBicmFuY2g6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICByb2xsTm86IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBjZ3BhOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH1cclxufSk7XHJcblxyXG4vLyBFeHBvcnQgdGhlIGZvcm0gZGF0YSBtb2RlbFxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Gb3JtRGF0YSB8fCBtb25nb29zZS5tb2RlbCgnRm9ybURhdGEnLCBmb3JtRGF0YVNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJmb3JtRGF0YVNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwicGhvbmUiLCJicmFuY2giLCJyb2xsTm8iLCJjZ3BhIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIkZvcm1EYXRhIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./model/schema_form.js\n");

/***/ }),

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _model_schema_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/schema_form */ \"./model/schema_form.js\");\n/* harmony import */ var _model_schema_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_model_schema_form__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// Define the columns for the table\nconst columns = [\n    {\n        Header: \"Name\",\n        accessor: \"name\"\n    },\n    {\n        Header: \"Email\",\n        accessor: \"email\"\n    },\n    {\n        Header: \"Phone\",\n        accessor: \"phone\"\n    },\n    {\n        Header: \"Branch\",\n        accessor: \"branch\"\n    },\n    {\n        Header: \"Roll No\",\n        accessor: \"rollNo\"\n    },\n    {\n        Header: \"CGPA\",\n        accessor: \"cgpa\"\n    }, \n];\n// Define the AdminTable component\nconst AdminTable = ()=>{\n    // Use the useState hook to store the form data in the component's state\n    const { 0: formData , 1: setFormData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Use the useEffect hook to fetch the form data from the database\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const data = await _model_schema_form__WEBPACK_IMPORTED_MODULE_2___default().find();\n            setFormData(data);\n        };\n        fetchData();\n    }, []);\n    // Render the table\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: column.Header\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\admin.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined)\n                    )\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\admin.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\admin.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: formData.map((row)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: row[column.accessor]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\admin.js\",\n                                lineNumber: 60,\n                                columnNumber: 15\n                            }, undefined)\n                        )\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\admin.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined)\n                )\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\admin.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\91946\\\\Desktop\\\\Project-1 -- user authentication\\\\pages\\\\admin.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminTable);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFDUDtBQUU1QyxtQ0FBbUM7QUFDbkMsTUFBTUksT0FBTyxHQUFHO0lBQ2Q7UUFDRUMsTUFBTSxFQUFFLE1BQU07UUFDZEMsUUFBUSxFQUFFLE1BQU07S0FDakI7SUFDRDtRQUNFRCxNQUFNLEVBQUUsT0FBTztRQUNmQyxRQUFRLEVBQUUsT0FBTztLQUNsQjtJQUNEO1FBQ0VELE1BQU0sRUFBRSxPQUFPO1FBQ2ZDLFFBQVEsRUFBRSxPQUFPO0tBQ2xCO0lBQ0Q7UUFDRUQsTUFBTSxFQUFFLFFBQVE7UUFDaEJDLFFBQVEsRUFBRSxRQUFRO0tBQ25CO0lBQ0Q7UUFDRUQsTUFBTSxFQUFFLFNBQVM7UUFDakJDLFFBQVEsRUFBRSxRQUFRO0tBQ25CO0lBQ0Q7UUFDRUQsTUFBTSxFQUFFLE1BQU07UUFDZEMsUUFBUSxFQUFFLE1BQU07S0FDakI7Q0FDRjtBQUVELGtDQUFrQztBQUNsQyxNQUFNQyxVQUFVLEdBQUcsSUFBTTtJQUN2Qix3RUFBd0U7SUFDeEUsTUFBTSxFQWxDUixHQWtDU0MsUUFBUSxHQWxDakIsR0FrQ21CQyxXQUFXLE1BQUlQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRTVDLGtFQUFrRTtJQUNsRUQsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTVMsU0FBUyxHQUFHLFVBQVk7WUFDNUIsTUFBTUMsSUFBSSxHQUFHLE1BQU1SLDhEQUFhLEVBQUU7WUFDbENNLFdBQVcsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7U0FDbkI7UUFDREQsU0FBUyxFQUFFLENBQUM7S0FDYixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsbUJBQW1CO0lBQ25CLHFCQUNFLDhEQUFDRyxPQUFLOzswQkFDSiw4REFBQ0MsT0FBSzswQkFDSiw0RUFBQ0MsSUFBRTs4QkFDQVgsT0FBTyxDQUFDWSxHQUFHLENBQUMsQ0FBQ0MsTUFBTSxpQkFDbEIsOERBQUNDLElBQUU7c0NBQUVELE1BQU0sQ0FBQ1osTUFBTTs7Ozs7cUNBQU07b0JBQ3pCLENBQUM7Ozs7OzZCQUNDOzs7Ozt5QkFDQzswQkFDUiw4REFBQ2MsT0FBSzswQkFDSFgsUUFBUSxDQUFDUSxHQUFHLENBQUMsQ0FBQ0ksR0FBRyxpQkFDaEIsOERBQUNMLElBQUU7a0NBQ0FYLE9BQU8sQ0FBQ1ksR0FBRyxDQUFDLENBQUNDLE1BQU0saUJBQ2xCLDhEQUFDSSxJQUFFOzBDQUFFRCxHQUFHLENBQUNILE1BQU0sQ0FBQ1gsUUFBUSxDQUFDOzs7Ozt5Q0FBTTt3QkFDaEMsQ0FBQzs7Ozs7aUNBQ0M7Z0JBQ04sQ0FBQzs7Ozs7eUJBQ0k7Ozs7OztpQkFDRixDQUNSO0NBQ0g7QUFFRCxpRUFBZUMsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4uanM/ODVjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybURhdGEgZnJvbSBcIi4uL21vZGVsL3NjaGVtYV9mb3JtXCI7XHJcblxyXG4vLyBEZWZpbmUgdGhlIGNvbHVtbnMgZm9yIHRoZSB0YWJsZVxyXG5jb25zdCBjb2x1bW5zID0gW1xyXG4gIHtcclxuICAgIEhlYWRlcjogXCJOYW1lXCIsXHJcbiAgICBhY2Nlc3NvcjogXCJuYW1lXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBIZWFkZXI6IFwiRW1haWxcIixcclxuICAgIGFjY2Vzc29yOiBcImVtYWlsXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBIZWFkZXI6IFwiUGhvbmVcIixcclxuICAgIGFjY2Vzc29yOiBcInBob25lXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBIZWFkZXI6IFwiQnJhbmNoXCIsXHJcbiAgICBhY2Nlc3NvcjogXCJicmFuY2hcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEhlYWRlcjogXCJSb2xsIE5vXCIsXHJcbiAgICBhY2Nlc3NvcjogXCJyb2xsTm9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIEhlYWRlcjogXCJDR1BBXCIsXHJcbiAgICBhY2Nlc3NvcjogXCJjZ3BhXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbi8vIERlZmluZSB0aGUgQWRtaW5UYWJsZSBjb21wb25lbnRcclxuY29uc3QgQWRtaW5UYWJsZSA9ICgpID0+IHtcclxuICAvLyBVc2UgdGhlIHVzZVN0YXRlIGhvb2sgdG8gc3RvcmUgdGhlIGZvcm0gZGF0YSBpbiB0aGUgY29tcG9uZW50J3Mgc3RhdGVcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgLy8gVXNlIHRoZSB1c2VFZmZlY3QgaG9vayB0byBmZXRjaCB0aGUgZm9ybSBkYXRhIGZyb20gdGhlIGRhdGFiYXNlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IEZvcm1EYXRhLmZpbmQoKTtcclxuICAgICAgc2V0Rm9ybURhdGEoZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBSZW5kZXIgdGhlIHRhYmxlXHJcbiAgcmV0dXJuIChcclxuICAgIDx0YWJsZT5cclxuICAgICAgPHRoZWFkPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXHJcbiAgICAgICAgICAgIDx0aD57Y29sdW1uLkhlYWRlcn08L3RoPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90aGVhZD5cclxuICAgICAgPHRib2R5PlxyXG4gICAgICAgIHtmb3JtRGF0YS5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ZD57cm93W2NvbHVtbi5hY2Nlc3Nvcl19PC90ZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5UYWJsZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGb3JtRGF0YSIsImNvbHVtbnMiLCJIZWFkZXIiLCJhY2Nlc3NvciIsIkFkbWluVGFibGUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZmV0Y2hEYXRhIiwiZGF0YSIsImZpbmQiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJtYXAiLCJjb2x1bW4iLCJ0aCIsInRib2R5Iiwicm93IiwidGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/admin.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/admin.js"));
module.exports = __webpack_exports__;

})();