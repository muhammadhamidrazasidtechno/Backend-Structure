import React from 'react';
import '../app/StudentSignup.css'; // Import the CSS file for styling

const UpdateTeacherAssignment = () => {
  return (
    <div className="signup-container">
      <div className="signup-section">
        <label className="signup-label">Update Teacher Assignment Link</label>
        <p className="signup-text">
          Link:{' '}
          <a
            href="https://links-ehps.onrender.com/assignment/update-assignment/668674f32aff4efcec1e31d8"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://links-ehps.onrender.com/assignment/update-assignment/668674f32aff4efcec1e31d8
          </a>
        </p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Link Method</label>
        <p className="signup-text">POST</p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Body</label>
        <div className="signup-body">
          <p className="signup-body-item">&quot;content&quot;: &quot;FILE&quot;,</p>
          <p className="signup-body-item">&quot;description&quot;: &quot;description&quot;,</p>
          <p className="signup-body-item">&quot;teacherId&quot;: &quot;6684ef2671ef00bbe7fb63d8&quot;,</p>
          <p className="signup-body-item">&quot;courseId&quot;: &quot;6684f4810a09548561220291&quot;,</p>
        </div>
      </div>
    </div>
  );
};

export default UpdateTeacherAssignment;
