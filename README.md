
# Playwright API Testing Framework (With JavaScript)

🚀 Introduction
Playwright API Automation Framework! This project is designed to test a Dummy  Json REST API efficiently using Playwright and JavaScript with html Report. It ensures all the API functionalities work as expected.

## Features

- CRUD API Tests using DummyJSON  Sample API
- Status code, payload, and header validation
- Positive & negative test cases
- HTML report generation

🛠️ Technologies Used
JAVA Script – Core programming language.
Playwright – For API testing.
Html report – To Show Detailed Report.
Node and package.json – For dependency management.
Github – As a source Control.

📂 Project Structure
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


🔧 How to Set Up & Run the Project (Setup Instrctions)

1️⃣ Prerequisites
Before you start, make sure you have:

Nodejs install on your System
Visual Studio Code as IDE
Postman (Optional, for manual testing)

2️⃣ Clone or Create the Project
If you are cloning an existing repository:

git clone <repository-url>
cd PlaYWRIGHT-API-FRAMEWORK

3️⃣ Open terminal and type command npm install

4️⃣ Run API Tests
To execute all tests using command line, run:

npx playwright test  

5️⃣ Generate & View Test Reports
To generate a detailed test report, run:

npx playwright show-report
Once completed, reports will be open automatically on your chrome browser.


🔗 API Endpoints
Here are the API endpoints tested in this framework:

Method	Endpoint	       Description
POST	   /products/add	 Add new Product
DELETE	/products/1	    Delete Product By id
GET	   /products/1	    Get product By id
PUT	   /products/1	    Update product By id

📝 Running API Requests Manually
Want to test the API outside of the framework? Use the following cURL commands:

1. Create (Add )Product (POST)

Positive Case

curl -X POST https://dummyjson.com/products/add \
  -H "Content-Type: application/json" \
  -d '{"title": "New Product", "description": "Product description", "price": 100}'

Negative Case (missing title)

curl -X POST https://dummyjson.com/products/add \
  -H "Content-Type: application/json" \
  -d '{"description": "Product description", "price": 100}'


---

2. Read Product (GET)

Positive Case

curl -X GET https://dummyjson.com/products/1

Negative Case (non-existent product)

curl -X GET https://dummyjson.com/products/99999


---

3. Update Product (PUT)

Positive Case

curl -X PUT https://dummyjson.com/products/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Product", "price": 150}'

Negative Case (invalid ID)

curl -X PUT https://dummyjson.com/products/99999 \
  -H "Content-Type: application/json" \
  -d '{"title": "Non-existent Product"}'


---

4. Delete Product (DELETE)

Positive Case

curl -X DELETE https://dummyjson.com/products/1

Negative Case (non-existent product)

curl -X DELETE https://dummyjson.com/products/99999


---

How to Use in Postman

1. Open Postman.


2. Create a new request.


3. Paste the URL from the cURL into the address bar.


4. Set the method (GET, POST, PUT, DELETE).


5. Go to Headers tab: Add Content-Type: application/json if needed.


6. Go to Body > Raw > JSON: Paste the JSON body where applicable.


7. Hit Send!


🛠️ Troubleshooting
If tests fail, check the logs in:
npx playwright show-report