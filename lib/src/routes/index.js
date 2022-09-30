"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_api_router_1 = __importDefault(require("./products_api_router"));
const router = express_1.default.Router();
router.use(products_api_router_1.default);
exports.default = router;
