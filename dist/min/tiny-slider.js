var tns=function(){Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var t=window,Ln=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,Pn=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function zn(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function n(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function i(t,e,n){return n&&localStorage.setItem(t,e),e}function l(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var a=document.documentElement;function u(t){var e="";return t.fake&&(e=a.style.overflow,t.style.background="",t.style.overflow=a.style.overflow="hidden",a.appendChild(t)),e}function c(t,e){t.fake&&(t.remove(),a.style.overflow=e,a.offsetHeight)}function Hn(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Rn(t){return("insertRule"in t?t.cssRules:t.rules).length}function qn(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var r="classList"in document.createElement("_"),jn=r?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Fn=r?function(t,e){jn(t,e)||t.classList.add(e)}:function(t,e){jn(t,e)||(t.className+=" "+e)},Vn=r?function(t,e){jn(t,e)&&t.classList.remove(e)}:function(t,e){jn(t,e)&&(t.className=t.className.replace(e,""))};function Qn(t,e){return t.hasAttribute(e)}function o(t){return void 0!==t.item}function Xn(t,e){if(t=o(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Yn(t,e){t=o(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function Kn(t){t.style.cssText=""}function Gn(t){Qn(t,"hidden")||Xn(t,{hidden:""})}function Jn(t){Qn(t,"hidden")&&Yn(t,"hidden")}function Un(t){return 0<t.offsetWidth&&0<t.offsetHeight}function s(t){for(var e=document.createElement("fakeelement"),n=(t.length,0);n<t.length;n++){var i=t[n];if(void 0!==e.style[i])return i}return!1}function f(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var d=!1;try{var v=Object.defineProperty({},"passive",{get:function(){d=!0}});window.addEventListener("test",null,v)}catch(t){}var h=!!d&&{passive:!0};function _n(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&h;t.addEventListener(n,e[n],i)}}function Zn(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&h;t.removeEventListener(n,e[n],i)}}function $n(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}var p=navigator.userAgent,m=!0,y={};try{(y=localStorage).tnsApp&&y.tnsApp!==p&&["tC","tSP","tMQ","tTf","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){y.removeItem(t)}),y.tnsApp=p}catch(t){m=!1}m&&!localStorage&&(y={});var g,x,b,w,A,C,T,k,O,E,N,D,M,I,ti=document,ei=window,ni=13,ii=32,ai=33,ri=34,oi=35,si=36,li=37,ui=38,ci=39,fi=40,di=n(y.tC)||i("tC",function(){var t=document,e=l(),n=u(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],s=0;s<3;s++)if(r=o[s],i.style.width=r,10===i.offsetWidth){a=r.replace("(10px)","");break}}catch(t){}return e.fake?c(e,n):i.remove(),a}(),m),vi=n(y.tSP)||i("tSP",(E=document,N=l(),D=u(N),M=E.createElement("div"),I=E.createElement("div"),M.style.cssText="width: 10px",I.style.cssText="float: left; width: 5.5px; height: 10px;",k=I.cloneNode(!0),M.appendChild(I),M.appendChild(k),N.appendChild(M),O=I.offsetTop!==k.offsetTop,N.fake?c(N,D):M.remove(),O),m),hi=n(y.tMQ)||i("tMQ",(x=document,b=l(),w=u(b),A=x.createElement("div"),C=x.createElement("style"),T="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",C.type="text/css",A.className="tns-mq-test",b.appendChild(C),b.appendChild(A),C.styleSheet?C.styleSheet.cssText=T:C.appendChild(x.createTextNode(T)),g=window.getComputedStyle?window.getComputedStyle(A).position:A.currentStyle.position,b.fake?c(b,w):A.remove(),"absolute"===g),m),pi=n(y.tTf)||i("tTf",s(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),m),mi=n(y.tTDu)||i("tTDu",s(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),m),yi=n(y.tTDe)||i("tTDe",s(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]),m),gi=n(y.tADu)||i("tADu",s(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]),m),xi=n(y.tADe)||i("tADe",s(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]),m),bi=n(y.tTE)||i("tTE",f(mi,"Transition"),m),wi=n(y.tAE)||i("tAE",f(gi,"Animation"),m);hi||(vi=!1);var Ai=function(w){w=zn({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,fixedWidthViewportWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1},w||{});for(var t=ei.console&&"function"==typeof ei.console.warn,e=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],n=e.length;n--;){var i=e[n];if("string"==typeof w[i]){var a=ti.querySelector(w[i]);if(!a||!a.nodeName)return void(t&&console.warn("Can't find",w[i]));w[i]=a}}if(!(w.container.children&&w.container.children.length<1)){if(w.responsive){var r={},o=w.responsive;for(var s in o){var l=o[s];r[s]="number"==typeof l?{items:l}:l}w.responsive=r,r=null,0 in w.responsive&&delete(w=zn(w,w.responsive[0])).responsive[0]}var k="carousel"===w.mode;if(!k){w.axis="horizontal",w.rewind=!1,w.edgePadding=!1;var O="tns-fadeIn",E="tns-fadeOut",u=!1,N=w.animateNormal||"tns-normal";bi&&wi&&(O=w.animateIn||O,E=w.animateOut||E,u=w.animateDelay||u)}var D,M,I="horizontal"===w.axis,S=ti.createElement("div"),W=ti.createElement("div"),B=w.container,A=B.parentNode,L=B.children,P=L.length,C=w.responsive,c=[],z=!1,H=0,R=Ne();if(w.fixedWidth)var q=De(A);if(C){(z=Object.keys(C).map(function(t){return parseInt(t)}).sort(function(t,e){return t-e})).forEach(function(t){c=c.concat(Object.keys(C[t]))});var f=[];c.forEach(function(t){f.indexOf(t)<0&&f.push(t)}),c=f,je()}var d,v,T,h,p,m,y,g,j=Ie("items"),F="page"===Ie("slideBy")?j:Ie("slideBy"),V=w.nested,Q=Ie("gutter"),X=Ie("edgePadding"),Y=Ie("fixedWidth"),x=w.fixedWidthViewportWidth,K=Ie("arrowKeys"),G=Ie("speed"),b=w.rewind,J=!b&&w.loop,U=Ie("autoHeight"),_=(g=document.createElement("style"),y&&g.setAttribute("media",y),document.querySelector("head").appendChild(g),g.sheet?g.sheet:g.styleSheet),Z=w.lazyload,$=[],tt=Me("edgePadding"),et=J?(p=function(){{if(Y&&!x)return P-1;var n=Y?"fixedWidth":"items",i=Y,a=[];return(i||w[n]<P)&&a.push(w[n]),z&&0<=c.indexOf(n)&&z.forEach(function(t){var e=C[t][n];e&&(i||e<P)&&a.push(e)}),a.length||a.push(0),i?Math.ceil(x/Math.min.apply(null,a)):Math.max.apply(null,a)}}(),m=k?Math.ceil((5*p-P)/2):3*p-P,m=Math.max(p,m),tt?m+1:m):0,nt=k?P+2*et:P+et,it=!(!Y||J||X),at=!k||!J,rt=I?"left":"top",ot="",st="",lt=Ie("startIndex"),ut=lt?function(t){(t%=P)<0&&(t+=P);return t=Math.min(t,nt-j)}(lt):k?et:0,ct=ut,ft=0,dt=Oe(),vt=w.swipeAngle,ht=!vt||"?",pt=!1,mt=w.onInit,yt=new $n,gt=B.id,xt=" tns-slider tns-"+w.mode,bt=B.id||(h=window.tnsId,window.tnsId=h?h+1:1,"tns"+window.tnsId),wt=Ie("disable"),At=w.freezable,Ct=!!wt||!!At&&P<=j,Tt="inner"===V?" !important":"",kt={click:mn,keydown:function(t){switch((t=kn(t)).keyCode){case li:case ui:case ai:Yt.disabled||mn(t,-1);break;case ci:case fi:case ri:Kt.disabled||mn(t,1);break;case si:pn(0,t);break;case oi:pn(P-1,t)}}},Ot={click:function(t){pt&&hn();var e=(t=kn(t)).target||t.srcElement;for(;e!==Ut&&!Qn(e,"data-nav");)e=e.parentNode;Qn(e,"data-nav")&&pn(($t=[].indexOf.call(Gt,e))+et,t)},keydown:function(t){var e=ti.activeElement;if(!Qn(e,"data-nav"))return;var n=(t=kn(t)).keyCode,i=[].indexOf.call(Gt,e),a=_t.length,r=_t.indexOf(i);w.navContainer&&(a=P,r=i);function o(t){return w.navContainer?t:_t[t]}switch(n){case li:case ai:0<r&&Cn(Gt[o(r-1)]);break;case ui:case si:0<r&&Cn(Gt[o(0)]);break;case ci:case ri:r<a-1&&Cn(Gt[o(r+1)]);break;case fi:case oi:r<a-1&&Cn(Gt[o(a-1)]);break;case ni:case ii:pn(($t=i)+et,t)}}},Et={mouseover:function(){ae&&(gn(),re=!0)},mouseout:function(){re&&(yn(),re=!1)}},Nt={visibilitychange:function(){ti.hidden?ae&&(gn(),se=!0):se&&(yn(),se=!1)}},Dt={keydown:function(t){switch((t=kn(t)).keyCode){case li:mn(t,-1);break;case ci:mn(t,1)}}},Mt={touchstart:Dn,touchmove:Mn,touchend:In,touchcancel:In},It={mousedown:Dn,mousemove:Mn,mouseup:In,mouseleave:In},St=Me("controls"),Wt=Me("nav"),Bt=w.navAsThumbnails,Lt=Me("autoplay"),Pt=Me("touch"),zt=Me("mouseDrag"),Ht="tns-slide-active",Rt="tns-complete",qt={load:Ye,error:Ye};if(St)var jt,Ft,Vt=Ie("controls"),Qt=Ie("controlsText"),Xt=w.controlsContainer,Yt=w.prevButton,Kt=w.nextButton;if(Wt)var Gt,Jt=Ie("nav"),Ut=w.navContainer,_t=[],Zt=_t,$t=-1,te=Ee(),ee=te,ne="tns-nav-active";if(Lt)var ie,ae,re,oe,se,le=Ie("autoplay"),ue=Ie("autoplayTimeout"),ce="forward"===w.autoplayDirection?1:-1,fe=Ie("autoplayText"),de=Ie("autoplayHoverPause"),ve=w.autoplayButton,he=Ie("autoplayResetOnVisibility"),pe=["<span class='tns-visually-hidden'>"," animation</span>"];if(Pt||zt)var me,ye={},ge={},xe=!1,be=0,we=I?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};if(Pt)var Ae=Ie("touch");if(zt)var Ce=Ie("mouseDrag");Ct&&(Vt=Jt=Ae=Ce=K=le=de=he=!1),pi&&(rt=pi,ot="translate",ot+=I?"X(":"Y(",st=")"),function(){S.appendChild(W),A.insertBefore(S,B),W.appendChild(B),D=De(W);var t="tns-outer",e="tns-inner",n=Me("gutter");if(k?I&&(Me("edgePadding")||n&&!w.fixedWidth)?t+=" tns-ovh":e+=" tns-ovh":n&&(t+=" tns-ovh"),S.className=t,W.className=e,W.id=bt+"-iw",U&&(W.className+=" tns-ah",W.style[mi]=G/1e3+"s"),""===B.id&&(B.id=bt),xt+=vi?" tns-subpixel":" tns-no-subpixel",xt+=di?" tns-calc":" tns-no-calc",k&&(xt+=" tns-"+w.axis),B.className+=xt,k&&bi){var i={};i[bi]=hn,_n(B,i)}t=e=null;for(var a=0;a<P;a++){(h=L[a]).id||(h.id=bt+"-item"+a),Fn(h,"tns-item"),!k&&N&&Fn(h,N),Xn(h,{"aria-hidden":"true",tabindex:"-1"})}if(J||X){for(var r=ti.createDocumentFragment(),o=ti.createDocumentFragment(),s=et;s--;){var l=s%P,u=L[l].cloneNode(!0);if(Yn(u,"id"),o.insertBefore(u,o.firstChild),k){var c=L[P-1-l].cloneNode(!0);Yn(c,"id"),r.appendChild(c)}}B.insertBefore(r,B.firstChild),B.appendChild(o),L=B.children}if(Me("autoHeight")||!k){var f=B.querySelectorAll("img");qn(f,function(t){_n(t,qt);var e=t.src;t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e}),Ln(function(){Je(function(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}(f),function(){T=!0})})}for(var d=ut,v=ut+Math.min(P,j);d<v;d++){var h;Xn(h=L[d],{"aria-hidden":"false"}),Yn(h,["tabindex"]),Fn(h,Ht),k||(h.style.left=100*(d-ut)/j+"%",Fn(h,O),Vn(h,N))}if(k&&I&&(vi?(Hn(_,"#"+bt+" > .tns-item","font-size:"+ei.getComputedStyle(L[0]).fontSize+";",Rn(_)),Hn(_,"#"+bt,"font-size:0;",Rn(_))):qn(L,function(t,e){var n;t.style.marginLeft=(n=e,di?di+"("+100*n+"% / "+nt+")":100*n/nt+"%")})),hi){var p=Se(w.edgePadding,w.gutter,w.fixedWidth,w.speed);Hn(_,"#"+bt+"-iw",p,Rn(_)),k&&(p=I?"width:"+We(w.fixedWidth,w.gutter,w.items)+";":"",mi&&(p+=ze(G)),Hn(_,"#"+bt,p,Rn(_))),(I||w.gutter)&&(p=Be(w.fixedWidth,w.gutter,w.items)+Le(w.gutter),k||(mi&&(p+=ze(G)),gi&&(p+=He(G))),Hn(_,"#"+bt+" > .tns-item",p,Rn(_)))}else if(W.style.cssText=Se(X,Q,Y),k&&I&&(B.style.width=We(Y,Q,j)),I||Q){p=Be(Y,Q,j)+Le(Q);Hn(_,"#"+bt+" > .tns-item",p,Rn(_))}if(I||wt||($e(),Sn()),C&&hi&&z.forEach(function(t){var e,n=C[t],i="",a="",r="",o=Ie("items",t),s=Ie("fixedWidth",t),l=Ie("speed",t),u=Ie("edgePadding",t),c=Ie("gutter",t);("edgePadding"in n||"gutter"in n)&&(i="#"+bt+"-iw{"+Se(u,c,s,l)+"}"),k&&I&&("fixedWidth"in n||"gutter"in n||"items"in n)&&(a="width:"+We(s,c,o)+";"),mi&&"speed"in n&&(a+=ze(l)),a&&(a="#"+bt+"{"+a+"}"),("fixedWidth"in n||Me("fixedWidth")&&"gutter"in n||!k&&"items"in n)&&(r+=Be(s,c,o)),"gutter"in n&&(r+=Le(c)),!k&&"speed"in n&&(mi&&(r+=ze(l)),gi&&(r+=He(l))),r&&(r="#"+bt+" > .tns-item{"+r+"}"),(e=i+a+r)&&_.insertRule("@media (min-width: "+t/16+"em) {"+e+"}",_.cssRules.length)}),k&&!wt&&un(),navigator.msMaxTouchPoints&&(Fn(B,"ms-touch"),_n(B,{scroll:Tn}),tn()),Wt){var m=k?et:0;if(Ut)Xn(Ut,{"aria-label":"Carousel Pagination"}),qn(Gt=Ut.children,function(t,e){Xn(t,{"data-nav":e,tabindex:"-1","aria-selected":"false","aria-controls":L[m+e].id})});else{var y="",g=Bt?"":"hidden";for(d=0;d<P;d++)y+='<button data-nav="'+d+'" tabindex="-1" aria-selected="false" aria-controls="'+L[m+d].id+'" '+g+' type="button"></button>';y='<div class="tns-nav" aria-label="Carousel Pagination">'+y+"</div>",S.insertAdjacentHTML("afterbegin",y),Ut=S.querySelector(".tns-nav"),Gt=Ut.children}if(Wn(),mi){var x=mi.substring(0,mi.length-18).toLowerCase();p="transition: all "+G/1e3+"s";x&&(p="-"+x+"-"+p),Hn(_,"[aria-controls^="+bt+"-item]",p,Rn(_))}console.log(te),Xn(Gt[te],{tabindex:"0","aria-selected":"true"}),Fn(Gt[te],ne),_n(Ut,Ot),Jt||Gn(Ut)}if(Lt){var b=le?"stop":"start";ve?Xn(ve,{"data-action":b}):w.autoplayButtonOutput&&(W.insertAdjacentHTML("beforebegin",'<button data-action="'+b+'" type="button">'+pe[0]+b+pe[1]+fe[0]+"</button>"),ve=S.querySelector("[data-action]")),ve&&_n(ve,{click:An}),le?(bn(),de&&_n(B,Et),he&&_n(B,Nt)):ve&&Gn(ve)}St&&(Xt||Yt&&Kt?(Xt&&(Yt=Xt.children[0],Kt=Xt.children[1],Xn(Xt,{"aria-label":"Carousel Navigation",tabindex:"0"}),Xn(Xt.children,{"aria-controls":bt,tabindex:"-1"})),Xn(Yt,{"data-controls":"prev"}),Xn(Kt,{"data-controls":"next"})):(S.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+bt+'" type="button">'+Qt[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+bt+'" type="button">'+Qt[1]+"</button></div>"),Xt=S.querySelector(".tns-controls"),Yt=Xt.children[0],Kt=Xt.children[1]),jt=nn(Yt),Ft=nn(Kt),on(),Xt?_n(Xt,kt):(_n(Yt,kt),_n(Kt,kt)),Vt||Gn(Xt)),k&&(Ae&&_n(B,Mt),Ce&&_n(B,It)),K&&_n(ti,Dt),"inner"===V?yt.on("outerResized",function(){qe(),yt.emit("innerLoaded",Bn())}):_n(ei,{resize:Re}),"outer"===V?yt.on("innerLoaded",Ge):!U&&k||wt||Ge(),Xe(),Fe(),Ve(),yt.on("indexChanged",Ue),"function"==typeof mt&&mt(Bn()),"inner"===V&&yt.emit("innerLoaded",Bn()),wt&&Qe(!0),M=!0}();var Te=J?k?function(){var t=ft,e=dt;if(t+=F,e-=F,X)t+=1,e-=1;else if(Y){var n=Q||0;n<q%(Y+n)&&(e-=1)}et&&(e<ut?ut-=P:ut<t&&(ut+=P))}:function(){ut=ft<=ut&&ut<=dt?ut:dt<ut?ut-P:ut+P}:function(){ut=ft<=ut&&ut<=dt?ut:dt<ut?dt:ft},ke=k?function(t,e){var n,i,a,r,o,s,l,u,c,f,d;e||(e=ln()),it&&ut===dt&&(e=-((Y+Q)*nt-D)+"px"),mi||!t?(cn(e),t&&Un(B)||hn()):(n=B,i=rt,a=ot,r=st,o=e,s=G,l=hn,u=Math.min(s,10),c=0<=o.indexOf("%")?"%":"px",o=o.replace(c,""),f=Number(n.style[i].replace(a,"").replace(r,"").replace(c,"")),d=(o-f)/s*u,setTimeout(function t(){s-=u,f+=d,n.style[i]=a+f+c+r,0<s?setTimeout(t,u):l()},u)),I||Sn()}:function(t){$=[];var e={};e[bi]=e[wi]=hn,Zn(L[ct],e),_n(L[ut],e),fn(ct,O,E,!0),fn(ut,N,O),bi&&wi&&t||hn()};return{getInfo:Bn,events:yt,goTo:pn,play:function(){le&&!ae&&(bn(),oe=!1)},pause:function(){ae&&(wn(),oe=!0)},isOn:M,updateSliderHeight:Ze,rebuild:function(){return Ai(w)},destroy:function(){if(Zn(ei,{resize:Re}),Zn(ti,Dt),_.disabled=!0,J)for(var t=et;t--;)k&&L[0].remove(),L[L.length-1].remove();var e=["tns-item",Ht];k||(e=e.concat("tns-normal",O));for(var n=P;n--;){var i=L[n];0<=i.id.indexOf(bt+"-item")&&(i.id=""),e.forEach(function(t){Vn(i,t)})}if(Yn(L,["style","aria-hidden","tabindex"]),L=bt=P=nt=et=null,Vt&&(Zn(Xt,kt),w.controlsContainer&&(Yn(Xt,["aria-label","tabindex"]),Yn(Xt.children,["aria-controls","aria-disabled","tabindex"])),Xt=Yt=Kt=null),Jt&&(Zn(Ut,Ot),w.navContainer&&(Yn(Ut,["aria-label"]),Yn(Gt,["aria-selected","aria-controls","tabindex"])),Ut=Gt=null),le&&(clearInterval(ie),ve&&Zn(ve,{click:An}),Zn(B,Et),Zn(B,Nt),w.autoplayButton&&Yn(ve,["data-action"])),B.id=gt||"",B.className=B.className.replace(xt,""),Kn(B),k&&bi){var a={};a[bi]=hn,Zn(B,a)}Zn(B,Mt),Zn(B,It),A.insertBefore(B,S),S.remove(),S=W=B=ut=ct=j=F=te=ee=St=_t=Zt=this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=M=!1}}}function Oe(){return k?nt-j:J?P-P%j:nt-1}function Ee(t){if(void 0===t&&(t=ut),k){for(;t<et;)t+=P;t-=et}return t?t%P:t}function Ne(){return ei.innerWidth||ti.documentElement.clientWidth||ti.body.clientWidth}function De(t){return t.clientWidth||De(t.parentNode)}function Me(e){var n=w[e];return!n&&z&&0<=c.indexOf(e)&&z.forEach(function(t){C[t][e]&&(n=!0)}),n}function Ie(t,e){e=e||R;var n,i={slideBy:"page",edgePadding:!1};if(!k&&t in i)n=i[t];else if("items"===t&&Ie("fixedWidth"))n=Math.floor(q/(Ie("fixedWidth")+Ie("gutter")));else if("autoHeight"===t&&"outer"===V)n=!0;else if(n=w[t],z&&0<=c.indexOf(t))for(var a=0,r=z.length;a<r;a++){var o=z[a];if(!(o<=e))break;t in C[o]&&(n=C[o][t])}return"slideBy"===t&&"page"===n&&(n=Ie("items")),n}function Se(t,e,n,i){var a="";if(t){var r=t;e&&(r+=e),a=n?"margin: 0px "+(q%(n+e)+e)/2+"px":I?"margin: 0 "+t+"px 0 "+r+"px;":"padding: "+r+"px 0 "+t+"px 0;"}else if(e&&!n){var o="-"+e+"px";a="margin: 0 "+(I?o+" 0 0":"0 "+o+" 0")+";"}return mi&&i&&(a+=ze(i)),a}function We(t,e,n){return t?(t+e)*nt+"px":di?di+"("+100*nt+"% / "+n+")":100*nt/n+"%"}function Be(t,e,n){var i="";if(I){if(i="width:",t)i+=t+e+"px";else{var a=k?nt:n;i+=di?di+"(100% / "+a+")":100/a+"%"}i+=Tt+";"}return i}function Le(t){var e="";!1!==t&&(e=(I?"padding-":"margin-")+(I?"right":"bottom")+": "+t+"px;");return e}function Pe(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function ze(t){return Pe(mi,18)+"transition-duration:"+t/1e3+"s;"}function He(t){return Pe(gi,17)+"animation-duration:"+t/1e3+"s;"}function Re(t){Ln(function(){qe(kn(t))})}function qe(t){if(M){R=Ne(),"outer"===V&&yt.emit("outerResized",Bn(t));var e=H,n=ut,i=j,a=Ct,r=!1;if(Y&&(q=De(S)),D=De(W),z&&je(),e!==H||Y){var o=K,s=U,l=Y,u=X,c=Q,f=wt;if(j=Ie("items"),F=Ie("slideBy"),wt=Ie("disable"),Ct=!!wt||!!At&&P<=j,j!==i&&(dt=Oe(),Te()),wt!==f&&Qe(wt),Ct!==a&&(Ct&&(ut=k?et:0),Fe()),e!==H&&(G=Ie("speed"),X=Ie("edgePadding"),Q=Ie("gutter"),Y=Ie("fixedWidth"),wt||Y===l||(r=!0),(U=Ie("autoHeight"))!==s&&(U||(W.style.height=""))),(K=!Ct&&Ie("arrowKeys"))!==o&&(K?_n(ti,Dt):Zn(ti,Dt)),St){var d=Vt,v=Qt;Vt=!Ct&&Ie("controls"),Qt=Ie("controlsText"),Vt!==d&&(Vt?Jn(Xt):Gn(Xt)),Qt!==v&&(Yt.innerHTML=Qt[0],Kt.innerHTML=Qt[1])}if(Wt){var h=Jt;(Jt=!Ct&&Ie("nav"))!==h&&(Jt?(Jn(Ut),Wn()):Gn(Ut))}if(Pt){var p=Ae;(Ae=!Ct&&Ie("touch"))!==p&&k&&(Ae?_n(B,Mt):Zn(B,Mt))}if(zt){var m=Ce;(Ce=!Ct&&Ie("mouseDrag"))!==m&&k&&(Ce?_n(B,It):Zn(B,It))}if(Lt){var y=le,g=de,x=he,b=fe;if(Ct?le=de=he=!1:(le=Ie("autoplay"))?(de=Ie("autoplayHoverPause"),he=Ie("autoplayResetOnVisibility")):de=he=!1,fe=Ie("autoplayText"),ue=Ie("autoplayTimeout"),le!==y&&(le?(ve&&Jn(ve),ae||oe||bn()):(ve&&Gn(ve),ae&&wn())),de!==g&&(de?_n(B,Et):Zn(B,Et)),he!==x&&(he?_n(ti,Nt):Zn(ti,Nt)),ve&&fe!==b){var w=le?1:0,A=ve.innerHTML,C=A.length-b[w].length;A.substring(C)===b[w]&&(ve.innerHTML=A.substring(0,C)+fe[w])}}if(!hi){if(Ct||X===u&&Q===c||(W.style.cssText=Se(X,Q,Y)),k&&I&&(Y!==l||Q!==c||j!==i)&&(B.style.width=We(Y,Q,j)),I&&(j!==i||Q!==c||Y!=l)){var T=Be(Y,Q,j)+Le(Q);_.removeRule(Rn(_)-1),Hn(_,"#"+bt+" > .tns-item",T,Rn(_))}Y||(r=!0)}ut!==n&&(yt.emit("indexChanged",Bn()),r=!0),j!==i&&(Ue(),function(){if(!k){for(var t=ut+Math.min(P,j),e=nt;e--;){var n=L[e];ut<=e&&e<t?(Fn(n,"tns-moving"),n.style.left=100*(e-ut)/j+"%",Fn(n,O),Vn(n,N)):n.style.left&&(n.style.left="",Fn(n,N),Vn(n,O)),Vn(n,E)}setTimeout(function(){qn(L,function(t){Vn(t,"tns-moving")})},300)}}(),navigator.msMaxTouchPoints&&tn())}I||wt||($e(),Sn(),r=!0),r&&(un(),ct=ut),Ve(!0),!U&&k||wt||Ge()}}function je(){H=0,z.forEach(function(t,e){t<=R&&(H=e+1)})}function Fe(){var t="tns-transparent";if(Ct){if(!v){if(X&&(W.style.margin="0px"),et)for(var e=et;e--;)k&&Fn(L[e],t),Fn(L[nt-e-1],t);v=!0}}else if(v){if(X&&!Y&&hi&&(W.style.margin=""),et)for(e=et;e--;)k&&Vn(L[e],t),Vn(L[nt-e-1],t);v=!1}}function Ve(t){Y&&X&&(Ct||q<=Y+Q?"0px"!==W.style.margin&&(W.style.margin="0px"):t&&(W.style.cssText=Se(X,Q,Y)))}function Qe(t){var e=L.length;if(t){if(_.disabled=!0,B.className=B.className.replace(xt.substring(1),""),Kn(B),J)for(var n=et;n--;)k&&Gn(L[n]),Gn(L[e-n-1]);if(I&&k||Kn(W),!k)for(var i=ut,a=ut+P;i<a;i++){Kn(r=L[i]),Vn(r,O),Vn(r,N)}}else{if(_.disabled=!1,B.className+=xt,I||$e(),un(),J)for(n=et;n--;)k&&Jn(L[n]),Jn(L[e-n-1]);if(!k)for(i=ut,a=ut+P;i<a;i++){var r=L[i],o=i<ut+j?O:N;r.style.left=100*(i-ut)/j+"%",Fn(r,o)}}}function Xe(){if(Z&&!wt){var t=ut,e=ut+j;for(X&&(t-=1,e+=1);t<e;t++)qn(L[t].querySelectorAll(".tns-lazy-img"),function(t){var e,n={};n[bi]=function(t){t.stopPropagation()},_n(t,n),jn(t,"loaded")||(t.src=(e="data-src",t.getAttribute(e)),Fn(t,"loaded"))})}}function Ye(t){var e=On(t);Fn(e,Rt),Zn(e,qt)}function Ke(t,e){for(var n=[],i=t,a=t+e;i<a;i++)qn(L[i].querySelectorAll("img"),function(t){n.push(t)});return n}function Ge(){var t=U?Ke(ut,j):Ke(et,P);Ln(function(){Je(t,Ze)})}function Je(n,t){return T?t():(n.forEach(function(t,e){jn(t,Rt)&&n.splice(e,1)}),n.length?void Ln(function(){Je(n,t)}):t())}function Ue(){Xe(),function(){for(var t=ut+Math.min(P,j),e=nt;e--;){var n=L[e];ut<=e&&e<t?Qn(n,"tabindex")&&(Xn(n,{"aria-hidden":"false"}),Yn(n,["tabindex"]),Fn(n,Ht)):(Qn(n,"tabindex")||Xn(n,{"aria-hidden":"true",tabindex:"-1"}),jn(n,Ht)&&Vn(n,Ht))}}(),on(),Wn(),function(){if(Jt&&(te=-1!==$t?$t:Ee(),$t=-1,te!==ee)){var t=Gt[ee],e=Gt[te];Xn(t,{tabindex:"-1","aria-selected":"false"}),Xn(e,{tabindex:"0","aria-selected":"true"}),Vn(t,ne),Fn(e,ne)}}()}function _e(t,e){for(var n=[],i=t,a=t+e;i<a;i++)n.push(L[i].offsetHeight);return Math.max.apply(null,n)}function Ze(){var t=U?_e(ut,j):_e(et,P);W.style.height!==t&&(W.style.height=t+"px")}function $e(){d=[0];for(var t,e=L[0].getBoundingClientRect().top,n=1;n<nt;n++)t=L[n].getBoundingClientRect().top,d.push(t-e)}function tn(){S.style.msScrollSnapPointsX="snapInterval(0%, "+100/j+"%)"}function en(t){return t.nodeName.toLowerCase()}function nn(t){return"button"===en(t)}function an(t){return"true"===t.getAttribute("aria-disabled")}function rn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function on(){if(Vt&&!b&&!J){var t=jt?Yt.disabled:an(Yt),e=Ft?Kt.disabled:an(Kt),n=ut===ft,i=!b&&ut===dt;n&&!t&&rn(jt,Yt,!0),!n&&t&&rn(jt,Yt,!1),i&&!e&&rn(Ft,Kt,!0),!i&&e&&rn(Ft,Kt,!1)}}function sn(t,e){mi&&(t.style[mi]=e)}function ln(){var t;I?t=Y?-(Y+Q)*ut+"px":100*-ut/(pi?nt:j)+"%":t=-d[ut]+"px";return t}function un(t){sn(B,"0s"),cn(t),setTimeout(function(){sn(B,"")},0)}function cn(t,e){t||(t=ln()),B.style[rt]=ot+t+st}function fn(t,e,n,i){var a=t+j;J||(a=Math.min(a,nt));for(var r=t;r<a;r++){var o=L[r];i||(o.style.left=100*(r-ut)/j+"%"),u&&yi&&(o.style[yi]=o.style[xi]=u*(r-t)/1e3+"s"),Vn(o,e),Fn(o,n),i&&$.push(o)}}function dn(t,e){var n,i;at&&Te(),(ut!==ct||e)&&(yt.emit("indexChanged",Bn()),yt.emit("transitionStart",Bn()),ae&&t&&0<=["click","keydown"].indexOf(t.type)&&wn(),pt=!0,isNaN(n)&&(n=G),ae&&!Un(B)&&(n=0),ke(n,i))}function vn(t){return t.toLowerCase().replace(/-/g,"")}function hn(t){if(k||pt){if(yt.emit("transitionEnd",Bn(t)),!k&&0<$.length)for(var e=0;e<$.length;e++){var n=$[e];n.style.left="",xi&&yi&&(n.style[xi]="",n.style[yi]=""),Vn(n,E),Fn(n,N)}if(!t||!k&&t.target.parentNode===B||t.target===B&&vn(t.propertyName)===vn(rt)){if(!at){var i=ut;Te(),ut!==i&&(yt.emit("indexChanged",Bn()),un())}U&&Ge(),"inner"===V&&yt.emit("innerLoaded",Bn()),pt=!1,ee=te,ct=ut}}}function pn(t,e){if(!Ct)if("prev"===t)mn(e,-1);else if("next"===t)mn(e,1);else{pt&&hn();var n=Ee(),i=0;if(n<0&&(n+=P),"first"===t)i=-n;else if("last"===t)i=P-j-n;else if("number"!=typeof t&&(t=parseInt(t)),!isNaN(t)){var a=Ee(t);a<0&&(a+=P),i=a-n}Ee(ut+=i)!==Ee(ct)&&dn(e)}}function mn(t,e){var n;if(pt&&hn(),!e){for(var i=(t=kn(t)).target||t.srcElement;i!==Xt&&[Yt,Kt].indexOf(i)<0;)i=i.parentNode;var a=[Yt,Kt].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(b){if(ut===ft&&-1===e)return void pn("last",t);if(ut===dt&&1===e)return void pn(0,t)}e&&(ut+=F*e,dn(n||t&&"keydown"===t.type?t:null))}function yn(){ie=setInterval(function(){mn(null,ce)},ue),ae=!0}function gn(){clearInterval(ie),ae=!1}function xn(t,e){Xn(ve,{"data-action":t}),ve.innerHTML=pe[0]+t+pe[1]+e}function bn(){yn(),ve&&xn("stop",fe[1])}function wn(){gn(),ve&&xn("start",fe[0])}function An(){ae?(wn(),oe=!0):(bn(),oe=!1)}function Cn(t){t.focus()}function Tn(){ke(0,B.scrollLeft),ct=ut}function kn(t){return En(t=t||ei.event)?t.changedTouches[0]:t}function On(t){return t.target||ei.event.srcElement}function En(t){return 0<=t.type.indexOf("touch")}function Nn(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Dn(t){pt&&hn(),xe=!0,Pn(be),be=Ln(function(){!function t(e){if(!ht)return void(xe=!1);Pn(be);xe&&(be=Ln(function(){t(e)}));"?"===ht&&ge.x!==ye.x&&ge.y!==ye.y&&(o=ge.y-ye.y,s=ge.x-ye.x,n=Math.atan2(o,s)*(180/Math.PI),i=vt,a=!1,r=Math.abs(90-Math.abs(n)),90-i<=r?a="horizontal":r<=i&&(a="vertical"),ht=a===w.axis);var n,i,a,r;var o,s;if(ht){yt.emit(En(e)?"touchMove":"dragMove",Bn(e));var l=me,u=we(ge,ye);if(!I||Y)l+=u,l+="px";else{var c=pi?u*j*100/(D*nt):100*u/D;l+=c,l+="%"}B.style[rt]=ot+l+st}}(t)});var e=kn(t);yt.emit(En(t)?"touchStart":"dragStart",Bn(t)),!En(t)&&0<=["img","a"].indexOf(en(On(t)))&&Nn(t),ge.x=ye.x=parseInt(e.clientX),ge.y=ye.y=parseInt(e.clientY),me=parseFloat(B.style[rt].replace(ot,"").replace(st,"")),sn(B,"0s")}function Mn(t){if(xe){var e=kn(t);ge.x=parseInt(e.clientX),ge.y=parseInt(e.clientY)}}function In(i){if(vt&&(ht="?"),xe){Pn(be),sn(B,""),xe=!1;var t=kn(i);ge.x=parseInt(t.clientX),ge.y=parseInt(t.clientY);var a=we(ge,ye);if(5<=Math.abs(a)){if(!En(i)){var n=On(i);_n(n,{click:function t(e){Nn(e),Zn(n,{click:t})}})}be=Ln(function(){if(yt.emit(En(i)?"touchEnd":"dragEnd",Bn(i)),I){var t=-a*j/D;t=0<a?Math.floor(t):Math.ceil(t),ut+=t}else{var e=-(me+a);if(e<=0)ut=ft;else if(e>=d[d.length-1])ut=dt;else for(var n=0;n++,ut=a<0?n+1:n,n<nt&&e>=d[n+1];);}dn(i,a)})}}}function Sn(){W.style.height=d[ut+j]-d[ut]+"px"}function Wn(){Jt&&!Bt&&(!function(){_t=[];for(var t=Ee()%j;t<P;)!J&&P<t+j&&(t=P-j),_t.push(t),t+=j;(J&&_t.length*j<P||!J&&0<_t[0])&&_t.unshift(0)}(),_t!==Zt&&(qn(Gt,function(t,e){_t.indexOf(e)<0?Gn(t):Jn(t)}),Zt=_t))}function Bn(t){return{container:B,slideItems:L,navContainer:Ut,navItems:Gt,controlsContainer:Xt,hasControls:St,prevButton:Yt,nextButton:Kt,items:j,slideBy:F,cloneCount:et,slideCount:P,slideCountNew:nt,index:ut,indexCached:ct,navCurrentIndex:te,navCurrentIndexCached:ee,visibleNavIndexes:_t,visibleNavIndexesCached:Zt,sheet:_,event:t||{}}}t&&console.warn("No slides found in",w.container)};return Ai}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
