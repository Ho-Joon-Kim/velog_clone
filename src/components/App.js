import '../style/App.css';
import icon from '../image/1613611386381-69x22.png';

function App() {
  return (
    <div className="App-header">
        <img className="icon" src={ icon } alt = "icon"/>
        <ul>
          <li className="login">로그인</li>
          <li className="find">찾기</li>
        </ul>
    </div>
  );
}

export default App;
