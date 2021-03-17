import { Component } from 'react';
import '../style/Main.css';
import date from '../image/date.svg';
import trend from '../image/trend.svg';
import dropdown from '../image/dropdown.svg';

class Main extends Component {
  state = { showMenu: true };

  constructor() {
    super();
    
    this.showMenu = this.showMenu.bind(this);
  }
  

  showMenu(event) {
    event.preventDefault();
    if(this.state.showMenu){
      this.setState({ showMenu: false });
    }else{
      this.setState({ showMenu: true });
    }
  }


  render() {
    return (
      <div class="main">
        <a class="sort" href="/">
        <img class="sortimg" src={trend} />
        트렌딩</a>
        <a class="sort" href="/trend">
        <img class="sortimg" src={date} />
        최신</a>
        <div>
        <div class="dropdown" onClick={this.showMenu} > <img src={dropdown}/> </div>
        { this.state.showMenu ? (<div class="dropdownmenu" ref={(element) => { this.dropdownMenu = element;}}>
          <button> Menu item 1 </button>
          <button> Menu item 2 </button>
          <button> Menu item 3 </button>
          </div>) : ( null )
        }
      </div>
        </div>

    );
  }
}

export default Main;
