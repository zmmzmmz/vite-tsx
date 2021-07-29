import React from 'react';
import '../../index.scss';
import Uploader from '../../components/Uploader';

export default class CopyPage extends React.Component {
  state = {
    count: 0,
  };
  constructor(props: any) {
    super(props);
  }
  onCountUp = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <div className="test">bar</div>
        <p>{count}</p>
        <Uploader />
        <button onClick={this.onCountUp}>plus</button>
      </div>
    );
  }
}
