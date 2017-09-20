import * as React from 'react'
const { Component } = React
import { observable } from 'mobx'
import { observer } from 'mobx-react'
// import { Link, Route } from 'react-router-dom'
import { Menu } from 'antd'
const { SubMenu } = Menu

import createLazyContainer from '../components/Bundle'

// import {Test} from 'bundle-loader?lazy!./components/Test'

const Test: React.ComponentClass = createLazyContainer(() => import('./components/Test'))

interface routerItem {
  name: string
  path?: string
  key: string
  component: React.ComponentClass
  children?: Array<routerItem>
}

const routes: [routerItem] = [
  {
    name: 'Test1',
    key: '123',
    path: '/test',
    component: Test,
    children: [
      {
        name: 'TC1',
        path: '/test/test1',
        key: '123',
        component: Test
      }
    ]
  },
  {
    name: 'Index',
    path: '/',
    key: 'index',
    component: Test
  }
]

const splitPath = (path: string): Array<string> =>
  path
    .slice(1)
    .split('/')
    .map((item: string) => `/${item}`)

@observer
class MyMenu extends Component {
  @observable selectMenu: Array<string> = []
  constructor(props: any) {
    super(props)
  }
  static contextTypes = {
    router: React.PropTypes.object
  }
  componentWillReceiveProps(nextProps: any) {
    console.log(splitPath(this.context.router.history.location.pathname))
    this.selectMenu = splitPath(this.context.router.history.location.pathname)
  }
  componentDidMount() {
    this.selectMenu = splitPath(this.context.router.history.location.pathname)
  }
  componentWillMount() {}
  handleClick = ({ item, key }: { item: any; key: string }) => {
    this.context.router.history.push(item.props.path)
    // console.log(item, key)
  }
  render() {
    return (
      <Menu theme="dark" mode="inline" selectedKeys={this.selectMenu} onClick={this.handleClick}>
        {routes.map(
          (route: routerItem) =>
            !route.children ? (
              <Menu.Item key={route.path} path={route.path}>
                {route.name}
              </Menu.Item>
            ) : (
              <SubMenu key="sub2" title={<span>{route.name}</span>}>
                {route.children.map((subRoute: routerItem) => (
                  <Menu.Item key={subRoute.path} path={subRoute.path}>
                    {subRoute.name}
                  </Menu.Item>
                ))}
              </SubMenu>
            )
        )}
      </Menu>
    )
  }
}
export default MyMenu
