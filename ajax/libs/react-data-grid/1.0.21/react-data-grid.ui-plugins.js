(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactDataGrid"] = factory(require("react"), require("react-dom"));
	else
		root["ReactDataGrid"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Draggable = exports.ToolsPanel = exports.Data = exports.Menu = exports.Toolbar = exports.Formatters = exports.Editors = undefined;

	var _draggable = __webpack_require__(110);

	var _draggable2 = _interopRequireDefault(_draggable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var Editors = __webpack_require__(115);
	var Formatters = __webpack_require__(117);
	var Toolbar = __webpack_require__(124);
	var ToolsPanel = __webpack_require__(125);
	var Data = __webpack_require__(108);
	var Menu = __webpack_require__(120);


	window.ReactDataGridPlugins = { Editors: Editors, Formatters: Formatters, Toolbar: Toolbar, Menu: Menu, Data: Data, ToolsPanel: ToolsPanel, Draggable: _draggable2['default'] };
	exports.Editors = Editors;
	exports.Formatters = Formatters;
	exports.Toolbar = Toolbar;
	exports.Menu = Menu;
	exports.Data = Data;
	exports.ToolsPanel = ToolsPanel;
	exports.Draggable = _draggable2['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(71);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(72),
	    isHostObject = __webpack_require__(39),
	    isObjectLike = __webpack_require__(10);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(61);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = baseRest;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(184),
	    getValue = __webpack_require__(208);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(24),
	    isObjectLike = __webpack_require__(10);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.beginDrag = beginDrag;
	exports.publishDragSource = publishDragSource;
	exports.hover = hover;
	exports.drop = drop;
	exports.endDrag = endDrag;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsMatchesType = __webpack_require__(55);

	var _utilsMatchesType2 = _interopRequireDefault(_utilsMatchesType);

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashIsArray = __webpack_require__(3);

	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);

	var _lodashIsObject = __webpack_require__(9);

	var _lodashIsObject2 = _interopRequireDefault(_lodashIsObject);

	var BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
	exports.BEGIN_DRAG = BEGIN_DRAG;
	var PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
	exports.PUBLISH_DRAG_SOURCE = PUBLISH_DRAG_SOURCE;
	var HOVER = 'dnd-core/HOVER';
	exports.HOVER = HOVER;
	var DROP = 'dnd-core/DROP';
	exports.DROP = DROP;
	var END_DRAG = 'dnd-core/END_DRAG';

	exports.END_DRAG = END_DRAG;

	function beginDrag(sourceIds) {
	  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  var _ref$publishSource = _ref.publishSource;
	  var publishSource = _ref$publishSource === undefined ? true : _ref$publishSource;
	  var _ref$clientOffset = _ref.clientOffset;
	  var clientOffset = _ref$clientOffset === undefined ? null : _ref$clientOffset;
	  var getSourceClientOffset = _ref.getSourceClientOffset;

	  _invariant2['default'](_lodashIsArray2['default'](sourceIds), 'Expected sourceIds to be an array.');

	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  _invariant2['default'](!monitor.isDragging(), 'Cannot call beginDrag while dragging.');

	  for (var i = 0; i < sourceIds.length; i++) {
	    _invariant2['default'](registry.getSource(sourceIds[i]), 'Expected sourceIds to be registered.');
	  }

	  var sourceId = null;
	  for (var i = sourceIds.length - 1; i >= 0; i--) {
	    if (monitor.canDragSource(sourceIds[i])) {
	      sourceId = sourceIds[i];
	      break;
	    }
	  }
	  if (sourceId === null) {
	    return;
	  }

	  var sourceClientOffset = null;
	  if (clientOffset) {
	    _invariant2['default'](typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
	    sourceClientOffset = getSourceClientOffset(sourceId);
	  }

	  var source = registry.getSource(sourceId);
	  var item = source.beginDrag(monitor, sourceId);
	  _invariant2['default'](_lodashIsObject2['default'](item), 'Item must be an object.');

	  registry.pinSource(sourceId);

	  var itemType = registry.getSourceType(sourceId);
	  return {
	    type: BEGIN_DRAG,
	    itemType: itemType,
	    item: item,
	    sourceId: sourceId,
	    clientOffset: clientOffset,
	    sourceClientOffset: sourceClientOffset,
	    isSourcePublic: publishSource
	  };
	}

	function publishDragSource(manager) {
	  var monitor = this.getMonitor();
	  if (!monitor.isDragging()) {
	    return;
	  }

	  return {
	    type: PUBLISH_DRAG_SOURCE
	  };
	}

	function hover(targetIds) {
	  var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  var _ref2$clientOffset = _ref2.clientOffset;
	  var clientOffset = _ref2$clientOffset === undefined ? null : _ref2$clientOffset;

	  _invariant2['default'](_lodashIsArray2['default'](targetIds), 'Expected targetIds to be an array.');
	  targetIds = targetIds.slice(0);

	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  _invariant2['default'](monitor.isDragging(), 'Cannot call hover while not dragging.');
	  _invariant2['default'](!monitor.didDrop(), 'Cannot call hover after drop.');

	  // First check invariants.
	  for (var i = 0; i < targetIds.length; i++) {
	    var targetId = targetIds[i];
	    _invariant2['default'](targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');

	    var target = registry.getTarget(targetId);
	    _invariant2['default'](target, 'Expected targetIds to be registered.');
	  }

	  var draggedItemType = monitor.getItemType();

	  // Remove those targetIds that don't match the targetType.  This
	  // fixes shallow isOver which would only be non-shallow because of
	  // non-matching targets.
	  for (var i = targetIds.length - 1; i >= 0; i--) {
	    var targetId = targetIds[i];
	    var targetType = registry.getTargetType(targetId);
	    if (!_utilsMatchesType2['default'](targetType, draggedItemType)) {
	      targetIds.splice(i, 1);
	    }
	  }

	  // Finally call hover on all matching targets.
	  for (var i = 0; i < targetIds.length; i++) {
	    var targetId = targetIds[i];
	    var target = registry.getTarget(targetId);
	    target.hover(monitor, targetId);
	  }

	  return {
	    type: HOVER,
	    targetIds: targetIds,
	    clientOffset: clientOffset
	  };
	}

	function drop() {
	  var _this = this;

	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  _invariant2['default'](monitor.isDragging(), 'Cannot call drop while not dragging.');
	  _invariant2['default'](!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');

	  var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);

	  targetIds.reverse();
	  targetIds.forEach(function (targetId, index) {
	    var target = registry.getTarget(targetId);

	    var dropResult = target.drop(monitor, targetId);
	    _invariant2['default'](typeof dropResult === 'undefined' || _lodashIsObject2['default'](dropResult), 'Drop result must either be an object or undefined.');
	    if (typeof dropResult === 'undefined') {
	      dropResult = index === 0 ? {} : monitor.getDropResult();
	    }

	    _this.store.dispatch({
	      type: DROP,
	      dropResult: dropResult
	    });
	  });
	}

	function endDrag() {
	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  _invariant2['default'](monitor.isDragging(), 'Cannot call endDrag while not dragging.');

	  var sourceId = monitor.getSourceId();
	  var source = registry.getSource(sourceId, true);
	  source.endDrag(monitor, sourceId);

	  registry.unpinSource();

	  return {
	    type: END_DRAG
	  };
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.addSource = addSource;
	exports.addTarget = addTarget;
	exports.removeSource = removeSource;
	exports.removeTarget = removeTarget;
	var ADD_SOURCE = 'dnd-core/ADD_SOURCE';
	exports.ADD_SOURCE = ADD_SOURCE;
	var ADD_TARGET = 'dnd-core/ADD_TARGET';
	exports.ADD_TARGET = ADD_TARGET;
	var REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
	exports.REMOVE_SOURCE = REMOVE_SOURCE;
	var REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';

	exports.REMOVE_TARGET = REMOVE_TARGET;

	function addSource(sourceId) {
	  return {
	    type: ADD_SOURCE,
	    sourceId: sourceId
	  };
	}

	function addTarget(targetId) {
	  return {
	    type: ADD_TARGET,
	    targetId: targetId
	  };
	}

	function removeSource(sourceId) {
	  return {
	    type: REMOVE_SOURCE,
	    sourceId: sourceId
	  };
	}

	function removeTarget(targetId) {
	  return {
	    type: REMOVE_TARGET,
	    targetId: targetId
	  };
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(220),
	    listCacheDelete = __webpack_require__(221),
	    listCacheGet = __webpack_require__(222),
	    listCacheHas = __webpack_require__(223),
	    listCacheSet = __webpack_require__(224);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(32),
	    setCacheAdd = __webpack_require__(232),
	    setCacheHas = __webpack_require__(233);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(12);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(217);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(3),
	    isSymbol = __webpack_require__(42);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(8);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(42);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(205),
	    isFunction = __webpack_require__(79),
	    isLength = __webpack_require__(25);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(293);

	var _reducers = __webpack_require__(258);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.createStore)(_reducers2.default);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = checkDecoratorArguments;

	function checkDecoratorArguments(functionName, signature) {
	  if (false) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }

	    for (var i = 0; i < args.length; i++) {
	      var arg = args[i];
	      if (arg && arg.prototype && arg.prototype.render) {
	        console.error( // eslint-disable-line no-console
	        'You seem to be applying the arguments in the wrong order. ' + ('It should be ' + functionName + '(' + signature + ')(Component), not the other way around. ') + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order');
	        return;
	      }
	    }
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var ExcelColumnShape = {
	  name: React.PropTypes.node.isRequired,
	  key: React.PropTypes.string.isRequired,
	  width: React.PropTypes.number.isRequired,
	  filterable: React.PropTypes.bool
	};

	module.exports = ExcelColumnShape;

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isDisposable;

	function isDisposable(obj) {
	  return Boolean(obj && typeof obj.dispose === 'function');
	}

	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = ownerDocument;

	function ownerDocument(node) {
	  return node && node.ownerDocument || document;
	}

	module.exports = exports["default"];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(8),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(225),
	    mapCacheDelete = __webpack_require__(226),
	    mapCacheGet = __webpack_require__(227),
	    mapCacheHas = __webpack_require__(228),
	    mapCacheSet = __webpack_require__(229);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(4);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(179);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to search.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ },
/* 35 */
/***/ function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to search.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 37 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 38 */
/***/ function(module, exports) {

	/**
	 * Checks if a cache value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 40 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(13);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(10);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(65),
	    baseKeys = __webpack_require__(187),
	    indexKeys = __webpack_require__(73),
	    isArrayLike = __webpack_require__(24),
	    isIndex = __webpack_require__(20),
	    isPrototype = __webpack_require__(74);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _store = __webpack_require__(26);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    getItem: function getItem() {
	        return _store2.default.getState().currentItem;
	    },
	    getPosition: function getPosition() {
	        var _store$getState = _store2.default.getState();

	        var x = _store$getState.x;
	        var y = _store$getState.y;


	        return { x: x, y: y };
	    },
	    hideMenu: function hideMenu() {
	        _store2.default.dispatch({
	            type: "SET_PARAMS",
	            data: {
	                isVisible: false,
	                currentItem: {}
	            }
	        });
	    }
	}; /* eslint-disable object-property-newline */

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var FILE = '__NATIVE_FILE__';
	exports.FILE = FILE;
	var URL = '__NATIVE_URL__';
	exports.URL = URL;
	var TEXT = '__NATIVE_TEXT__';
	exports.TEXT = TEXT;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _DragDropContext = __webpack_require__(269);

	exports.DragDropContext = _interopRequire(_DragDropContext);

	var _DragLayer = __webpack_require__(270);

	exports.DragLayer = _interopRequire(_DragLayer);

	var _DragSource = __webpack_require__(271);

	exports.DragSource = _interopRequire(_DragSource);

	var _DropTarget = __webpack_require__(272);

	exports.DropTarget = _interopRequire(_DropTarget);

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }

	    var valA = objA[keysA[i]];
	    var valB = objB[keysA[i]];

	    if (valA !== valB) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports["default"];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;

	var _isPlainObject = __webpack_require__(5);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(296);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  var _ref2;

	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, initialState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */

	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2["default"]] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	}

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var DragItemTypes = exports.DragItemTypes = {
	  Column: 'column'
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Constants = __webpack_require__(49);

	var _reactDnd = __webpack_require__(46);

	var _HeaderCell = __webpack_require__(102);

	var _HeaderCell2 = _interopRequireDefault(_HeaderCell);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DraggableHeaderCell = function (_Component) {
	  _inherits(DraggableHeaderCell, _Component);

	  function DraggableHeaderCell() {
	    _classCallCheck(this, DraggableHeaderCell);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  DraggableHeaderCell.prototype.componentDidMount = function componentDidMount() {
	    var connectDragPreview = this.props.connectDragPreview;
	    var img = new Image();
	    img.src = './assets/images/drag_column_full.png';
	    img.onload = function () {
	      connectDragPreview(img);
	    };
	  };

	  DraggableHeaderCell.prototype.setScrollLeft = function setScrollLeft(scrollLeft) {
	    var node = ReactDOM.findDOMNode(this);
	    node.style.webkitTransform = 'translate3d(' + scrollLeft + 'px, 0px, 0px)';
	    node.style.transform = 'translate3d(' + scrollLeft + 'px, 0px, 0px)';
	  };

	  DraggableHeaderCell.prototype.render = function render() {
	    var _props = this.props;
	    var connectDragSource = _props.connectDragSource;
	    var isDragging = _props.isDragging;

	    if (isDragging) {
	      return null;
	    }
	    return connectDragSource(_react2['default'].createElement(
	      'div',
	      { style: { cursor: 'move' } },
	      _react2['default'].createElement(_HeaderCell2['default'], this.props)
	    ));
	  };

	  return DraggableHeaderCell;
	}(_react.Component);

	DraggableHeaderCell.propTypes = {
	  connectDragSource: _react.PropTypes.func.isRequired,
	  connectDragPreview: _react.PropTypes.func.isRequired,
	  isDragging: _react.PropTypes.bool.isRequired
	};

	function collect(connect, monitor) {
	  return {
	    connectDragSource: connect.dragSource(),
	    isDragging: monitor.isDragging(),
	    connectDragPreview: connect.dragPreview()
	  };
	}

	var headerCellSource = {
	  beginDrag: function beginDrag(props) {
	    return props.column;
	  },
	  endDrag: function endDrag(props) {
	    return props.column;
	  }
	};

	exports['default'] = (0, _reactDnd.DragSource)(_Constants.DragItemTypes.Column, headerCellSource, collect)(DraggableHeaderCell);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(6);
	var ExcelColumn = __webpack_require__(28);

	var EditorBase = function (_React$Component) {
	  _inherits(EditorBase, _React$Component);

	  function EditorBase() {
	    _classCallCheck(this, EditorBase);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  EditorBase.prototype.getStyle = function getStyle() {
	    return {
	      width: '100%'
	    };
	  };

	  EditorBase.prototype.getValue = function getValue() {
	    var updated = {};
	    updated[this.props.column.key] = this.getInputNode().value;
	    return updated;
	  };

	  EditorBase.prototype.getInputNode = function getInputNode() {
	    var domNode = ReactDOM.findDOMNode(this);
	    if (domNode.tagName === 'INPUT') {
	      return domNode;
	    }

	    return domNode.querySelector('input:not([type=hidden])');
	  };

	  EditorBase.prototype.inheritContainerStyles = function inheritContainerStyles() {
	    return true;
	  };

	  return EditorBase;
	}(React.Component);

	EditorBase.propTypes = {
	  onKeyDown: React.PropTypes.func.isRequired,
	  value: React.PropTypes.any.isRequired,
	  onBlur: React.PropTypes.func.isRequired,
	  column: React.PropTypes.shape(ExcelColumn).isRequired,
	  commit: React.PropTypes.func.isRequired
	};

	module.exports = EditorBase;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _typeof(obj) { return obj && obj.constructor === Symbol ? 'symbol' : typeof obj; }

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashIsArray = __webpack_require__(3);

	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);

	var _utilsGetNextUniqueId = __webpack_require__(143);

	var _utilsGetNextUniqueId2 = _interopRequireDefault(_utilsGetNextUniqueId);

	var _actionsRegistry = __webpack_require__(15);

	var _asap = __webpack_require__(99);

	var _asap2 = _interopRequireDefault(_asap);

	var HandlerRoles = {
	  SOURCE: 'SOURCE',
	  TARGET: 'TARGET'
	};

	function validateSourceContract(source) {
	  _invariant2['default'](typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
	  _invariant2['default'](typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
	  _invariant2['default'](typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
	}

	function validateTargetContract(target) {
	  _invariant2['default'](typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
	  _invariant2['default'](typeof target.hover === 'function', 'Expected hover to be a function.');
	  _invariant2['default'](typeof target.drop === 'function', 'Expected beginDrag to be a function.');
	}

	function validateType(type, allowArray) {
	  if (allowArray && _lodashIsArray2['default'](type)) {
	    type.forEach(function (t) {
	      return validateType(t, false);
	    });
	    return;
	  }

	  _invariant2['default'](typeof type === 'string' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
	}

	function getNextHandlerId(role) {
	  var id = _utilsGetNextUniqueId2['default']().toString();
	  switch (role) {
	    case HandlerRoles.SOURCE:
	      return 'S' + id;
	    case HandlerRoles.TARGET:
	      return 'T' + id;
	    default:
	      _invariant2['default'](false, 'Unknown role: ' + role);
	  }
	}

	function parseRoleFromHandlerId(handlerId) {
	  switch (handlerId[0]) {
	    case 'S':
	      return HandlerRoles.SOURCE;
	    case 'T':
	      return HandlerRoles.TARGET;
	    default:
	      _invariant2['default'](false, 'Cannot parse handler ID: ' + handlerId);
	  }
	}

	var HandlerRegistry = (function () {
	  function HandlerRegistry(store) {
	    _classCallCheck(this, HandlerRegistry);

	    this.store = store;

	    this.types = {};
	    this.handlers = {};

	    this.pinnedSourceId = null;
	    this.pinnedSource = null;
	  }

	  HandlerRegistry.prototype.addSource = function addSource(type, source) {
	    validateType(type);
	    validateSourceContract(source);

	    var sourceId = this.addHandler(HandlerRoles.SOURCE, type, source);
	    this.store.dispatch(_actionsRegistry.addSource(sourceId));
	    return sourceId;
	  };

	  HandlerRegistry.prototype.addTarget = function addTarget(type, target) {
	    validateType(type, true);
	    validateTargetContract(target);

	    var targetId = this.addHandler(HandlerRoles.TARGET, type, target);
	    this.store.dispatch(_actionsRegistry.addTarget(targetId));
	    return targetId;
	  };

	  HandlerRegistry.prototype.addHandler = function addHandler(role, type, handler) {
	    var id = getNextHandlerId(role);
	    this.types[id] = type;
	    this.handlers[id] = handler;

	    return id;
	  };

	  HandlerRegistry.prototype.containsHandler = function containsHandler(handler) {
	    var _this = this;

	    return Object.keys(this.handlers).some(function (key) {
	      return _this.handlers[key] === handler;
	    });
	  };

	  HandlerRegistry.prototype.getSource = function getSource(sourceId, includePinned) {
	    _invariant2['default'](this.isSourceId(sourceId), 'Expected a valid source ID.');

	    var isPinned = includePinned && sourceId === this.pinnedSourceId;
	    var source = isPinned ? this.pinnedSource : this.handlers[sourceId];

	    return source;
	  };

	  HandlerRegistry.prototype.getTarget = function getTarget(targetId) {
	    _invariant2['default'](this.isTargetId(targetId), 'Expected a valid target ID.');
	    return this.handlers[targetId];
	  };

	  HandlerRegistry.prototype.getSourceType = function getSourceType(sourceId) {
	    _invariant2['default'](this.isSourceId(sourceId), 'Expected a valid source ID.');
	    return this.types[sourceId];
	  };

	  HandlerRegistry.prototype.getTargetType = function getTargetType(targetId) {
	    _invariant2['default'](this.isTargetId(targetId), 'Expected a valid target ID.');
	    return this.types[targetId];
	  };

	  HandlerRegistry.prototype.isSourceId = function isSourceId(handlerId) {
	    var role = parseRoleFromHandlerId(handlerId);
	    return role === HandlerRoles.SOURCE;
	  };

	  HandlerRegistry.prototype.isTargetId = function isTargetId(handlerId) {
	    var role = parseRoleFromHandlerId(handlerId);
	    return role === HandlerRoles.TARGET;
	  };

	  HandlerRegistry.prototype.removeSource = function removeSource(sourceId) {
	    var _this2 = this;

	    _invariant2['default'](this.getSource(sourceId), 'Expected an existing source.');
	    this.store.dispatch(_actionsRegistry.removeSource(sourceId));

	    _asap2['default'](function () {
	      delete _this2.handlers[sourceId];
	      delete _this2.types[sourceId];
	    });
	  };

	  HandlerRegistry.prototype.removeTarget = function removeTarget(targetId) {
	    var _this3 = this;

	    _invariant2['default'](this.getTarget(targetId), 'Expected an existing target.');
	    this.store.dispatch(_actionsRegistry.removeTarget(targetId));

	    _asap2['default'](function () {
	      delete _this3.handlers[targetId];
	      delete _this3.types[targetId];
	    });
	  };

	  HandlerRegistry.prototype.pinSource = function pinSource(sourceId) {
	    var source = this.getSource(sourceId);
	    _invariant2['default'](source, 'Expected an existing source.');

	    this.pinnedSourceId = sourceId;
	    this.pinnedSource = source;
	  };

	  HandlerRegistry.prototype.unpinSource = function unpinSource() {
	    _invariant2['default'](this.pinnedSource, 'No source is pinned at the time.');

	    this.pinnedSourceId = null;
	    this.pinnedSource = null;
	  };

	  return HandlerRegistry;
	})();

	exports['default'] = HandlerRegistry;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = dirtyHandlerIds;
	exports.areDirty = areDirty;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashXor = __webpack_require__(252);

	var _lodashXor2 = _interopRequireDefault(_lodashXor);

	var _lodashIntersection = __webpack_require__(246);

	var _lodashIntersection2 = _interopRequireDefault(_lodashIntersection);

	var _actionsDragDrop = __webpack_require__(14);

	var _actionsRegistry = __webpack_require__(15);

	var NONE = [];
	var ALL = [];

	function dirtyHandlerIds(state, action, dragOperation) {
	  if (state === undefined) state = NONE;

	  switch (action.type) {
	    case _actionsDragDrop.HOVER:
	      break;
	    case _actionsRegistry.ADD_SOURCE:
	    case _actionsRegistry.ADD_TARGET:
	    case _actionsRegistry.REMOVE_TARGET:
	    case _actionsRegistry.REMOVE_SOURCE:
	      return NONE;
	    case _actionsDragDrop.BEGIN_DRAG:
	    case _actionsDragDrop.PUBLISH_DRAG_SOURCE:
	    case _actionsDragDrop.END_DRAG:
	    case _actionsDragDrop.DROP:
	    default:
	      return ALL;
	  }

	  var targetIds = action.targetIds;
	  var prevTargetIds = dragOperation.targetIds;

	  var dirtyHandlerIds = _lodashXor2['default'](targetIds, prevTargetIds);

	  var didChange = false;
	  if (dirtyHandlerIds.length === 0) {
	    for (var i = 0; i < targetIds.length; i++) {
	      if (targetIds[i] !== prevTargetIds[i]) {
	        didChange = true;
	        break;
	      }
	    }
	  } else {
	    didChange = true;
	  }

	  if (!didChange) {
	    return NONE;
	  }

	  var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
	  var innermostTargetId = targetIds[targetIds.length - 1];

	  if (prevInnermostTargetId !== innermostTargetId) {
	    if (prevInnermostTargetId) {
	      dirtyHandlerIds.push(prevInnermostTargetId);
	    }
	    if (innermostTargetId) {
	      dirtyHandlerIds.push(innermostTargetId);
	    }
	  }

	  return dirtyHandlerIds;
	}

	function areDirty(state, handlerIds) {
	  if (state === NONE) {
	    return false;
	  }

	  if (state === ALL || typeof handlerIds === 'undefined') {
	    return true;
	  }

	  return _lodashIntersection2['default'](handlerIds, state).length > 0;
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = dragOffset;
	exports.getSourceClientOffset = getSourceClientOffset;
	exports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;

	var _actionsDragDrop = __webpack_require__(14);

	var initialState = {
	  initialSourceClientOffset: null,
	  initialClientOffset: null,
	  clientOffset: null
	};

	function areOffsetsEqual(offsetA, offsetB) {
	  if (offsetA === offsetB) {
	    return true;
	  }
	  return offsetA && offsetB && offsetA.x === offsetB.x && offsetA.y === offsetB.y;
	}

	function dragOffset(state, action) {
	  if (state === undefined) state = initialState;

	  switch (action.type) {
	    case _actionsDragDrop.BEGIN_DRAG:
	      return {
	        initialSourceClientOffset: action.sourceClientOffset,
	        initialClientOffset: action.clientOffset,
	        clientOffset: action.clientOffset
	      };
	    case _actionsDragDrop.HOVER:
	      if (areOffsetsEqual(state.clientOffset, action.clientOffset)) {
	        return state;
	      }
	      return _extends({}, state, {
	        clientOffset: action.clientOffset
	      });
	    case _actionsDragDrop.END_DRAG:
	    case _actionsDragDrop.DROP:
	      return initialState;
	    default:
	      return state;
	  }
	}

	function getSourceClientOffset(state) {
	  var clientOffset = state.clientOffset;
	  var initialClientOffset = state.initialClientOffset;
	  var initialSourceClientOffset = state.initialSourceClientOffset;

	  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
	    return null;
	  }
	  return {
	    x: clientOffset.x + initialSourceClientOffset.x - initialClientOffset.x,
	    y: clientOffset.y + initialSourceClientOffset.y - initialClientOffset.y
	  };
	}

	function getDifferenceFromInitialOffset(state) {
	  var clientOffset = state.clientOffset;
	  var initialClientOffset = state.initialClientOffset;

	  if (!clientOffset || !initialClientOffset) {
	    return null;
	  }
	  return {
	    x: clientOffset.x - initialClientOffset.x,
	    y: clientOffset.y - initialClientOffset.y
	  };
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = matchesType;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashIsArray = __webpack_require__(3);

	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);

	function matchesType(targetType, draggedItemType) {
	  if (_lodashIsArray2['default'](targetType)) {
	    return targetType.some(function (t) {
	      return t === draggedItemType;
	    });
	  } else {
	    return targetType === draggedItemType;
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function hasClass(element, className) {
	  if (element.classList) return !!className && element.classList.contains(className);else return (' ' + element.className + ' ').indexOf(' ' + className + ' ') !== -1;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === "object") {
	    factory(exports);
	  } else {
	    factory(root.babelHelpers = {});
	  }
	})(this, function (global) {
	  var babelHelpers = global;

	  babelHelpers.interopRequireDefault = function (obj) {
	    return obj && obj.__esModule ? obj : {
	      "default": obj
	    };
	  };

	  babelHelpers._extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };
	})

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	 */

	'use strict';
	var camelize = __webpack_require__(155);
	var msPattern = /^-ms-/;

	module.exports = function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(8),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(16),
	    stackClear = __webpack_require__(234),
	    stackDelete = __webpack_require__(235),
	    stackGet = __webpack_require__(236),
	    stackHas = __webpack_require__(237),
	    stackSet = __webpack_require__(238);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 62 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(17),
	    arrayIncludes = __webpack_require__(34),
	    arrayIncludesWith = __webpack_require__(35),
	    arrayMap = __webpack_require__(36),
	    baseUnary = __webpack_require__(37),
	    cacheHas = __webpack_require__(38);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(69),
	    isKey = __webpack_require__(21),
	    toKey = __webpack_require__(23);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(72);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return object != null &&
	    (hasOwnProperty.call(object, key) ||
	      (typeof object == 'object' && key in object && getPrototype(object) === null));
	}

	module.exports = baseHas;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(181),
	    isObject = __webpack_require__(9),
	    isObjectLike = __webpack_require__(10);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(17),
	    arrayIncludes = __webpack_require__(34),
	    arrayIncludesWith = __webpack_require__(35),
	    cacheHas = __webpack_require__(38),
	    createSet = __webpack_require__(202),
	    setToArray = __webpack_require__(40);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;

	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  }
	  else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseUniq;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(3),
	    stringToPath = __webpack_require__(239);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = castPath;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(17),
	    arraySome = __webpack_require__(168);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!seen.has(othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.add(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof (window) == 'object' && (window) && (window).Object === Object && (window);

	module.exports = freeGlobal;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(77);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	var getPrototype = overArg(nativeGetPrototype, Object);

	module.exports = getPrototype;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(192),
	    isArguments = __webpack_require__(41),
	    isArray = __webpack_require__(3),
	    isLength = __webpack_require__(25),
	    isString = __webpack_require__(80);

	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}

	module.exports = indexKeys;


/***/ },
/* 74 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(9);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 76 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ },
/* 77 */
/***/ function(module, exports) {

	/**
	 * Creates a function that invokes `func` with its first argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 78 */
/***/ function(module, exports) {

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(9);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(3),
	    isObjectLike = __webpack_require__(10);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(32);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 82 */
/***/ function(module, exports) {

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(63),
	    baseRest = __webpack_require__(7),
	    isArrayLikeObject = __webpack_require__(13);

	/**
	 * Creates an array excluding all given values using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * **Note:** Unlike `_.pull`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...*} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.difference, _.xor
	 * @example
	 *
	 * _.without([2, 1, 2, 3], 1, 2);
	 * // => [3]
	 */
	var without = baseRest(function(array, values) {
	  return isArrayLikeObject(array)
	    ? baseDifference(array, values)
	    : [];
	});

	module.exports = without;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _contextMenu = __webpack_require__(254);

	Object.defineProperty(exports, "ContextMenu", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_contextMenu).default;
	  }
	});

	var _contextmenuLayer = __webpack_require__(256);

	Object.defineProperty(exports, "ContextMenuLayer", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_contextmenuLayer).default;
	  }
	});

	var _menuItem = __webpack_require__(257);

	Object.defineProperty(exports, "MenuItem", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_menuItem).default;
	  }
	});

	var _monitor = __webpack_require__(44);

	Object.defineProperty(exports, "monitor", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_monitor).default;
	  }
	});

	var _submenu = __webpack_require__(259);

	Object.defineProperty(exports, "SubMenu", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_submenu).default;
	  }
	});

	var _connect = __webpack_require__(253);

	Object.defineProperty(exports, "connect", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_connect).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashMemoize = __webpack_require__(81);

	var _lodashMemoize2 = _interopRequireDefault(_lodashMemoize);

	var isFirefox = _lodashMemoize2['default'](function () {
	  return (/firefox/i.test(navigator.userAgent)
	  );
	});

	exports.isFirefox = isFirefox;
	var isSafari = _lodashMemoize2['default'](function () {
	  return Boolean(window.safari);
	});
	exports.isSafari = isSafari;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = areOptionsEqual;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsShallowEqual = __webpack_require__(47);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	function areOptionsEqual(nextOptions, currentOptions) {
	  if (currentOptions === nextOptions) {
	    return true;
	  }

	  return currentOptions !== null && nextOptions !== null && _utilsShallowEqual2['default'](currentOptions, nextOptions);
	}

	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports['default'] = decorateHandler;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _disposables = __webpack_require__(132);

	var _utilsShallowEqual = __webpack_require__(47);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsShallowEqualScalar = __webpack_require__(91);

	var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);

	var _lodashIsPlainObject = __webpack_require__(5);

	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	function decorateHandler(_ref) {
	  var DecoratedComponent = _ref.DecoratedComponent;
	  var createHandler = _ref.createHandler;
	  var createMonitor = _ref.createMonitor;
	  var createConnector = _ref.createConnector;
	  var registerHandler = _ref.registerHandler;
	  var containerDisplayName = _ref.containerDisplayName;
	  var getType = _ref.getType;
	  var collect = _ref.collect;
	  var options = _ref.options;
	  var _options$arePropsEqual = options.arePropsEqual;
	  var arePropsEqual = _options$arePropsEqual === undefined ? _utilsShallowEqualScalar2['default'] : _options$arePropsEqual;

	  var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

	  return (function (_Component) {
	    _inherits(DragDropContainer, _Component);

	    DragDropContainer.prototype.getHandlerId = function getHandlerId() {
	      return this.handlerId;
	    };

	    DragDropContainer.prototype.getDecoratedComponentInstance = function getDecoratedComponentInstance() {
	      return this.decoratedComponentInstance;
	    };

	    DragDropContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	      return !arePropsEqual(nextProps, this.props) || !_utilsShallowEqual2['default'](nextState, this.state);
	    };

	    _createClass(DragDropContainer, null, [{
	      key: 'DecoratedComponent',
	      value: DecoratedComponent,
	      enumerable: true
	    }, {
	      key: 'displayName',
	      value: containerDisplayName + '(' + displayName + ')',
	      enumerable: true
	    }, {
	      key: 'contextTypes',
	      value: {
	        dragDropManager: _react.PropTypes.object.isRequired
	      },
	      enumerable: true
	    }]);

	    function DragDropContainer(props, context) {
	      _classCallCheck(this, DragDropContainer);

	      _Component.call(this, props, context);
	      this.handleChange = this.handleChange.bind(this);
	      this.handleChildRef = this.handleChildRef.bind(this);

	      _invariant2['default'](typeof this.context.dragDropManager === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

	      this.manager = this.context.dragDropManager;
	      this.handlerMonitor = createMonitor(this.manager);
	      this.handlerConnector = createConnector(this.manager.getBackend());
	      this.handler = createHandler(this.handlerMonitor);

	      this.disposable = new _disposables.SerialDisposable();
	      this.receiveProps(props);
	      this.state = this.getCurrentState();
	      this.dispose();
	    }

	    DragDropContainer.prototype.componentDidMount = function componentDidMount() {
	      this.isCurrentlyMounted = true;
	      this.disposable = new _disposables.SerialDisposable();
	      this.currentType = null;
	      this.receiveProps(this.props);
	      this.handleChange();
	    };

	    DragDropContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      if (!arePropsEqual(nextProps, this.props)) {
	        this.receiveProps(nextProps);
	        this.handleChange();
	      }
	    };

	    DragDropContainer.prototype.componentWillUnmount = function componentWillUnmount() {
	      this.dispose();
	      this.isCurrentlyMounted = false;
	    };

	    DragDropContainer.prototype.receiveProps = function receiveProps(props) {
	      this.handler.receiveProps(props);
	      this.receiveType(getType(props));
	    };

	    DragDropContainer.prototype.receiveType = function receiveType(type) {
	      if (type === this.currentType) {
	        return;
	      }

	      this.currentType = type;

	      var _registerHandler = registerHandler(type, this.handler, this.manager);

	      var handlerId = _registerHandler.handlerId;
	      var unregister = _registerHandler.unregister;

	      this.handlerId = handlerId;
	      this.handlerMonitor.receiveHandlerId(handlerId);
	      this.handlerConnector.receiveHandlerId(handlerId);

	      var globalMonitor = this.manager.getMonitor();
	      var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, { handlerIds: [handlerId] });

	      this.disposable.setDisposable(new _disposables.CompositeDisposable(new _disposables.Disposable(unsubscribe), new _disposables.Disposable(unregister)));
	    };

	    DragDropContainer.prototype.handleChange = function handleChange() {
	      if (!this.isCurrentlyMounted) {
	        return;
	      }

	      var nextState = this.getCurrentState();
	      if (!_utilsShallowEqual2['default'](nextState, this.state)) {
	        this.setState(nextState);
	      }
	    };

	    DragDropContainer.prototype.dispose = function dispose() {
	      this.disposable.dispose();
	      this.handlerConnector.receiveHandlerId(null);
	    };

	    DragDropContainer.prototype.handleChildRef = function handleChildRef(component) {
	      this.decoratedComponentInstance = component;
	      this.handler.receiveComponent(component);
	    };

	    DragDropContainer.prototype.getCurrentState = function getCurrentState() {
	      var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor);

	      if (false) {
	        _invariant2['default'](_lodashIsPlainObject2['default'](nextState), 'Expected `collect` specified as the second argument to ' + '%s for %s to return a plain object of props to inject. ' + 'Instead, received %s.', containerDisplayName, displayName, nextState);
	      }

	      return nextState;
	    };

	    DragDropContainer.prototype.render = function render() {
	      return _react2['default'].createElement(DecoratedComponent, _extends({}, this.props, this.state, {
	        ref: this.handleChildRef }));
	    };

	    return DragDropContainer;
	  })(_react.Component);
	}

	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isValidType;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashIsArray = __webpack_require__(3);

	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);

	function isValidType(type, allowArray) {
	       return typeof type === 'string' || typeof type === 'symbol' || allowArray && _lodashIsArray2['default'](type) && type.every(function (t) {
	              return isValidType(t, false);
	       });
	}

	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = shallowEqualScalar;

	function shallowEqualScalar(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i])) {
	      return false;
	    }

	    var valA = objA[keysA[i]];
	    var valB = objB[keysA[i]];

	    if (valA !== valB || typeof valA === 'object' || typeof valB === 'object') {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = wrapConnectorHooks;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsCloneWithRef = __webpack_require__(281);

	var _utilsCloneWithRef2 = _interopRequireDefault(_utilsCloneWithRef);

	var _react = __webpack_require__(1);

	function throwIfCompositeComponentElement(element) {
	  // Custom components can no longer be wrapped directly in React DnD 2.0
	  // so that we don't need to depend on findDOMNode() from react-dom.
	  if (typeof element.type === 'string') {
	    return;
	  }

	  var displayName = element.type.displayName || element.type.name || 'the component';

	  throw new Error('Only native element nodes can now be passed to React DnD connectors. ' + ('You can either wrap ' + displayName + ' into a <div>, or turn it into a ') + 'drag source or a drop target itself.');
	}

	function wrapHookToRecognizeElement(hook) {
	  return function () {
	    var elementOrNode = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	    var options = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    // When passed a node, call the hook straight away.
	    if (!_react.isValidElement(elementOrNode)) {
	      var node = elementOrNode;
	      hook(node, options);
	      return;
	    }

	    // If passed a ReactElement, clone it and attach this function as a ref.
	    // This helps us achieve a neat API where user doesn't even know that refs
	    // are being used under the hood.
	    var element = elementOrNode;
	    throwIfCompositeComponentElement(element);

	    // When no options are passed, use the hook directly
	    var ref = options ? function (node) {
	      return hook(node, options);
	    } : hook;

	    return _utilsCloneWithRef2['default'](element, ref);
	  };
	}

	function wrapConnectorHooks(hooks) {
	  var wrappedHooks = {};

	  Object.keys(hooks).forEach(function (key) {
	    var hook = hooks[key];
	    var wrappedHook = wrapHookToRecognizeElement(hook);
	    wrappedHooks[key] = function () {
	      return wrappedHook;
	    };
	  });

	  return wrappedHooks;
	}

	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getContainer;

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getContainer(container, defaultContainer) {
	  container = typeof container === 'function' ? container() : container;
	  return _reactDom2.default.findDOMNode(container) || defaultContainer;
	}
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (componentOrElement) {
	  return (0, _ownerDocument2.default)(_reactDom2.default.findDOMNode(componentOrElement));
	};

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _ownerDocument = __webpack_require__(30);

	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.errMsg = errMsg;
	exports.createChainableTypeChecker = createChainableTypeChecker;

	function errMsg(props, propName, componentName, msgContinuation) {
	  return 'Invalid prop \'' + propName + '\' of value \'' + props[propName] + '\'' + (' supplied to \'' + componentName + '\'' + msgContinuation);
	}

	/**
	 * Create chain-able isRequired validator
	 *
	 * Largely copied directly from:
	 *  https://github.com/facebook/react/blob/0.11-stable/src/core/ReactPropTypes.js#L94
	 */

	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName) {
	    componentName = componentName || '<<anonymous>>';
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required prop \'' + propName + '\' was not specified in \'' + componentName + '\'.');
	      }
	    } else {
	      return validate(props, propName, componentName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _common = __webpack_require__(95);

	/**
	 * Checks whether a prop provides a DOM element
	 *
	 * The element can be provided in two forms:
	 * - Directly passed
	 * - Or passed an object that has a `render` method
	 *
	 * @param props
	 * @param propName
	 * @param componentName
	 * @returns {Error|undefined}
	 */

	function validate(props, propName, componentName) {
	  if (typeof props[propName] !== 'object' || typeof props[propName].render !== 'function' && props[propName].nodeType !== 1) {
	    return new Error(_common.errMsg(props, propName, componentName, ', expected a DOM element or an object that has a `render` method'));
	  }
	}

	exports['default'] = _common.createChainableTypeChecker(validate);
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  } else {
	    var _ret = function () {
	      var last = funcs[funcs.length - 1];
	      var rest = funcs.slice(0, -1);
	      return {
	        v: function v() {
	          return rest.reduceRight(function (composed, f) {
	            return f(composed);
	          }, last.apply(undefined, arguments));
	        }
	      };
	    }();

	    if (typeof _ret === "object") return _ret.v;
	  }
	}

