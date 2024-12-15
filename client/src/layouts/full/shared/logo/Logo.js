import { Link } from "react-router-dom";
// import { ReactComponent as FH_Logo } from "../../../../assets/images/logos/FHLogo.svg";
import FH_Logo from "../../../../assets/images/logos/FH_Logo.png";
import { styled } from "@mui/material";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled
      to="/"
      height={70}
      style={{
        display: "flex",
        alignItems: "center",
        height: '130px',
        width: '400px'
      }}
    >
      {/* <FH_Logo /> */}
      <img src={FH_Logo} alt="Logo" style={{
        height: 'auto',
        width: '100%'
      }} />
    </LinkStyled>
  );
};

export default Logo;
