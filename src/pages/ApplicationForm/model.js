/*
 * @Author: Hank 
 * @Date: 2018-10-31 11:45:50 
 * @Last Modified by: Hank
 * @Last Modified time: 2018-11-06 15:05:40
 */

import Taro from "@tarojs/taro";
import { requestLoginService } from "./service";
import { REQUEST_LOGIN, SET_LOGIN } from "../../config";

export default {
  namespace: "applicationForm",
  state: {},
  reducers: {},
  effects: {
    *[REQUEST_LOGIN]({ payload }, { call, put, select }) {
      // console.log('输出payload', payload);
      try {
        const requestResult = yield call(requestLoginService, { payload });
        yield put({
          type: SET_LOGIN,
          payload: { requestResult }
        });

        return yield select(state => {
          return state.home.requestResult;
        });
      } catch (error) {
        throw error;
      }
    }
  }
};
