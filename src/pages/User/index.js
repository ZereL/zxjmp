/*
 * @Author: Hank 
 * @Date: 2018-10-31 10:59:08 
 * @Last Modified by: Hank
 * @Last Modified time: 2018-11-06 14:24:07
 */
import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { REQUEST_LOGIN } from "../../config";
import "./index.scss";

/**
 * 首页组件
 */

@connect(({ user }) => ({
  ...user
}))
export default class User extends Component {
  config = {
    navigationBarTitleText: "臻享家"
  };

  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      code: "",
      invitation_code: "",
      access_token: "",
      nickname: "",
      new_user: "",
      smsText: "发送验证码"
    };
  }

  /********************* 生命周期函数 **********************/
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  /********************* 事件handler **********************/
  goBackHandler = () => {
    // 跳转到目的页面，在当前页面打开
    Taro.redirectTo({
      url: "/pages/Home/index"
    });
  };
  loginHandler = () => {
    const { dispatch } = this.props;
    console.log(dispatch);
    // 发送登录请求，获取凭证（code）
    Taro.login({
      // 返回成功
      success(res) {
        // 返回数据带有code参数
        if (res.code) {
          dispatch({
            type: `home/${REQUEST_LOGIN}`,
            payload: res.code
          })
            .then(() => {
              // 如果发送请求成功
              Taro.showToast({
                title: "发送请求成功",
                icon: "none"
              });
            })
            .catch(() => {
              // 如果发送请求失败
              Taro.showToast({
                title: "访问请求失败",
                icon: "none"
              });
            });
        } else {
          console.log("登录失败！" + res.errMsg);
        }
      }
    });
  };
  /********************* 渲染页面的方法 *********************/

  /********************* 页面render方法 ********************/
  render() {
    console.log(this.props);
    return (
      <View className="login-page" id="login-page">
        <View className="title">欢迎回来 Hank</View>
        <View className="title-des">新用户注册即可报名达人秀</View>
        <View className="bgtopWrap">
          <View className="loginWrap">
            <Button className="button" onClick={this.goBackHandler}>
              返回
            </Button>
            <Button className="button">
              点击跳转到臻享家APP
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
