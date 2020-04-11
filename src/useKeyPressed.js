import { useEffect, useState } from 'react';

// return state as to whether a key included in keysListen is being held down
const useKeyPressed = (keysListen = [], defaultStatus = false) => {
  const [keyDown, setKeyDown] = useState(defaultStatus);

  const downHandler = ({ key }) => {
    if (keysListen.includes(key)) setKeyDown(true);
  };

  const upHandler = ({ key }) => {
    if (keysListen.includes(key)) setKeyDown(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  return [keyDown];
};

export default useKeyPressed;
