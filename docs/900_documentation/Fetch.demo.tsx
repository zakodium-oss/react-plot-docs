import React, { useEffect, useState } from 'react';

export default function Fetch() {
  const [data, setData] = useState({ version: '' });

  useEffect(() => {
    fetch('https://data.cheminfo.org/temp/test.nmrium')
      .then((response) => {
        return response.json().then(setData);
      })
      .catch((e) => {
        setData({ version: 'ERROR' });
      });
  }, []);

  return (
    <div>
      <h2>Version of file is {data.version}</h2>
    </div>
  );
}
