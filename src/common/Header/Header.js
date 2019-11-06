import React, { Component } from "react";
import styles from './index.less';
import { connect } from 'react-redux';


@connect(({ user }) => ({ ...user }))
class HeaderView extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }


  render() {
    return (
      <div className={styles.warp}>

      </div>
    )
  }
}

export default HeaderView;
