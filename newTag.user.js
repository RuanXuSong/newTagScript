// ==UserScript==
// @name         新标签页打开工具(newTagEverywhere)
// @namespace    https://github.com/RuanXuSong/newTagScript
// @version      1.1
// @description  在任何页面都可以在新标签页打开链接，符合中国人习惯
// @author       Ruan Xusong
// @match        http://*/*
// @match        https://*/*
// @license      MIT
// @grant        none
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// ==/UserScript==

(function () {
  const linkList = document.getElementsByTagName('a');
  Array.from(linkList).forEach((item) => item.setAttribute('target', '_blank'));
})();
