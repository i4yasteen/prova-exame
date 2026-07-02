"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        const pessoas = [
            { nome: 'João Teixeira', email: 'joao.teixeira@ifro.edu.br' },
            { nome: 'Reinaldo Pereira', email: 'reinaldo.pereira@ifro.edu.br' },
            { nome: 'Jackson Henrique', email: 'jackson.henrique@ifro.edu.br' },
            { nome: 'Elias Abreu', email: 'elias.abreu@ifro.edu.br' },
            { nome: 'Clayton Andrade', email: 'clayton.andrade@ifro.edu.br' },
            { nome: 'Geilson Guardia', email: 'gleison.guardia@ifro.edu.br' },
        ];
        return {
            titulo: 'AppWeb com NestJs',
            horaAgora: new Date().toLocaleString('pt-BR'),
            listaPessoas: pessoas,
        };
    }
    getSobre() {
        return {
            titulo: 'Seção de informações do sistema web.',
        };
    }
    login() {
        return { layout: false };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('inicial'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('sobre'),
    (0, common_1.Render)('_sobre'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getSobre", null);
__decorate([
    (0, common_1.Get)('login'),
    (0, common_1.Render)('autenticacao/login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "login", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map