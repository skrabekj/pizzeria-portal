import React from 'react';
import {NavLink, Link} from 'react-router-dom';
//import PropTypes from 'prop-types';


const PageNav = () => (
  <nav>
  <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
  <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
  <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</NavLink>
  <NavLink to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active'>Ordering</NavLink>
  <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</NavLink>
  <Link to='/ordering/new' >
    New
  </Link>
  <Link to='/booking/:id' >
    Table Booking
  </Link>
  <Link to='/event/:id' >
    Table events
  </Link>
  </nav>
);

//PageNav.propTypes = {
  //children: PropTypes.node,
//};

export default PageNav;
