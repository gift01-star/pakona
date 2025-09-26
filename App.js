import React, { useEffect } from 'react';
//import socket from './socket'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './G/myteacherapp/src/pages/Register';
import Login from './G/myteacherapp/src/pages/Login';
import TutorDashboard from './G/myteacherapp/src/pages/TutorDashboard';
import StudentDashboard from './G/myteacherapp/src/pages/StudentDashboard';
import TutorProfile from './G/myteacherapp/src/pages/TutorProfile';
import StudentProfile from './G/myteacherapp/src/pages/StudentProfile';
import BookSession from './G/myteacherapp/src/pages/BookSession';
import TutorSessions from './G/myteacherapp/src/pages/TutorSessions';
import ResetPassword from './G/myteacherapp/src/pages/ResetPassword';
import Payment from './G/myteacherapp/src/pages/Payment';
import Messages from './G/myteacherapp/src/pages/Messages';
import Home from './G/myteacherapp/src/pages/Home';
import TutorSearch from './G/myteacherapp/src/pages/TutorSearch';

function App() {
  useEffect(() => {
    // Handle socket connection
    /* socket.on('connect', () => {
      console.log('Socket connected');
    });

    socket.on('message', (data) => {
      console.log('Message received:', data);
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });

    // Cleanup socket listeners on unmount
    return () => {
      socket.off('connect');
      socket.off('message');
      socket.off('disconnect');
    };*/
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/tutor-dashboard" element={<TutorDashboard />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/tutor-profile" element={<TutorProfile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/book-session" element={<BookSession />} /> 
        <Route path="/tutor-sessions" element={<TutorSessions />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/tutor-search" element={<TutorSearch />} />ss
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




