import React, { Component } from "react";
import styles from './index.less';
import { openDB } from 'idb';

const dbPromise = openDB('keyval-store', 1, {
  upgrade(db) {
    db.createObjectStore('keyval');
  },
});

const idbKeyVal = {
  async get(key) {
    return (await dbPromise).get('keyval', key);
  },
  async set(key, val) {
    return (await dbPromise).add('keyval', val, key);
  },
  async delete(key) {
    return (await dbPromise).delete('keyval', key);
  },
  async clear() {
    return (await dbPromise).clear('keyval');
  },
  async keys() {
    return (await dbPromise).getAllKeys('keyval');
  },
};

export default class HomeWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: ''
    };
  }

  async componentDidMount() {
    // await idbKeyVal.set('a123', {id: 1, name: 'luoquan', age: 19});
    const data = await idbKeyVal.get('a123');
    this.setState({src: data})
    // console.log('data', data);
    // await idbKeyVal.delete('a123');
  }

  onChange = (e) => {
    let file = e.target.files[0];
    console.log('file', file);
    let reader = new FileReader();
    reader.onload = (event) =>  {
      console.log('event', event.target.result);
      idbKeyVal.set('a123', event.target.result);
      this.setState({src: event.target.result})
    };
    reader.readAsDataURL(file);
  };
  render() {
    return (
      <div className={styles.ageingPage}>
        <input type="file" onChange={this.onChange} />
        {
          this.state.src ? <video src={this.state.src} autoPlay controls style={{ width: '200px' }}/> : ''
        }
      </div>
    )
  }
}
