module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/purchases.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/category.js":
/*!****************************!*\
  !*** ./models/category.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = mongoose => {\n  var categorySchema = new mongoose.Schema({\n    name: {\n      type: String,\n      required: [true, 'Name is required']\n    },\n    code: {\n      type: String,\n      required: [true, 'Code is required']\n    }\n  }, {\n    timestamps: true,\n    toJSON: {\n      virtuals: true\n    },\n    toObject: {\n      virtuals: true\n    }\n  });\n  return categorySchema;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvY2F0ZWdvcnkuanM/NTkyMSJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibW9uZ29vc2UiLCJjYXRlZ29yeVNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJjb2RlIiwidGltZXN0YW1wcyIsInRvSlNPTiIsInZpcnR1YWxzIiwidG9PYmplY3QiXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUJDLFFBQUQsSUFDaEI7QUFDRSxNQUFJQyxjQUFjLEdBQUksSUFBSUQsUUFBUSxDQUFDRSxNQUFiLENBQ3BCO0FBQ0VDLFFBQUksRUFBRTtBQUNKQyxVQUFJLEVBQUVDLE1BREY7QUFFSkMsY0FBUSxFQUFFLENBQUMsSUFBRCxFQUFPLGtCQUFQO0FBRk4sS0FEUjtBQUtFQyxRQUFJLEVBQUU7QUFDSkgsVUFBSSxFQUFFQyxNQURGO0FBRUpDLGNBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyxrQkFBUDtBQUZOO0FBTFIsR0FEb0IsRUFXcEI7QUFBRUUsY0FBVSxFQUFFLElBQWQ7QUFBb0JDLFVBQU0sRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUE1QjtBQUFnREMsWUFBUSxFQUFFO0FBQUVELGNBQVEsRUFBRTtBQUFaO0FBQTFELEdBWG9CLENBQXRCO0FBYUEsU0FBT1QsY0FBUDtBQUNELENBaEJEIiwiZmlsZSI6Ii4vbW9kZWxzL2NhdGVnb3J5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPShtb25nb29zZSkgPT5cbntcbiAgdmFyIGNhdGVnb3J5U2NoZW1hICA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gICAgeyBcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsICdOYW1lIGlzIHJlcXVpcmVkJ10sXG4gICAgICB9LFxuICAgICAgY29kZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0NvZGUgaXMgcmVxdWlyZWQnXSxcbiAgICAgIH0sIFxuICAgIH0sXG4gICAgeyB0aW1lc3RhbXBzOiB0cnVlLCB0b0pTT046IHsgdmlydHVhbHM6IHRydWUgfSwgdG9PYmplY3Q6IHsgdmlydHVhbHM6IHRydWUgfSB9XG4gICk7XG4gIHJldHVybiBjYXRlZ29yeVNjaGVtYTtcbn0gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/category.js\n");

/***/ }),

