import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  vertical-align: baseline;
  padding: 200px 0 50px;
  @media only screen and (max-width: 1440px) {
    padding: 190px 0 50px;
  }
  @media only screen and (max-width: 1360px) {
    padding: 170px 0 30px;
  }
  @media only screen and (max-width: 991px) {
    padding: 150px 0 10px;
  }
`;

export const SectionHeader = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 90px;
  @media only screen and (max-width: 1440px) {
    margin-bottom: 70px;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 54px;
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: self-start;
  }
`;

export const FeaturedArea = styled.div`
  width: 50%;
  display: inline-block;
  position: sticky;
  top: 160px;
  max-width: 810px;
  margin: 0px;
  //padding: 130px 0px 25px;
  .featured_post {
    width: 98%;
  }
`;

export const TitleArea = styled.div`
  max-width: 631px;
  @media only screen and (max-width: 991px) {
    max-width: 400px;
  }

  h2 {
    font-size: 50px;
    font-weight: 300;
    @media only screen and (max-width: 1440px) {
      font-size: 36px;
      margin-bottom: 15px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 34px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 30px;
      margin-bottom: 10px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 28px;
    }
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 40px;
  margin-bottom: 0;
  @media only screen and (max-width: 1440px) {
    font-size: 16px;
    line-height: 32px;
  }
  @media only screen and (max-width: 1360px) {
    font-size: 15px;
    line-height: 30px;
  }
  @media only screen and (max-width: 991px) {
    font-size: 15px;
    line-height: 28px;
  }

  .link {
    color: ${themeGet('colors.secondary', '#D50032')};
    text-decoration: underline;
    margin-left: 5px;
  }
`;

export const LinkArea = styled.div`
  .text__btn {
    display: inline-flex;
    align-items: center;
    color: ${themeGet('colors.secondary', '#D50032')};
    font-size: 17px;
    line-height: 28px;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 15px;
    }
    @media only screen and (max-width: 480px) {
      margin: 10px 0 0;
    }

    .arrow {
      width: 60px;
      height: 2px;
      border-radius: 4px;
      margin-left: 26px;
      position: relative;
      background-color: ${themeGet('colors.secondary', '#D50032')};
      @media only screen and (max-width: 1440px) {
        width: 50px;
        margin-left: 20px;
      }
      @media only screen and (max-width: 1360px) {
        width: 35px;
        margin-left: 15px;
      }

      &::before,
      &::after {
        content: '';
        display: block;
        width: 14px;
        height: 2px;
        border-radius: 4px;
        background-color: ${themeGet('colors.secondary', '#D50032')};
        position: absolute;
        right: 0;
        z-index: 1;
        transition: all 0.3s ease;
      }

      &::before {
        transform: rotate(42deg);
        transform-origin: top right;
      }

      &::after {
        transform: rotate(-42deg);
        transform-origin: 14px 7px;
        width: 11px;
      }
    }

    &:hover {
      .arrow {
        &::before {
          width: 11px;
          transform-origin: 15px -3px;
        }

        &::after {
          transform-origin: top right;
          width: 14px;
        }
      }
    }
  }
`;

