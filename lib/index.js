"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use('/api', routes_1.default);
// Bind to port to start server
app.listen(PORT, () => {
    console.log(`Express server started at port ${PORT}`);
});
