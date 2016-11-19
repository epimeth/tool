void function(window, undefined)  {
    "use strict";


debugger;

//     /**
//      * Created by Leroy on 2/5/2016.
//      */
//     'use strict';
//
//     (() => {
//         const _window = this;
//     const tool = {noop, init, enableFinder, disableFinder, finder};
//
//     function noop() {
//         console.log('noop');
//     }
//
//     function init() {
//         // enable tool when alt press on window
//         _window.addEventListener('keydown',
//             _keydown => _keydown.repeat || !_keydown.altKey || tool.enableFinder(),
//             true);
//
//         // disable tool when alt released
//         _window.addEventListener('keyup',
//             _keyup => _keyup.keyCode === 18 && tool.disableFinder(),
//             true);
//
//         _window.addEventListener('mousemove',
//             _mousemove => tool.finder(_mousemove),
//             true);
//     }
//
//     function enableFinder() {
//         if (tool.enabled) {
//             return;
//         }
//         tool.finderEnabled = true;
//     }
//
//     function disableFinder() {
//         tool.finderEnabled = false;
//     }
//
//     let finderPath = [];
//     function finder(_mousemove) {
//         if (!tool.finderEnabled) {
//             return;
//         }
//         console.log(_mousemove);
//         let elem = _mousemove.target;
//         console.log(elem);
//         while (elem !== _window) {
//             console.log(elem);
//             finderPath.push(elem);
//             // console.log(finderPath);
//             elem = elem.parent;
//         }
//     }
//
//     tool.init();
// })();






}(window, undefined);