/***/ "./models/dbContext.js":
/*!*****************************!*\
  !*** ./models/dbContext.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst userSchema = __webpack_require__(/*! ./user */ \"./models/user.js\")(mongoose);\n\nconst purchaseSchema = __webpack_require__(/*! ./purchase */ \"./models/purchase.js\")(mongoose);\n\nconst categorySchema = __webpack_require__(/*! ./category */ \"./models/category.js\")(mongoose);\n\nconst productSchema = __webpack_require__(/*! ./product */ \"./models/product.js\")(mongoose);\n\nconst User = mongoose.models.User || mongoose.model('User', userSchema);\nconst Product = mongoose.models.Product || mongoose.model('Product', productSchema);\nconst Category = mongoose.models.Category || mongoose.model('Category', categorySchema);\nconst Purchase = mongoose.models.Purchase || mongoose.model('Purchase', purchaseSchema);\nmodule.exports = {\n  User,\n  Product,\n  Purchase,\n  Category\n}; //Populate relational fields\n// purchaseSchema.pre(/^find/, function (next) {\n//   this.populate({\n//     path: 'user',\n//     select: 'email',\n//   });\n//   next();\n// });\n// purchaseSchema.pre(/^find/, function (next) {\n//   this.populate({\n//     path: 'product',\n//     select: 'title',\n//   });\n//   next();\n// });\n//const Purchase = mongoose.model('Purchase', purchaseSchema);\n// const Product = mongoose.model('Product', productSchema);\n//const User = mongoose.model('User', userSchema);\n//module.exports = {Product,Purchase};\n//module.exports = purchaseSchema;\n// module.exports =\n//   mongoose.models.Product || mongoose.model('Product', productSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvZGJDb250ZXh0LmpzPzk3NGMiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwidXNlclNjaGVtYSIsInB1cmNoYXNlU2NoZW1hIiwiY2F0ZWdvcnlTY2hlbWEiLCJwcm9kdWN0U2NoZW1hIiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIiwiUHJvZHVjdCIsIkNhdGVnb3J5IiwiUHVyY2hhc2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsMEJBQUQsQ0FBeEI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFLRCxtQkFBTyxDQUFDLGdDQUFELENBQVAsQ0FBa0JELFFBQWxCLENBQXJCOztBQUNBLE1BQU1HLGNBQWMsR0FBSUYsbUJBQU8sQ0FBQyx3Q0FBRCxDQUFQLENBQXNCRCxRQUF0QixDQUF4Qjs7QUFDQSxNQUFNSSxjQUFjLEdBQUlILG1CQUFPLENBQUMsd0NBQUQsQ0FBUCxDQUFzQkQsUUFBdEIsQ0FBeEI7O0FBQ0EsTUFBTUssYUFBYSxHQUFJSixtQkFBTyxDQUFDLHNDQUFELENBQVAsQ0FBcUJELFFBQXJCLENBQXZCOztBQUVBLE1BQU1NLElBQUksR0FBSU4sUUFBUSxDQUFDTyxNQUFULENBQWdCRCxJQUFoQixJQUF3Qk4sUUFBUSxDQUFDUSxLQUFULENBQWUsTUFBZixFQUF1Qk4sVUFBdkIsQ0FBdEM7QUFDQSxNQUFNTyxPQUFPLEdBQUlULFFBQVEsQ0FBQ08sTUFBVCxDQUFnQkUsT0FBaEIsSUFBMkJULFFBQVEsQ0FBQ1EsS0FBVCxDQUFlLFNBQWYsRUFBMEJILGFBQTFCLENBQTVDO0FBQ0EsTUFBTUssUUFBUSxHQUFHVixRQUFRLENBQUNPLE1BQVQsQ0FBZ0JHLFFBQWhCLElBQTRCVixRQUFRLENBQUNRLEtBQVQsQ0FBZSxVQUFmLEVBQTJCSixjQUEzQixDQUE3QztBQUNBLE1BQU1PLFFBQVEsR0FBR1gsUUFBUSxDQUFDTyxNQUFULENBQWdCSSxRQUFoQixJQUE0QlgsUUFBUSxDQUFDUSxLQUFULENBQWUsVUFBZixFQUEyQkwsY0FBM0IsQ0FBN0M7QUFDQVMsTUFBTSxDQUFDQyxPQUFQLEdBQWtCO0FBQUNQLE1BQUQ7QUFBTUcsU0FBTjtBQUFjRSxVQUFkO0FBQXVCRDtBQUF2QixDQUFsQixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0EiLCJmaWxlIjoiLi9tb2RlbHMvZGJDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuY29uc3QgdXNlclNjaGVtYSA9ICAgcmVxdWlyZSgnLi91c2VyJykobW9uZ29vc2UpOyBcbmNvbnN0IHB1cmNoYXNlU2NoZW1hID0gIHJlcXVpcmUoJy4vcHVyY2hhc2UnKShtb25nb29zZSk7IFxuY29uc3QgY2F0ZWdvcnlTY2hlbWEgPSAgcmVxdWlyZSgnLi9jYXRlZ29yeScpKG1vbmdvb3NlKTsgIFxuY29uc3QgcHJvZHVjdFNjaGVtYSA9ICByZXF1aXJlKCcuL3Byb2R1Y3QnKShtb25nb29zZSk7ICBcblxuY29uc3QgVXNlciAgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbCgnVXNlcicsIHVzZXJTY2hlbWEpO1xuY29uc3QgUHJvZHVjdCA9ICBtb25nb29zZS5tb2RlbHMuUHJvZHVjdCB8fCBtb25nb29zZS5tb2RlbCgnUHJvZHVjdCcsIHByb2R1Y3RTY2hlbWEpO1xuY29uc3QgQ2F0ZWdvcnkgPSBtb25nb29zZS5tb2RlbHMuQ2F0ZWdvcnkgfHwgbW9uZ29vc2UubW9kZWwoJ0NhdGVnb3J5JywgY2F0ZWdvcnlTY2hlbWEpOyBcbmNvbnN0IFB1cmNoYXNlID0gbW9uZ29vc2UubW9kZWxzLlB1cmNoYXNlIHx8IG1vbmdvb3NlLm1vZGVsKCdQdXJjaGFzZScsIHB1cmNoYXNlU2NoZW1hKTsgXG5tb2R1bGUuZXhwb3J0cyA9ICB7VXNlcixQcm9kdWN0LFB1cmNoYXNlLENhdGVnb3J5fTsgXG5cbi8vUG9wdWxhdGUgcmVsYXRpb25hbCBmaWVsZHNcbi8vIHB1cmNoYXNlU2NoZW1hLnByZSgvXmZpbmQvLCBmdW5jdGlvbiAobmV4dCkge1xuLy8gICB0aGlzLnBvcHVsYXRlKHtcbi8vICAgICBwYXRoOiAndXNlcicsXG4vLyAgICAgc2VsZWN0OiAnZW1haWwnLFxuLy8gICB9KTtcbi8vICAgbmV4dCgpO1xuLy8gfSk7XG5cbi8vIHB1cmNoYXNlU2NoZW1hLnByZSgvXmZpbmQvLCBmdW5jdGlvbiAobmV4dCkge1xuLy8gICB0aGlzLnBvcHVsYXRlKHtcbi8vICAgICBwYXRoOiAncHJvZHVjdCcsXG4vLyAgICAgc2VsZWN0OiAndGl0bGUnLFxuLy8gICB9KTtcbi8vICAgbmV4dCgpO1xuLy8gfSk7XG4vL2NvbnN0IFB1cmNoYXNlID0gbW9uZ29vc2UubW9kZWwoJ1B1cmNoYXNlJywgcHVyY2hhc2VTY2hlbWEpO1xuLy8gY29uc3QgUHJvZHVjdCA9IG1vbmdvb3NlLm1vZGVsKCdQcm9kdWN0JywgcHJvZHVjdFNjaGVtYSk7XG4vL2NvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbCgnVXNlcicsIHVzZXJTY2hlbWEpO1xuLy9tb2R1bGUuZXhwb3J0cyA9IHtQcm9kdWN0LFB1cmNoYXNlfTtcbiBcbi8vbW9kdWxlLmV4cG9ydHMgPSBwdXJjaGFzZVNjaGVtYTtcblxuLy8gbW9kdWxlLmV4cG9ydHMgPVxuLy8gICBtb25nb29zZS5tb2RlbHMuUHJvZHVjdCB8fCBtb25nb29zZS5tb2RlbCgnUHJvZHVjdCcsIHByb2R1Y3RTY2hlbWEpO1xuICBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/dbContext.js\n");

