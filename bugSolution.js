```javascript
import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      isMounted.current = false; //Prevent state updates after unmount
      console.log('Component unmounted');
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      //Perform operations that depend on count only if the component is still mounted
      console.log('Count updated:', count)
    }
    return () => {
      //Cleanup any timers or subscriptions here
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default MyComponent
```