import { useState, useEffect } from 'react';

function Delayed({ children, waitBeforeShow = 5000 }) {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  return isShown ? children : null;
}

export default Delayed;
