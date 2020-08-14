// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    display:true,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let post_content=[{
      date:'2020.8.1',
      title:"中央人民政府意见",
      img:{
        post_img:"/images/posts_img.jpg"
      },
      view_content:"《关于香港特别行政区2020年立法会换届选举押后事宜的报告》收悉。中央人民政府对近期香港特别行政区暴发的新一轮新冠肺炎疫情高度关注，将应香港特别行政区抗击疫情需求提供一切必要支持和援助，切实保护香港居民生命安全和身体健康。现就立法会选举推迟有关事宜，提出以下意见",
      collect_num:"2020",
      view_num:"888"
    },{
      date:'2020.8.1',
      title:"中央人民政府意见",
      img:{
        post_img:"/images/posts_img.jpg"
      },
      view_content:"《关于香港特别行政区2020年立法会换届选举押后事宜的报告》收悉。中央人民政府对近期香港特别行政区暴发的新一轮新冠肺炎疫情高度关注，将应香港特别行政区抗击疫情需求提供一切必要支持和援助，切实保护香港居民生命安全和身体健康。现就立法会选举推迟有关事宜，提出以下意见",
      collect_num:"2020",
      view_num:"888"
    },{
      date:'2020.8.1',
      title:"中央人民政府意见",
      img:{
        post_img:"/images/posts_img.jpg"
      },
      view_content:"《关于香港特别行政区2020年立法会换届选举押后事宜的报告》收悉。中央人民政府对近期香港特别行政区暴发的新一轮新冠肺炎疫情高度关注，将应香港特别行政区抗击疫情需求提供一切必要支持和援助，切实保护香港居民生命安全和身体健康。现就立法会选举推迟有关事宜，提出以下意见",
      collect_num:"2020",
      view_num:"888"
    }]
    this.setData({post_content})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})