/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// rawAsap provides everything we need except exception management.
	var rawAsap = __webpack_require__(100);
	// RawTasks are recycled to reduce GC churn.
	var freeTasks = [];
	// We queue errors to ensure they are thrown in right order (FIFO).
	// Array-as-queue is good enough here, since we are just dealing with exceptions.
	var pendingErrors = [];
	var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

	function throwFirstError() {
	    if (pendingErrors.length) {
	        throw pendingErrors.shift();
	    }
	}

	/**
	 * Calls a task as soon as possible after returning, in its own event, with priority
	 * over other events like animation, reflow, and repaint. An error thrown from an
	 * event will not interrupt, nor even substantially slow down the processing of
	 * other events, but will be rather postponed to a lower priority event.
	 * @param {{call}} task A callable object, typically a function that takes no
	 * arguments.
	 */
	module.exports = asap;
	function asap(task) {
	    var rawTask;
	    if (freeTasks.length) {
	        rawTask = freeTasks.pop();
	    } else {
	        rawTask = new RawTask();
	    }
	    rawTask.task = task;
	    rawAsap(rawTask);
	}

	// We wrap tasks with recyclable task objects.  A task object implements
	// `call`, just like a function.
	function RawTask() {
	    this.task = null;
	}

	// The sole purpose of wrapping the task is to catch the exception and recycle
	// the task object after its single use.
	RawTask.prototype.call = function () {
	    try {
	        this.task.call();
	    } catch (error) {
	        if (asap.onerror) {
	            // This hook exists purely for testing purposes.
	            // Its name will be periodically randomized to break any code that
	            // depends on its existence.
	            asap.onerror(error);
	        } else {
	            // In a web browser, exceptions are not fatal. However, to avoid
	            // slowing down the queue of pending tasks, we rethrow the error in a
	            // lower priority turn.
	            pendingErrors.push(error);
	            requestErrorThrow();
	        }
	    } finally {
	        this.task = null;
	        freeTasks[freeTasks.length] = this;
	    }
	};


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}

	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;

	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}

	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
	var BrowserMutationObserver = (window).MutationObserver || (window).WebKitMutationObserver;

	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);

	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.

	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396

	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}

	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;

	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}

	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html

	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.

	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }

	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.

	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }

	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.

	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.

	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);

	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}

	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var PropTypes = React.PropTypes;

	var Draggable = React.createClass({
	  displayName: 'Draggable',

	  propTypes: {
	    onDragStart: PropTypes.func,
	    onDragEnd: PropTypes.func,
	    onDrag: PropTypes.func,
	    component: PropTypes.oneOfType([PropTypes.func, PropTypes.constructor])
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onDragStart: function onDragStart() {
	        return true;
	      },
	      onDragEnd: function onDragEnd() {},
	      onDrag: function onDrag() {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      drag: null
	    };
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.cleanUp();
	  },
	  onMouseDown: function onMouseDown(e) {
	    var drag = this.props.onDragStart(e);

	    if (drag === null && e.button !== 0) {
	      return;
	    }

	    window.addEventListener('mouseup', this.onMouseUp);
	    window.addEventListener('mousemove', this.onMouseMove);
	    window.addEventListener('touchend', this.onMouseUp);
	    window.addEventListener('touchmove', this.onMouseMove);

	    this.setState({ drag: drag });
	  },
	  onMouseMove: function onMouseMove(e) {
	    if (this.state.drag === null) {
	      return;
	    }

	    if (e.preventDefault) {
	      e.preventDefault();
	    }

	    this.props.onDrag(e);
	  },
	  onMouseUp: function onMouseUp(e) {
	    this.cleanUp();
	    this.props.onDragEnd(e, this.state.drag);
	    this.setState({ drag: null });
	  },
	  cleanUp: function cleanUp() {
	    window.removeEventListener('mouseup', this.onMouseUp);
	    window.removeEventListener('mousemove', this.onMouseMove);
	    window.removeEventListener('touchend', this.onMouseUp);
	    window.removeEventListener('touchmove', this.onMouseMove);
	  },
	  render: function render() {
	    return React.createElement('div', _extends({}, this.props, {
	      onMouseDown: this.onMouseDown,
	      onTouchStart: this.onMouseDown,
	      className: 'react-grid-HeaderCell__draggable' }));
	  }
	});

	module.exports = Draggable;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(6);
	var joinClasses = __webpack_require__(128);
	var ExcelColumn = __webpack_require__(28);
	var ResizeHandle = __webpack_require__(103);
	var PropTypes = React.PropTypes;

	function simpleCellRenderer(objArgs) {
	  return React.createElement(
	    'div',
	    { className: 'widget-HeaderCell__value' },
	    objArgs.column.name
	  );
	}

	var HeaderCell = React.createClass({
	  displayName: 'HeaderCell',


	  propTypes: {
	    renderer: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
	    column: PropTypes.shape(ExcelColumn).isRequired,
	    onResize: PropTypes.func.isRequired,
	    height: PropTypes.number.isRequired,
	    onResizeEnd: PropTypes.func.isRequired,
	    className: PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      renderer: simpleCellRenderer
	    };
	  },
	  getInitialState: function getInitialState() {
	    return { resizing: false };
	  },
	  onDragStart: function onDragStart(e) {
	    this.setState({ resizing: true });
	    // need to set dummy data for FF
	    if (e && e.dataTransfer && e.dataTransfer.setData) e.dataTransfer.setData('text/plain', 'dummy');
	  },
	  onDrag: function onDrag(e) {
	    var resize = this.props.onResize || null; // for flows sake, doesnt recognise a null check direct
	    if (resize) {
	      var _width = this.getWidthFromMouseEvent(e);
	      if (_width > 0) {
	        resize(this.props.column, _width);
	      }
	    }
	  },
	  onDragEnd: function onDragEnd(e) {
	    var width = this.getWidthFromMouseEvent(e);
	    this.props.onResizeEnd(this.props.column, width);
	    this.setState({ resizing: false });
	  },
	  getWidthFromMouseEvent: function getWidthFromMouseEvent(e) {
	    var right = e.pageX || e.touches && e.touches[0] && e.touches[0].pageX || e.changedTouches && e.changedTouches[e.changedTouches.length - 1].pageX;
	    var left = ReactDOM.findDOMNode(this).getBoundingClientRect().left;
	    return right - left;
	  },
	  getCell: function getCell() {
	    if (React.isValidElement(this.props.renderer)) {
	      return React.cloneElement(this.props.renderer, { column: this.props.column, height: this.props.height });
	    }

	    return this.props.renderer({ column: this.props.column });
	  },
	  getStyle: function getStyle() {
	    return {
	      width: this.props.column.width,
	      left: this.props.column.left,
	      display: 'inline-block',
	      position: 'absolute',
	      overflow: 'hidden',
	      height: this.props.height,
	      margin: 0,
	      textOverflow: 'ellipsis',
	      whiteSpace: 'nowrap'
	    };
	  },
	  setScrollLeft: function setScrollLeft(scrollLeft) {
	    var node = ReactDOM.findDOMNode(this);
	    node.style.webkitTransform = 'translate3d(' + scrollLeft + 'px, 0px, 0px)';
	    node.style.transform = 'translate3d(' + scrollLeft + 'px, 0px, 0px)';
	  },
	  render: function render() {
	    var resizeHandle = void 0;
	    if (this.props.column.resizable) {
	      resizeHandle = React.createElement(ResizeHandle, {
	        onDrag: this.onDrag,
	        onDragStart: this.onDragStart,
	        onDragEnd: this.onDragEnd
	      });
	    }
	    var className = joinClasses({
	      'react-grid-HeaderCell': true,
	      'react-grid-HeaderCell--resizing': this.state.resizing,
	      'react-grid-HeaderCell--locked': this.props.column.locked
	    });
	    className = joinClasses(className, this.props.className, this.props.column.cellClass);
	    var cell = this.getCell();
	    return React.createElement(
	      'div',
	      { className: className, style: this.getStyle() },
	      cell,
	      resizeHandle
	    );
	  }
	});

	module.exports = HeaderCell;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var Draggable = __webpack_require__(101);

	var ResizeHandle = React.createClass({
	  displayName: 'ResizeHandle',

	  style: {
	    position: 'absolute',
	    top: 0,
	    right: 0,
	    width: 6,
	    height: '100%'
	  },

	  render: function render() {
	    return React.createElement(Draggable, _extends({}, this.props, {
	      className: 'react-grid-HeaderCell__resizeHandle',
	      style: this.style
	    }));
	  }
	});

	module.exports = ResizeHandle;

