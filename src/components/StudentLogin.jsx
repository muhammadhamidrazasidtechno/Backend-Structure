import React from 'react';
import '../app/StudentSignup.css'; // Import the CSS file for styling

const StudentLogin = () => {
  return (
    <div className="signup-container">
      <div className="signup-section">
        <label className="signup-label">Student Signup Link</label>
        <p className="signup-text">Link: <a href="https://links-ehps.onrender.com/student/login" className="text-blue-500 hover:underline">https://links-ehps.onrender.com/student/login</a></p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Link Method</label>
        <p className="signup-text">PUT</p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Body</label>
        <div className="signup-body">
          <p className="signup-body-item">&quot;password&quot;: &quot;123456&quot;,</p>
          <p className="signup-body-item">&nbsp;&nbsp;&quot;emailOrCnic&quot;: &quot;hr1907469@gmail.com&quot;,</p>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
