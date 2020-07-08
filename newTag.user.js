// ==UserScript==
// @name         新标签页打开工具(newTagEverywhere)
// @namespace    https://github.com/RuanXuSong/newTagScript
// @version      1.0
// @description  在任何页面都可以在新标签页打开链接，符合中国人习惯
// @author       Ruan Xusong
// @match        http://*/*
// @match        https://*/*
// @license      MIT
// @grant        none
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// ==/UserScript==

(function () {
  'use strict';
  $.noConflict(); // 兼容网页中$
  // dom加载完成后，运行jquery函数域
  jQuery(document).ready(function ($) {
    $('a').attr('target', '_blank');
  });
})();
