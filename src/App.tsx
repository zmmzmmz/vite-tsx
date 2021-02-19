import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import Bar from './pages/bar';
import Foo from './pages/foo';

class App extends React.Component {
  render() {
    return <div>
      <Router>
        <div style={{borderBottom: '1px solid #999'}}>
          <Link to="/">home </Link>
          <Link to="/bar">bar </Link>
          <Link to="/foo">foo</Link>
        </div>
        <Route path='/' exact component={Home} />
        <Route path='/bar' exact component={Bar} />
        <Route path='/foo' exact component={Foo} />
      </Router>
    </div>
  }
}


export default App
