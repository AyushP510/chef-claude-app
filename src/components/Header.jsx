import React from 'react';

import logo from '../assets/chef-claude-icon.png';

export default function Header() {
  const [progress, setProgress] = React.useState(0);

  function getScrollPercent() {
  // Get the vertical scroll position of the document
  const scrollTop = window.scrollY;

  // Get the total height of the scrollable content
  // document.body is used as a fallback
  const docHeight = document.body.offsetHeight;

  // Get the height of the browser viewport
  const winHeight = window.innerHeight;

  // Calculate the scroll percentage. 
  // We subtract the viewport height from the document height because the scrollbar 
  // reaches the bottom when the *top* of the viewport aligns with the bottom of the scrollable area,
  // not the total document height.
  const scrollPercent = scrollTop / (docHeight - winHeight);

  // Round the result to a whole number for easier use
  const scrollPercentRounded = Math.round(scrollPercent * 100);

  return scrollPercentRounded;
}
  window.addEventListener('scroll', () => {
    const newProgress = getScrollPercent();
    setProgress(newProgress);
  });

  return (
    <div className='header'>
      <header>
        <img src={logo} alt="Chef Claude Logo" />
        <h1>Chef Claude</h1>
      </header>
      <progress className="progress-bar" id="file" value={progress} max="100"></progress>
    </div>
  )
}