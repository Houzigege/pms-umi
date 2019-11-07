import React, { Component } from "react";
import { Input } from 'antd';
import styles from './index.css';
import rightIcon from '@/assets/icon/send@3x.png';
import { sharemoment } from '@/services/api';


export default class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  };

  handleClick = (e) => {
    let {value} = this.state;
    this.sendInput(value);
  };

  handleOk = (e) => {
    this.sendInput(e.target.value)
  };

  sendInput(value) {
    let data = {
        message: value,
        timestamp: new Date()
    };
    if (value != null && value != "") {
      this.props.submitUserSaid(data);
    }
    this.setState({value: ''});
  }

  fIsMobile = () => {
    return /Android|iPhone|iPad|iPod|BlackBerry|webOS|Windows Phone|SymbianOS|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  adjustLayout = () => {
    let {adjustLayout} = this.props;
    setTimeout(adjustLayout, 300);
  };

  render() {
    let {value} = this.state;
      return (
        <div className={styles.contentBox}>
          <div className={styles.inputBox}>
            <div className={styles.inputContainer}>
              <Input placeholder="Please enter…"
                     size="large"
                     value={value}
                     onChange={this.handleChange}
                     autoFocus={!this.fIsMobile()}
                     onPressEnter={this.handleOk}
                     onBlur={this.adjustLayout}
              />
            </div>
            <div className={styles.rightContainer}>
              <button onClick={this.handleClick} className={styles.buttonContainer}>
                <img className={styles.img} src={rightIcon} alt=""/>
              </button>
            </div>
          </div>
        </div>
      )
  }
}
