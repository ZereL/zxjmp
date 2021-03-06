/*
 * @Author: Hank 
 * @Date: 2018-10-31 11:45:54 
 * @Last Modified by: Hank
 * @Last Modified time: 2018-11-06 12:43:52
 */

import Taro from "@tarojs/taro";
import { fetchAPI } from "../../networkManager";

export const requestLoginService = ({ payload }) => {
  const url = "user/login";
  const body = payload;
  //发起网络请求, 带有code，通过code换取用户登录态信息
  const requestResult = fetchAPI(url, body);

  return requestResult;
};

export const requestOther = () => {};
