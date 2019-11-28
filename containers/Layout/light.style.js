import { themeGet } from '@styled-system/theme-get';
import styled, { createGlobalStyle } from '../../styled-components.ts';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Poppins', sans-serif;
    margin-top: 0;
  }
  p{
    font-family: 'Lato', sans-serif;
  }
  .fixed {
    position: fixed;
  }

  section {
    position: relative;
  }
  
  *, ::before, ::after {
    background-repeat: no-repeat;
    box-sizing: border-box;
    }

    .drawer-content-wrapper{
        @media (max-width: 767px) {
        width: 300px!important;
        }
    .drawer-content {
      padding: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 500;
            color: #000;
            position: relative;
            font-family: 'Raleway', sans-serif;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              &:before {
                transform: scaleX(1);
                transform-origin: left center 0;
                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
              }
            }
            &:before{
              content: '';
              position: absolute;
              width: calc(100% - 8px);
              height: 11px;
              background: linear-gradient(to left, #ff5b60, #f29e02);
              bottom: 2px;
              left: -4px;
              z-index: -1;
              transform: scaleX(0);
              transform-origin: right center 0;
              transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
            }
            &.is-current {
              &:before {
                transform: scaleX(1);
                transform-origin: left center 0;
                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
              }
            }
          }
          &.is-current {
            a {
              &:before {
                transform: scaleX(1);
                transform-origin: left center 0;
                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
        font-family: 'Raleway', sans-serif;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: #3444f1;
        transform: rotate(45deg);
        display: block;
      }
    }
  }

`;

export const ContentWrapper = styled.div`
  .menuLeft {
    margin-left: 105px;
  }
  .menuRight {
    margin-left: auto;
  }
  .sticky-nav-active {
    .hosting_navbar {
      background: #fff;
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 15px 0;
      @media (min-width: 1440px) {
        padding: 25px 0;
      }

      .main-logo {
        display: none;
      }
      .logo-alt {
        display: block;
      }
    }
  }
  .portfolio_button {
    border-radius: 0;
    border: 2px solid ${themeGet('colors.borderColor', '#1b1e25')};
    background-color: transparent;
    position: relative;
    min-height: 50px;
    text-transform: initial;
    transition: 0.2s ease-in-out;
    &:before {
      content: '';
      background-color: ${themeGet('colors.primary', '#3444f1')};
      position: absolute;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      display: block;
      z-index: -1;
      top: 8px;
      left: 8px;
      transition: inherit;
    }
    &:hover {
      border-color: transparent;
      &:before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  .hosting_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 35px 0 30px 0;
    @media (max-width: 990px) {
      padding: 30px 0;
    }
    .logo-alt {
      display: none;
    }
    .main_menu {
      margin-right: 40px;
      li {
        display: inline-block;
        padding-left: 30px;
        padding-right: 30px;
        color: #000;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: #000;
            &:after {
              transform: scaleX(1);
              transform-origin: left center 0;
              transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
            }
          }
        }
        a {
          padding: 5px 0;
          font-size: 16px;
          font-weight: 500;
          font-family: 'Poppins', sans-serif;
          color: #15172c;
          position: relative;
          transition: 0.15s ease-in-out;
          &:hover {
            color: #15172c;
            &:after {
              transform: scaleX(1);
              transform-origin: left center 0;
              transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
            }
          }
          &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 9px;
            background: linear-gradient(to left, #ff5b60, #f29e02);
            bottom: 5px;
            left: 6px;
            z-index: -1;
            transform: scaleX(0);
            transform-origin: right center 0;
            transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
          }
          &.is-current {
            &:after {
              transform: scaleX(1);
              transform-origin: left center 0;
              transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
            }
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_social {
      margin-left: 6em;
      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button {
      button {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
        }
      }
    }
  }

  .sticky-nav-active {
    .hosting_navbar {
      .main_menu {
        li {
          a {
            color: #302b4e;
            &:after {
              background: linear-gradient(to left, #ff5b60, #f29e02);
            }
          }
        }
      }
    }
  }
`;

export const PrevButton = styled.div`
  position: relative;
  padding: 18px 10px;
  cursor: pointer;
  &:hover {
    span {
      background: #3444f1;
      @media (min-width: 991px) {
        width: 100px;
      }
    }
  }
  span {
    width: 18px;
    height: 2px;
    background: #d1d3de;
    display: block;
    position: relative;
    transition: 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    &:before,
    &:after {
      content: '';
      display: block;
      height: 2px;
      border-radius: 2px;
      background: inherit;
      position: absolute;
    }
    &:before {
      transform: rotate(-45deg);
      top: -4px;
      left: 0;
      width: 10px;
    }
    &:after {
      transform: rotate(45deg);
      width: 8px;
      bottom: -6px;
      left: 1px;
    }
  }
`;

export const NextButton = styled.div`
  position: relative;
  padding: 18px 10px;
  cursor: pointer;
  &:hover {
    span {
      background: #3444f1;
      @media (min-width: 991px) {
        width: 100px;
      }
    }
  }
  span {
    width: 18px;
    height: 2px;
    background: #d1d3de;
    display: block;
    position: relative;
    transition: 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    &:before,
    &:after {
      content: '';
      display: block;
      height: 2px;
      border-radius: 2px;
      background: inherit;
      position: absolute;
    }
    &:before {
      transform: rotate(45deg);
      top: -4px;
      right: 0;
      width: 10px;
    }
    &:after {
      transform: rotate(-45deg);
      width: 8px;
      bottom: -6px;
      right: 1px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
`;

export const SectionHeader = styled.header`
  text-align: center;
  padding-bottom: 70px;
  @media only screen and (max-width: 1440px) {
    padding-bottom: 56px;
  }
  @media only screen and (max-width: 1200px) {
    padding-bottom: 50px;
  }
  @media only screen and (max-width: 991px) {
    padding-bottom: 40px;
  }
  @media only screen and (max-width: 480px) {
    text-align: left;
  }

  h5 {
    color: ${themeGet('colors.link', '#352FD9')};
    font-size: 16px;
    line-height: 18px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0 0 15px;
    @media only screen and (max-width: 1200px) {
      font-size: 14px;
    }
    @media only screen and (max-width: 480px) {
      font-size: 13px;
    }
  }

  h2 {
    color: ${themeGet('colors.heading', '#191919')};
    font-size: 36px;
    line-height: 54px;
    font-weight: 600;
    margin: 0;
    @media only screen and (max-width: 1440px) {
      font-size: 30px;
      line-height: 46px;
    }
    @media only screen and (max-width: 1200px) {
      font-size: 28px;
      line-height: 42px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 24px;
      line-height: 35px;
    }
  }
`;
