import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Tabs from "./components/Tabs";
import ProductCard from "./components/ProductCard";

const theme = {
  blue: "#20698B",
  lightBlue: "#E7F1F3",
  darkBlue: "#183483",
  grey: "#686E79",
  lightGrey: "#E2E2E2",
  black: "#1F1F1F",
  white: "#F9F9F9"
};

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
              <CardList>
                {[1, 2, 3, 4, 5, 6].map((item, i) => (
                  <StyledProductCard
                    description="Accelerate your websites & apps with Global Caching"
                    features={[
                      "Unlimited Sites",
                      "Unlimited Requests",
                      "1TB/mo Bandwith",
                      "All Global PoPs Included",
                      "Free SSl Certificate per site",
                      "Network Layer DDoS Protection"
                    ]}
                    price="$10/month"
                    key={i.toString()}
                  />
                ))}
              </CardList>
            </Tabs.Panel>
            <Tabs.Panel>noahnoup</Tabs.Panel>
          </Tabs>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

const StyledProductCard = styled(ProductCard)`
  margin-right: 16px;
  margin-bottom: 16px;
  &:last-of-type {
    margin-right: 0;
  }
`;
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

const CardList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 25px 50px;
`;

export default App;
