```jsx live
function Fetch() {
  const [data, setData] = useState({});

  useEffect(async () => {
    try {
      const response = await fetch(
        "https://data.cheminfo.org/temp/test.nmrium"
      );
      setData(await response.json());
    } catch (e) {
      setData({ version: "ERROR" });
    }
  }, []);

  return (
    <div>
      <h2>Version of file is {data.version}</h2>
    </div>
  );
}
```
