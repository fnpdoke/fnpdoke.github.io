// ==UserScript==
// @name         JCB UU
// @namespace    fpdk
// @version      20210801
// @description  JCB UU
// @author       fpdk
// @match        https://ezweb.easycard.com.tw/Event01/*
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.slim.min.js
// ==/UserScript==

(function() {
    'use strict';

var $ = window.$;
$('#header').after('<div id="usCmd" style="text-align: center"></div>');
$('#usCmd')
    .append('<a>微</a>&emsp;')
    .append('<a>祖</a>&emsp;')
    .append('<a>洋</a>&emsp;')
    .append('<a>紅</a>&emsp;')
    .append('<a>黑</a>&emsp;')
    .append('<a>玉</a>&emsp;')
    .append('<a>噹</a>&emsp;')
    ;

var usCC = ["3565 99 3509",
            "3567 33 2103",
            "3566 85 1016",
            "3567 33 4103",
            "3567 33 4111",
            "3566 18 0224",
            "3566 18 0224",
            "3566 18 0226"];
var usEC = ["8380 3624 0106 9296",
            "8200 8505 0001 0565",
            "8201 3800 0581 9301",
            "8200 8518 0249 2337",
            "8200 8519 0140 0991",
            "8280 8500 6543 9897",
            "8280 8599 0655 4194"];

function go(i){
    var cc = usCC[i].split(" ");
    var ec = usEC[i].split(" ");
    $('#txtCreditCard1').val(cc[0]);
    $('#txtCreditCard2').val(cc[1]);
    $('#txtCreditCard4').val(cc[2]);
    $('#txtEasyCard1').val(ec[0]);
    $('#txtEasyCard2').val(ec[1]);
    $('#txtEasyCard3').val(ec[2]);
    $('#txtEasyCard4').val(ec[3]);
}
$('#usCmd a').click(function(){
    go($(this).index());
});

})();
