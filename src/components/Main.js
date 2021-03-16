import { Component } from 'react';
import '../style/Main.css';
import date from '../image/date.svg';
import trend from '../image/trend.svg';
import dropdown from '../image/dropdown.svg';

class Main extends Component {



  render() {
    return (
      <div class="main">
          <a class="sort" href="/">
          <img class="sortimg" src={trend} />
          트렌딩</a>
          <a class="sort" href="/">
          <img class="sortimg" src={date} />
          최신</a>
        <div>
          <div class="dropdown">
            <img  src={dropdown} /> 
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
