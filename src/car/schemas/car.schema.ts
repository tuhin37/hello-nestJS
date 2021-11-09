import * as mongoose from 'mongoose';

export const CarScheema = new mongoose.Schema({
    id: Number,
    manufacturer: String,
    model: String,
    date: String,
    type: String
});