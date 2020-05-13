import React, { Component } from "react";
import styles from './index.less';
import Texty from 'rc-texty';

export default class TabWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: 'rgb(55, 120, 130)',
      _nameArray: []
    };
    this.type = true;
    this.isShow = false;
  }

  componentDidMount() {
  }

  handleStart = () => {
    const { totalData, data } = this.props;
    const { testArray, type, nameArray, num, id } = data;
    let _testArray = testArray.split('，');
    if (_testArray.length <= 0) return;
    let arr = [];
    totalData.map(item => {
      if (item.id !== id) {
        let _arr = item.nameArray ? item.nameArray.split('，') : [];
        arr = [...arr, ..._arr];
      }
    });
    _testArray = _testArray.filter(item => {
      let _type = false;
      arr.map(_item => {
        if (item == _item) {
          _type = true;
        }
      });
      return !_type;
    });
    if (_testArray.length <= 0) return;
    if (!this.type) return;
    console.log('_testArray', _testArray);
    this.type = false;
    this.isShow = !this.isShow;
    const _nameArray = [];
    let index = 0;
    setTimeout(() => {
      this.type = true;
      console.log('setTimeout');
    }, 7000);
    const time = setInterval(() => {
      index ++;
      let color = '';
      const _num = Math.floor(Math.random() * 5);
      switch (_num) {
        case 1:
          color = 'rgb(55, 120, 130)';
          break;
        case 2:
          color = 'rgb(90,90,200)';
          break;
        case 3:
          color = 'rgb(125, 220, 240)';
          break;
        case 4:
          color = 'rgb(235,120,155)';
          break;
        case 5:
          color = 'rgb(245,200,108)';
          break;
        default:
          return false;
      }
      const nameIndex = Math.floor(Math.random() * (_testArray.length - 1));
      if (this.type) {
        clearInterval(time);
        if (_nameArray.indexOf(_testArray[nameIndex]) === -1) {
          _nameArray[_nameArray.length - 1] = _testArray[nameIndex];
        }
        this.setState({color, name: _testArray[nameIndex], _nameArray: type == 2 ? nameArray.split('，') : _nameArray});
        return;
      }
      if (type == 1) {
        if (index % 4 === 1 && _nameArray.indexOf(_testArray[nameIndex]) === -1 && _nameArray.length < num) {
          // console.log('index', _testArray.length, nameIndex, _testArray[nameIndex]);
          _nameArray.push(_testArray[nameIndex]);
        }
      }
      this.setState({color, name: _testArray[nameIndex]});
    }, 20);
  };

  render() {
    const { data } = this.props;
    const { name, color, _nameArray } = this.state;
    return (
      <div className={styles.tabWarp}>
        <h2>
          <Texty>{data.title}</Texty>
        </h2>
        <div className={styles.textBox}>
          {
            _nameArray.map((item, index) => (
              <div className={styles.text} key={`${item}-${index}`}>
                <Texty>{item}</Texty>
              </div>
            ))
          }
        </div>
        <div className={styles.contentBox}>
          <div className={styles.roundBox} style={{transform: this.isShow ? 'rotateZ(72000deg)' : 'rotateZ(0deg)'}}>
            <div className={styles.roundContent} />
            <div className={styles.dio + ' ' + styles.dio1} />
            <div className={styles.dio + ' ' + styles.dio2} />
            <div className={styles.dio + ' ' + styles.dio3} />
            <div className={styles.dio + ' ' + styles.dio4} />
          </div>
          <div className={styles.roundBox2} style={{transform: this.isShow ? 'rotateZ(-72000deg)' : 'rotateZ(0deg)'}}>
            <div className={styles.roundContent} />
            <div className={styles.dio + ' ' + styles.dio1} />
            <div className={styles.dio + ' ' + styles.dio2} />
            <div className={styles.dio + ' ' + styles.dio3} />
          </div>
          <div className={styles.test} style={{color: color}}>{name}</div>
        </div>
        <div className={styles.buttonBox}>
          <div className={styles.button} onClick={this.handleStart}>开始</div>
        </div>
      </div>
    )
  }
}
