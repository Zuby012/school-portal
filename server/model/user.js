import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'acad-staff', 'non-acad-staff', 'admin'], default: 'student' },
}, { timestamps: true });

export const User = mongoose.model("users", userSchema);