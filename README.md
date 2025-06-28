# Clerkie Technical Assignment – Side Project

This repository was created as a side project while completing a technical assignment from **Clerkie** as part of their hiring process for a **Software Engineer Internship**.

## 📋 Context

The original assignment was delivered via Coderbyte, but I chose to re-implement the solution in my local development environment. This allowed me to:
- Work more efficiently in my IDE
- Leverage tools like API routing, MongoDB, and Docker
- Debug and visualize my logic more clearly

## ⚙️ How This Project Works

Several core functions from the assignment — such as `getPaymentWithUser` and `getGroupedUserPmts` — are implemented as **API routes** in this application.

This approach allowed me to test and validate the output of each function in isolation, simulating real-world service behavior.

## 🧪 The `solution.js` File

To make this project accessible even without a running MongoDB instance (whether local or via Docker), I included a `solution.js` file. This file gathers the expected output from all required functions so reviewers can easily inspect the results.

> 🔍 If you're cloning this repo and **don't have MongoDB set up**, you can refer to `solution.js` to review the logic and sample outputs.

## 💡 Tech Stack

- Node.js / Express
- MongoDB (optional, can be local or containerized)
- Docker (used in my development setup)

