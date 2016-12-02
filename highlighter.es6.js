/**
 * Created by Leroy on 2/5/2016.
 */

void function (window, document, undefined) {
    "use strict";

    //TODO: overlay highlight
    // create less file.
    // .edge()
    // @border = @nindigreen @nindpurple

    const _window = window;
    const tool = {noop, init, enableFinder, disableFinder, finder};

    const highlighter = (() => {
        let initialized = false;

        return {
            border: [
                document.createElement('div'),
                document.createElement('div'),
                document.createElement('div'),
                document.createElement('div')
            ],
            on
        };

        /**
         *
         * @param elem {DOM Element} to attach border to
         */
        function on(elem) {
            // TODO: init should run when highlighter is init'd.
            // TODO: highlighter.border is not in scope yet so the whole thing needs to be redone.
            // TODO: this will be fixed once highlighter is its own file
            if (!initialized) init();

            return elem.isEdge || new Promise(function () {
                    let bounds = elem.getBoundingClientRect(); // Maybe I'm jaded but somehow I feel like this won't work for all cases

                    highlighter.attachedTo = elem;

                    /**
                     * 0 = n
                     * 1 = s
                     * 2 = e
                     * r = w
                     **/
                    highlighter.border.forEach((edge, iedge, border) => {
                        edge.style.top = bounds.top + 'px';
                        edge.style.left = bounds.left + 'px';
                        edge.style.display = 'block';
                        edge.style.zIndex = 1 + (elem.zIndex || 0); // 1 + elem.z-index //TODO: fix me
                        edge.style.zIndex = 20; // this seems to work.  why doesn't 1?
                        //
                        // switch (iedge) {
                        //     case 0:
                        //
                        // }

                        //TODO: check es6 spec. I think this should work
                        // this did work, I just got the cardinal directions wrong.  TODO: fix cardinal directions
                        switch (iedge) {
                            case 1: //s
                                edge.style.left = bounds.left + bounds.width + 'px'; //TODO make border width configurable, place border properly
                            case 0: //n
                                edge.style.height = bounds.height + 'px';
                                break;
                            case 3: //w
                                edge.style.top = bounds.top + bounds.height + 'px'; //TODO make border width configurable, place border properly
                            case 2: //e
                                edge.style.width = bounds.width + 'px';
                        }

                        console.log([edge.style.top, edge.style.left, edge.style.width, edge.style.height]);
                    })


                });
        }

        /**
         * attach borders to body
         */
        function init() {
            if (initialized) return;

            // TODO: edge needs to be a css class as well
            highlighter.border.forEach(edge => {
                edge.class="edge"
                edge.style.position = 'absolute';
                edge.style.height = '4px'; //TODO make border width configurable
                edge.style.width = '4px'; //TODO make border width configurable
                edge.style.display = 'none';
                edge.isEdge = true; //window.hasEdge = true; //there can be only one
                edge.style.background = 'purple'; // TODO: make this configurable
                document.body.appendChild(edge);
            });

            initialized = true;
        }

    })();


    function noop() {
        console.log(arguments, 'noop');
        debugger;
    }

    function init() {
        // enable tool when alt press on window
        _window.addEventListener('keydown',
            _keydown => _keydown.repeat || !_keydown.altKey || tool.enableFinder(),
            true);

        // disable tool when alt released
        _window.addEventListener('keyup',
            _keyup => _keyup.keyCode === 18 && tool.disableFinder(),
            true);

        _window.addEventListener('mousemove',
            _mousemove => tool.finder(_mousemove),
            true);

        

        _window.addEventListener('wheel',
            _wheel => {
                // tool.noop;
            },
            true
        )
    }

    function enableFinder() {
        if (tool.finderEnabled) {
            return;
        }
        tool.finderEnabled = true;
    }

    function disableFinder() {
        tool.finderEnabled = false;
    }

    let finderPath = [],
        current = _window;

    function finder(_mousemove) {
        !tool.finderEnabled ||              //
        current == _mousemove.target ||     // /short circuits
        new Promise((resolve, rej) => {     //
            // TODO remove class
            //current.removeClass('tool-found')
            setCurrent(_mousemove.target).then(highlighter.on);

            resolve(current);
        });

        function setCurrent(found) {
            current = found;
            return Promise.resolve(found);
        }

        // if (
        //     !tool.finderEnabled
        //     || current == _mousemove.target) {
        //     return;
        // }

        // TOOO: find and save direct path to root/null
        // 
        // _mouseScroll =>
        // let elem = _mousemove.target;
        // do {
        //     console.log(elem);
        //     console.log(_mousemove)
        //     finderPath.push(elem);
        //     // console.log(finderPath);
        // } while (elem = elem.parentElement)
        //
        // finderPath.map(elem => elem.)

        // or
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

    }

    tool.init();

}(window, document, undefined);
