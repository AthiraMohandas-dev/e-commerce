"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const constants_1 = __importDefault(require("../config/constants"));
exports.default = {
    /**
     * Returns products in the specified query, if exists
     */
    getProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let order = "";
            let { search, sort } = req.query;
            if (!search)
                search = "";
            if (!sort)
                sort = "1";
            switch (sort) {
                case "1":
                    order = constants_1.default.SortOrder.ASC;
                    break;
                case "2":
                    order = constants_1.default.SortOrder.DEC;
                    break;
            }
            yield database_1.pool.query("BEGIN");
            const query = `SELECT * from products as p WHERE LOWER(p.description) 
            LIKE LOWER('%${search}%') or LOWER(p.title) LIKE LOWER('%${search}%') ORDER BY p.price ${order}`;
            const getproducts = yield database_1.pool.query(query);
            yield database_1.pool.query("COMMIT");
            return res.json({ products: getproducts.rows });
        }
        catch (err) {
            yield database_1.pool.query("ROLLBACK");
            res.status(400).json({ err: err });
        }
    }),
};
