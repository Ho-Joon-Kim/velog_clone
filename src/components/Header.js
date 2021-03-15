import { Component } from 'react';
import '../style/Header.css';
import logo from '../image/logo.svg';
import question from '../image/question.svg';

class Header extends Component {

  checkLogin = () => {
    if (window.localStorage.getItem("accessToken") == null){
      return <button class="login">로그인</button>;
    }else{
    console.log(window.localStorage.getItem("accessToken"));
    }
  }

  render() {
    return (
      <header>
        <a class="logo" href="#home">
          <img src={logo} />
        </a>
        <div class="navblock">
          <div class="rgt">
            <a><img class="question" src={question}/></a>
          </div>
          {this.checkLogin()}
        </div>
      </header>
    );
  }
}

export default Header;
