import React, { Component } from "react";
import styles from './index.css';

export default class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.refList = null;
  }

  componentDidMount() {
    this.refs['title-0'].setAttribute("style", `position: absolute;`);
    this.refs['child-0'].setAttribute("style", `padding-top: ${this.refs['title-0'].offsetHeight}px;`);
  }

  handleScroll = (e) => {
    console.log('e', e.target.scrollTop);
    const scrollTop = e.target.scrollTop;
    if (!this.refList) {
      const refs = [];
      for (const item in this.refs) {
        if (item.indexOf('title') !== -1) {
          refs.push(this.refs[item].offsetTop);
        }
      }
      this.refList = refs;
    }
    this.refList.map((item, index) => {
      if (scrollTop > item - this.refs[`title-${index}`].offsetHeight && scrollTop < item) {
        this.refs[`title-${index - 1}`].setAttribute("style", `position: absolute; top: ${item - (scrollTop + this.refs[`title-${index}`].offsetHeight)}px;`);
      } else if (scrollTop > item) {
        this.refs[`title-${index}`].setAttribute("style", `position: absolute;`);
        this.refs[`child-${index}`].setAttribute("style", `padding-top: ${this.refs[`title-${index}`].offsetHeight}px;`);
        this.refs[`title-${index - 1}`] && this.refs[`title-${index - 1}`].setAttribute("style", `position: absolute; z-index: -1;`);
      }
      if (scrollTop <= item) {
        this.refs[`title-${index}`].setAttribute("style", `position: initial;`);
        this.refs[`child-${index}`].setAttribute("style", `padding-top: initial;`);
      }
    });
  };

  render() {
    const { data = [], className = {}, style = {}, title, renderChild, height = '100vh' } = this.props;
    return (
      <div className={className} style={{height: height, overflow: 'auto', ...style}} onScroll={this.handleScroll}>
        {
          data.map((item, index) => (
            <div key={`key-${index}`}>
              {
                title ? (
                  <div className={styles.listTitleBox} ref={`title-${index}`}>
                    { title(item) }
                  </div>
                ) : (
                  <div className={styles.title}>{item.title}</div>
                )
              }
              <div ref={`child-${index}`}>
                {
                  item.children.map((_item, _index) => (
                    <div key={`child-key-${_index}`}>
                      {
                        renderChild ? renderChild(item) : (
                          <div className={styles.childName}>{_item.name}</div>
                        )
                      }
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}
