import * as React from 'react'
import { http } from '../http'
// import { DatePicker } from 'antd'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout
import '../style/App.less'

// const logo = require('../images/logo.svg')

@observer
class App extends React.Component {
  @observable selectTime: string = ''
  constructor(props: any) {
    super(props)
  }
  componentWillMount() {
    http.get('')
  }
  dateChange(time: any, s: string) {
    this.selectTime = s
    console.log(time, s)
  }
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}

export default App
