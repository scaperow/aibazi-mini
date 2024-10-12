const app = getApp()

Page({
  data: {
    h5PageUrl: decodeURIComponent('https://aibazi.scaperow.com'),
    isLoaded: false
  },
  bindload(res:any) {
    this.setData({
      isLoaded: true
    })
  }
});

