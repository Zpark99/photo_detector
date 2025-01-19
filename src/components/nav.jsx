import "./nav.css"; 

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div> 
          <img src="/img/logo.png" alt="logo" />
        </div>

        <button className="login">로그인</button>
      </nav>
      <hr/>
    </header>
  )
}

export default Header