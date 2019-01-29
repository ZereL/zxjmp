/*
 * @Author: Hank 
 * @Date: 2018-10-31 10:59:08 
 * @Last Modified by: Hank
 * @Last Modified time: 2019-01-29 16:54:07
 */
import Taro, { Component } from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { REQUEST_LOGIN } from "../../config";
import "./index.scss";

/**
 * 首页组件
 */

@connect(({ home }) => ({
  ...home
}))
export default class Home extends Component {
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
                icon: "success",
                duration: 5000
              }).then(() => {
                // 跳转到目的页面，在当前页面打开
                Taro.redirectTo({
                  url: "/pages/User/index"
                });
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
  goToShow = () => {
    Taro.redirectTo({
      url: "/pages/ApplicationForm/index"
    });
  };
  /********************* 渲染页面的方法 *********************/

  /********************* 页面render方法 ********************/
  render() {
    console.log(this.props);
    return (
      <View className="login-page" id="login-page">
        <View className="title">请登录</View>
        <View className="title-des">新用户注册即可报名达人秀</View>
        <View className="bgtopWrap">
          <View className="loginWrap">
            <Button className="button" onClick={this.loginHandler}>
              点击登录
            </Button>
            <Button className="button" onClick={this.goToShow}>
              报名达人秀
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
