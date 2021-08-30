const base_url = "https://api-hmugo-web.itheima.net/api/public/v1/"

// 数据处理
function dealResult(res, resolve, reject) {
    switch (res.statusCode) {
        case 200:
            resolve(res)
            break;
        case 401:
        case 403:
            wx.reLaunch({
                url: '/pages/LogIn/LogIn',
            })
            return false;
        default:
            wx.showToast({
                title: res.data.message,
                icon: 'none',
                duration: 1500
            })
            reject(res.data);
            break;
    }
}

/**
 * 封装数据请求
 */
const http_api = {
    /**  get  */
    get: (url_path, params) => {
        if (params == null) return params = {}
        return new Promise((resolve, reject) => {
            wx.request({
                url: base_url + url_path,
                data: params,
                method: "GET",
                dataType: "json",
                //   header: {
                //     'Authorization': 'Basic ' + wx.getStorageSync(storageKey.empTokenKey)
                //   },
                success: (res) => {
                    if (res.statusCode == 500) {
                        wx.showModal({
                            title: '友情提示',
                            content: '网络连接失败，请稍后再试！',
                            showCancel: false,
                        })
                        resolve(res);
                        // wx.hideLoading();
                    }

                },
                fail: (res) => {
                    reject(res);
                    // wx.hideLoading();
                }

            })

        })
    },
    /**  post  */
    post: (url_path, params) => {
        if (params == null) return params = {}
        return new Promise((resolve, reject) => {
            wx.request({
                url: base_url + url_path,
                data: params,
                method: "POST",
                dataType: "json",
                //   header: {
                //     'Authorization': 'Basic ' + wx.getStorageSync(storageKey.empTokenKey)
                //   },
                success: () => {
                    dealResult(res, resolve, reject)
                    // wx.hideLoading();
                },
                fail: (err) => {
                    console.log('err' + err);
                    reject(err)
                    // wx.hideLoading()
                }
            })
        })

    }
}

module.exports={
    base_url,
    http_api
}