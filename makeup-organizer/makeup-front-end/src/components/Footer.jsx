import React, { Component } from "react";
import styled from "styled-components";

export default class Footer extends Component {
  render() {
    const Footer = styled.footer`
      display: flex;
      justify-content: space-between;
    `;
    const FooterSpiel = styled.p`
      font-style: italic;
    `;
    const HoverLink = styled.a`
      color: #4f4846;
      text-decoration: none;
      :hover {
        color: #ddaf94;
        cursor: pointer;
      }
    `;
    return (
      <Footer id="footer">
        <FooterSpiel className="trademark">
          2020 © All Right Reserved
        </FooterSpiel>
        <FooterSpiel className="credit">
          Coded by{" "}
          <HoverLink
            className="linkedIn-link"
            href="https://www.linkedin.com/in/fabiolampina/"
            target="_blank"
          >
            Fabiola Pina
          </HoverLink>
        </FooterSpiel>
      </Footer>
    );
  }
}
