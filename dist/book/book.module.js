"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_module_1 = require("../app.module");
const books_controller_1 = require("../books/books.controller");
const books_service_1 = require("../books/books.service");
const schema_schema_1 = require("../schema/schema.schema");
let BookModule = class BookModule {
};
BookModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://rabin747809:SGr3GNf2nKDMICkL@cluster0.9gi5042.mongodb.net/?retryWrites=true&w=majority'),
            mongoose_1.MongooseModule.forFeature([{ name: schema_schema_1.Books.name, schema: schema_schema_1.BookSchema }]),
            (0, common_1.forwardRef)(() => app_module_1.AppModule),
        ],
        controllers: [books_controller_1.BookController],
        providers: [books_service_1.BookService],
    })
], BookModule);
exports.BookModule = BookModule;
//# sourceMappingURL=book.module.js.map