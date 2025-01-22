import styled from "styled-components";

export const ContactContainer = styled.section`
  max-width: 932px;
  margin: 15rem auto 10rem auto;

  @media (max-width: 1025px) {
    margin-top: 13rem;
  }
`;

export const ContactTitle = styled.h1`
  font-weight: 600;
  font-size: 4.063rem;
  text-align: center;
`;

export const ContactSubtitle = styled.p`
  padding: 1rem 3.5rem 0 3.5rem;
  text-align: center;
  font-size: 1.313;

  @media (max-width: 1025px) {
    padding: 2rem 0 1rem 0;
  }
`;

export const Form = styled.form`
  margin: 4rem auto 0 auto;
  max-width: 874px;
  height: 75px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  @media (max-width: 1025px) {
    flex-direction: column;
    height: auto;
    gap: 2rem;
  }
`;

export const Input = styled.input`
  flex: 1;
  height: 100%;
  border-radius: 14px;
  padding: 0 1.5rem;
  background-color: ${(props) => props.theme.colors.gray};
  font-size: 1.313rem;

  @media (max-width: 1025px) {
    padding: 1.75rem 1.5rem;
    width: 100%;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.orange};
  }
`;

export const Button = styled.button`
  border-radius: 14px;
  background-color: ${(props) => props.theme.colors.orange};
  height: 100%;
  width: 222px;
  font-weight: 600;
  font-size: 1.5rem;
  color: white;
  transition: 0.35s;

  @media (max-width: 1025px) {
    padding: 1.75rem 1.5rem;
    width: 100%;
  }

  &:hover {
    opacity: 0.7;
  }
`;
