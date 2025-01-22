import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: auto;
`;

export const FooterContent = styled.div`
  width: 100%;
  height: 552px;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.gray : theme.colors.background};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  img {
    width: 67px;
    height: 67px;
  }

  h1 {
    font-size: 2.625rem;
  }

  h1::first-letter {
    font-weight: 700;
  }
`;

export const FooterNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.75rem;

  a {
    font-size: 1.313rem;
    transition: 0.35s;
  }

  a:hover {
    color: ${(props) => props.theme.colors.orange};
  }

  @media (max-width: 1025px) {
    flex-direction: column;
    gap: 1.75rem;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

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
`;

export const FooterCopyright = styled.div`
  background-color: ${(props) => props.theme.colors.copyright};
  width: 100%;
  height: 5.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: white;
    font-size: 1.313rem;

    a {
      font-weight: 600;
      color: ${(props) => props.theme.colors.orange};
      transition: 0.35s;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
