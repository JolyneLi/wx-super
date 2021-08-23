const base_url = "https://api-hmugo-web.itheima.net/api/public/v1/"

function request(url_path) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: base_url + url_path,
            method: "GET",
            success: (result) => {
                resolve(result)
            },
            fail: (err) => {
                reject(err)
            },
        })
    })
}

module.exports = {
    request,
    base_url
  }