/***/ },
/* 104 */
/***/ function(module, exports) {

	"use strict";

	var filterRows = function filterRows(filters) {
	  var rows = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	  return rows.filter(function (r) {
	    var include = true;
	    for (var columnKey in filters) {
	      if (filters.hasOwnProperty(columnKey)) {
	        if (!r[columnKey]) {
	          include = false;
	        } else {
	          var rowValue = r[columnKey].toString().toLowerCase();
	          if (rowValue.indexOf(filters[columnKey].toLowerCase()) === -1) {
	            include = false;
	          }
	        }
	      }
	    }
	    return include;
	  });
	};

	module.exports = filterRows;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _groupby = __webpack_require__(243);

	var _groupby2 = _interopRequireDefault(_groupby);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RowGrouper = function () {
	  function RowGrouper(columns, expandedRows) {
	    _classCallCheck(this, RowGrouper);

	    this.columns = columns.slice(0);
	    this.expandedRows = expandedRows;
	  }

	  RowGrouper.prototype.isRowExpanded = function isRowExpanded(columnName, name) {
	    var isExpanded = true;
	    var expandedRowGroup = this.expandedRows[columnName];
	    if (expandedRowGroup && expandedRowGroup[name]) {
	      isExpanded = expandedRowGroup[name].isExpanded;
	    }
	    return isExpanded;
	  };

	  RowGrouper.prototype.groupRowsByColumn = function groupRowsByColumn(rows) {
	    var _this = this;

	    var columnIndex = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	    var nextColumnIndex = columnIndex;
	    var dataviewRows = [];
	    var columnName = this.columns[columnIndex];
	    var groupedRows = (0, _groupby2['default'])(rows, columnName);
	    Object.keys(groupedRows).forEach(function (r) {
	      var isExpanded = _this.isRowExpanded(columnName, r);
	      var rowGroupHeader = { name: r, __metaData: { isGroup: true, treeDepth: columnIndex, isExpanded: isExpanded, columnGroupName: columnName } };
	      dataviewRows.push(rowGroupHeader);
	      if (isExpanded) {
	        nextColumnIndex = columnIndex + 1;
	        if (_this.columns.length > nextColumnIndex) {
	          dataviewRows = dataviewRows.concat(_this.groupRowsByColumn(groupedRows[r], nextColumnIndex));
	          nextColumnIndex = columnIndex - 1;
	        } else {
	          dataviewRows = dataviewRows.concat(groupedRows[r]);
	        }
	      }
	    });
	    return dataviewRows;
	  };

	  return RowGrouper;
	}();

	var groupRows = function groupRows(rows, groupedColumns, expandedRows) {
	  var rowGrouper = new RowGrouper(groupedColumns, expandedRows);
	  return rowGrouper.groupRowsByColumn(rows, 0);
	};

	module.exports = groupRows;

/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';

	var sortRows = function sortRows(rows, sortColumn, sortDirection) {
	  var comparer = function comparer(a, b) {
	    if (sortDirection === 'ASC') {
	      return a[sortColumn] > b[sortColumn] ? 1 : -1;
	    } else if (sortDirection === 'DESC') {
	      return a[sortColumn] < b[sortColumn] ? 1 : -1;
	    }
	  };
	  if (sortDirection === 'NONE') {
	    return rows;
	  }
	  return rows.sort(comparer);
	};

	module.exports = sortRows;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reselect = __webpack_require__(294);

	var _isEmptyObject = __webpack_require__(127);

	var _isEmptyObject2 = _interopRequireDefault(_isEmptyObject);

	var _isEmptyArray = __webpack_require__(126);

	var _isEmptyArray2 = _interopRequireDefault(_isEmptyArray);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var groupRows = __webpack_require__(105);
	var filterRows = __webpack_require__(104);
	var sortRows = __webpack_require__(106);

	var getInputRows = function getInputRows(state) {
	  return state.rows;
	};
	var getFilters = function getFilters(state) {
	  return state.filters;
	};
	var getFilteredRows = (0, _reselect.createSelector)([getFilters, getInputRows], function (filters) {
	  var rows = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	  if (!filters || (0, _isEmptyObject2['default'])(filters)) {
	    return rows;
	  }
	  return filterRows(filters, rows);
	});

	var getSortColumn = function getSortColumn(state) {
	  return state.sortColumn;
	};
	var getSortDirection = function getSortDirection(state) {
	  return state.sortDirection;
	};
	var getSortedRows = (0, _reselect.createSelector)([getFilteredRows, getSortColumn, getSortDirection], function (rows, sortColumn, sortDirection) {
	  if (!sortDirection && !sortColumn) {
	    return rows;
	  }
	  return sortRows(rows, sortColumn, sortDirection);
	});

	var getGroupedColumns = function getGroupedColumns(state) {
	  return state.groupBy;
	};
	var getExpandedRows = function getExpandedRows(state) {
	  return state.expandedRows;
	};
	var getFlattenedGroupedRows = (0, _reselect.createSelector)([getSortedRows, getGroupedColumns, getExpandedRows], function (rows, groupedColumns) {
	  var expandedRows = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	  if (!groupedColumns || (0, _isEmptyObject2['default'])(groupedColumns) || (0, _isEmptyArray2['default'])(groupedColumns)) {
	    return rows;
	  }
	  return groupRows(rows, groupedColumns, expandedRows);
	});

	var Selectors = {
	  getRows: getFlattenedGroupedRows
	};
	module.exports = Selectors;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  Selectors: __webpack_require__(107)
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDndHtml5Backend = __webpack_require__(267);

	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

	var _reactDnd = __webpack_require__(46);

	var _DraggableHeaderCell = __webpack_require__(50);

	var _DraggableHeaderCell2 = _interopRequireDefault(_DraggableHeaderCell);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var DraggableContainer = function DraggableContainer(_ref) {
	  var children = _ref.children;

	  var Grid = _react2['default'].Children.map(children, function (child) {
	    return _react2['default'].cloneElement(child, { draggableHeaderCell: _DraggableHeaderCell2['default'] });
	  });

	  return _react2['default'].createElement(
	    'div',
	    null,
	    Grid
	  );
	};

	exports['default'] = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2['default'])(DraggableContainer);

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Container = __webpack_require__(109);

	var _Container2 = _interopRequireDefault(_Container);

	var _DraggableHeaderCell = __webpack_require__(50);

	var _DraggableHeaderCell2 = _interopRequireDefault(_DraggableHeaderCell);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = { Container: _Container2['default'], DraggableHeaderCell: _DraggableHeaderCell2['default'] };

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(6);
	var ReactAutocomplete = __webpack_require__(295);
	var ExcelColumn = __webpack_require__(28);

	var optionPropType = React.PropTypes.shape({
	  id: React.PropTypes.required,
	  title: React.PropTypes.string
	});

	var AutoCompleteEditor = React.createClass({
	  displayName: 'AutoCompleteEditor',


	  propTypes: {
	    onCommit: React.PropTypes.func,
	    options: React.PropTypes.arrayOf(optionPropType),
	    label: React.PropTypes.any,
	    value: React.PropTypes.any,
	    height: React.PropTypes.number,
	    valueParams: React.PropTypes.arrayOf(React.PropTypes.string),
	    column: React.PropTypes.shape(ExcelColumn),
	    resultIdentifier: React.PropTypes.string,
	    search: React.PropTypes.string,
	    onKeyDown: React.PropTypes.func,
	    onFocus: React.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      resultIdentifier: 'id'
	    };
	  },
	  handleChange: function handleChange() {
	    this.props.onCommit();
	  },
	  getValue: function getValue() {
	    var value = void 0;
	    var updated = {};
	    if (this.hasResults() && this.isFocusedOnSuggestion()) {
	      value = this.getLabel(this.refs.autoComplete.state.focusedValue);
	      if (this.props.valueParams) {
	        value = this.constuctValueFromParams(this.refs.autoComplete.state.focusedValue, this.props.valueParams);
	      }
	    } else {
	      value = this.refs.autoComplete.state.searchTerm;
	    }

	    updated[this.props.column.key] = value;
	    return updated;
	  },
	  getInputNode: function getInputNode() {
	    return ReactDOM.findDOMNode(this).getElementsByTagName('input')[0];
	  },
	  getLabel: function getLabel(item) {
	    var label = this.props.label != null ? this.props.label : 'title';
	    if (typeof label === 'function') {
	      return label(item);
	    } else if (typeof label === 'string') {
	      return item[label];
	    }
	  },
	  hasResults: function hasResults() {
	    return this.refs.autoComplete.state.results.length > 0;
	  },
	  isFocusedOnSuggestion: function isFocusedOnSuggestion() {
	    var autoComplete = this.refs.autoComplete;
	    return autoComplete.state.focusedValue != null;
	  },
	  constuctValueFromParams: function constuctValueFromParams(obj, props) {
	    if (!props) {
	      return '';
	    }

	    var ret = [];
	    for (var i = 0, ii = props.length; i < ii; i++) {
	      ret.push(obj[props[i]]);
	    }
	    return ret.join('|');
	  },
	  render: function render() {
	    var label = this.props.label != null ? this.props.label : 'title';
	    return React.createElement(
	      'div',
	      { height: this.props.height, onKeyDown: this.props.onKeyDown },
	      React.createElement(ReactAutocomplete, { search: this.props.search, ref: 'autoComplete', label: label, onChange: this.handleChange, onFocus: this.props.onFocus, resultIdentifier: this.props.resultIdentifier, options: this.props.options, value: { title: this.props.value } })
	    );
	  }
	});

	module.exports = AutoCompleteEditor;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var CheckboxEditor = React.createClass({
	  displayName: 'CheckboxEditor',


	  propTypes: {
	    value: React.PropTypes.bool,
	    rowIdx: React.PropTypes.number,
	    column: React.PropTypes.shape({
	      key: React.PropTypes.string,
	      onCellChange: React.PropTypes.func
	    }),
	    dependentValues: React.PropTypes.object
	  },

	  handleChange: function handleChange(e) {
	    this.props.column.onCellChange(this.props.rowIdx, this.props.column.key, this.props.dependentValues, e);
	  },
	  render: function render() {
	    var checked = this.props.value != null ? this.props.value : false;
	    var checkboxName = 'checkbox' + this.props.rowIdx;
	    return React.createElement(
	      'div',
	      { className: 'react-grid-checkbox-container', onClick: this.handleChange },
	      React.createElement('input', { className: 'react-grid-checkbox', type: 'checkbox', name: checkboxName, checked: checked }),
	      React.createElement('label', { htmlFor: checkboxName, className: 'react-grid-checkbox-label' })
	    );
	  }
	});

	module.exports = CheckboxEditor;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var EditorBase = __webpack_require__(51);

	var DropDownEditor = function (_EditorBase) {
	  _inherits(DropDownEditor, _EditorBase);

	  function DropDownEditor() {
	    _classCallCheck(this, DropDownEditor);

	    return _possibleConstructorReturn(this, _EditorBase.apply(this, arguments));
	  }

	  DropDownEditor.prototype.getInputNode = function getInputNode() {
	    return _reactDom2['default'].findDOMNode(this);
	  };

	  DropDownEditor.prototype.onClick = function onClick() {
	    this.getInputNode().focus();
	  };

	  DropDownEditor.prototype.onDoubleClick = function onDoubleClick() {
	    this.getInputNode().focus();
	  };

	  DropDownEditor.prototype.render = function render() {
	    return React.createElement(
	      'select',
	      { style: this.getStyle(), defaultValue: this.props.value, onBlur: this.props.onBlur, onChange: this.onChange },
	      this.renderOptions()
	    );
	  };

	  DropDownEditor.prototype.renderOptions = function renderOptions() {
	    var options = [];
	    this.props.options.forEach(function (name) {
	      if (typeof name === 'string') {
	        options.push(React.createElement(
	          'option',
	          { key: name, value: name },
	          name
	        ));
	      } else {
	        options.push(React.createElement(
	          'option',
	          { key: name.id, value: name.value, title: name.title },
	          name.value
	        ));
	      }
	    }, this);
	    return options;
	  };

	  return DropDownEditor;
	}(EditorBase);

	DropDownEditor.propTypes = {
	  options: React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.objectOf({ id: React.PropTypes.string, title: React.PropTypes.string, meta: React.PropTypes.string })])).isRequired
	};

	module.exports = DropDownEditor;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var EditorBase = __webpack_require__(51);

	var SimpleTextEditor = function (_EditorBase) {
	  _inherits(SimpleTextEditor, _EditorBase);

	  function SimpleTextEditor() {
	    _classCallCheck(this, SimpleTextEditor);

	    return _possibleConstructorReturn(this, _EditorBase.apply(this, arguments));
	  }

	  SimpleTextEditor.prototype.render = function render() {
	    return React.createElement('input', { ref: 'input', type: 'text', onBlur: this.props.onBlur, className: 'form-control', defaultValue: this.props.value });
	  };

	  return SimpleTextEditor;
	}(EditorBase);

	module.exports = SimpleTextEditor;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Editors = {
	  AutoComplete: __webpack_require__(111),
	  DropDownEditor: __webpack_require__(113),
	  SimpleTextEditor: __webpack_require__(114),
	  CheckboxEditor: __webpack_require__(112)
	};

	module.exports = Editors;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var PendingPool = {};
	var ReadyPool = {};

	var ImageFormatter = React.createClass({
	  displayName: 'ImageFormatter',

	  propTypes: {
	    value: React.PropTypes.string.isRequired
	  },

	  getInitialState: function getInitialState() {
	    return {
	      ready: false
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    this._load(this.props.value);
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.value !== this.props.value) {
	      this.setState({ value: null });
	      this._load(nextProps.value);
	    }
	  },
	  _load: function _load(src) {
	    var imageSrc = src;
	    if (ReadyPool[imageSrc]) {
	      this.setState({ value: imageSrc });
	      return;
	    }

	    if (PendingPool[imageSrc]) {
	      PendingPool[imageSrc].push(this._onLoad);
	      return;
	    }

	    PendingPool[imageSrc] = [this._onLoad];

	    var img = new Image();
	    img.onload = function () {
	      PendingPool[imageSrc].forEach(function (callback) {
	        callback(imageSrc);
	      });
	      delete PendingPool[imageSrc];
	      img.onload = null;
	      imageSrc = undefined;
	    };
	    img.src = imageSrc;
	  },
	  _onLoad: function _onLoad(src) {
	    if (this.isMounted() && src === this.props.value) {
	      this.setState({
	        value: src
	      });
	    }
	  },
	  render: function render() {
	    var style = this.state.value ? { backgroundImage: 'url(' + this.state.value + ')' } : undefined;

	    return React.createElement('div', { className: 'react-grid-image', style: style });
	  }
	});

	module.exports = ImageFormatter;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// not including this
	// it currently requires the whole of moment, which we dont want to take as a dependency
	var ImageFormatter = __webpack_require__(116);

	var Formatters = {
	  ImageFormatter: ImageFormatter
	};

	module.exports = Formatters;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactContextmenu = __webpack_require__(84);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReactDataGridContextMenu = function (_React$Component) {
	  _inherits(ReactDataGridContextMenu, _React$Component);

	  function ReactDataGridContextMenu() {
	    _classCallCheck(this, ReactDataGridContextMenu);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  ReactDataGridContextMenu.prototype.render = function render() {
	    return _react2['default'].createElement(
	      _reactContextmenu.ContextMenu,
	      { identifier: 'reactDataGridContextMenu' },
	      this.props.children
	    );
	  };

	  return ReactDataGridContextMenu;
	}(_react2['default'].Component);

	ReactDataGridContextMenu.propTypes = {
	  children: _react.PropTypes.node
	};

	exports['default'] = ReactDataGridContextMenu;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MenuHeader = function (_React$Component) {
	  _inherits(MenuHeader, _React$Component);

	  function MenuHeader() {
	    _classCallCheck(this, MenuHeader);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  MenuHeader.prototype.render = function render() {
	    return _react2["default"].createElement(
	      "div",
	      { className: "react-context-menu-header" },
	      this.props.children
	    );
	  };

	  return MenuHeader;
	}(_react2["default"].Component);

	MenuHeader.propTypes = {
	  children: _react.PropTypes.any
	};

	exports["default"] = MenuHeader;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ContextMenuLayer = exports.connect = exports.SubMenu = exports.monitor = exports.MenuItem = exports.MenuHeader = exports.ContextMenu = undefined;

	var _reactContextmenu = __webpack_require__(84);

	var _ContextMenu = __webpack_require__(118);

	var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

	var _MenuHeader = __webpack_require__(119);

	var _MenuHeader2 = _interopRequireDefault(_MenuHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports.ContextMenu = _ContextMenu2['default'];
	exports.MenuHeader = _MenuHeader2['default'];
	exports.MenuItem = _reactContextmenu.MenuItem;
	exports.monitor = _reactContextmenu.monitor;
	exports.SubMenu = _reactContextmenu.SubMenu;
	exports.connect = _reactContextmenu.connect;
	exports.ContextMenuLayer = _reactContextmenu.ContextMenuLayer;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var propTypes = {
	  children: _react.PropTypes.array
	};

	var defaultProps = {
	  enableAddRow: true
	};

	var AdvancedToolbar = function (_Component) {
	  _inherits(AdvancedToolbar, _Component);

	  function AdvancedToolbar() {
	    _classCallCheck(this, AdvancedToolbar);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  AdvancedToolbar.prototype.render = function render() {
	    return _react2["default"].createElement(
	      "div",
	      { className: "react-grid-Toolbar" },
	      this.props.children,
	      _react2["default"].createElement("div", { className: "tools" })
	    );
	  };

	  return AdvancedToolbar;
	}(_react.Component);

	AdvancedToolbar.defaultProps = defaultProps;
	AdvancedToolbar.propTypes = propTypes;

	exports["default"] = AdvancedToolbar;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GroupedColumnButton = function (_Component) {
	  _inherits(GroupedColumnButton, _Component);

	  function GroupedColumnButton() {
	    _classCallCheck(this, GroupedColumnButton);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  GroupedColumnButton.prototype.render = function render() {
	    var style = {
	      width: '80px',
	      overflow: 'hidden',
	      textOverflow: 'ellipsis',
	      whiteSpace: 'nowrap'
	    };
	    return _react2['default'].createElement(
	      'button',
	      { className: 'btn grouped-col-btn btn-sm' },
	      _react2['default'].createElement(
	        'span',
	        { style: style },
	        this.props.name
	      ),
	      _react2['default'].createElement('span', { className: 'glyphicon glyphicon-trash', style: { float: 'right', paddingLeft: '5px' }, onClick: this.props.onColumnGroupDeleted.bind(this, this.props.name) })
	    );
	  };

	  return GroupedColumnButton;
	}(_react.Component);

	exports['default'] = GroupedColumnButton;


	GroupedColumnButton.propTypes = {
	  name: _react.PropTypes.object.isRequired,
	  onColumnGroupDeleted: _react.PropTypes.func
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDnd = __webpack_require__(46);

	var _Constants = __webpack_require__(49);

	var _GroupedColumnButton = __webpack_require__(122);

	var _GroupedColumnButton2 = _interopRequireDefault(_GroupedColumnButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var propTypes = {
	  isOver: _react.PropTypes.bool.isRequired,
	  connectDropTarget: _react.PropTypes.func,
	  canDrop: _react.PropTypes.bool.isRequired,
	  groupBy: _react.PropTypes.array,
	  noColumnsSelectedMessage: _react.PropTypes.string,
	  panelDescription: _react.PropTypes.string,
	  onColumnGroupDeleted: _react.PropTypes.func
	};

	var defaultProps = {
	  noColumnsSelectedMessage: 'Drag a column header here to group by that column',
	  panelDescription: 'Drag a column header here to group by that column'
	};

	var GroupedColumnsPanel = function (_Component) {
	  _inherits(GroupedColumnsPanel, _Component);

	  function GroupedColumnsPanel() {
	    _classCallCheck(this, GroupedColumnsPanel);

	    return _possibleConstructorReturn(this, _Component.call(this));
	  }

	  GroupedColumnsPanel.prototype.getPanelInstructionMessage = function getPanelInstructionMessage() {
	    var groupBy = this.props.groupBy;

	    return groupBy && groupBy.length > 0 ? this.props.panelDescription : this.props.noColumnsSelectedMessage;
	  };

	  GroupedColumnsPanel.prototype.renderGroupedColumns = function renderGroupedColumns() {
	    var _this2 = this;

	    return this.props.groupBy.map(function (c) {
	      return _react2['default'].createElement(_GroupedColumnButton2['default'], { name: c, onColumnGroupDeleted: _this2.props.onColumnGroupDeleted });
	    });
	  };

	  GroupedColumnsPanel.prototype.renderOverlay = function renderOverlay(color) {
	    return _react2['default'].createElement('div', { style: {
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',
	        width: '100%',
	        zIndex: 1,
	        opacity: 0.5,
	        backgroundColor: color
	      } });
	  };

	  GroupedColumnsPanel.prototype.render = function render() {
	    var _props = this.props;
	    var connectDropTarget = _props.connectDropTarget;
	    var isOver = _props.isOver;
	    var canDrop = _props.canDrop;

	    return connectDropTarget(_react2['default'].createElement(
	      'div',
	      { style: { padding: '2px', position: 'relative', margin: '-10px', display: 'inline-block', border: '1px solid #eee' } },
	      this.renderGroupedColumns(),
	      ' ',
	      _react2['default'].createElement(
	        'span',
	        null,
	        this.getPanelInstructionMessage()
	      ),
	      isOver && canDrop && this.renderOverlay('yellow'),
	      !isOver && canDrop && this.renderOverlay('#DBECFA')
	    ));
	  };

	  return GroupedColumnsPanel;
	}(_react.Component);

	GroupedColumnsPanel.defaultProps = defaultProps;
	GroupedColumnsPanel.propTypes = propTypes;

	var columnTarget = {
	  drop: function drop(props, monitor) {
	    // Obtain the dragged item
	    var item = monitor.getItem();
	    if (typeof props.onColumnGroupAdded === 'function') {
	      props.onColumnGroupAdded(item.key);
	    }
	  }
	};

	function collect(connect, monitor) {
	  return {
	    connectDropTarget: connect.dropTarget(),
	    isOver: monitor.isOver(),
	    canDrop: monitor.canDrop(),
	    draggedolumn: monitor.getItem()
	  };
	}

	exports['default'] = (0, _reactDnd.DropTarget)(_Constants.DragItemTypes.Column, columnTarget, collect)(GroupedColumnsPanel);

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);

	var Toolbar = React.createClass({
	  displayName: "Toolbar",

	  propTypes: {
	    onAddRow: React.PropTypes.func,
	    onToggleFilter: React.PropTypes.func,
	    enableFilter: React.PropTypes.bool,
	    numberOfRows: React.PropTypes.number
	  },

	  onAddRow: function onAddRow() {
	    if (this.props.onAddRow !== null && this.props.onAddRow instanceof Function) {
	      this.props.onAddRow({ newRowIndex: this.props.numberOfRows });
	    }
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      enableAddRow: true,
	      addRowButtonText: "Add Row",
	      filterRowsButtonText: "Filter Rows"
	    };
	  },
	  renderAddRowButton: function renderAddRowButton() {
	    if (this.props.onAddRow) {
	      return React.createElement(
	        "button",
	        { type: "button", className: "btn", onClick: this.onAddRow },
	        this.props.addRowButtonText
	      );
	    }
	  },
	  renderToggleFilterButton: function renderToggleFilterButton() {
	    if (this.props.enableFilter) {
	      return React.createElement(
	        "button",
	        { type: "button", className: "btn", onClick: this.props.onToggleFilter },
	        this.props.filterRowsButtonText
	      );
	    }
	  },
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "react-grid-Toolbar" },
	      React.createElement(
	        "div",
	        { className: "tools" },
	        this.renderAddRowButton(),
	        this.renderToggleFilterButton()
	      )
	    );
	  }
	});

	module.exports = Toolbar;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.GroupedColumnsPanel = exports.AdvancedToolbar = undefined;

	var _AdvancedToolbar = __webpack_require__(121);

	var _AdvancedToolbar2 = _interopRequireDefault(_AdvancedToolbar);

	var _GroupedColumnsPanel = __webpack_require__(123);

	var _GroupedColumnsPanel2 = _interopRequireDefault(_GroupedColumnsPanel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports.AdvancedToolbar = _AdvancedToolbar2['default'];
	exports.GroupedColumnsPanel = _GroupedColumnsPanel2['default'];

/***/ },
/* 126 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var isEmptyArray = function isEmptyArray(obj) {
	  return Array.isArray(obj) && obj.length === 0;
	};
	exports["default"] = isEmptyArray;

/***/ },
/* 127 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	function isEmpty(obj) {
	  return Object.keys(obj).length === 0 && obj.constructor === Object;
	}

	exports["default"] = isEmpty;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	function classNames() {
		var classes = '';
		var arg;

		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}

			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}

	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}

	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	exports.__esModule = true;

	var _isDisposable = __webpack_require__(29);

	var _isDisposable2 = _interopRequireWildcard(_isDisposable);

	/**
	 * Represents a group of disposable resources that are disposed together.
	 */

	var CompositeDisposable = (function () {
	  function CompositeDisposable() {
	    for (var _len = arguments.length, disposables = Array(_len), _key = 0; _key < _len; _key++) {
	      disposables[_key] = arguments[_key];
	    }

	    _classCallCheck(this, CompositeDisposable);

	    if (Array.isArray(disposables[0]) && disposables.length === 1) {
	      disposables = disposables[0];
	    }

	    for (var i = 0; i < disposables.length; i++) {
	      if (!_isDisposable2['default'](disposables[i])) {
	        throw new Error('Expected a disposable');
	      }
	    }

	    this.disposables = disposables;
	    this.isDisposed = false;
	  }

	  /**
	   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
	   * @param {Disposable} item Disposable to add.
	   */

	  CompositeDisposable.prototype.add = function add(item) {
	    if (this.isDisposed) {
	      item.dispose();
	    } else {
	      this.disposables.push(item);
	    }
	  };

	  /**
	   * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
	   * @param {Disposable} item Disposable to remove.
	   * @returns {Boolean} true if found; false otherwise.
	   */

	  CompositeDisposable.prototype.remove = function remove(item) {
	    if (this.isDisposed) {
	      return false;
	    }

	    var index = this.disposables.indexOf(item);
	    if (index === -1) {
	      return false;
	    }

	    this.disposables.splice(index, 1);
	    item.dispose();
	    return true;
	  };

	  /**
	   * Disposes all disposables in the group and removes them from the group.
	   */

	  CompositeDisposable.prototype.dispose = function dispose() {
	    if (this.isDisposed) {
	      return;
	    }

	    var len = this.disposables.length;
	    var currentDisposables = new Array(len);
	    for (var i = 0; i < len; i++) {
	      currentDisposables[i] = this.disposables[i];
	    }

	    this.isDisposed = true;
	    this.disposables = [];
	    this.length = 0;

	    for (var i = 0; i < len; i++) {
	      currentDisposables[i].dispose();
	    }
	  };

	  return CompositeDisposable;
	})();

	exports['default'] = CompositeDisposable;
	module.exports = exports['default'];

/***/ },
/* 130 */
/***/ function(module, exports) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.__esModule = true;
	var noop = function noop() {};

	/**
	 * The basic disposable.
	 */

	var Disposable = (function () {
	  function Disposable(action) {
	    _classCallCheck(this, Disposable);

	    this.isDisposed = false;
	    this.action = action || noop;
	  }

	  Disposable.prototype.dispose = function dispose() {
	    if (!this.isDisposed) {
	      this.action.call(null);
	      this.isDisposed = true;
	    }
	  };

	  _createClass(Disposable, null, [{
	    key: "empty",
	    enumerable: true,
	    value: { dispose: noop }
	  }]);

	  return Disposable;
	})();

	exports["default"] = Disposable;
	module.exports = exports["default"];

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	exports.__esModule = true;

	var _isDisposable = __webpack_require__(29);

	var _isDisposable2 = _interopRequireWildcard(_isDisposable);

	var SerialDisposable = (function () {
	  function SerialDisposable() {
	    _classCallCheck(this, SerialDisposable);

	    this.isDisposed = false;
	    this.current = null;
	  }

	  /**
	   * Gets the underlying disposable.
	   * @return The underlying disposable.
	   */

	  SerialDisposable.prototype.getDisposable = function getDisposable() {
	    return this.current;
	  };

	  /**
	   * Sets the underlying disposable.
	   * @param {Disposable} value The new underlying disposable.
	   */

	  SerialDisposable.prototype.setDisposable = function setDisposable() {
	    var value = arguments[0] === undefined ? null : arguments[0];

	    if (value != null && !_isDisposable2['default'](value)) {
	      throw new Error('Expected either an empty value or a valid disposable');
	    }

	    var isDisposed = this.isDisposed;
	    var previous = undefined;

	    if (!isDisposed) {
	      previous = this.current;
	      this.current = value;
	    }

	    if (previous) {
	      previous.dispose();
	    }

	    if (isDisposed && value) {
	      value.dispose();
	    }
	  };

	  /**
	   * Disposes the underlying disposable as well as all future replacements.
	   */

	  SerialDisposable.prototype.dispose = function dispose() {
	    if (this.isDisposed) {
	      return;
	    }

	    this.isDisposed = true;
	    var previous = this.current;
	    this.current = null;

	    if (previous) {
	      previous.dispose();
	    }
	  };

	  return SerialDisposable;
	})();

	exports['default'] = SerialDisposable;
	module.exports = exports['default'];

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	exports.__esModule = true;

	var _isDisposable2 = __webpack_require__(29);

	var _isDisposable3 = _interopRequireWildcard(_isDisposable2);

	exports.isDisposable = _isDisposable3['default'];

	var _Disposable2 = __webpack_require__(130);

	var _Disposable3 = _interopRequireWildcard(_Disposable2);

	exports.Disposable = _Disposable3['default'];

	var _CompositeDisposable2 = __webpack_require__(129);

	var _CompositeDisposable3 = _interopRequireWildcard(_CompositeDisposable2);

	exports.CompositeDisposable = _CompositeDisposable3['default'];

	var _SerialDisposable2 = __webpack_require__(131);

	var _SerialDisposable3 = _interopRequireWildcard(_SerialDisposable2);

	exports.SerialDisposable = _SerialDisposable3['default'];

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _reduxLibCreateStore = __webpack_require__(48);

	var _reduxLibCreateStore2 = _interopRequireDefault(_reduxLibCreateStore);

	var _reducers = __webpack_require__(140);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _actionsDragDrop = __webpack_require__(14);

	var dragDropActions = _interopRequireWildcard(_actionsDragDrop);

	var _DragDropMonitor = __webpack_require__(134);

	var _DragDropMonitor2 = _interopRequireDefault(_DragDropMonitor);

	var _HandlerRegistry = __webpack_require__(52);

	var _HandlerRegistry2 = _interopRequireDefault(_HandlerRegistry);

	var DragDropManager = (function () {
	  function DragDropManager(createBackend) {
	    _classCallCheck(this, DragDropManager);

	    var store = _reduxLibCreateStore2['default'](_reducers2['default']);

	    this.store = store;
	    this.monitor = new _DragDropMonitor2['default'](store);
	    this.registry = this.monitor.registry;
	    this.backend = createBackend(this);

	    store.subscribe(this.handleRefCountChange.bind(this));
	  }

	  DragDropManager.prototype.handleRefCountChange = function handleRefCountChange() {
	    var shouldSetUp = this.store.getState().refCount > 0;
	    if (shouldSetUp && !this.isSetUp) {
	      this.backend.setup();
	      this.isSetUp = true;
	    } else if (!shouldSetUp && this.isSetUp) {
	      this.backend.teardown();
	      this.isSetUp = false;
	    }
	  };

	  DragDropManager.prototype.getMonitor = function getMonitor() {
	    return this.monitor;
	  };

	  DragDropManager.prototype.getBackend = function getBackend() {
	    return this.backend;
	  };

	  DragDropManager.prototype.getRegistry = function getRegistry() {
	    return this.registry;
	  };

	  DragDropManager.prototype.getActions = function getActions() {
	    var manager = this;
	    var dispatch = this.store.dispatch;

	    function bindActionCreator(actionCreator) {
	      return function () {
	        var action = actionCreator.apply(manager, arguments);
	        if (typeof action !== 'undefined') {
	          dispatch(action);
	        }
	      };
	    }

	    return Object.keys(dragDropActions).filter(function (key) {
	      return typeof dragDropActions[key] === 'function';
	    }).reduce(function (boundActions, key) {
	      boundActions[key] = bindActionCreator(dragDropActions[key]);
	      return boundActions;
	    }, {});
	  };

	  return DragDropManager;
	})();

	exports['default'] = DragDropManager;
	module.exports = exports['default'];

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _utilsMatchesType = __webpack_require__(55);

	var _utilsMatchesType2 = _interopRequireDefault(_utilsMatchesType);

	var _lodashIsArray = __webpack_require__(3);

	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);

	var _HandlerRegistry = __webpack_require__(52);

	var _HandlerRegistry2 = _interopRequireDefault(_HandlerRegistry);

	var _reducersDragOffset = __webpack_require__(54);

	var _reducersDirtyHandlerIds = __webpack_require__(53);

	var DragDropMonitor = (function () {
	  function DragDropMonitor(store) {
	    _classCallCheck(this, DragDropMonitor);

	    this.store = store;
	    this.registry = new _HandlerRegistry2['default'](store);
	  }

	  DragDropMonitor.prototype.subscribeToStateChange = function subscribeToStateChange(listener) {
	    var _this = this;

	    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var handlerIds = _ref.handlerIds;

	    _invariant2['default'](typeof listener === 'function', 'listener must be a function.');
	    _invariant2['default'](typeof handlerIds === 'undefined' || _lodashIsArray2['default'](handlerIds), 'handlerIds, when specified, must be an array of strings.');

	    var prevStateId = this.store.getState().stateId;
	    var handleChange = function handleChange() {
	      var state = _this.store.getState();
	      var currentStateId = state.stateId;
	      try {
	        var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !_reducersDirtyHandlerIds.areDirty(state.dirtyHandlerIds, handlerIds);

	        if (!canSkipListener) {
	          listener();
	        }
	      } finally {
	        prevStateId = currentStateId;
	      }
	    };

	    return this.store.subscribe(handleChange);
	  };

	  DragDropMonitor.prototype.subscribeToOffsetChange = function subscribeToOffsetChange(listener) {
	    var _this2 = this;

	    _invariant2['default'](typeof listener === 'function', 'listener must be a function.');

	    var previousState = this.store.getState().dragOffset;
	    var handleChange = function handleChange() {
	      var nextState = _this2.store.getState().dragOffset;
	      if (nextState === previousState) {
	        return;
	      }

	      previousState = nextState;
	      listener();
	    };

	    return this.store.subscribe(handleChange);
	  };

	  DragDropMonitor.prototype.canDragSource = function canDragSource(sourceId) {
	    var source = this.registry.getSource(sourceId);
	    _invariant2['default'](source, 'Expected to find a valid source.');

	    if (this.isDragging()) {
	      return false;
	    }

	    return source.canDrag(this, sourceId);
	  };

	  DragDropMonitor.prototype.canDropOnTarget = function canDropOnTarget(targetId) {
	    var target = this.registry.getTarget(targetId);
	    _invariant2['default'](target, 'Expected to find a valid target.');

	    if (!this.isDragging() || this.didDrop()) {
	      return false;
	    }

	    var targetType = this.registry.getTargetType(targetId);
	    var draggedItemType = this.getItemType();
	    return _utilsMatchesType2['default'](targetType, draggedItemType) && target.canDrop(this, targetId);
	  };

	  DragDropMonitor.prototype.isDragging = function isDragging() {
	    return Boolean(this.getItemType());
	  };

	  DragDropMonitor.prototype.isDraggingSource = function isDraggingSource(sourceId) {
	    var source = this.registry.getSource(sourceId, true);
	    _invariant2['default'](source, 'Expected to find a valid source.');

	    if (!this.isDragging() || !this.isSourcePublic()) {
	      return false;
	    }

	    var sourceType = this.registry.getSourceType(sourceId);
	    var draggedItemType = this.getItemType();
	    if (sourceType !== draggedItemType) {
	      return false;
	    }

	    return source.isDragging(this, sourceId);
	  };

	  DragDropMonitor.prototype.isOverTarget = function isOverTarget(targetId) {
	    var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var _ref2$shallow = _ref2.shallow;
	    var shallow = _ref2$shallow === undefined ? false : _ref2$shallow;

	    if (!this.isDragging()) {
	      return false;
	    }

	    var targetType = this.registry.getTargetType(targetId);
	    var draggedItemType = this.getItemType();
	    if (!_utilsMatchesType2['default'](targetType, draggedItemType)) {
	      return false;
	    }

	    var targetIds = this.getTargetIds();
	    if (!targetIds.length) {
	      return false;
	    }

	    var index = targetIds.indexOf(targetId);
	    if (shallow) {
	      return index === targetIds.length - 1;
	    } else {
	      return index > -1;
	    }
	  };

	  DragDropMonitor.prototype.getItemType = function getItemType() {
	    return this.store.getState().dragOperation.itemType;
	  };

	  DragDropMonitor.prototype.getItem = function getItem() {
	    return this.store.getState().dragOperation.item;
	  };

	  DragDropMonitor.prototype.getSourceId = function getSourceId() {
	    return this.store.getState().dragOperation.sourceId;
	  };

	  DragDropMonitor.prototype.getTargetIds = function getTargetIds() {
	    return this.store.getState().dragOperation.targetIds;
	  };

	  DragDropMonitor.prototype.getDropResult = function getDropResult() {
	    return this.store.getState().dragOperation.dropResult;
	  };

	  DragDropMonitor.prototype.didDrop = function didDrop() {
	    return this.store.getState().dragOperation.didDrop;
	  };

	  DragDropMonitor.prototype.isSourcePublic = function isSourcePublic() {
	    return this.store.getState().dragOperation.isSourcePublic;
	  };

	  DragDropMonitor.prototype.getInitialClientOffset = function getInitialClientOffset() {
	    return this.store.getState().dragOffset.initialClientOffset;
	  };

	  DragDropMonitor.prototype.getInitialSourceClientOffset = function getInitialSourceClientOffset() {
	    return this.store.getState().dragOffset.initialSourceClientOffset;
	  };

	  DragDropMonitor.prototype.getClientOffset = function getClientOffset() {
	    return this.store.getState().dragOffset.clientOffset;
	  };

	  DragDropMonitor.prototype.getSourceClientOffset = function getSourceClientOffset() {
	    return _reducersDragOffset.getSourceClientOffset(this.store.getState().dragOffset);
	  };

	  DragDropMonitor.prototype.getDifferenceFromInitialOffset = function getDifferenceFromInitialOffset() {
	    return _reducersDragOffset.getDifferenceFromInitialOffset(this.store.getState().dragOffset);
	  };

	  return DragDropMonitor;
	})();

	exports['default'] = DragDropMonitor;
	module.exports = exports['default'];

