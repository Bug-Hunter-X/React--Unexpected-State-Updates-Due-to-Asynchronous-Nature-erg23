```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count:', count);
  }, [count]); // This will cause an infinite loop because the effect updates count. 

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1); // This is the culprit. The second state update is ignored by react.
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```