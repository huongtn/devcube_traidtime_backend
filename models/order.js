const crypto = require('crypto');
module.exports = (mongoose) => {

    const orderDetail = new mongoose.Schema({
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: [true, 'Product is required'],
        },
        price: {
            type: Number,
            required: [true, 'Price is required'],
        },
        qty: {
            type: Number,
            required: [true, 'Qty is required'],
        },
    });

    const destinationInfo = new mongoose.Schema({
        address: {
            type: String,
            required: [true, 'address is required'],
        },
        lat: {
            type: Number,
            required: [true, 'Lat is required'],
        },
        lng: {
            type: Number,
            required: [true, 'Lat is required'],
        },
        deliveryFee: {
            type: Number,
            required: [true, 'Delivery Fee is required'],
        },
    });

    const orderSchema = new mongoose.Schema(
        {
            company: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Company',
                required: [true, 'Company is required'],
            },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            amount: {
                type: Number,
                required: [true, 'Amount is required'],
            },
            orderDetails: [orderDetail],
            destination: destinationInfo
        },
        { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
    );
    return orderSchema;
} 
