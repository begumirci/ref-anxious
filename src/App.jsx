import { useEffect } from 'react';

import { PlaceHolderAPI } from './assets/components/axious';
import { useState } from 'react';

import Ref from './assets/components/ref';

function App() {
  const [selected, setSelected] = useState(1);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    PlaceHolderAPI.get('1').then((response) => setPosts(response));
  }, []);

  return (
    <>
      <Ref />
      <select
        name=''
        id=''
        value={selected}
        onChange={(e) => {
          setSelected(e.target.value);
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
          <option value={number} key={number}>
            Post {number}
          </option>
        ))}
      </select>

      <div key={posts.id} style={{ padding: '10px' }}>
        <span>{posts.id}</span>
        <h1>{posts.title}</h1>
        <h4>{posts.body}</h4>
      </div>
    </>
  );
}

export default App;
