(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"653F":function(t,e){const n=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],o=document.querySelector('button[data-action="start"]'),a=document.querySelector('button[data-action="stop"]'),l=document.querySelector("body");let d=null;o.addEventListener("click",()=>{null===d&&(d=setInterval(()=>{var t,e;l.style["background-color"]=n[(t=0,e=n.length-1,Math.floor(Math.random()*(e-t+1)+t))]},1e3)),o.disabled=!0,a.disabled=!1}),a.addEventListener("click",()=>{clearInterval(d),d=null,a.disabled=!0,o.disabled=!1})},QfWi:function(t,e,n){"use strict";n.r(e);n("653F")}},[["QfWi",1]]]);
//# sourceMappingURL=main.ce4b96b8fffeb163d0ad.js.map