import React, { Component } from "react";
import styles from './index.less';
import HeaderView from "../common/Header/Header";
import FooterView from "../common/Footer/Footer";

class BasicLayout extends Component {
  render() {
    return (
      <div className={styles.warp}>
        <HeaderView />
        { this.props.children }
        <FooterView />
      </div>
    );
  }
}

export default BasicLayout;
