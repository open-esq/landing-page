import styled, { createGlobalStyle } from 'styled-components';
import {
  width,
  height,
  color,
  space,
  boxShadow,
  borderRadius,
  themeGet,
} from 'styled-system';

/* agency global style */
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', sans-serif;
  }
  section {
    position: relative;
  }
  /* Drawer menu style */
  .drawer {
    .drawer-content-wrapper {
      @media only screen and (max-width: 480px) {
        width: 320px !important;
      }
      .reusecore-drawer__close {
        position: absolute;
        top: 20px;
        right: 30px;
        > button {
          box-shadow: 0px 8px 38px 0px rgba(16, 172, 132, 0.5);
          transition: all 0.3s ease;
          svg {
            width: 22px;
            height: 22px;
          }
          &:hover {
            opacity: 0.9;
          }
        }
      }
      .scrollspy__menu {
        padding: 60px 71px;
        max-height: 505px;
        overflow-x: auto;
        @media only screen and (max-width: 320px) {
          max-height: 380px;
        }
        li {
          margin: 35px 0;
          &:first-child {
            margin-top: 0;
          }
          &:last-child {
            margin-bottom: 0;
          }
          a {
            display: block;
            color: #20201d;
            font-size: 22px;
            font-weight: 400;
            transition: all 0.3s ease;
            &:hover {
              color: ${themeGet('colors.primary', '#10ac84')};
            }
          }
          &.is-current {
            a {
              color: ${themeGet('colors.primary', '#10ac84')};
              position: relative;
              &:before {
                content: '';
                display: block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: ${themeGet('colors.primary', '#10ac84')};
                position: absolute;
                top: calc(50% - 8px / 2);
                left: -20px;
              }
            }
          }
        }
      }
      .copyright_section {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        padding-left: 71px;
        padding-bottom: 56px;
        background-color: ${themeGet('colors.white', '#ffffff')};
      }
    }
  }
  /* Modal default style */
  button.modalCloseBtn {
    color: ${themeGet('colors.white', '#ffffff')} !important;
    &.alt {
      background-color: ${themeGet('colors.primary', '#10ac84')} !important;
      box-shadow: 0 8px 38px rgba(16, 172, 132, 0.5) !important;
    }
  }
  .reuseModalHolder {
    border: 0 !important;
    background-color: transparent !important;
    &.search-modal,
    &.video-modal {
      background-color: rgba(255, 255, 255, 0.96) !important;
      overflow-y: auto !important;
      .innerRndComponent {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        iframe {
          max-width: 700px !important;
          max-height: 380px !important;
          width: 100% !important;
          height: 100% !important;
          border-radius: 5px !important;
        }
      }
    }
    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.8) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }
    &.video-modal {
      background-color: transparent !important;
    }
    .innerRndComponent {
      padding-right: 0 !important;
    }
  }
  .reuseModalCloseBtn {
    cursor: pointer !important;
  }
`;

/* agency wrapper style */
const AgencyWrapper = styled.div`
  overflow: hidden;
  .reusecore__navbar {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    transition: all 0.3s ease;
    .reusecore__button {
      color: ${themeGet('colors.white', '#ffffff')};
      font-size: 18px;
      @media only screen and (max-width: 480px) {
        color: ${themeGet('colors.primary', '#10ac84')};
      }
    }
    .hamburgMenu__bar {
      margin-left: 8px;
      > span {
        background-color: ${themeGet('colors.white', '#ffffff')};
        @media only screen and (max-width: 480px) {
          background-color: ${themeGet('colors.primary', '#10ac84')};
        }
      }
    }
  }
  .sticky-nav-active {
    .saas_navbar {
      background: #fff;
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 15px 0;
      .main-logo {
        display: none;
        color: white;
      }
      .logo-alt {
        display: block;
        color: black;
        font-weight: bold;
      }
      .main_menu {
        li {
          a {
            color: #000;
            &:hover {
              color: #2aa275;
            }
          }
          &.is-current {
            a {
              color: #2aa275;
            }
          }
        }
      }
    }
    .hamburgMenu__bar {
      > span {
        background: #2aa275;
      }
    }
  }

  .saas_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;
    .logo-alt {
      display: none;
    }
    .main-logo {
      display: block;
      color: white;
      font-weight: bold;
    }
    .main_menu {
      margin-right: 40px;
      li {
        display: inline-block;
        padding-left: 13px;
        padding-right: 13px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: #edcd37;
          }
        }
        a {
          padding: 5px;
          font-size: 16px;
          font-weight: 400;
          color: #fff;
          transition: 0.15s ease-in-out;
          &:hover {
            color: #edcd37;
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button {
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
  /* Style system supported prop */
  ${width}
  ${height}
  ${color}
  ${space}
  ${boxShadow}
  ${borderRadius}
`;

GlobalStyle.displayName = 'GlobalStyle';
AgencyWrapper.displayName = 'AgencyWrapper';

export { GlobalStyle, AgencyWrapper };
