// ClipboardCopy.js
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

const ClipboardCopy = ({ text }) => {
  const linkRef = useRef(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    const link = linkRef.current.innerText;
    navigator.clipboard.writeText(link);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000); // Reset copy success message after 3 seconds
  };

  return (
    <div className='flex box-box justify-between relative'>
      <a ref={linkRef} href={text} className="text-blue-500 hover:underline hidden">
        {text}
      </a>{' '}
      <FontAwesomeIcon icon={faCopy} onClick={copyToClipboard} className="copy-icon" />
      {copySuccess && <p className="copy-success-message ">Link copied!</p>}
    </div>
    
  );
};

export default ClipboardCopy;
