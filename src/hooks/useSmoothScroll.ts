import { useCallback } from 'react';

const useSmoothScroll = () => {
  const scrollToSection = useCallback((elementId: string): void => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return scrollToSection;
};

export default useSmoothScroll;