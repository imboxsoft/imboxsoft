export let ImboxScrolling=function(){let t,e;function n(n){var o=$(`.${t}.${e}`),i=null,r=$(`.${t}`).index(o);"next"===n&&r<$(`.${t}`).length?i=$(`.${t}`).eq(r+1):r>0&&(i=$(`.${t}`).eq(r-1)),i&&i.length>0&&(o.removeClass(e),i.addClass(e),$("body, html").animate({scrollTop:i.offset().top},800))}class o{#t;constructor(t,e){var o,i;this.#t=(o=function(t){t.target.classList.add(e)},i=function(t){t.target.classList.remove(e)},new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?o(t):i(t)}))})));const r=this;$(t).each((function(t,e){r.#t.observe(e)}));let s,c=!1;$("body").on("wheel touchstart",(function(t){c||("wheel"===t.type?(c=!0,t.originalEvent.deltaY>=0?n("next"):n("prev"),setTimeout((function(){c=!1}),800)):"touchstart"===t.type&&(s=t.originalEvent.touches[0].clientY))})),$("body").on("touchmove",(function(t){if(t.preventDefault(),!c){const e=t.originalEvent.touches[0].clientY;c=!0,e>s?n("prev"):e<s&&n("next"),setTimeout((function(){c=!1}),800)}})),$("body, html").animate({scrollTop:0},800)}}return{init:function(n,i,r,s){t=r,e=s,new o(n,i)}}}();