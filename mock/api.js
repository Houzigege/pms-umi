let data1 = {
  "code": 200,
  "message": "SUCCESS",
  "data": [{
    "id": "0000001",
    "value": "CSS 教程 通过使用 CSS 来提升工作效率! 在我们的 CSS 教程中,您会学到如何使用 CSS 同时控制多重网页的样式和布局。",
    "timestamp": "2019-11-07 10:00:00"
  }, {
    "id": null,
    "value": "层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。",
    "timestamp": "2019-11-07 11:10:00"
  }]
};

let data2 = {"code":200,"message":"SUCCESS","data": null};

let data3 = {"code":200,"message":"SUCCESS","data": ['Model/Title', 'Model/Sct', 'Model/Input']};

export default {
  'GET /api/a': (req, res) => {
    res.send(data2);
  },
  'POST /api/b': (req, res) => {
    res.send(data1);
  },
  'GET /api/c': (req, res) => {
    res.send(data1);
  },
  'GET /api/component': (req, res) => {
    res.send(data3);
  },
};

