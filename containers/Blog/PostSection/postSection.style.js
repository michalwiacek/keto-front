import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  vertical-align: baseline;
  padding: 110px 0 50px;
  max-width: 100vw;
  margin: 0px auto 60px;
  @media only screen and (max-width: 1440px) {
    padding: 100px 0 50px;
    flex-direction: column;
  }
  @media only screen and (max-width: 1360px) {
    padding: 120px 0 30px;
  }
  @media only screen and (max-width: 991px) {
    padding: 150px 0 10px;
  }
`;

export const HeaderArea = styled.section`
  display: flex;
  .hero-container {
    display: flex;
    flex-direction: row;
    width: calc(100% - 120px);
    @media screen and (max-width: 720px) {
      width: calc(100% - 32px);
      display: block;
      flex-direction: column;
    }
    .image-wrapper {
      width: 42%;
      transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
      @media screen and (max-width: 1620px) {
        width: 50%;
      }
      @media screen and (max-width: 720px) {
        width: 100%;
      }
      .mainImage {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: translate3d(0px, 0px, 0px) scale(1);
        transition: transform 0.5s ease-out 0s;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 720px) {
        width: 100%;
      }
      .copy-container {
        vertical-align: top;
        background-color: rgb(249, 249, 249);
        position: relative;
        z-index: -1;
        min-height: 70%;
        max-height: 88%;
        box-sizing: border-box;
        display: table;
        margin: 0px;
        padding: 15% 0px 83px 10%;
        flex: 1 1 0%;
        @media screen and (max-width: 720px) {
          z-index: 0;
          background-color: white;
          padding: 20px 0px 0px;
        }
      }
      .text {
        /* height: 45vh; */
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-left: 3em;
        @media screen and (max-width: 720px) {
          height: auto;
          display: table-cell;
          padding: 0;
        }
        .extra-grey {
          position: absolute;
          top: 0px;
          left: 100%;
          width: 50vw;
          height: 100%;
          background-color: rgb(249, 249, 249);
        }
        h1,
        .title {
          font-size: 52px;
          line-height: 1.3em;
          letter-spacing: -0.2px;
          @media screen and (max-width: 1300px) {
            font-size: 4vw;
          }
          @media screen and (max-width: 1088px) {
            font-size: 4.8vw;
          }
          @media screen and (max-width: 720px) {
            font-size: 30px;
            line-height: 1.4em;
            margin: 0px 0px 20px;
          }
        }
        h5 {
          color: rgb(255, 51, 102);
          text-transform: uppercase;
          cursor: pointer;
          font: bold 13px/16px 'Maison Neue', sans-serif;
        }
        h6 {
          color: rgb(155, 155, 155);
          font: bold 13px/16px 'Maison Neue', sans-serif;
        }
      }
      .author-wrapper {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 3em;
        margin-top: -2.4em;
        max-width: 360px;
        z-index: 10;
        h6 {
          color: rgb(155, 155, 155);
          font: bold 13px/16px 'Maison Neue', sans-serif;
        }
        @media screen and (max-width: 720px) {
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          margin: 20px 0px 0px;
          padding: 0;
        }
        .author-avatar {
          border-radius: 50%;
          border: 2px black solid;
          width: 70px;
          height: 70px;
          margin-bottom: 20px;
          margin-right: 20px;
        }
      }
    }
  }
`;

export const ArticleBodyArea = styled.section`
  display: flex;
  flex-direction: column;
  .article-body {
    max-width: 700px;
    margin: 20px 5vw 0px 23%;
    @media screen and (max-width: 720px) {
      margin: 0;
    }
    img {
      max-width: 80%;
    }
    blockquote {
      border-left: 11px solid black;
      padding-left: 11px;
    }
  }
`;

export default SectionWrapper;
