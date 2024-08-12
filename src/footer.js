const Footer = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-bottom">
      <div className="container">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#aboutus">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#products">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contactus">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
