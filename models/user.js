import mongoose from 'mongoose'

let userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    sex: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export default mongoose.model('User', userSchema)