import authService from "../services/auth.service.js";

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = await authService.registerUser({
            username,
            email,
            password,
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user,
        });

    } catch (error) {
        console.error("Registration error:", error);

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await authService.loginUser({
            email,
            password,
        });

        res.status(200).json({
            success: true,
            message: "User login successful",
            data: user,
        });

    } catch (error) {
        console.error("Login error:", error);

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const getMe = async (req, res) => {
    try {
        const user = await authService.getCurrentUser(req.user.userId);

        res.status(200).json({
            success: true,
            data: user,
        });

    } catch (error) {
        console.error("Get user error:", error);

        res.status(404).json({
            success: false,
            message: error.message,
        });
    }
};