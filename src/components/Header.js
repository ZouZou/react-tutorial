import reactlogo from "../images/react-logo.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={reactlogo} className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
