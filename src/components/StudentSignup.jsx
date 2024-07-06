import React from 'react';
import '../app/StudentSignup.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import ClipboardCopy from './CopyToClipboard';

const StudentSignup = () => {
  return (
    <div className="signup-container">
      <div className="signup-section">
        <label className="signup-label">Student Signup Link</label>
        <p className="signup-text">
          Link:{' '}
          https://links-ehps.onrender.com/student/signup
          <ClipboardCopy text="https://links-ehps.onrender.com/student/signup" />
        </p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Link Method</label>
        <p className="signup-text">POST</p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Body</label>
        <div className="signup-body">
          <div>
            <p className="signup-body-item">&quot;username&quot;: &quot;rAZAmuhiuffin&quot;,</p>
            <p className="signup-body-item">&quot;email&quot;: &quot;HAMID@gmail.com&quot;,</p>
            <p className="signup-body-item">&quot;password&quot;: &quot;123456&quot;,</p>
            <p className="signup-body-item">&quot;phone&quot;: &quot;0330271580&quot;,</p>
            <p className="signup-body-item">&quot;cnic&quot;: &quot;42301999434302&quot;,</p>
            <p className="signup-body-item">&quot;lastActivity&quot;: &quot;2024-06-26&quot;</p>
          </div>
          <div>
            <ClipboardCopy
              text={`&quot;username&quot;: &quot;rAZAmuhiuffin&quot;,&quot;email&quot;: &quot;HAMID@gmail.com&quot;,&quot;password&quot;: &quot;123456&quot;,&quot;phone&quot;: &quot;0330271580&quot;,&quot;cnic&quot;: &quot;42301999434302&quot;,&quot;lastActivity&quot;: &quot;2024-06-26&quot;`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSignup;
