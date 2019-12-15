"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const log = (value) => {
    console.log(value);
};
exports.default = {
    install(Vue) {
        Vue.prototype.$log = log;
    }
};
//# sourceMappingURL=index.js.map