(()=>{var t={427:()=>{$("#expertise-cards-container").on("mouseenter",(function(t){$(".expertise-card").each((function(t){$(this).css("transform",`translateX(-${t*$(this).width()}px)`)}))})),$("#expertise-cards-container").on("mouseleave",(function(t){$(".expertise-card").each((function(t){$(this).css("z-index","10"),$(this).css("transform","translateX(0px)")}))})),$(".expertise-card").on("click",(function(t){$(this).css("transform","translateY(-25px) scale(1.2)"),$(this).css("z-index","100")}))}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}(()=>{"use strict";let t=function(){class t{#t;#e;#n;#i;#s;#o=0;#a;#c=3;constructor(t,e,n,i,s){this.#t=$(t),this.#e=this.#t.find(e),this.#n=this.#t.find(n),this.#i=this.#t.find(i),this.#s=this.#t.find(s),this.#a=Math.ceil(this.#n.length/this.#c),this.prevSlide=this.prevSlide.bind(this),this.nextSlide=this.nextSlide.bind(this),this.#i.on("click",this.prevSlide),this.#s.on("click",this.nextSlide)}moveSlide(t){let e=this.#o;e+=t,e<0||e>this.#a-1||(this.#e.css("transform",`translate(${-e*this.#t.outerWidth(!0)}px)`),this.#o=e)}prevSlide(t){t.preventDefault(),this.moveSlide(-1)}nextSlide(t){t.preventDefault(),this.moveSlide(1)}}return{init:function(e,n,i,s,o){new t(e,n,i,s,o)}}}();$((function(){const e=[{name:"GTSS",website:"https://www.gtss.ro",logo:""},{name:"Esstub",website:"https://www.esttub.ro",logo:""},{name:"Smart Student",website:"https://www.smartstud.ro",logo:""},{name:"Clinica Lotus",website:"https://lotuslife.ro/",logo:""},{name:"Verso Radioguide",website:"https://lotuslife.ro/",logo:""},{name:"Tec-Trac Inc.",website:"https://lotuslife.ro/",logo:""},{name:"Clinica Lotus",website:"https://lotuslife.ro/",logo:""},{name:"Clinica Lotus",website:"https://lotuslife.ro/",logo:""},{name:"Clinica Lotus",website:"https://lotuslife.ro/",logo:""},{name:"Clinica Lotus",website:"https://lotuslife.ro/",logo:""},{name:"Clinica Lotus",website:"https://lotuslife.ro/",logo:""}];let n=$("#customers-carousel-container");for(let t of e)n.children(".carousel-inner").append(`\n            <div class="carousel-item">\n                ${t.name}\n            </div>\n        `);t.init("#customers-carousel-container",".carousel-inner",".carousel-item",".prev",".next")})),n(427);let e=function(){window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame,window.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame;class t{#r;#h;#l;#d;#m;#u=[];#f=null;#p;constructor(t,e){this.#r=$(t),this.#h=this.#r[0],this.#l=this.#h.getContext("2d"),this.#d=this.#r.width(),this.#m=this.#r.height(),this.#h.width=this.#d,this.#h.height=this.#m,this.#p=e;let n=this;this.updateCanvas=this.updateCanvas.bind(this),$(window).on("resize",(function(t){n.updateCanvasSize()}))}getCanvasRefs(){return{canvasDomRef:this.#r,canvas:this.#h,context:this.#l}}getCanvasWidth(){return this.#d}getCanvasHeight(){return this.#m}updateCanvasSize(){this.#d=this.#r.width(),this.#m=this.#r.height(),this.#h.width=this.#d,this.#h.height=this.#m}addPoint(t){this.#u.push(t)}getPoints(){this.#u}clearCanvas(){this.#l.clearRect(0,0,this.#h.width,this.#h.height)}determineClusters(){for(let t of this.#u)for(let e of this.#u)t!==e&&t.connectNewPoint(e)}updateCanvas(t){if(null!=this.#f){const e=t-this.#f,n=1e3/this.#p;if(e>n){this.determineClusters(),this.clearCanvas();for(let t of this.#u)t.movePointAtFrame(),t.drawPointOnCanvas(),t.drawLinesToNeighbourPointsOnCanvas()}this.#f=t-e%n}else this.#f=t;window.requestAnimFrame(this.updateCanvas)}startAnimation(){window.requestAnimFrame(this.updateCanvas)}cancelAnimation(){window.cancelRequestAnimFrame(this.updateCanvas)}}class e{#h;#v;#w=[];constructor(t,e="#fff",n="#fff",i=7,s=25){this.#v=s,this.reverse=1,this.minDirectionAngle=0,this.maxDirectionAngle=360,this.directionAngle=Math.floor(Math.random()*(this.maxDirectionAngle-this.minDirectionAngle)+this.minDirectionAngle),this.minDistance=.5,this.maxDistance=3,this.distance=Math.random()*(this.maxDistance-this.minDistance)+this.minDistance,this.minDiameter=3,this.maxDiameter=7,this.diameter=Math.floor(Math.random()*(this.maxDiameter-this.minDiameter)+this.minDiameter),this.positionX=Math.random()*t.getCanvasWidth(),this.positionY=Math.random()*(t.getCanvasHeight()-this.#v),this.#h=t,this.numberOfNeighbours=i,this.pointColor=e,this.lineColor=function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,((t,e,n,i)=>e+e+n+n+i+i));const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}(n),this.lineFrameOpacityStep=.025,this.lineFrameDuration=250,this.lineWidth=1,this.#h.addPoint(this),this.drawPointOnCanvas()}static isPointOutsideTheBounds(t,e,n=0){const i=e.getBoundingClientRect();return t.positionX<-n||t.positionX>i.right-i.left+n||t.positionY<-n||t.positionY>i.bottom-i.top+n}calculateDistance(t,e){const n=t.positionX-e.positionX,i=t.positionY-e.positionY;return Math.sqrt(n*n+i*i)}connectNewPoint(t){if(this.#w.length<this.numberOfNeighbours)return void this.#w.push(t);let e=0,n=0;for(let[t,i]of this.#w.entries()){let s=this.calculateDistance(this,i);s>e&&(e=s,n=t)}const i=this.calculateDistance(this,t);i<e&&i>=150&&i<=300&&(this.#w[n]=t)}movePointAtFrame(){const t=this.directionAngle;let n,i,s=t*Math.PI/180;switch(t>=0&&t<=90?1:t>=90&&t<=180?2:t>=180&&t<=270?3:4){case 1:n=Math.sin(s)*this.distance,i=Math.cos(s)*this.distance,this.positionX+=this.reverse*n,this.positionY-=this.reverse*i;break;case 2:s=(t-90)*Math.PI/360,n=Math.sin(s)*this.distance,i=Math.cos(s)*this.distance,this.positionX-=this.reverse*n,this.positionY-=this.reverse*i;break;case 3:s=(t-180)*Math.PI/360,n=Math.sin(s)*this.distance,i=Math.cos(s)*this.distance,this.positionX-=this.reverse*i,this.positionY+=this.reverse*n;break;case 4:s=(t-270)*Math.PI/360,n=Math.sin(s)*this.distance,i=Math.cos(s)*this.distance,this.positionX+=this.reverse*n,this.positionY+=this.reverse*i}e.isPointOutsideTheBounds(this,this.#h.getCanvasRefs().canvas,this.#v)&&(this.reverse*=-1)}drawPointOnCanvas(){const t=this.#h.getCanvasRefs().canvas,e=this.#h.getCanvasRefs().context,n=(t.getBoundingClientRect(),this.positionX),i=this.positionY;e.fillStyle=this.pointColor,e.beginPath(),e.arc(n,i,this.diameter/2,0,2*Math.PI),e.fill(),e.closePath()}drawLinesToNeighbourPointsOnCanvas(){const t=this.#h.getCanvasRefs().canvas,e=this.#h.getCanvasRefs().context;function n(t,n,i=.025){e.beginPath(),e.moveTo(t.positionX,t.positionY),e.lineTo(n.positionX,n.positionY),e.strokeStyle=`rgba(${t.lineColor.r}, ${t.lineColor.g}, ${t.lineColor.b}, ${i})`,e.lineWidth=t.lineWidth,e.stroke(),e.closePath()}t.getBoundingClientRect(),this.positionX,this.positionY,function t(e,i,s){const o=Date.now()-i,a=e.lineFrameDuration;for(let t of s)n(e,t,e.lineFrameOpacityStep);o<a?window.requestAnimFrame((()=>t(e,i,s))):window.cancelRequestAnimFrame((()=>t(e,i,s)))}(this,Date.now(),this.#w)}}return{init:function(n,i="#fff",s="#fff",o=60,a=150,c=7){let r=new t(n,o);for(let t=0;t<a;t++)new e(r,i,s,c);return r},start:function(t){t.startAnimation()},cancel:function(t){t.cancelAnimation()}}}(),i=function(){let t,e;function n(n){var i=$(`.${t}.${e}`),s=null,o=$(`.${t}`).index(i);"next"===n&&o<$(`.${t}`).length?s=$(`.${t}`).eq(o+1):o>0&&(s=$(`.${t}`).eq(o-1)),s&&s.length>0&&(i.removeClass(e),s.addClass(e),$("body, html").animate({scrollTop:s.offset().top},800))}class i{#g;constructor(t,e){var i,s;this.#g=(i=function(t){t.target.classList.add(e)},s=function(t){t.target.classList.remove(e)},new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?i(t):s(t)}))})));const o=this;$(t).each((function(t,e){o.#g.observe(e)}));let a,c=!1;$("body").on("wheel touchstart",(function(t){c||("wheel"===t.type?(c=!0,t.originalEvent.deltaY>=0?n("next"):n("prev"),setTimeout((function(){c=!1}),800)):"touchstart"===t.type&&(a=t.originalEvent.touches[0].clientY))})),$("body").on("touchmove",(function(t){if(t.preventDefault(),!c){const e=t.originalEvent.touches[0].clientY;c=!0,e>a?n("prev"):e<a&&n("next"),setTimeout((function(){c=!1}),800)}})),$("body, html").animate({scrollTop:0},800)}}return{init:function(n,s,o,a){t=o,e=a,new i(n,s)}}}(),s=function(){let t=null;return{init:function(){const n=$("header").height();$(".scroll-section").css("padding-top",` ${n}px`),t=e.init("#particles-canvas","#8ebfd1","#8ebfd1",144),e.start(t),i.init(".scroll-hidden","scroll-show","scroll-section","current-scroll")},cancel:function(){t&&e.cancel(t)}}}();(()=>{let t={};const e={navbar:{key:"navbar",component:"/src/components/navbar.html",container:document.getElementsByTagName("header")[0],onloadcallback:function(){},unloadcallback:function(){}},home:{key:"home",component:"/src/components/home.html",container:document.getElementById("app-router"),routed:!0,onloadcallback:function(){s.init()},unloadcallback:function(){s.cancel()}},contact:{key:"contact",component:"/src/components/contact.html",container:document.getElementById("app-router"),routed:!0,onloadcallback:function(){const t=$("header").height();$("#contact").css("padding-top",` ${t}px`)},unloadcallback:function(){}},footer:{key:"footer",component:"/src/components/footer.html",container:document.getElementsByTagName("footer")[0],onloadcallback:function(){},unloadcallback:function(){}}},n={home:{path:"/",component:e.home},contact:{path:"/contact",component:e.contact}};window.loadComponent=async function(n){("string"==typeof n||n instanceof String)&&(n=e[n]);try{if(n.key in t)throw new Error("Component already loaded!");const e=await fetch(n.component);e.ok&&(t[n.key]=n,n.container.innerHTML=await e.text(),n.onloadcallback())}catch(t){console.log(t)}},window.unloadComponent=async function(e){try{if(!e.key in t)throw new Error("Component not loaded!");e.unloadcallback(),e.container.innerHTML="",delete t[e.key]}catch(t){console.log(t)}},window.appNavigate=async function(t,e){t.preventDefault();try{for(let t in n)e!=t&&await window.unloadComponent(n[t].component);window.loadComponent(n[e].component),window.history.pushState({},"",n[e].path)}catch(t){console.log(t)}},[e.navbar,e.footer,function(){const t=window.location.pathname;for(let e in n)if(t===e.path)return n[e];return n.home}().component].forEach((t=>{window.loadComponent(t)}))})(),$((function(){$(".current-year-el").text((new Date).getFullYear().toString())}))})()})();