Object.defineProperty(exports, "__esModule", { value: true });

function default_1(options, app) {
    return async function env(ctx, next) {
        const { request } = ctx;
        ctx.env = 'hehe';
        await next();
    };
}
exports.default = default_1;
