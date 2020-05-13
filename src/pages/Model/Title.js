import React, { Component } from "react";
import styles from './index.css';

export default class TitlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className={styles.titleBox}>
        title
      </div>
    )
  }
}
