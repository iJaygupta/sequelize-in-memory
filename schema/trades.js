module.exports = {

    createTrade: {
        properties: {
            type: { enum: ["buy", "sell"] },
            user_id: { type: ["number"], minLength: 1 },
            symbol: { type: ["string"], minLength: 1 },
            shares: { type: ["number"], minimum: 1, maximum: 100 },
            price: { type: ["number"], minLength: 1 },
            timestamp: { type: ["number"], minLength: 1 },
        },
        required: ["type", "user_id", "symbol", "shares", "price", "timestamp"],
        additionalProperties: false,
    },


};