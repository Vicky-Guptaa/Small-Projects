const f=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};f();const u=document.querySelector(".loading-text"),d=document.querySelector("main");let n=0,y=setInterval(m,30);function m(){n===100&&clearInterval(y),u.innerText=`${n}%`,n++,d.style.filter=`blur(${a(n,0,100,30,0)}px)`,u.style.opacity=a(n,0,100,1,0)}function a(c,r,l,i,e){let t=i-e,o=r-l,s=t/o;return s*=c-l,s+=e,s}
