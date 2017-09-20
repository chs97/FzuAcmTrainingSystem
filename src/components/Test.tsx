import * as React from 'react'
const { Component } = React
class Test extends Component {
  constructor(props: any) {
    super(props)
  }
  static contextTypes = {
    router: React.PropTypes.object
  }
  componentWillMount() {
    console.log(this.context)
  }
  render() {
    return <div>1234</div>
  }
}
export default Test
