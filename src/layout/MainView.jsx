import React from 'react';
import { Layout } from 'antd';
import MainContent from './MainContent'
// import { Row, Col } from 'antd';


const { Header, Content } = Layout;

const MainView = () => (
  <Layout>
    <Header     
      style={{
            minHeight: '7vh',
          }}>
      <h1 style={{'color':'white'}}>
        The Shoppies
      </h1>
    </Header>
    <Content style={{
            minHeight: '93vh',
          }}>
      <MainContent />
    </Content>

  </Layout>

  
);

export default MainView;
