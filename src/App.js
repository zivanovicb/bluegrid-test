import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Modal from "react-modal";
import Tabs from "./components/Tabs";
import Templates from "./components/Templates";
import SubscriptionModal from "./components/SubscriptionModal";
import Products from "./components/Products";
import { theme } from "./constants";

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                selectedTemplate={selectedTemplate}
                select={template => {
                  setSelectedTemplate(template);
                  selectedProducts.length > 0 && setSelectedProducts([]);
                }}
                unselect={() => setSelectedTemplate({})}
              />
            </Tabs.Panel>
            <Tabs.Panel>
              <Products
                selectedTemplate={selectedTemplate}
                selectedProducts={selectedProducts}
                select={product =>
                  setSelectedProducts([...selectedProducts, product])
                }
                unselect={id =>
                  setSelectedProducts(
                    selectedProducts.filter(s => s._id !== id)
                  )
                }
                setIsModalOpen={setIsModalOpen}
              />
            </Tabs.Panel>
          </Tabs>

          <SubscriptionModal
            contentLabel="Subscription modal"
            isModalOpen={isModalOpen}
            selectedTemplate={selectedTemplate}
            selectedProducts={selectedProducts}
            onRequestClose={() => setIsModalOpen(false)}
            overlayStyles={{
              position: "absolute",
              top: "0",
              left: "0",
              background: "rgba(255, 255, 255, 0.7)"
            }}
          />
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
  a{
    color: ${props => theme.darkBlue};
  }
`;

const Wrapper = styled.main`
  padding: 40px 30px;
`;

const Title = styled.h1`
  color: ${props => props.theme.black};
  margin-bottom: 45px;
`;

Modal.setAppElement("#root");

export default App;
