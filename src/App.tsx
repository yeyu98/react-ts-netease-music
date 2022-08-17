import request from './services/axios';
import Demo from './components/Demo/Demo';
import styles from './App.less';
import './App.css';

function App() {
  const url = `http://localhost:3000/top/playlist/highquality?before=1503639064232&limit=3`
  request.get(url).then((res: any) => {
    console.log(res)
  })
  return (
    <div className="App">
      <p className={styles['color']}>127439127391289</p>
      <Demo />
    </div>
  );
}

export default App;
