var path = window.location.pathname;

var username = '18801909871';
var password = 'x910230';

if (path == '/otn/login/init') {    // 登录
    $('#username').val(username);
    $('#password').val(password);
} else if (path == '/otn/queryOrder/init') {    // 已完成订单
    if ($('#queryStartDate').length > 0) {
        var beforeDate = new Date();
        beforeDate.setTime(beforeDate.getTime() - 1000*86400*30);

        var month = beforeDate.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        var beforeDateStr = beforeDate.getFullYear() + '-' + month + '-' + beforeDate.getDate();
        $('#queryStartDate').val(beforeDateStr);

        var my_order_btn = document.getElementById('querymyorderbutton');
        my_order_btn.click();
    }
} else if (path == '/otn/confirmPassenger/initDc') {    // 选中乘客
    function clickMember() {
        if ($('#normalPassenger_0').length > 0) {
            var member_btn = document.getElementById('normalPassenger_0');
            member_btn.click();
        } else {
            setTimeout(clickMember, 2000)
        }
    }

    clickMember();
}
