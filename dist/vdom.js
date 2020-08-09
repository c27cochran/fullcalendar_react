import * as react from 'react';
import * as reactDom from 'react-dom';
(typeof globalThis !== 'undefined' ? globalThis : window).FullCalendarVDom = {
    Component: react.Component,
    createElement: react.createElement,
    render: reactDom.render,
    createRef: react.createRef,
    Fragment: react.Fragment,
    createContext: react.createContext,
    flushToDom: flushToDom
};
export function flushToDom() {
    // always sync from top-level
}
//# sourceMappingURL=vdom.js.map