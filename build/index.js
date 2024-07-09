"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // transforma el body request en json
app.get('/api/v1', (_, res) => {
    res.send('Hi there! This is the API v1.0.0');
});
app.use('/api/v1/diaries', diaries_1.default);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
