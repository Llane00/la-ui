import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import IconDemo from '../lib/icon/icon.demo';
import ButtonExample from '../lib/button/button.example';
import DialogExample from '../lib/dialog/dialog.example';
import LayoutExample from '../lib/layout/layout.example';
import {Layout, Header, Sider, Content, Footer} from '../lib/layout/layout';
import './example.scss';
import * as logo from './logo.png';

ReactDOM.render((
  <Router>
    <Layout className="la-site-pages">
      <Header className="la-site-header">
        <div className="logo">
          <div className="logo-img">
            <img src={logo} alt=""/>
          </div>
          <span>la-ui</span>
        </div>
      </Header>
      <Layout>
        <Sider className="la-site-sider">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
          </ul>
        </Sider>
        <Content className="la-site-main">
          <Route path="/icon" component={IconDemo}></Route>
          <Route path="/button" component={ButtonExample}></Route>
          <Route path="/dialog" component={DialogExample}></Route>
          <Route path="/layout" component={LayoutExample}></Route>
        </Content>
      </Layout>
      <Footer className="la-site-footer">copyright&copy;2019 by Llane00</Footer>
    </Layout>
  </Router>
), document.querySelector('#root'));
