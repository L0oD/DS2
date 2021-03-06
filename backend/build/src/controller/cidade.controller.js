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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const cidade_entity_1 = require("./../entity/cidade.entity");
class CidadeController {
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cidades = yield typeorm_1.getRepository(cidade_entity_1.CidadeEntity).find();
                res.send(cidades);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    creat(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cidade = req.body;
            try {
                yield typeorm_1.getRepository(cidade_entity_1.CidadeEntity).save(cidade);
                res.send(cidade);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
}
exports.default = new CidadeController();
//# sourceMappingURL=cidade.controller.js.map