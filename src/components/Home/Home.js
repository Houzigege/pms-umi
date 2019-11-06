import React, { Component } from "react";
import styles from './index.less';
import { connect } from 'react-redux';
import { a } from '@/services/api';

@connect(({ app }) => ({ ...app }))
class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  componentDidMount() {
    a()
      .then(res => {
        console.log(res, 'res');
        this.props.dispatch({type: 'app/updateState', payload: {name: 'Abc'}});
      })
      .catch(err => {
        console.log(err, 'err');
      });
  }

  render() {
    console.log('props', this.props);
    return (
      <div className={styles.warp}>

      </div>
    )
  }
}

export default HomeView;
