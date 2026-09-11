import { validationResult } from 'express-validator';

/**
 * Runs express-validator rules, then returns 400 with details
 * if any validation failed. Attaches sanitized body via req.validated.
 */
export function validate(rules) {
    const validators = Array.isArray(rules) ? rules : [rules];

    return async (req, res, next) => {
        await Promise.all(validators.map((rule) => rule.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        return res.status(400).json({
            success: false,
            error: {
                message: 'Validation failed.',
                details: errors.array().map((error) => ({
                    field: error.path,
                    message: error.msg,
                    value: error.value,
                })),
            },
        });
    };
}