import React, { Component } from "react";
import styles from './index.less';
import Texty from 'rc-texty';
import asImg from '@/assets/image/as.png';
import bgImg from '@/assets/image/52a281b30a957.jpg';
import texiaoImg from '@/assets/image/texiao.png';

export default class TabWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: 'rgb(255, 255, 255)',
      _nameArray: []
    };
    this.type = true;
    this.isShow = false;
    this.isType = false;
  }

  componentDidMount() {
  }

  handleStart = () => {
    if (!this.type) return;
    this.type = false;
    this.setState({ _nameArray: []});
    const { totalData, data } = this.props;
    const { testArray, type, nameArray, num, id } = data;
    const activeNum = type == 2 ? nameArray.split('，').length : num;
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
    // console.log('_testArray', _testArray);
    this.isShow = !this.isShow;
    const _nameArray = [];
    for (let i = 0; i < 1000; i ++) {
      const nameIndex = Math.floor(Math.random() * (_testArray.length - 1));
      if (_nameArray.indexOf(_testArray[nameIndex]) === -1 && _nameArray.length < activeNum) {
        _nameArray.push(_testArray[nameIndex]);
      }
      if (_nameArray.length === activeNum) {
        continue;
      }
    }
    setTimeout(() => {
      this.setState({ _nameArray: type == 2 ? nameArray.split('，') : _nameArray});
    }, 0);
    let index = 0;
    let _num = 0;
    setTimeout(() => {
      // console.log('refs', this.refs);
      for (let i = 0; i < activeNum; i ++) {
        let obj = this.refs[`text-${i}`];
        let x = this.refs.imgContentBox.offsetLeft + ((this.refs.imgContentBox.offsetWidth - obj.offsetWidth) / 2) - this.refs.textBox.offsetLeft - obj.offsetLeft;
        let y = this.refs.imgContentBox.offsetTop + ((this.refs.imgContentBox.offsetHeight - obj.offsetHeight) / 2) - this.refs.textBox.offsetTop - obj.offsetTop;
        obj.setAttribute("style", `opacity: 1;  transform: translate(${x}px, ${y}px) scale(0);`);
      }
      this.isType = !this.isType;
      const time = setInterval(() => {
        index ++;
        const nameIndex = Math.floor(Math.random() * (_testArray.length - 1));
        if (this.type) {
          clearInterval(time);
          this.setState({name: ''}, () => {
            setTimeout(() => {
              this.isShow = !this.isShow;
              this.isType = !this.isType;
              this.setState({color: 'rgb(255, 255, 255)'});
            }, 300);
          });
          return;
        }
        if (index % 50 === 1) {
          this.refs[`text-${_num}`] && this.refs[`text-${_num}`].setAttribute("style", `opacity: 1;  transform: translate(0px, 0px) scale(1);`);
          _num ++;
        }
        this.setState({ name: _testArray[nameIndex]});
      }, 20);
    }, 1000);
    setTimeout(() => {
      this.type = true;
    }, activeNum * 1000 + 1000);
  };

  render() {
    const { data } = this.props;
    const { num, type, nameArray } = data;
    const activeNum = type == 2 ? nameArray.split('，').length : num;
    const { name, color, _nameArray } = this.state;
    return (
      <div className={styles.tabWarp} style={{background: `url("${bgImg}") 0% 0% / 100% 100% no-repeat rgb(36, 42, 48)`}}>
        <div className={styles.imgBgBox}>
          <img src={asImg} alt=""/>
        </div>
        <h2>
          <Texty>{data.title}</Texty>
        </h2>
        <div className={styles.textBox} ref="textBox">
          {
            _nameArray.map((item, index) => (
              <div className={styles.text} key={`${item}-${index}`} ref={`text-${index}`}>
                <Texty>{item}</Texty>
              </div>
            ))
          }
        </div>
        <div className={styles.imgContentBox} style={{height: this.isShow ? '380px' : '0'}} ref="imgContentBox">
          {
            this.isShow ? <img src={texiaoImg} alt="" style={{transition: `${activeNum * 1000}s`,transform: this.isType ? `rotateZ(${activeNum * 1440000}deg)` : 'rotateZ(0deg)'}} /> : ''
          }
          {
            name ? <div id="active-name" className={styles.text}>{name}</div> : ''
          }
        </div>
        <div className={styles.buttonBox}>
          <div className={styles.button} onClick={this.handleStart}>开始抽奖</div>
        </div>
      </div>
    )
  }
}
