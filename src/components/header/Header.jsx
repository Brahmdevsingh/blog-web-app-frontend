import { AppBar, Toolbar, Typography, Button, styled, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Component = styled(AppBar)`
  background: linear-gradient(to right, #fff, #003f5c);
  color: #fff;
`;

const Container = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;
const LinkContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap:20px;
`;

const StyledLink = styled(Link)`
  padding: 4px 12px 4px 12px;
  color: #000;
  border-radius: 12px;
  border: 2px solid #003f5c;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/40%);
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(to right, #ff5f6d, #ffc371);
  color: #fff;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1); 
  }
`;

const Header = () => {
  return (
    <Component>
      <Container>
        <LinkContainer>
          <StyledLink to="/">HOME</StyledLink>
          <StyledLink to="/about">ABOUT</StyledLink>
          <StyledLink to="/contact">CONTACT</StyledLink>
        </LinkContainer>
        <StyledButton variant="contained" component={Link} to="/login">
          LOGOUT
        </StyledButton>
      </Container>
    </Component>
  );
};

export default Header;
