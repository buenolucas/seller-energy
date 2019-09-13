import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    const { logout, currentUser } = this.props;
    return (
      <header className="header">
          <div className="user-header">
            <div className="user-header__info">
                <span>{currentUser.firstName} {currentUser.lastName}</span>
                <a href="#" onClick={logout}>
                  Logout
                </a>
            </div>
            <div className="user-header__avatar">

            </div>
          </div>
      </header>
    );
  }
}
export default Header;
