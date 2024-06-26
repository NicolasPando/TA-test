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
exports.peticion = void 0;
const axios_1 = __importDefault(require("axios"));
require("dotenv/config");
const peticion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get("https://ajoaquinlizarraga.github.io/apipublic/mydata/people/people.json");
        const datos = response.data;
        const usuarios = datos.map((usuario) => ({
            id: usuario.id,
            first_name: usuario.first_name,
            last_name: usuario.last_name,
            email: usuario.email,
            gender: usuario.gender
        }));
        res.status(200).json(usuarios);
    }
    catch (error) {
        res.status(500).json({ message: `Algo salió mal` });
    }
});
exports.peticion = peticion; 
