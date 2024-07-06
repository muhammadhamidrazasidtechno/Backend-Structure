import React from 'react';
import '../app/StudentSignup.css'; // Assuming this file contains necessary styles

const CourseAdd = () => {
  return (
    <div className="signup-container">
      <div className="signup-section">
        <label className="signup-label">Course Add Link</label>
        <p className="signup-text">Link: <a
          href="https://links-ehps.onrender.com/course/add"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://links-ehps.onrender.com/course/add
        </a></p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Link Method</label>
        <p className="signup-text">POST</p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Body</label>
        <div className="signup-body">
          <p className="signup-body-item">&quot;courseName&quot;:&quot;Course&quot;,</p>
          <p className="signup-body-item">&quot;batch&quot;:2,</p>
        </div>
      </div>
    </div>
  );
};

export default CourseAdd;
