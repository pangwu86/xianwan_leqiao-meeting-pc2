// 基于http与urlConf创建的api接口
import http from "./http";
import { getBaseUrl, handleReturn } from "./conf";

// 创造API
const createAPI = (urlConf) => {
  const api = {};
  for (let [nm, uc] of Object.entries(urlConf)) {
    api[nm] = function (params, options = {}) {
      try {
        // 匹配接口前缀 开发环境则通过proxy配置转发请求； 生产环境根据实际配置
        options.baseURL = uc.baseURL || getBaseUrl(uc.url);
        uc.baseURL = options.baseURL;

        uc.method = uc.method || "get";

        // 前置处理
        if (uc.before) {
          uc.before.call(this, options);
        }

        // 如果是自定义方法，直接调用
        if (typeof uc.method == "function") {
          // 因为不走axios, url需要拼接
          return uc.method.call(uc, params, options);
        }

        // 处理请求
        const reqReturn = http[uc.method](uc.url, params, options);

        // 后置处理
        if (uc.after) {
          let curr = this;
          return reqReturn.then((respData) => {
            return uc.after.call(curr, respData);
          });
        } else {
          return reqReturn;
        }
      } catch (err) {
        console.log("$api error: " + err);
      }
    };
  }
  return api;
};

// URL配置
const urlConf = {
  loginByOTPCode: {
    url: "/ano-api/login",
    method: "post",
    after: handleReturn,
  },
  loginByPassword: {
    url: "/ano-api/loginByPassword",
    method: "post",
    after: handleReturn,
  },
  resetPassword: {
    // url: "/ano/api/resetPassword",
    url: "/ano-api/resetPassword",
    method: "post",
    after: handleReturn,
  },
  changePassword: {
    url: "/api/user/changePassword",
    method: "post",
    after: handleReturn,
  },
  signUp: {
    url: "/ano-api/register",
    method: "post",
    after: handleReturn,
  },
  getEmailCode: {
    url: "/ano-api/sendOtp",
    method: "post",
    after: handleReturn,
  },
  getBizUserInfo: {
    url: "/api/user/getBizUserInfo",
    after: handleReturn,
  },
  updateBizUserInfo: {
    url: "/api/user/updateBizUserInfo",
    method: "post",
    after: handleReturn,
  },
  uploadFile: {
    // url: "/api/cos/upload",
    url: "/api/common/minio/upload",
    method: "postFormFile",
    after: handleReturn,
  },
  getSubmitterInfo: {
    url: "/api/proposal/getSubmitterInfo",
    method: "get",
    after: handleReturn,
  },
  submitProposal: {
    url: "/api/proposal/submitProposal",
    method: "post",
    after: handleReturn,
  },
  updateProposal: {
    url: "/api/proposal/changeProposal",
    method: "post",
    after: handleReturn,
  },
  getProposal: {
    url: "/api/proposal/getProposalInfo",
    method: "post",
    after: handleReturn,
  },
  deleteProposal: {
    url: "/api/proposal/deleteProposal",
    method: "post",
    after: handleReturn,
  },
  loadProposalList: {
    url: "/api/proposal/bizUserProposalList",
    method: "get",
    after: handleReturn,
  },
  loadFeedbackList: {
    url: "/api/feedback/bizUserFeedbackList",
    method: "get",
    after: handleReturn,
  },
  getFeedback: {
    url: "/api/feedback/getFeedbackInfo",
    method: "post",
    after: handleReturn,
  },
  submitFeedback: {
    url: "/api/feedback/submitFeedback",
    method: "post",
    after: handleReturn,
  },
  deleteFeedback: {
    url: "/api/feedback/deleteFeedback",
    method: "post",
    after: handleReturn,
  },
};

// 创造API实例
const api = createAPI(urlConf);

export default api;
