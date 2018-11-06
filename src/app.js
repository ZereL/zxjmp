/*
 * @Author: Hank 
 * @Date: 2018-10-31 11:47:01 
 * @Last Modified by: Hank
 * @Last Modified time: 2018-11-06 15:03:55
 */
import "@tarojs/async-await";
import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";
import Home from "./pages/index";
import dva from "./utils/dva";
import DvaModels from "./models";
import "./app.scss";

// 配置基于DVa的数据管理层
const dvaApp = dva.createApp({
  initialState: {},
  models: DvaModels
});

const store = dvaApp.getStore();

class App extends Component {
  // 相当于app.json文件
  config = {
    pages: ["pages/Home/index", "pages/User/index", "pages/ApplicationForm/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
