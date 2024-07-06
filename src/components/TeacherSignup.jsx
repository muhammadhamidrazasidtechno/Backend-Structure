import React from 'react';
import '../app/StudentSignup.css'; // Import the CSS file for styling

const TeacherSignup = () => {
  return (
    <div className="signup-container">
      <div className="signup-section">
        <label className="signup-label">Teacher Signup Link</label>
        <p className="signup-text">
          Link:{' '}
          <a
            href="https://links-ehps.onrender.com/teacher/signup"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://links-ehps.onrender.com/teacher/signup
          </a>
        </p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Link Method</label>
        <p className="signup-text">Post</p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Body</label>
        <div className="signup-body">
          <p className="signup-body-item">&quot;username&quot;: &quot;rAZAmuhiuffin&quot;,</p>
          <p className="signup-body-item">&quot;email&quot;: &quot;HAMID@gmail.com&quot;,</p>
          <p className="signup-body-item">&quot;password&quot;: &quot;123456&quot;,</p>
          <p className="signup-body-item">&quot;phone&quot;: &quot;0330271580&quot;,</p>
          <p className="signup-body-item">&quot;cnic&quot;: &quot;42301999434302&quot;,</p>
          <p className="signup-body-item">&quot;lastActivity&quot;: &quot;2024-06-26&quot;</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherSignup;
