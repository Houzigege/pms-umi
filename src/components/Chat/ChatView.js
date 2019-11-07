import React, { Component } from "react";
import styles from './index.css';
import titleBg from '@/assets/bg_01@1x.png';
import { openchat, sendmessage } from '@/services/api';
import InputBox from "./InputBox";
import DisplayMessage from "./DisplayMessage";


export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      messages: [{
        id: '0000001',
        value: '你是甲哈巴狗！',
        timestamp: '2019-11-07 10:00:00'
      }, {
        id: null,
        value: '你他妈才是甲哈巴狗呢！',
        timestamp: '2019-11-07 11:10:00'
      }]
    };
  }

  componentDidMount() {
    this.adjustLayout();
  }

  componentDidUpdate() {
    this.adjustLayout();
  }

  adjustLayout = () => {
    let { visible } = this.state;
    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let hInput = this.refs.inputbox.clientHeight;
    let hTitle = this.refs.title.clientHeight;
    this.refs.box.setAttribute("style", `height: ${h - (hInput + hTitle)}px; margin-top: ${hTitle}px; width: ${visible ? '50%' : '100%'}`);
    this.refs.box.scrollTop = this.refs.box.scrollHeight;
    setTimeout(this.props.autoLayout, 0);
  };

  submitUserSaid = () => {

  };

  render() {
    const {messages} = this.state;
    return (
      <div>
        <div className={styles.title} style={{background: `url(${titleBg}) no-repeat top/auto #6742d9`, backgroundSize: '100% 100%'}} ref='title'>
          <h1>Chat Box</h1>
        </div>
        <div className={styles.messagePanel} ref='box'>
          {
            messages.map((item, index) => (
              <DisplayMessage
                key={item.timestamp.toString()}
                message={item}
                theLastTime={messages[0].timestamp}
                isFirstUserMsg={index === 0}
              />
            ))
          }
        </div>
        <div ref='inputbox'>
          <InputBox submitUserSaid={this.submitUserSaid} />
        </div>
      </div>
    )
  }
}
