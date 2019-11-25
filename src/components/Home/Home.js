import React, { Component } from "react";
import styles from './index.less';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import { a } from '@/services/api';

@connect(({ app }) => ({ ...app }))
class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: false,
      datas: [],
    };
  }

  componentDidMount() {
    // a()
    //   .then(res => {
    //     console.log(res, 'res');
    //     this.props.dispatch({type: 'app/updateState', payload: {name: 'Abc'}});
    //   })
    //   .catch(err => {
    //     console.log(err, 'err');
    //   });
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
    console.log(num);
    newArr = newArr.filter(item => item !== data);
    if (newArr.length > 0) {
      return this.resetArr(newArr, datas);
    }
    return datas;
  };

  handleImgClick = (item, index) => {
    const { datas } = this.state;
    let data = null;
    datas.map(_item => {
      if (item.key === _item.key) {
        data = item;
        data.index = index;
        _item.type = true;
      } else {
        _item.type = false;
      }
    });
    this.setState({
      datas,
      data,
    });
  };

  handleIconClick = (item) => {
    let { datas, data } = this.state;
    let sqrtNum = Math.sqrt(datas.length);
    const col = Math.ceil((data.index + 1) / sqrtNum);
    const row = data.index % sqrtNum;

    const setdata = (__col, __row) => {
      let _data = null;
      let index = null;
      datas = datas.map((_item, _index) => {
        const _col = Math.ceil((_index + 1) / sqrtNum);
        const _row = _index % sqrtNum;
        if(__col === _col && __row === _row) {
          _data = JSON.parse(JSON.stringify(_item));
          index = _index;
          _item = data;
        }
        return _item;
      });
      datas.splice(data.index, 1, _data);
      data.index = index;
    };

    switch (item) {
      case 'up':
        if(!(col - 1 <= 0)) {
          setdata(col - 1, row);
        }
        break;
      case 'left':
        if(!(row - 1 < 0)) {
          setdata(col, row - 1);
        }
        break;
      case 'right':
        if(!(row + 1 >= sqrtNum)) {
          setdata(col, row + 1);
        }
        break;
      case 'down':
        if(!(col + 1 > sqrtNum)) {
          setdata(col + 1, row);
        }
        break;
      default:
        return;
    }
    this.setState({
      datas,
      data,
    });
  };

  render() {
    const { datas } = this.state;
    // console.log('datas', datas);
    let sqrtNum = Math.sqrt(datas.length);
    return (
      <div className={styles.warp}  style={{width: `${sqrtNum * 100}px`}}>
        <div className={styles.box} style={{width: `${sqrtNum * 100}px`, height: `${sqrtNum * 100}px`}}>
          {
            datas.map((item, index) => (
              <div
                className={styles.imgBg}
                key={item.key}
                style={{
                  width: `${100}px`,
                  height: `${100}px`,
                  background: `url(http://b-ssl.duitang.com/uploads/item/201801/17/20180117140302_kEdr8.jpeg) no-repeat -${item.x * 100}px -${item.y * 100}px`,
                  border: item.type ? '2px solid #E1001F' : 'none',
                }}
                onClick={() => this.handleImgClick(item, index)}
              />
            ))
          }
        </div>

        <div className={styles.iconBox}>
          <a href="javascript:void(0);" onClick={() => this.handleIconClick('up')}>
            <Icon className={styles.iconCaret} type="caret-up" />
          </a>
          <a href="javascript:void(0);" onClick={() => this.handleIconClick('left')}>
            <Icon className={styles.iconCaret} style={{float: 'left', marginLeft: '10px'}} type="caret-left" />
          </a>
          <a href="javascript:void(0);" onClick={() => this.handleIconClick('right')}>
            <Icon className={styles.iconCaret} style={{float: 'right', marginRight: '10px'}} type="caret-right" />
          </a>
          <a href="javascript:void(0);" onClick={() => this.handleIconClick('down')}>
            <Icon className={styles.iconCaret} style={{marginTop: '50px'}} type="caret-down" />
          </a>
        </div>
      </div>
    )
  }
}

export default HomeView;
