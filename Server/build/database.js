"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = require("promise-mysql");
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.createPool(keys_1.default.database);
pool.then(connection => {
    pool.releaseConnection(connection);
    console.log('Db is connected');
});
