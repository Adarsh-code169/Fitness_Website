🏋️‍♂️ Fitness Slot Booking Web App

A modern web application for booking fitness/gym slots — built for users who want to book workout sessions seamlessly and avoid crowding at gyms.

📌 This project ensures smooth booking, live slot availability, cancellation support, and an admin dashboard for gym owners.

🚀 Features
Category	Features
👤 User Features	Login/Register, Book slots, View live availability, Cancel bookings, Responsive UI
🛠️ Admin Features	Add/manage slots, View bookings, Manage users
⚙️ System	Secure authentication, Realtime updates, Clean UI/UX
📱 Tech	Full-stack app (React + Node + MongoDB)
🧑‍💻 Tech Stack
Layer	Technology
Frontend	React.js, Tailwind/Bootstrap, Axios
Backend	Node.js, Express.js
Database	MongoDB / Mongoose
Auth	JWT / bcrypt
Extras	Dotenv, REST API architecture
📂 Folder Structure
fitness-slot-booking-app/
 ┣ 📁 client     
 ┣ 📁 server   
 ┣ 📄 README.md
 ┗ 📄 package.json

⚙️ Installation & Setup
✅ 1️⃣ Clone Repo
git clone https://github.com/Adarsh-code169/Fitness-Slot-Booking-App.git
cd Fitness-Slot-Booking-App

✅ 2️⃣ Setup Server
cd server
npm install
cp .env.example .env  
npm run dev

✅ 3️⃣ Setup Client
cd ../client
npm install
npm start

🔧 Environment Variables

Create server/.env

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000

📸 Screenshots (Add Later)
Page	Preview
Home	image here
Login/Register	image here
Slot Booking Page	image here
Admin Dashboard	image here
🛣️ API Endpoints
🚪 Auth
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login
🎯 Slots
Method	Endpoint	Description
GET	/api/slots	Fetch slots
POST	/api/slots/book	Book slot
POST	/api/slots/cancel	Cancel slot
🧪 Run Tests
npm run test

🤝 Contributing

Pull requests are welcome!

Steps:

git checkout -b feature-name
git commit -m "Added new feature"
git push origin feature-name


💡 Future Enhancements

✅ Payment gateway (Razorpay)

✅ Calendar UI for bookings

✅ Push notifications

✅ Mobile app (React Native)

✅ AI-based workout suggestions (future)

❤️ Support This Project

If you like this repo:

⭐ Star it on GitHub
🍴 Fork & contribute
🐦 Share with dev friends
