import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import IconExample from '../lib/icon/icon.example';
import ButtonExample from '../lib/button/button.example';
import DialogExample from '../lib/dialog/dialog.example';
import LayoutExample from '../lib/layout/layout.example';
import {Layout, Header, Sider, Content, Footer} from '../lib/layout/layout';
import './example.scss';
import * as logo from './logo.png';

const x = require('!!raw-loader!../lib/icon/icon.example.tsx');
console.log(x.default);

ReactDOM.render((
  <Router>
    <Layout className="llane-site-pages">
      <Header className="llane-site-header">
        <div className="logo">
          <img src={logo} alt=""/>
          <span>Llane-ui</span>
        </div>
      </Header>
      <Layout>
        <Sider className="llane-site-sider">
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
        <Content className="llane-site-main">
          <Route path="/icon" component={IconExample}></Route>
          <Route path="/button" component={ButtonExample}></Route>
          <Route path="/dialog" component={DialogExample}></Route>
          <Route path="/layout" component={LayoutExample}></Route>
        </Content>
      </Layout>
      <Footer className="llane-site-footer">copyright&copy;2019 by llane</Footer>
    </Layout>
  </Router>
), document.querySelector('#root'));
