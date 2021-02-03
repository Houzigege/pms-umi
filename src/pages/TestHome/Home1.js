import React, { Component } from "react";
import styles from './index.less';
import { AccessAlarm, ThreeDRotation, Mail as MailIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { Badge, IconButton, AppBar, Tabs, Tab, Typography, Button } from '@material-ui/core';
import QRCode from 'qrcode.react';
import  html2canvas  from  'html2canvas';

const style = theme => {
  console.log('theme', theme);
  return ({
    margin: {
      margin: theme.spacing.unit * 2,
    },
    padding: {
      padding: `0 ${theme.spacing.unit * 2}px`,
    },
  });
};

class HomeWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      images: [
        '//bl-material-qa-1300977798.file.myqcloud.com/persist/10001/8888/1022019/material/1/7c611977ebc74130bbb13c3b954e9857-1586400615999-2.png',
        '//bl-material-qa-1300977798.file.myqcloud.com/persist/10001/8888/1022019/material/1/7c611977ebc74130bbb13c3b954e9857-1586400615999-2.png',
        '//bl-material-qa-1300977798.file.myqcloud.com/persist/10001/8888/1022019/material/1/7c611977ebc74130bbb13c3b954e9857-1586400615999-2.png',
        '//bl-material-qa-1300977798.file.myqcloud.com/persist/10001/8888/01048542/material/1/96247151ea5f4bba91ef870d881c699d-1590984196065-8.56%2Cm.jpg',
      ]
    };
  }

  async componentDidMount() {
    // let htmlDom = document.querySelector('#sharePicBox')
    // html2canvas( htmlDom , {
    //   allowTaint: false,   //允许污染
    //   taintTest: true,    //在渲染前测试图片(没整明白有啥用)
    //   useCORS: true,      //使用跨域(当allowTaint为true时这段代码没什么用,下面解释)
    //   background: "#fff",
    // }).then((canvas) => {
    //   let imgBlob = canvas.toDataURL( 'image/jpeg', 1.0 );    //将图片转为base64
    //   imgBlob = imgBlob.toString().substring(imgBlob.indexOf(",") + 1 );
    //   console.log('imgBlob: ', imgBlob)
    //   this.setState({
    //     src: 'data:image/jpeg;base64,' + imgBlob
    //   }, () => {
    //     htmlDom.style.display = 'none';
    //   })
    // });
  }

  render() {
    const { classes } = this.props;
    const { src, images } = this.state;

    return (
      <div className={styles.ageingPage}>

        {/*<QRCode value={'https://www.baidu.com/'} size={165} />*/}

        {/*<div id="sharePicBox">*/}
          {/*<div style={{color: 'red'}}>需要生成图片的html</div>*/}
          {/*<div style={{color: 'yellow'}}>需要生成图片的html</div>*/}
          {/*<div>需要生成图片的html</div>*/}
          {/*<div>需要生成图片的html</div>*/}
          {/*<div>需要生成图片的html</div>*/}
          {/*<div>需要生成图片的html</div>*/}
        {/*</div>*/}

        {/*<img src={src} alt=""/>*/}


        {/*<AccessAlarm color="secondary" style={{ fontSize: 60 }} />*/}
        {/*<ThreeDRotation color="secondary" style={{ fontSize: 30 }} />*/}


        {/*<div>*/}
          {/*<Badge className={classes.margin} badgeContent={4} color="primary">*/}
            {/*<MailIcon />*/}
          {/*</Badge>*/}
          {/*<Badge className={classes.margin} badgeContent={10} color="secondary">*/}
            {/*<MailIcon />*/}
          {/*</Badge>*/}
          {/*<IconButton aria-label="4 pending messages" className={classes.margin}>*/}
            {/*<Badge badgeContent={4} color="primary">*/}
              {/*<MailIcon />*/}
            {/*</Badge>*/}
          {/*</IconButton>*/}
        {/*</div>*/}
        {/*<AppBar position="static" className={classes.margin}>*/}
          {/*<Tabs value={0}>*/}
            {/*<Tab*/}
              {/*label={*/}
                {/*<Badge className={classes.padding} color="secondary" badgeContent={4}>*/}
                  {/*Item One*/}
                {/*</Badge>*/}
              {/*}*/}
            {/*/>*/}
            {/*<Tab label="Item Two" />*/}
            {/*<Tab label="Item Three" />*/}
          {/*</Tabs>*/}
        {/*</AppBar>*/}
        {/*<Badge color="primary" badgeContent={4} className={classes.margin}>*/}
          {/*<Typography className={classes.padding}>Typography</Typography>*/}
        {/*</Badge>*/}
        {/*<Badge color="primary" badgeContent={4} className={classes.margin}>*/}
          {/*<Button variant="contained">Button</Button>*/}
        {/*</Badge>*/}
      </div>
    )
  }
}
export default withStyles(style)(HomeWrap);
