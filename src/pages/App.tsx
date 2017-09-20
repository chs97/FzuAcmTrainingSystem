import * as React from 'react'
const { Component } = React
import { http } from '../http'
// import { DatePicker } from 'antd'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Layout, message } from 'antd'
import { BrowserRouter as Router, Route } from 'react-router-dom'
const { Header, Footer, Sider, Content } = Layout
import { MyMenu, routes } from '../routers'
import '../style/App.less'

// const logo = require('../images/logo.svg')

// const Child = ({ match }: any) => (
//   <div>
//     <h3>ID: {match.params.id}</h3>
//   </div>
// )

@observer
class App extends Component {
  @observable selectTime: string = ''
  constructor(props: any) {
    super(props)
  }
  componentDidMount() {
    console.log(this)
  }
  componentWillMount() {
    http.get('')
    console.log(this)
  }
  dateChange = (time: any, s: string) => {
    this.selectTime = s
    message.info(s)
    console.log(time, s)
  }
  render() {
    return (
      <Router>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider>
              <MyMenu />
            </Sider>
            <Content>
              {routes.map(
                (route: any) =>
                  !route.children ? (
                    <Route exact path={route.path} component={route.component} />
                  ) : (
                    route.children.map((subRoute: any) => <Route path={subRoute.path} component={route.component} />)
                  )
              )}
            </Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </Router>
    )
  }
}

export default App
