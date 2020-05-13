import React, { Component } from "react";
import styles from './index.css';
import imgH from '../../assets/b.png';
import imgB from '../../assets/w.png';

export default class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      size: 15
    };
    this.type = true;
    this.isAI = true;
    this.AI = {
      num: 0,
    };
    this.H = [];
    this.B = [];
    this.AIArr = [];
  }

  componentWillMount() {
    let {size} = this.state;
    this.setData(size);
  }

  setData = (num) => {
    let {data} = this.state;
    for(let i = 0; i < num; i ++) {
      for(let j = 0; j < num; j ++) {
        let item = {
          id: `${j}-${i}`,
          type: null
        };
        data.push(item);
      }
    }
    this.setState({data});
  };

  handleClick = (item, type) => {
    if(this.isAI) {
      if(!type && !this.type) return;
    }
    if(item.type) return;

    let {data} = this.state;
    data = data.map(_item => {
      if(item.id === _item.id) {
        if(this.type) {
          _item.type = 1;
          this.H.push(item);
        } else {
          _item.type = 2;
          this.B.push(item);
        }
      }
      return _item;
    });
    this.setState({data}, () => {
      setTimeout(() => {
        this.handleIsWin(item);
        this.type = !this.type;
        if(!type) {
          this.isAI && this.handleAI();
        }
      }, 300);
    });
  };

  handleAI = () => {
    let {data} = this.state;

    this.AIArr = [];
    this.AI = {
      num: 0,
    };
    this.H.map(item => {
      this.handleIsWin(item, this.H, 1);
    });
    this.B.map(item => {
      this.handleIsWin(item, this.B, 2);
    });

    console.log('this.AIArr', this.AIArr);
    let num = 0;
    this.AIArr.map(item => {
      if(item.num > num) {
        num = item.num;
      }
    });

    this.AIArr = this.AIArr.filter(item => item.num == num);

    num = 0;
    let location = '';
    this.AIArr.map(item => {
      let arr = this.AIArr.filter(_item => _item.location == item.location);
      if(arr.length > num) {
        num = arr.length;
        location = arr[0].location;
      }
    });

    let _location = location.split('-');
    let ItemAi = data.filter(_item => {
      let idArr = _item.id.split('-');
      if(idArr[0] == _location[0] && idArr[1] == _location[1]) {
        return true;
      }
    })[0];
    console.log('location ItemAi', ItemAi);
    this.handleClick(ItemAi, true);
  };

  handleIsWin = (item, partyArr, str) => {
    let dataArr = [];
    let flag = false;
    if(partyArr) {
      flag = true;
      dataArr = partyArr;
    } else {
      dataArr = this.type ? this.H : this.B;
    }
    let idArr = item.id.split('-');
    let x = [];
    let y = [];
    let leftX = [];
    let rightX = [];
    dataArr.map(_item => {
      let _ids = _item.id.split('-');
      if(_ids[1] === idArr[1]) {
        x.push(_ids);
      }
      if(_ids[0] === idArr[0]) {
        y.push(_ids);
      }
      if(idArr[0] - idArr[1] === _ids[0] - _ids[1]) {
        leftX.push(_ids);
      }
      if(idArr[0] * 1 + idArr[1] * 1 === _ids[0] * 1 + _ids[1] * 1) {
        rightX.push(_ids);
      }
    });

    let arr = [x, y, leftX, rightX];
    let type = false;
    for (let i = 0; i < arr.length; i ++ ) {
      if(arr[i] == x) {
        type = this.handleToCalculate(arr[i].sort((a, b) => a[0] - b[0]), 'x', flag, str);
      } else if(arr[i] == y)  {
        type = this.handleToCalculate(arr[i].sort((a, b) => a[1] - b[1]), 'y', flag, str);
      } else if(arr[i] == leftX)  {
        type = this.handleToCalculate(arr[i].sort((a, b) => a[0] - b[0]), 'leftX', flag, str);
      } else {
        type = this.handleToCalculate(arr[i].sort((a, b) => a[0] - b[0]), 'rightX', flag, str);
      }
      if(type) break;
    }

    if(!flag && type) {
      alert(this.type ? '黑方胜利！' : '白方胜利');
    }
  };

  handleToCalculate = (partyArr, name, flag, str) => {
    let {data} = this.state;
    let isCalculate = (item, num) => {
      let _item = [];
      let _itemL = [];
      let _itemF = [];
      let type = false;
      if(name === 'x') {
        _itemF = [item[0] - 1, item[1]];
        _itemL = [item[0] * 1 + 2, item[1]];
        _item = [item[0] * 1 + 1, item[1]];
      } else if(name === 'y') {
        _itemF = [item[0], item[1] - 1];
        _itemL = [item[0], item[1] * 1 + 2];
        _item = [item[0], item[1] * 1 + 1];
      } else if(name === 'leftX') {
        _itemF = [item[0] - 1, item[1] - 1];
        _itemL = [item[0] * 1 + 2, item[1] * 1 + 2];
        _item = [item[0] * 1 + 1, item[1] * 1 + 1];
      } else {
        _itemF = [item[0] - 1, item[1] * 1 + 1];
        _itemL = [item[0] * 1 + 2, item[1] - 2];
        _item = [item[0] * 1 + 1, item[1] - 1];
      }
      partyArr.map(party => {
        if(party.join('-') == _item.join('-')) {
          type = true;
        }
        // if(party.join('-') == _itemF.join('-')) {
        //   num.number ++;
        // }
        // if(num.index >= 2 && !type && party.join('-') == _itemL.join('-')) {
        //   num.number = str == 2 ? 90 : 80;
        // }
      });
      let itemType = null;
      let left = false;
      data.map(_data => {
        let idArr = _data.id.split('-');
        if(idArr.join('-') == _itemF.join('-') && !_data.type) {
          left = true;
          num.number ++;
        }
        if(idArr.join('-') == _item.join('-')) {
          itemType = _data.type;
        }
      });
      data.map(_data => {
        let idArr = _data.id.split('-');
        if(num._index >= 3 && itemType == str && idArr.join('-') == _itemL.join('-') && !_data.type && left) {
          num.number = str == 2 ? 90 : 80;
        }
        if(num.index >= 3 && itemType == str && idArr.join('-') == _itemL.join('-') && !_data.type && left) {
          num.number = str == 2 ? 90 : 80;
        }
      });
      if(type) {
        !num.type && num.index ++;
        num.number ++;
        num._index ++;
        isCalculate(_item, num);
      } else if(!num.type && !itemType) {
        num.type = true;
        isCalculate(_item, num);
      }
      let number = num.number;
      if (num._index >= 4) {
        number = str == 2 ? 100 : 95;
      }
      if (num.index >= 4) {
        number = str == 2 ? 100 : 95;
      }
      return {
        index: num.index,
        _index: num._index,
        type: num.index >= 5,
        num: number
      };
    };
    for (let i = 0; i < partyArr.length; i ++ ) {
      let num = {
        index : 1,
        number: 1,
        type: false,
        _index: 1
      };
      let type = isCalculate(partyArr[i], num);
      // console.log('type', partyArr[i], type);
      if(flag && type.num >= this.AI.num) {
        console.log('type', type, partyArr);
        let _type = false;
        let location1 = [];
        let location2 = [];
        const setLocation = (locationSrc1, locationSrc2) => {
          data.map(item => {
            if(item.id == locationSrc1 && !item.type) {
              let _data = {
                num: type.num,
                location: locationSrc1
              };
              _type = true;
              this.AIArr.push(_data);
            }
            if(item.id == locationSrc2 && !item.type) {
              let _data = {
                num: (type._index !== type.index && type._index >= 3) ? type.num + 1 : type.num,
                location: locationSrc2
              };
              _type = true;
              this.AIArr.push(_data);
            }
          });
        };
        if(name === 'x') {
          location1[0] = partyArr[i][0] - 1;
          location1[1] = partyArr[i][1];
          location2[0] = partyArr[i][0] * 1 + (type.index);
          location2[1] = partyArr[i][1];
          let locationSrc1 = location1.join('-');
          let locationSrc2 = location2.join('-');
          setLocation(locationSrc1, locationSrc2);
        } else if(name === 'y') {
          location1[0] = partyArr[i][0];
          location1[1] = partyArr[i][1] - 1;
          location2[0] = partyArr[i][0];
          location2[1] = partyArr[i][1] * 1 + (type.index);
          let locationSrc1 = location1.join('-');
          let locationSrc2 = location2.join('-');
          setLocation(locationSrc1, locationSrc2);
        } else if(name === 'leftX') {
          location1[0] = partyArr[i][0] - 1;
          location1[1] = partyArr[i][1] - 1;
          location2[0] = partyArr[i][0] * 1 + (type.index);
          location2[1] = partyArr[i][1] * 1 + (type.index);
          let locationSrc1 = location1.join('-');
          let locationSrc2 = location2.join('-');
          setLocation(locationSrc1, locationSrc2);
        } else {
          location1[0] = partyArr[i][0] - 1;
          location1[1] = partyArr[i][1] * 1 + 1;
          location2[0] = partyArr[i][0] * 1 + (type.index);
          location2[1] = partyArr[i][1] - (type.index);
          let locationSrc1 = location1.join('-');
          let locationSrc2 = location2.join('-');
          setLocation(locationSrc1, locationSrc2);
        }
        if(_type) this.AI.num = type.num;
      }

      if(type.type) return true;
    }
    return false;
  };

  render() {
    let {data, size} = this.state;
    return (
      <div className={styles.contentBox} style={{height: `${size * 30}px`, width: `${size * 30}px`}}>
        <div className={styles.content} style={{height: `${size * 30}px`, width: `${size  * 30}px`}}>
          {
            data.map((item, index) => (
              <div
                key={`${index}-one}`}
                className={index + 1 > size * (size -1) ? styles.footerBox : (index + 1) % size === 0 ? styles.lastBox : styles.box}
                style={{ borderTop: index < size - 1 ? '1px solid #000' :  'none' }}
              >
                {
                  ((index === (size * 3 + 3)) || (index === size * 4 - 4) || (index === size * (size - 4) + 3) || (index === size * (size - 3) - 4) || (index === ((size * (parseInt(size/2) + 1)) - (parseInt(size/2) + 1)))) && (
                    <div className={styles.icon} />
                  )
                }
                <div className={styles.pieces} onClick={() => this.handleClick(item)} style={{ backgroundImage: item.type ? `url(${item.type === 1 ? imgH : imgB})` : null, backgroundSize: '100%'}} />
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
