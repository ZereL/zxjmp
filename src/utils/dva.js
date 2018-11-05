/*
 * @Author: Hank 
 * @Date: 2018-10-31 11:46:41 
 * @Last Modified by:   Hank 
 * @Last Modified time: 2018-10-31 11:46:41 
 */
import { create } from "dva-core";
import { createLogger } from "redux-logger";
import createLoading from "dva-loading";

/**
 * DVa配置文件
 */
let app;
let store;
let dispatch;

function createApp(opt) {
  // redux日志
  opt.onAction = [createLogger()];
  app = create(opt);
  app.use(createLoading({}));

  if (!global.registered) opt.models.forEach(model => app.model(model));
  global.registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  }
};
