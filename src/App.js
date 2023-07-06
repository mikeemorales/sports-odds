import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  const callBackendAPI = async () => {
    const response = await fetch('/api/odds');
    const data = await response.json();

    if (response.status !== 200) {
      throw Error(data.message);
    }
    return data;
  };

  useEffect(() => {
    callBackendAPI()
        .then(res => setData(res.express))
        .catch(err => console.log(err));
  }, []);

  return (
      <div className="App">
        {data}
      </div>
  );
}

export default App;
