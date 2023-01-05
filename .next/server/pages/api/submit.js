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
exports.id = "pages/api/submit";
exports.ids = ["pages/api/submit"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// Used to eatablish a connection with mongoDB atlast database.\n\n// Create a connection object\nconst connection = {};\n// Connect to the MongoDB database\nasync function connect() {\n    // If the connection is already established, return\n    if (connection.isConnected) {\n        return;\n    }\n    // Connect to the MongoDB database using the MONGODB_URI environment variable\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n    // Set the isConnected flag on the connection object to true\n    connection.isConnected = db.connections[0].readyState;\n}\n// Export the connect function\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwrREFBK0Q7QUFDL0I7QUFFaEMsNkJBQTZCO0FBQzdCLE1BQU1DLFVBQVUsR0FBRyxFQUFFO0FBRXJCLGtDQUFrQztBQUNsQyxlQUFlQyxPQUFPLEdBQUc7SUFDdkIsbURBQW1EO0lBQ25ELElBQUlELFVBQVUsQ0FBQ0UsV0FBVyxFQUFFO1FBQzFCLE9BQU87S0FDUjtJQUVELDZFQUE2RTtJQUM3RSxNQUFNQyxFQUFFLEdBQUcsTUFBTUosdURBQWdCLENBQUNLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLENBQUM7SUFFMUQsNERBQTREO0lBQzVETixVQUFVLENBQUNFLFdBQVcsR0FBR0MsRUFBRSxDQUFDSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNDLFVBQVUsQ0FBQztDQUN2RDtBQUVELDhCQUE4QjtBQUM5QixpRUFBZVAsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL21vbmdvZGIuanM/ZDkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBVc2VkIHRvIGVhdGFibGlzaCBhIGNvbm5lY3Rpb24gd2l0aCBtb25nb0RCIGF0bGFzdCBkYXRhYmFzZS5cbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuLy8gQ3JlYXRlIGEgY29ubmVjdGlvbiBvYmplY3RcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcblxuLy8gQ29ubmVjdCB0byB0aGUgTW9uZ29EQiBkYXRhYmFzZVxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgLy8gSWYgdGhlIGNvbm5lY3Rpb24gaXMgYWxyZWFkeSBlc3RhYmxpc2hlZCwgcmV0dXJuXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gQ29ubmVjdCB0byB0aGUgTW9uZ29EQiBkYXRhYmFzZSB1c2luZyB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGVcbiAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcblxuICAvLyBTZXQgdGhlIGlzQ29ubmVjdGVkIGZsYWcgb24gdGhlIGNvbm5lY3Rpb24gb2JqZWN0IHRvIHRydWVcbiAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XG59XG5cbi8vIEV4cG9ydCB0aGUgY29ubmVjdCBmdW5jdGlvblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDtcblxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImRiIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./model/schema_form.js":
/*!******************************!*\
  !*** ./model/schema_form.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar _mongoose = _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n// Define the user schema\nconst formDataSchema = new _mongoose.default.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    phone: {\n        type: String,\n        required: true\n    },\n    branch: {\n        type: String,\n        required: true\n    },\n    rollNo: {\n        type: String,\n        required: true\n    },\n    cgpa: {\n        type: String,\n        required: true\n    }\n});\n// Export the form data model\nmodule.exports = _mongoose.default.models.FormData || _mongoose.default.model(\"FormData\", formDataSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbC9zY2hlbWFfZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFxQixhQUFVLDhDQUFWLDBCQUFVOzs7Ozs7QUFFL0IseUJBQXlCO0FBQ3pCLE1BQU1BLGNBQWMsR0FBRyxJQUFJQyxTQUFRLFNBQUNDLE1BQU0sQ0FBQztJQUN6Q0MsSUFBSSxFQUFFO1FBQ0pDLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0RDLEtBQUssRUFBRTtRQUNMSCxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNERSxLQUFLLEVBQUU7UUFDTEosSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDREcsTUFBTSxFQUFFO1FBQ05MLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0RJLE1BQU0sRUFBRTtRQUNOTixJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNESyxJQUFJLEVBQUU7UUFDSlAsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7Q0FDRixDQUFDO0FBRUYsNkJBQTZCO0FBQzdCTSxNQUFNLENBQUNDLE9BQU8sR0FBR1osU0FBUSxTQUFDYSxNQUFNLENBQUNDLFFBQVEsSUFBSWQsU0FBUSxTQUFDZSxLQUFLLENBQUMsVUFBVSxFQUFFaEIsY0FBYyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbC9zY2hlbWFfZm9ybS5qcz82NmMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG4vLyBEZWZpbmUgdGhlIHVzZXIgc2NoZW1hXHJcbmNvbnN0IGZvcm1EYXRhU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgbmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIGVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgcGhvbmU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBicmFuY2g6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICByb2xsTm86IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBjZ3BhOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH1cclxufSk7XHJcblxyXG4vLyBFeHBvcnQgdGhlIGZvcm0gZGF0YSBtb2RlbFxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Gb3JtRGF0YSB8fCBtb25nb29zZS5tb2RlbCgnRm9ybURhdGEnLCBmb3JtRGF0YVNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJmb3JtRGF0YVNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwicGhvbmUiLCJicmFuY2giLCJyb2xsTm8iLCJjZ3BhIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIkZvcm1EYXRhIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./model/schema_form.js\n");

/***/ }),

