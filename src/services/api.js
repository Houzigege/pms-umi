
import request from '@/util/request';


export const a = (data) => {
  return request({
    url: '/api/a',
    method: 'get',
    data: data
  })
};

export const sendMessage = (data) => {
  return request({
    url: '/api/b',
    method: 'post',
    data: data
  })
};

export const getMessage = (data) => {
  return request({
    url: '/api/c',
    method: 'get',
    params: data
  })
};
