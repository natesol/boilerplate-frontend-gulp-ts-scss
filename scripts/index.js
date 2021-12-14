(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/* ------------------------------------------------------------------------------------------------ */
/* Project Main Function -------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", { value: true });
const _0_dir_1 = require("./utilities/0-dir");
document.addEventListener('DOMContentLoaded', () => {
    console.log(_0_dir_1.greetingMSG1);
    console.log(_0_dir_1.greetingMSG2);
    console.log(..._0_dir_1.greetingMSG3);
});
/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */ 
},{"./utilities/0-dir":2}],2:[function(require,module,exports){
"use strict";
/* ------------------------------------------------------------------------------------------------ */
/* Utilities Barrel File -------------------------------------------------------------------------- */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./globals"), exports);
__exportStar(require("./interfaces"), exports);
__exportStar(require("./types"), exports);
/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */ 
},{"./globals":3,"./interfaces":4,"./types":5}],3:[function(require,module,exports){
"use strict";
/* ------------------------------------------------------------------------------------------------ */
/* Globals ---------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetingMSG3 = exports.greetingMSG2 = exports.greetingMSG1 = void 0;
// ...
exports.greetingMSG1 = 'Hello there!';
exports.greetingMSG2 = 'Its seems like everything is working...';
exports.greetingMSG3 = ['%cNow let\'s write some code!', 'color: #0fa97e; font-size: 22px; font-weight: bold'];
/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */ 
},{}],4:[function(require,module,exports){
"use strict";
/* ------------------------------------------------------------------------------------------------ */
/* Interfaces ------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", { value: true });
/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */ 
},{}],5:[function(require,module,exports){
"use strict";
/* ------------------------------------------------------------------------------------------------ */
/* Types ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", { value: true });
/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */ 
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9pbmRleC50cyIsInNyYy9zY3JpcHRzL3V0aWxpdGllcy8wLWRpci50cyIsInNyYy9zY3JpcHRzL3V0aWxpdGllcy9nbG9iYWxzLnRzIiwic3JjL3NjcmlwdHMvdXRpbGl0aWVzL2ludGVyZmFjZXMudHMiLCJzcmMvc2NyaXB0cy91dGlsaXRpZXMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUEsc0dBQXNHO0FBQ3RHLHNHQUFzRzs7QUFFdEcsOENBSTJCO0FBRzNCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFFL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBWSxDQUFDLENBQUM7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBWSxDQUFDLENBQUM7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLHFCQUFZLENBQUMsQ0FBQztBQUVqQyxDQUFDLENBQUMsQ0FBQztBQUVILHNHQUFzRztBQUN0RyxzR0FBc0c7OztBQ25CdEcsc0dBQXNHO0FBQ3RHLHNHQUFzRzs7Ozs7Ozs7Ozs7O0FBR3RHLDRDQUEwQjtBQUUxQiwrQ0FBNkI7QUFFN0IsMENBQXdCO0FBR3hCLHNHQUFzRztBQUN0RyxzR0FBc0c7OztBQ1p0RyxzR0FBc0c7QUFDdEcsc0dBQXNHOzs7QUFFdEcsTUFBTTtBQUNPLFFBQUEsWUFBWSxHQUFHLGNBQWMsQ0FBQztBQUM5QixRQUFBLFlBQVksR0FBRyx5Q0FBeUMsQ0FBQztBQUN6RCxRQUFBLFlBQVksR0FBRyxDQUFDLCtCQUErQixFQUFFLG9EQUFvRCxDQUFDLENBQUM7QUFHcEgsc0dBQXNHO0FBQ3RHLHNHQUFzRzs7O0FDVnRHLHNHQUFzRztBQUN0RyxzR0FBc0c7O0FBVXRHLHNHQUFzRztBQUN0RyxzR0FBc0c7OztBQ1p0RyxzR0FBc0c7QUFDdEcsc0dBQXNHOztBQU10RyxzR0FBc0c7QUFDdEcsc0dBQXNHIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIFByb2plY3QgTWFpbiBGdW5jdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGdyZWV0aW5nTVNHMSxcclxuICAgIGdyZWV0aW5nTVNHMixcclxuICAgIGdyZWV0aW5nTVNHM1xyXG59IGZyb20gJy4vdXRpbGl0aWVzLzAtZGlyJztcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhncmVldGluZ01TRzEpO1xyXG4gICAgY29uc29sZS5sb2coZ3JlZXRpbmdNU0cyKTtcclxuICAgIGNvbnNvbGUubG9nKC4uLmdyZWV0aW5nTVNHMyk7XHJcbiAgICBcclxufSk7XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIFV0aWxpdGllcyBCYXJyZWwgRmlsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vZ2xvYmFscyc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqLyIsIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBHbG9iYWxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8vIC4uLlxyXG5leHBvcnQgY29uc3QgZ3JlZXRpbmdNU0cxID0gJ0hlbGxvIHRoZXJlISc7XHJcbmV4cG9ydCBjb25zdCBncmVldGluZ01TRzIgPSAnSXRzIHNlZW1zIGxpa2UgZXZlcnl0aGluZyBpcyB3b3JraW5nLi4uJztcclxuZXhwb3J0IGNvbnN0IGdyZWV0aW5nTVNHMyA9IFsnJWNOb3cgbGV0XFwncyB3cml0ZSBzb21lIGNvZGUhJywgJ2NvbG9yOiAjMGZhOTdlOyBmb250LXNpemU6IDIycHg7IGZvbnQtd2VpZ2h0OiBib2xkJ107XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqLyIsIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBJbnRlcmZhY2VzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvcFVwTWVzc2FnZSB7XHJcbiAgICBoZWFkIDpzdHJpbmc7XHJcbiAgICBib2R5IDpzdHJpbmc7XHJcbiAgICBkZXRhaWxzIDpzdHJpbmc7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIFR5cGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIFRoZW1lID0gKCAnbGlnaHQnIHwgJ3ZpYnJhbnQnIHwgJ2RhcmsnIHwgJ2RpbScgKTtcclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovIl19
