import { useEffect } from 'react';

/**
 * Component that fixes Framer Motion animation issues causing content to disappear
 * This should be included in your main App component
 */
const FramerMotionFix = () => {
  useEffect(() => {
    // Ensure content remains visible after animations
    const motionDivs = document.querySelectorAll('div[style*="transform"]');
    
    // Observer to watch for style changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          const target = mutation.target as HTMLElement;
          
          // Prevent any animation from hiding content
          if (target.style.opacity === '0' || target.style.visibility === 'hidden') {
            console.log('Fixing element visibility after animation');
            target.style.opacity = '1';
            target.style.visibility = 'visible';
          }
        }
      });
    });

    // Observe all motion divs
    motionDivs.forEach(div => {
      observer.observe(div, { attributes: true });
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default FramerMotionFix;
