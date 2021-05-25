const connection = require("../connection");
const Trades = require("../models/trades");

let global_id = 1;


exports.createTrade = async (request, response) => {
    try {
        let trade = await Trades.insertMany({
            ...request.body,
            id: global_id++
        })
        response.status(201).json(prepareResponseForTrades(trade))
    } catch (error) {
        response.status(500).json({ error: error })
    }


}

exports.getTrades = async (request, response) => {
    try {
        let filter = {};
        if (request.query.type) {
            filter['type'] = request.query.type;
        }
        if (request.query.user_id) {
            filter['user_id'] = request.query.user_id;
        }
        let trades = await Trades.find(filter).lean()
        response.status(200).json(prepareResponseForTrades(trades))
    } catch (error) {
        response.status(500).json({ error: error })
    }
}


exports.getTradeById = async (request, response) => {
    try {
        let id = request.params.id
        let trade = await Trades.find({ id })
        if (!trade.length) return response.status(404).send('ID not found');

        response.status(200).json(prepareResponseForTrade(trade[0]))
    } catch (error) {
        console.log(error)
        response.status(500).json({ error: error })
    }
}


function prepareResponseForTrades(data) {
    let res = [];
    data.map(el => {
        res.push({
            "id": el.id,
            "type": el.type,
            "user_id": el.user_id,
            "symbol": el.symbol,
            "shares": el.shares,
            "price": el.price,
            "timestamp": el.timestamp
        })
    })
    return res
}


function prepareResponseForTrade(el) {
    return {
        "id": el.id,
        "type": el.type,
        "user_id": el.user_id,
        "symbol": el.symbol,
        "shares": el.shares,
        "price": el.price,
        "timestamp": el.timestamp
    }
}