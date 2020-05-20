"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config({
    path: `.env.${process.env.NODE_ENV}`,
    debug: process.env.DEBUG,
});
//# sourceMappingURL=env.js.map