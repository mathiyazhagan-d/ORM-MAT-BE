import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the schema with the new role field
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    role: {
        type: String,
        required: true,
        enum: ['customer', 'seller'], // Only allow 'customer' and 'seller' as valid options
        default: 'customer' // Default value is 'customer'
    }
}, {
    timestamps: true
});

// Middleware to hash the password before saving the user
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', UserSchema);

export default User;
