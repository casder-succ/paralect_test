import {createGlobalStyle} from "styled-components";
import Header from "./components/Header";
import UserProfile from "./containers/UserProfile";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: Inter, sans-serif,
    sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle/>
            <Header/>
            <UserProfile/>
        </>
    );
}

export default App;
