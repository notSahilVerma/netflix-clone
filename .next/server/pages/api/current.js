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
exports.id = "pages/api/current";
exports.ids = ["pages/api/current"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./lib/prismadb.ts":
/*!*************************!*\
  !*** ./lib/prismadb.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.prismadb || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (false) {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLFNBQVFDLE9BQU9DLFFBQVEsSUFBSSxJQUFJSCx3REFBWUE7QUFDakQsSUFBR0ksS0FBeUIsRUFBY0YsRUFBeUJEO0FBRW5FLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV0ZmxpeC1jbG9uZS8uL2xpYi9wcmlzbWFkYi50cz8wZTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuY29uc3QgY2xpZW50PSBnbG9iYWwucHJpc21hZGIgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWwucHJpc21hZGIgPSBjbGllbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImNsaWVudCIsImdsb2JhbCIsInByaXNtYWRiIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prismadb.ts\n");

/***/ }),

/***/ "(api)/./lib/serverAuth.ts":
/*!***************************!*\
  !*** ./lib/serverAuth.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prismadb */ \"(api)/./lib/prismadb.ts\");\n\n\nconst serverAuth = async (req)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    if (!session?.user?.email) {\n        throw new Error(\"Not Signed in\");\n    }\n    const currentUser = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n        where: {\n            email: session.user.email\n        }\n    });\n    if (!currentUser) {\n        throw new Error(\"Not Signed in\");\n    }\n    return {\n        currentUser\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serverAuth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyQXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzZDO0FBRVA7QUFFdEMsTUFBTUUsYUFBYSxPQUFPQyxNQUF3QjtJQUNoRCxNQUFNQyxVQUFVLE1BQU1KLDJEQUFVQSxDQUFDO1FBQUVHO0lBQUk7SUFFdkMsSUFBSSxDQUFDQyxTQUFTQyxNQUFNQyxPQUFPO1FBQ3pCLE1BQU0sSUFBSUMsTUFBTSxpQkFBaUI7SUFDbkMsQ0FBQztJQUVELE1BQU1DLGNBQWMsTUFBTVAscUVBQXdCLENBQUM7UUFDakRTLE9BQU87WUFDTEosT0FBT0YsUUFBUUMsSUFBSSxDQUFDQyxLQUFLO1FBQzNCO0lBQ0Y7SUFFQSxJQUFJLENBQUNFLGFBQWE7UUFDaEIsTUFBTSxJQUFJRCxNQUFNLGlCQUFpQjtJQUNuQyxDQUFDO0lBRUQsT0FBTztRQUFFQztJQUFZO0FBQ3ZCO0FBQ0EsaUVBQWVOLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXRmbGl4LWNsb25lLy4vbGliL3NlcnZlckF1dGgudHM/YzBlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcblxyXG5pbXBvcnQgcHJpc21hZGIgZnJvbSBcIkAvbGliL3ByaXNtYWRiXCI7XHJcblxyXG5jb25zdCBzZXJ2ZXJBdXRoID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QpID0+IHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcclxuXHJcbiAgaWYgKCFzZXNzaW9uPy51c2VyPy5lbWFpbCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IFNpZ25lZCBpblwiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgcHJpc21hZGIudXNlci5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7XHJcbiAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIWN1cnJlbnRVc2VyKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgU2lnbmVkIGluXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgY3VycmVudFVzZXIgfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc2VydmVyQXV0aDtcclxuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJwcmlzbWFkYiIsInNlcnZlckF1dGgiLCJyZXEiLCJzZXNzaW9uIiwidXNlciIsImVtYWlsIiwiRXJyb3IiLCJjdXJyZW50VXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/serverAuth.ts\n");

/***/ }),

/***/ "(api)/./pages/api/current.ts":
/*!******************************!*\
  !*** ./pages/api/current.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_serverAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/serverAuth */ \"(api)/./lib/serverAuth.ts\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).end();\n    }\n    try {\n        const { currentUser  } = await (0,_lib_serverAuth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req);\n        return res.status(200).json(currentUser);\n    } catch (error) {\n        console.log(error);\n        return res.status(400).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3VycmVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUMwQztBQUUzQixlQUFlQyxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUc7SUFDNUIsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNLEVBQUVDLFlBQVcsRUFBRSxHQUFHLE1BQU1QLDJEQUFVQSxDQUFDRTtRQUN6QyxPQUFPQyxJQUFJRSxNQUFNLENBQUMsS0FBS0csSUFBSSxDQUFDRDtJQUM5QixFQUFFLE9BQU9FLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE9BQU9OLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO0lBQzVCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtY2xvbmUvLi9wYWdlcy9hcGkvY3VycmVudC50cz9kMDFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgc2VydmVyQXV0aCBmcm9tIFwiQC9saWIvc2VydmVyQXV0aFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG4gIGlmIChyZXEubWV0aG9kICE9PSBcIkdFVFwiKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IGF3YWl0IHNlcnZlckF1dGgocmVxKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihjdXJyZW50VXNlcik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuZW5kKCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzZXJ2ZXJBdXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImVuZCIsImN1cnJlbnRVc2VyIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/current.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/current.ts"));
module.exports = __webpack_exports__;

})();