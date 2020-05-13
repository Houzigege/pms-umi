import React, { Component } from "react";
import Texty from 'rc-texty';
import styles from './index.css';
import bgImg from '../../assets/hero/shenle.png';
import touxiang from '../../assets/hero/touxiang.gif';
import aisha from '../../assets/hero/aisha.png';
import shabai from '../../assets/hero/shabai.png';

export default class HeroPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: aisha,
    };

  }

  componentDidMount() {
    setTimeout(async () => {
      const aisi = await import('../../assets/hero/aisi.png');
      this.setState({
        name: aisi.default,
      });
    }, 3000);
  }

  render() {
    let { name } = this.state;
    console.log('name', name);
    return (
      <div className={styles.contentBox} style={{background: `url(${bgImg}) no-repeat 0 0`, backgroundSize: 'auto 100%'}}>
        <div className={styles.mod}>
          <div className={styles.bg} />
          <div className={styles.modBox}>

          </div>
        </div>
        <div className={styles.box}>
          <img src={shabai} alt=""/>
        </div>
        <div className={styles.footer}>
          <div className={styles.imgbox}>
            <img src={name} alt=""/>
            <img src={touxiang} alt=""/>
          </div>
          <div className={styles.textbox}>
            <Texty>
              在HTML5中,Canvas上不仅可以绘制图形和动画,还可以实现各种炫酷的文字动画特效。之前分享过一篇文章7款超华丽的HTML5 Canvas文字动画特效,其中就有不少令人惊叹的HT...
            </Texty>
          </div>
        </div>
      </div>
    )
  }
}
