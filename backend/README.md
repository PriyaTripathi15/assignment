# Intervue Poll Assignment

A real-time polling system built with React frontend and Node.js backend.

## Features

- **Teacher Role**: Create polls with multiple choice questions and timers
- **Student Role**: Participate in live polls and see real-time results
- **Real-time Updates**: Live results using Socket.IO
- **Responsive Design**: Modern UI with TailwindCSS

## Setup Instructions

### 1. Install Dependencies

```bash
# Install root dependencies (backend)
npm install

# Install frontend dependencies
cd intervue-poll-frontend
npm install
cd ..
```

### 2. Start the Backend Server

```bash
# Start backend server on port 3000
npm run server
```

### 3. Start the Frontend

In a new terminal:

```bash
# Start frontend dev server on port 5173
cd intervue-poll-frontend
npm run dev
```

### 4. Or Run Both Simultaneously

```bash
# Run both frontend and backend
npm run dev
```

## Usage

1. **Open your browser** and go to `http://localhost:5173`
2. **Choose your role**: Teacher or Student
3. **For Teachers**:
   - Enter a question and options
   - Set a timer (30, 60, or 90 seconds)
   - Click "Ask Question" to start the poll
4. **For Students**:
   - Enter your name
   - Wait for the teacher to ask a question
   - Select your answer and submit
   - View real-time results

## API Endpoints

- `POST /teacher-login` - Teacher authentication
- `GET /health` - Server health check

## Socket Events

- `createPoll` - Teacher creates a new poll
- `pollCreated` - Broadcasts new poll to all students
- `submitAnswer` - Student submits an answer
- `pollResults` - Broadcasts updated results to all clients

## File Structure

```
assignment/
├── server.js              # Backend server
├── package.json           # Backend dependencies
├── README.md             # This file
└── intervue-poll-frontend/  # React frontend
    ├── src/
    │   ├── Pages/        # Page components
    │   ├── components/    # Reusable components
    │   └── App.jsx       # Main app component
    └── package.json      # Frontend dependencies
```

## Troubleshooting

- **Port 3000 already in use**: Change the PORT in server.js or kill the process using that port
- **Frontend can't connect**: Make sure the backend server is running on port 3000
- **Socket connection issues**: Check that CORS is properly configured and both servers are running
