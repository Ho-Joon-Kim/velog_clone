import { Component } from 'react';
import '../style/Main.css';
import date from '../image/date.svg';
import trend from '../image/trend.svg';
import dropdown from '../image/dropdown.svg';

class Main extends Component {
  state = { showMenu: false };

  constructor() {
    super();
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  async showMenu(event) {

    if (this.state.showMenu === false) {
      await this.setState({ showMenu: true });
    }else if(this.state.showMenu === true){
      await this.setState({ showMenu: false });
    }/*
    await this.setState({ showMenu: true }, async () => {
      await document.addEventListener('click', this.closeMenu);
      console.log(this.state.showMenu);
    });*/
  }
  
  async closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      await this.setState({ showMenu: false }, async () => {
        document.removeEventListener('click', this.closeMenu);
      console.log(this.state.showMenu);

      });
    }
  }


  render() {
    return (
      <div class="main">
        <div class="container">
          <a class="sort" href="/">
          <img class="sortimg" src={trend} />
          트렌딩</a>
          <a class="sort" href="/trend">
          <img class="sortimg" src={date} />
          최신</a>
          <div style={{left:'0%'}} class="bar"/>
        </div>

        <div>
          <div class="dropdown" onClick={this.showMenu}> <img src={dropdown}/> </div>
          { this.state.showMenu ? (<div class="dropdownmenu" ref={async (element)  => { this.dropdownMenu = element;}}>
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
