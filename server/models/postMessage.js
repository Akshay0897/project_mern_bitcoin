import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    id:String,
    name: String,
    symbol: String,
    price_usd: Number,
    market_cap: Number
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;