import { useState } from 'react';
import GoogleLoginbutton from "./GoogleLoginbutton";
import "./nav.css"; 

const Header = () => {
  const [log, setLog] = useState(false);
  return (
    <header>
      <nav className="navbar">
        <div> 
          <img src="/img/logo.png" alt="logo" />
        </div>

        <button className="login" onClick={() => setLog(!log)}>
          로그인
        </button>

        {log && <GoogleLoginbutton />} 
      </nav>
    </header>
  )
}

export default Header

//로그인 버튼 -> 구글 로그인 버튼 구현