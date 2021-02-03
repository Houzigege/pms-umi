import React, { Component } from "react";
import styles from './index.less';
import { Icon, Input, Radio, InputNumber } from 'antd';
import Tab from './Tab';
const { TextArea } = Input;

// const test = '蔡秋月，梦琪，忆柳，之桃，慕青，问兰，尔岚，罗权，元香，初夏，沛菡，傲珊，曼文，乐菱，痴珊，恨玉，惜文，香寒，新柔，语蓉，海安，夜蓉，涵柏，水桃，醉蓝，春儿，语琴，从彤，傲晴，语兰，又菱，碧彤，元霜，怜梦，紫寒，妙彤，曼易，南莲，紫翠，雨寒，易烟，如萱，若南，寻真，晓亦，向珊，慕灵，以蕊，寻雁，映易，雪柳，孤岚，笑霜，海云，凝天，沛珊，寒云，冰旋，宛儿，绿真，盼儿，晓霜，碧凡，夏菡，曼香，若烟，半梦，雅绿，冰蓝，灵槐，平安，书翠，翠风，香巧，代云，梦曼，幼翠，友巧，听寒，梦柏，醉易，访旋，亦玉，凌萱，访卉，怀亦，笑蓝，春翠，靖柏，夜蕾，冰夏，梦松，书雪，乐枫，念薇，靖雁，寻春，恨山，从寒，忆香，觅波，静曼，凡旋，以亦，念露，芷蕾，千兰，新波，代真，新蕾，雁玉，冷卉，紫山，千琴，恨天，傲芙，盼山，怀蝶，冰兰，山柏，翠萱，恨松，问旋，从南，白易，问筠，如霜，半芹，丹珍，冰彤，亦寒，寒雁，怜云，寻文，乐丹，翠柔，谷山，之瑶，冰露，尔珍，谷雪，乐萱，涵菡，海莲，傲蕾，青槐，冬儿，易梦，惜雪，宛海，之柔，夏青，亦瑶，妙菡，春竹，痴梦，紫蓝，晓巧，幻柏，元风，冰枫，访蕊，南春，芷蕊，凡蕾，凡柔，安蕾，天荷，含玉，书兰，雅琴，书瑶，春雁，从安，夏槐，念芹，怀萍，代曼，幻珊，谷丝，秋翠，白晴，海露，代荷，含玉，书蕾，听白，访琴，灵雁，秋春，雪青，乐瑶，含烟，涵双，平蝶，雅蕊，傲之，灵薇，绿春，含蕾，从梦，从蓉，初丹，听兰，听蓉，语芙，夏彤，凌瑶，忆翠，幻灵，怜菡，紫南，依珊，妙竹，访烟，怜蕾，映寒，友绿，冰萍，惜霜，凌香，芷蕾，雁卉，迎梦，元柏，代萱，紫真，千青，凌寒，紫安，寒安，怀蕊，秋荷，涵雁，以山，凡梅，盼曼，翠彤，谷冬，新巧，冷安，千萍，冰烟，雅阳，友绿，南松，诗云，飞风，寄灵，书芹，幼蓉，以蓝，笑寒，忆寒，秋烟，芷巧，水香，映之，醉波，幻莲，夜山，芷卉，向彤，小玉，幼南，凡梦，尔曼，念波，迎松，青寒，笑天，涵蕾，碧菡，映秋，盼烟，忆山，以寒，寒香，小凡，代亦，梦露，映波，友蕊，寄凡，怜蕾，雁枫，水绿，曼荷，笑珊，寒珊，谷南，慕儿，夏岚，友儿，小萱，紫青，妙菱，冬寒，曼柔，语蝶，青筠，夜安，觅海，问安，晓槐，雅山，访云，翠容，寒凡，晓绿，以菱，冬云，含玉，访枫';
export default class HomeWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          id: 1,
          title: '',
          testArray: '',
          nameArray: '',
          type: 1,
          num: 1
        }
      ],
      index: 0,
      type: false,
      setting: false,
      isShow: false,
    };
    this.pages = [];
  }

  componentDidMount() {
    const data = localStorage.getItem('data');
    if (data) {
      this.setState({pages: JSON.parse(data)})
    }
  }

  handleDirection = (type) => {
    let { index, pages } = this.state;
    if (type === 'left') {
      if (!index) {
        return false;
      }
      index --;
    } else {
      if (index >= pages.length - 1) {
        return false;
      }
      index ++;
    }
    this.setState({index});
  };

  handleSetting = (type, isConfirm) => {
    let { pages } = this.state;
    if (type) {
      this.pages = JSON.parse(JSON.stringify(pages));
      this.setState({type}, () => {
        setTimeout(() => {
          this.setState({setting: type});
        }, 100);
        setTimeout(() => {
          this.setState({isShow: type});
        }, 1000);
      });
    } else {
      this.setState({setting: type}, () => {
        setTimeout(() => {
          this.setState({isShow: type});
        }, 400);
        setTimeout(() => {
          this.setState({type});
        }, 400);
      });
      if (!isConfirm) {
        this.setState({pages: this.pages});
      } else {
        localStorage.setItem('data', JSON.stringify(pages));
      }
    }
  };

  handleOnChange = (e, index, name) => {
    let { pages } = this.state;
    pages[index][name] = e.target ? e.target.value : e;
    this.setState({pages});
  };

  handlePushData = () => {
    let { pages } = this.state;
    pages.push(
      {
        id: pages.length + 1,
        title: '',
        testArray: '',
        nameArray: '',
        type: 1,
        num: 1
      }
    );
    this.setState({pages});
  };

  handleDeleteData = (index) => {
    let { pages } = this.state;
    if (pages.length === 1) {
      return;
    }
    pages.splice(index, 1);
    this.setState({pages});
  };

  render() {
    const { pages, index, type, setting, isShow } = this.state;
    return (
      <div className={styles.warp} style={{width: `${100 * pages.length}%`, left: `-${100 * index}%`}}>
        {
          type ? (
            <div className={styles.settingPage}>
              <div className={styles.bg} onClick={() => this.handleSetting(false)} />
              <div className={styles.boxContent} style={{width: setting ? '500px' : '0'}}>
                {
                  isShow ? (
                    <div className={styles.isShowBox}>
                      {
                        pages.map((item, index) => (
                          <div className={styles.msgBox} key={`box-${index}`}>
                            <Icon className={styles.delete} type="delete" onClick={() => this.handleDeleteData(index)} />
                            <div className={styles.item}>
                              <label>奖项名称：</label>
                              <Input placeholder="例如：一等奖" onChange={e => this.handleOnChange(e, index, 'title')} value={item.title} />
                            </div>
                            <div className={styles.item}>
                              <label>候选人名单：</label>
                              <TextArea placeholder="例如：张三，李四，王二，刘五 （注：人员用中文逗号隔开，记住是中文逗号！）" rows={4} onChange={e => this.handleOnChange(e, index, 'testArray')} value={item.testArray} />
                            </div>
                            <div className={styles.item}>
                              <label>中奖方式：</label>
                              <Radio.Group onChange={e => this.handleOnChange(e, index, 'type')} value={item.type}>
                                <Radio value={1}>随机</Radio>
                                <Radio value={2}>自定义</Radio>
                              </Radio.Group>
                            </div>
                            {
                              item.type === 2 ? (
                                <div className={styles.item}>
                                  <label>自定义获奖人员：</label>
                                  <TextArea placeholder="例如：张三，李四，王二，刘五 （注：人员用中文逗号隔开，记住是中文逗号！）" rows={4} onChange={e => this.handleOnChange(e, index, 'nameArray')} value={item.nameArray} />
                                </div>
                              ) : (
                                <div className={styles.item}>
                                  <label>获奖人数：</label>
                                  <InputNumber min={1} onChange={e => this.handleOnChange(e, index, 'num')} value={item.num} />
                                </div>
                              )
                            }
                          </div>
                        ))
                      }
                      <div className={styles.plusBox} onClick={this.handlePushData}>
                        <Icon className={styles.plus} type="plus" />
                      </div>
                    </div>
                  ) : ''
                }
                {
                  isShow ? (
                    <div className={styles.buttonContent}>
                      <button className={styles.cancel} onClick={() => this.handleSetting(false)}>取消</button>
                      <button className={styles.confirm} onClick={() => this.handleSetting(false, true)} >保存</button>
                    </div>
                  ) : ''
                }
              </div>
            </div>
          ) : ''
        }
        <div className={styles.settingBox} onClick={() => this.handleSetting(true)}>
          <Icon className={styles.setting} type="setting" theme="filled" />
        </div>
        <div className={styles.left} onClick={() => this.handleDirection('left')}>
          <Icon className={styles.icon} type="left" />
        </div>
        <div className={styles.right} onClick={() => this.handleDirection('right')}>
          <Icon className={styles.icon} type="right" />
        </div>
        {
          pages.map((item, index) => (
            <Tab data={item} key={`key-${index}`} totalData={pages} />
          ))
        }
      </div>
    )
  }
}
