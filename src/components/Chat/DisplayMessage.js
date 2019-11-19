import React, { Component } from "react";
import { Avatar } from "antd";
import moment from "moment";
import styles from './index.less';
import userAvatar from '@/assets/2copy2@3x.png';
import botAvatar from '@/assets/timg-12@3x.png';


export default class DisplayMessage extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    const {message, theLastTime, isFirstUserMsg} = this.props;
    const Dom = [];
    if (message) {
      const time = new Date(message.timestamp);
      const firstTime = typeof theLastTime == 'object' ? theLastTime : new Date(theLastTime);
      // console.log(time - firstTime);
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
              <div className={styles.afterBox} />
              {
                message.value
              }
            </div>
          </div>
        );
        Dom.push(botLineBox);
      } else {
        const userLineBox = (
          <div className={styles.userLine} key="userLineBox">
            <div className={styles.userSaid}>
              <div className={styles.afterBox} />
              {
                message.value
              }
            </div>
            <Avatar className={styles.avatarRight} src={userAvatar} />
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
