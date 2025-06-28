// GET /users


[
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

// GET /payments

[
    {
        "_id": "685f2a27a70a65148e3c6aef",
        "name": "Payment A",
        "active": true,
        "amount": 50,
        "date": "2024-01-01T00:00:00.000Z",
        "user": {
            "_id": "685f2954e8cbd9ad8c0598a1",
            "active": true,
            "signup_date": "2023-01-01T00:00:00.000Z",
            "created": "2025-06-27T23:29:24.858Z",
            "updated": "2025-06-27T23:29:24.858Z",
            "__v": 0
        },
        "created": "2025-06-27T23:32:55.737Z",
        "updated": "2025-06-27T23:32:55.737Z",
        "__v": 0
    },
    {
        "_id": "685f2a38a70a65148e3c6af1",
        "name": "Payment B",
        "active": true,
        "amount": 10,
        "date": "2024-01-01T00:00:00.000Z",
        "user": {
            "_id": "685f2954e8cbd9ad8c0598a1",
            "active": true,
            "signup_date": "2023-01-01T00:00:00.000Z",
            "created": "2025-06-27T23:29:24.858Z",
            "updated": "2025-06-27T23:29:24.858Z",
            "__v": 0
        },
        "created": "2025-06-27T23:33:12.982Z",
        "updated": "2025-06-27T23:33:12.982Z",
        "__v": 0
    },
    {
        "_id": "685f2a44a70a65148e3c6af3",
        "name": "Payment C",
        "active": true,
        "amount": 40,
        "date": "2024-01-01T00:00:00.000Z",
        "user": {
            "_id": "685f2954e8cbd9ad8c0598a1",
            "active": true,
            "signup_date": "2023-01-01T00:00:00.000Z",
            "created": "2025-06-27T23:29:24.858Z",
            "updated": "2025-06-27T23:29:24.858Z",
            "__v": 0
        },
        "created": "2025-06-27T23:33:24.936Z",
        "updated": "2025-06-27T23:33:24.936Z",
        "__v": 0
    },
    {
        "_id": "685f2a68a70a65148e3c6af5",
        "name": "Payment C",
        "active": true,
        "amount": 40,
        "date": "2024-01-01T00:00:00.000Z",
        "user": {
            "_id": "685f29eea70a65148e3c6ae9",
            "active": true,
            "signup_date": "2023-01-01T00:00:00.000Z",
            "created": "2025-06-27T23:31:58.104Z",
            "updated": "2025-06-27T23:31:58.104Z",
            "__v": 0
        },
        "created": "2025-06-27T23:34:00.043Z",
        "updated": "2025-06-27T23:34:00.043Z",
        "__v": 0
    },
    {
        "_id": "685f2a79a70a65148e3c6af7",
        "name": "Payment D",
        "active": true,
        "amount": 60,
        "date": "2024-01-01T00:00:00.000Z",
        "user": {
            "_id": "685f29eea70a65148e3c6ae9",
            "active": true,
            "signup_date": "2023-01-01T00:00:00.000Z",
            "created": "2025-06-27T23:31:58.104Z",
            "updated": "2025-06-27T23:31:58.104Z",
            "__v": 0
        },
        "created": "2025-06-27T23:34:17.124Z",
        "updated": "2025-06-27T23:34:17.124Z",
        "__v": 0
    }
]

// GET /pullFirstUser
// It doesn't return an array, I just did it for file safety.

[{
        "_id": "685f29eea70a65148e3c6ae9",
        "active": true,
        "signup_date": "2023-01-01T00:00:00.000Z",
        "created": "2025-06-27T23:31:58.104Z",
        "updated": "2025-06-27T23:31:58.104Z",
        "__v": 0
    }]

// GET /pullPaymentsForUsers

[
    [
        {
            "_id": "685f2a27a70a65148e3c6aef",
            "name": "Payment A",
            "active": true,
            "amount": 50,
            "date": "2024-01-01T00:00:00.000Z",
            "user": "685f2954e8cbd9ad8c0598a1",
            "created": "2025-06-27T23:32:55.737Z",
            "updated": "2025-06-27T23:32:55.737Z",
            "__v": 0
        },
        {
            "_id": "685f2a38a70a65148e3c6af1",
            "name": "Payment B",
            "active": true,
            "amount": 10,
            "date": "2024-01-01T00:00:00.000Z",
            "user": "685f2954e8cbd9ad8c0598a1",
            "created": "2025-06-27T23:33:12.982Z",
            "updated": "2025-06-27T23:33:12.982Z",
            "__v": 0
        },
        {
            "_id": "685f2a44a70a65148e3c6af3",
            "name": "Payment C",
            "active": true,
            "amount": 40,
            "date": "2024-01-01T00:00:00.000Z",
            "user": "685f2954e8cbd9ad8c0598a1",
            "created": "2025-06-27T23:33:24.936Z",
            "updated": "2025-06-27T23:33:24.936Z",
            "__v": 0
        }
    ],
    [
        {
            "_id": "685f2a68a70a65148e3c6af5",
            "name": "Payment C",
            "active": true,
            "amount": 40,
            "date": "2024-01-01T00:00:00.000Z",
            "user": "685f29eea70a65148e3c6ae9",
            "created": "2025-06-27T23:34:00.043Z",
            "updated": "2025-06-27T23:34:00.043Z",
            "__v": 0
        },
        {
            "_id": "685f2a79a70a65148e3c6af7",
            "name": "Payment D",
            "active": true,
            "amount": 60,
            "date": "2024-01-01T00:00:00.000Z",
            "user": "685f29eea70a65148e3c6ae9",
            "created": "2025-06-27T23:34:17.124Z",
            "updated": "2025-06-27T23:34:17.124Z",
            "__v": 0
        }
    ],
    [],
    []
]

// GET /getPaymentWithUser

[
    {
        "_id": "685f2a79a70a65148e3c6af7",
        "name": "Payment D",
        "active": true,
        "amount": 60,
        "date": "2024-01-01T00:00:00.000Z",
        "user": {
            "_id": "685f29eea70a65148e3c6ae9",
            "active": true,
            "signup_date": "2023-01-01T00:00:00.000Z",
            "created": "2025-06-27T23:31:58.104Z",
            "updated": "2025-06-27T23:31:58.104Z",
            "__v": 0
        },
        "created": "2025-06-27T23:34:17.124Z",
        "updated": "2025-06-27T23:34:17.124Z",
        "__v": 0
    }
]

// GET /getGroupedUserPmts

[{
        "685f2954e8cbd9ad8c0598a1": [
            {
                "_id": "685f2a27a70a65148e3c6aef",
                "name": "Payment A",
                "active": true,
                "amount": 50,
                "date": "2024-01-01T00:00:00.000Z",
                "user": "685f2954e8cbd9ad8c0598a1",
                "created": "2025-06-27T23:32:55.737Z",
                "updated": "2025-06-27T23:32:55.737Z",
                "__v": 0
            },
            {
                "_id": "685f2a38a70a65148e3c6af1",
                "name": "Payment B",
                "active": true,
                "amount": 10,
                "date": "2024-01-01T00:00:00.000Z",
                "user": "685f2954e8cbd9ad8c0598a1",
                "created": "2025-06-27T23:33:12.982Z",
                "updated": "2025-06-27T23:33:12.982Z",
                "__v": 0
            },
            {
                "_id": "685f2a44a70a65148e3c6af3",
                "name": "Payment C",
                "active": true,
                "amount": 40,
                "date": "2024-01-01T00:00:00.000Z",
                "user": "685f2954e8cbd9ad8c0598a1",
                "created": "2025-06-27T23:33:24.936Z",
                "updated": "2025-06-27T23:33:24.936Z",
                "__v": 0
            }
        ],
        "685f29eea70a65148e3c6ae9": [
            {
                "_id": "685f2a68a70a65148e3c6af5",
                "name": "Payment C",
                "active": true,
                "amount": 40,
                "date": "2024-01-01T00:00:00.000Z",
                "user": "685f29eea70a65148e3c6ae9",
                "created": "2025-06-27T23:34:00.043Z",
                "updated": "2025-06-27T23:34:00.043Z",
                "__v": 0
            },
            {
                "_id": "685f2a79a70a65148e3c6af7",
                "name": "Payment D",
                "active": true,
                "amount": 60,
                "date": "2024-01-01T00:00:00.000Z",
                "user": "685f29eea70a65148e3c6ae9",
                "created": "2025-06-27T23:34:17.124Z",
                "updated": "2025-06-27T23:34:17.124Z",
                "__v": 0
            }
        ],
        "685f29eea70a65148e3c6aeb": [],
        "685f2a79a70a65148e3c6af7": []
    }

]