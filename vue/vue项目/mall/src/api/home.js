import axios from "axios";
import {
  SUCC_CODE,
  TIMEOUT,
  HOME_RECOMMEND_PAGE_SIZE,
  jsonpOptions
} from "./config";
import jsonp from "assets/js/jsonp";

//获取幻灯片数据
export const getHomeSlider = () => {
  return axios
    .get("http://www.imooc.com/api/home/slider", {
      timeout: TIMEOUT
    })
    .then(res => {
      if (res.data.code === SUCC_CODE) {
        return res.data.slider;
      }
    })
    .catch(err => {
      if (err) {
        console.log(err);
      }

      return [
        {
          linkUrl: "https://www.imooc.com",
          picUrl: require("assets/img/404.png")
        }
      ];
    })
    .then(data => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      });
    });
};

//获取热门数据--jsonp
export const getHomeRecommend = (
  page = 1,
  psize = HOME_RECOMMEND_PAGE_SIZE
) => {
  const url = "https://ju.taobao.com/json/tg/ajaxGetItemsV2.json";

  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ""
  };

  return jsonp(url, params, jsonpOptions)
    .then(res => {
      if (res.code === "200") {
        return res;
      }

      throw new Error("没有成功获取到数据!");
    })
    .catch(err => {
      if (err) {
        console.log(err);
      }
    })
    .then(data => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      });
    });
};
