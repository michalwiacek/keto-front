import styled from 'styled-components';
import bannerBg from '../../../common/src/assets/images/banner-bg.svg';

const BannerWrapper = styled.section`
  background-image: url(${bannerBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top left;
  position: relative;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding-top: 22px;
  //align-items: flex-end;
  @media (min-width: 991px) {
    min-height: 100vh;
  }
  // &::before {
  //   content: '';
  //   position: absolute;
  //   background-image: url(${bannerBg});
  //   background-repeat: no-repeat;
  //   background-size: contain;
  //   background-position: top left;
  //   top: 0px;
  //   height: 1084px;
  //   width: 57vw;
  // }
  .image-area {
    @media (max-width: 767px) {
    display: none;
    }
  }
  `;

export default BannerWrapper;