/***/ }),

/***/ "./models/product.js":
/*!***************************!*\
  !*** ./models/product.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//const mongoose = require('mongoose');\nmodule.exports = mongoose => {\n  var productSchema = new mongoose.Schema({\n    category: {\n      type: mongoose.Schema.Types.ObjectId,\n      ref: 'Category',\n      required: [true, 'Category is required']\n    },\n    title: {\n      type: String,\n      required: [true, 'Title is required']\n    },\n    amount: {\n      type: Number,\n      required: [true, 'Amount is required']\n    },\n    stripeId: {\n      type: String,\n      required: [true, 'Stripe ID is required']\n    }\n  }, {\n    timestamps: true,\n    toJSON: {\n      virtuals: true\n    },\n    toObject: {\n      virtuals: true\n    }\n  });\n  return productSchema;\n}; // module.exports =\n//   mongoose.models.Product || mongoose.model('Product', productSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvcHJvZHVjdC5qcz8wZDhlIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtb25nb29zZSIsInByb2R1Y3RTY2hlbWEiLCJTY2hlbWEiLCJjYXRlZ29yeSIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicmVxdWlyZWQiLCJ0aXRsZSIsIlN0cmluZyIsImFtb3VudCIsIk51bWJlciIsInN0cmlwZUlkIiwidGltZXN0YW1wcyIsInRvSlNPTiIsInZpcnR1YWxzIiwidG9PYmplY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsUUFBRCxJQUNoQjtBQUNFLE1BQUlDLGFBQWEsR0FBSSxJQUFJRCxRQUFRLENBQUNFLE1BQWIsQ0FDbkI7QUFDRUMsWUFBUSxFQUFFO0FBQ1JDLFVBQUksRUFBRUosUUFBUSxDQUFDRSxNQUFULENBQWdCRyxLQUFoQixDQUFzQkMsUUFEcEI7QUFFUkMsU0FBRyxFQUFFLFVBRkc7QUFHUkMsY0FBUSxFQUFFLENBQUMsSUFBRCxFQUFPLHNCQUFQO0FBSEYsS0FEWjtBQU1FQyxTQUFLLEVBQUU7QUFDTEwsVUFBSSxFQUFFTSxNQUREO0FBRUxGLGNBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyxtQkFBUDtBQUZMLEtBTlQ7QUFVRUcsVUFBTSxFQUFFO0FBQ05QLFVBQUksRUFBRVEsTUFEQTtBQUVOSixjQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU8sb0JBQVA7QUFGSixLQVZWO0FBY0VLLFlBQVEsRUFBRTtBQUNSVCxVQUFJLEVBQUVNLE1BREU7QUFFUkYsY0FBUSxFQUFFLENBQUMsSUFBRCxFQUFPLHVCQUFQO0FBRkY7QUFkWixHQURtQixFQW9CbkI7QUFBRU0sY0FBVSxFQUFFLElBQWQ7QUFBb0JDLFVBQU0sRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUE1QjtBQUFnREMsWUFBUSxFQUFFO0FBQUVELGNBQVEsRUFBRTtBQUFaO0FBQTFELEdBcEJtQixDQUFyQjtBQXNCQSxTQUFPZixhQUFQO0FBQ0QsQ0F6QkQsQyxDQTJCQTtBQUNBIiwiZmlsZSI6Ii4vbW9kZWxzL3Byb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbm1vZHVsZS5leHBvcnRzID0obW9uZ29vc2UpID0+XG57XG4gIHZhciBwcm9kdWN0U2NoZW1hICA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gICAge1xuICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgICByZWY6ICdDYXRlZ29yeScsXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0NhdGVnb3J5IGlzIHJlcXVpcmVkJ10sXG4gICAgICB9LFxuICAgICAgdGl0bGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsICdUaXRsZSBpcyByZXF1aXJlZCddLFxuICAgICAgfSxcbiAgICAgIGFtb3VudDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0Ftb3VudCBpcyByZXF1aXJlZCddLFxuICAgICAgfSxcbiAgICAgIHN0cmlwZUlkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnU3RyaXBlIElEIGlzIHJlcXVpcmVkJ10sXG4gICAgICB9LFxuICAgIH0sXG4gICAgeyB0aW1lc3RhbXBzOiB0cnVlLCB0b0pTT046IHsgdmlydHVhbHM6IHRydWUgfSwgdG9PYmplY3Q6IHsgdmlydHVhbHM6IHRydWUgfSB9XG4gICk7XG4gIHJldHVybiBwcm9kdWN0U2NoZW1hO1xufSBcblxuLy8gbW9kdWxlLmV4cG9ydHMgPVxuLy8gICBtb25nb29zZS5tb2RlbHMuUHJvZHVjdCB8fCBtb25nb29zZS5tb2RlbCgnUHJvZHVjdCcsIHByb2R1Y3RTY2hlbWEpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/product.js\n");

/***/ }),

