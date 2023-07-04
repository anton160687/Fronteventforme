import { useState, useEffect } from 'react';

const SCREEN_SM = 576;
const SCREEN_MD = 768;
const SCREEN_LG = 992;
const SCREEN_XL = 1200;
const SCREEN_XXL = 1400;

export const useResize = (callback) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
      const handleResize = (event) => {
        let newWidth = event.target.innerWidth;
        if (width >= SCREEN_XL && newWidth < SCREEN_XL) {
          callback();
        }
        if (width < SCREEN_XL && newWidth >= SCREEN_XL) {
          callback();
        }
        setWidth(newWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }

  }, []);

  const checkSize = {
    isScreenSm: (width >= SCREEN_SM && width < SCREEN_MD),
    isScreenMd: (width >= SCREEN_MD && width < SCREEN_LG) ,
    isScreenLg: (width >= SCREEN_LG && width < SCREEN_XL),
    isScreenXl: (width >= SCREEN_XL && width < SCREEN_XXL),
    isScreenXxl: width >= SCREEN_XXL,
  }

  return checkSize;
};