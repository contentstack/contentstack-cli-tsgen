"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JSDocumentationGenerator {
    interface(description) {
        return description ? this.block(description) : null;
    }
    field(description) {
        return description ? this.block(description) : null;
    }
    block(description) {
        return ['/**', description, '*/'].join(' ');
    }
}
exports.default = JSDocumentationGenerator;
