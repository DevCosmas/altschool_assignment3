const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'user must have a name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'user must have an email'],
        unique: true
    },
    password: {
        type: String,
        unique: true,
        required: [true, 'user must have a password'],
        min: [6, 'password should not be less than 6 characters'],
        trim: true,
        select: false
    },
    phone: {
        type: String,
        required: [true, 'user must have a phone contact'],
        trim: true,
        unique: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: [true, 'user must have a gender'],
        trim: true
    },
    address: {
        type: String,
        required: [true, 'user must have an address'],
        trim: true
    },
    role: {
        type: String,
        enum: ['customer', 'admin'],
        required: [true, 'user must have a role of either customer or an admin'],
        trim: true,
        default: 'customer'
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password, 12)
})
userSchema.methods.comparePassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword)

}
const userModel = mongoose.model("USER", userSchema)

module.exports = { userModel }