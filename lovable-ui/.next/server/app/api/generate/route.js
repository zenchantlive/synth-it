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
exports.id = "app/api/generate/route";
exports.ids = ["app/api/generate/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "readline":
/*!***************************!*\
  !*** external "readline" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("readline");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgenerate%2Froute&page=%2Fapi%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate%2Froute.ts&appDir=%2FUsers%2Fkehanzhang%2Flovable-clone%2Flovable-ui%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkehanzhang%2Flovable-clone%2Flovable-ui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgenerate%2Froute&page=%2Fapi%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate%2Froute.ts&appDir=%2FUsers%2Fkehanzhang%2Flovable-clone%2Flovable-ui%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkehanzhang%2Flovable-clone%2Flovable-ui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_kehanzhang_lovable_clone_lovable_ui_app_api_generate_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/generate/route.ts */ \"(rsc)/./app/api/generate/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/generate/route\",\n        pathname: \"/api/generate\",\n        filename: \"route\",\n        bundlePath: \"app/api/generate/route\"\n    },\n    resolvedPagePath: \"/Users/kehanzhang/lovable-clone/lovable-ui/app/api/generate/route.ts\",\n    nextConfigOutput,\n    userland: _Users_kehanzhang_lovable_clone_lovable_ui_app_api_generate_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/generate/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZnZW5lcmF0ZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZ2VuZXJhdGUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZnZW5lcmF0ZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmtlaGFuemhhbmclMkZsb3ZhYmxlLWNsb25lJTJGbG92YWJsZS11aSUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZrZWhhbnpoYW5nJTJGbG92YWJsZS1jbG9uZSUyRmxvdmFibGUtdWkmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ29CO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG92YWJsZS11aS8/YjcyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMva2VoYW56aGFuZy9sb3ZhYmxlLWNsb25lL2xvdmFibGUtdWkvYXBwL2FwaS9nZW5lcmF0ZS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZ2VuZXJhdGUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9nZW5lcmF0ZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZ2VuZXJhdGUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMva2VoYW56aGFuZy9sb3ZhYmxlLWNsb25lL2xvdmFibGUtdWkvYXBwL2FwaS9nZW5lcmF0ZS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvZ2VuZXJhdGUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgenerate%2Froute&page=%2Fapi%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate%2Froute.ts&appDir=%2FUsers%2Fkehanzhang%2Flovable-clone%2Flovable-ui%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkehanzhang%2Flovable-clone%2Flovable-ui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/generate/route.ts":
/*!***********************************!*\
  !*** ./app/api/generate/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_claude_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/claude-code */ \"(rsc)/./lib/claude-code.ts\");\n\n\nasync function POST(req) {\n    try {\n        const { prompt } = await req.json();\n        if (!prompt) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Prompt is required\"\n            }, {\n                status: 400\n            });\n        }\n        console.log(\"Generating code for prompt:\", prompt);\n        const result = await (0,_lib_claude_code__WEBPACK_IMPORTED_MODULE_1__.generateCodeWithClaude)(prompt);\n        if (!result.success) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: result.error || \"Failed to generate code\"\n            }, {\n                status: 500\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            messages: result.messages\n        });\n    } catch (error) {\n        console.error(\"API error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message || \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dlbmVyYXRlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3RDtBQUNHO0FBRXBELGVBQWVFLEtBQUtDLEdBQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHLE1BQU1ELElBQUlFLElBQUk7UUFFakMsSUFBSSxDQUFDRCxRQUFRO1lBQ1gsT0FBT0oscURBQVlBLENBQUNLLElBQUksQ0FDdEI7Z0JBQUVDLE9BQU87WUFBcUIsR0FDOUI7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBQyxRQUFRQyxHQUFHLENBQUMsK0JBQStCTDtRQUUzQyxNQUFNTSxTQUFTLE1BQU1ULHdFQUFzQkEsQ0FBQ0c7UUFFNUMsSUFBSSxDQUFDTSxPQUFPQyxPQUFPLEVBQUU7WUFDbkIsT0FBT1gscURBQVlBLENBQUNLLElBQUksQ0FDdEI7Z0JBQUVDLE9BQU9JLE9BQU9KLEtBQUssSUFBSTtZQUEwQixHQUNuRDtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsT0FBT1AscURBQVlBLENBQUNLLElBQUksQ0FBQztZQUN2Qk0sU0FBUztZQUNUQyxVQUFVRixPQUFPRSxRQUFRO1FBQzNCO0lBRUYsRUFBRSxPQUFPTixPQUFZO1FBQ25CRSxRQUFRRixLQUFLLENBQUMsY0FBY0E7UUFDNUIsT0FBT04scURBQVlBLENBQUNLLElBQUksQ0FDdEI7WUFBRUMsT0FBT0EsTUFBTU8sT0FBTyxJQUFJO1FBQXdCLEdBQ2xEO1lBQUVOLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG92YWJsZS11aS8uL2FwcC9hcGkvZ2VuZXJhdGUvcm91dGUudHM/YjU5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUNvZGVXaXRoQ2xhdWRlIH0gZnJvbSBcIkAvbGliL2NsYXVkZS1jb2RlXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHByb21wdCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBcbiAgICBpZiAoIXByb21wdCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiBcIlByb21wdCBpcyByZXF1aXJlZFwiIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgY29uc29sZS5sb2coXCJHZW5lcmF0aW5nIGNvZGUgZm9yIHByb21wdDpcIiwgcHJvbXB0KTtcbiAgICBcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZW5lcmF0ZUNvZGVXaXRoQ2xhdWRlKHByb21wdCk7XG4gICAgXG4gICAgaWYgKCFyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiByZXN1bHQuZXJyb3IgfHwgXCJGYWlsZWQgdG8gZ2VuZXJhdGUgY29kZVwiIH0sXG4gICAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlczogcmVzdWx0Lm1lc3NhZ2VzXG4gICAgfSk7XG4gICAgXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQVBJIGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCBcIkludGVybmFsIHNlcnZlciBlcnJvclwiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdlbmVyYXRlQ29kZVdpdGhDbGF1ZGUiLCJQT1NUIiwicmVxIiwicHJvbXB0IiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/generate/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/claude-code.ts":
/*!****************************!*\
  !*** ./lib/claude-code.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateCodeWithClaude: () => (/* binding */ generateCodeWithClaude)\n/* harmony export */ });\n/* harmony import */ var _anthropic_ai_claude_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @anthropic-ai/claude-code */ \"(rsc)/./node_modules/@anthropic-ai/claude-code/sdk.mjs\");\n\nasync function generateCodeWithClaude(prompt) {\n    try {\n        const messages = [];\n        const abortController = new AbortController();\n        // Execute the query and collect all messages\n        for await (const message of (0,_anthropic_ai_claude_code__WEBPACK_IMPORTED_MODULE_0__.query)({\n            prompt: prompt,\n            abortController: abortController,\n            options: {\n                maxTurns: 10,\n                // Grant all necessary permissions for code generation\n                allowedTools: [\n                    \"Read\",\n                    \"Write\",\n                    \"Edit\",\n                    \"MultiEdit\",\n                    \"Bash\",\n                    \"LS\",\n                    \"Glob\",\n                    \"Grep\",\n                    \"WebSearch\",\n                    \"WebFetch\"\n                ]\n            }\n        })){\n            messages.push(message);\n        }\n        return {\n            success: true,\n            messages: messages\n        };\n    } catch (error) {\n        console.error(\"Error generating code:\", error);\n        return {\n            success: false,\n            messages: [],\n            error: error.message\n        };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvY2xhdWRlLWNvZGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUU7QUFRNUQsZUFBZUMsdUJBQXVCQyxNQUFjO0lBQ3pELElBQUk7UUFDRixNQUFNQyxXQUF5QixFQUFFO1FBQ2pDLE1BQU1DLGtCQUFrQixJQUFJQztRQUU1Qiw2Q0FBNkM7UUFDN0MsV0FBVyxNQUFNQyxXQUFXTixnRUFBS0EsQ0FBQztZQUNoQ0UsUUFBUUE7WUFDUkUsaUJBQWlCQTtZQUNqQkcsU0FBUztnQkFDUEMsVUFBVTtnQkFDVixzREFBc0Q7Z0JBQ3REQyxjQUFjO29CQUNaO29CQUNBO29CQUNBO29CQUNBO29CQUNBO29CQUNBO29CQUNBO29CQUNBO29CQUNBO29CQUNBO2lCQUNEO1lBQ0g7UUFDRixHQUFJO1lBQ0ZOLFNBQVNPLElBQUksQ0FBQ0o7UUFDaEI7UUFFQSxPQUFPO1lBQ0xLLFNBQVM7WUFDVFIsVUFBVUE7UUFDWjtJQUVGLEVBQUUsT0FBT1MsT0FBWTtRQUNuQkMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7UUFDeEMsT0FBTztZQUNMRCxTQUFTO1lBQ1RSLFVBQVUsRUFBRTtZQUNaUyxPQUFPQSxNQUFNTixPQUFPO1FBQ3RCO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2xvdmFibGUtdWkvLi9saWIvY2xhdWRlLWNvZGUudHM/MzBkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeSwgdHlwZSBTREtNZXNzYWdlIH0gZnJvbSBcIkBhbnRocm9waWMtYWkvY2xhdWRlLWNvZGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb2RlR2VuZXJhdGlvblJlc3VsdCB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIG1lc3NhZ2VzOiBTREtNZXNzYWdlW107XG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVDb2RlV2l0aENsYXVkZShwcm9tcHQ6IHN0cmluZyk6IFByb21pc2U8Q29kZUdlbmVyYXRpb25SZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBtZXNzYWdlczogU0RLTWVzc2FnZVtdID0gW107XG4gICAgY29uc3QgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIFxuICAgIC8vIEV4ZWN1dGUgdGhlIHF1ZXJ5IGFuZCBjb2xsZWN0IGFsbCBtZXNzYWdlc1xuICAgIGZvciBhd2FpdCAoY29uc3QgbWVzc2FnZSBvZiBxdWVyeSh7XG4gICAgICBwcm9tcHQ6IHByb21wdCxcbiAgICAgIGFib3J0Q29udHJvbGxlcjogYWJvcnRDb250cm9sbGVyLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBtYXhUdXJuczogMTAsIC8vIEFsbG93IG11bHRpcGxlIHR1cm5zIGZvciBjb21wbGV4IGJ1aWxkc1xuICAgICAgICAvLyBHcmFudCBhbGwgbmVjZXNzYXJ5IHBlcm1pc3Npb25zIGZvciBjb2RlIGdlbmVyYXRpb25cbiAgICAgICAgYWxsb3dlZFRvb2xzOiBbXG4gICAgICAgICAgXCJSZWFkXCIsXG4gICAgICAgICAgXCJXcml0ZVwiLFxuICAgICAgICAgIFwiRWRpdFwiLFxuICAgICAgICAgIFwiTXVsdGlFZGl0XCIsXG4gICAgICAgICAgXCJCYXNoXCIsXG4gICAgICAgICAgXCJMU1wiLFxuICAgICAgICAgIFwiR2xvYlwiLFxuICAgICAgICAgIFwiR3JlcFwiLFxuICAgICAgICAgIFwiV2ViU2VhcmNoXCIsXG4gICAgICAgICAgXCJXZWJGZXRjaFwiXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9KSkge1xuICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlczogbWVzc2FnZXNcbiAgICB9O1xuICAgIFxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdlbmVyYXRpbmcgY29kZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgfTtcbiAgfVxufSJdLCJuYW1lcyI6WyJxdWVyeSIsImdlbmVyYXRlQ29kZVdpdGhDbGF1ZGUiLCJwcm9tcHQiLCJtZXNzYWdlcyIsImFib3J0Q29udHJvbGxlciIsIkFib3J0Q29udHJvbGxlciIsIm1lc3NhZ2UiLCJvcHRpb25zIiwibWF4VHVybnMiLCJhbGxvd2VkVG9vbHMiLCJwdXNoIiwic3VjY2VzcyIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/claude-code.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@anthropic-ai"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgenerate%2Froute&page=%2Fapi%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate%2Froute.ts&appDir=%2FUsers%2Fkehanzhang%2Flovable-clone%2Flovable-ui%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkehanzhang%2Flovable-clone%2Flovable-ui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();