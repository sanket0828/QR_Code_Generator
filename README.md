📷 QR Code Generator

A simple Node.js project that takes a URL input, generates its QR code, saves the details to a backend data/ folder, and displays the QR code instantly on the frontend.

✨ Features

🔗 Generate a QR code from any URL

🖼️ Display the QR code instantly on the page

📝 Store the URL in data/message.txt

🗂️ Store the generated QR image in data/qr_img.png

🚀 Lightweight Express backend + clean frontend UI

❌ Backend files are NOT exposed publicly (safer structure)

🧰 Tech Stack

Node.js – JavaScript runtime

Express.js – Web server

qr-image – QR code generator

body-parser – Request parsing

fs – File system handling

path – File path resolver

HTML/CSS/JS – Frontend UI

ES Modules – Modern import syntax

📂 Project Structure
project/
│── index.js
│── package.json
│
├── data/                 ← stores backend files (NOT public)
│   ├── message.txt
│   └── qr_img.png
│
└── public/               ← served to browser
    ├── index.html
    ├── style.css

🛠️ Installation
1. Clone the repository
git clone https://github.com/your-username/qr-code-generator.git
cd qr-code-generator

2. Install dependencies
npm install

▶️ Run the Server
node index.js


Then open your browser and visit:

http://localhost:3000

🔌 API Endpoints
POST /generate

Generates:

data/message.txt → stores the URL

data/qr_img.png → QR code image

GET /qr

Returns the generated QR image so it can be displayed in the browser.

🖥️ Frontend Usage

Enter any URL

Click Generate

The QR code will appear instantly

Backend stores both QR + message in data/

📜 License

This project is licensed under the MIT License.
