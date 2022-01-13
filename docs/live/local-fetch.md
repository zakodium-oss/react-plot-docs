```jsx live
function Fetch() {
  const [data, setData] = useState({});

  useEffect(async () => {
    const response = await fetch("/data/test.json");
    setData(await response.json());
  }, []);

  return (
    <div>
      {data.message ? (
        <h2>The message from the server is {data.message}</h2>
      ) : (
        ""
      )}
    </div>
  );
}
```
