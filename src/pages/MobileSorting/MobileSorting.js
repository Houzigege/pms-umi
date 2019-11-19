import React, { Component } from "react";
import styles from './index.less';
import MobileSortingView from "../../components/MobileSorting/MobileSorting";

export default class MobileSorting extends Component {

  autoLayout = () => {
    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.refs.contentBox.setAttribute("style", `height: ${h}px`);
  };

  render() {
    return (
      <div className={styles.contentBox} ref='contentBox'>
        <MobileSortingView autoLayout={this.autoLayout} />
      </div>
    )
  }
}
