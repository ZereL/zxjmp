/*
 * @Author: Hank 
 * @Date: 2018-11-06 10:53:03 
 * @Last Modified by: Hank
 * @Last Modified time: 2018-11-06 12:20:07
 */
import Taro from "@tarojs/taro";
import { cdnHostName, hostName, APIVersion } from "../config";

export const fetchAPI = (url, body) => {
  // 拼接API地址
  const API = APIVersion + url;
  const token = Taro.getStorage({ key: "key" });

  return Taro.request({
    url: API,
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      Authorization: "token " + token
    },
    data: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      throw error;
    });
};
