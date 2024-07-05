import React from 'react'
import '../app/StudentSignup.css'; // Import the CSS file for styling

const TeacherLogin = () => {
  return (
    <div className="signup-container">
      <div className="signup-section">
        <label className="signup-label">Student Signup Link</label>
        <p className="signup-text">Link: <a href="https://links-backend-ziof.onrender.com/student/login" className="text-blue-500 hover:underline">https://links-backend-ziof.onrender.com/student/login</a></p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Link Method</label>
        <p className="signup-text">POST</p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Body</label>
        <div className="signup-body">
          <p className="signup-body-item">"password": "123456",</p>
          <p className="signup-body-item">"emailOrCnic":"hr1907469@gmail.com",</p>
        </div>
      </div>
    </div>

  )
}

export default TeacherLogin