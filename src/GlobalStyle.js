import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .container{
      width: 90%;
      margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    .container{
      width: 97%;
  }
}
`;
 
export default GlobalStyle;