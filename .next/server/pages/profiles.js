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
exports.id = "pages/profiles";
exports.ids = ["pages/profiles"];
exports.modules = {

/***/ "./hooks/useCurrentUser.ts":
/*!*********************************!*\
  !*** ./hooks/useCurrentUser.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/fetcher */ \"./lib/fetcher.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__]);\n([swr__WEBPACK_IMPORTED_MODULE_0__, _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst useCurrentUser = ()=>{\n    const { data , error , isLoading , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/api/current\", _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    return {\n        data,\n        error,\n        isLoading,\n        mutate\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCurrentUser);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VDdXJyZW50VXNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDVztBQUVwQyxNQUFNRSxpQkFBaUIsSUFBTTtJQUN6QixNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUVDLE9BQU0sRUFBRSxHQUFHTiwrQ0FBTUEsQ0FBQyxnQkFBZ0JDLG9EQUFPQTtJQUN6RSxPQUFNO1FBQ0ZFO1FBQ0FDO1FBQ0FDO1FBQ0FDO0lBQ0o7QUFDSjtBQUVBLGlFQUFlSixjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV0ZmxpeC1jbG9uZS8uL2hvb2tzL3VzZUN1cnJlbnRVc2VyLnRzPzQ3ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gXCJAL2xpYi9mZXRjaGVyXCI7XHJcblxyXG5jb25zdCB1c2VDdXJyZW50VXNlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZywgbXV0YXRlIH0gPSB1c2VTV1IoJy9hcGkvY3VycmVudCcsIGZldGNoZXIpO1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICAgIG11dGF0ZVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQ3VycmVudFVzZXI7Il0sIm5hbWVzIjpbInVzZVNXUiIsImZldGNoZXIiLCJ1c2VDdXJyZW50VXNlciIsImRhdGEiLCJlcnJvciIsImlzTG9hZGluZyIsIm11dGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useCurrentUser.ts\n");

/***/ }),

/***/ "./lib/fetcher.ts":
/*!************************!*\
  !*** ./lib/fetcher.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst fetcher = (url)=>axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url).then((res)=>res.data);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmV0Y2hlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxVQUFVLENBQUNDLE1BQWdCRixpREFBUyxDQUFDRSxLQUFLRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUV0RSxpRUFBZUwsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtY2xvbmUvLi9saWIvZmV0Y2hlci50cz9mYjIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGZldGNoZXIgPSAodXJsOiBzdHJpbmcpID0+IGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hlcjsiXSwibmFtZXMiOlsiYXhpb3MiLCJmZXRjaGVyIiwidXJsIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/fetcher.ts\n");

/***/ }),

