import styled from "styled-components";

export const HeroContainer = styled.section`
  max-width: 1400px;
  height: auto;
  margin: 100px auto 0 auto;

  display: grid;
  grid-template-columns: 1fr min-content;
  gap: 2rem;

  div:first-of-type {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
    }

    h2 {
      color: ${(props) => props.theme.colors.orange};
      font-weight: 600;
      font-size: 2rem;
    }

    h1 {
      width: 100%;
      font-weight: 700;
      font-size: 6.25rem;
      line-height: 1;
    }

    p {
      font-size: 1.313rem;
      margin-top: 3rem;
      max-width: 700px;
    }

    h1:last-of-type {
      text-align: end;
    }

    button {
      margin-top: 1rem;
      width: 11.75rem;
      height: 3.25rem;
      font-size: 1.313rem;
      color: white;
      border-radius: 5px;
      background-color: ${(props) => props.theme.colors.orange};
      transition: 0.35s;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 1300px) {
    justify-content: center;

    div:first-of-type {
      h1:last-of-type {
        text-align: start;
      }
    }

    button {
      width: 100%;
      height: 4rem;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    gap: 0;

    div:first-of-type h3 {
    }

    div:first-of-type h2 {
    }

    div:first-of-type h1 {
      font-size: 5rem;
    }

    div:first-of-type p {
      text-align: justify;
    }

    div:first-of-type button {
      width: 100%;
    }
  }
`;

export const CardImage = styled.div<{ imagesrc: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 2rem;

  div:first-of-type {
    position: relative;
    width: 480px;
    height: 560px;

    background-image: url(${({ imagesrc }) => imagesrc});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 1300px) {
    div:first-of-type {
      width: 380px;
      height: 460px;
    }
  }

  @media (max-width: 1300px) {
    div:first-of-type {
      width: 380px;
      height: 460px;
    }
  }

  @media (max-width: 800px) {
    div:first-of-type {
      display: none;
    }
  }
`;

export const HeroLinks = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-right: 20px;

  a {
    svg {
      width: 32px;
      height: 32px;
      transition: 0.35s;

      fill: ${({ theme }) => (theme.theme === "light" ? "#000000" : "#FFFFFF")};
    }

    &:hover svg {
      fill: ${({ theme }) => theme.colors.orange};
    }
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;
