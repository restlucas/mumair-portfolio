import styled, { keyframes } from "styled-components";

export const ProjectsContainer = styled.section`
  max-width: 1423px;
  margin: 8rem auto 0 auto;

  @media (max-width: 1025px) {
    margin-top: 15rem;
  }
`;

export const ProjectsTitle = styled.h1`
  font-weight: 600;
  font-size: 4.063rem;
  text-align: center;
`;

export const ProjectsSubtitle = styled.h3`
  max-width: 921px;
  margin: 1rem auto 3rem auto;
  text-align: center;
  font-size: 1.313rem;
`;

export const ProjectsFilter = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

export const FilterButton = styled.button<{ selected: boolean }>`
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.orange : theme.colors.gray};
  color: ${({ selected }) => (selected ? "white" : "black")};
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 12px;
  font-size: 1.5rem;
  transition: 0.35s;

  &:hover {
    background-color: ${(props) => props.theme.colors.orange};
    color: white;
  }
`;

export const ProjectsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  align-items: start;
  gap: 2rem;

  @media (max-width: 1025px) {
    grid-template-columns: 1fr;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ProjectCard = styled.div`
  width: 100%;
  animation: ${fadeIn} 0.5s ease-in-out;
  margin: 10px 0;

  img {
    width: 100%;
    height: 490px;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.35s;

    @media (max-width: 1025px) {
      height: auto;
    }
  }

  h3 {
    margin-top: 1.15rem;
    font-size: 1.188rem;
    color: ${(props) => props.theme.colors.orange};
    cursor: pointer;
    transition: 0.35s;

    @media (max-width: 1025px) {
      margin-top: 1rem;
    }
  }

  h2 {
    margin-top: 0.5rem;
    font-weight: 700;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.35s;
  }

  &:hover img {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  &:hover h3,
  &:hover haa2 {
    text-decoration: underline;
  }
`;
