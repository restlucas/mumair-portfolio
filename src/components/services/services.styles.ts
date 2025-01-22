import styled from "styled-components";

export const ServicesContainer = styled.section`
  max-width: 1423px;
  margin: 4rem auto 0 auto;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1025px) {
    margin-top: 15rem;
  }
`;

export const ServicesTitle = styled.h1`
  font-weight: 600;
  font-size: 4.063rem;
  text-align: center;
`;

export const ServicesSubtitle = styled.h3`
  font-size: 1.313rem;
  max-width: 932px;
  margin: 0 auto;
  text-align: center;
`;

export const ServicesCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 1025px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 14px;
  padding: 1rem;

  transition: 0.35s;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1.25rem;

  color: black;

  img {
    margin-top: 3rem;
  }

  h1 {
    font-weight: 600;
    font-size: 2rem;
  }

  p {
    font-size: 1.188rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 1025px) {
    &:hover {
      scale: calc(1.05);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }
`;
