import React, { Component } from "react";
import styles from './index.less';
import InputBox from "@/components/chat/InputBox";
import titleBg from '@/assets/bg_01@1x.png';
import DisplayMessage from "@/components/chat/DisplayMessage";
import { connect } from 'react-redux';

@connect(({ app }) => ({ ...app }))
class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.adjustLayout();

    this.props.dispatch({type: 'app/getMessage', payload: {}});
  }

  componentDidUpdate() {
    this.adjustLayout();
  }

  autoLayout = () => {
    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.refs.chatBox.setAttribute("style", `height: ${h}px`);
  };

  adjustLayout = () => {
    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let hTitle = this.refs.title.clientHeight;
    this.refs.box.setAttribute("style", `height: ${h - hTitle - 60}px; margin-top: ${hTitle}px; width: '100%'`);
    this.refs.box.scrollTop = this.refs.box.scrollHeight;
    setTimeout(this.autoLayout, 0);
  };

  submitUserSaid = () => {

  };

  render() {
    const {messages} = this.props;
    return (
      <div className={styles.chatPage} ref='chatBox'>
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
        <InputBox submitUserSaid={this.submitUserSaid} />
      </div>
    )
  }
}
export default ChatPage;
