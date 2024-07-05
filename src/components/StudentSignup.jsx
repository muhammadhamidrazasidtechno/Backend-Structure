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
          <div className='box-box'>
          https://links-ehps.onrender.com/student/signup
          <ClipboardCopy text="https://links-ehps.onrender.com/student/signup" />
          </div>
          
        </p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Link Method</label>
        <p className="signup-text">Post</p>
      </div>
      <div className="signup-section">
        <label className="signup-label">Body</label>
        <div className="signup-body flex">
          <div>
            <p className="signup-body-item">"username": "rAZAmuhiuffin",</p>
            <p className="signup-body-item">"email": "HAMID@gmail.com",</p>
            <p className="signup-body-item">"password": "123456",</p>
            <p className="signup-body-item">"phone": "0330271580",</p>
            <p className="signup-body-item">"cnic": "42301999434302",</p>
            <p className="signup-body-item">"lastActivity": "2024-06-26"</p>
          </div>
          <div>
            <ClipboardCopy text='"username": "rAZAmuhiuffin","email": "HAMID@gmail.com","password": "123456","phone": "0330271580","cnic": "42301999434302","lastActivity": "2024-06-26"' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSignup;
