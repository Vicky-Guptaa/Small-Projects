const g=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function f(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=f(e);fetch(e.href,t)}};g();const c=document.querySelector("body"),r=document.querySelectorAll(".img-slider"),m=document.querySelector(".left-slide"),y=document.querySelector(".right-slide"),i=["bg-[url('https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869_1280.jpg')]","bg-[url('https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg')]","bg-[url('https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg')]","bg-[url('https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_1280.jpg')]","bg-[url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')]"];console.log(i);let o=0;console.log(c);function u(){c.classList.remove(i[o])}function a(){c.classList.add(i[o])}function p(){r.forEach(s=>{s.classList.add("opacity-0")}),r[o].classList.remove("opacity-0")}y.addEventListener("click",()=>{u(),o=(o+1)%r.length,a(),p()});m.addEventListener("click",()=>{u(),o=(o-1)%r.length,o<0&&(o=o+r.length),console.log(o),a(),p()});
