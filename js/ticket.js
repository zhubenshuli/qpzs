// 列表页查询按钮
var query_btn = document.getElementById('query_ticket');

// 5秒后重新查询
function reSearch(ms = 5000) {
    setTimeout(function(){
        clickSearch();
    }, ms);
}

// 查看是否有票
function checkTicket() {
    try {
        var train_ids = ["Z164", "Z40"];

        for (var i = train_ids.length - 1; i >= 0; i--) {
            var $tr = $('tr[datatran=' + train_ids[i] + ']').prev();

            var ticket_id = $tr.prop('id').split('_');

            var $td = $('#YZ_' + ticket_id[1]);

            if ($td.text() != '无') {
                alert('快去抢票啦');

                // var $order_query_btn = $tr.find('td:last a');
                // $order_query_btn.click();
                return false;
            }
        }

        console.log('还是没票呀');
    } catch (err) {
        console.log(err);
    }

    reSearch();
}

// 模拟点击查询按钮
function clickSearch() {
    query_btn.click();

    setTimeout(function(){
        checkTicket();
    }, 1000);
}

reSearch();
