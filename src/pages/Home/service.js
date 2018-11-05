/*
 * @Author: Hank 
 * @Date: 2018-10-31 11:45:54 
 * @Last Modified by: Hank
 * @Last Modified time: 2018-11-06 10:28:57
 */

import Taro from "@tarojs/taro";

export const requestLoginService = ({ payload }) => {
  //发起网络请求, 带有code，通过code换取用户登录态信息
  const requestResult = Taro.request({
    url: "https://test.com/onLogin",
    data: {
      code: payload
    }
  });

  return requestResult;
};

export const requestOther = () => {};
