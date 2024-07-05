import React from 'react'
import '../app/StudentSignup.css'; // Import the CSS file for styling

const TeacherAssignmentSubmit = () => {
  return (
    <div className="signup-container">
      <div className="signup-section">
        <label className="signup-label">Student Signup Link</label>
        <p className="signup-text">Link: <a href="https://links-ehps.onrender.com/assignment/post-assignment" className="text-blue-500 hover:underline">https://links-ehps.onrender.com/assignment/post-assignment</a></p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Link Method</label>
        <p className="signup-text">POST</p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Body</label>
        <div className="signup-body">
        <p className="signup-body-item">"description": "description",</p>
          <p className="signup-body-item">"content": "FILE",</p>
          <p className="signup-body-item">"teacherId": "6684ef2671ef00bbe7fb63d8",</p>
          <p className="signup-body-item">"courseId": "6684f4810a09548561220291",</p>
        </div>
      </div>
    </div>
  )
}


export default TeacherAssignmentSubmit