(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,n,e){},MBjs:function(t,n,e){"use strict";var o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a={body:document.querySelector("body"),startBtnRef:document.querySelector('button[data-action="start"]'),stopBtnRef:document.querySelector('button[data-action="stop"]')},c=null;function r(){c=setInterval((function(){var t,n;a.body.style.backgroundColor=o[(t=0,n=o.length-1,Math.floor(Math.random()*(n-t+1)+t))]}),1e3)}a.startBtnRef.addEventListener("click",(function(t){r(),t.target.disabled=!0})),a.stopBtnRef.addEventListener("click",(function(){clearInterval(c),a.startBtnRef.disabled=!1}))},QfWi:function(t,n,e){"use strict";e.r(n);e("L1EO"),e("MBjs")}},[["QfWi",1]]]);
//# sourceMappingURL=main.89d2ef30b1e613eb1398.js.map