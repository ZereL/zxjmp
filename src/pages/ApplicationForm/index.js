/*
 * @Author: Hank 
 * @Date: 2018-10-31 10:59:08 
 * @Last Modified by: Hank
 * @Last Modified time: 2018-11-06 15:33:49
 */
import Taro, { Component } from "@tarojs/taro";
import { View, Form, Switch } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { REQUEST_LOGIN } from "../../config";
import "./index.scss";

/**
 * 首页组件
 */

@connect(({ applicationForm }) => ({
  ...applicationForm
}))
export default class ApplicationForm extends Component {
  config = {
    navigationBarTitleText: "臻享家"
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  /********************* 生命周期函数 **********************/
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  /********************* 事件handler **********************/
  formSubmit = e => {
    Taro.showToast({
      title: "发送成功",
      icon: "success",
      duration: 2000
    });
  };

  formReset = e => {
    console.log(e);
  };

  goBackHandler = () => {
    // 跳转到目的页面，在当前页面打开
    Taro.redirectTo({
      url: "/pages/Home/index"
    });
  };
  /********************* 渲染页面的方法 *********************/

  /********************* 页面render方法 ********************/
  render() {
    console.log(this.props);
    return (
      <Form onSubmit={this.formSubmit} onReset={this.formReset}>
        <View className="login-page" id="login-page">
          <View className="title">臻享家达人秀</View>
          <View className="title-des">请认真填写达人秀报名表</View>
          <View className="bgtopWrap">
            <View className="loginWrap">
              <View className="inpuWrapMpblie">
                <Input
                  type="text"
                  placeholder="请输入姓名"
                  value={this.props.name}
                  focus
                />
              </View>
              <View className="inpuWrapMpblie">
                <Input
                  type="number"
                  name="mobile"
                  maxLength="11"
                  placeholder="请输入手机号"
                  value={this.props.mobile}
                />
              </View>
              <View className="inpuWrapNumber">
                <Input
                  type="number"
                  name="code"
                  maxLength="4"
                  placeholder="请输入验证码"
                  value={this.props.code}
                />
                {this.state.sending == 2 && (
                  <View className="numberWrap" onClick={this.sendSms}>
                    重新获取
                  </View>
                )}
                {this.state.sending == 1 && (
                  <View className="numberWrap">{`${smsTime}秒后重发`}</View>
                )}
                {this.state.sending == 0 && (
                  <View className="numberWrap" onClick={this.sendSms}>
                    获取验证码
                  </View>
                )}
              </View>
              <Button className="button" formType="submit">
                申请报名
              </Button>
              <Button className="button" onClick={this.goBackHandler}>
                返回首页
              </Button>
            </View>
          </View>
        </View>
      </Form>
    );
  }
}
