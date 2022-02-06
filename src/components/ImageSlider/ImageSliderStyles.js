import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  .arrow {
    position: absolute;
    font-size: 5rem;
    z-index: 10;
    user-select: none;
    color: white;
    border-radius: 50px;
    padding: 8px;
    transition: 0.3s ease;

    &:hover {
      background-color: #212d45;
      transform: scale(1.2);
      cursor: pointer;

      @media (max-width: 600px), (max-height: 400px) {
        background-color: transparent;
      }
    }
  }

  .left {
    left: 0;
    @media (min-width: 600px) {
      left: 32px;
    }
  }

  .right {
    right: 0;
    @media (min-width: 600px) {
      right: 32px;
    }
  }

  .slide {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    height: 90%;
    transition-duration: 1s ease;
  }

  .active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);

    .image {
      width: 100%;
      max-height: 100%;
      border-radius: 10px;
    }
  }
`;
