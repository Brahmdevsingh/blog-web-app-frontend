import { Box, Typography, styled } from '@mui/material';

const Image = styled(Box)`
background: url(https://images.unsplash.com/photo-1616004655123-818cbd4b3143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80) center/55% repeat-x #000;
width: 100%;
height:50vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;

const Heading = styled(Typography)`
font-size:100px;
color:#FFFFFF;
line-height:1;
`;

const SubHeading = styled(Typography)`
font-size:20px;
background: linear-gradient(to right, #ff94c2, #003f5c);
color:#fff;
border-radius:10px;
border: 1px solid rgba(224, 224, 224, 1);
padding:4px 10px 4px 10px;
transition: transform 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px 3px orange;
  }
`
const Banner = () => {
    return (
        <Image>
            <Heading>BLOG</Heading>
            <SubHeading>Capgemini Project</SubHeading>
        </Image>
    )
}
export default Banner;