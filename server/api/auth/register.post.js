import {User} from "../../model/user.js";
//import bcrypt from "bcryptjs";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const {username, email, password, role} = body;

        // Check if user already exists
        const existingUser = await User.findOne({email: email});
        if (existingUser) {
            return {status: "error", message: "User already exists"};
        }
        // Create new user
        const newUser = new User({
            username,
            email,
            password, // In production, make sure to hash the password before saving
            role
        });
        await newUser.save();
    } catch (error) {
        console.error("Error during registration:", error);
        return {status: "error", message: "Registration failed"};
    }
});