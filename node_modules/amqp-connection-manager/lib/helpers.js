"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wait = wait;

function wait(timeInMs) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, timeInMs);
  });
}
//# sourceMappingURL=helpers.js.map