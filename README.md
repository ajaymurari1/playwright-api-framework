# Playwright API Testing Framework (With JavaScript)

## 🚀 Introduction 
This project is designed to test a Dummy JSON REST API efficiently using Playwright and JavaScript with HTML reports. It ensures all the API functionalities work as expected.

---

## ✅ Features
- CRUD API Tests using DummyJSON Sample API
- Status code, payload, and header validation
- Positive & negative test cases
- HTML report generation

---

## 🛠️ Technologies Used
- **JavaScript** – Core programming language 
- **Playwright** – For API testing 
- **HTML Report** – To show detailed test results 
- **Node.js** & `package.json` – For dependency management 
- **GitHub** – As version control system 

---

## 📂 Project Structure

playwright-api-framework/
 ├── tests/
 │   ├── createProduct.spec.js
 │   ├── readProduct.spec.js
 │   ├── updateProduct.spec.js
 │   ├── deleteProduct.spec.js
 │   └── utils/
 │       └── logger.js
 ├── playwright.config.js
 ├── package.json
 └── README.md
## ⚙️ How to Set Up & Run the Project

### 1️⃣ Prerequisites
Make sure you have:
- Node.js installed
- Visual Studio Code (or any code editor)
- Postman (optional, for manual API testing)

### 2️⃣ Clone the Project
```bash
git clone https://github.com/ajaymurari1/playwright-api-framework.git
cd playwright-api-framework

3️⃣ Install Dependencies

npm install

4️⃣ Run API Tests

npx playwright test

5️⃣ Generate & View Test Reports

npx playwright show-report

This will automatically open the HTML report in your default browser.

---

🔗 API Endpoints Covered

---

🧪 Sample cURL Commands (Manual Testing)

1. Create Product (POST)

Positive Case:

curl -X POST https://dummyjson.com/products/add \
  -H "Content-Type: application/json" \
  -d '{"title": "New Product", "description": "Product description", "price": 100}'

Negative Case (Missing Title):

curl -X POST https://dummyjson.com/products/add \
  -H "Content-Type: application/json" \
  -d '{"description": "Product description", "price": 100}'

---

2. Read Product (GET)

Positive Case:

curl -X GET https://dummyjson.com/products/1

Negative Case (Non-existent ID):

curl -X GET https://dummyjson.com/products/99999

---

3. Update Product (PUT)

Positive Case:

curl -X PUT https://dummyjson.com/products/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Product", "price": 150}'

Negative Case (Invalid ID):

curl -X PUT https://dummyjson.com/products/99999 \
  -H "Content-Type: application/json" \
  -d '{"title": "Non-existent Product"}'

---

4. Delete Product (DELETE)

Positive Case:

curl -X DELETE https://dummyjson.com/products/1

Negative Case:

curl -X DELETE https://dummyjson.com/products/99999

---

📬 How to Use in Postman

1. Open Postman

2. Create a new request

3. Paste the API URL

4. Set method (GET, POST, PUT, DELETE)

5. Under Headers, add: Content-Type: application/json

6. Under Body > Raw > JSON, paste the request payload

7. Click Send



---

🛠️ Troubleshooting

If any tests fail, view the HTML report:

npx playwright show-report