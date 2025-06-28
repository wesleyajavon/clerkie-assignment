const express = require("express");
require("dotenv").config();
const createModels = require("./models/models");

const app = express();
app.use(express.json());

const models = createModels();

// Wait for the connection to open before using the models
models.connection.once("open", () => {
    console.log("✅ MongoDB connected via custom connection");

    // POST /users
    app.post("/users", async (req, res) => {
        try {
            const user = await models.user.create(req.body);
            res.status(201).json(user);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });

    // POST /payments
    app.post("/payments", async (req, res) => {
        try {
            const payment = await models.payment.create(req.body);
            res.status(201).json(payment);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });

    // Example GET routes (you can include others you've built too)
    app.get("/users", async (req, res) => {
        const users = await models.user.find();
        res.json(users);
    });

    app.get("/payments", async (req, res) => {
        const payments = await models.payment.find().populate("user");
        res.json(payments);
    });


    // My solution for Clerkie assignment starts here:
    app.get("/pullFirstUser", async (req, res) => {
        try {
            // last element will be found
            let user;
            let userIds = ["685f29eea70a6d5148e3c6a9", "685f29eeda70a65148e3c6ae", "685f29eea70a6d5148e3c6e9", "685f29eea70a65148e3c6ae9"]
            if (!userIds) res.json("nada")

            userIds.map(async userId => {
                user = await models.user.findOne({ _id: userId });
                if (user) res.json(user);
            });
        } catch (error) {

        }
    });

    app.get("/pullPaymentsForUsers", async (req, res) => {
        try {

            // let users = await models.user.find()

            // let result = await Promise.all(
            //     users.map(user => models.payment.find({ user: user._id }))
            // )

            let result = [];

            let users = [
                {
                    "_id": "685f2954e8cbd9ad8c0598a1",
                    "active": true,
                    "signup_date": "2023-01-01T00:00:00.000Z",
                    "created": "2025-06-27T23:29:24.858Z",
                    "updated": "2025-06-27T23:29:24.858Z",
                    "__v": 0
                },
                {
                    "_id": "685f29eea70a65148e3c6ae9",
                    "active": true,
                    "signup_date": "2023-01-01T00:00:00.000Z",
                    "created": "2025-06-27T23:31:58.104Z",
                    "updated": "2025-06-27T23:31:58.104Z",
                    "__v": 0
                },
                {
                    "_id": "685f29eea70a65148e3c6aeb",
                    "active": true,
                    "signup_date": "2023-02-01T00:00:00.000Z",
                    "created": "2025-06-27T23:31:58.131Z",
                    "updated": "2025-06-27T23:31:58.131Z",
                    "__v": 0
                },
                {
                    "_id": "685f29eea70a65148e3c6aed",
                    "active": true,
                    "signup_date": "2023-03-01T00:00:00.000Z",
                    "created": "2025-06-27T23:31:58.141Z",
                    "updated": "2025-06-27T23:31:58.141Z",
                    "__v": 0
                }
            ]
            for (let user of users) {
                await models.payment.find({ user: user._id }).then(payments => {
                    result.push(payments);
                });
            }

            res.status(200).json(result)
        } catch (error) {

        }
    });


    app.get("/getPaymentWithUser", async (req, res) => {

        try {
            let paymentId = '685f2a79a70a65148e3c6af7'
            let payment = await models.payment.find({ _id: paymentId }).populate('user');

            res.json(payment)
        } catch (error) { }
    });

    app.get("/getGroupedUserPmts", async (req, res) => {

        try {
            let userIds = ['685f2954e8cbd9ad8c0598a1', '685f29eea70a65148e3c6ae9', '685f29eea70a65148e3c6aeb', '685f2a79a70a65148e3c6af7']
            let result = {};
            let payments = await models.payment.find({ user: { $in: userIds } });

            userIds.map(userId => {
                let paymentsResult = payments.filter(payment => userIds.includes(payment.user.toString()) && userId === payment.user.toString());
                result[userId] = paymentsResult;
            });

            res.json(result)
        } catch (error) { }
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});