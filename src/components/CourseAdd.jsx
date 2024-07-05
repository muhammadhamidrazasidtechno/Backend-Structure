import React from 'react'
import '../app/StudentSignup.css'; // Import the CSS file for styling

const CourseAdd = () => {
  return (
    <div className="signup-container">
      <div className="signup-section">
        <label className="signup-label">Course Add Link</label>
        <p className="signup-text">Link: <a href="https://links-ehps.onrender.com/course/add" className="text-blue-500 hover:underline">https://links-ehps.onrender.com/course/add</a></p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Link Method</label>
        <p className="signup-text">POST</p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Body</label>
        <div className="signup-body">
          <p className="signup-body-item">"courseName":"Course",</p>
          <p className="signup-body-item">"batch":2,</p>
          <p className="signup-body-item">"teacher":"6684ef2671ef00bbe7fb63d8",</p>
        </div>
      </div>
    </div>
  )
}

export default CourseAdd