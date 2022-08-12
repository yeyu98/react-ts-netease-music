import { useEffect } from 'react';
import './App.css';
import request from './utlis/axios';
import { message, Button } from 'antd';

function App() {
  const url = `http://localhost:3000/top/playlist/highquality?before=1503639064232&limit=3`
  request.get(url).then((res: any) => {
    console.log(res)
  })
  return (
    <div className="App">
      <Button type='primary'>any</Button>
    </div>
  );
}

export default App;
