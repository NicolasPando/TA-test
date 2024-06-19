"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
require("dotenv/config");
const app = (0, express_1.default)();
const port = process.env.port || 3000;
app.use("/soyTA", controller_1.peticion);
app.listen(port, () => {
    console.log(`server listening ${port}`);
});
