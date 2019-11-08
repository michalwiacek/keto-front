import styled from 'styled-components';

export const SocialProfileWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const SocialProfileItem = styled.div`
  margin-right: 20px;
  a {
    color: #222222;
    transition: 0.15s ease-in-out;
    &:hover {
      color: #3444f1;
    }
  }
`;
