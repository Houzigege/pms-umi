
import routes from './routers';

export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      'antd-mobile': true,
      dva: {
        immer: true
      },
      dynamicImport: false,
      title: 'MyApp',
      dll: false,
      hardSource: false,
      routes: {
        exclude: [
          /components/,
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
