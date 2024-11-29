const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // 24 hours in seconds
    }
});

// Check if the model is already defined in mongoose.models
module.exports = mongoose.models.BlacklistToken || mongoose.model('BlacklistToken', blacklistTokenSchema);
