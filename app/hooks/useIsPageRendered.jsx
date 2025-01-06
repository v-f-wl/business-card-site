import { useState, useEffect } from 'react';

const useIsPageRendered = () => {
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    setIsRendered(true);
  }, []);

  return isRendered;
};

export default useIsPageRendered;