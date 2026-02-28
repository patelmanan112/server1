# 📊 State Statistics Management API

A complete RESTful API built using **Node.js** and **Express.js** to manage statistical data of Indian states using an in-memory JSON array.

---

## 🚀 Project Objective

This project demonstrates:

- REST Architecture
- Proper HTTP Methods (GET, POST, PUT, PATCH, DELETE)
- Route Parameters
- Difference between PUT and PATCH
- Data manipulation using arrays
- Proper HTTP Status Codes
- Resource deletion logic

⚠️ No database used  
⚠️ No authentication  
⚠️ No external validation libraries  

All data is stored in memory.

---

## 🛠 Tech Stack

- Node.js
- Express.js
- CORS
- JavaScript (ES6)

---

## 📂 Project Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/state-statistics-api.git
cd state-statistics-api




📌 API Routes
🟢 GET Routes
1. GET /states

Returns all states

Status: 200

2. GET /states/:id

Returns state by ID

200 if found

404 if not found

3. GET /states/highest-gdp

Returns state with highest GDP

Status: 200

🟡 POST Route
4. POST /states

Creates a new state

Auto-generates ID

Status: 201

🔵 PUT Routes (Full Replacement)
5. PUT /states/:id

Replaces entire state (except id)

200 if found

404 if not found

6. PUT /states/:id/budget

Replaces annualBudget

Status: 200

7. PUT /states/:id/population

Replaces population

Status: 200

🟣 PATCH Routes (Partial Update)
8. PATCH /states/:id/literacy

Updates literacyRate only

Status: 200

9. PATCH /states/:id/gdp

Updates gdp only

Status: 200

10. PATCH /states/:id

Updates provided fields only

Status: 200

🔴 DELETE Routes
11. DELETE /states/:id

Deletes state by ID

204 if deleted

404 if not found

12. DELETE /states/name/:stateName

Deletes state by name (case-insensitive)

204 if deleted

404 if not found

13. DELETE /states/low-literacy/:percentage

Deletes states where literacyRate < given percentage

Returns deletedCount

Status: 200