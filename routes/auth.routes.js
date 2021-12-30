const { Router } = require("express");
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const router = Router();

// /api/auth/register
router.post(
    "/register",
    [
        check("email", "Incorrect email!").isEmail(),
        check("password", "Invalid password!").isLength({ min: 6 })
    ],
    async (req, resp) => {
        try {
            // Validate Input
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return resp.status(400).json({
                    errors: errors.array(),
                    message: "Incorrect registration input!"
                })
            }

            const { email, password } = req.body;
            const candidate = await User.findOne({ email: email });
            if (candidate) {
                return resp.status(400).json({ message: "Email already registered!" });
            }

            const sault = 117;
            const hashedPassword = await bcrypt.hash(password, sault);

            const user = new User({ email, password: hashedPassword });
            await user.save();

            return res.status(201).json({ message: "User created successfully!" });
        }
        catch (error) {
            return resp.status(500).json({ message: "Something went wrong!" })
        }
    })

// /api/auth/login
router.post(
    "/login",
    [
        check("email", "Incorrect email!").normalizeEmail().isEmail(),
        check("password", "Invalid password!").exists()
    ],
    async (req, resp) => {
        try {
            // Validate Input
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return resp.status(400).json({
                    errors: errors.array(),
                    message: "Incorrect login input!"
                })
            }

            const { email, password } = req.body;

            const user = await User.findOne({ email: email });
            if (!user) {
                return resp.status(400).json({ message: "User not found!" });
            }

            const isPasswordCorrect = bcrypt.compare(password, user.password);
            if (!isPasswordCorrect) {
                return resp.status(400).json({ message: "Incorrect password!" });
            }

            const token = jwt.sign(
                { userId: user.Id },
                config.get("jwtSecret"),
                { expiresIn: "1h" }
            );

            resp.json({ token, userId: user.Id });
        }
        catch (error) {
            return resp.status(500).json({ message: "Something went wrong!" })
        }
    })

module.exports = router;