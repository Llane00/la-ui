import React from 'react';
import Layout from './layout';
import Header from './header';
import Sider from './sider';
import Content from './content';
import Footer from './footer';
import './layout.example.scss'

export default function () {
  return (
    <div className='layout-example-ct'>
      <div className='layout-example1'>
        <h1>例子1</h1>
        <Layout className='hello-world'>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div className='layout-example2'>
        <h1>例子2</h1>
        <Layout className='hello-world'>
          <Header>header</Header>
          <Layout>
            <Sider>sider</Sider>
            <Content>content</Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div className='layout-example3'>
        <h1>例子3</h1>
        <Layout className='hello-world'>
          <Header>header</Header>
          <Layout>
            <Content>content</Content>
            <Sider>sider</Sider>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div className='layout-example4'>
        <h1>例子4</h1>
        <Layout className='hello-world'>
          <Sider>sider</Sider>
          <Layout>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}