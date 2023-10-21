"use strict";
const checkObj = (item) => {
    if (typeof item === 'object' && Array.isArray(item) && item !== null) {
        return true;
    }
    return false;
};
console.log(checkObj([1, 23]));
