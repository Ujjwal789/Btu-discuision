🎓 BTU Page – Discussion Platform for Engineering Students

BTU Page is a real-time discussion platform for engineering students to collaborate on projects, discuss courses, and share knowledge in a secure and fast environment.

✨ Features

💬 Instant Messaging: Real-time discussions on courses and projects

🔒 Secure Login: User authentication with JWT

⚡ Scalable: Supports multiple users simultaneously

🌐 Cross-Platform: Accessible via web and mobile

🧑‍🎓 Peer Learning: Solve problems and share resources with classmates

🎯 Objectives

Build a real-time chat platform for engineering students

Use React.js for the front-end

Use Node.js and Express.js for the back-end

Implement WebSocket (Gstrm.io) for real-time messaging

Ensure secure user authentication

🛠 Tech Stack
Technology	Purpose

React.js	Frontend UI framework

Node.js / Express.js	Backend server and API routes

WebSocket (Gstrm.io)	Real-time messaging

MongoDB	Database for users and chat history

JWT	Secure authentication

Vercel /	Hosting 

⚡ Installation

Clone the repository:

git clone https://github.com/yourusername/btu-page.git
cd btu-page


Install dependencies:

npm install


Create .env file in the root folder:

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret


Run the development server:

npm run dev


Visit: http://localhost:3000

🖥 Usage

Register or login securely

Join course or project discussion channels

Chat in real-time with classmates

Share resources, files, or project updates

🚀 Deployment

Vercel or Heroku can host both frontend and backend

Add environment variables in hosting platform dashboard

Deploy and enjoy real-time discussions anywhere

🤝 Contributing

Fork the repository

Create a branch: git checkout -b feature-name

Commit your changes: git commit -m "Add feature"

Push to your branch: git push origin feature-name

Open a pull request

📂 Folder Structure
├── public/         # Static assets

├── src/

│   ├── components/ # Reusable React components

│   ├── pages/      # React pages and routes

│   ├── api/        # Backend API routes (Express.js)

├── .env            # Environment variables (not committed)

├── package.json    # Dependencies & scripts

📄 License

This project is licensed under the MIT License.

