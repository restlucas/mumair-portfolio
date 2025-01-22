import styled, { keyframes } from "styled-components";

export const AboutMeContainer = styled.section`
  max-width: 1470px;
  margin: 4rem auto 0 auto;
  height: auto;

  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 2rem;

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;

    h1 {
      font-weight: 600;
      font-size: 4.063rem;
    }

    p {
      font-size: 1.313rem;
    }
  }

  @media (max-width: 800px) {
    margin-top: 15rem;
    grid-template-columns: 1fr;
  }
`;

export const ImageContainer = styled.div<{ imagesrc: string }>`
  position: relative;
  width: 550px;
  height: 675px;

  display: block;

  background-image: url(${({ imagesrc }) => imagesrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 1025px) {
    width: 400px;
    height: 100%;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const SkillsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1.5rem;

  li {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    p {
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
`;

export const ProgressBarContainer = styled.div`
  position: relative;
  height: 10px;
  width: 100%;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.gray};
`;

const progressAnimation = (width: number) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${width}%;
  }
`;

export const Progression = styled.div<{ progress: number }>`
  position: relative;
  height: 100%;
  width: 10px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.orange};
  animation: ${({ progress }) => progressAnimation(progress)} 1s ease-in-out
    forwards;

  span {
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 9999px;
    background-color: ${(props) => props.theme.colors.gray};
    border: 3px solid ${(props) => props.theme.colors.orange};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    top: -6px;
    left: calc(100% - 0.75rem);
    transform: translateX(-50%);

    @media (max-width: 1025px) {
      height: 22px;
      width: 22px;
      top: -6px;
    }
  }
`;
