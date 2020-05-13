import React, { Component } from "react";
import styles from './index.css';
import List from './List'
// import { getComponent } from '../../services/api';


class ModelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ComponentArr: [],
      canvasList: [],
      listData: [
        {
          title: 'A',
          children: [
            {
              name: 'A-01'
            }, {
              name: 'A-02'
            }, {
              name: 'A-03'
            }, {
              name: 'A-04'
            }, {
              name: 'A-05'
            }
          ]
        }, {
          title: 'B',
          children: [
            {
              name: 'B-01'
            }, {
              name: 'B-02'
            }, {
              name: 'B-03'
            }, {
              name: 'B-04'
            }, {
              name: 'B-05'
            }, {
              name: 'B-06'
            }, {
              name: 'B-07'
            }
          ]
        }, {
          title: 'C',
          children: [
            {
              name: 'C-01'
            }, {
              name: 'C-02'
            }, {
              name: 'C-03'
            }, {
              name: 'C-04'
            }, {
              name: 'C-05'
            }, {
              name: 'C-06'
            }
          ]
        }, {
          title: 'D',
          children: [
            {
              name: 'D-01'
            }, {
              name: 'D-02'
            }, {
              name: 'D-03'
            }, {
              name: 'D-04'
            }, {
              name: 'D-05'
            }, {
              name: 'D-06'
            }, {
              name: 'D-07'
            }, {
              name: 'D-08'
            }, {
              name: 'D-09'
            }, {
              name: 'D-10'
            }, {
              name: 'D-11'
            }
          ]
        }, {
          title: 'E',
          children: [
            {
              name: 'E-01'
            }, {
              name: 'E-02'
            }, {
              name: 'E-03'
            }, {
              name: 'E-04'
            }, {
              name: 'E-05'
            }, {
              name: 'E-06'
            }, {
              name: 'E-07'
            }, {
              name: 'E-08'
            }, {
              name: 'E-09'
            }, {
              name: 'E-10'
            }, {
              name: 'E-11'
            }, {
              name: 'E-12'
            }, {
              name: 'E-13'
            }, {
              name: 'E-14'
            }, {
              name: 'E-15'
            }, {
              name: 'E-16'
            }, {
              name: 'E-17'
            }, {
              name: 'E-18'
            }
          ]
        }
      ]
    };
    this.scale = 1.5;
  }

  componentDidMount() {

  }


  render() {
    let { ComponentArr, listData } = this.state;
    console.log('ComponentArr', ComponentArr);
    return (
      <div className={styles.contentBox}>
        {
          <List
            title={(item) => (
              <h1 className={styles.title}>{item.title}</h1>
            )}
            data={listData}
          />
        }
        {
          // ComponentArr.map(item => {
          //   const ComponentApp = item;
          //   return <ComponentApp key={item} />
          // })
        }
      </div>
    )
  }
}
export default ModelPage;
