import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./constants";
import Tabs from "./components/Tabs";
import Templates from "./components/Templates";
import Products from "./components/Products";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Title>Manage Subscription</Title>
          <Tabs defaultIndex={0}>
            <Tabs.List>
              <Tabs.Tab>Templates</Tabs.Tab>
              <Tabs.Tab>Products(3)</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel>
              <Templates />
            </Tabs.Panel>
            <Tabs.Panel>
              <Products />
            </Tabs.Panel>
          </Tabs>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.05s ease-in-out;
  }
  html, body{
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }
  body{
    background: ${theme.white};
  }
  button{
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

const Wrapper = styled.main`
  padding: 40px 30px;
`;

const Title = styled.h1`
  color: ${props => props.theme.black};
  margin-bottom: 45px;
`;

export default App;
