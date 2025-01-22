import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: 61px auto 0 auto;
  max-width: 1420px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const LogoName = styled.h1`
  font-size: 48px;

  &::first-letter {
    font-weight: 700;
  }
`;

export const Navigation = styled.nav`
  @media (max-width: 1300px) {
    display: none;
  }

  display: flex;
  align-items: center;
  justify-content: end;
  gap: 24px;
  font-size: 21px;

  ul {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 12px;

    li {
      a {
        padding: 14px 10px;
        font-weight: 400;
        transition: 0.35s;
      }

      a:hover {
        color: ${(props) => props.theme.colors.orange};
      }
    }
  }

  button {
    background-color: ${(props) => props.theme.colors.orange};
    height: 52px;
    width: 188px;
    color: white;
    border-radius: 5px;
    transition: 0.35s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const MobileNavigation = styled.button`
  display: none;

  @media (max-width: 1300px) {
    display: block;
    position: relative;
    svg {
      width: 3rem;
      height: 3rem;

      fill: ${({ theme }) => (theme.theme === "light" ? "#000000" : "#FFFFFF")};
    }
  }
`;

export const MobileMenuWrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: end;
`;

export const MobileMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  width: 70%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MobileMenuNavigation = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  button {
    margin-top: 2rem;
    background-color: ${(props) => props.theme.colors.orange};
    padding: 1rem 2rem;
    color: white;
    border-radius: 5px;
  }
`;
