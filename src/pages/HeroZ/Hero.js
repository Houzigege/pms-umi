import React, { Component } from "react";
import styles from './index.css';
import heroImg from '../../assets/hero.png';

export default class HeroPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      isTrue: false,
      flag: true,
      hero: [

      ]
    };
    this.zhan = [
      {
        x: 0,
        y: 0,
        width: 71
      },{
        x: 71,
        y: 0,
        width: 71
      },{
        x: 142,
        y: 0,
        width: 71
      },
    ];
    this.li = [
      {
        x: 248,
        y: 0,
        width: 64
      },{
        x: 311,
        y: 0,
        width: 64
      },{
        x: 368,
        y: 0,
        width: 64
      },{
        x: 426,
        y: 0,
        width: 64
      },{
        x: 490,
        y: 0,
        width: 64
      }
    ];
    this.chong = [
      {
        x: 0,
        y: 84,
        width: 96
      },{
        x: 92,
        y: 84,
        width: 96
      },{
        x: 182,
        y: 84,
        width: 96
      },
      {
        x: 276,
        y: 84,
        width: 96
      },{
        x: 372,
        y: 84,
        width: 92
      },{
        x: 460,
        y: 84,
        width: 96
      },{
        x: 554,
        y: 84,
        width: 96
      },{
        x: 646,
        y: 84,
        width: 96
      }
    ];
    this.shangtiao = [
      {
        x: 0,
        y: 192,
        width: 86,
        height: 112
      },{
        x: 80,
        y: 192,
        width: 86,
        height: 112
      },{
        x: 168,
        y: 192,
        width: 114,
        height: 112
      },
      {
        x: 282,
        y: 192,
        width: 142,
        height: 112
      },{
        x: 419,
        y: 192,
        width: 86,
        height: 112
      },{
        x: 500,
        y: 192,
        width: 86,
        height: 112
      },{
        x: 578,
        y: 192,
        width: 86,
        height: 112
      },{
        x: 659,
        y: 192,
        width: 86,
        height: 112
      }
    ];
    this.xiapi = [
      {
        x: 0,
        y: 298,
        width: 96,
        height: 112
      },{
        x: 90,
        y: 298,
        width: 96,
        height: 112
      },{
        x: 178,
        y: 298,
        width: 92,
        height: 112
      },
      {
        x: 264,
        y: 298,
        width: 140,
        height: 112
      },{
        x: 404,
        y: 298,
        width: 100,
        height: 112
      },{
        x: 500,
        y: 298,
        width: 94,
        height: 112
      },{
        x: 590,
        y: 298,
        width: 94,
        height: 112
      }
    ];
    this.xuanpi = [
      {
        x: 0,
        y: 410,
        width: 86,
        height: 112
      },{
        x: 80,
        y: 410,
        width: 84,
        height: 112
      },{
        x: 160,
        y: 410,
        width: 84,
        height: 112
      },
      {
        x: 240,
        y: 410,
        width: 130,
        height: 112
      },{
        x: 374,
        y: 410,
        width: 130,
        height: 112
      },{
        x: 502,
        y: 410,
        width: 130,
        height: 112
      },{
        x: 632,
        y: 410,
        width: 84,
        height: 112
      },{
        x: 712,
        y: 410,
        width: 84,
        height: 112
      }
    ];
    this.qianhui = [
      {
        x: 0,
        y: 526,
        width: 86,
        height: 112
      },{
        x: 90,
        y: 526,
        width: 78,
        height: 112
      },{
        x: 160,
        y: 526,
        width: 70,
        height: 112
      },
      {
        x: 230,
        y: 526,
        width: 70,
        height: 112
      },{
        x: 292,
        y: 526,
        width: 148,
        height: 112
      },{
        x: 442,
        y: 526,
        width: 118,
        height: 112
      },{
        x: 550,
        y: 526,
        width: 114,
        height: 112
      },{
        x: 658,
        y: 526,
        width: 68,
        height: 112
      },{
        x: 718,
        y: 526,
        width: 68,
        height: 112
      }
    ];
    this.tiao = [
      {
        x: 0,
        y: 630,
        width: 86,
        height: 112
      },{
        x: 92,
        y: 526,
        width: 72,
        height: 112
      },{
        x: 154,
        y: 630,
        width: 88,
        height: 112
      },
      {
        x: 244,
        y: 630,
        width: 88,
        height: 112
      },{
        x: 328,
        y: 630,
        width: 86,
        height: 112
      },{
        x: 414,
        y: 630,
        width: 86,
        height: 112
      }
    ];
    this.xiaci = [
      {
        x: 0,
        y: 742,
        width: 62,
        height: 112
      },{
        x: 56,
        y: 742,
        width: 62,
        height: 112
      },{
        x: 110,
        y: 742,
        width: 78,
        height: 112
      },
      {
        x: 188,
        y: 742,
        width: 72,
        height: 112
      },{
        x: 254,
        y: 742,
        width: 72,
        height: 112
      },{
        x: 322,
        y: 742,
        width: 72,
        height: 112
      },{
        x: 390,
        y: 742,
        width: 72,
        height: 112
      },{
        x: 456,
        y: 742,
        width: 78,
        height: 112
      }
    ];
    this.chongchi = [
      {
        x: 590,
        y: 742,
        width: 100,
        height: 112
      },{
        x: 690,
        y: 742,
        width: 100,
        height: 112
      },
    ];
    this.tuchi = [
      {
        x: 0,
        y: 846,
        width: 80,
        height: 100
      },{
        x: 80,
        y: 846,
        width: 70,
        height: 100
      },{
        x: 150,
        y: 846,
        width: 124,
        height: 100
      },{
        x: 273,
        y: 846,
        width: 124,
        height: 100
      },{
        x: 396,
        y: 846,
        width: 124,
        height: 100
      },{
        x: 516,
        y: 846,
        width: 122,
        height: 100
      },{
        x: 632,
        y: 846,
        width: 90,
        height: 100
      },{
        x: 714,
        y: 846,
        width: 80,
        height: 100
      },
    ];
    this.bisha = [
      {
        x: 0,
        y: 946,
        width: 70,
        height: 112
      },{
        x: 60,
        y: 946,
        width: 64,
        height: 112
      },{
        x: 116,
        y: 946,
        width: 76,
        height: 112
      },{
        x: 188,
        y: 946,
        width: 76,
        height: 112
      },{
        x: 264,
        y: 946,
        width: 78,
        height: 112
      },{
        x: 346,
        y: 946,
        width: 130,
        height: 112
      },{
        x: 480,
        y: 946,
        width: 130,
        height: 112
      },{
        x: 610,
        y: 946,
        width: 130,
        height: 112
      }, {
        x: 0,
        y: 1060,
        width: 130,
        height: 80
      },{
        x: 130,
        y: 1060,
        width: 130,
        height: 80
      },{
        x: 254,
        y: 1060,
        width: 130,
        height: 80
      },
    ];
    this.dang = [
      {
        x: 0,
        y: 1140,
        width: 54,
        height: 80
      },{
        x: 54,
        y: 1140,
        width: 54,
        height: 80
      }
    ];
    this.shuaidao = [
      {
        x: 152,
        y: 1140,
        width: 82,
        height: 80
      },{
        x: 238,
        y: 1140,
        width: 92,
        height: 80
      },{
        x: 334,
        y: 1140,
        width: 96,
        height: 80
      },{
        x: 428,
        y: 1140,
        width: 76,
        height: 80
      },{
        x: 504,
        y: 1140,
        width: 90,
        height: 80
      },{
        x: 596,
        y: 1140,
        width: 72,
        height: 80
      }, {
        x: 664,
        y: 1140,
        width: 66,
        height: 80
      },{
        x: 722,
        y: 1140,
        width: 66,
        height: 80
      }
    ];
  }

  componentDidMount() {
    this.setState({ hero: this.zhan, num: 0, flag: true }, () => {
      this.setHeroZ();
    });
    document.onkeydown = (e) => {
      let { isTrue } = this.state;
      switch (e.keyCode) {
        case 87:
          this.setState({hero: this.tiao, num: 0, flag: false}, () => {
            this.setHeroJ();
          });
          break;
        case 68:
          if (!isTrue) {
            this.setState({hero: this.chong, num: 0, flag: false}, () => {
              this.setHeroJ();
            });
          } else {
            this.setState({isTrue: !isTrue, hero: this.chong, num: 0, flag: false}, () => {
              this.setHeroJ();
            });
          }
          break;
        case 83:
          this.setState({hero: this.xiaci, num: 0, flag: false}, () => {
            this.setHeroJ();
          });
          break;
        case 65:
          if (isTrue) {
            this.setState({hero: this.chong, num: 0, flag: false}, () => {
              this.setHeroJ();
            });
          } else {
            this.setState({isTrue: !isTrue, hero: this.chong, num: 0, flag: false}, () => {
              this.setHeroJ();
            });
          }
          break;
        case 70:
          this.setState({hero: this.shangtiao, num: 0, flag: false}, () => {
            this.setHeroJ();
          });
          break;
        case 71:
          this.setState({hero: this.xiapi, num: 0, flag: false}, () => {
            this.setHeroJ();
          });
          break;
        case 72:
          this.setState({hero: this.xuanpi, num: 0, flag: false}, () => {
            this.setHeroJ();
          });
          break;
        case 74:
          this.setState({hero: this.qianhui, num: 0, flag: false}, () => {
            this.setHeroJ();
          });
          break;
        case 75:
          this.setState({hero: this.tuchi, num: 0, flag: false}, () => {
            this.setHeroJ();
          });
          break;
        case 76:
          this.setState({hero: this.bisha, num: 0, flag: false}, () => {
            this.setHeroJ();
          });
          break;
        case 66:
          this.setState({hero: this.chongchi, num: 0, flag: false}, () => {
            this.setHeroJ();
          });
          break;
        case 77:
          this.setState({hero: this.dang, num: 0, flag: false}, () => {
            this.setHeroJ();
          });
          break;
        case 78:
          this.setState({hero: this.shuaidao, num: 0, flag: false}, () => {
            this.setHeroJ();
          });
          break;
        default:
          return false;
      }
    }
  }

  setHeroZ = () => {
    clearTimeout(this.timi);
    const setLineData = () => {
      let { hero, num, flag } = this.state;
      if (num >= hero.length - 1) {
        num = -1;
      }
      if (flag) {
        num ++;
        this.setState({ num }, () => {
          this.timi = setTimeout(setLineData, 200);
        });
      }
    };
    this.timi = setTimeout(setLineData, 200);
  };

  setHeroJ = () => {
    clearTimeout(this.timi);
    const setLineData = () => {
      let { hero, num } = this.state;
      if (num < hero.length - 1) {
        num ++;
        this.setState({ num }, () => {
          this.timi = setTimeout(setLineData, 200);
        });
      } else {
        this.setState({ hero: this.zhan, num: 0, flag: true }, () => {
          this.setHeroZ();
        });
      }
    };
    this.timi = setTimeout(setLineData, 200);
  };

  render() {
    let { hero, num, isTrue } = this.state;
    return (
      <div className={styles.contentBox}>
        {
          hero.map((item, index) => (
            <div
              key={`${index}-key`}
              className={styles.hero}
              style={{zIndex: index === num ? 999 : -1, transform: isTrue ? 'rotateY(180deg)' : 'initial', width: `${item.width}px`, height: `${item.height ? item.height : 100}px`, background: `url(${heroImg}) no-repeat -${item.x}px -${item.y}px`}}
            />
          ))
        }
      </div>
    )
  }
}
