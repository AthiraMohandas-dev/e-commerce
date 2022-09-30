"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyValidationMiddleware = exports.validateProductSearchQuery = void 0;
const express_validator_1 = require("express-validator");
const validateProductSearchQuery = () => {
    const validators = [];
    validators.push((0, express_validator_1.query)("search")
        .optional()
        .not()
        .isEmpty()
        .withMessage('Must not be empty'));
    validators.push(applyValidationMiddleware());
    return validators;
};
exports.validateProductSearchQuery = validateProductSearchQuery;
function applyValidationMiddleware() {
    return (req, _res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (errors.isEmpty()) {
            return next();
        }
        else {
            const error = errors.array().map(error => {
                return {
                    param: error.param,
                    issue: error.msg,
                    location: error.location,
                };
            });
            return next(Error(JSON.stringify(error)));
        }
    };
}
exports.applyValidationMiddleware = applyValidationMiddleware;
