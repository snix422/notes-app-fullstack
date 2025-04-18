const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "E-mail jest wymagany"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Hasło jest wymagane"],
        minLength: [5, "Min. długość hasła to 5"]
    },
    name: {
        type: String,
        required: [true, "Imie jest wymagane"],
        minLength: [3, "Min. długość znaków to 3"]
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        return next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model("User", userSchema);

module.exports = User;