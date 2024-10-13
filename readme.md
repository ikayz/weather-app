# Weather Application

This is a full-stack weather application built with a React frontend (using Vite) and a Node.js/Express backend. The application fetches weather data using the Weatherbit API and displays the current weather and a 16-day forecast.

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- WEATHERBIT_API_KEY (obtainable from the Weatherbit API)

## Project Structure

- **frontend:** React app built using Vite.
- **backend:** Node.js/Express server that handles API requests.

## Getting Started

### Backend Setup

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file in the backend directory:**

   ```env
   WEATHERBIT_API_KEY=your_weatherbit_api_key_here
   ```

4. **Run the backend server:**

   ```bash
   npm start
   ```

   The backend server should now be running on http://localhost:3001.

### Frontend Setup

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the frontend application:**

   ```bash
   npm run dev
   ```

   The Vite development server should now be running, and you can access the application at http://localhost:5173.

## How to Use the Application

1. Enter a city name and country code in the input fields.
2. Click on the "Get Weather" button to fetch and display the current weather and 16-day forecast.
3. Use the search history feature to quickly revisit the last 5 searched cities. (Currently has a bug of not displaying the clicked search history)

## Technologies Used

- **Frontend:** React, Vite, Axios
- **Backend:** Node.js, Express, Axios
- **API:** Weatherbit API

## Troubleshooting

- Ensure your `.env` file in the backend contains a valid `WEATHERBIT_API_KEY`.
- Make sure both the frontend and backend servers are running on the correct ports (http://localhost:5173 for frontend and http://localhost:3001 for backend).
- If you encounter CORS issues, ensure the frontend is making requests to the backend on http://localhost:3001.
