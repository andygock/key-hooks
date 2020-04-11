import { useEffect, useState } from 'react';

// keys included in keysListen can be used to toggle a state, returned as [keysStatus]
const useKeyToggle = (keysListenParam = [], defaultStatus = false) => {
  const [keyStatus, setKeyStatus] = useState(defaultStatus);

  const keysListen = Array.isArray(keysListenParam)
    ? keysListenParam
    : [keysListenParam];

  const downHandler = ({ key }) => {
    if (keysListen.includes(key)) setKeyStatus((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []);

  return [keyStatus];
};

export default useKeyToggle;