/***/ "./models/purchase.js":
/*!****************************!*\
  !*** ./models/purchase.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nconst validator = __webpack_require__(/*! validator */ \"validator\");\n\nmodule.exports = mongoose => {\n  const purchaseSchema = new mongoose.Schema({\n    product: {\n      type: mongoose.Schema.Types.ObjectId,\n      ref: 'Product',\n      required: [true, 'Product is required']\n    },\n    amount: {\n      type: Number,\n      required: [true, 'Amount is required']\n    },\n    user: {\n      type: mongoose.Schema.Types.ObjectId,\n      ref: 'User'\n    }\n  }, {\n    timestamps: true,\n    toJSON: {\n      virtuals: true\n    },\n    toObject: {\n      virtuals: true\n    }\n  });\n  return purchaseSchema;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvcHVyY2hhc2UuanM/YzM0MyJdLCJuYW1lcyI6WyJjcnlwdG8iLCJyZXF1aXJlIiwidmFsaWRhdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vbmdvb3NlIiwicHVyY2hhc2VTY2hlbWEiLCJTY2hlbWEiLCJwcm9kdWN0IiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJyZXF1aXJlZCIsImFtb3VudCIsIk51bWJlciIsInVzZXIiLCJ0aW1lc3RhbXBzIiwidG9KU09OIiwidmlydHVhbHMiLCJ0b09iamVjdCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFELENBQXRCOztBQUNBLE1BQU1DLFNBQVMsR0FBR0QsbUJBQU8sQ0FBQyw0QkFBRCxDQUF6Qjs7QUFDQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWtCQyxRQUFELElBQWM7QUFDN0IsUUFBTUMsY0FBYyxHQUFHLElBQUlELFFBQVEsQ0FBQ0UsTUFBYixDQUNyQjtBQUNFQyxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFSixRQUFRLENBQUNFLE1BQVQsQ0FBZ0JHLEtBQWhCLENBQXNCQyxRQURyQjtBQUVQQyxTQUFHLEVBQUUsU0FGRTtBQUdQQyxjQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU8scUJBQVA7QUFISCxLQURYO0FBTUVDLFVBQU0sRUFBRTtBQUNOTCxVQUFJLEVBQUVNLE1BREE7QUFFTkYsY0FBUSxFQUFFLENBQUMsSUFBRCxFQUFPLG9CQUFQO0FBRkosS0FOVjtBQVVFRyxRQUFJLEVBQUU7QUFDSlAsVUFBSSxFQUFFSixRQUFRLENBQUNFLE1BQVQsQ0FBZ0JHLEtBQWhCLENBQXNCQyxRQUR4QjtBQUVKQyxTQUFHLEVBQUU7QUFGRDtBQVZSLEdBRHFCLEVBZ0JyQjtBQUFFSyxjQUFVLEVBQUUsSUFBZDtBQUFvQkMsVUFBTSxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBQTVCO0FBQWdEQyxZQUFRLEVBQUU7QUFBRUQsY0FBUSxFQUFFO0FBQVo7QUFBMUQsR0FoQnFCLENBQXZCO0FBa0JBLFNBQU9iLGNBQVA7QUFDRCxDQXBCRCIsImZpbGUiOiIuL21vZGVscy9wdXJjaGFzZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuY29uc3QgdmFsaWRhdG9yID0gcmVxdWlyZSgndmFsaWRhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IChtb25nb29zZSkgPT4ge1xuICBjb25zdCBwdXJjaGFzZVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gICAge1xuICAgICAgcHJvZHVjdDoge1xuICAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICAgIHJlZjogJ1Byb2R1Y3QnLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsICdQcm9kdWN0IGlzIHJlcXVpcmVkJ10sXG4gICAgICB9LFxuICAgICAgYW1vdW50OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnQW1vdW50IGlzIHJlcXVpcmVkJ10sXG4gICAgICB9LFxuICAgICAgdXNlcjoge1xuICAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICAgIHJlZjogJ1VzZXInLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHsgdGltZXN0YW1wczogdHJ1ZSwgdG9KU09OOiB7IHZpcnR1YWxzOiB0cnVlIH0sIHRvT2JqZWN0OiB7IHZpcnR1YWxzOiB0cnVlIH0gfVxuICApO1xuICByZXR1cm4gcHVyY2hhc2VTY2hlbWE7XG59IFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/purchase.js\n");

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nconst validator = __webpack_require__(/*! validator */ \"validator\");\n\nmodule.exports = mongoose => {\n  const refreshToken = new mongoose.Schema({\n    token: {\n      type: String,\n      trim: true\n    },\n    expiration: {\n      type: Date\n    },\n    issued: {\n      type: Date,\n      default: Date.now()\n    },\n    select: false\n  });\n  const userSchema = new mongoose.Schema({\n    name: {\n      type: String,\n      trim: true\n    },\n    email: {\n      type: String,\n      unique: true,\n      required: [true, 'Email cannot be empty'],\n      trim: true,\n      lowercase: true,\n      validate: [validator.isEmail]\n    },\n    photo: {\n      type: String,\n      default: 'default-user.jpg'\n    },\n    role: {\n      type: String,\n      enum: ['user', 'editor', 'admin', 'pro'],\n      default: 'user'\n    },\n    customerId: {\n      type: String\n    },\n    authLoginToken: {\n      type: String,\n      select: false\n    },\n    authLoginExpires: {\n      type: Date,\n      select: false\n    },\n    active: {\n      type: Boolean,\n      default: true,\n      select: false\n    },\n    refreshTokens: [refreshToken]\n  }, {\n    timestamps: true,\n    toJSON: {\n      virtuals: true\n    },\n    toObject: {\n      virtuals: true\n    }\n  }); // Virtual populate\n\n  userSchema.virtual('purchases', {\n    ref: 'Purchase',\n    foreignField: 'user',\n    localField: '_id'\n  });\n  userSchema.pre(/^find/, function (next) {\n    // This points to the current query\n    this.find({\n      active: {\n        $ne: false\n      }\n    });\n    next();\n  });\n\n  userSchema.methods.createAuthToken = function () {\n    const authToken = crypto.randomBytes(3).toString('hex');\n    this.authLoginToken = crypto.createHash('sha256').update(authToken).digest('hex');\n    this.authLoginExpires = Date.now() + 10 * 60 * 1000;\n    return authToken;\n  };\n\n  return userSchema;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvdXNlci5qcz8xZjY5Il0sIm5hbWVzIjpbImNyeXB0byIsInJlcXVpcmUiLCJ2YWxpZGF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9uZ29vc2UiLCJyZWZyZXNoVG9rZW4iLCJTY2hlbWEiLCJ0b2tlbiIsInR5cGUiLCJTdHJpbmciLCJ0cmltIiwiZXhwaXJhdGlvbiIsIkRhdGUiLCJpc3N1ZWQiLCJkZWZhdWx0Iiwibm93Iiwic2VsZWN0IiwidXNlclNjaGVtYSIsIm5hbWUiLCJlbWFpbCIsInVuaXF1ZSIsInJlcXVpcmVkIiwibG93ZXJjYXNlIiwidmFsaWRhdGUiLCJpc0VtYWlsIiwicGhvdG8iLCJyb2xlIiwiZW51bSIsImN1c3RvbWVySWQiLCJhdXRoTG9naW5Ub2tlbiIsImF1dGhMb2dpbkV4cGlyZXMiLCJhY3RpdmUiLCJCb29sZWFuIiwicmVmcmVzaFRva2VucyIsInRpbWVzdGFtcHMiLCJ0b0pTT04iLCJ2aXJ0dWFscyIsInRvT2JqZWN0IiwidmlydHVhbCIsInJlZiIsImZvcmVpZ25GaWVsZCIsImxvY2FsRmllbGQiLCJwcmUiLCJuZXh0IiwiZmluZCIsIiRuZSIsIm1ldGhvZHMiLCJjcmVhdGVBdXRoVG9rZW4iLCJhdXRoVG9rZW4iLCJyYW5kb21CeXRlcyIsInRvU3RyaW5nIiwiY3JlYXRlSGFzaCIsInVwZGF0ZSIsImRpZ2VzdCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFELENBQXRCOztBQUNBLE1BQU1DLFNBQVMsR0FBR0QsbUJBQU8sQ0FBQyw0QkFBRCxDQUF6Qjs7QUFDQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWtCQyxRQUFELElBQWM7QUFDN0IsUUFBTUMsWUFBWSxHQUFHLElBQUlELFFBQVEsQ0FBQ0UsTUFBYixDQUFvQjtBQUN2Q0MsU0FBSyxFQUFFO0FBQ0xDLFVBQUksRUFBRUMsTUFERDtBQUVMQyxVQUFJLEVBQUU7QUFGRCxLQURnQztBQUt2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ZXNDb250ZW50IjpbImNvbnN0IGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuY29uc3QgdmFsaWRhdG9yID0gcmVxdWlyZSgndmFsaWRhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IChtb25nb29zZSkgPT4ge1xuICBjb25zdCByZWZyZXNoVG9rZW4gPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICB0b2tlbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICB9LFxuICAgIGV4cGlyYXRpb246IHtcbiAgICAgIHR5cGU6IERhdGUsXG4gICAgfSxcbiAgICBpc3N1ZWQ6IHtcbiAgICAgIHR5cGU6IERhdGUsXG4gICAgICBkZWZhdWx0OiBEYXRlLm5vdygpLFxuICAgIH0sXG4gICAgc2VsZWN0OiBmYWxzZSxcbiAgfSk7XG5cbiAgY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gICAge1xuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHRyaW06IHRydWUsXG4gICAgICB9LFxuICAgICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0VtYWlsIGNhbm5vdCBiZSBlbXB0eSddLFxuICAgICAgICB0cmltOiB0cnVlLFxuICAgICAgICBsb3dlcmNhc2U6IHRydWUsXG4gICAgICAgIHZhbGlkYXRlOiBbdmFsaWRhdG9yLmlzRW1haWxdLFxuICAgICAgfSxcbiAgICAgIHBob3RvOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2RlZmF1bHQtdXNlci5qcGcnLFxuICAgICAgfSxcbiAgICAgIHJvbGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBlbnVtOiBbJ3VzZXInLCAnZWRpdG9yJywgJ2FkbWluJywgJ3BybyddLFxuICAgICAgICBkZWZhdWx0OiAndXNlcicsXG4gICAgICB9LFxuICAgICAgY3VzdG9tZXJJZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgICAgYXV0aExvZ2luVG9rZW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBzZWxlY3Q6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGF1dGhMb2dpbkV4cGlyZXM6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgc2VsZWN0OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBhY3RpdmU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgc2VsZWN0OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICByZWZyZXNoVG9rZW5zOiBbcmVmcmVzaFRva2VuXSxcbiAgICB9LFxuICAgIHsgdGltZXN0YW1wczogdHJ1ZSwgdG9KU09OOiB7IHZpcnR1YWxzOiB0cnVlIH0sIHRvT2JqZWN0OiB7IHZpcnR1YWxzOiB0cnVlIH0gfVxuICApO1xuXG4gIC8vIFZpcnR1YWwgcG9wdWxhdGVcbiAgdXNlclNjaGVtYS52aXJ0dWFsKCdwdXJjaGFzZXMnLCB7XG4gICAgcmVmOiAnUHVyY2hhc2UnLFxuICAgIGZvcmVpZ25GaWVsZDogJ3VzZXInLFxuICAgIGxvY2FsRmllbGQ6ICdfaWQnLFxuICB9KTtcblxuICB1c2VyU2NoZW1hLnByZSgvXmZpbmQvLCBmdW5jdGlvbiAobmV4dCkge1xuICAgIC8vIFRoaXMgcG9pbnRzIHRvIHRoZSBjdXJyZW50IHF1ZXJ5XG4gICAgdGhpcy5maW5kKHsgYWN0aXZlOiB7ICRuZTogZmFsc2UgfSB9KTtcbiAgICBuZXh0KCk7XG4gIH0pO1xuXG4gIHVzZXJTY2hlbWEubWV0aG9kcy5jcmVhdGVBdXRoVG9rZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYXV0aFRva2VuID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDMpLnRvU3RyaW5nKCdoZXgnKTtcblxuICAgIHRoaXMuYXV0aExvZ2luVG9rZW4gPSBjcnlwdG9cbiAgICAgIC5jcmVhdGVIYXNoKCdzaGEyNTYnKVxuICAgICAgLnVwZGF0ZShhdXRoVG9rZW4pXG4gICAgICAuZGlnZXN0KCdoZXgnKTtcblxuICAgIHRoaXMuYXV0aExvZ2luRXhwaXJlcyA9IERhdGUubm93KCkgKyAxMCAqIDYwICogMTAwMDtcblxuICAgIHJldHVybiBhdXRoVG9rZW47XG4gIH07XG4gIHJldHVybiB1c2VyU2NoZW1hO1xufSBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/user.js\n");

