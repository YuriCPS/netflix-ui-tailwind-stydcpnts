import React from 'react';
import { HeaderContainer, HeaderMenu } from './Header.styles';

function Header() {
  return (
    <HeaderContainer>
      <img
        src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-6.png"
        alt="Netflix"
      />
      <HeaderMenu>Home</HeaderMenu>
      <HeaderMenu>TV Shows</HeaderMenu>
      <HeaderMenu>Movies</HeaderMenu>
      <HeaderMenu>New & Popular</HeaderMenu>
      <HeaderMenu>My List</HeaderMenu>
    </HeaderContainer>
  );
}

export default Header;
