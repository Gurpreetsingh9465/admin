import React from 'react';
import { Col, Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

const sidebarValues = [
  {
    id: '1',
    icon: 'dashboard',
    name: 'Dashboard',
    route: 'dashboard',
  },
  {
    id: '2',
    name: 'Reservations',
    icon: 'book',
    route: 'reservations',
  },
  {
    id: '3',
    name: 'Data Management',
    icon: 'code-o',
    subMenu: [{
      id: '31',
      name: 'Users',
      icon: 'user',
      route: 'users',
    },
      {
        id: '32',
        name: 'Charge Point',
        icon: 'line-chart',
        route: 'chargepoints',
      }]
  },
  {
    id: '4',
    name: 'Transaction',
    icon: 'car',
    route: 'transactions',
  },
  {
    id: '5',
    name: 'Settings',
    icon: 'setting',
    route: 'settings',
  },
  {
    id: '6',
    name: 'Log File',
    icon: 'file',
    route: 'logfiles',
  },
  {
    id: '7',
    name: 'About',
    icon: 'info-circle',
    route: 'about',
  },
  {
    id: '8',
    name: 'Logout',
    icon: 'logout',
    route: 'signout',
  },
]


class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const menuOptions = []
    for(var value of sidebarValues) {
      if(!value.subMenu) {
        menuOptions.push(
          (
            <Menu.Item key={ value.id }>
              <Link to={'/home/'+ value.route}>
                <Icon type={value.icon} />
                <span>{value.name}</span>
              </Link>
            </Menu.Item>
          )
        )
      } else {
        const subOptions = []
        for(var sub of value.subMenu) {
          subOptions.push((
            <Menu.Item key={ sub.id }>
              <Link to={'/home/'+ sub.route}>
                <Icon type={ sub.icon } />
                <span>{sub.name}</span>
              </Link>
            </Menu.Item>
          ))
        }
        menuOptions.push((
          <SubMenu
            key={ value.id }
            title={
              <span>
                <Icon type={value.icon} />
                <span>{value.name}</span>
              </span>
            }
          >
            {subOptions}
          </SubMenu>
        ))
      }
    }
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} style={{ background: '#fff' }} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <Col style={{height: "9%"}} span={8} offset={8}>
            <img style={{marginTop: '15px', width:'100%'}} src="/logo.png"/>
        </Col>
        <Menu theme="light" defaultSelectedKeys={[this.props.id]} mode="inline">
          {menuOptions}
        </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              style={{
                fontSize: '18px',
                lineHeight: '64px',
                padding: '0 24px',
                cursor: 'pointer',
                transition: 'color 0.3s'
              }}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24
            }}
          >
            {this.props.content}
          </Content>
          <Footer style={{ textAlign: 'center', background: '#fff' }}>Admin ©2019</Footer>
        </Layout>
      </Layout>
    );
  }
}


export default Sidebar;