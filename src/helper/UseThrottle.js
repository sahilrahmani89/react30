import React,{useEffect,useState} from 'react'

function throttle(callback, delay) {
    let lastCall = 0;
  
    return function () {
      const now = Date.now();
      if (now - lastCall >= delay) {
        callback();
        lastCall = now;
      }
    };
  }

const UseThrottle = (callback, delay) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [lastCall,setLastCall] = useState(0)
   

  useEffect(() => {
    const handleResize = () => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        setWidth(window.innerWidth)
        callback();
        setLastCall(now);
       
      }
    };

    const throttledResize = throttle(handleResize, delay);

    window.addEventListener("resize", throttledResize);

    return () => {
      window.removeEventListener("resize", throttledResize);
    };
  }, [callback, delay]);
  
 
console.log('width',width)
  return width;
}

export default UseThrottle