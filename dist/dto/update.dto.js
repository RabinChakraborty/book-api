"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dto_1 = require("./create.dto");
class UpdateDto extends (0, mapped_types_1.PartialType)(create_dto_1.CreateDto) {
}
exports.UpdateDto = UpdateDto;
//# sourceMappingURL=update.dto.js.map