/***/ },
/* 135 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DragSource = (function () {
	  function DragSource() {
	    _classCallCheck(this, DragSource);
	  }

	  DragSource.prototype.canDrag = function canDrag() {
	    return true;
	  };

	  DragSource.prototype.isDragging = function isDragging(monitor, handle) {
	    return handle === monitor.getSourceId();
	  };

	  DragSource.prototype.endDrag = function endDrag() {};

	  return DragSource;
	})();

	exports["default"] = DragSource;
	module.exports = exports["default"];

/***/ },
/* 136 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DropTarget = (function () {
	  function DropTarget() {
	    _classCallCheck(this, DropTarget);
	  }

	  DropTarget.prototype.canDrop = function canDrop() {
	    return true;
	  };

	  DropTarget.prototype.hover = function hover() {};

	  DropTarget.prototype.drop = function drop() {};

	  return DropTarget;
	})();

	exports["default"] = DropTarget;
	module.exports = exports["default"];

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createBackend;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodashNoop = __webpack_require__(82);

	var _lodashNoop2 = _interopRequireDefault(_lodashNoop);

	var TestBackend = (function () {
	  function TestBackend(manager) {
	    _classCallCheck(this, TestBackend);

	    this.actions = manager.getActions();
	  }

	  TestBackend.prototype.setup = function setup() {
	    this.didCallSetup = true;
	  };

	  TestBackend.prototype.teardown = function teardown() {
	    this.didCallTeardown = true;
	  };

	  TestBackend.prototype.connectDragSource = function connectDragSource() {
	    return _lodashNoop2['default'];
	  };

	  TestBackend.prototype.connectDragPreview = function connectDragPreview() {
	    return _lodashNoop2['default'];
	  };

	  TestBackend.prototype.connectDropTarget = function connectDropTarget() {
	    return _lodashNoop2['default'];
	  };

	  TestBackend.prototype.simulateBeginDrag = function simulateBeginDrag(sourceIds, options) {
	    this.actions.beginDrag(sourceIds, options);
	  };

	  TestBackend.prototype.simulatePublishDragSource = function simulatePublishDragSource() {
	    this.actions.publishDragSource();
	  };

	  TestBackend.prototype.simulateHover = function simulateHover(targetIds, options) {
	    this.actions.hover(targetIds, options);
	  };

	  TestBackend.prototype.simulateDrop = function simulateDrop() {
	    this.actions.drop();
	  };

	  TestBackend.prototype.simulateEndDrag = function simulateEndDrag() {
	    this.actions.endDrag();
	  };

	  return TestBackend;
	})();

	function createBackend(manager) {
	  return new TestBackend(manager);
	}

	module.exports = exports['default'];

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _DragDropManager = __webpack_require__(133);

	exports.DragDropManager = _interopRequire(_DragDropManager);

	var _DragSource = __webpack_require__(135);

	exports.DragSource = _interopRequire(_DragSource);

	var _DropTarget = __webpack_require__(136);

	exports.DropTarget = _interopRequire(_DropTarget);

	var _backendsCreateTestBackend = __webpack_require__(137);

	exports.createTestBackend = _interopRequire(_backendsCreateTestBackend);

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = dragOperation;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _actionsDragDrop = __webpack_require__(14);

	var _actionsRegistry = __webpack_require__(15);

	var _lodashWithout = __webpack_require__(83);

	var _lodashWithout2 = _interopRequireDefault(_lodashWithout);

	var initialState = {
	  itemType: null,
	  item: null,
	  sourceId: null,
	  targetIds: [],
	  dropResult: null,
	  didDrop: false,
	  isSourcePublic: null
	};

	function dragOperation(state, action) {
	  if (state === undefined) state = initialState;

	  switch (action.type) {
	    case _actionsDragDrop.BEGIN_DRAG:
	      return _extends({}, state, {
	        itemType: action.itemType,
	        item: action.item,
	        sourceId: action.sourceId,
	        isSourcePublic: action.isSourcePublic,
	        dropResult: null,
	        didDrop: false
	      });
	    case _actionsDragDrop.PUBLISH_DRAG_SOURCE:
	      return _extends({}, state, {
	        isSourcePublic: true
	      });
	    case _actionsDragDrop.HOVER:
	      return _extends({}, state, {
	        targetIds: action.targetIds
	      });
	    case _actionsRegistry.REMOVE_TARGET:
	      if (state.targetIds.indexOf(action.targetId) === -1) {
	        return state;
	      }
	      return _extends({}, state, {
	        targetIds: _lodashWithout2['default'](state.targetIds, action.targetId)
	      });
	    case _actionsDragDrop.DROP:
	      return _extends({}, state, {
	        dropResult: action.dropResult,
	        didDrop: true,
	        targetIds: []
	      });
	    case _actionsDragDrop.END_DRAG:
	      return _extends({}, state, {
	        itemType: null,
	        item: null,
	        sourceId: null,
	        dropResult: null,
	        didDrop: false,
	        isSourcePublic: null,
	        targetIds: []
	      });
	    default:
	      return state;
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _dragOffset = __webpack_require__(54);

	var _dragOffset2 = _interopRequireDefault(_dragOffset);

	var _dragOperation = __webpack_require__(139);

	var _dragOperation2 = _interopRequireDefault(_dragOperation);

	var _refCount = __webpack_require__(141);

	var _refCount2 = _interopRequireDefault(_refCount);

	var _dirtyHandlerIds = __webpack_require__(53);

	var _dirtyHandlerIds2 = _interopRequireDefault(_dirtyHandlerIds);

	var _stateId = __webpack_require__(142);

	var _stateId2 = _interopRequireDefault(_stateId);

	exports['default'] = function (state, action) {
	  if (state === undefined) state = {};

	  return {
	    dirtyHandlerIds: _dirtyHandlerIds2['default'](state.dirtyHandlerIds, action, state.dragOperation),
	    dragOffset: _dragOffset2['default'](state.dragOffset, action),
	    refCount: _refCount2['default'](state.refCount, action),
	    dragOperation: _dragOperation2['default'](state.dragOperation, action),
	    stateId: _stateId2['default'](state.stateId)
	  };
	};

	module.exports = exports['default'];

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = refCount;

	var _actionsRegistry = __webpack_require__(15);

	function refCount(state, action) {
	  if (state === undefined) state = 0;

	  switch (action.type) {
	    case _actionsRegistry.ADD_SOURCE:
	    case _actionsRegistry.ADD_TARGET:
	      return state + 1;
	    case _actionsRegistry.REMOVE_SOURCE:
	    case _actionsRegistry.REMOVE_TARGET:
	      return state - 1;
	    default:
	      return state;
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 142 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = stateId;

	function stateId() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	  return state + 1;
	}

	module.exports = exports["default"];

/***/ },
/* 143 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = getNextUniqueId;
	var nextUniqueId = 0;

	function getNextUniqueId() {
	  return nextUniqueId++;
	}

	module.exports = exports["default"];

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var babelHelpers = __webpack_require__(57);

	exports.__esModule = true;

	/**
	 * document.activeElement
	 */
	exports['default'] = activeElement;

	var _ownerDocument = __webpack_require__(30);

	var _ownerDocument2 = babelHelpers.interopRequireDefault(_ownerDocument);

	function activeElement() {
	  var doc = arguments[0] === undefined ? document : arguments[0];

	  try {
	    return doc.activeElement;
	  } catch (e) {}
	}

	module.exports = exports['default'];

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hasClass = __webpack_require__(56);

	module.exports = function addClass(element, className) {
	  if (element.classList) element.classList.add(className);else if (!hasClass(element)) element.className = element.className + ' ' + className;
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  addClass: __webpack_require__(145),
	  removeClass: __webpack_require__(147),
	  hasClass: __webpack_require__(56)
	};

/***/ },
/* 147 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function removeClass(element, className) {
	  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var canUseDOM = __webpack_require__(11);
	var off = function off() {};

	if (canUseDOM) {

	  off = (function () {

	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.removeEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.detachEvent('on' + eventName, handler);
	    };
	  })();
	}

	module.exports = off;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var canUseDOM = __webpack_require__(11);
	var on = function on() {};

	if (canUseDOM) {
	  on = (function () {

	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.addEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.attachEvent('on' + eventName, handler);
	    };
	  })();
	}

	module.exports = on;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var canUseDOM = __webpack_require__(11);

	var contains = (function () {
	  var root = canUseDOM && document.documentElement;

	  return root && root.contains ? function (context, node) {
	    return context.contains(node);
	  } : root && root.compareDocumentPosition ? function (context, node) {
	    return context === node || !!(context.compareDocumentPosition(node) & 16);
	  } : function (context, node) {
	    if (node) do {
	      if (node === context) return true;
	    } while (node = node.parentNode);

	    return false;
	  };
	})();

	module.exports = contains;

/***/ },
/* 151 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function getWindow(node) {
	  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var babelHelpers = __webpack_require__(57);

	var _utilCamelizeStyle = __webpack_require__(58);

	var _utilCamelizeStyle2 = babelHelpers.interopRequireDefault(_utilCamelizeStyle);

	var rposition = /^(top|right|bottom|left)$/;
	var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

	module.exports = function _getComputedStyle(node) {
	  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
	  var doc = node.ownerDocument;

	  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : { //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
	    getPropertyValue: function getPropertyValue(prop) {
	      var style = node.style;

	      prop = (0, _utilCamelizeStyle2['default'])(prop);

	      if (prop == 'float') prop = 'styleFloat';

	      var current = node.currentStyle[prop] || null;

	      if (current == null && style && style[prop]) current = style[prop];

	      if (rnumnonpx.test(current) && !rposition.test(prop)) {
	        // Remember the original values
	        var left = style.left;
	        var runStyle = node.runtimeStyle;
	        var rsLeft = runStyle && runStyle.left;

	        // Put in the new values to get a computed value out
	        if (rsLeft) runStyle.left = node.currentStyle.left;

	        style.left = prop === 'fontSize' ? '1em' : current;
	        current = style.pixelLeft + 'px';

	        // Revert the changed values
	        style.left = left;
	        if (rsLeft) runStyle.left = rsLeft;
	      }

	      return current;
	    }
	  };
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var camelize = __webpack_require__(58),
	    hyphenate = __webpack_require__(157),
	    _getComputedStyle = __webpack_require__(152),
	    removeStyle = __webpack_require__(154);

	var has = Object.prototype.hasOwnProperty;

	module.exports = function style(node, property, value) {
	  var css = '',
	      props = property;

	  if (typeof property === 'string') {

	    if (value === undefined) return node.style[camelize(property)] || _getComputedStyle(node).getPropertyValue(hyphenate(property));else (props = {})[property] = value;
	  }

	  for (var key in props) if (has.call(props, key)) {
	    !props[key] && props[key] !== 0 ? removeStyle(node, hyphenate(key)) : css += hyphenate(key) + ':' + props[key] + ';';
	  }

	  node.style.cssText += ';' + css;
	};

/***/ },
/* 154 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	};

/***/ },
/* 155 */
/***/ function(module, exports) {

	"use strict";

	var rHyphen = /-(.)/g;

	module.exports = function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    return chr.toUpperCase();
	  });
	};

/***/ },
/* 156 */
/***/ function(module, exports) {

	'use strict';

	var rUpper = /([A-Z])/g;

	module.exports = function hyphenate(string) {
	  return string.replace(rUpper, '-$1').toLowerCase();
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	 */

	"use strict";

	var hyphenate = __webpack_require__(156);
	var msPattern = /^ms-/;

	module.exports = function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, "-ms-");
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var canUseDOM = __webpack_require__(11);

	var size;

	module.exports = function (recalc) {
	  if (!size || recalc) {
	    if (canUseDOM) {
	      var scrollDiv = document.createElement('div');

	      scrollDiv.style.position = 'absolute';
	      scrollDiv.style.top = '-9999px';
	      scrollDiv.style.width = '50px';
	      scrollDiv.style.height = '50px';
	      scrollDiv.style.overflow = 'scroll';

	      document.body.appendChild(scrollDiv);
	      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	      document.body.removeChild(scrollDiv);
	    }
	  }

	  return size;
	};

/***/ },
/* 159 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(8),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(210),
	    hashDelete = __webpack_require__(211),
	    hashGet = __webpack_require__(212),
	    hashHas = __webpack_require__(213),
	    hashSet = __webpack_require__(214);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(8),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(4);

	/** Built-in value references. */
	var Reflect = root.Reflect;

	module.exports = Reflect;


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(4);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(8),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 166 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `baseAggregator` for arrays.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} setter The function to set `accumulator` values.
	 * @param {Function} iteratee The iteratee to transform keys.
	 * @param {Object} accumulator The initial aggregated object.
	 * @returns {Function} Returns `accumulator`.
	 */
	function arrayAggregator(array, setter, iteratee, accumulator) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    var value = array[index];
	    setter(accumulator, value, iteratee(value), array);
	  }
	  return accumulator;
	}

	module.exports = arrayAggregator;


/***/ },
/* 167 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;


/***/ },
/* 168 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(12);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used by `_.defaults` to customize its `_.assignIn` use.
	 *
	 * @private
	 * @param {*} objValue The destination value.
	 * @param {*} srcValue The source value.
	 * @param {string} key The key of the property to assign.
	 * @param {Object} object The parent object of `objValue`.
	 * @returns {*} Returns the value to assign.
	 */
	function assignInDefaults(objValue, srcValue, key, object) {
	  if (objValue === undefined ||
	      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
	    return srcValue;
	  }
	  return objValue;
	}

	module.exports = assignInDefaults;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(12);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	module.exports = assignValue;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(172);

	/**
	 * Aggregates elements of `collection` on `accumulator` with keys transformed
	 * by `iteratee` and values set by `setter`.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} setter The function to set `accumulator` values.
	 * @param {Function} iteratee The iteratee to transform keys.
	 * @param {Object} accumulator The initial aggregated object.
	 * @returns {Function} Returns `accumulator`.
	 */
	function baseAggregator(collection, setter, iteratee, accumulator) {
	  baseEach(collection, function(value, key, collection) {
	    setter(accumulator, value, iteratee(value), collection);
	  });
	  return accumulator;
	}

	module.exports = baseAggregator;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(176),
	    createBaseEach = __webpack_require__(200);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ },
/* 173 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(62),
	    isFlattenable = __webpack_require__(215);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(201);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(175),
	    keys = __webpack_require__(43);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 177 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 178 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(173),
	    baseIsNaN = __webpack_require__(183);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return baseFindIndex(array, baseIsNaN, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseIndexOf;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(17),
	    arrayIncludes = __webpack_require__(34),
	    arrayIncludesWith = __webpack_require__(35),
	    arrayMap = __webpack_require__(36),
	    baseUnary = __webpack_require__(37),
	    cacheHas = __webpack_require__(38);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;

	/**
	 * The base implementation of methods like `_.intersection`, without support
	 * for iteratee shorthands, that accepts an array of arrays to inspect.
	 *
	 * @private
	 * @param {Array} arrays The arrays to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of shared values.
	 */
	function baseIntersection(arrays, iteratee, comparator) {
	  var includes = comparator ? arrayIncludesWith : arrayIncludes,
	      length = arrays[0].length,
	      othLength = arrays.length,
	      othIndex = othLength,
	      caches = Array(othLength),
	      maxLength = Infinity,
	      result = [];

	  while (othIndex--) {
	    var array = arrays[othIndex];
	    if (othIndex && iteratee) {
	      array = arrayMap(array, baseUnary(iteratee));
	    }
	    maxLength = nativeMin(array.length, maxLength);
	    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
	      ? new SetCache(othIndex && array)
	      : undefined;
	  }
	  array = arrays[0];

	  var index = -1,
	      seen = caches[0];

	  outer:
	  while (++index < length && result.length < maxLength) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (!(seen
	          ? cacheHas(seen, computed)
	          : includes(result, computed, comparator)
	        )) {
	      othIndex = othLength;
	      while (--othIndex) {
	        var cache = caches[othIndex];
	        if (!(cache
	              ? cacheHas(cache, computed)
	              : includes(arrays[othIndex], computed, comparator))
	            ) {
	          continue outer;
	        }
	      }
	      if (seen) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseIntersection;


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(60),
	    equalArrays = __webpack_require__(70),
	    equalByTag = __webpack_require__(203),
	    equalObjects = __webpack_require__(204),
	    getTag = __webpack_require__(207),
	    isArray = __webpack_require__(3),
	    isHostObject = __webpack_require__(39),
	    isTypedArray = __webpack_require__(247);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(60),
	    baseIsEqual = __webpack_require__(66);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 183 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	module.exports = baseIsNaN;


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(79),
	    isHostObject = __webpack_require__(39),
	    isMasked = __webpack_require__(218),
	    isObject = __webpack_require__(9),
	    toSource = __webpack_require__(78);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(25),
	    isObjectLike = __webpack_require__(10);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = baseIsTypedArray;


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(189),
	    baseMatchesProperty = __webpack_require__(190),
	    identity = __webpack_require__(245),
	    isArray = __webpack_require__(3),
	    property = __webpack_require__(249);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(77);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	var baseKeys = overArg(nativeKeys, Object);

	module.exports = baseKeys;


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var Reflect = __webpack_require__(163),
	    iteratorToArray = __webpack_require__(219);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Built-in value references. */
	var enumerate = Reflect ? Reflect.enumerate : undefined,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * The base implementation of `_.keysIn` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  object = object == null ? object : Object(object);

	  var result = [];
	  for (var key in object) {
	    result.push(key);
	  }
	  return result;
	}

	// Fallback for IE < 9 with es6-shim.
	if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
	  baseKeysIn = function(object) {
	    return iteratorToArray(enumerate(object));
	  };
	}

	module.exports = baseKeysIn;


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(182),
	    getMatchData = __webpack_require__(206),
	    matchesStrictComparable = __webpack_require__(76);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(66),
	    get = __webpack_require__(242),
	    hasIn = __webpack_require__(244),
	    isKey = __webpack_require__(21),
	    isStrictComparable = __webpack_require__(75),
	    matchesStrictComparable = __webpack_require__(76),
	    toKey = __webpack_require__(23);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(64);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 192 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(33),
	    isSymbol = __webpack_require__(42);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(62),
	    baseDifference = __webpack_require__(63),
	    baseUniq = __webpack_require__(68);

	/**
	 * The base implementation of methods like `_.xor`, without support for
	 * iteratee shorthands, that accepts an array of arrays to inspect.
	 *
	 * @private
	 * @param {Array} arrays The arrays to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of values.
	 */
	function baseXor(arrays, iteratee, comparator) {
	  var index = -1,
	      length = arrays.length;

	  while (++index < length) {
	    var result = result
	      ? arrayPush(
	          baseDifference(result, arrays[index], iteratee, comparator),
	          baseDifference(arrays[index], result, iteratee, comparator)
	        )
	      : arrays[index];
	  }
	  return (result && result.length) ? baseUniq(result, iteratee, comparator) : [];
	}

	module.exports = baseXor;


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(13);

	/**
	 * Casts `value` to an empty array if it's not an array like object.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array|Object} Returns the cast array-like object.
	 */
	function castArrayLikeObject(value) {
	  return isArrayLikeObject(value) ? value : [];
	}

	module.exports = castArrayLikeObject;


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(170);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(4);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var arrayAggregator = __webpack_require__(166),
	    baseAggregator = __webpack_require__(171),
	    baseIteratee = __webpack_require__(186),
	    isArray = __webpack_require__(3);

	/**
	 * Creates a function like `_.groupBy`.
	 *
	 * @private
	 * @param {Function} setter The function to set accumulator values.
	 * @param {Function} [initializer] The accumulator object initializer.
	 * @returns {Function} Returns the new aggregator function.
	 */
	function createAggregator(setter, initializer) {
	  return function(collection, iteratee) {
	    var func = isArray(collection) ? arrayAggregator : baseAggregator,
	        accumulator = initializer ? initializer() : {};

	    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
	  };
	}

	module.exports = createAggregator;


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(7),
	    isIterateeCall = __webpack_require__(216);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(24);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ },
/* 201 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(59),
	    noop = __webpack_require__(82),
	    setToArray = __webpack_require__(40);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Creates a set object of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
	  return new Set(values);
	};

	module.exports = createSet;


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(33),
	    Uint8Array = __webpack_require__(164),
	    eq = __webpack_require__(12),
	    equalArrays = __webpack_require__(70),
	    mapToArray = __webpack_require__(230),
	    setToArray = __webpack_require__(40);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(65),
	    keys = __webpack_require__(43);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : baseHas(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(67);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(75),
	    keys = __webpack_require__(43);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(160),
	    Map = __webpack_require__(31),
	    Promise = __webpack_require__(162),
	    Set = __webpack_require__(59),
	    WeakMap = __webpack_require__(165),
	    baseGetTag = __webpack_require__(177),
	    toSource = __webpack_require__(78);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 208 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(69),
	    isArguments = __webpack_require__(41),
	    isArray = __webpack_require__(3),
	    isIndex = __webpack_require__(20),
	    isKey = __webpack_require__(21),
	    isLength = __webpack_require__(25),
	    isString = __webpack_require__(80),
	    toKey = __webpack_require__(23);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var result,
	      index = -1,
	      length = path.length;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isString(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(22);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	module.exports = hashClear;


/***/ },
/* 211 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	module.exports = hashDelete;


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(22);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(22);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(22);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(33),
	    isArguments = __webpack_require__(41),
	    isArray = __webpack_require__(3);

	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	module.exports = isFlattenable;


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(12),
	    isArrayLike = __webpack_require__(24),
	    isIndex = __webpack_require__(20),
	    isObject = __webpack_require__(9);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 217 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(197);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 219 */
