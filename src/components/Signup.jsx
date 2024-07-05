import React from 'react';

const Header = ({val}) => {
  const NavItem = ({ children, onClick }) => (
    <div className="cursor-pointer hover:text-gray-300" onClick={onClick}>
      {children}
    </div>
  );
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <nav className="hidden font-bold md:flex  md:justify-between md:flex-wrap md:gap-6">
            <NavItem onClick={() => val('Student Signup')}>Student Signup</NavItem>
            <NavItem onClick={() => val('Student Login')}>Student Login</NavItem>
            <NavItem onClick={() => val('Teacher Login')}>Teacher Login</NavItem>
            <NavItem onClick={() => val('Teacher Signup')}>Teacher Signup</NavItem>
            <NavItem onClick={() => val('Course Add')}>Course Add</NavItem>
            <NavItem onClick={() => val('Enrolled Student Course')}>Enrolled Student Course</NavItem>
            <NavItem onClick={() => val('Get All Courses')}>Get All Courses</NavItem>
            <NavItem onClick={() => val('Get Course Students')}>Get Course Students</NavItem>
            <NavItem onClick={() => val('Get Student All Courses')}>Get Student All Courses</NavItem>
            <NavItem onClick={() => val('Student Assignment Submit')}>Student Assignment Submit</NavItem>
            <NavItem onClick={() => val('Teacher Assignment Submit')}>Teacher Assignment Submit</NavItem>
            <NavItem onClick={() => val('Get Teacher Assignment')}>Get Teacher Assignment</NavItem>
            <NavItem onClick={() => val('Get ALL Teacher Assignment')}>Get ALL Teacher Assignment</NavItem>
            <NavItem onClick={() => val('Delete Teacher Assignment')}>Delete Teacher Assignment</NavItem>
            <NavItem onClick={() => val('Update Teacher Assignment')}>Update Teacher Assignment</NavItem>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
