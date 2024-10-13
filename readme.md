# Weather Application

This is a full-stack weather application built with a React frontend (using Vite) and a Node.js/Express backend. The application fetches weather data using the Weatherbit API and displays the current weather and a 16-day forecast.

## Prerequisites

Node.js (version 14 or higher)
npm or yarn
WEATHERBIT_API_KEY (obtainable from the Weatherbit API)
Project Structure
frontend: React app built using Vite.
backend: Node.js/Express server that handles API requests.
Getting Started
Backend Setup
Navigate to the backend directory:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the backend directory:

In the .env file, add your Weatherbit API key like this:

env
Copy code
WEATHERBIT_API_KEY=your_weatherbit_api_key_here
Run the backend server:

bash
Copy code
npm start
The backend server should now be running on http://localhost:3001.

Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Run the frontend application:

bash
Copy code
npm run dev
The Vite development server should now be running, and you can access the application at http://localhost:5173.

How to Use the Application
Enter a city name and country code in the input fields.
Click on the "Get Weather" button to fetch and display the current weather and 16-day forecast.
Use the search history feature to quickly revisit the last 5 searched cities.
Technologies Used
Frontend: React, Vite, Axios
Backend: Node.js, Express, Axios
API: Weatherbit API
Troubleshooting
Ensure your .env file in the backend contains a valid WEATHERBIT_API_KEY.
Make sure both the frontend and backend servers are running on the correct ports (http://localhost:5173 for frontend and http://localhost:3001 for backend).
If you encounter CORS issues, ensure the frontend is making requests to the backend on http://localhost:3001.
