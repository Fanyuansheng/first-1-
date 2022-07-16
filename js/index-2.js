//二维码
$('#WeChat-icon').mouseover(function () {
  $('#WeChat-img').show();
});
$('#WeChat-icon').mouseout(function () {
  $('#WeChat-img').hide();
});
//顶部时间
function getTimer() {
	//new一个Date对象
	var current = new Date();
	var year = current.getFullYear();
	var month = current.getMonth() + 1;
	var date = current.getDate();
	var weekIndex = current.getDay();
	var weekArra = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
	var week = weekArra[weekIndex];
	var hour = current.getHours() < 10 ? "0" + current.getHours() : current.getHours();
	var minute = current.getMinutes() < 10 ? "0" + current.getMinutes() : current.getMinutes();
	var second = current.getSeconds() < 10 ? "0" + current.getSeconds() : current.getSeconds();
	var str = year + "年" + month + "月" + date + " " + week + " " + hour + ":" + minute + ":" + second;
	$(".timer").text(str);
	setTimeout('getTimer()', 1000)
}
//返回顶部
$('#top').click(function () {
  let top = document.documentElement.scrollTop; //获取当前滚动条的位置
  let time = setInterval(function () {
    //启用定时
    top = top - 15; //逐次递减
    document.documentElement.scrollTop = top;
    if (top <= 0) {
      clearInterval(time);
      //终止定时
    }
  }, 8);
});
//网页顶部导航栏
window.onscroll = function () {
  if (document.documentElement.scrollTop > 600) {
    $('#header')
      .css('boxShadow', '1px 0px 4px 5px #3333')
      .css('position', 'fixed')
      .css('backgroundColor', '#fff');
    $('.nav-a').css('color', 'black');
    $('.phone-a').css('backgroundColor', 'black');
    $('#top').css('display', 'block');
    $('#moon').css('display', 'block');
  } else {
    $('#header')
      .css('boxShadow', 'none')
      .css('position', 'absolute')
      .css('backgroundColor', 'transparent');
    $('.nav-a').css('color', '#fff');
    $('.phone-a').css('backgroundColor', '#fff');
    $('#top').css('display', 'none');
    $('#moon').css('display', 'none');
  }
};
//网站必读
function clause() {
  if (window.screen.width < 1024) {
    alert(
      '很抱歉,系统识别您为手机或平板用户，\n请您在侧边栏阅读我们的网站条款。\n谢谢您的配合！',
    );
  } else {
    $('#website-stated').css('display', 'block');
    $('#cover').css('display', 'block');
    $('#website-stated-input').click(function () {
      $('#website-stated').css('display', 'none');
      $('#cover').css('display', 'none');
    });
    $('#website-stated-off').click(function () {
      $('#website-stated').css('display', 'none');
      $('#cover').css('display', 'none');
    });
  }
}
//黑暗模式代码
//夜晚
function moon() {
  $('#replace-sun').css('display', 'block');
  $('#replace-moon').css('display', 'none');
  $('#home')
    .css('backgroundImage', 'url(./img/moon.jpg)')
    .css('backgroundSize', 'cover')
    .css('backgroundRepeat', 'no-repeat');
  $('#introduce').css('backgroundColor', '#B5B5B5').css('color', '#fff');
  $('#works').css('backgroundColor', '#828282').css('color', '#fff');
  $('#bottom').css('backgroundColor', '#06060b').css('color', '#FFFFFF');
  $('#bottom a').css('color', '#FFFFFF');
}
//白天
function sun() {
  $('#replace-sun').css('display', 'none');
  $('#replace-moon').css('display', 'block');
  $('#home')
    .css('backgroundImage', 'url(./img/ncxicn_bg.png)')
    .css('backgroundSize', 'cover')
    .css('backgroundRepeat', 'no-repeat');
  $('#introduce').css('backgroundColor', '#bfa').css('color', '#333');
  $('#works').css('backgroundColor', '#fafafa').css('color', '#333');
  $('#bottom')
    .css('backgroundColor', 'rgb(245 245 245)')
    .css('color', 'rgb(96, 96, 109)');
  $('#bottom a').css('color', 'rgb(96, 96, 109)');
}
//手机适配
function PhoneNavOff() {
  $('#phone-nav').css('right', '-300px');
  $('#cover').css('display', 'none');
}
function PhoneNavNO() {
  $('#phone-nav').css('right', '0px');
  $('#cover').css('display', 'block');
}
