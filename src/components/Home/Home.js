import React, { Component } from "react";
import styles from './index.less';
import { connect } from 'react-redux';
import { Icon } from "antd";

@connect(({ app }) => ({ ...app }))
class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      datas: [],
    };
  }

  componentDidMount() {
    this.setdatas(6);
  }

  setdatas = (num) => {
    let index = 0;
    const datas = [];
    for (let i = 0; i < num * num; i ++) {
      if(i > num - 1 && i%num === 0) {
        index ++;
      }
      const data = {
        key: i,
        x: i % num,
        y: index,
        num: null,
        _x: null,
        _y: null,
      };
      datas.push(data);
    }
    this.setState({ datas: this.resetArr(datas) });
  };

  resetArr = (arr, _datas) => {
    let newArr = JSON.parse(JSON.stringify(arr));
    let datas = _datas || [];
    let num = Math.floor(Math.random() * newArr.length);
    let data = newArr[num];
    datas.push(data);
    // console.log(num);
    newArr = newArr.filter(item => item !== data);
    if (newArr.length > 0) {
      return this.resetArr(newArr, datas);
    }
    return datas;
  };

  handleMouse = (e, item, index, name1, name2, box, isTrue, isLeft) =>{
    if (!isTrue) return;
    let event = e || window.event;
    let disX = event.clientX;
    let disY = event.clientY;
    let _disX = 0;
    let _disY = 0;
    let __data = null;
    let __num = null;
    let obj = null;
    if (isLeft || item.num == null) {
      obj = this.refs[`${name1}-${item.key}`];
    } else {
      obj = this.refs[`${name1}-${item.num}`];
    }
    let opacityObj = this.refs['opacity'];
    document.onmousemove = (ev) => {
      let _event = ev || window.event;
      _disX = disX + (_event.clientX - disX) - obj.offsetWidth/2;
      _disY = disY + (_event.clientY - disY) - obj.offsetHeight/2;

      if (isLeft || item.num == null) {
        obj.setAttribute("style", `position: absolute; z-index: 999; top: ${_disY}px; left: ${_disX}px; background: url(http://b-ssl.duitang.com/uploads/item/201801/17/20180117140302_kEdr8.jpeg) no-repeat -${item.x * 100}px -${item.y * 100}px;`);
      } else {
        obj.setAttribute("style", `position: absolute; z-index: 999; top: ${_disY}px; left: ${_disX}px; background: url(http://b-ssl.duitang.com/uploads/item/201801/17/20180117140302_kEdr8.jpeg) no-repeat -${item._x * 100}px -${item._y * 100}px;`);
      }

      let _flag = false;
      let L1 = _disX;
      let R1 = _disX + obj.offsetWidth;
      let T1 = _disY;
      let B1 = _disY + obj.offsetHeight;

      let __obj = this.refs[box];
      let _L2 = __obj.offsetLeft;
      let _R2 = _L2 + __obj.offsetWidth;
      let _T2 = __obj.offsetTop;
      let _B2 = _T2 + __obj.offsetHeight;

      if ( (R1 > _L2 && L1 < _R2) && (B1 > _T2 && T1 < _B2) ) {
        console.log('进入了……');
        _flag = true;
      } else {
        console.log('出去了……');
        opacityObj.setAttribute("style", `opacity: 0; position: absolute; top: -999px; left: -999px; z-index: 999;`);
        __data = null;
      }

      if(_flag) {
        let typeArr = [];
        let num = null;
        let type = false;
        this.state.datas.map((_item, _index) => {
          let _obj = this.refs[`${name2}-${_item.key}`];
          let L2 = _obj.offsetLeft;
          let R2 = L2 + _obj.offsetWidth;
          let T2 = _obj.offsetTop;
          let B2 = T2 + _obj.offsetHeight;
          if ( (R1 > L2 && L1 < R2) && (B1 > T2 && T1 < B2) ) {
            typeArr.push(_index);
          }
        });
        console.log('typeArr', typeArr);
        if(typeArr.length === 1) {
          if(typeArr[0] !== num) {
            num = typeArr[0];
          } else {
            type = true;
          }
        } else {
          if(typeArr[typeArr.length - 1] !== num) {
            num = typeArr[typeArr.length - 1];
          } else {
            type = true;
          }
        }
        // console.log(num);
        if(!type && (num != null || num != undefined)) {
          const __item = this.state.datas[num];
          __num = __item;
          __data = this.refs[`${name2}-${__item.key}`];
          if (isLeft || item.num == null) {
            opacityObj.setAttribute("style", `opacity: .3; position: absolute; top: ${__data.offsetTop}px; z-index: 999; left: ${__data.offsetLeft}px; background: url(http://b-ssl.duitang.com/uploads/item/201801/17/20180117140302_kEdr8.jpeg) no-repeat -${item.x * 100}px -${item.y * 100}px;`);
          } else {
            opacityObj.setAttribute("style", `opacity: .3; position: absolute; top: ${__data.offsetTop}px; z-index: 999; left: ${__data.offsetLeft}px; background: url(http://b-ssl.duitang.com/uploads/item/201801/17/20180117140302_kEdr8.jpeg) no-repeat -${item._x * 100}px -${item._y * 100}px;`);
          }
        }
      }
    };
    document.onmouseup= () => {

      document.onmousemove = null;
      document.onmouseup = null;
      obj.releaseCapture && obj.releaseCapture();
      console.log('__data', __data, item, __num);
      if(__data) {
        let datas = [];
        obj.setAttribute("style", "display: none");
        if (__num.num != null) {
          const leftObj = this.refs[`left-${__num.num}`];
          leftObj.setAttribute("style", `background: url(http://b-ssl.duitang.com/uploads/item/201801/17/20180117140302_kEdr8.jpeg) no-repeat -${__num._x * 100}px -${__num._y * 100}px`);
        }
        if (isLeft || item.num == null) {
          datas = this.state.datas.map(_item => {
            if (__num.key == _item.key) {
              _item.num = item.key;
              _item._x = item.x;
              _item._y = item.y;
            }
            return _item;
          });
          __data.setAttribute("style", `background: url(http://b-ssl.duitang.com/uploads/item/201801/17/20180117140302_kEdr8.jpeg) no-repeat -${item.x * 100}px -${item.y * 100}px`);
        } else {
          const rightObj = this.refs[`${name2}-${item.key}`];
          rightObj.setAttribute("style", "");
          __data.setAttribute("style", `background: url(http://b-ssl.duitang.com/uploads/item/201801/17/20180117140302_kEdr8.jpeg) no-repeat -${item._x * 100}px -${item._y * 100}px`);
          datas = this.state.datas.map(_item => {
            if (__num.key == _item.key) {
              _item.num = item.num;
              _item._x = item._x;
              _item._y = item._y;
            }
            return _item;
          });
          datas = datas.map(_item => {
            if (item.key == _item.key) {
              _item.num = null;
              _item._x = null;
              _item._y = null;
            }
            return _item;
          });
        }
        opacityObj.setAttribute("style", `opacity: 0; position: absolute; z-index: 999; top: -999px; left: -999px`);
        this.setState({datas});
      } else {
        obj.setAttribute("style", `background: url(http://b-ssl.duitang.com/uploads/item/201801/17/20180117140302_kEdr8.jpeg) no-repeat -${item.x * 100}px -${item.y * 100}px`);
      }
    }
  };

  handleClick(item) {
    console.log('item', item);
    if (item.num == null) return;
    const obj = this.refs[`left-${item.num}`];
    const _obj = this.refs[`right-${item.key}`];
    obj.setAttribute("style", `background: url(http://b-ssl.duitang.com/uploads/item/201801/17/20180117140302_kEdr8.jpeg) no-repeat -${item._x * 100}px -${item._y * 100}px`);
    _obj.setAttribute("style", "");
    const datas = this.state.datas.map(_item => {
      if (item.key == _item.key) {
        _item.num = null;
        _item._x = null;
        _item._y = null;
      }
      return _item;
    });
    this.setState({datas});
  }

  render() {
    const { datas } = this.state;
    let sqrtNum = Math.sqrt(datas.length);
    return (
      <div className={styles.warp}>
        <div className={styles.box} style={{width: `${sqrtNum * 100}px`, height: `${sqrtNum * 100}px`}} ref='leftBox'>
          {
            datas.map((item, index) => (
              <div
                className={styles.imgBg}
                key={item.key}
                style={{
                  background: `url(http://b-ssl.duitang.com/uploads/item/201801/17/20180117140302_kEdr8.jpeg) no-repeat -${item.x * 100}px -${item.y * 100}px`,
                }}
                ref={`left-${item.key}`}
                onMouseDown={(e) => this.handleMouse(e, item, index, 'left', 'right', 'rightBox', true, true)}
              />
            ))
          }
        </div>

        <div className={styles.box} style={{width: `${sqrtNum * 100}px`, height: `${sqrtNum * 100}px`}} ref='rightBox'>
          {
            datas.map((item, index) => (
              <div
                className={styles.imgBg}
                key={item.key}
                ref={`right-${item.key}`}
                onClick={() => this.handleClick(item)}
                onMouseDown={(e) => this.handleMouse(e, item, index, 'left', 'right', 'rightBox', item.num != null, false)}
              >
                {
                  item.num != null ? <Icon className={styles.icon} type="close-circle" theme="filled" /> : ''
                }
              </div>
            ))
          }
          <div
            className={styles.imgBg}
            style={{
              position: 'absolute',
              zIndex: 999,
              opacity: 0,
              top: '-999px',
              left: '-999px',
              background: `url(http://b-ssl.duitang.com/uploads/item/201801/17/20180117140302_kEdr8.jpeg) no-repeat -${100}px -${100}px`,
            }}
            ref={`opacity`}
          />
        </div>
      </div>
    )
  }
}

export default HomeView;
