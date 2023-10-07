import styled from '@emotion/styled';

export const StyledDeviceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 15px;
  max-width: 300px;

  .image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }

  .icon-like path {
    fill: black;
  }

  .icon-like.liked path {
    fill: red;
  }
`;
