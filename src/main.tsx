import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));
// const render = (Component: any) => {
// };
// render(App);
if (import.meta.hot) {
  import.meta.hot.accept();
}
