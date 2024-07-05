import React from 'react'
import '../app/StudentSignup.css'; // Import the CSS file for styling

const DeleteTeacherAssignment = () => {
  return (
    <div className="signup-container">
      <div className="signup-section">
        <label className="signup-label">Student Signup Link</label>
        <p className="signup-text">Link: <a href="https://links-ehps.onrender.com/assignment/delete/6687c6348bdb45627c5bacfa" className="text-blue-500 hover:underline">https://links-ehps.onrender.com/assignment/delete/6687c6348bdb45627c5bacfa</a></p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Link Method</label>
        <p className="signup-text">GET</p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Body</label>
        <div className="signup-body">
          GET REQUEST
        </div>
      </div>
    </div>
  )
}

export default DeleteTeacherAssignment