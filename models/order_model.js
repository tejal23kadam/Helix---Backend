const mongoose = require('mongoose');

const newOrder = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    phoneNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product'
            },
            quantity: Number,
            isOrdered: Boolean,
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model('orders', newOrder);
