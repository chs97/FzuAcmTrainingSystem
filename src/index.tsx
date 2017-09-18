import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './pages/App'
import registerServiceWorker from './registerServiceWorker'
import './style/index.less'
import 'antd/dist/antd.less'
import './style/default.less'

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