/***/ "./pages/profiles.tsx":
/*!****************************!*\
  !*** ./pages/profiles.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useCurrentUser */ \"./hooks/useCurrentUser.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_1__]);\n_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/auth\",\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {}\n    };\n}\nconst Profiles = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data  } = (0,_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center h-full justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex-flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl md:text-6xl text-white text-center\",\n                    children: \"Who's Watching\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\warlo\\\\OneDrive\\\\Desktop\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center gap-8 mt-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>router.push(\"/\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"group flex flex-col w-44 mx-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" w-44 h-44 rounded-md flex items-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white  \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/images/default-blue.png\",\n                                        alt: \"Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\warlo\\\\OneDrive\\\\Desktop\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\warlo\\\\OneDrive\\\\Desktop\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" mt-4 text-gray-400 text-2xl text-center group-hover:text-white \",\n                                    children: data?.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\warlo\\\\OneDrive\\\\Desktop\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\warlo\\\\OneDrive\\\\Desktop\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\warlo\\\\OneDrive\\\\Desktop\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\warlo\\\\OneDrive\\\\Desktop\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\warlo\\\\OneDrive\\\\Desktop\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\warlo\\\\OneDrive\\\\Desktop\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profiles);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUVQO0FBQ0w7QUFFakMsZUFBZUcsbUJBQW1CQyxPQUF3QixFQUFFO0lBQ2pFLE1BQU1DLFVBQVUsTUFBTUosMkRBQVVBLENBQUNHO0lBRWpDLElBQUksQ0FBQ0MsU0FBUztRQUNaLE9BQU87WUFDTEMsVUFBVTtnQkFDUkMsYUFBYTtnQkFDYkMsV0FBVyxLQUFLO1lBQ2xCO1FBQ0Y7SUFDRixDQUFDO0lBRUQsT0FBTztRQUNMQyxPQUFPLENBQUM7SUFDVjtBQUNGLENBQUM7QUFFRCxNQUFNQyxXQUFXLElBQU07SUFDckIsTUFBTUMsU0FBU1Qsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVUsS0FBSSxFQUFDLEdBQUdaLGlFQUFjQTtJQUM5QixxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUE4Qzs7Ozs7OzhCQUM1RCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJRyxTQUFTLElBQU1MLE9BQU9NLElBQUksQ0FBQztrQ0FDOUIsNEVBQUNKOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBWWIsNEVBQUNJO3dDQUFJQyxLQUFJO3dDQUEyQkMsS0FBSTs7Ozs7Ozs7Ozs7OENBRzFDLDhEQUFDUDtvQ0FBSUMsV0FBVTs4Q0FPWkYsTUFBTVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2QjtBQUVBLGlFQUFlWCxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV0ZmxpeC1jbG9uZS8uL3BhZ2VzL3Byb2ZpbGVzLnRzeD85MGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VDdXJyZW50VXNlciBmcm9tIFwiQC9ob29rcy91c2VDdXJyZW50VXNlclwiO1xuaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBOZXh0UGFnZUNvbnRleHQpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dCk7XG5cbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9hdXRoXCIsXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge30sXG4gIH1cbn1cblxuY29uc3QgUHJvZmlsZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGRhdGF9ID0gdXNlQ3VycmVudFVzZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGgtZnVsbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWZsZXgtY29sXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTZ4bCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCI+V2hvJmFwb3M7cyBXYXRjaGluZzwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTggbXQtMTBcIj5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCBmbGV4IGZsZXgtY29sIHctNDQgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlxuICAgICAgICAgICAgdy00NFxuICAgICAgICAgICAgaC00NFxuICAgICAgICAgICAgcm91bmRlZC1tZFxuICAgICAgICAgICAgZmxleFxuICAgICAgICAgICAgaXRlbXMtY2VudGVyXG4gICAgICAgICAgICBib3JkZXItMlxuICAgICAgICAgICAgYm9yZGVyLXRyYW5zcGFyZW50XG4gICAgICAgICAgICBncm91cC1ob3ZlcjpjdXJzb3ItcG9pbnRlclxuICAgICAgICAgICAgZ3JvdXAtaG92ZXI6Ym9yZGVyLXdoaXRlXG5cbiAgICAgICAgICAgIFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9kZWZhdWx0LWJsdWUucG5nXCIgYWx0PVwiUHJvZmlsZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXG4gICAgICAgICAgICAgIG10LTRcbiAgICAgICAgICAgICAgdGV4dC1ncmF5LTQwMFxuICAgICAgICAgICAgICB0ZXh0LTJ4bFxuICAgICAgICAgICAgICB0ZXh0LWNlbnRlclxuICAgICAgICAgICAgICBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlXG4gICAgICAgICAgICAgIFwiPlxuICAgICAgICAgICAgICAgIHtkYXRhPy5uYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlcztcbiJdLCJuYW1lcyI6WyJ1c2VDdXJyZW50VXNlciIsImdldFNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Iiwic2Vzc2lvbiIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiLCJwcm9wcyIsIlByb2ZpbGVzIiwicm91dGVyIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwib25DbGljayIsInB1c2giLCJpbWciLCJzcmMiLCJhbHQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profiles.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/profiles.tsx"));
module.exports = __webpack_exports__;

})();