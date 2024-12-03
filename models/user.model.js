const mongoose= require("mongoose")

const userSchema= mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true, //will validate repetation
            validate: {
                validator: function (v) {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Basic email validation
                },
                message: (props) => `${props.value} is not a valid email!`,
            },
        },
        password: {
            type: String,
            required: true,
            minlength: 6, // Enforce a minimum password length
        },
        role: {
            type: String,
            default: 'voter',
            enum: ['admin', 'voter'], // Allow only specific roles
        },
        governmentId: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (v) {
                    return /^\+?[1-9]\d{1,14}$/.test(v); // Basic phone number validation (E.164 format)
                },
                message: (props) => `${props.value} is not a valid phone number!`,
            },
        },
    },
    {
        timestamps: true,
    }
);

const user = mongoose.model("user", userSchema);
module.exports= user;