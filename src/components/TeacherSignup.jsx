import React from 'react'
import '../app/StudentSignup.css'; // Import the CSS file for styling

const TeacherSignup = () => {
  return (
    <div className="signup-container">
      <div className="signup-section">
        <label className="signup-label">Student Signup Link</label>
        <p className="signup-text">Link: <a href="https://links-ehps.onrender.com/teacher/signup" className="text-blue-500 hover:underline">https://links-ehps.onrender.com/teacher/signup</a></p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Link Method</label>
        <p className="signup-text">Post</p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Body</label>
        <div className="signup-body">
          <p className="signup-body-item">"username": "rAZAmuhiuffin",</p>
          <p className="signup-body-item">"email": "HAMID@gmail.com",</p>
          <p className="signup-body-item">"password": "123456",</p>
          <p className="signup-body-item">"phone": "0330271580",</p>
          <p className="signup-body-item">"cnic": "42301999434302",</p>
          <p className="signup-body-item">"lastActivity": "2024-06-26"</p>
        </div>
      </div>
    </div>
  )
}

export default TeacherSignup