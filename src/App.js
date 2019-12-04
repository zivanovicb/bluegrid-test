import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./constants";
import Tabs from "./components/Tabs";
import Templates from "./components/Templates";
import Products from "./components/Products";

function App() {
  const [selectedTemplates, setSelectedTemplates] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Title>Manage Subscription</Title>
          <Tabs defaultIndex={0}>
            <Tabs.List>
              <Tabs.Tab>Templates</Tabs.Tab>
              <Tabs.Tab>Products({selectedProducts.length})</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel>
              <Templates
                selectedTemplates={selectedTemplates}
                select={template =>
                  setSelectedTemplates([...selectedTemplates, template])
                }
                unselect={id =>
                  setSelectedTemplates(
                    selectedTemplates.filter(s => s._id !== id)
                  )
                }
              />
            </Tabs.Panel>
            <Tabs.Panel>
              <Products
                selectedProducts={selectedProducts}
                select={product =>
                  setSelectedProducts([...selectedProducts, product])
                }
                unselect={id =>
                  setSelectedProducts(
                    selectedProducts.filter(s => s._id !== id)
                  )
                }
              />
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
