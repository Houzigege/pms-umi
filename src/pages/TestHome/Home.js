import React from 'react'
// DragDropContext 类似React的Context
// DragSource 高阶组件 包裹被拖的元素
// DropTarget 高阶组件 包裹被释放的元素
import {DragDropContext, DragSource, DropTarget} from 'react-dnd';
// HTML5Backend  这个库是必须的，类似于React的合成事件
// 解决浏览器差异，抽象事件操作为可以处理的state
import HTML5Backend from 'react-dnd-html5-backend';
import styles from './index.less';

const data = [
  {id: 10, text: '1'},
  {id: 11, text: '2'},
  {id: 12, text: '3'},
  {id: 13, text: '4'},
  {id: 14, text: '5'}
]

const datas = {
  data
}

class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {connectDragSource, connectDropTarget, move, index, ...restProps} = this.props;
    return (
      connectDragSource(
        connectDropTarget(
          <div className={styles.moveBox} style={{background: index%3 === 0 ? '#999fff' :index%3 === 1 ? 'red' : 'yellow'}} {...restProps}>{restProps.text}</div>
        )
      )
    )
  }
}


const dragNode = DragSource('li', {
  beginDrag(props, monitor, component) {
    return {
      index: props.index,
    };
  },
}, connect => {
  return {
    connectDragSource: connect.dragSource(),
  }
})(Item);


const DropNode = DropTarget('li', {
    // drop(props, monitor) {
    //   // console.log('props：', props);
    //   // console.log('monitor：', monitor);
    //   const dragIndex = monitor.getItem().index;
    //   const hoverIndex = props.index;
    //   if (dragIndex === hoverIndex) return;
    //   props.move(dragIndex, hoverIndex);
    //   monitor.getItem().index = hoverIndex;
    // },
    hover(props, monitor) {
      console.log('props：', props);
      console.log('monitor：', monitor);
      const dragIndex = monitor.getItem().index;
      const hoverIndex = props.index;
      if (dragIndex === hoverIndex) return;
      props.move(dragIndex, hoverIndex);
    },
  }, function (connect) {
    return {
      connectDropTarget: connect.dropTarget()
    }
  }
)(dragNode)


class Demo extends React.Component {
  state = datas;

  moveRow = (start, end) => {
    let {data} = this.state;
    let temp = data[start]
    data[start] = data[end];
    data[end] = temp;
    this.setState({data})
  }

  render() {

    return (
      <div className={styles.move}>
        {
          this.state.data.map( (item, index) => {

            const prop = {
              move: this.moveRow,
              key: item.id,
              id: item.id,
              text: item.text,
              index: index
            }
            return <DropNode {...prop}/>

          })
        }
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Demo);
