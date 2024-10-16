App({
  promise: new Promise(() => {

  }),

  onLaunch: function () {
    this.promise = new Promise(async (resolve) => {
      // 获取当前时间戳
      const currentTime = new Date().getTime();
      // 计算7天后的时间戳 (7天 * 24小时 * 60分钟 * 60秒 * 1000毫秒)
      const sevenDaysLater = new Date("2024-10-17").getTime();

      // 判断当前时间是否小于7天后的时间戳
      if (currentTime <= sevenDaysLater) {
        // 如果当前时间小于7天后的时间戳，请求 API 获取 reviewing 值
        const result = await this.fetchDataFromAPI();
        resolve(result);
      } else {
        resolve(false)
      }
    })

  },



  getPromise() {
    return this.promise;
  },

  fetchDataFromAPI() {
    const apiUrl = 'https://aibazi-api.scaperow.com/version';
    return new Promise((resolve) => {
      tt.request({
        url: apiUrl,
        method: 'GET',
        success: (res: any) => {
          if (res.statusCode === 200 && res.data) {
            const { reviewing } = res.data; // 解构出 reviewing
            if (reviewing) {
              resolve(true)
            } else {
              resolve(false);
            }
          } else {
            resolve(false);
          }
        },
        fail: (err) => {
          console.error(err);
          resolve(false);
        }
      });
    })

  }
})
