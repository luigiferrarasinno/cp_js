import styled from "styled-components";

const Styledheader = styled.div`
  background-color: black;
  color: white;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
   &:hover{border-bottom:2px solid #fff
  }
}
  font-family: Arial, sans-serif;
  
`;

function Header() {
  return (
    <div>
      <Styledheader>
        <h1>titulo</h1>
        <a href="/">home</a>
        <a href="/">sobre nos</a>
        <a href="/">contato</a>
        <a href="/">blog</a>
        <a href="/">faq</a>
      </Styledheader>
    </div>
  );
}

export default Header;
