import {createGlobalStyle} from "styled-components";
import Header from "./components/Header/Header";
import UserProfile from "./containers/UserProfile";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    height: 100vh;
    
    font-family: Inter, sans-serif,
    sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: #E5E5E5;
  }
  
  main {
    flex: 1 1 auto;
  }
  
  #App {
    display: flex;
    flex-direction: column;
    height: 100%  ;
  }

  a {
    text-decoration: none;
    color: #0064EB;
  }

  a:hover {
    color: #4083e1;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle/>
            <Header/>
            <main>
                <UserProfile/>
            </main>
        </>
    );
}

export default App;
