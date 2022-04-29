import React from 'react';
import { FooterContainer, FooterText, FooterImage } from './Footer.styles';

function Footer() {
  return (
    <FooterContainer>
      <FooterText>Netflix UI with Tailwind + styled-components by YuriCPS</FooterText>
      <FooterText>This project uses The Movie Database(TMDb) API</FooterText>
      <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
        <FooterImage src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg" alt="The Movie Database" width={250} />
      </a>
    </FooterContainer>
  );
}

export default Footer;
