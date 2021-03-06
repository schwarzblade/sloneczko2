import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: grey;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 100vw;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
  }
  .hamburgerSocialMedia {
    font-size: 3rem;
    display: flex;
    justify-content: space-around;
  }
  .link {
    text-decoration: none;
  }
  .link:hover {
    color: blue;
  }
  .linkItems {
    dipslay: inline-block;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: blue;
    }
  }

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
`;
