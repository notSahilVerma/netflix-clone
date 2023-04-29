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
exports.id = "pages/api/movies/[movieId]";
exports.ids = ["pages/api/movies/[movieId]"];
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

/***/ "(api)/./pages/api/movies/[movieId].ts":
/*!***************************************!*\
  !*** ./pages/api/movies/[movieId].ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prismadb */ \"(api)/./lib/prismadb.ts\");\n/* harmony import */ var _lib_serverAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/serverAuth */ \"(api)/./lib/serverAuth.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).end();\n    }\n    try {\n        await (0,_lib_serverAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req);\n        const { movieId  } = req.query;\n        if (typeof movieId !== \"string\") {\n            throw new Error(\"Invalid movie Id\");\n        }\n        if (!movieId) {\n            throw new Error(\"Invalid movie Id\");\n        }\n        const movie = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movie.findUnique({\n            where: {\n                id: movieId\n            }\n        });\n        if (!movie) {\n            throw new Error(\"Invalid Id\");\n        }\n        return res.status(200).json(movie);\n    } catch (error) {\n        console.log(error);\n        return res.status(400).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW92aWVzL1ttb3ZpZUlkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDc0M7QUFDSTtBQUUzQixlQUFlRSxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUc7SUFDNUIsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNTiwyREFBVUEsQ0FBQ0U7UUFDakIsTUFBTSxFQUFFSyxRQUFPLEVBQUUsR0FBR0wsSUFBSU0sS0FBSztRQUU3QixJQUFJLE9BQU9ELFlBQVksVUFBVTtZQUMvQixNQUFNLElBQUlFLE1BQU0sb0JBQW9CO1FBQ3RDLENBQUM7UUFFRCxJQUFJLENBQUNGLFNBQVM7WUFDWixNQUFNLElBQUlFLE1BQU0sb0JBQW9CO1FBQ3RDLENBQUM7UUFFRCxNQUFNQyxRQUFRLE1BQU1YLHNFQUF5QixDQUFDO1lBQzVDYSxPQUFPO2dCQUNMQyxJQUFJTjtZQUNOO1FBQ0Y7UUFFQSxJQUFJLENBQUNHLE9BQU87WUFDVixNQUFNLElBQUlELE1BQU0sY0FBYztRQUNoQyxDQUFDO1FBRUQsT0FBT04sSUFBSUUsTUFBTSxDQUFDLEtBQUtTLElBQUksQ0FBQ0o7SUFDOUIsRUFBRSxPQUFPSyxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPWixJQUFJRSxNQUFNLENBQUMsS0FBS0MsR0FBRztJQUM1QjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXRmbGl4LWNsb25lLy4vcGFnZXMvYXBpL21vdmllcy9bbW92aWVJZF0udHM/ZWJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHByaXNtYWRiIGZyb20gXCJAL2xpYi9wcmlzbWFkYlwiO1xyXG5pbXBvcnQgc2VydmVyQXV0aCBmcm9tIFwiQC9saWIvc2VydmVyQXV0aFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG4gIGlmIChyZXEubWV0aG9kICE9PSBcIkdFVFwiKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHNlcnZlckF1dGgocmVxKTtcclxuICAgIGNvbnN0IHsgbW92aWVJZCB9ID0gcmVxLnF1ZXJ5O1xyXG5cclxuICAgIGlmICh0eXBlb2YgbW92aWVJZCAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG1vdmllIElkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghbW92aWVJZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG1vdmllIElkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdmllID0gYXdhaXQgcHJpc21hZGIubW92aWUuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IG1vdmllSWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIW1vdmllKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgSWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKG1vdmllKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5lbmQoKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYWRiIiwic2VydmVyQXV0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJlbmQiLCJtb3ZpZUlkIiwicXVlcnkiLCJFcnJvciIsIm1vdmllIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/movies/[movieId].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/movies/[movieId].ts"));
module.exports = __webpack_exports__;

})();