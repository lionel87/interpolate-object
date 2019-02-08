"use strict";

const interpolateString = require("interpolate-string");

const interpolate = (target, context, pattern) => {
    if (typeof target === "string") {
        return interpolateString(target, context, pattern);
    } else if (Array.isArray(target)) {
        const a = [];
        for (let value of target) {
            a.push(interpolate(value, context, pattern));
        }
        return a;
    } else if (target && typeof target === "object") {
        const o = {};
        for (let p in target) {
            if (target.hasOwnProperty(p)) {
                o[p] = interpolate(target[p], context, pattern);
            }
        }
        return o;
    }
    return target;
}

module.exports = interpolate;
