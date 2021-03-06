import React, { Component } from 'react';
import Child from "./Child";
import {Button} from 'antd';
import './index.less'

class Life extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    console.log('render')
    return (
      <div className="content">
        <p>React 生命周期介绍</p>
        <Button>Antd 按钮</Button>
        <button onClick={this.handleAdd}>点击一下</button>
        <p>{this.state.count}</p>
        <Child name={'props = ' + this.state.count}></Child>
      </div>
    );
  }
}

export default Life;