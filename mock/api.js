let data1 = {
  "code": 200,
  "message": "SUCCESS",
  "data": [{
    name: 'adsad'
  }]
};

let data2 = {"code":200,"message":"SUCCESS","data": null};

export default {
  'GET /api/a': (req, res) => {
    res.send(data1);
  },
  'POST /api/b': (req, res) => {
    res.send(data2);
  },
  'POST /api/c': (req, res) => {
    res.send(data2);
  },
};

