import React, { Component } from "react";
import { Icon } from 'antd';
import styles from './index.less';

export default class MobileSortingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: [{
        type: 'ie',
        id: 1
      },{
        type: 'apple',
        id: 2
      },{
        type: 'dingding',
        id: 3
      },{
        type: 'twitter',
        id: 4
      },{
        type: 'wechat',
        id: 5
      },{
        type: 'alipay',
        id: 6
      },{
        type: 'github',
        id: 7
      },{
        type: 'yahoo',
        id: 8
      }],
      leftData: []
    };
  }

  componentDidMount() {
    this.adjustLayout();
  }

  componentDidUpdate() {
    this.adjustLayout();
  }

  adjustLayout = () => {
    let { visible } = this.state;
    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.refs.box.setAttribute("style", `height: ${h}px; width: ${visible ? '50%' : '100%'}`);
    this.refs.leftBox.setAttribute("style", `height: ${h}px; width: ${visible ? '50%' : 0}`);
    this.refs.box.scrollTop = this.refs.box.scrollHeight;
    setTimeout(this.props.autoLayout, 0);
  };

  handleClick = () => {
    const {visible} = this.state;
    this.setState({visible: !visible})
  };

  handleMouse = (e, item, index, name1, name2, box) =>{
    let event = e || window.event;
    let disX = event.clientX;
    let disY = event.clientY;
    let _disX = 0;
    let _disY = 0;
    let _type = false;
    let _num = index + 1;
    let __num = this.state[name2].length;
    let obj = this.refs[`icon${item.id}`];
    document.onmousemove = (ev) => {
      let _event = ev || window.event;
      _disX = disX + (_event.clientX - disX) - obj.offsetWidth/2;
      _disY = disY + (_event.clientY - disY) - obj.offsetHeight/2;
      obj.setAttribute("style", `position: absolute; top: ${_disY}px; left: ${_disX}px`);

      let _flag = false;
      let __obj = this.refs[box];
      let L1 = _disX;
      let R1 = _disX + obj.offsetWidth;
      let T1 = _disY;
      let B1 = _disY + obj.offsetHeight;

      let _L2 = __obj.offsetLeft;
      let _R2 = _L2 + __obj.offsetWidth;
      let _T2 = __obj.offsetTop;
      let _B2 = _T2 + __obj.offsetHeight;

      if ( (R1 > _L2 && L1 < _R2) && (B1 > _T2 && T1 < _B2) ) {
        console.log('进入了……');
        this.setState({[name1]: this.state[name1].filter(_item => _item.id !== 999)});
        _flag = true;
      } else {
        console.log('出去了……');
        this.setState({[name2]: this.state[name2].filter(_item => _item.id !== 888)});
      }

      if(_flag) {
        _type = this.state[name2].filter(_item => _item.id === 888).length > 0 ? 2 : false;
        if(!_type) {
          const _data = {
            id: 888,
            type: item.type
          };
          this.state[name2].splice(__num, 0, _data);
          this.setState({[name2]: this.state[name2]});
        }

        let typeArr = [];
        let firstObj = null;
        let lastObj = null;
        let num = null;
        let type = false;
        this.state[name2].map((_item, _index) => {
          let _obj = this.refs[`icon${_item.id}`];
          if(_index === 0) {
            firstObj = _obj;
          }

          if(_index === this.state[name2].length - 1){
            lastObj = _obj;
          }

          if(_item.id === 888) {
            num = _index;
          }

          if(_item.id !== item.id) {
            let L2 = _obj.offsetLeft;
            let R2 = L2 + _obj.offsetWidth;
            let T2 = _obj.offsetTop;
            let B2 = T2 + _obj.offsetHeight;
            if ( (R1 > L2 && L1 < R2) && (B1 > T2 && T1 < B2) ) {
              typeArr.push(_index);
            }
          }
        });
        // console.log(typeArr);
        if(typeArr.length === 1) {
          if(typeArr[0] !== num) {
            num = typeArr[0];
          } else {
            type = true;
          }
        } else if(typeArr.length === 2) {
          if(typeArr[1] !== num) {
            num = typeArr[1];
          } else {
            type = true;
          }
        } else {
          if(obj.offsetTop < firstObj.offsetTop) {
            if(num !== 0) {
              num = 0;
            } else {
              type = true;
            }
          } else if(obj.offsetTop > lastObj.offsetTop) {
            if(num !== this.state[name2].length) {
              num = this.state[name2].length - 1;
            } else {
              type = true;
            }
          }
        }
        // console.log(num);
        if(!type) {
          let _d = {
            id: 888,
            type: item.type
          };
          this.state[name1] = this.state[name1].filter(_item => _item.id !== 999);
          this.state[name2].splice(__num, 1);
          this.state[name2].splice(num, 0, _d);
          __num = num;
          this.setState({[name2]: this.state[name2], [name1]: this.state[name1]});
        }
      } else {
        _type = this.state[name1].filter(_item => _item.id === 999).length > 0 ? 1 : false;
        if(!_type) {
          const _data = {
            id: 999,
            type: item.type
          };
          this.state[name1].splice(_num, 0, _data);
          this.setState({[name1]: this.state[name1]});
        }
        let typeArr = [];
        let firstObj = null;
        let lastObj = null;
        let num = null;
        let type = false;
        this.state[name1].map((_item, _index) => {
          let _obj = this.refs[`icon${_item.id}`];
          if(_index === 0) {
            firstObj = _obj;
          }

          if(_index === this.state[name1].length - 1){
            lastObj = _obj;
          }

          if(_item.id === 999) {
            num = _index;
          }

          if(_item.id !== item.id) {
            let L2 = _obj.offsetLeft;
            let R2 = L2 + _obj.offsetWidth;
            let T2 = _obj.offsetTop;
            let B2 = T2 + _obj.offsetHeight;
            if ( (R1 > L2 && L1 < R2) && (B1 > T2 && T1 < B2) ) {
              typeArr.push(_index);
            }
          }
        });
        // console.log(typeArr);
        if(typeArr.length === 1) {
          if(typeArr[0] !== num) {
            num = typeArr[0];
          } else {
            type = true;
          }
        } else if(typeArr.length === 2) {
          if(typeArr[1] !== num) {
            num = typeArr[1];
          } else {
            type = true;
          }
        } else {
          if(obj.offsetTop < firstObj.offsetTop) {
            if(num !== 0) {
              num = 0;
            } else {
              type = true;
            }
          } else if(obj.offsetTop > lastObj.offsetTop) {
            if(num !== this.state[name1].length) {
              num = this.state[name1].length - 1;
            } else {
              type = true;
            }
          }
        }
        // console.log(num);
        if(!type) {
          let _d = {
            id: 999,
            type: item.type
          };
          this.state[name1].splice(_num, 1);
          this.state[name1].splice(num, 0, _d);
          this.state[name2] = this.state[name2].filter(_item => _item.id !== 888);
          _num = num;
          this.setState({[name1]: this.state[name1], [name2]: this.state[name2]});
        }
      }
    };
    document.onmouseup= () => {
      obj.setAttribute("style", "position: initial");
      document.onmousemove = null;
      document.onmouseup = null;
      obj.releaseCapture && obj.releaseCapture();
      if(_type) {
        this.state[name1] = this.state[name1].filter(_item => _item.id !== item.id).map(_item => {
          if(_item.id === 999) {
            _item = item;
          }
          return _item;
        });
        this.state[name2] = this.state[name2].filter(_item => _item.id !== item.id).map(_item => {
          if(_item.id === 888) {
            _item = item;
          }
          return _item;
        });
        this.setState({[name1]: this.state[name1], [name2]: this.state[name2]});
      }
    }
  };

  render() {
    const {data, leftData, visible} = this.state;
    return (
      <div>
        <button className={styles.button} onClick={this.handleClick} />
        <div className={styles.leftBox} style={{display: visible ? 'block' : 'none'}} ref='leftBox'>
          {
            leftData.map((item, index) => (
              <div className={styles.iconBox} style={{opacity: (item.id === 888 || item.id === 999) ? .3 : 1}} key={item.id} ref={`icon${item.id}`} onMouseDown={(e) => this.handleMouse(e, item, index, 'leftData', 'data', 'box')}>
                <Icon type={item.type} />
              </div>
            ))
          }
        </div>
        <div className={styles.messagePanel} ref='box'>
          {
            data.map((item, index) => (
              <div className={styles.iconBox} style={{opacity: (item.id === 888 || item.id === 999) ? .3 : 1}} key={item.id} ref={`icon${item.id}`} onMouseDown={(e) => this.handleMouse(e, item, index, 'data', 'leftData', 'leftBox')}>
                <Icon type={item.type} />
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