/***/ }),

/***/ "./pages/api/purchases.js":
/*!********************************!*\
  !*** ./pages/api/purchases.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dbConnect */ \"./utils/dbConnect.js\");\n/* harmony import */ var _models_dbContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/dbContext */ \"./models/dbContext.js\");\n/* harmony import */ var _models_dbContext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_dbContext__WEBPACK_IMPORTED_MODULE_1__);\n\n\nObject(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst handler = async (req, res) => {\n  const {\n    method\n  } = req;\n  const {\n    id\n  } = req.query;\n\n  switch (method) {\n    case \"POST\":\n      await _models_dbContext__WEBPACK_IMPORTED_MODULE_1___default.a.Purchase.create(req.body);\n      return res.status(200).json({\n        success: true,\n        message: 'Saving successful!'\n      });\n\n    case \"GET\":\n      if (!id) {\n        const purchases = await _models_dbContext__WEBPACK_IMPORTED_MODULE_1___default.a.Purchase.find({}).populate('product').populate('user');\n        return res.status(200).json(purchases);\n      } else {\n        const purchase = await _models_dbContext__WEBPACK_IMPORTED_MODULE_1___default.a.Purchase.findById(id).populate('product').populate('user');\n        return res.status(200).json(purchase);\n      }\n\n    case \"DELETE\":\n      await _models_dbContext__WEBPACK_IMPORTED_MODULE_1___default.a.Purchase.deleteOne({\n        _id: id\n      });\n      return res.status(200).json({\n        success: true,\n        message: 'Delete successful!'\n      });\n\n    default:\n      return res.status(400).json({\n        success: false,\n        message: 'Only POST requests are allowed.'\n      });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler); //export default withProtect(withRoles(handler, 'admin'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHVyY2hhc2VzLmpzPzY1NmIiXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImlkIiwicXVlcnkiLCJkYkNvbnRleHQiLCJQdXJjaGFzZSIsImNyZWF0ZSIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJwdXJjaGFzZXMiLCJmaW5kIiwicG9wdWxhdGUiLCJwdXJjaGFzZSIsImZpbmRCeUlkIiwiZGVsZXRlT25lIiwiX2lkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQUEsZ0VBQVM7O0FBRVQsTUFBTUMsT0FBTyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNsQyxRQUFNO0FBQUVDO0FBQUYsTUFBYUYsR0FBbkI7QUFDQSxRQUFNO0FBQUVHO0FBQUYsTUFBU0gsR0FBRyxDQUFDSSxLQUFuQjs7QUFDQSxVQUFRRixNQUFSO0FBQ0UsU0FBSyxNQUFMO0FBQ0UsWUFBTUcsd0RBQVMsQ0FBQ0MsUUFBVixDQUFtQkMsTUFBbkIsQ0FBMEJQLEdBQUcsQ0FBQ1EsSUFBOUIsQ0FBTjtBQUNBLGFBQU9QLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCQyxlQUFPLEVBQUUsSUFEaUI7QUFFMUJDLGVBQU8sRUFBRTtBQUZpQixPQUFyQixDQUFQOztBQUlGLFNBQUssS0FBTDtBQUNFLFVBQUksQ0FBQ1QsRUFBTCxFQUFTO0FBQ1AsY0FBTVUsU0FBUyxHQUFHLE1BQU1SLHdEQUFTLENBQUNDLFFBQVYsQ0FBbUJRLElBQW5CLENBQXdCLEVBQXhCLEVBQTRCQyxRQUE1QixDQUFxQyxTQUFyQyxFQUFnREEsUUFBaEQsQ0FBeUQsTUFBekQsQ0FBeEI7QUFDQSxlQUFPZCxHQUFHLENBQ1BRLE1BREksQ0FDRyxHQURILEVBRUpDLElBRkksQ0FFQ0csU0FGRCxDQUFQO0FBR0QsT0FMRCxNQU1LO0FBQ0gsY0FBTUcsUUFBUSxHQUFHLE1BQU1YLHdEQUFTLENBQUNDLFFBQVYsQ0FBbUJXLFFBQW5CLENBQTRCZCxFQUE1QixFQUFnQ1ksUUFBaEMsQ0FBeUMsU0FBekMsRUFBb0RBLFFBQXBELENBQTZELE1BQTdELENBQXZCO0FBQ0EsZUFBT2QsR0FBRyxDQUNQUSxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUNNLFFBRkQsQ0FBUDtBQUdEOztBQUNILFNBQUssUUFBTDtBQUNFLFlBQU1YLHdEQUFTLENBQUNDLFFBQVYsQ0FBbUJZLFNBQW5CLENBQTZCO0FBQUVDLFdBQUcsRUFBRWhCO0FBQVAsT0FBN0IsQ0FBTjtBQUNBLGFBQU9GLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCQyxlQUFPLEVBQUUsSUFEaUI7QUFFMUJDLGVBQU8sRUFBRTtBQUZpQixPQUFyQixDQUFQOztBQUtGO0FBQ0UsYUFBT1gsR0FBRyxDQUNQUSxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7QUFBRUMsZUFBTyxFQUFFLEtBQVg7QUFBa0JDLGVBQU8sRUFBRTtBQUEzQixPQUZELENBQVA7QUE1Qko7QUFnQ0QsQ0FuQ0Q7O0FBb0NlYixzRUFBZixFLENBQ0EiLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHVyY2hhc2VzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tICcuLi8uLi91dGlscy9kYkNvbm5lY3QnXG5pbXBvcnQgZGJDb250ZXh0IGZyb20gJy4uLy4uL21vZGVscy9kYkNvbnRleHQnXG5kYkNvbm5lY3QoKTtcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xuICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSBcIlBPU1RcIjpcbiAgICAgIGF3YWl0IGRiQ29udGV4dC5QdXJjaGFzZS5jcmVhdGUocmVxLmJvZHkpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgbWVzc2FnZTogJ1NhdmluZyBzdWNjZXNzZnVsIScsXG4gICAgICB9KTtcbiAgICBjYXNlIFwiR0VUXCI6XG4gICAgICBpZiAoIWlkKSB7XG4gICAgICAgIGNvbnN0IHB1cmNoYXNlcyA9IGF3YWl0IGRiQ29udGV4dC5QdXJjaGFzZS5maW5kKHt9KS5wb3B1bGF0ZSgncHJvZHVjdCcpLnBvcHVsYXRlKCd1c2VyJyk7XG4gICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAuc3RhdHVzKDIwMClcbiAgICAgICAgICAuanNvbihwdXJjaGFzZXMpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IHB1cmNoYXNlID0gYXdhaXQgZGJDb250ZXh0LlB1cmNoYXNlLmZpbmRCeUlkKGlkKS5wb3B1bGF0ZSgncHJvZHVjdCcpLnBvcHVsYXRlKCd1c2VyJyk7XG4gICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAuc3RhdHVzKDIwMClcbiAgICAgICAgICAuanNvbihwdXJjaGFzZSk7XG4gICAgICB9XG4gICAgY2FzZSBcIkRFTEVURVwiOlxuICAgICAgYXdhaXQgZGJDb250ZXh0LlB1cmNoYXNlLmRlbGV0ZU9uZSh7IF9pZDogaWQgfSk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICBtZXNzYWdlOiAnRGVsZXRlIHN1Y2Nlc3NmdWwhJyxcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgLnN0YXR1cyg0MDApXG4gICAgICAgIC5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdPbmx5IFBPU1QgcmVxdWVzdHMgYXJlIGFsbG93ZWQuJyB9KTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4vL2V4cG9ydCBkZWZhdWx0IHdpdGhQcm90ZWN0KHdpdGhSb2xlcyhoYW5kbGVyLCAnYWRtaW4nKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/purchases.js\n");

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nasync function dbConnect() {\n  // check if we have a connection to the database or if it's currently\n  // connecting or disconnecting (readyState 1, 2 and 3)\n  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.readyState >= 1) {\n    return;\n  }\n\n  return mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.DATABASE, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useFindAndModify: false,\n    useCreateIndex: true\n  }).then(() => {\n    console.log('DB Connection Successful');\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYkNvbm5lY3QuanM/NDZlMiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VDcmVhdGVJbmRleCIsInRoZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxlQUFlQSxTQUFmLEdBQTJCO0FBQ3pCO0FBQ0E7QUFDQSxNQUFJQywrQ0FBUSxDQUFDQyxVQUFULENBQW9CQyxVQUFwQixJQUFrQyxDQUF0QyxFQUF5QztBQUN2QztBQUNEOztBQUVELFNBQU9GLCtDQUFRLENBQ1pHLE9BREksQ0FDSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBRGhCLEVBQzBCO0FBQzdCQyxtQkFBZSxFQUFFLElBRFk7QUFFN0JDLHNCQUFrQixFQUFFLElBRlM7QUFHN0JDLG9CQUFnQixFQUFFLEtBSFc7QUFJN0JDLGtCQUFjLEVBQUU7QUFKYSxHQUQxQixFQU9KQyxJQVBJLENBT0MsTUFBTTtBQUNWQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWjtBQUNELEdBVEksQ0FBUDtBQVVEOztBQUVjZCx3RUFBZiIsImZpbGUiOiIuL3V0aWxzL2RiQ29ubmVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgLy8gY2hlY2sgaWYgd2UgaGF2ZSBhIGNvbm5lY3Rpb24gdG8gdGhlIGRhdGFiYXNlIG9yIGlmIGl0J3MgY3VycmVudGx5XG4gIC8vIGNvbm5lY3Rpbmcgb3IgZGlzY29ubmVjdGluZyAocmVhZHlTdGF0ZSAxLCAyIGFuZCAzKVxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID49IDEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gbW9uZ29vc2VcbiAgICAuY29ubmVjdChwcm9jZXNzLmVudi5EQVRBQkFTRSwge1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG4gICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdEQiBDb25uZWN0aW9uIFN1Y2Nlc3NmdWwnKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/dbConnect.js\n");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIj80Yzc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImNyeXB0by5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///crypto\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YWxpZGF0b3JcIj9iMGNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZhbGlkYXRvclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///validator\n");

/***/ })

/******/ });