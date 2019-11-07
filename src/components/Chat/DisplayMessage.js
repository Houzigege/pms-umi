import React, { Component } from "react";
import { Avatar } from "antd";
import moment from "moment";
import styles from './index.css';
import userAvatar from '@/assets/2copy2@3x.png';
import botAvatar from '@/assets/timg-12@3x.png';
import { likemoment } from '@/services/api';


export default class DisplayMessage extends Component {
  constructor(props) {
      super(props);
      this.state = {
        show: false,
        like: null
      }
  }

  // componentDidMount() {
  //     this.state.timer1 = setTimeout(() => {
  //         this.setState({
  //             show: true
  //         }, () => {
  //             if (this.props.isLast)
  //                 this.props.setLastBotSaid(this.props.message)
  //         })
  //     }, this.props.message.element_id ? this.props.delay : 0);
  // }
  //
  // componentDidUpdate() {
  //     if (this.state.timer1 != null)
  //         clearTimeout(this.state.timer1);
  // }


  render() {
    const {message, theLastTime, isFirstUserMsg} = this.props;
    const Dom = [];
    if (message) {
      const time = new Date(message.timestamp);
      const firstTime = typeof theLastTime == 'object' ? theLastTime : new Date(theLastTime);
      // console.log(time - firstTime, isFirst);
      if((time - firstTime > 1800000) || isFirstUserMsg) {
        const timeBox = (
          <div key="timeBox" className={styles.timeBox}>{moment(message.timestamp).format('HH:mm')}</div>
        );
        Dom.push(timeBox);
      }
      if (message.id) {
        const botLineBox = (
          <div className={styles.botLine} key="botLineBox">
            <Avatar className={styles.avatarLeft} src={botAvatar} />
            <div className={styles.botSaid} style={{width: 'initial'}}>
              <div className={styles.botSaidTop}>
                {
                  message.value
                }
              </div>
            </div>
          </div>
        );
        Dom.push(botLineBox);
      } else {
        const userLineBox = (
          <div className={styles.userLine} key="userLineBox">
            <Avatar className={styles.avatarRight} src={userAvatar} />
            <div className={styles.userSaid}>
              {
                message.value
              }
            </div>
          </div>
        );
        Dom.push(userLineBox);
      }
    }
    return (
      <div>
        { Dom }
      </div>
    );
  }
}
