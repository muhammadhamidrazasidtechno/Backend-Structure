import React from 'react'

import '../app/StudentSignup.css'; // Import the CSS file for styling

const GetTeacherAssignment = () => {
  return (
    <div className="signup-container">
      <div className="signup-section">
        <label className="signup-label">Student Signup Link</label>
        <p className="signup-text">Link: <a href="https://links-ehps.onrender.com/assignment/get-assignment/668674f32aff4efcec1e31d8" className="text-blue-500 hover:underline">https://links-ehps.onrender.com/assignment/get-assignment/668674f32aff4efcec1e31d8</a></p>
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


export default GetTeacherAssignment