/***/ "(api)/./pages/api/submit.js":
/*!*****************************!*\
  !*** ./pages/api/submit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _model_schema_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/schema_form */ \"(api)/./model/schema_form.js\");\n/* harmony import */ var _model_schema_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_model_schema_form__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Connect to the MongoDB database\n(0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n// Export the API handler function\nasync function handler(req, res) {\n    try {\n        // console.log('Received request:', req); // log the request object\n        // console.log('Request body:', req.body); // log the request body\n        // Get the form data from the request\n        //const formData = JSON.parse(req.body);\n        // Save the form data to the database\n        await _model_schema_form__WEBPACK_IMPORTED_MODULE_1___default().create(req.body);\n        // Send a response to the client indicating success\n        res.json({\n            status: \"Success\"\n        });\n    } catch (error) {\n        console.error(\"Error occurred:\", error); // log the error message\n        // Send a response to the client indicating an error occurred\n        res.status(400).json({\n            status: \"Error\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3VibWl0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDTztBQUUvQyxrQ0FBa0M7QUFDbENBLHdEQUFPLEVBQUUsQ0FBQztBQUVWLGtDQUFrQztBQUNuQixlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUk7UUFDRixtRUFBbUU7UUFDbkUsa0VBQWtFO1FBRWxFLHFDQUFxQztRQUNyQyx3Q0FBd0M7UUFFeEMscUNBQXFDO1FBQ3JDLE1BQU1ILGdFQUFlLENBQUNFLEdBQUcsQ0FBQ0csSUFBSSxDQUFDLENBQUM7UUFFaEMsbURBQW1EO1FBQ25ERixHQUFHLENBQUNHLElBQUksQ0FBQztZQUFFQyxNQUFNLEVBQUUsU0FBUztTQUFFLENBQUMsQ0FBQztLQUNqQyxDQUFDLE9BQU9DLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxpQkFBaUIsRUFBRUEsS0FBSyxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7UUFDakUsNkRBQTZEO1FBQzdETCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO1lBQUVDLE1BQU0sRUFBRSxPQUFPO1NBQUUsQ0FBQyxDQUFDO0tBQzNDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc3VibWl0LmpzPzI1ODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3QgZnJvbSBcIi4uLy4uL2xpYi9tb25nb2RiXCI7XHJcbmltcG9ydCBGb3JtRGF0YSBmcm9tICcuLi8uLi9tb2RlbC9zY2hlbWFfZm9ybSc7XHJcblxyXG4vLyBDb25uZWN0IHRvIHRoZSBNb25nb0RCIGRhdGFiYXNlXHJcbmNvbm5lY3QoKTtcclxuXHJcbi8vIEV4cG9ydCB0aGUgQVBJIGhhbmRsZXIgZnVuY3Rpb25cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnUmVjZWl2ZWQgcmVxdWVzdDonLCByZXEpOyAvLyBsb2cgdGhlIHJlcXVlc3Qgb2JqZWN0XHJcbiAgICAvLyBjb25zb2xlLmxvZygnUmVxdWVzdCBib2R5OicsIHJlcS5ib2R5KTsgLy8gbG9nIHRoZSByZXF1ZXN0IGJvZHlcclxuXHJcbiAgICAvLyBHZXQgdGhlIGZvcm0gZGF0YSBmcm9tIHRoZSByZXF1ZXN0XHJcbiAgICAvL2NvbnN0IGZvcm1EYXRhID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XHJcblxyXG4gICAgLy8gU2F2ZSB0aGUgZm9ybSBkYXRhIHRvIHRoZSBkYXRhYmFzZVxyXG4gICAgYXdhaXQgRm9ybURhdGEuY3JlYXRlKHJlcS5ib2R5KTtcclxuXHJcbiAgICAvLyBTZW5kIGEgcmVzcG9uc2UgdG8gdGhlIGNsaWVudCBpbmRpY2F0aW5nIHN1Y2Nlc3NcclxuICAgIHJlcy5qc29uKHsgc3RhdHVzOiAnU3VjY2VzcycgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VycmVkOicsIGVycm9yKTsgLy8gbG9nIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICAvLyBTZW5kIGEgcmVzcG9uc2UgdG8gdGhlIGNsaWVudCBpbmRpY2F0aW5nIGFuIGVycm9yIG9jY3VycmVkXHJcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN0YXR1czogJ0Vycm9yJyB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJGb3JtRGF0YSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjcmVhdGUiLCJib2R5IiwianNvbiIsInN0YXR1cyIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/submit.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/submit.js"));
module.exports = __webpack_exports__;

})();