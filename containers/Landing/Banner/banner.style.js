import styled from 'styled-components';
import bannerBg from '../../../common/src/assets/images/banner-bg.svg';

const BannerWrapper = styled.section`
  position: relative;
  background-image: url(${bannerBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top left;
  position: relative;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding-top: 80px;
  //align-items: flex-end;
  @media (min-width: 991px) {
    min-height: 80vh;
  }
  
  .image-area {
    @media (max-width: 767px) {
    display: none;
    }
  }
  `;

export default BannerWrapper;