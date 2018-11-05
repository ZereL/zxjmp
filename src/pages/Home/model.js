/*
 * @Author: Hank 
 * @Date: 2018-10-31 11:45:50 
 * @Last Modified by: Hank
 * @Last Modified time: 2018-11-06 10:55:17
 */

import Taro from "@tarojs/taro";
import { requestLoginService } from "./service";
import { REQUEST_LOGIN } from "../../config";

export default {
  namespace: "home",
  state: {},
  reducers: {},
  effects: {
    *[REQUEST_LOGIN]({ payload }, { call, put, select }) {
      console.log('输出payload', payload);
      // const code = payload;
      const requestResult = yield call(requestLoginService, { payload });
    }
  }
};