export const PostArea = styled.div`
  float: right;
  width: 45%;
  display: inline-block;
  vertical-align: top;
  margin-left: auto;

  .blog_post {
    position: relative;
    display: flex;
    // width: calc(50% - 100px);
    margin: 0 -50px 30px 0px;
    overflow: hidden;
    // border-radius: 10px;
    box-shadow: 0 0 100px rgba(175, 182, 194, 0.2);
    background-color: ${themeGet('colors.white', '#ffffff')};
    @media only screen and (max-width: 1440px) {
      // width: calc(50% - 70px);
      margin: 0 35px 30px 0px;
    }
    @media only screen and (max-width: 1360px) {
      // width: calc(50% - 60px);
      margin: 0 30px 30px;
    }
    @media only screen and (max-width: 991px) {
      // width: calc(50% - 40px);
      margin: 0 20px 30px;
    }
    @media only screen and (max-width: 667px) {
      width: 100%;
    }
    
    // a {
    //   position: relative;
    //   display: inline-block;
    //   width: 28%;
    //   vertical-align: top;
    //   overflow: hidden;
    // }

    .thumbnail {
      img {
        width: 100%;
        object-fit: cover;
      }
    }

    .text {
      display: inline-block;
      width: 67%;
      max-width: 350px;
      margin: 0px 0px 0px 5%;
      text-decoration: inherit;

      h3 {
        letter-spacing: 0.2px;
        color: rgb(0, 0, 0);
        cursor: pointer;
        font: 500 20px/28px Eina03, sans-serif;
        margin: 0px;
        transition: all 0.05s ease-in-out;
        position: relative;
        &:before,
        &:after {
          content: "";
          position: absolute;
          bottom: -10px;
          width: 0px;
          height: 5px;
          margin: 5px 0 0;
          transition: all 0.05s ease-in-out;
          transition-duration: 0.75s;
          opacity: 0;
          background-color: darken(orange,5%);
          left: 0;
        }
      
      }

      h5 {
        color: rgb(255, 51, 102);
        text-transform: uppercase;
        z-index: 10;
        position: relative;
        cursor: pointer;
        display: inline-block;
        font: bold 10px/12px "Maison Neue", sans-serif;
        padding: 0px 0px 12px;
        &:hover {
          opacity: 1;
          color: rgb(255, 51, 102);
          text-decoration: underline !important;
        }
      }

      h6 {
        color: rgb(153, 153, 153);
        text-transform: uppercase;
        z-index: 10;
        position: relative;
        cursor: pointer;
        display: inline-block;
        font: bold 10px/24px "Maison Neue", sans-serif;
        padding: 12px 0px;
        &:hover {
          opacity: 1;
          color: rgb(153, 153, 153);
          text-decoration: underline !important;
        }
      }
    }
    .hover-line {
      background-image: linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%);
      background-size: 0px 2px;
      background-position: 0px 95%;
      transition: background-size 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
      padding: 0.1% 0px;
    }

    .content {
      padding: 42px 50px 50px;
      @media only screen and (max-width: 1360px) {
        padding: 30px 40px 45px;
      }
      @media only screen and (max-width: 991px) {
        padding: 20px 30px 35px;
      }

      // .title {
      //   color: ${themeGet('colors.heading', '#060F1E')};
      //   font-size: 24px;
      //   line-height: 40px;
      //   font-weight: 400;
      //   margin: 0 0 24px;
      //   @media only screen and (max-width: 1440px) {
      //     font-size: 22px;
      //     line-height: 36px;
      //   }
      //   @media only screen and (max-width: 1360px) {
      //     font-size: 20px;
      //     line-height: 34px;
      //   }
      //   @media only screen and (max-width: 991px) {
      //     font-size: 18px;
      //     line-height: 30px;
      //     margin: 0 0 15px;
      //   }
      // }

      .excerpt {
        font-size: 18px;
        line-height: 32px;
        margin: 0 0 27px;
        @media only screen and (max-width: 1600px) {
          font-size: 17px;
          line-height: 28px;
        }
        @media only screen and (max-width: 1440px) {
          font-size: 16px;
        }
        @media only screen and (max-width: 1360px) {
          font-size: 15px;
        }
        @media only screen and (max-width: 991px) {
          margin-bottom: 20px;
        }
      }
    }

    &:nth-child(2) {
      .content {
        .title {
          padding-right: 78px;
          @media only screen and (max-width: 991px) {
            padding-right: 0;
          }
        }
      }
    }

    .learn_more {
      padding-top: 14px;

      .learn__more-btn {
        &::before {
          background-color: ${themeGet(
            'colors.primary2',
            'rgba(252, 242, 43, 0.25)'
          )};
        }
      }
    }
    blog_post > a {
      position: relative;
      display: inline-block;
      width: 28%;
      vertical-align: top;
      overflow: hidden;
    }
  }
`;

export default SectionWrapper;
