import './Navigation.scss';

// https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp

const Navigation = () => {

  return (
    <div className="navbar">
      <a href="#first">1.</a>
      <div className="dropdown">
        <button className="dropbtn">
          2. <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#link1">Link</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
        3. <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#link2">Link</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
        4. <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#link3">Link</a>
        </div>
      </div>
      <a href="#fifth">5.</a>
      <div className="dropdown">
        <button className="dropbtn">
        6. <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#link4">Link</a>
        </div>
      </div>
      <a href="#seventh">7.</a>
      <div className="dropdown">
        <button className="dropbtn">
        8. <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#link5">Link</a>
        </div>
      </div>
      <a href="#ninth">9.</a>
      <a href="#ninth">10.</a>
    </div>
  );
}

export default Navigation;