import styled from "styled-components";

export const TestimonialsContainer = styled.section`
  height: auto;
  margin-top: 7rem;
`;

export const TestimonialsTitle = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 4.063rem;
`;

export const TestimonialsSubtitle = styled.h3`
  max-width: 932px;
  margin: 2rem auto 4rem auto;
  text-align: center;
  font-size: 1.313rem;
`;

export const Carousel = styled.div`
  position: relative;
  width: calc(100vw - (2 * 2.75rem));
  height: 344px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    height: auto;
  }
`;

export const Wrapper = styled.div<{ index: number }>`
  height: 100%;
  width: calc(100vw - 40vw - (2 * 2.75rem));
  transition: transform 0.5s ease-in-out;

  transform: ${({ index }) => {
    const screenSize = window.innerWidth;
    let multiplier;

    if (screenSize > 1600) {
      multiplier = 0.6;
    } else if (screenSize <= 1600 && screenSize > 1025) {
      multiplier = 0.8;
    } else {
      multiplier = 1;
    }

    const baseWidth = screenSize * multiplier - 2 * 2.75 * 16;

    return `translateX(-${index * baseWidth + index * 64}px)`;
  }};

  flex-wrap: nowrap;
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 1600px) {
    min-width: calc(100vw - 20vw - (2 * 2.75rem));
  }

  @media (max-width: 1025px) {
    min-width: calc(100vw - (2 * 2.75rem));
  }
`;

export const Card = styled.div<{ selected: boolean }>`
  height: 100%;
  min-width: calc(100vw - 40vw - (2 * 2.75rem));
  border-radius: 14px;
  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.gray};
  opacity: ${({ selected }) => (selected ? 1 : 0.1)};

  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: auto;
  align-items: center;
  justify-content: start;
  color: black;
  gap: 1rem;

  @media (max-width: 1600px) {
    min-width: calc(100vw - 20vw - (2 * 2.75rem));
  }

  @media (max-width: 1025px) {
    min-width: calc(100vw - (2 * 2.75rem));
    flex-direction: column;
    padding: 1rem;
  }
`;

export const UserPhoto = styled.div<{ imagesrc: string }>`
  width: 235px;
  height: 235px;
  border-radius: 9999px;

  grid-row: 1 / 3;

  background-image: url(${({ imagesrc }) => imagesrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 1025px) {
    min-width: 100px;
    min-height: 100px;
  }

  @media (max-width: 700px) {
    grid-row-start: 2;
    max-width: 40px;
    max-height: 40px;
  }
`;

export const UserComment = styled.div`
  position: relative;

  justify-self: center;

  align-self: end;

  p {
    margin-bottom: 1rem;
    text-align: justify;
    font-size: 1.313rem;
    line-height: 31.5px;

    &:before,
    &:after {
      content: "“";
      color: ${(props) => props.theme.colors.orange};
      font-weight: 700;
      font-size: 2rem;
      position: absolute;
    }
    &:before {
      top: -0.5rem;
      left: -0.5rem;
    }
    &:after {
      bottom: -0.5rem;
      right: -0rem;
    }
  }

  @media (max-width: 700px) {
    grid-column: 1 / 3;
  }
`;

export const UserInfo = styled.div`
  justify-self: start;
  align-self: start;

  display: flex;
  flex-direction: column;

  span:first-of-type {
    font-weight: 500;
    font-size: 1.5rem;
  }

  span:last-of-type {
    font-size: 1.188rem;
  }

  @media (max-width: 700px) {
    align-self: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  gap: 0.5rem;
`;

export const Button = styled.div<{ selected: boolean }>`
  width: 60px;
  height: 16px;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.orange : "#dcdcdc"};
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.colors.orange};
  }
`;
