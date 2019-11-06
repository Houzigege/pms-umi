
import routes from './routers';

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      'antd-mobile': true,
      dva: {
        immer: true
      },
      dynamicImport: false,
      title: 'MyApp',
      dll: false,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  routes: routes,
  targets: {
    ie: 10,
  },
  proxy: {

  }
}
