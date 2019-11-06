import React, { Component } from "react";
import styles from './index.less';
import HomeView from "../../components/Home/Home";

export default class HomeWrap extends Component {
  render() {
    return (
      <div className={styles.ageingPage}>
        <HomeView />
      </div>
    )
  }
}
