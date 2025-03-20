
import { useEffect } from 'react';

/**
 * Component that fixes Framer Motion animation issues causing content to disappear
 * This should be included in your main App component
 */
const FramerMotionFix = () => {
  useEffect(() => {
    // Create a MutationObserver to watch for style changes in the DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          const target = mutation.target as HTMLElement;
          
          // Prevent any animation from hiding content by ensuring visibility and opacity
          if (target.style.opacity === '0' || parseFloat(target.style.opacity) < 0.1 || 
              target.style.visibility === 'hidden') {
            console.log('Fixing element visibility after animation');
            // Force the element to be visible after animation
            target.style.opacity = '1';
            target.style.visibility = 'visible';
          }
        }
      });
    });

    // Watch for all animation-related changes in the document
    const observeAllAnimatedElements = () => {
      // Target motion divs and any elements that might be animated
      const animatedElements = document.querySelectorAll('div[style*="transform"], div[style*="opacity"], div[style*="animation"]');
      
      animatedElements.forEach(element => {
        observer.observe(element, { 
          attributes: true,
          attributeFilter: ['style']
        });
      });
    };

    // Initial observation
    observeAllAnimatedElements();

    // Set up a periodic check to catch new elements that might be added dynamically
    const intervalId = setInterval(observeAllAnimatedElements, 1000);

    return () => {
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, []);

  return null;
};

export default FramerMotionFix;
