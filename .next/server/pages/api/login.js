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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
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

/***/ "(api)/./model/schema_registration.js":
/*!**************************************!*\
  !*** ./model/schema_registration.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar _mongoose = _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n// Define the user schema for the User model\nconst userSchema = new _mongoose.default.Schema({\n    // Define the email field as a string, which is required and must be unique\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    // Define the password field as a string, which is required\n    password: {\n        type: String,\n        required: true\n    }\n});\n// Export the User model, either by using the existing model if it exists, or by creating a new model using the user schema\nmodule.exports = _mongoose.default.models.User || _mongoose.default.model(\"User\", userSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbC9zY2hlbWFfcmVnaXN0cmF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiJBQUNBO0FBQXFCLGFBQVUsOENBQVYsMEJBQVU7Ozs7OztBQUUvQiw0Q0FBNEM7QUFDNUMsTUFBTUEsVUFBVSxHQUFHLElBQUlDLFNBQVEsU0FBQ0MsTUFBTSxDQUFDO0lBQ3JDLDJFQUEyRTtJQUMzRUMsS0FBSyxFQUFFO1FBQ0xDLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxNQUFNLEVBQUUsSUFBSTtLQUNiO0lBQ0QsMkRBQTJEO0lBQzNEQyxRQUFRLEVBQUU7UUFDUkosSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7Q0FDRixDQUFDO0FBRUYsMkhBQTJIO0FBQzNIRyxNQUFNLENBQUNDLE9BQU8sR0FBR1QsU0FBUSxTQUFDVSxNQUFNLENBQUNDLElBQUksSUFBSVgsU0FBUSxTQUFDWSxLQUFLLENBQUMsTUFBTSxFQUFFYixVQUFVLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZGVsL3NjaGVtYV9yZWdpc3RyYXRpb24uanM/NTM2YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIE1vbmdvb3NlIGxpYnJhcnlcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuLy8gRGVmaW5lIHRoZSB1c2VyIHNjaGVtYSBmb3IgdGhlIFVzZXIgbW9kZWxcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgLy8gRGVmaW5lIHRoZSBlbWFpbCBmaWVsZCBhcyBhIHN0cmluZywgd2hpY2ggaXMgcmVxdWlyZWQgYW5kIG11c3QgYmUgdW5pcXVlXG4gIGVtYWlsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHVuaXF1ZTogdHJ1ZVxuICB9LFxuICAvLyBEZWZpbmUgdGhlIHBhc3N3b3JkIGZpZWxkIGFzIGEgc3RyaW5nLCB3aGljaCBpcyByZXF1aXJlZFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9XG59KTtcblxuLy8gRXhwb3J0IHRoZSBVc2VyIG1vZGVsLCBlaXRoZXIgYnkgdXNpbmcgdGhlIGV4aXN0aW5nIG1vZGVsIGlmIGl0IGV4aXN0cywgb3IgYnkgY3JlYXRpbmcgYSBuZXcgbW9kZWwgdXNpbmcgdGhlIHVzZXIgc2NoZW1hXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgdXNlclNjaGVtYSk7XG5cbiJdLCJuYW1lcyI6WyJ1c2VyU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsInBhc3N3b3JkIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./model/schema_registration.js\n");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _model_schema_registration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/schema_registration */ \"(api)/./model/schema_registration.js\");\n/* harmony import */ var _model_schema_registration__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_model_schema_registration__WEBPACK_IMPORTED_MODULE_1__);\n// Import the connect function from the lib/mongodb module\n\n// Import the User model from the model/schema module\n\n// Establish a connection to the MongoDB database\n(0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n// Declare the handler function, which will handle the login request\nasync function handler(req, res) {\n    // Destructure the email and password fields from the request body\n    const { email , password  } = req.body;\n    // Find the user in the database with the specified email and password\n    const user = await _model_schema_registration__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n        email,\n        password\n    });\n    // If the user is not found, return a response with a status message\n    if (!user) {\n        return res.json({\n            status: \"Not able to find the user\"\n        });\n    } else {\n        res.redirect(\"/home\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDBEQUEwRDtBQUNsQjtBQUV4QyxxREFBcUQ7QUFDRjtBQUVuRCxpREFBaUQ7QUFDakRBLHdEQUFPLEVBQUUsQ0FBQztBQUVWLG9FQUFvRTtBQUNyRCxlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLGtFQUFrRTtJQUNsRSxNQUFNLEVBQUNDLEtBQUssR0FBRUMsUUFBUSxHQUFDLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtJQUVsQyxzRUFBc0U7SUFDdEUsTUFBTUMsSUFBSSxHQUFHLE1BQU1QLHlFQUFZLENBQUM7UUFBQ0ksS0FBSztRQUFFQyxRQUFRO0tBQUMsQ0FBQztJQUVsRCxvRUFBb0U7SUFDcEUsSUFBSSxDQUFDRSxJQUFJLEVBQUU7UUFDVCxPQUFPSixHQUFHLENBQUNNLElBQUksQ0FBQztZQUFDQyxNQUFNLEVBQUUsMkJBQTJCO1NBQUMsQ0FBQyxDQUFDO0tBQ3hELE1BRUk7UUFDSFAsR0FBRyxDQUFDUSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDdkI7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgY29ubmVjdCBmdW5jdGlvbiBmcm9tIHRoZSBsaWIvbW9uZ29kYiBtb2R1bGVcbmltcG9ydCBjb25uZWN0IGZyb20gXCIuLi8uLi9saWIvbW9uZ29kYlwiO1xuXG4vLyBJbXBvcnQgdGhlIFVzZXIgbW9kZWwgZnJvbSB0aGUgbW9kZWwvc2NoZW1hIG1vZHVsZVxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vbW9kZWwvc2NoZW1hX3JlZ2lzdHJhdGlvbic7XG5cbi8vIEVzdGFibGlzaCBhIGNvbm5lY3Rpb24gdG8gdGhlIE1vbmdvREIgZGF0YWJhc2VcbmNvbm5lY3QoKTtcblxuLy8gRGVjbGFyZSB0aGUgaGFuZGxlciBmdW5jdGlvbiwgd2hpY2ggd2lsbCBoYW5kbGUgdGhlIGxvZ2luIHJlcXVlc3RcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgLy8gRGVzdHJ1Y3R1cmUgdGhlIGVtYWlsIGFuZCBwYXNzd29yZCBmaWVsZHMgZnJvbSB0aGUgcmVxdWVzdCBib2R5XG4gIGNvbnN0IHtlbWFpbCwgcGFzc3dvcmR9ID0gcmVxLmJvZHk7XG5cbiAgLy8gRmluZCB0aGUgdXNlciBpbiB0aGUgZGF0YWJhc2Ugd2l0aCB0aGUgc3BlY2lmaWVkIGVtYWlsIGFuZCBwYXNzd29yZFxuICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtlbWFpbCwgcGFzc3dvcmR9KTtcblxuICAvLyBJZiB0aGUgdXNlciBpcyBub3QgZm91bmQsIHJldHVybiBhIHJlc3BvbnNlIHdpdGggYSBzdGF0dXMgbWVzc2FnZVxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4gcmVzLmpzb24oe3N0YXR1czogJ05vdCBhYmxlIHRvIGZpbmQgdGhlIHVzZXInfSk7XG4gIH1cbiAgLy8gSWYgdGhlIHVzZXIgaXMgZm91bmQsIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBob21lIHBhZ2VcbiAgZWxzZSB7XG4gICAgcmVzLnJlZGlyZWN0KCcvaG9tZScpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY29ubmVjdCIsIlVzZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJ1c2VyIiwiZmluZE9uZSIsImpzb24iLCJzdGF0dXMiLCJyZWRpcmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();