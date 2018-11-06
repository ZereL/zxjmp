/*
 * @Author: Hank 
 * @Date: 2018-10-31 11:45:50 
 * @Last Modified by: Hank
 * @Last Modified time: 2018-11-06 13:00:58
 */

import Taro from "@tarojs/taro";
import { requestLoginService } from "./service";
import { REQUEST_LOGIN, SET_LOGIN } from "../../config";

export default {
  namespace: "user",
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
          return state.user.requestResult;
        });
      } catch (error) {
        throw error;
      }
    }
  }
};
