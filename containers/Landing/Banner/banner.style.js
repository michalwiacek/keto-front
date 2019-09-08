import styled from 'styled-components';

const BannerWrapper = styled.section`
  position: relative;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding-top: 80px;
  //align-items: flex-end;
  @media (min-width: 991px) {
    min-height: 100vh;
  }
  
  .image-area {
    @media (max-width: 767px) {
    display: none;
    }
  }
  `;

export default BannerWrapper;