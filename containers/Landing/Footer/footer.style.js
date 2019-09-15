import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  position: relative;
  overflow: hidden;
  background-color: #D6D6D6;
  padding: 40px 0px 0px 0px;
  margin: 0px
  color: #111;
  @media (max-width: 990px) {
    padding: 40px 0 0 0;
  }
  @media (max-width: 767px) {
    padding: 40px 0 0 0;
  }
  @media (max-width: 575px) {
    padding: 30px 0 0 0;
  }


  .footer_social {
    margin-bottom: 10px;
    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
    a {
      svg {
        @media (max-width: 990px) {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
`;

export const Newsletter = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  background: #111;
  border-radius: 6px;
  height: 50px;

  .reusecore__input {
    flex-grow: 1;
    * {
      height: 100%;
    }
    input {
      border: none;
      padding-left: 22px;
      color: #111;
      &:focus {
        outline: none;
      }
    }
  }
  .reusecore__button {
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    font-size: 15px
    color: #fff
  }
`;

export const FooterNav = styled.ul`
  margin: 0;
  padding-top: 10px;
  padding-right: 15px;
  width: 100%;
  height: 50px;
  background-color: #111;
  @media (max-width: 575px) {
    
  }
`;

export const FooterNavItem = styled.li`
  display: inline-block;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }

  a {
    color: #fff;
    font-size: 14px;
    transition: 0.15s ease-in-out;
    &:hover {
      color: #3444f1;
    }
  }
`;
