const app = getApp()

Page({
  data: {
    reviewing: false
  },

  onLoad() {
    const app = getApp();
    app.getPromise()
      .then((result: boolean) => {
        if (result) {
          this.setData({ reviewing: true })
        } else {
          this.redirect();
        }
      });

  },

  redirect() {
    tt.navigateTo({
      url: '/pages/main/main', // 这里填写要跳转到的页面路径
    });
  },


});