import renderer from 'react-test-renderer'
import React from 'react'
import Layout from '../layout';
import Header from '../header';
import Sider from '../sider';
import Content from '../content';
import Footer from '../footer';

describe('layout', () => {
    it('layout组件快照测试', ()=>{
      const json = renderer.create(<Layout>
      <Header>header</Header>
      <Layout>
        <Sider>sider</Sider>
        <Content>content</Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>).toJSON()
      expect(json).toMatchSnapshot()
    })
})
