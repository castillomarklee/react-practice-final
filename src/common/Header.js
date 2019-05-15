import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => (
    // eslint-disable-next-line no-unused-expressions
    <div className="text-center">
    <nav className="navbar navbar-default">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="library" activeClassName="active">Library</Link>
    </nav>
  </div>
);

export default Header;