/***/ function(module, exports) {

	/**
	 * Converts `iterator` to an array.
	 *
	 * @private
	 * @param {Object} iterator The iterator to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function iteratorToArray(iterator) {
	  var data,
	      result = [];

	  while (!(data = iterator.next()).done) {
	    result.push(data.value);
	  }
	  return result;
	}

	module.exports = iteratorToArray;


/***/ },
/* 220 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	module.exports = listCacheClear;


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(18);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(18);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(18);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(18);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(161),
	    ListCache = __webpack_require__(16),
	    Map = __webpack_require__(31);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(19);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	module.exports = mapCacheDelete;


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(19);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(19);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(19);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 230 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(71);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(299)(module)))

/***/ },
/* 232 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 233 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(16);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	module.exports = stackClear;


/***/ },
/* 235 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	module.exports = stackDelete;


/***/ },
/* 236 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 237 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(16),
	    Map = __webpack_require__(31),
	    MapCache = __webpack_require__(32);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(81),
	    toString = __webpack_require__(250);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(196),
	    createAssigner = __webpack_require__(199),
	    keysIn = __webpack_require__(248);

	/**
	 * This method is like `_.assignIn` except that it accepts `customizer`
	 * which is invoked to produce the assigned values. If `customizer` returns
	 * `undefined`, assignment is handled by the method instead. The `customizer`
	 * is invoked with five arguments: (objValue, srcValue, key, object, source).
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias extendWith
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} sources The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 * @see _.assignWith
	 * @example
	 *
	 * function customizer(objValue, srcValue) {
	 *   return _.isUndefined(objValue) ? srcValue : objValue;
	 * }
	 *
	 * var defaults = _.partialRight(_.assignInWith, customizer);
	 *
	 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
	  copyObject(source, keysIn(source), object, customizer);
	});

	module.exports = assignInWith;


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(61),
	    assignInDefaults = __webpack_require__(169),
	    assignInWith = __webpack_require__(240),
	    baseRest = __webpack_require__(7);

	/**
	 * Assigns own and inherited enumerable string keyed properties of source
	 * objects to the destination object for all destination properties that
	 * resolve to `undefined`. Source objects are applied from left to right.
	 * Once a property is set, additional values of the same property are ignored.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.defaultsDeep
	 * @example
	 *
	 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var defaults = baseRest(function(args) {
	  args.push(undefined, assignInDefaults);
	  return apply(assignInWith, undefined, args);
	});

	module.exports = defaults;


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(64);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var createAggregator = __webpack_require__(198);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an object composed of keys generated from the results of running
	 * each element of `collection` thru `iteratee`. The order of grouped values
	 * is determined by the order they occur in `collection`. The corresponding
	 * value of each key is an array of elements responsible for generating the
	 * key. The iteratee is invoked with one argument: (value).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity]
	 *  The iteratee to transform keys.
	 * @returns {Object} Returns the composed aggregate object.
	 * @example
	 *
	 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
	 * // => { '4': [4.2], '6': [6.1, 6.3] }
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.groupBy(['one', 'two', 'three'], 'length');
	 * // => { '3': ['one', 'two'], '5': ['three'] }
	 */
	var groupBy = createAggregator(function(result, value, key) {
	  if (hasOwnProperty.call(result, key)) {
	    result[key].push(value);
	  } else {
	    result[key] = [value];
	  }
	});

	module.exports = groupBy;


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(178),
	    hasPath = __webpack_require__(209);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 245 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(36),
	    baseIntersection = __webpack_require__(180),
	    baseRest = __webpack_require__(7),
	    castArrayLikeObject = __webpack_require__(195);

	/**
	 * Creates an array of unique values that are included in all given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons. The order of result values is determined by the
	 * order they occur in the first array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of intersecting values.
	 * @example
	 *
	 * _.intersection([2, 1], [2, 3]);
	 * // => [2]
	 */
	var intersection = baseRest(function(arrays) {
	  var mapped = arrayMap(arrays, castArrayLikeObject);
	  return (mapped.length && mapped[0] === arrays[0])
	    ? baseIntersection(mapped)
	    : [];
	});

	module.exports = intersection;


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(185),
	    baseUnary = __webpack_require__(37),
	    nodeUtil = __webpack_require__(231);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	var baseKeysIn = __webpack_require__(188),
	    indexKeys = __webpack_require__(73),
	    isIndex = __webpack_require__(20),
	    isPrototype = __webpack_require__(74);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  var index = -1,
	      isProto = isPrototype(object),
	      props = baseKeysIn(object),
	      propsLength = props.length,
	      indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  while (++index < propsLength) {
	    var key = props[index];
	    if (!(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(67),
	    basePropertyDeep = __webpack_require__(191),
	    isKey = __webpack_require__(21),
	    toKey = __webpack_require__(23);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(193);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(174),
	    baseRest = __webpack_require__(7),
	    baseUniq = __webpack_require__(68),
	    isArrayLikeObject = __webpack_require__(13);

	/**
	 * Creates an array of unique values, in order, from all given arrays using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of combined values.
	 * @example
	 *
	 * _.union([2], [1, 2]);
	 * // => [2, 1]
	 */
	var union = baseRest(function(arrays) {
	  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
	});

	module.exports = union;


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(167),
	    baseRest = __webpack_require__(7),
	    baseXor = __webpack_require__(194),
	    isArrayLikeObject = __webpack_require__(13);

	/**
	 * Creates an array of unique values that is the
	 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	 * of the given arrays. The order of result values is determined by the order
	 * they occur in the arrays.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.difference, _.without
	 * @example
	 *
	 * _.xor([2, 1], [2, 3]);
	 * // => [1, 3]
	 */
	var xor = baseRest(function(arrays) {
	  return baseXor(arrayFilter(arrays, isArrayLikeObject));
	});

	module.exports = xor;


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function (Component) {
	    var displayName = Component.displayName || Component.name || "Component";

	    return _react2.default.createClass({
	        displayName: "ContextMenuConnector(" + displayName + ")",
	        getInitialState: function getInitialState() {
	            return {
	                item: _store2.default.getState().currentItem
	            };
	        },
	        componentDidMount: function componentDidMount() {
	            this.unsubscribe = _store2.default.subscribe(this.handleUpdate);
	        },
	        componentWillUnmount: function componentWillUnmount() {
	            this.unsubscribe();
	        },
	        handleUpdate: function handleUpdate() {
	            this.setState(this.getInitialState());
	        },
	        render: function render() {
	            return _react2.default.createElement(Component, _extends({}, this.props, { item: this.state.item }));
	        }
	    });
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _store = __webpack_require__(26);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _store = __webpack_require__(26);

	var _store2 = _interopRequireDefault(_store);

	var _wrapper = __webpack_require__(255);

	var _wrapper2 = _interopRequireDefault(_wrapper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PropTypes = _react2.default.PropTypes;


	var ContextMenu = _react2.default.createClass({
	    displayName: "ContextMenu",
	    propTypes: {
	        identifier: PropTypes.string.isRequired
	    },
	    getInitialState: function getInitialState() {
	        return _store2.default.getState();
	    },
	    componentDidMount: function componentDidMount() {
	        this.unsubscribe = _store2.default.subscribe(this.handleUpdate);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        if (this.unsubscribe) this.unsubscribe();
	    },
	    handleUpdate: function handleUpdate() {
	        this.setState(this.getInitialState());
	    },
	    render: function render() {
	        return _react2.default.createElement(_wrapper2.default, _extends({}, this.props, this.state));
	    }
	});

	exports.default = ContextMenu;

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _monitor = __webpack_require__(44);

	var _monitor2 = _interopRequireDefault(_monitor);

	var _Modal = __webpack_require__(282);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var modalStyle = {
	    position: "fixed",
	    zIndex: 1040,
	    top: 0,
	    bottom: 0,
	    left: 0,
	    right: 0
	},
	    backdropStyle = _extends({}, modalStyle, {
	    zIndex: "auto",
	    backgroundColor: "transparent"
	}),
	    menuStyles = {
	    position: "fixed",
	    zIndex: "auto"
	};

	var ContextMenuWrapper = _react2.default.createClass({
	    displayName: "ContextMenuWrapper",
	    getInitialState: function getInitialState() {
	        return {
	            left: 0,
	            top: 0
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        var _this = this;

	        if (nextProps.isVisible === nextProps.identifier) {
	            var wrapper = window.requestAnimationFrame || setTimeout;

	            wrapper(function () {
	                _this.setState(_this.getMenuPosition(nextProps.x, nextProps.y));
	                _this.menu.parentNode.addEventListener("contextmenu", _this.hideMenu);
	            });
	        }
	    },
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        return this.props.isVisible !== nextProps.visible;
	    },
	    hideMenu: function hideMenu(e) {
	        e.preventDefault();
	        this.menu.parentNode.removeEventListener("contextmenu", this.hideMenu);
	        _monitor2.default.hideMenu();
	    },
	    getMenuPosition: function getMenuPosition(x, y) {
	        var scrollX = document.documentElement.scrollTop;
	        var scrollY = document.documentElement.scrollLeft;
	        var _window = window;
	        var innerWidth = _window.innerWidth;
	        var innerHeight = _window.innerHeight;
	        var rect = this.menu.getBoundingClientRect();
	        var menuStyles = {
	            top: y + scrollY,
	            left: x + scrollX
	        };

	        if (y + rect.height > innerHeight) {
	            menuStyles.top -= rect.height;
	        }

	        if (x + rect.width > innerWidth) {
	            menuStyles.left -= rect.width;
	        }

	        return menuStyles;
	    },
	    render: function render() {
	        var _this2 = this;

	        var _props = this.props;
	        var isVisible = _props.isVisible;
	        var identifier = _props.identifier;
	        var children = _props.children;


	        var style = _extends({}, menuStyles, this.state);

	        return _react2.default.createElement(
	            _Modal2.default,
	            { style: modalStyle, backdropStyle: backdropStyle,
	                show: isVisible === identifier, onHide: function onHide() {
	                    return _monitor2.default.hideMenu();
	                } },
	            _react2.default.createElement(
	                "nav",
	                { ref: function ref(c) {
	                        return _this2.menu = c;
	                    }, style: style,
	                    className: "react-context-menu" },
	                children
	            )
	        );
	    }
	});

	exports.default = ContextMenuWrapper;

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = function (identifier, configure) {
	    return function (Component) {
	        var displayName = Component.displayName || Component.name || "Component";

	        (0, _invariant2.default)(identifier && (typeof identifier === "string" || (typeof identifier === "undefined" ? "undefined" : _typeof(identifier)) === "symbol" || typeof identifier === "function"), "Expected identifier to be string, symbol or function. See %s", displayName);

	        if (configure) {
	            (0, _invariant2.default)(typeof configure === "function", "Expected configure to be a function. See %s", displayName);
	        }

	        return _react2.default.createClass({
	            displayName: displayName + "ContextMenuLayer",
	            getDefaultProps: function getDefaultProps() {
	                return {
	                    renderTag: "div",
	                    attributes: {}
	                };
	            },

	            mouseDown: false,
	            handleMouseDown: function handleMouseDown(event) {
	                var _this = this;

	                if (this.props.holdToDisplay >= 0 && event.button === 0) {
	                    event.persist();

	                    this.mouseDown = true;
	                    setTimeout(function () {
	                        if (_this.mouseDown) _this.handleContextClick(event);
	                    }, this.props.holdToDisplay);
	                }
	            },
	            handleTouchstart: function handleTouchstart(event) {
	                var _this2 = this;

	                event.persist();

	                this.mouseDown = true;
	                setTimeout(function () {
	                    if (_this2.mouseDown) _this2.handleContextClick(event);
	                }, this.props.holdToDisplay);
	            },
	            handleTouchEnd: function handleTouchEnd(event) {
	                event.preventDefault();
	                this.mouseDown = false;
	            },
	            handleMouseUp: function handleMouseUp(event) {
	                if (event.button === 0) {
	                    this.mouseDown = false;
	                }
	            },
	            handleContextClick: function handleContextClick(event) {
	                var currentItem = typeof configure === "function" ? configure(this.props) : {};

	                (0, _invariant2.default)((0, _lodash2.default)(currentItem), "Expected configure to return an object. See %s", displayName);

	                event.preventDefault();

	                var xPos = event.clientX || event.touches && event.touches[0].pageX,
	                    yPos = event.clientY || event.touches && event.touches[0].pageY;

	                _store2.default.dispatch({
	                    type: "SET_PARAMS",
	                    data: {
	                        x: xPos,
	                        y: yPos,
	                        currentItem: currentItem,
	                        isVisible: typeof identifier === "function" ? identifier(this.props) : identifier
	                    }
	                });
	            },
	            render: function render() {
	                var _props = this.props;
	                var _props$attributes = _props.attributes;
	                var _props$attributes$cla = _props$attributes.className;
	                var className = _props$attributes$cla === undefined ? "" : _props$attributes$cla;

	                var attributes = _objectWithoutProperties(_props$attributes, ["className"]);

	                var renderTag = _props.renderTag;

	                var props = _objectWithoutProperties(_props, ["attributes", "renderTag"]);

	                attributes.className = "react-context-menu-wrapper " + className;
	                attributes.onContextMenu = this.handleContextClick;
	                attributes.onMouseDown = this.handleMouseDown;
	                attributes.onMouseUp = this.handleMouseUp;
	                attributes.onTouchStart = this.handleTouchstart;
	                attributes.onTouchEnd = this.handleTouchEnd;
	                attributes.onMouseOut = this.handleMouseUp;

	                return _react2.default.createElement(renderTag, attributes, _react2.default.createElement(Component, props));
	            }
	        });
	    };
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodash = __webpack_require__(159);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _store = __webpack_require__(26);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(85);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _objectAssign = __webpack_require__(86);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _monitor = __webpack_require__(44);

	var _monitor2 = _interopRequireDefault(_monitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var PropTypes = _react2.default.PropTypes;


	var MenuItem = _react2.default.createClass({
	    displayName: "MenuItem",
	    propTypes: {
	        onClick: PropTypes.func.isRequired,
	        data: PropTypes.object,
	        disabled: PropTypes.bool,
	        preventClose: PropTypes.bool
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            disabled: false,
	            data: {},
	            attributes: {}
	        };
	    },
	    handleClick: function handleClick(event) {
	        var _props = this.props;
	        var disabled = _props.disabled;
	        var onClick = _props.onClick;
	        var data = _props.data;
	        var preventClose = _props.preventClose;


	        event.preventDefault();

	        if (disabled) return;

	        (0, _objectAssign2.default)(data, _monitor2.default.getItem());

	        if (typeof onClick === "function") {
	            onClick(event, data);
	        }

	        if (preventClose) return;

	        _monitor2.default.hideMenu();
	    },
	    render: function render() {
	        var _props2 = this.props;
	        var disabled = _props2.disabled;
	        var children = _props2.children;
	        var _props2$attributes = _props2.attributes;
	        var _props2$attributes$cl = _props2$attributes.className;
	        var className = _props2$attributes$cl === undefined ? "" : _props2$attributes$cl;
	        var props = _objectWithoutProperties(_props2$attributes, ["className"]);
	        var menuItemClassNames = "react-context-menu-item " + className;

	        var classes = (0, _classnames2.default)({
	            "react-context-menu-link": true,
	            disabled: disabled
	        });

	        return _react2.default.createElement(
	            "div",
	            _extends({ className: menuItemClassNames }, props),
	            _react2.default.createElement(
	                "a",
	                { href: "#", className: classes, onClick: this.handleClick },
	                children
	            )
	        );
	    }
	});

	exports.default = MenuItem;

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
	    var action = arguments[1];

	    return action.type === "SET_PARAMS" ? (0, _objectAssign2.default)({}, state, action.data) : state;
	};

	var _objectAssign = __webpack_require__(86);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultState = {
	    x: 0,
	    y: 0,
	    isVisible: false,
	    currentItem: {}
	};

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(85);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _wrapper = __webpack_require__(260);

	var _wrapper2 = _interopRequireDefault(_wrapper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var menuStyles = {
	    position: "relative",
	    zIndex: "auto"
	};

	var SubMenu = _react2.default.createClass({
	    displayName: "SubMenu",
	    propTypes: {
	        title: _react2.default.PropTypes.string.isRequired,
	        disabled: _react2.default.PropTypes.bool,
	        hoverDelay: _react2.default.PropTypes.number
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            hoverDelay: 500
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            visible: false
	        };
	    },
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	        return this.state.isVisible !== nextState.visible;
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        if (this.opentimer) clearTimeout(this.opentimer);

	        if (this.closetimer) clearTimeout(this.closetimer);
	    },
	    handleClick: function handleClick(e) {
	        e.preventDefault();
	    },
	    handleMouseEnter: function handleMouseEnter() {
	        var _this = this;

	        if (this.closetimer) clearTimeout(this.closetimer);

	        if (this.props.disabled || this.state.visible) return;

	        this.opentimer = setTimeout(function () {
	            return _this.setState({ visible: true });
	        }, this.props.hoverDelay);
	    },
	    handleMouseLeave: function handleMouseLeave() {
	        var _this2 = this;

	        if (this.opentimer) clearTimeout(this.opentimer);

	        if (!this.state.visible) return;

	        this.closetimer = setTimeout(function () {
	            return _this2.setState({ visible: false });
	        }, this.props.hoverDelay);
	    },
	    render: function render() {
	        var _this3 = this;

	        var _props = this.props;
	        var disabled = _props.disabled;
	        var children = _props.children;
	        var title = _props.title;
	        var visible = this.state.visible;


	        var classes = (0, _classnames2.default)({
	            "react-context-menu-link": true,
	            disabled: disabled,
	            active: visible
	        }),
	            menuClasses = "react-context-menu-item submenu";

	        return _react2.default.createElement(
	            "div",
	            { ref: function ref(c) {
	                    return _this3.item = c;
	                }, className: menuClasses, style: menuStyles,
	                onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave },
	            _react2.default.createElement(
	                "a",
	                { href: "#", className: classes, onClick: this.handleClick },
	                title
	            ),
	            _react2.default.createElement(
	                _wrapper2.default,
	                { visible: visible },
	                children
	            )
	        );
	    }
	});

	exports.default = SubMenu;

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SubMenuWrapper = _react2.default.createClass({
	    displayName: "SubMenuWrapper",
	    propTypes: {
	        visible: _react2.default.PropTypes.bool
	    },
	    getInitialState: function getInitialState() {
	        return {
	            position: {
	                top: true,
	                right: true
	            }
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        var _this = this;

	        if (nextProps.visible) {
	            var wrapper = window.requestAnimationFrame || setTimeout;

	            wrapper(function () {
	                _this.setState(_this.getMenuPosition());
	                _this.forceUpdate();
	            });
	        } else {
	            this.setState(this.getInitialState());
	        }
	    },
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        return this.props.visible !== nextProps.visible;
	    },
	    getMenuPosition: function getMenuPosition() {
	        var _window = window;
	        var innerWidth = _window.innerWidth;
	        var innerHeight = _window.innerHeight;
	        var rect = this.menu.getBoundingClientRect();
	        var position = {};

	        if (rect.bottom > innerHeight) {
	            position.bottom = true;
	        } else {
	            position.top = true;
	        }

	        if (rect.right > innerWidth) {
	            position.left = true;
	        } else {
	            position.right = true;
	        }

	        return { position: position };
	    },
	    getPositionStyles: function getPositionStyles() {
	        var style = {};
	        var position = this.state.position;


	        if (position.top) style.top = 0;
	        if (position.bottom) style.bottom = 0;
	        if (position.right) style.left = "100%";
	        if (position.left) style.right = "100%";

	        return style;
	    },
	    render: function render() {
	        var _this2 = this;

	        var _props = this.props;
	        var children = _props.children;
	        var visible = _props.visible;


	        var style = _extends({
	            display: visible ? "block" : "none",
	            position: "absolute"
	        }, this.getPositionStyles());

	        return _react2.default.createElement(
	            "nav",
	            { ref: function ref(c) {
	                    return _this2.menu = c;
	                }, style: style, className: "react-context-menu" },
	            children
	        );
	    }
	});

	exports.default = SubMenuWrapper;

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodashUnion = __webpack_require__(251);

	var _lodashUnion2 = _interopRequireDefault(_lodashUnion);

	var _lodashWithout = __webpack_require__(83);

	var _lodashWithout2 = _interopRequireDefault(_lodashWithout);

	var EnterLeaveCounter = (function () {
	  function EnterLeaveCounter() {
	    _classCallCheck(this, EnterLeaveCounter);

	    this.entered = [];
	  }

	  EnterLeaveCounter.prototype.enter = function enter(enteringNode) {
	    var previousLength = this.entered.length;

	    this.entered = _lodashUnion2['default'](this.entered.filter(function (node) {
	      return document.documentElement.contains(node) && (!node.contains || node.contains(enteringNode));
	    }), [enteringNode]);

	    return previousLength === 0 && this.entered.length > 0;
	  };

	  EnterLeaveCounter.prototype.leave = function leave(leavingNode) {
	    var previousLength = this.entered.length;

	    this.entered = _lodashWithout2['default'](this.entered.filter(function (node) {
	      return document.documentElement.contains(node);
	    }), leavingNode);

	    return previousLength > 0 && this.entered.length === 0;
	  };

	  EnterLeaveCounter.prototype.reset = function reset() {
	    this.entered = [];
	  };

	  return EnterLeaveCounter;
	})();

	exports['default'] = EnterLeaveCounter;
	module.exports = exports['default'];

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodashDefaults = __webpack_require__(241);

	var _lodashDefaults2 = _interopRequireDefault(_lodashDefaults);

	var _shallowEqual = __webpack_require__(268);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _EnterLeaveCounter = __webpack_require__(261);

	var _EnterLeaveCounter2 = _interopRequireDefault(_EnterLeaveCounter);

	var _BrowserDetector = __webpack_require__(87);

	var _OffsetUtils = __webpack_require__(265);

	var _NativeDragSources = __webpack_require__(264);

	var _NativeTypes = __webpack_require__(45);

	var NativeTypes = _interopRequireWildcard(_NativeTypes);

	var HTML5Backend = (function () {
	  function HTML5Backend(manager) {
	    _classCallCheck(this, HTML5Backend);

	    this.actions = manager.getActions();
	    this.monitor = manager.getMonitor();
	    this.registry = manager.getRegistry();

	    this.sourcePreviewNodes = {};
	    this.sourcePreviewNodeOptions = {};
	    this.sourceNodes = {};
	    this.sourceNodeOptions = {};
	    this.enterLeaveCounter = new _EnterLeaveCounter2['default']();

	    this.getSourceClientOffset = this.getSourceClientOffset.bind(this);
	    this.handleTopDragStart = this.handleTopDragStart.bind(this);
	    this.handleTopDragStartCapture = this.handleTopDragStartCapture.bind(this);
	    this.handleTopDragEndCapture = this.handleTopDragEndCapture.bind(this);
	    this.handleTopDragEnter = this.handleTopDragEnter.bind(this);
	    this.handleTopDragEnterCapture = this.handleTopDragEnterCapture.bind(this);
	    this.handleTopDragLeaveCapture = this.handleTopDragLeaveCapture.bind(this);
	    this.handleTopDragOver = this.handleTopDragOver.bind(this);
	    this.handleTopDragOverCapture = this.handleTopDragOverCapture.bind(this);
	    this.handleTopDrop = this.handleTopDrop.bind(this);
	    this.handleTopDropCapture = this.handleTopDropCapture.bind(this);
	    this.handleSelectStart = this.handleSelectStart.bind(this);
	    this.endDragIfSourceWasRemovedFromDOM = this.endDragIfSourceWasRemovedFromDOM.bind(this);
	    this.endDragNativeItem = this.endDragNativeItem.bind(this);
	  }

	  HTML5Backend.prototype.setup = function setup() {
	    if (typeof window === 'undefined') {
	      return;
	    }

	    if (this.constructor.isSetUp) {
	      throw new Error('Cannot have two HTML5 backends at the same time.');
	    }
	    this.constructor.isSetUp = true;
	    this.addEventListeners(window);
	  };

	  HTML5Backend.prototype.teardown = function teardown() {
	    if (typeof window === 'undefined') {
	      return;
	    }

	    this.constructor.isSetUp = false;
	    this.removeEventListeners(window);
	    this.clearCurrentDragSourceNode();
	  };

	  HTML5Backend.prototype.addEventListeners = function addEventListeners(target) {
	    target.addEventListener('dragstart', this.handleTopDragStart);
	    target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
	    target.addEventListener('dragend', this.handleTopDragEndCapture, true);
	    target.addEventListener('dragenter', this.handleTopDragEnter);
	    target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
	    target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
	    target.addEventListener('dragover', this.handleTopDragOver);
	    target.addEventListener('dragover', this.handleTopDragOverCapture, true);
	    target.addEventListener('drop', this.handleTopDrop);
	    target.addEventListener('drop', this.handleTopDropCapture, true);
	  };

	  HTML5Backend.prototype.removeEventListeners = function removeEventListeners(target) {
	    target.removeEventListener('dragstart', this.handleTopDragStart);
	    target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
	    target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
	    target.removeEventListener('dragenter', this.handleTopDragEnter);
	    target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
	    target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
	    target.removeEventListener('dragover', this.handleTopDragOver);
	    target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
	    target.removeEventListener('drop', this.handleTopDrop);
	    target.removeEventListener('drop', this.handleTopDropCapture, true);
	  };

	  HTML5Backend.prototype.connectDragPreview = function connectDragPreview(sourceId, node, options) {
	    var _this = this;

	    this.sourcePreviewNodeOptions[sourceId] = options;
	    this.sourcePreviewNodes[sourceId] = node;

	    return function () {
	      delete _this.sourcePreviewNodes[sourceId];
	      delete _this.sourcePreviewNodeOptions[sourceId];
	    };
	  };

	  HTML5Backend.prototype.connectDragSource = function connectDragSource(sourceId, node, options) {
	    var _this2 = this;

	    this.sourceNodes[sourceId] = node;
	    this.sourceNodeOptions[sourceId] = options;

	    var handleDragStart = function handleDragStart(e) {
	      return _this2.handleDragStart(e, sourceId);
	    };
	    var handleSelectStart = function handleSelectStart(e) {
	      return _this2.handleSelectStart(e, sourceId);
	    };

	    node.setAttribute('draggable', true);
	    node.addEventListener('dragstart', handleDragStart);
	    node.addEventListener('selectstart', handleSelectStart);

	    return function () {
	      delete _this2.sourceNodes[sourceId];
	      delete _this2.sourceNodeOptions[sourceId];

	      node.removeEventListener('dragstart', handleDragStart);
	      node.removeEventListener('selectstart', handleSelectStart);
	      node.setAttribute('draggable', false);
	    };
	  };

	  HTML5Backend.prototype.connectDropTarget = function connectDropTarget(targetId, node) {
	    var _this3 = this;

	    var handleDragEnter = function handleDragEnter(e) {
	      return _this3.handleDragEnter(e, targetId);
	    };
	    var handleDragOver = function handleDragOver(e) {
	      return _this3.handleDragOver(e, targetId);
	    };
	    var handleDrop = function handleDrop(e) {
	      return _this3.handleDrop(e, targetId);
	    };

	    node.addEventListener('dragenter', handleDragEnter);
	    node.addEventListener('dragover', handleDragOver);
	    node.addEventListener('drop', handleDrop);

	    return function () {
	      node.removeEventListener('dragenter', handleDragEnter);
	      node.removeEventListener('dragover', handleDragOver);
	      node.removeEventListener('drop', handleDrop);
	    };
	  };

	  HTML5Backend.prototype.getCurrentSourceNodeOptions = function getCurrentSourceNodeOptions() {
	    var sourceId = this.monitor.getSourceId();
	    var sourceNodeOptions = this.sourceNodeOptions[sourceId];

	    return _lodashDefaults2['default'](sourceNodeOptions || {}, {
	      dropEffect: 'move'
	    });
	  };

	  HTML5Backend.prototype.getCurrentDropEffect = function getCurrentDropEffect() {
	    if (this.isDraggingNativeItem()) {
	      // It makes more sense to default to 'copy' for native resources
	      return 'copy';
	    }

	    return this.getCurrentSourceNodeOptions().dropEffect;
	  };

	  HTML5Backend.prototype.getCurrentSourcePreviewNodeOptions = function getCurrentSourcePreviewNodeOptions() {
	    var sourceId = this.monitor.getSourceId();
	    var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions[sourceId];

	    return _lodashDefaults2['default'](sourcePreviewNodeOptions || {}, {
	      anchorX: 0.5,
	      anchorY: 0.5,
	      captureDraggingState: false
	    });
	  };

	  HTML5Backend.prototype.getSourceClientOffset = function getSourceClientOffset(sourceId) {
	    return _OffsetUtils.getNodeClientOffset(this.sourceNodes[sourceId]);
	  };

	  HTML5Backend.prototype.isDraggingNativeItem = function isDraggingNativeItem() {
	    var itemType = this.monitor.getItemType();
	    return Object.keys(NativeTypes).some(function (key) {
	      return NativeTypes[key] === itemType;
	    });
	  };

	  HTML5Backend.prototype.beginDragNativeItem = function beginDragNativeItem(type) {
	    this.clearCurrentDragSourceNode();

	    var SourceType = _NativeDragSources.createNativeDragSource(type);
	    this.currentNativeSource = new SourceType();
	    this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
	    this.actions.beginDrag([this.currentNativeHandle]);

	    // On Firefox, if mousemove fires, the drag is over but browser failed to tell us.
	    // This is not true for other browsers.
	    if (_BrowserDetector.isFirefox()) {
	      window.addEventListener('mousemove', this.endDragNativeItem, true);
	    }
	  };

	  HTML5Backend.prototype.endDragNativeItem = function endDragNativeItem() {
	    if (!this.isDraggingNativeItem()) {
	      return;
	    }

	    if (_BrowserDetector.isFirefox()) {
	      window.removeEventListener('mousemove', this.endDragNativeItem, true);
	    }

	    this.actions.endDrag();
	    this.registry.removeSource(this.currentNativeHandle);
	    this.currentNativeHandle = null;
	    this.currentNativeSource = null;
	  };

	  HTML5Backend.prototype.endDragIfSourceWasRemovedFromDOM = function endDragIfSourceWasRemovedFromDOM() {
	    var node = this.currentDragSourceNode;
	    if (document.body.contains(node)) {
	      return;
	    }

	    if (this.clearCurrentDragSourceNode()) {
	      this.actions.endDrag();
	    }
	  };

	  HTML5Backend.prototype.setCurrentDragSourceNode = function setCurrentDragSourceNode(node) {
	    this.clearCurrentDragSourceNode();
	    this.currentDragSourceNode = node;
	    this.currentDragSourceNodeOffset = _OffsetUtils.getNodeClientOffset(node);
	    this.currentDragSourceNodeOffsetChanged = false;

	    // Receiving a mouse event in the middle of a dragging operation
	    // means it has ended and the drag source node disappeared from DOM,
	    // so the browser didn't dispatch the dragend event.
	    window.addEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
	  };

	  HTML5Backend.prototype.clearCurrentDragSourceNode = function clearCurrentDragSourceNode() {
	    if (this.currentDragSourceNode) {
	      this.currentDragSourceNode = null;
	      this.currentDragSourceNodeOffset = null;
	      this.currentDragSourceNodeOffsetChanged = false;
	      window.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
	      return true;
	    }

	    return false;
	  };

	  HTML5Backend.prototype.checkIfCurrentDragSourceRectChanged = function checkIfCurrentDragSourceRectChanged() {
	    var node = this.currentDragSourceNode;
	    if (!node) {
	      return false;
	    }

	    if (this.currentDragSourceNodeOffsetChanged) {
	      return true;
	    }

	    this.currentDragSourceNodeOffsetChanged = !_shallowEqual2['default'](_OffsetUtils.getNodeClientOffset(node), this.currentDragSourceNodeOffset);

	    return this.currentDragSourceNodeOffsetChanged;
	  };

	  HTML5Backend.prototype.handleTopDragStartCapture = function handleTopDragStartCapture() {
	    this.clearCurrentDragSourceNode();
	    this.dragStartSourceIds = [];
	  };

	  HTML5Backend.prototype.handleDragStart = function handleDragStart(e, sourceId) {
	    this.dragStartSourceIds.unshift(sourceId);
	  };

	  HTML5Backend.prototype.handleTopDragStart = function handleTopDragStart(e) {
	    var _this4 = this;

	    var dragStartSourceIds = this.dragStartSourceIds;

	    this.dragStartSourceIds = null;

	    var clientOffset = _OffsetUtils.getEventClientOffset(e);

	    // Don't publish the source just yet (see why below)
	    this.actions.beginDrag(dragStartSourceIds, {
	      publishSource: false,
	      getSourceClientOffset: this.getSourceClientOffset,
	      clientOffset: clientOffset
	    });

	    var dataTransfer = e.dataTransfer;

	    var nativeType = _NativeDragSources.matchNativeItemType(dataTransfer);

	    if (this.monitor.isDragging()) {
	      if (typeof dataTransfer.setDragImage === 'function') {
	        // Use custom drag image if user specifies it.
	        // If child drag source refuses drag but parent agrees,
	        // use parent's node as drag image. Neither works in IE though.
	        var sourceId = this.monitor.getSourceId();
	        var sourceNode = this.sourceNodes[sourceId];
	        var dragPreview = this.sourcePreviewNodes[sourceId] || sourceNode;

	        var _getCurrentSourcePreviewNodeOptions = this.getCurrentSourcePreviewNodeOptions();

	        var anchorX = _getCurrentSourcePreviewNodeOptions.anchorX;
	        var anchorY = _getCurrentSourcePreviewNodeOptions.anchorY;

	        var anchorPoint = { anchorX: anchorX, anchorY: anchorY };
	        var dragPreviewOffset = _OffsetUtils.getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint);
	        dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
	      }

	      try {
	        // Firefox won't drag without setting data
	        dataTransfer.setData('application/json', {});
	      } catch (err) {}
	      // IE doesn't support MIME types in setData

	      // Store drag source node so we can check whether
	      // it is removed from DOM and trigger endDrag manually.
	      this.setCurrentDragSourceNode(e.target);

	      // Now we are ready to publish the drag source.. or are we not?

	      var _getCurrentSourcePreviewNodeOptions2 = this.getCurrentSourcePreviewNodeOptions();

	      var captureDraggingState = _getCurrentSourcePreviewNodeOptions2.captureDraggingState;

	      if (!captureDraggingState) {
	        // Usually we want to publish it in the next tick so that browser
	        // is able to screenshot the current (not yet dragging) state.
	        //
	        // It also neatly avoids a situation where render() returns null
	        // in the same tick for the source element, and browser freaks out.
	        setTimeout(function () {
	          return _this4.actions.publishDragSource();
	        });
	      } else {
	        // In some cases the user may want to override this behavior, e.g.
	        // to work around IE not supporting custom drag previews.
	        //
	        // When using a custom drag layer, the only way to prevent
	        // the default drag preview from drawing in IE is to screenshot
	        // the dragging state in which the node itself has zero opacity
	        // and height. In this case, though, returning null from render()
	        // will abruptly end the dragging, which is not obvious.
	        //
	        // This is the reason such behavior is strictly opt-in.
	        this.actions.publishDragSource();
	      }
	    } else if (nativeType) {
	      // A native item (such as URL) dragged from inside the document
	      this.beginDragNativeItem(nativeType);
	    } else if (!dataTransfer.types && (!e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
	      // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
	      // Just let it drag. It's a native type (URL or text) and will be picked up in dragenter handler.
	      return;
	    } else {
	      // If by this time no drag source reacted, tell browser not to drag.
	      e.preventDefault();
	    }
	  };

	  HTML5Backend.prototype.handleTopDragEndCapture = function handleTopDragEndCapture() {
	    if (this.clearCurrentDragSourceNode()) {
	      // Firefox can dispatch this event in an infinite loop
	      // if dragend handler does something like showing an alert.
	      // Only proceed if we have not handled it already.
	      this.actions.endDrag();
	    }
	  };

	  HTML5Backend.prototype.handleTopDragEnterCapture = function handleTopDragEnterCapture(e) {
	    this.dragEnterTargetIds = [];

	    var isFirstEnter = this.enterLeaveCounter.enter(e.target);
	    if (!isFirstEnter || this.monitor.isDragging()) {
	      return;
	    }

	    var dataTransfer = e.dataTransfer;

	    var nativeType = _NativeDragSources.matchNativeItemType(dataTransfer);

	    if (nativeType) {
	      // A native item (such as file or URL) dragged from outside the document
	      this.beginDragNativeItem(nativeType);
	    }
	  };

	  HTML5Backend.prototype.handleDragEnter = function handleDragEnter(e, targetId) {
	    this.dragEnterTargetIds.unshift(targetId);
	  };

	  HTML5Backend.prototype.handleTopDragEnter = function handleTopDragEnter(e) {
	    var _this5 = this;

	    var dragEnterTargetIds = this.dragEnterTargetIds;

	    this.dragEnterTargetIds = [];

	    if (!this.monitor.isDragging()) {
	      // This is probably a native item type we don't understand.
	      return;
	    }

	    if (!_BrowserDetector.isFirefox()) {
	      // Don't emit hover in `dragenter` on Firefox due to an edge case.
	      // If the target changes position as the result of `dragenter`, Firefox
	      // will still happily dispatch `dragover` despite target being no longer
	      // there. The easy solution is to only fire `hover` in `dragover` on FF.
	      this.actions.hover(dragEnterTargetIds, {
	        clientOffset: _OffsetUtils.getEventClientOffset(e)
	      });
	    }

	    var canDrop = dragEnterTargetIds.some(function (targetId) {
	      return _this5.monitor.canDropOnTarget(targetId);
	    });

	    if (canDrop) {
	      // IE requires this to fire dragover events
	      e.preventDefault();
	      e.dataTransfer.dropEffect = this.getCurrentDropEffect();
	    }
	  };

	  HTML5Backend.prototype.handleTopDragOverCapture = function handleTopDragOverCapture() {
	    this.dragOverTargetIds = [];
	  };

	  HTML5Backend.prototype.handleDragOver = function handleDragOver(e, targetId) {
	    this.dragOverTargetIds.unshift(targetId);
	  };

	  HTML5Backend.prototype.handleTopDragOver = function handleTopDragOver(e) {
	    var _this6 = this;

	    var dragOverTargetIds = this.dragOverTargetIds;

	    this.dragOverTargetIds = [];

	    if (!this.monitor.isDragging()) {
	      // This is probably a native item type we don't understand.
	      // Prevent default "drop and blow away the whole document" action.
	      e.preventDefault();
	      e.dataTransfer.dropEffect = 'none';
	      return;
	    }

	    this.actions.hover(dragOverTargetIds, {
	      clientOffset: _OffsetUtils.getEventClientOffset(e)
	    });

	    var canDrop = dragOverTargetIds.some(function (targetId) {
	      return _this6.monitor.canDropOnTarget(targetId);
	    });

	    if (canDrop) {
	      // Show user-specified drop effect.
	      e.preventDefault();
	      e.dataTransfer.dropEffect = this.getCurrentDropEffect();
	    } else if (this.isDraggingNativeItem()) {
	      // Don't show a nice cursor but still prevent default
	      // "drop and blow away the whole document" action.
	      e.preventDefault();
	      e.dataTransfer.dropEffect = 'none';
	    } else if (this.checkIfCurrentDragSourceRectChanged()) {
	      // Prevent animating to incorrect position.
	      // Drop effect must be other than 'none' to prevent animation.
	      e.preventDefault();
	      e.dataTransfer.dropEffect = 'move';
	    }
	  };

	  HTML5Backend.prototype.handleTopDragLeaveCapture = function handleTopDragLeaveCapture(e) {
	    if (this.isDraggingNativeItem()) {
	      e.preventDefault();
	    }

	    var isLastLeave = this.enterLeaveCounter.leave(e.target);
	    if (!isLastLeave) {
	      return;
	    }

	    if (this.isDraggingNativeItem()) {
	      this.endDragNativeItem();
	    }
	  };

	  HTML5Backend.prototype.handleTopDropCapture = function handleTopDropCapture(e) {
	    this.dropTargetIds = [];
	    e.preventDefault();

	    if (this.isDraggingNativeItem()) {
	      this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer);
	    }

	    this.enterLeaveCounter.reset();
	  };

	  HTML5Backend.prototype.handleDrop = function handleDrop(e, targetId) {
	    this.dropTargetIds.unshift(targetId);
	  };

	  HTML5Backend.prototype.handleTopDrop = function handleTopDrop(e) {
	    var dropTargetIds = this.dropTargetIds;

	    this.dropTargetIds = [];

	    this.actions.hover(dropTargetIds, {
	      clientOffset: _OffsetUtils.getEventClientOffset(e)
	    });
	    this.actions.drop();

	    if (this.isDraggingNativeItem()) {
	      this.endDragNativeItem();
	    } else {
	      this.endDragIfSourceWasRemovedFromDOM();
	    }
	  };

	  HTML5Backend.prototype.handleSelectStart = function handleSelectStart(e) {
	    var target = e.target;

	    // Only IE requires us to explicitly say
	    // we want drag drop operation to start
	    if (typeof target.dragDrop !== 'function') {
	      return;
	    }

	    // Inputs and textareas should be selectable
	    if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
	      return;
	    }

	    // For other targets, ask IE
	    // to enable drag and drop
	    e.preventDefault();
	    target.dragDrop();
	  };

	  return HTML5Backend;
	})();

	exports['default'] = HTML5Backend;
	module.exports = exports['default'];

/***/ },
/* 263 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MonotonicInterpolant = (function () {
	  function MonotonicInterpolant(xs, ys) {
	    _classCallCheck(this, MonotonicInterpolant);

	    var length = xs.length;

	    // Rearrange xs and ys so that xs is sorted
	    var indexes = [];
	    for (var i = 0; i < length; i++) {
	      indexes.push(i);
	    }
	    indexes.sort(function (a, b) {
	      return xs[a] < xs[b] ? -1 : 1;
	    });

	    // Get consecutive differences and slopes
	    var dys = [];
	    var dxs = [];
	    var ms = [];
	    var dx = undefined;
	    var dy = undefined;
	    for (var i = 0; i < length - 1; i++) {
	      dx = xs[i + 1] - xs[i];
	      dy = ys[i + 1] - ys[i];
	      dxs.push(dx);
	      dys.push(dy);
	      ms.push(dy / dx);
	    }

	    // Get degree-1 coefficients
	    var c1s = [ms[0]];
	    for (var i = 0; i < dxs.length - 1; i++) {
	      var _m = ms[i];
	      var mNext = ms[i + 1];
	      if (_m * mNext <= 0) {
	        c1s.push(0);
	      } else {
	        dx = dxs[i];
	        var dxNext = dxs[i + 1];
	        var common = dx + dxNext;
	        c1s.push(3 * common / ((common + dxNext) / _m + (common + dx) / mNext));
	      }
	    }
	    c1s.push(ms[ms.length - 1]);

	    // Get degree-2 and degree-3 coefficients
	    var c2s = [];
	    var c3s = [];
	    var m = undefined;
	    for (var i = 0; i < c1s.length - 1; i++) {
	      m = ms[i];
	      var c1 = c1s[i];
	      var invDx = 1 / dxs[i];
	      var common = c1 + c1s[i + 1] - m - m;
	      c2s.push((m - c1 - common) * invDx);
	      c3s.push(common * invDx * invDx);
	    }

	    this.xs = xs;
	    this.ys = ys;
	    this.c1s = c1s;
	    this.c2s = c2s;
	    this.c3s = c3s;
	  }

	  MonotonicInterpolant.prototype.interpolate = function interpolate(x) {
	    var xs = this.xs;
	    var ys = this.ys;
	    var c1s = this.c1s;
	    var c2s = this.c2s;
	    var c3s = this.c3s;

	    // The rightmost point in the dataset should give an exact result
	    var i = xs.length - 1;
	    if (x === xs[i]) {
	      return ys[i];
	    }

	    // Search for the interval x is in, returning the corresponding y if x is one of the original xs
	    var low = 0;
	    var high = c3s.length - 1;
	    var mid = undefined;
	    while (low <= high) {
	      mid = Math.floor(0.5 * (low + high));
	      var xHere = xs[mid];
	      if (xHere < x) {
	        low = mid + 1;
	      } else if (xHere > x) {
	        high = mid - 1;
	      } else {
	        return ys[mid];
	      }
	    }
	    i = Math.max(0, high);

	    // Interpolate
	    var diff = x - xs[i];
	    var diffSq = diff * diff;
	    return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
	  };

	  return MonotonicInterpolant;
	})();

	exports["default"] = MonotonicInterpolant;
	module.exports = exports["default"];

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _nativeTypesConfig;

	exports.createNativeDragSource = createNativeDragSource;
	exports.matchNativeItemType = matchNativeItemType;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _NativeTypes = __webpack_require__(45);

	var NativeTypes = _interopRequireWildcard(_NativeTypes);

	function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
	  var result = typesToTry.reduce(function (resultSoFar, typeToTry) {
	    return resultSoFar || dataTransfer.getData(typeToTry);
	  }, null);

	  return result != null ? // eslint-disable-line eqeqeq
	  result : defaultValue;
	}

	var nativeTypesConfig = (_nativeTypesConfig = {}, _defineProperty(_nativeTypesConfig, NativeTypes.FILE, {
	  exposeProperty: 'files',
	  matchesTypes: ['Files'],
	  getData: function getData(dataTransfer) {
	    return Array.prototype.slice.call(dataTransfer.files);
	  }
	}), _defineProperty(_nativeTypesConfig, NativeTypes.URL, {
	  exposeProperty: 'urls',
	  matchesTypes: ['Url', 'text/uri-list'],
	  getData: function getData(dataTransfer, matchesTypes) {
	    return getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n');
	  }
	}), _defineProperty(_nativeTypesConfig, NativeTypes.TEXT, {
	  exposeProperty: 'text',
	  matchesTypes: ['Text', 'text/plain'],
	  getData: function getData(dataTransfer, matchesTypes) {
	    return getDataFromDataTransfer(dataTransfer, matchesTypes, '');
	  }
	}), _nativeTypesConfig);

	function createNativeDragSource(type) {
	  var _nativeTypesConfig$type = nativeTypesConfig[type];
	  var exposeProperty = _nativeTypesConfig$type.exposeProperty;
	  var matchesTypes = _nativeTypesConfig$type.matchesTypes;
	  var getData = _nativeTypesConfig$type.getData;

	  return (function () {
	    function NativeDragSource() {
	      _classCallCheck(this, NativeDragSource);

	      this.item = Object.defineProperties({}, _defineProperty({}, exposeProperty, {
	        get: function get() {
	          console.warn( // eslint-disable-line no-console
	          'Browser doesn\'t allow reading "' + exposeProperty + '" until the drop event.');
	          return null;
	        },
	        configurable: true,
	        enumerable: true
	      }));
	    }

	    NativeDragSource.prototype.mutateItemByReadingDataTransfer = function mutateItemByReadingDataTransfer(dataTransfer) {
	      delete this.item[exposeProperty];
	      this.item[exposeProperty] = getData(dataTransfer, matchesTypes);
	    };

	    NativeDragSource.prototype.canDrag = function canDrag() {
	      return true;
	    };

	    NativeDragSource.prototype.beginDrag = function beginDrag() {
	      return this.item;
	    };

	    NativeDragSource.prototype.isDragging = function isDragging(monitor, handle) {
	      return handle === monitor.getSourceId();
	    };

	    NativeDragSource.prototype.endDrag = function endDrag() {};

	    return NativeDragSource;
	  })();
	}

	function matchNativeItemType(dataTransfer) {
	  var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);

	  return Object.keys(nativeTypesConfig).filter(function (nativeItemType) {
	    var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;

	    return matchesTypes.some(function (t) {
	      return dataTransferTypes.indexOf(t) > -1;
	    });
	  })[0] || null;
	}

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getNodeClientOffset = getNodeClientOffset;
	exports.getEventClientOffset = getEventClientOffset;
	exports.getDragPreviewOffset = getDragPreviewOffset;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _BrowserDetector = __webpack_require__(87);

	var _MonotonicInterpolant = __webpack_require__(263);

	var _MonotonicInterpolant2 = _interopRequireDefault(_MonotonicInterpolant);

	var ELEMENT_NODE = 1;

	function getNodeClientOffset(node) {
	  var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;

	  if (!el) {
	    return null;
	  }

	  var _el$getBoundingClientRect = el.getBoundingClientRect();

	  var top = _el$getBoundingClientRect.top;
	  var left = _el$getBoundingClientRect.left;

	  return { x: left, y: top };
	}

	function getEventClientOffset(e) {
	  return {
	    x: e.clientX,
	    y: e.clientY
	  };
	}

	function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint) {
	  // The browsers will use the image intrinsic size under different conditions.
	  // Firefox only cares if it's an image, but WebKit also wants it to be detached.
	  var isImage = dragPreview.nodeName === 'IMG' && (_BrowserDetector.isFirefox() || !document.documentElement.contains(dragPreview));
	  var dragPreviewNode = isImage ? sourceNode : dragPreview;

	  var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
	  var offsetFromDragPreview = {
	    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
	    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
	  };

	  var sourceWidth = sourceNode.offsetWidth;
	  var sourceHeight = sourceNode.offsetHeight;
	  var anchorX = anchorPoint.anchorX;
	  var anchorY = anchorPoint.anchorY;

	  var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
	  var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;

	  // Work around @2x coordinate discrepancies in browsers
	  if (_BrowserDetector.isSafari() && isImage) {
	    dragPreviewHeight /= window.devicePixelRatio;
	    dragPreviewWidth /= window.devicePixelRatio;
	  } else if (_BrowserDetector.isFirefox() && !isImage) {
	    dragPreviewHeight *= window.devicePixelRatio;
	    dragPreviewWidth *= window.devicePixelRatio;
	  }

	  // Interpolate coordinates depending on anchor point
	  // If you know a simpler way to do this, let me know
	  var interpolantX = new _MonotonicInterpolant2['default']([0, 0.5, 1], [
	  // Dock to the left
	  offsetFromDragPreview.x,
	  // Align at the center
	  offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
	  // Dock to the right
	  offsetFromDragPreview.x + dragPreviewWidth - sourceWidth]);
	  var interpolantY = new _MonotonicInterpolant2['default']([0, 0.5, 1], [
	  // Dock to the top
	  offsetFromDragPreview.y,
	  // Align at the center
	  offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
	  // Dock to the bottom
	  offsetFromDragPreview.y + dragPreviewHeight - sourceHeight]);
	  var x = interpolantX.interpolate(anchorX);
	  var y = interpolantY.interpolate(anchorY);

	  // Work around Safari 8 positioning bug
	  if (_BrowserDetector.isSafari() && isImage) {
	    // We'll have to wait for @3x to see if this is entirely correct
	    y += (window.devicePixelRatio - 1) * dragPreviewHeight;
	  }

	  return { x: x, y: y };
	}

/***/ },
/* 266 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = getEmptyImage;
	var emptyImage = undefined;

	function getEmptyImage() {
	  if (!emptyImage) {
	    emptyImage = new Image();
	    emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
	  }

	  return emptyImage;
	}

	module.exports = exports['default'];

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createHTML5Backend;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _HTML5Backend = __webpack_require__(262);

	var _HTML5Backend2 = _interopRequireDefault(_HTML5Backend);

	var _getEmptyImage = __webpack_require__(266);

	var _getEmptyImage2 = _interopRequireDefault(_getEmptyImage);

	var _NativeTypes = __webpack_require__(45);

	var NativeTypes = _interopRequireWildcard(_NativeTypes);

	exports.NativeTypes = NativeTypes;
	exports.getEmptyImage = _getEmptyImage2['default'];

	function createHTML5Backend(manager) {
	  return new _HTML5Backend2['default'](manager);
	}

/***/ },
/* 268 */
47,
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slice = Array.prototype.slice;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports['default'] = DragDropContext;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _dndCore = __webpack_require__(138);

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _utilsCheckDecoratorArguments = __webpack_require__(27);

	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);

	function DragDropContext(backendOrModule) {
	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DragDropContext', 'backend'].concat(_slice.call(arguments)));

	  // Auto-detect ES6 default export for people still using ES5
	  var backend = undefined;
	  if (typeof backendOrModule === 'object' && typeof backendOrModule['default'] === 'function') {
	    backend = backendOrModule['default'];
	  } else {
	    backend = backendOrModule;
	  }

	  _invariant2['default'](typeof backend === 'function', 'Expected the backend to be a function or an ES6 module exporting a default function. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-drop-context.html');

	  var childContext = {
	    dragDropManager: new _dndCore.DragDropManager(backend)
	  };

	  return function decorateContext(DecoratedComponent) {
	    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

	    return (function (_Component) {
	      _inherits(DragDropContextContainer, _Component);

	      function DragDropContextContainer() {
	        _classCallCheck(this, DragDropContextContainer);

	        _Component.apply(this, arguments);
	      }

	      DragDropContextContainer.prototype.getDecoratedComponentInstance = function getDecoratedComponentInstance() {
	        return this.refs.child;
	      };

	      DragDropContextContainer.prototype.getManager = function getManager() {
	        return childContext.dragDropManager;
	      };

	      DragDropContextContainer.prototype.getChildContext = function getChildContext() {
	        return childContext;
	      };

	      DragDropContextContainer.prototype.render = function render() {
	        return _react2['default'].createElement(DecoratedComponent, _extends({}, this.props, {
	          ref: 'child' }));
	      };

	      _createClass(DragDropContextContainer, null, [{
	        key: 'DecoratedComponent',
	        value: DecoratedComponent,
	        enumerable: true
	      }, {
	        key: 'displayName',
	        value: 'DragDropContext(' + displayName + ')',
	        enumerable: true
	      }, {
	        key: 'childContextTypes',
	        value: {
	          dragDropManager: _react.PropTypes.object.isRequired
	        },
	        enumerable: true
	      }]);

	      return DragDropContextContainer;
	    })(_react.Component);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slice = Array.prototype.slice;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports['default'] = DragLayer;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utilsShallowEqual = __webpack_require__(47);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsShallowEqualScalar = __webpack_require__(91);

	var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);

	var _lodashIsPlainObject = __webpack_require__(5);

	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _utilsCheckDecoratorArguments = __webpack_require__(27);

	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);

	function DragLayer(collect) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DragLayer', 'collect[, options]'].concat(_slice.call(arguments)));
	  _invariant2['default'](typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer ' + 'to be a function that collects props to inject into the component. ', 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html', collect);
	  _invariant2['default'](_lodashIsPlainObject2['default'](options), 'Expected "options" provided as the second argument to DragLayer to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html', options);

	  return function decorateLayer(DecoratedComponent) {
	    var _options$arePropsEqual = options.arePropsEqual;
	    var arePropsEqual = _options$arePropsEqual === undefined ? _utilsShallowEqualScalar2['default'] : _options$arePropsEqual;

	    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

	    return (function (_Component) {
	      _inherits(DragLayerContainer, _Component);

	      DragLayerContainer.prototype.getDecoratedComponentInstance = function getDecoratedComponentInstance() {
	        return this.refs.child;
	      };

	      DragLayerContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	        return !arePropsEqual(nextProps, this.props) || !_utilsShallowEqual2['default'](nextState, this.state);
	      };

	      _createClass(DragLayerContainer, null, [{
	        key: 'DecoratedComponent',
	        value: DecoratedComponent,
	        enumerable: true
	      }, {
	        key: 'displayName',
	        value: 'DragLayer(' + displayName + ')',
	        enumerable: true
	      }, {
	        key: 'contextTypes',
	        value: {
	          dragDropManager: _react.PropTypes.object.isRequired
	        },
	        enumerable: true
	      }]);

	      function DragLayerContainer(props, context) {
	        _classCallCheck(this, DragLayerContainer);

	        _Component.call(this, props);
	        this.handleChange = this.handleChange.bind(this);

	        this.manager = context.dragDropManager;
	        _invariant2['default'](typeof this.manager === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

	        this.state = this.getCurrentState();
	      }

	      DragLayerContainer.prototype.componentDidMount = function componentDidMount() {
	        this.isCurrentlyMounted = true;

	        var monitor = this.manager.getMonitor();
	        this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);
	        this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);

	        this.handleChange();
	      };

	      DragLayerContainer.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.isCurrentlyMounted = false;

	        this.unsubscribeFromOffsetChange();
	        this.unsubscribeFromStateChange();
	      };

	      DragLayerContainer.prototype.handleChange = function handleChange() {
	        if (!this.isCurrentlyMounted) {
	          return;
	        }

	        var nextState = this.getCurrentState();
	        if (!_utilsShallowEqual2['default'](nextState, this.state)) {
	          this.setState(nextState);
	        }
	      };

	      DragLayerContainer.prototype.getCurrentState = function getCurrentState() {
	        var monitor = this.manager.getMonitor();
	        return collect(monitor);
	      };

	      DragLayerContainer.prototype.render = function render() {
	        return _react2['default'].createElement(DecoratedComponent, _extends({}, this.props, this.state, {
	          ref: 'child' }));
	      };

	      return DragLayerContainer;
	    })(_react.Component);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports['default'] = DragSource;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashIsPlainObject = __webpack_require__(5);

	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);

	var _utilsCheckDecoratorArguments = __webpack_require__(27);

	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);

	var _decorateHandler = __webpack_require__(89);

	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

	var _registerSource = __webpack_require__(279);

	var _registerSource2 = _interopRequireDefault(_registerSource);

	var _createSourceFactory = __webpack_require__(274);

	var _createSourceFactory2 = _interopRequireDefault(_createSourceFactory);

	var _createSourceMonitor = __webpack_require__(275);

	var _createSourceMonitor2 = _interopRequireDefault(_createSourceMonitor);

	var _createSourceConnector = __webpack_require__(273);

	var _createSourceConnector2 = _interopRequireDefault(_createSourceConnector);

	var _utilsIsValidType = __webpack_require__(90);

	var _utilsIsValidType2 = _interopRequireDefault(_utilsIsValidType);

	function DragSource(type, spec, collect) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DragSource', 'type, spec, collect[, options]'].concat(_slice.call(arguments)));
	  var getType = type;
	  if (typeof type !== 'function') {
	    _invariant2['default'](_utilsIsValidType2['default'](type), 'Expected "type" provided as the first argument to DragSource to be ' + 'a string, or a function that returns a string given the current props. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', type);
	    getType = function () {
	      return type;
	    };
	  }
	  _invariant2['default'](_lodashIsPlainObject2['default'](spec), 'Expected "spec" provided as the second argument to DragSource to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', spec);
	  var createSource = _createSourceFactory2['default'](spec);
	  _invariant2['default'](typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', collect);
	  _invariant2['default'](_lodashIsPlainObject2['default'](options), 'Expected "options" provided as the fourth argument to DragSource to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', collect);

	  return function decorateSource(DecoratedComponent) {
	    return _decorateHandler2['default']({
	      connectBackend: function connectBackend(backend, sourceId) {
	        return backend.connectDragSource(sourceId);
	      },
	      containerDisplayName: 'DragSource',
	      createHandler: createSource,
	      registerHandler: _registerSource2['default'],
	      createMonitor: _createSourceMonitor2['default'],
	      createConnector: _createSourceConnector2['default'],
	      DecoratedComponent: DecoratedComponent,
	      getType: getType,
	      collect: collect,
	      options: options
	    });
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports['default'] = DropTarget;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashIsPlainObject = __webpack_require__(5);

	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);

	var _utilsCheckDecoratorArguments = __webpack_require__(27);

	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);

	var _decorateHandler = __webpack_require__(89);

	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

	var _registerTarget = __webpack_require__(280);

	var _registerTarget2 = _interopRequireDefault(_registerTarget);

	var _createTargetFactory = __webpack_require__(277);

	var _createTargetFactory2 = _interopRequireDefault(_createTargetFactory);

	var _createTargetMonitor = __webpack_require__(278);

	var _createTargetMonitor2 = _interopRequireDefault(_createTargetMonitor);

	var _createTargetConnector = __webpack_require__(276);

	var _createTargetConnector2 = _interopRequireDefault(_createTargetConnector);

	var _utilsIsValidType = __webpack_require__(90);

	var _utilsIsValidType2 = _interopRequireDefault(_utilsIsValidType);

	function DropTarget(type, spec, collect) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DropTarget', 'type, spec, collect[, options]'].concat(_slice.call(arguments)));
	  var getType = type;
	  if (typeof type !== 'function') {
	    _invariant2['default'](_utilsIsValidType2['default'](type, true), 'Expected "type" provided as the first argument to DropTarget to be ' + 'a string, an array of strings, or a function that returns either given ' + 'the current props. Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', type);
	    getType = function () {
	      return type;
	    };
	  }
	  _invariant2['default'](_lodashIsPlainObject2['default'](spec), 'Expected "spec" provided as the second argument to DropTarget to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', spec);
	  var createTarget = _createTargetFactory2['default'](spec);
	  _invariant2['default'](typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', collect);
	  _invariant2['default'](_lodashIsPlainObject2['default'](options), 'Expected "options" provided as the fourth argument to DropTarget to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', collect);

	  return function decorateTarget(DecoratedComponent) {
	    return _decorateHandler2['default']({
	      connectBackend: function connectBackend(backend, targetId) {
	        return backend.connectDropTarget(targetId);
	      },
	      containerDisplayName: 'DropTarget',
	      createHandler: createTarget,
	      registerHandler: _registerTarget2['default'],
	      createMonitor: _createTargetMonitor2['default'],
	      createConnector: _createTargetConnector2['default'],
	      DecoratedComponent: DecoratedComponent,
	      getType: getType,
	      collect: collect,
	      options: options
	    });
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createSourceConnector;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _wrapConnectorHooks = __webpack_require__(92);

	var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

	var _areOptionsEqual = __webpack_require__(88);

	var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);

	function createSourceConnector(backend) {
	  var currentHandlerId = undefined;

	  var currentDragSourceNode = undefined;
	  var currentDragSourceOptions = undefined;
	  var disconnectCurrentDragSource = undefined;

	  var currentDragPreviewNode = undefined;
	  var currentDragPreviewOptions = undefined;
	  var disconnectCurrentDragPreview = undefined;

	  function reconnectDragSource() {
	    if (disconnectCurrentDragSource) {
	      disconnectCurrentDragSource();
	      disconnectCurrentDragSource = null;
	    }

	    if (currentHandlerId && currentDragSourceNode) {
	      disconnectCurrentDragSource = backend.connectDragSource(currentHandlerId, currentDragSourceNode, currentDragSourceOptions);
	    }
	  }

	  function reconnectDragPreview() {
	    if (disconnectCurrentDragPreview) {
	      disconnectCurrentDragPreview();
	      disconnectCurrentDragPreview = null;
	    }

	    if (currentHandlerId && currentDragPreviewNode) {
	      disconnectCurrentDragPreview = backend.connectDragPreview(currentHandlerId, currentDragPreviewNode, currentDragPreviewOptions);
	    }
	  }

	  function receiveHandlerId(handlerId) {
	    if (handlerId === currentHandlerId) {
	      return;
	    }

	    currentHandlerId = handlerId;
	    reconnectDragSource();
	    reconnectDragPreview();
	  }

	  var hooks = _wrapConnectorHooks2['default']({
	    dragSource: function connectDragSource(node, options) {
	      if (node === currentDragSourceNode && _areOptionsEqual2['default'](options, currentDragSourceOptions)) {
	        return;
	      }

	      currentDragSourceNode = node;
	      currentDragSourceOptions = options;

	      reconnectDragSource();
	    },

	    dragPreview: function connectDragPreview(node, options) {
	      if (node === currentDragPreviewNode && _areOptionsEqual2['default'](options, currentDragPreviewOptions)) {
	        return;
	      }

	      currentDragPreviewNode = node;
	      currentDragPreviewOptions = options;

	      reconnectDragPreview();
	    }
	  });

	  return {
	    receiveHandlerId: receiveHandlerId,
	    hooks: hooks
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createSourceFactory;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashIsPlainObject = __webpack_require__(5);

	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);

	var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'canDrag', 'isDragging', 'endDrag'];
	var REQUIRED_SPEC_METHODS = ['beginDrag'];

	function createSourceFactory(spec) {
	  Object.keys(spec).forEach(function (key) {
	    _invariant2['default'](ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', ALLOWED_SPEC_METHODS.join(', '), key);
	    _invariant2['default'](typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
	  });
	  REQUIRED_SPEC_METHODS.forEach(function (key) {
	    _invariant2['default'](typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
	  });

	  var Source = (function () {
	    function Source(monitor) {
	      _classCallCheck(this, Source);

	      this.monitor = monitor;
	      this.props = null;
	      this.component = null;
	    }

	    Source.prototype.receiveProps = function receiveProps(props) {
	      this.props = props;
	    };

	    Source.prototype.receiveComponent = function receiveComponent(component) {
	      this.component = component;
	    };

	    Source.prototype.canDrag = function canDrag() {
	      if (!spec.canDrag) {
	        return true;
	      }

	      return spec.canDrag(this.props, this.monitor);
	    };

	    Source.prototype.isDragging = function isDragging(globalMonitor, sourceId) {
	      if (!spec.isDragging) {
	        return sourceId === globalMonitor.getSourceId();
	      }

	      return spec.isDragging(this.props, this.monitor);
	    };

	    Source.prototype.beginDrag = function beginDrag() {
	      var item = spec.beginDrag(this.props, this.monitor, this.component);
	      if (false) {
	        _invariant2['default'](_lodashIsPlainObject2['default'](item), 'beginDrag() must return a plain object that represents the dragged item. ' + 'Instead received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', item);
	      }
	      return item;
	    };

	    Source.prototype.endDrag = function endDrag() {
	      if (!spec.endDrag) {
	        return;
	      }

	      spec.endDrag(this.props, this.monitor, this.component);
	    };

	    return Source;
	  })();

	  return function createSource(monitor) {
	    return new Source(monitor);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createSourceMonitor;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var isCallingCanDrag = false;
	var isCallingIsDragging = false;

	var SourceMonitor = (function () {
	  function SourceMonitor(manager) {
	    _classCallCheck(this, SourceMonitor);

	    this.internalMonitor = manager.getMonitor();
	  }

	  SourceMonitor.prototype.receiveHandlerId = function receiveHandlerId(sourceId) {
	    this.sourceId = sourceId;
	  };

	  SourceMonitor.prototype.canDrag = function canDrag() {
	    _invariant2['default'](!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html');

	    try {
	      isCallingCanDrag = true;
	      return this.internalMonitor.canDragSource(this.sourceId);
	    } finally {
	      isCallingCanDrag = false;
	    }
	  };

	  SourceMonitor.prototype.isDragging = function isDragging() {
	    _invariant2['default'](!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html');

	    try {
	      isCallingIsDragging = true;
	      return this.internalMonitor.isDraggingSource(this.sourceId);
	    } finally {
	      isCallingIsDragging = false;
	    }
	  };

	  SourceMonitor.prototype.getItemType = function getItemType() {
	    return this.internalMonitor.getItemType();
	  };

	  SourceMonitor.prototype.getItem = function getItem() {
	    return this.internalMonitor.getItem();
	  };

	  SourceMonitor.prototype.getDropResult = function getDropResult() {
	    return this.internalMonitor.getDropResult();
	  };

	  SourceMonitor.prototype.didDrop = function didDrop() {
	    return this.internalMonitor.didDrop();
	  };

	  SourceMonitor.prototype.getInitialClientOffset = function getInitialClientOffset() {
	    return this.internalMonitor.getInitialClientOffset();
	  };

	  SourceMonitor.prototype.getInitialSourceClientOffset = function getInitialSourceClientOffset() {
	    return this.internalMonitor.getInitialSourceClientOffset();
	  };

	  SourceMonitor.prototype.getSourceClientOffset = function getSourceClientOffset() {
	    return this.internalMonitor.getSourceClientOffset();
	  };

	  SourceMonitor.prototype.getClientOffset = function getClientOffset() {
	    return this.internalMonitor.getClientOffset();
	  };

	  SourceMonitor.prototype.getDifferenceFromInitialOffset = function getDifferenceFromInitialOffset() {
	    return this.internalMonitor.getDifferenceFromInitialOffset();
	  };

	  return SourceMonitor;
	})();

	function createSourceMonitor(manager) {
	  return new SourceMonitor(manager);
	}

	module.exports = exports['default'];

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createTargetConnector;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _wrapConnectorHooks = __webpack_require__(92);

	var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

	var _areOptionsEqual = __webpack_require__(88);

	var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);

	function createTargetConnector(backend) {
	  var currentHandlerId = undefined;

	  var currentDropTargetNode = undefined;
	  var currentDropTargetOptions = undefined;
	  var disconnectCurrentDropTarget = undefined;

	  function reconnectDropTarget() {
	    if (disconnectCurrentDropTarget) {
	      disconnectCurrentDropTarget();
	      disconnectCurrentDropTarget = null;
	    }

	    if (currentHandlerId && currentDropTargetNode) {
	      disconnectCurrentDropTarget = backend.connectDropTarget(currentHandlerId, currentDropTargetNode, currentDropTargetOptions);
	    }
	  }

	  function receiveHandlerId(handlerId) {
	    if (handlerId === currentHandlerId) {
	      return;
	    }

	    currentHandlerId = handlerId;
	    reconnectDropTarget();
	  }

	  var hooks = _wrapConnectorHooks2['default']({
	    dropTarget: function connectDropTarget(node, options) {
	      if (node === currentDropTargetNode && _areOptionsEqual2['default'](options, currentDropTargetOptions)) {
	        return;
	      }

	      currentDropTargetNode = node;
	      currentDropTargetOptions = options;

	      reconnectDropTarget();
	    }
	  });

	  return {
	    receiveHandlerId: receiveHandlerId,
	    hooks: hooks
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createTargetFactory;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashIsPlainObject = __webpack_require__(5);

	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);

	var ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];

	function createTargetFactory(spec) {
	  Object.keys(spec).forEach(function (key) {
	    _invariant2['default'](ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', ALLOWED_SPEC_METHODS.join(', '), key);
	    _invariant2['default'](typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', key, key, spec[key]);
	  });

	  var Target = (function () {
	    function Target(monitor) {
	      _classCallCheck(this, Target);

	      this.monitor = monitor;
	      this.props = null;
	      this.component = null;
	    }

	    Target.prototype.receiveProps = function receiveProps(props) {
	      this.props = props;
	    };

	    Target.prototype.receiveMonitor = function receiveMonitor(monitor) {
	      this.monitor = monitor;
	    };

	    Target.prototype.receiveComponent = function receiveComponent(component) {
	      this.component = component;
	    };

	    Target.prototype.canDrop = function canDrop() {
	      if (!spec.canDrop) {
	        return true;
	      }

	      return spec.canDrop(this.props, this.monitor);
	    };

	    Target.prototype.hover = function hover() {
	      if (!spec.hover) {
	        return;
	      }

	      spec.hover(this.props, this.monitor, this.component);
	    };

	    Target.prototype.drop = function drop() {
	      if (!spec.drop) {
	        return;
	      }

	      var dropResult = spec.drop(this.props, this.monitor, this.component);
	      if (false) {
	        _invariant2['default'](typeof dropResult === 'undefined' || _lodashIsPlainObject2['default'](dropResult), 'drop() must either return undefined, or an object that represents the drop result. ' + 'Instead received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', dropResult);
	      }
	      return dropResult;
	    };

	    return Target;
	  })();

	  return function createTarget(monitor) {
	    return new Target(monitor);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createTargetMonitor;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var isCallingCanDrop = false;

	var TargetMonitor = (function () {
	  function TargetMonitor(manager) {
	    _classCallCheck(this, TargetMonitor);

	    this.internalMonitor = manager.getMonitor();
	  }

	  TargetMonitor.prototype.receiveHandlerId = function receiveHandlerId(targetId) {
	    this.targetId = targetId;
	  };

	  TargetMonitor.prototype.canDrop = function canDrop() {
	    _invariant2['default'](!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target-monitor.html');

	    try {
	      isCallingCanDrop = true;
	      return this.internalMonitor.canDropOnTarget(this.targetId);
	    } finally {
	      isCallingCanDrop = false;
	    }
	  };

	  TargetMonitor.prototype.isOver = function isOver(options) {
	    return this.internalMonitor.isOverTarget(this.targetId, options);
	  };

	  TargetMonitor.prototype.getItemType = function getItemType() {
	    return this.internalMonitor.getItemType();
	  };

	  TargetMonitor.prototype.getItem = function getItem() {
	    return this.internalMonitor.getItem();
	  };

	  TargetMonitor.prototype.getDropResult = function getDropResult() {
	    return this.internalMonitor.getDropResult();
	  };

	  TargetMonitor.prototype.didDrop = function didDrop() {
	    return this.internalMonitor.didDrop();
	  };

	  TargetMonitor.prototype.getInitialClientOffset = function getInitialClientOffset() {
	    return this.internalMonitor.getInitialClientOffset();
	  };

	  TargetMonitor.prototype.getInitialSourceClientOffset = function getInitialSourceClientOffset() {
	    return this.internalMonitor.getInitialSourceClientOffset();
	  };

	  TargetMonitor.prototype.getSourceClientOffset = function getSourceClientOffset() {
	    return this.internalMonitor.getSourceClientOffset();
	  };

	  TargetMonitor.prototype.getClientOffset = function getClientOffset() {
	    return this.internalMonitor.getClientOffset();
	  };

	  TargetMonitor.prototype.getDifferenceFromInitialOffset = function getDifferenceFromInitialOffset() {
	    return this.internalMonitor.getDifferenceFromInitialOffset();
	  };

	  return TargetMonitor;
	})();

	function createTargetMonitor(manager) {
	  return new TargetMonitor(manager);
	}

	module.exports = exports['default'];

/***/ },
/* 279 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = registerSource;

	function registerSource(type, source, manager) {
	  var registry = manager.getRegistry();
	  var sourceId = registry.addSource(type, source);

	  function unregisterSource() {
	    registry.removeSource(sourceId);
	  }

	  return {
	    handlerId: sourceId,
	    unregister: unregisterSource
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 280 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = registerTarget;

	function registerTarget(type, target, manager) {
	  var registry = manager.getRegistry();
	  var targetId = registry.addTarget(type, target);

	  function unregisterTarget() {
	    registry.removeTarget(targetId);
	  }

	  return {
	    handlerId: targetId,
	    unregister: unregisterTarget
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = cloneWithRef;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	function cloneWithRef(element, newRef) {
	  var previousRef = element.ref;
	  _invariant2['default'](typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');

	  if (!previousRef) {
	    // When there is no ref on the element, use the new ref directly
	    return _react.cloneElement(element, {
	      ref: newRef
	    });
	  }

	  return _react.cloneElement(element, {
	    ref: function ref(node) {
	      newRef(node);

	      if (previousRef) {
	        previousRef(node);
	      }
	    }
	  });
	}

	module.exports = exports['default'];

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*eslint-disable react/prop-types */


	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(298);

	var _warning2 = _interopRequireDefault(_warning);

	var _mountable = __webpack_require__(96);

	var _mountable2 = _interopRequireDefault(_mountable);

	var _elementType = __webpack_require__(289);

	var _elementType2 = _interopRequireDefault(_elementType);

	var _Portal = __webpack_require__(284);

	var _Portal2 = _interopRequireDefault(_Portal);

	var _ModalManager = __webpack_require__(283);

	var _ModalManager2 = _interopRequireDefault(_ModalManager);

	var _ownerDocument = __webpack_require__(94);

	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

	var _addEventListener = __webpack_require__(285);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	var _addFocusListener = __webpack_require__(286);

	var _addFocusListener2 = _interopRequireDefault(_addFocusListener);

	var _inDOM = __webpack_require__(11);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	var _activeElement = __webpack_require__(144);

	var _activeElement2 = _interopRequireDefault(_activeElement);

	var _contains = __webpack_require__(150);

	var _contains2 = _interopRequireDefault(_contains);

	var _getContainer = __webpack_require__(93);

	var _getContainer2 = _interopRequireDefault(_getContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var modalManager = new _ModalManager2.default();

	/**
	 * Love them or hate them, `<Modal/>` provides a solid foundation for creating dialogs, lightboxes, or whatever else.
	 * The Modal component renders its `children` node in front of a backdrop component.
	 *
	 * The Modal offers a few helpful features over using just a `<Portal/>` component and some styles:
	 *
	 * - Manages dialog stacking when one-at-a-time just isn't enough.
	 * - Creates a backdrop, for disabling interaction below the modal.
	 * - It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
	 * - It disables scrolling of the page content while open.
	 * - Adds the appropriate ARIA roles are automatically.
	 * - Easily pluggable animations via a `<Transition/>` component.
	 *
	 * Note that, in the same way the backdrop element prevents users from clicking or interacting
	 * with the page content underneath the Modal, Screen readers also need to be signaled to not to
	 * interact with page content while the Modal is open. To do this, we use a common technique of applying
	 * the `aria-hidden='true'` attribute to the non-Modal elements in the Modal `container`. This means that for
	 * a Modal to be truly modal, it should have a `container` that is _outside_ your app's
	 * React hierarchy (such as the default: document.body).
	 */
	var Modal = _react2.default.createClass({
	  displayName: 'Modal',


	  propTypes: _extends({}, _Portal2.default.propTypes, {

	    /**
	     * Set the visibility of the Modal
	     */
	    show: _react2.default.PropTypes.bool,

	    /**
	     * A Node, Component instance, or function that returns either. The Modal is appended to it's container element.
	     *
	     * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
	     * page content can be placed behind a virtual backdrop as well as a visual one.
	     */
	    container: _react2.default.PropTypes.oneOfType([_mountable2.default, _react2.default.PropTypes.func]),

	    /**
	     * A callback fired when the Modal is opening.
	     */
	    onShow: _react2.default.PropTypes.func,

	    /**
	     * A callback fired when either the backdrop is clicked, or the escape key is pressed.
	     *
	     * The `onHide` callback only signals intent from the Modal,
	     * you must actually set the `show` prop to `false` for the Modal to close.
	     */
	    onHide: _react2.default.PropTypes.func,

	    /**
	     * Include a backdrop component.
	     */
	    backdrop: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.oneOf(['static'])]),

	    /**
	     * A callback fired when the escape key, if specified in `keyboard`, is pressed.
	     */
	    onEscapeKeyUp: _react2.default.PropTypes.func,

	    /**
	     * A callback fired when the backdrop, if specified, is clicked.
	     */
	    onBackdropClick: _react2.default.PropTypes.func,

	    /**
	     * A style object for the backdrop component.
	     */
	    backdropStyle: _react2.default.PropTypes.object,

	    /**
	     * A css class or classes for the backdrop component.
	     */
	    backdropClassName: _react2.default.PropTypes.string,

	    /**
	     * A css class or set of classes applied to the modal container when the modal is open,
	     * and removed when it is closed.
	     */
	    containerClassName: _react2.default.PropTypes.string,

	    /**
	     * Close the modal when escape key is pressed
	     */
	    keyboard: _react2.default.PropTypes.bool,

	    /**
	     * A `<Transition/>` component to use for the dialog and backdrop components.
	     */
	    transition: _elementType2.default,

	    /**
	     * The `timeout` of the dialog transition if specified. This number is used to ensure that
	     * transition callbacks are always fired, even if browser transition events are canceled.
	     *
	     * See the Transition `timeout` prop for more infomation.
	     */
	    dialogTransitionTimeout: _react2.default.PropTypes.number,

	    /**
	     * The `timeout` of the backdrop transition if specified. This number is used to
	     * ensure that transition callbacks are always fired, even if browser transition events are canceled.
	     *
	     * See the Transition `timeout` prop for more infomation.
	     */
	    backdropTransitionTimeout: _react2.default.PropTypes.number,

	    /**
	     * When `true` The modal will automatically shift focus to itself when it opens, and
	     * replace it to the last focused element when it closes. This also
	     * works correctly with any Modal children that have the `autoFocus` prop.
	     *
	     * Generally this should never be set to `false` as it makes the Modal less
	     * accessible to assistive technologies, like screen readers.
	     */
	    autoFocus: _react2.default.PropTypes.bool,

	    /**
	     * When `true` The modal will prevent focus from leaving the Modal while open.
	     *
	     * Generally this should never be set to `false` as it makes the Modal less
	     * accessible to assistive technologies, like screen readers.
	     */
	    enforceFocus: _react2.default.PropTypes.bool,

	    /**
	     * Callback fired before the Modal transitions in
	     */
	    onEnter: _react2.default.PropTypes.func,

	    /**
	     * Callback fired as the Modal begins to transition in
	     */
	    onEntering: _react2.default.PropTypes.func,

	    /**
	     * Callback fired after the Modal finishes transitioning in
	     */
	    onEntered: _react2.default.PropTypes.func,

	    /**
	     * Callback fired right before the Modal transitions out
	     */
	    onExit: _react2.default.PropTypes.func,

	    /**
	     * Callback fired as the Modal begins to transition out
	     */
	    onExiting: _react2.default.PropTypes.func,

	    /**
	     * Callback fired after the Modal finishes transitioning out
	     */
	    onExited: _react2.default.PropTypes.func

	  }),

	  getDefaultProps: function getDefaultProps() {
	    var noop = function noop() {};

	    return {
	      show: false,
	      backdrop: true,
	      keyboard: true,
	      autoFocus: true,
	      enforceFocus: true,
	      onHide: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    return { exited: !this.props.show };
	  },
	  render: function render() {
	    var _props = this.props;
	    var show = _props.show;
	    var container = _props.container;
	    var children = _props.children;
	    var Transition = _props.transition;
	    var backdrop = _props.backdrop;
	    var dialogTransitionTimeout = _props.dialogTransitionTimeout;
	    var className = _props.className;
	    var style = _props.style;
	    var onExit = _props.onExit;
	    var onExiting = _props.onExiting;
	    var onEnter = _props.onEnter;
	    var onEntering = _props.onEntering;
	    var onEntered = _props.onEntered;


	    var dialog = _react2.default.Children.only(children);

	    var mountModal = show || Transition && !this.state.exited;
	    if (!mountModal) {
	      return null;
	    }

	    var _dialog$props = dialog.props;
	    var role = _dialog$props.role;
	    var tabIndex = _dialog$props.tabIndex;


	    if (role === undefined || tabIndex === undefined) {
	      dialog = (0, _react.cloneElement)(dialog, {
	        role: role === undefined ? 'document' : role,
	        tabIndex: tabIndex == null ? '-1' : tabIndex
	      });
	    }

	    if (Transition) {
	      dialog = _react2.default.createElement(
	        Transition,
	        {
	          transitionAppear: true,
	          unmountOnExit: true,
	          'in': show,
	          timeout: dialogTransitionTimeout,
	          onExit: onExit,
	          onExiting: onExiting,
	          onExited: this.handleHidden,
	          onEnter: onEnter,
	          onEntering: onEntering,
	          onEntered: onEntered
	        },
	        dialog
	      );
	    }

	    return _react2.default.createElement(
	      _Portal2.default,
	      {
	        ref: this.setMountNode,
	        container: container
	      },
	      _react2.default.createElement(
	        'div',
	        {
	          ref: 'modal',
	          role: role || 'dialog',
	          style: style,
	          className: className
	        },
	        backdrop && this.renderBackdrop(),
	        dialog
	      )
	    );
	  },
	  renderBackdrop: function renderBackdrop() {
	    var _props2 = this.props;
	    var Transition = _props2.transition;
	    var backdropTransitionTimeout = _props2.backdropTransitionTimeout;


	    var backdrop = _react2.default.createElement('div', { ref: 'backdrop',
	      style: this.props.backdropStyle,
	      className: this.props.backdropClassName,
	      onClick: this.handleBackdropClick
	    });

	    if (Transition) {
	      backdrop = _react2.default.createElement(
	        Transition,
	        { transitionAppear: true,
	          'in': this.props.show,
	          timeout: backdropTransitionTimeout
	        },
	        backdrop
	      );
	    }

	    return backdrop;
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.show) {
	      this.setState({ exited: false });
	    } else if (!nextProps.transition) {
	      // Otherwise let handleHidden take care of marking exited.
	      this.setState({ exited: true });
	    }
	  },
	  componentWillUpdate: function componentWillUpdate(nextProps) {
	    if (!this.props.show && nextProps.show) {
	      this.checkForFocus();
	    }
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.props.show) {
	      this.onShow();
	    }
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var transition = this.props.transition;


	    if (prevProps.show && !this.props.show && !transition) {
	      // Otherwise handleHidden will call this.
	      this.onHide();
	    } else if (!prevProps.show && this.props.show) {
	      this.onShow();
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    var _props3 = this.props;
	    var show = _props3.show;
	    var transition = _props3.transition;


	    if (show || transition && !this.state.exited) {
	      this.onHide();
	    }
	  },
	  onShow: function onShow() {
	    var doc = (0, _ownerDocument2.default)(this);
	    var container = (0, _getContainer2.default)(this.props.container, doc.body);

	    modalManager.add(this, container, this.props.containerClassName);

	    this._onDocumentKeyupListener = (0, _addEventListener2.default)(doc, 'keyup', this.handleDocumentKeyUp);

	    this._onFocusinListener = (0, _addFocusListener2.default)(this.enforceFocus);

	    this.focus();

	    if (this.props.onShow) {
	      this.props.onShow();
	    }
	  },
	  onHide: function onHide() {
	    modalManager.remove(this);

	    this._onDocumentKeyupListener.remove();

	    this._onFocusinListener.remove();

	    this.restoreLastFocus();
	  },
	  setMountNode: function setMountNode(ref) {
	    this.mountNode = ref ? ref.getMountNode() : ref;
	  },
	  handleHidden: function handleHidden() {
	    this.setState({ exited: true });
	    this.onHide();

	    if (this.props.onExited) {
	      var _props4;

	      (_props4 = this.props).onExited.apply(_props4, arguments);
	    }
	  },
	  handleBackdropClick: function handleBackdropClick(e) {
	    if (e.target !== e.currentTarget) {
	      return;
	    }

	    if (this.props.onBackdropClick) {
	      this.props.onBackdropClick(e);
	    }

	    if (this.props.backdrop === true) {
	      this.props.onHide();
	    }
	  },
	  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
	    if (this.props.keyboard && e.keyCode === 27 && this.isTopModal()) {
	      if (this.props.onEscapeKeyUp) {
	        this.props.onEscapeKeyUp(e);
	      }
	      this.props.onHide();
	    }
	  },
	  checkForFocus: function checkForFocus() {
	    if (_inDOM2.default) {
	      this.lastFocus = (0, _activeElement2.default)();
	    }
	  },
	  focus: function focus() {
	    var autoFocus = this.props.autoFocus;
	    var modalContent = this.getDialogElement();
	    var current = (0, _activeElement2.default)((0, _ownerDocument2.default)(this));
	    var focusInModal = current && (0, _contains2.default)(modalContent, current);

	    if (modalContent && autoFocus && !focusInModal) {
	      this.lastFocus = current;

	      if (!modalContent.hasAttribute('tabIndex')) {
	        modalContent.setAttribute('tabIndex', -1);
	        (0, _warning2.default)(false, 'The modal content node does not accept focus. ' + 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".');
	      }

	      modalContent.focus();
	    }
	  },
	  restoreLastFocus: function restoreLastFocus() {
	    // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
	    if (this.lastFocus && this.lastFocus.focus) {
	      this.lastFocus.focus();
	      this.lastFocus = null;
	    }
	  },
	  enforceFocus: function enforceFocus() {
	    var enforceFocus = this.props.enforceFocus;


	    if (!enforceFocus || !this.isMounted() || !this.isTopModal()) {
	      return;
	    }

	    var active = (0, _activeElement2.default)((0, _ownerDocument2.default)(this));
	    var modal = this.getDialogElement();

	    if (modal && modal !== active && !(0, _contains2.default)(modal, active)) {
	      modal.focus();
	    }
	  },


	  //instead of a ref, which might conflict with one the parent applied.
	  getDialogElement: function getDialogElement() {
	    var node = this.refs.modal;
	    return node && node.lastChild;
	  },
	  isTopModal: function isTopModal() {
	    return modalManager.isTopModal(this);
	  }
	});

	Modal.manager = modalManager;

	exports.default = Modal;
	module.exports = exports['default'];

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _style = __webpack_require__(153);

	var _style2 = _interopRequireDefault(_style);

	var _class = __webpack_require__(146);

	var _class2 = _interopRequireDefault(_class);

	var _scrollbarSize = __webpack_require__(158);

	var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

	var _isOverflowing = __webpack_require__(287);

	var _isOverflowing2 = _interopRequireDefault(_isOverflowing);

	var _manageAriaHidden = __webpack_require__(288);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function findIndexOf(arr, cb) {
	  var idx = -1;
	  arr.some(function (d, i) {
	    if (cb(d, i)) {
	      idx = i;
	      return true;
	    }
	  });
	  return idx;
	}

	function findContainer(data, modal) {
	  return findIndexOf(data, function (d) {
	    return d.modals.indexOf(modal) !== -1;
	  });
	}

	/**
	 * Proper state managment for containers and the modals in those containers.
	 *
	 * @internal Used by the Modal to ensure proper styling of containers.
	 */

	var ModalManager = function () {
	  function ModalManager() {
	    var hideSiblingNodes = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	    _classCallCheck(this, ModalManager);

	    this.hideSiblingNodes = hideSiblingNodes;
	    this.modals = [];
	    this.containers = [];
	    this.data = [];
	  }

	  _createClass(ModalManager, [{
	    key: 'add',
	    value: function add(modal, container, className) {
	      var modalIdx = this.modals.indexOf(modal);
	      var containerIdx = this.containers.indexOf(container);

	      if (modalIdx !== -1) {
	        return modalIdx;
	      }

	      modalIdx = this.modals.length;
	      this.modals.push(modal);

	      if (this.hideSiblingNodes) {
	        (0, _manageAriaHidden.hideSiblings)(container, modal.mountNode);
	      }

	      if (containerIdx !== -1) {
	        this.data[containerIdx].modals.push(modal);
	        return modalIdx;
	      }

	      var data = {
	        modals: [modal],
	        //right now only the first modal of a container will have its classes applied
	        classes: className ? className.split(/\s+/) : [],
	        //we are only interested in the actual `style` here becasue we will override it
	        style: {
	          overflow: container.style.overflow,
	          paddingRight: container.style.paddingRight
	        }
	      };

	      var style = { overflow: 'hidden' };

	      data.overflowing = (0, _isOverflowing2.default)(container);

	      if (data.overflowing) {
	        // use computed style, here to get the real padding
	        // to add our scrollbar width
	        style.paddingRight = parseInt((0, _style2.default)(container, 'paddingRight') || 0, 10) + (0, _scrollbarSize2.default)() + 'px';
	      }

	      (0, _style2.default)(container, style);

	      data.classes.forEach(_class2.default.addClass.bind(null, container));

	      this.containers.push(container);
	      this.data.push(data);

	      return modalIdx;
	    }
	  }, {
	    key: 'remove',
	    value: function remove(modal) {
	      var modalIdx = this.modals.indexOf(modal);

	      if (modalIdx === -1) {
	        return;
	      }

	      var containerIdx = findContainer(this.data, modal);
	      var data = this.data[containerIdx];
	      var container = this.containers[containerIdx];

	      data.modals.splice(data.modals.indexOf(modal), 1);

	      this.modals.splice(modalIdx, 1);

	      // if that was the last modal in a container,
	      // clean up the container stylinhg.
	      if (data.modals.length === 0) {
	        Object.keys(data.style).forEach(function (key) {
	          return container.style[key] = data.style[key];
	        });

	        data.classes.forEach(_class2.default.removeClass.bind(null, container));

	        if (this.hideSiblingNodes) {
	          (0, _manageAriaHidden.showSiblings)(container, modal.mountNode);
	        }
	        this.containers.splice(containerIdx, 1);
	        this.data.splice(containerIdx, 1);
	      } else if (this.hideSiblingNodes) {
	        //otherwise make sure the next top modal is visible to a SR
	        (0, _manageAriaHidden.ariaHidden)(false, data.modals[data.modals.length - 1].mountNode);
	      }
	    }
	  }, {
	    key: 'isTopModal',
	    value: function isTopModal(modal) {
	      return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
	    }
	  }]);

	  return ModalManager;
	}();

	exports.default = ModalManager;
	module.exports = exports['default'];

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _mountable = __webpack_require__(96);

	var _mountable2 = _interopRequireDefault(_mountable);

	var _ownerDocument = __webpack_require__(94);

	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

	var _getContainer = __webpack_require__(93);

	var _getContainer2 = _interopRequireDefault(_getContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
	 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
	 * The children of `<Portal/>` component will be appended to the `container` specified.
	 */
	var Portal = _react2.default.createClass({

	  displayName: 'Portal',

	  propTypes: {
	    /**
	     * A Node, Component instance, or function that returns either. The `container` will have the Portal children
	     * appended to it.
	     */
	    container: _react2.default.PropTypes.oneOfType([_mountable2.default, _react2.default.PropTypes.func])
	  },

	  componentDidMount: function componentDidMount() {
	    this._renderOverlay();
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this._renderOverlay();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this._overlayTarget && nextProps.container !== this.props.container) {
	      this._portalContainerNode.removeChild(this._overlayTarget);
	      this._portalContainerNode = (0, _getContainer2.default)(nextProps.container, (0, _ownerDocument2.default)(this).body);
	      this._portalContainerNode.appendChild(this._overlayTarget);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._unrenderOverlay();
	    this._unmountOverlayTarget();
	  },
	  _mountOverlayTarget: function _mountOverlayTarget() {
	    if (!this._overlayTarget) {
	      this._overlayTarget = document.createElement('div');
	      this._portalContainerNode = (0, _getContainer2.default)(this.props.container, (0, _ownerDocument2.default)(this).body);
	      this._portalContainerNode.appendChild(this._overlayTarget);
	    }
	  },
	  _unmountOverlayTarget: function _unmountOverlayTarget() {
	    if (this._overlayTarget) {
	      this._portalContainerNode.removeChild(this._overlayTarget);
	      this._overlayTarget = null;
	    }
	    this._portalContainerNode = null;
	  },
	  _renderOverlay: function _renderOverlay() {

	    var overlay = !this.props.children ? null : _react2.default.Children.only(this.props.children);

	    // Save reference for future access.
	    if (overlay !== null) {
	      this._mountOverlayTarget();
	      this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, overlay, this._overlayTarget);
	    } else {
	      // Unrender if the component is null for transitions to null
	      this._unrenderOverlay();
	      this._unmountOverlayTarget();
	    }
	  },
	  _unrenderOverlay: function _unrenderOverlay() {
	    if (this._overlayTarget) {
	      _reactDom2.default.unmountComponentAtNode(this._overlayTarget);
	      this._overlayInstance = null;
	    }
	  },
	  render: function render() {
	    return null;
	  },
	  getMountNode: function getMountNode() {
	    return this._overlayTarget;
	  },
	  getOverlayDOMNode: function getOverlayDOMNode() {
	    if (!this.isMounted()) {
	      throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
	    }

	    if (this._overlayInstance) {
	      if (this._overlayInstance.getWrappedDOMNode) {
	        return this._overlayInstance.getWrappedDOMNode();
	      } else {
	        return _reactDom2.default.findDOMNode(this._overlayInstance);
	      }
	    }

	    return null;
	  }
	});

	exports.default = Portal;
	module.exports = exports['default'];

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (node, event, handler) {
	  (0, _on2.default)(node, event, handler);
	  return {
	    remove: function remove() {
	      (0, _off2.default)(node, event, handler);
	    }
	  };
	};

	var _on = __webpack_require__(149);

	var _on2 = _interopRequireDefault(_on);

	var _off = __webpack_require__(148);

	var _off2 = _interopRequireDefault(_off);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ },
/* 286 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = addFocusListener;
	/**
	 * Firefox doesn't have a focusin event so using capture is easiest way to get bubbling
	 * IE8 can't do addEventListener, but does have onfocusin, so we use that in ie8
	 *
	 * We only allow one Listener at a time to avoid stack overflows
	 */
	function addFocusListener(handler) {
	  var useFocusin = !document.addEventListener;
	  var remove = void 0;

	  if (useFocusin) {
	    document.attachEvent('onfocusin', handler);
	    remove = function remove() {
	      return document.detachEvent('onfocusin', handler);
	    };
	  } else {
	    document.addEventListener('focus', handler, true);
	    remove = function remove() {
	      return document.removeEventListener('focus', handler, true);
	    };
	  }

	  return { remove: remove };
	}
	module.exports = exports['default'];

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isOverflowing;

	var _isWindow = __webpack_require__(151);

	var _isWindow2 = _interopRequireDefault(_isWindow);

	var _ownerDocument = __webpack_require__(30);

	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isBody(node) {
	  return node && node.tagName.toLowerCase() === 'body';
	}

	function bodyIsOverflowing(node) {
	  var doc = (0, _ownerDocument2.default)(node);
	  var win = (0, _isWindow2.default)(doc);
	  var fullWidth = win.innerWidth;

	  // Support: ie8, no innerWidth
	  if (!fullWidth) {
	    var documentElementRect = doc.documentElement.getBoundingClientRect();
	    fullWidth = documentElementRect.right - Math.abs(documentElementRect.left);
	  }

	  return doc.body.clientWidth < fullWidth;
	}

	function isOverflowing(container) {
	  var win = (0, _isWindow2.default)(container);

	  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
	}
	module.exports = exports['default'];

/***/ },
/* 288 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ariaHidden = ariaHidden;
	exports.hideSiblings = hideSiblings;
	exports.showSiblings = showSiblings;

	var BLACKLIST = ['template', 'script', 'style'];

	var isHidable = function isHidable(_ref) {
	  var nodeType = _ref.nodeType;
	  var tagName = _ref.tagName;
	  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
	};

	var siblings = function siblings(container, mount, cb) {
	  mount = [].concat(mount);

	  [].forEach.call(container.children, function (node) {
	    if (mount.indexOf(node) === -1 && isHidable(node)) {
	      cb(node);
	    }
	  });
	};

	function ariaHidden(show, node) {
	  if (!node) {
	    return;
	  }
	  if (show) {
	    node.setAttribute('aria-hidden', 'true');
	  } else {
	    node.removeAttribute('aria-hidden');
	  }
	}

	function hideSiblings(container, mountNode) {
	  siblings(container, mountNode, function (node) {
	    return ariaHidden(true, node);
	  });
	}

	function showSiblings(container, mountNode) {
	  siblings(container, mountNode, function (node) {
	    return ariaHidden(false, node);
	  });
	}

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _common = __webpack_require__(95);

	/**
	 * Checks whether a prop provides a type of element.
	 *
	 * The type of element can be provided in two forms:
	 * - tag name (string)
	 * - a return value of React.createClass(...)
	 *
	 * @param props
	 * @param propName
	 * @param componentName
	 * @returns {Error|undefined}
	 */

	function validate(props, propName, componentName) {
	  var errBeginning = _common.errMsg(props, propName, componentName, '. Expected an Element `type`');

	  if (typeof props[propName] !== 'function') {
	    if (_react2['default'].isValidElement(props[propName])) {
	      return new Error(errBeginning + ', not an actual Element');
	    }

	    if (typeof props[propName] !== 'string') {
	      return new Error(errBeginning + ' such as a tag name or return value of React.createClass(...)');
	    }
	  }
	}

	exports['default'] = _common.createChainableTypeChecker(validate);
	module.exports = exports['default'];

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = applyMiddleware;

	var _compose = __webpack_require__(97);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 291 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = combineReducers;

	var _createStore = __webpack_require__(48);

	var _isPlainObject = __webpack_require__(5);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(98);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (false) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(48);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(292);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(291);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(290);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(97);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(98);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (false) {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];

/***/ },
/* 294 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.defaultMemoize = defaultMemoize;
	exports.createSelectorCreator = createSelectorCreator;
	exports.createSelector = createSelector;
	exports.createStructuredSelector = createStructuredSelector;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function defaultEqualityCheck(a, b) {
	  return a === b;
	}

	function defaultMemoize(func) {
	  var equalityCheck = arguments.length <= 1 || arguments[1] === undefined ? defaultEqualityCheck : arguments[1];

	  var lastArgs = null;
	  var lastResult = null;
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    if (lastArgs !== null && lastArgs.length === args.length && args.every(function (value, index) {
	      return equalityCheck(value, lastArgs[index]);
	    })) {
	      return lastResult;
	    }
	    lastResult = func.apply(undefined, args);
	    lastArgs = args;
	    return lastResult;
	  };
	}

	function getDependencies(funcs) {
	  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

	  if (!dependencies.every(function (dep) {
	    return typeof dep === 'function';
	  })) {
	    var dependencyTypes = dependencies.map(function (dep) {
	      return typeof dep;
	    }).join(', ');
	    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
	  }

	  return dependencies;
	}

	function createSelectorCreator(memoize) {
	  for (var _len2 = arguments.length, memoizeOptions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    memoizeOptions[_key2 - 1] = arguments[_key2];
	  }

	  return function () {
	    for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      funcs[_key3] = arguments[_key3];
	    }

	    var recomputations = 0;
	    var resultFunc = funcs.pop();
	    var dependencies = getDependencies(funcs);

	    var memoizedResultFunc = memoize.apply(undefined, [function () {
	      recomputations++;
	      return resultFunc.apply(undefined, arguments);
	    }].concat(memoizeOptions));

	    var selector = function selector(state, props) {
	      for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
	        args[_key4 - 2] = arguments[_key4];
	      }

	      var params = dependencies.map(function (dependency) {
	        return dependency.apply(undefined, [state, props].concat(args));
	      });
	      return memoizedResultFunc.apply(undefined, _toConsumableArray(params));
	    };

	    selector.resultFunc = resultFunc;
	    selector.recomputations = function () {
	      return recomputations;
	    };
	    selector.resetRecomputations = function () {
	      return recomputations = 0;
	    };
	    return selector;
	  };
	}

	function createSelector() {
	  return createSelectorCreator(defaultMemoize).apply(undefined, arguments);
	}

	function createStructuredSelector(selectors) {
	  var selectorCreator = arguments.length <= 1 || arguments[1] === undefined ? createSelector : arguments[1];

	  if (typeof selectors !== 'object') {
	    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
	  }
	  var objectKeys = Object.keys(selectors);
	  return selectorCreator(objectKeys.map(function (key) {
	    return selectors[key];
	  }), function () {
	    for (var _len5 = arguments.length, values = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	      values[_key5] = arguments[_key5];
	    }

	    return values.reduce(function (composition, value, index) {
	      composition[objectKeys[index]] = value;
	      return composition;
	    }, {});
	  });
	}

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1));
		else if(typeof define === 'function' && define.amd)
			define(["react"], factory);
		else if(typeof exports === 'object')
			exports["ReactAutocomplete"] = factory(require("react"));
		else
			root["ReactAutocomplete"] = factory(root["React"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		var React = __webpack_require__(1);
		var joinClasses = __webpack_require__(2);

		var Autocomplete = React.createClass({ displayName: "Autocomplete",

		  propTypes: {
		    options: React.PropTypes.any,
		    search: React.PropTypes.func,
		    resultRenderer: React.PropTypes.oneOfType([React.PropTypes.component, React.PropTypes.func]),
		    value: React.PropTypes.object,
		    onChange: React.PropTypes.func,
		    onError: React.PropTypes.func,
		    onFocus: React.PropTypes.func
		  },

		  getDefaultProps: function () {
		    return { search: searchArray };
		  },

		  getInitialState: function () {
		    var searchTerm = this.props.searchTerm ? this.props.searchTerm : this.props.value ? this.props.value.title : "";
		    return {
		      results: [],
		      showResults: false,
		      showResultsInProgress: false,
		      searchTerm: searchTerm,
		      focusedValue: null
		    };
		  },

		  getResultIdentifier: function (result) {
		    if (this.props.resultIdentifier === undefined) {
		      return result.id;
		    } else {
		      return result[this.props.resultIdentifier];
		    }
		  },


		  render: function () {
		    var className = joinClasses(this.props.className, "react-autocomplete-Autocomplete", this.state.showResults ? "react-autocomplete-Autocomplete--resultsShown" : undefined);
		    var style = {
		      position: "relative",
		      outline: "none"
		    };
		    return React.createElement("div", {
		      tabIndex: "1",
		      className: className,
		      onFocus: this.onFocus,
		      onBlur: this.onBlur,
		      style: style }, React.createElement("input", {
		      ref: "search",
		      className: "react-autocomplete-Autocomplete__search",
		      style: { width: "100%" },
		      onClick: this.showAllResults,
		      onChange: this.onQueryChange,
		      onFocus: this.onSearchInputFocus,
		      onBlur: this.onQueryBlur,
		      onKeyDown: this.onQueryKeyDown,
		      value: this.state.searchTerm }), React.createElement(Results, {
		      className: "react-autocomplete-Autocomplete__results",
		      onSelect: this.onValueChange,
		      onFocus: this.onValueFocus,
		      results: this.state.results,
		      focusedValue: this.state.focusedValue,
		      show: this.state.showResults,
		      renderer: this.props.resultRenderer,
		      label: this.props.label,
		      resultIdentifier: this.props.resultIdentifier }));
		  },

		  componentWillReceiveProps: function (nextProps) {
		    var searchTerm = nextProps.searchTerm ? nextProps.searchTerm : nextProps.value ? nextProps.value.title : "";
		    this.setState({ searchTerm: searchTerm });
		  },

		  componentWillMount: function () {
		    this.blurTimer = null;
		  },

		  /**
		    * Show results for a search term value.
		    *
		    * This method doesn't update search term value itself.
		    *
		    * @param {Search} searchTerm
		    */
		  showResults: function (searchTerm) {
		    this.setState({ showResultsInProgress: true });
		    this.props.search(this.props.options, searchTerm.trim(), this.onSearchComplete);
		  },

		  showAllResults: function () {
		    if (!this.state.showResultsInProgress && !this.state.showResults) {
		      this.showResults("");
		    }
		  },

		  onValueChange: function (value) {
		    var state = {
		      value: value,
		      showResults: false
		    };

		    if (value) {
		      state.searchTerm = value.title;
		    }

		    this.setState(state);

		    if (this.props.onChange) {
		      this.props.onChange(value);
		    }
		  },

		  onSearchComplete: function (err, results) {
		    if (err) {
		      if (this.props.onError) {
		        this.props.onError(err);
		      } else {
		        throw err;
		      }
		    }

		    this.setState({
		      showResultsInProgress: false,
		      showResults: true,
		      results: results
		    });
		  },

		  onValueFocus: function (value) {
		    this.setState({ focusedValue: value });
		  },

		  onQueryChange: function (e) {
		    var searchTerm = e.target.value;
		    this.setState({
		      searchTerm: searchTerm,
		      focusedValue: null
		    });
		    this.showResults(searchTerm);
		  },

		  onFocus: function () {
		    if (this.blurTimer) {
		      clearTimeout(this.blurTimer);
		      this.blurTimer = null;
		    }
		    this.refs.search.getDOMNode().focus();
		  },

		  onSearchInputFocus: function () {
		    if (this.props.onFocus) {
		      this.props.onFocus();
		    }

		    this.showAllResults();
		  },

		  onBlur: function () {
		    // wrap in setTimeout so we can catch a click on results
		    this.blurTimer = setTimeout((function () {
		      if (this.isMounted()) {
		        this.setState({ showResults: false });
		      }
		    }).bind(this), 100);
		  },

		  onQueryKeyDown: function (e) {
		    if (e.key === "Enter") {
		      e.preventDefault();
		      if (this.state.focusedValue) {
		        this.onValueChange(this.state.focusedValue);
		      }
		    } else if (e.key === "ArrowUp" && this.state.showResults) {
		      e.preventDefault();
		      var prevIdx = Math.max(this.focusedValueIndex() - 1, 0);
		      this.setState({
		        focusedValue: this.state.results[prevIdx]
		      });
		    } else if (e.key === "ArrowDown") {
		      e.preventDefault();
		      if (this.state.showResults) {
		        var nextIdx = Math.min(this.focusedValueIndex() + (this.state.showResults ? 1 : 0), this.state.results.length - 1);
		        this.setState({
		          showResults: true,
		          focusedValue: this.state.results[nextIdx]
		        });
		      } else {
		        this.showAllResults();
		      }
		    }
		  },

		  focusedValueIndex: function () {
		    if (!this.state.focusedValue) {
		      return -1;
		    }
		    for (var i = 0, len = this.state.results.length; i < len; i++) {
		      if (this.getResultIdentifier(this.state.results[i]) === this.getResultIdentifier(this.state.focusedValue)) {
		        return i;
		      }
		    }
		    return -1;
		  }
		});

		var Results = React.createClass({ displayName: "Results",

		  getResultIdentifier: function (result) {
		    if (this.props.resultIdentifier === undefined) {
		      if (!result.id) {
		        throw "id property not found on result. You must specify a resultIdentifier and pass as props to autocomplete component";
		      }
		      return result.id;
		    } else {
		      return result[this.props.resultIdentifier];
		    }
		  },

		  render: function () {
		    var style = {
		      display: this.props.show ? "block" : "none",
		      position: "absolute",
		      listStyleType: "none"
		    };
		    var $__0 = this.props,
		        className = $__0.className,
		        props = (function (source, exclusion) {
		      var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {
		        throw new TypeError();
		      }for (var key in source) {
		        if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {
		          rest[key] = source[key];
		        }
		      }return rest;
		    })($__0, { className: 1 });

		    return React.createElement("ul", React.__spread({}, props, { style: style, className: className + " react-autocomplete-Results" }), this.props.results.map(this.renderResult));
		  },

		  renderResult: function (result) {
		    var focused = this.props.focusedValue && this.getResultIdentifier(this.props.focusedValue) === this.getResultIdentifier(result);
		    var Renderer = this.props.renderer || Result;
		    return React.createElement(Renderer, {
		      ref: focused ? "focused" : undefined,
		      key: this.getResultIdentifier(result),
		      result: result,
		      focused: focused,
		      onMouseEnter: this.onMouseEnterResult,
		      onClick: this.props.onSelect,
		      label: this.props.label });
		  },

		  componentDidUpdate: function () {
		    this.scrollToFocused();
		  },

		  componentDidMount: function () {
		    this.scrollToFocused();
		  },

		  componentWillMount: function () {
		    this.ignoreFocus = false;
		  },

		  scrollToFocused: function () {
		    var focused = this.refs && this.refs.focused;
		    if (focused) {
		      var containerNode = this.getDOMNode();
		      var scroll = containerNode.scrollTop;
		      var height = containerNode.offsetHeight;

		      var node = focused.getDOMNode();
		      var top = node.offsetTop;
		      var bottom = top + node.offsetHeight;

		      // we update ignoreFocus to true if we change the scroll position so
		      // the mouseover event triggered because of that won't have an
		      // effect
		      if (top < scroll) {
		        this.ignoreFocus = true;
		        containerNode.scrollTop = top;
		      } else if (bottom - scroll > height) {
		        this.ignoreFocus = true;
		        containerNode.scrollTop = bottom - height;
		      }
		    }
		  },

		  onMouseEnterResult: function (e, result) {
		    // check if we need to prevent the next onFocus event because it was
		    // probably caused by a mouseover due to scroll position change
		    if (this.ignoreFocus) {
		      this.ignoreFocus = false;
		    } else {
		      // we need to make sure focused node is visible
		      // for some reason mouse events fire on visible nodes due to
		      // box-shadow
		      var containerNode = this.getDOMNode();
		      var scroll = containerNode.scrollTop;
		      var height = containerNode.offsetHeight;

		      var node = e.target;
		      var top = node.offsetTop;
		      var bottom = top + node.offsetHeight;

		      if (bottom > scroll && top < scroll + height) {
		        this.props.onFocus(result);
		      }
		    }
		  }
		});

		var Result = React.createClass({ displayName: "Result",

		  getDefaultProps: function () {
		    return {
		      label: function (result) {
		        return result.title;
		      }
		    };
		  },

		  getLabel: function (result) {
		    if (typeof this.props.label === "function") {
		      return this.props.label(result);
		    } else if (typeof this.props.label === "string") {
		      return result[this.props.label];
		    }
		  },

		  render: function () {
		    var className = joinClasses({
		      "react-autocomplete-Result": true,
		      "react-autocomplete-Result--active": this.props.focused
		    });

		    return React.createElement("li", {
		      style: { listStyleType: "none" },
		      className: className,
		      onClick: this.onClick,
		      onMouseEnter: this.onMouseEnter }, React.createElement("a", null, this.getLabel(this.props.result)));
		  },

		  onClick: function () {
		    this.props.onClick(this.props.result);
		  },

		  onMouseEnter: function (e) {
		    if (this.props.onMouseEnter) {
		      this.props.onMouseEnter(e, this.props.result);
		    }
		  },

		  shouldComponentUpdate: function (nextProps) {
		    return nextProps.result.id !== this.props.result.id || nextProps.focused !== this.props.focused;
		  }
		});

		/**
		* Search options using specified search term treating options as an array
		* of candidates.
		*
		* @param {Array.<Object>} options
		* @param {String} searchTerm
		* @param {Callback} cb
		*/
		function searchArray(options, searchTerm, cb) {
		  if (!options) {
		    return cb(null, []);
		  }

		  searchTerm = new RegExp(searchTerm, "i");

		  var results = [];

		  for (var i = 0, len = options.length; i < len; i++) {
		    if (searchTerm.exec(options[i].title)) {
		      results.push(options[i]);
		    }
		  }

		  cb(null, results);
		}

		module.exports = Autocomplete;

	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		  Copyright (c) 2015 Jed Watson.
		  Licensed under the MIT License (MIT), see
		  http://jedwatson.github.io/classnames
		*/

		function classNames() {
			var classes = '';
			var arg;

			for (var i = 0; i < arguments.length; i++) {
				arg = arguments[i];
				if (!arg) {
					continue;
				}

				if ('string' === typeof arg || 'number' === typeof arg) {
					classes += ' ' + arg;
				} else if (Object.prototype.toString.call(arg) === '[object Array]') {
					classes += ' ' + classNames.apply(null, arg);
				} else if ('object' === typeof arg) {
					for (var key in arg) {
						if (!arg.hasOwnProperty(key) || !arg[key]) {
							continue;
						}
						classes += ' ' + key;
					}
				}
			}
			return classes.substr(1);
		}

		// safely export classNames for node / browserify
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		}

		// safely export classNames for RequireJS
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}


	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	/* global window */
	'use strict';

	module.exports = __webpack_require__(297)((window) || window || this);


/***/ },
/* 297 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;

		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};


/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (false) {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;


/***/ },
/* 299 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ])))
});
;