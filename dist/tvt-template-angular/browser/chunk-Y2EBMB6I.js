import{a as Mt,c as Z}from"./chunk-DYY3EQTI.js";import{a as Te}from"./chunk-7AWYNYRD.js";import{c as zt,d as xt,f as _t,g as le,h as yt,i as Wt,j as ce,k as qt,l as he}from"./chunk-MMNBBZVP.js";import{$ as v,Ab as Et,Bb as Qt,Cb as oe,Cd as St,Db as ne,Dc as Vt,Dd as H,Ec as Kt,Fd as ht,Gc as de,Ha as l,Hd as ot,Ib as et,Ic as pe,Id as kt,Ja as Jt,Jb as se,Jc as me,Jd as Zt,Kb as R,Kc as ue,Lb as mt,M as nt,Ma as q,Mb as At,N as st,Nb as ae,Nc as lt,Oa as te,Od as $,Pc as Gt,Pd as be,Ra as I,Rb as re,Rc as fe,S as W,Sa as rt,Ta as ee,Tc as Dt,Uc as Yt,Va as C,Vb as Lt,X as Ft,Xa as _,Xc as vt,Y as L,Z as z,Zb as it,_ as M,_b as Q,_c as ct,a as k,ad as ge,b as jt,bb as d,bd as Ct,cb as r,cd as Ut,db as ie,ea as V,ed as wt,fa as at,fb as Rt,fd as _e,gb as T,hb as Ot,hd as ye,id as ve,kb as p,lb as m,mb as f,mc as ut,nb as K,nc as Bt,ob as G,oc as bt,pb as j,pc as Tt,qb as X,qc as It,sb as J,sd as B,tb as h,tc as ft,ub as Ht,vb as Pt,wb as F,wc as gt,xb as tt,yb as S,yd as Ce,zb as O,zd as we}from"./chunk-4EPYZPYR.js";var Fe=({dt:e})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${e("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${e("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${e("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${e("tooltip.background")};
    color: ${e("tooltip.color")};
    padding: ${e("tooltip.padding")};
    box-shadow: ${e("tooltip.shadow")};
    border-radius: ${e("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} ${e("tooltip.gutter")} ${e("tooltip.gutter")} 0;
    border-right-color: ${e("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} 0 ${e("tooltip.gutter")} ${e("tooltip.gutter")};
    border-left-color: ${e("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} ${e("tooltip.gutter")} 0 ${e("tooltip.gutter")};
    border-top-color: ${e("tooltip.background")};
    border-bottom-color: ${e("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${e("tooltip.gutter")});
    border-width: 0 ${e("tooltip.gutter")} ${e("tooltip.gutter")} ${e("tooltip.gutter")};
    border-top-color: ${e("tooltip.background")};
    border-bottom-color: ${e("tooltip.background")};
}
`,Re={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Ie=(()=>{class e extends ht{name="tooltip";theme=Fe;classes=Re;static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(e)))(o||e)}})();static \u0275prov=nt({token:e,factory:e.\u0275fac})}return e})();var fo=(()=>{class e extends ot{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:B("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=W(Ie);interactionInProgress=!1;constructor(t,i){super(),this.zone=t,this.viewContainer=i}ngAfterViewInit(){super.ngAfterViewInit(),gt(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){super.ngOnChanges(t),t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=k(k({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(Vt(t.relatedTarget,"p-tooltip")||Vt(t.relatedTarget,"p-tooltip-text")||Vt(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?Gt(this.container,this.el.nativeElement):Gt(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),fe(this.container,250),this.getOption("tooltipZIndex")==="auto"?Z.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&Z.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t instanceof Jt){let i=this.viewContainer.createEmbeddedView(t);i.detectChanges(),i.rootNodes.forEach(o=>this.tooltipText.appendChild(o))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[o,n]of i[t].entries())if(o===0)n.call(this);else if(this.isOutOfBounds())n.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),i=t.left+me(),o=t.top+ue();return{left:i,top:o}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?Dt(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,i=lt(t),o=(ct(t)-ct(this.container))/2;this.alignTooltip(i,o)}alignLeft(){this.preAlign("left");let t=lt(this.container),i=(ct(this.el.nativeElement)-ct(this.container))/2;this.alignTooltip(-t,i)}alignTop(){this.preAlign("top");let t=(lt(this.el.nativeElement)-lt(this.container))/2,i=ct(this.container);this.alignTooltip(t,-i)}alignBottom(){this.preAlign("bottom");let t=(lt(this.el.nativeElement)-lt(this.container))/2,i=ct(this.el.nativeElement);this.alignTooltip(t,i)}alignTooltip(t,i){let o=this.getHostOffset(),n=o.left+t,s=o.top+i;this.container.style.left=n+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=k(k({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return Vt(t,"p-inputwrapper")?Dt(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let i="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?i+" "+this.getOption("tooltipStyleClass"):i}isOutOfBounds(){let t=this.container.getBoundingClientRect(),i=t.top,o=t.left,n=lt(this.container),s=ct(this.container),c=pe();return o+n>c.width||o<0||i<0||i+s>c.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Zt(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.removeEventListener("focus",this.focusListener),i.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):_e(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&Z.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||e)(q(at),q(te))};static \u0275dir=ee({type:e,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",it],showDelay:[2,"showDelay","showDelay",Q],hideDelay:[2,"hideDelay","hideDelay",Q],life:[2,"life","life",Q],positionTop:[2,"positionTop","positionTop",Q],positionLeft:[2,"positionLeft","positionLeft",Q],autoHide:[2,"autoHide","autoHide",it],fitContent:[2,"fitContent","fitContent",it],hideOnEscape:[2,"hideOnEscape","hideOnEscape",it],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[et([Ie]),C,Ft]})}return e})(),go=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=rt({type:e});static \u0275inj=st({})}return e})();var Co=(()=>{class e extends ${static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(e)))(o||e)}})();static \u0275cmp=I({type:e,selectors:[["BlankIcon"]],features:[C],decls:2,vars:0,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["width","1","height","1","fill","currentColor","fill-opacity","0"]],template:function(i,o){i&1&&(M(),p(0,"svg",0),f(1,"rect",1),m())},encapsulation:2})}return e})();var xe=(()=>{class e extends ${static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(e)))(o||e)}})();static \u0275cmp=I({type:e,selectors:[["CheckIcon"]],features:[C],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(i,o){i&1&&(M(),p(0,"svg",0),f(1,"path",1),m()),i&2&&(T(o.getClassNames()),d("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var xo=(()=>{class e extends ${static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(e)))(o||e)}})();static \u0275cmp=I({type:e,selectors:[["ChevronDownIcon"]],features:[C],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(i,o){i&1&&(M(),p(0,"svg",0),f(1,"path",1),m()),i&2&&(T(o.getClassNames()),d("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var Se=(()=>{class e extends ${pathId;ngOnInit(){this.pathId="url(#"+B()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(e)))(o||e)}})();static \u0275cmp=I({type:e,selectors:[["ExclamationTriangleIcon"]],features:[C],decls:8,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(M(),p(0,"svg",0)(1,"g"),f(2,"path",1)(3,"path",2)(4,"path",3),m(),p(5,"defs")(6,"clipPath",4),f(7,"rect",5),m()()()),i&2&&(T(o.getClassNames()),d("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),l(),d("clip-path",o.pathId),l(5),r("id",o.pathId))},encapsulation:2})}return e})();var Oe=(()=>{class e extends ${pathId;ngOnInit(){this.pathId="url(#"+B()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(e)))(o||e)}})();static \u0275cmp=I({type:e,selectors:[["InfoCircleIcon"]],features:[C],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(M(),p(0,"svg",0)(1,"g"),f(2,"path",1),m(),p(3,"defs")(4,"clipPath",2),f(5,"rect",3),m()()()),i&2&&(T(o.getClassNames()),d("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),l(),d("clip-path",o.pathId),l(3),r("id",o.pathId))},encapsulation:2})}return e})();var $o=(()=>{class e extends ${pathId;ngOnInit(){this.pathId="url(#"+B()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(e)))(o||e)}})();static \u0275cmp=I({type:e,selectors:[["SearchIcon"]],features:[C],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(M(),p(0,"svg",0)(1,"g"),f(2,"path",1),m(),p(3,"defs")(4,"clipPath",2),f(5,"rect",3),m()()()),i&2&&(T(o.getClassNames()),d("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),l(),d("clip-path",o.pathId),l(3),r("id",o.pathId))},encapsulation:2})}return e})();var Ee=(()=>{class e extends ${pathId;ngOnInit(){this.pathId="url(#"+B()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(e)))(o||e)}})();static \u0275cmp=I({type:e,selectors:[["TimesCircleIcon"]],features:[C],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(M(),p(0,"svg",0)(1,"g"),f(2,"path",1),m(),p(3,"defs")(4,"clipPath",2),f(5,"rect",3),m()()()),i&2&&(T(o.getClassNames()),d("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),l(),d("clip-path",o.pathId),l(3),r("id",o.pathId))},encapsulation:2})}return e})();var ze=["container"],He=(e,a,t,i)=>({showTransformParams:e,hideTransformParams:a,showTransitionParams:t,hideTransitionParams:i}),Pe=e=>({value:"visible",params:e}),Ae=(e,a)=>({$implicit:e,closeFn:a}),Be=e=>({$implicit:e});function Ze(e,a){e&1&&j(0)}function Ne(e,a){if(e&1&&_(0,Ze,1,0,"ng-container",3),e&2){let t=h();r("ngTemplateOutlet",t.headlessTemplate)("ngTemplateOutletContext",mt(2,Ae,t.message,t.onCloseIconClick))}}function je(e,a){if(e&1&&f(0,"span",4),e&2){let t=h(3);r("ngClass",t.cx("messageIcon"))}}function Qe(e,a){e&1&&f(0,"CheckIcon"),e&2&&d("aria-hidden",!0)("data-pc-section","icon")}function We(e,a){e&1&&f(0,"InfoCircleIcon"),e&2&&d("aria-hidden",!0)("data-pc-section","icon")}function qe(e,a){e&1&&f(0,"TimesCircleIcon"),e&2&&d("aria-hidden",!0)("data-pc-section","icon")}function Ke(e,a){e&1&&f(0,"ExclamationTriangleIcon"),e&2&&d("aria-hidden",!0)("data-pc-section","icon")}function Ge(e,a){e&1&&f(0,"InfoCircleIcon"),e&2&&d("aria-hidden",!0)("data-pc-section","icon")}function Ye(e,a){if(e&1&&(p(0,"span",4),_(1,Qe,1,2,"CheckIcon")(2,We,1,2,"InfoCircleIcon")(3,qe,1,2,"TimesCircleIcon")(4,Ke,1,2,"ExclamationTriangleIcon")(5,Ge,1,2,"InfoCircleIcon"),m()),e&2){let t,i=h(3);r("ngClass",i.cx("messageIcon")),d("aria-hidden",!0)("data-pc-section","icon"),l(),Ot((t=i.message.severity)==="success"?1:t==="info"?2:t==="error"?3:t==="warn"?4:5)}}function Ue(e,a){if(e&1&&(K(0),_(1,je,1,1,"span",6)(2,Ye,6,4,"span",6),p(3,"div",4)(4,"div",4),Qt(5),m(),p(6,"div",4),Qt(7),m()(),G()),e&2){let t=h(2);l(),r("ngIf",t.message.icon),l(),r("ngIf",!t.message.icon),l(),r("ngClass",t.cx("messageText")),d("data-pc-section","text"),l(),r("ngClass",t.cx("summary")),d("data-pc-section","summary"),l(),ne(" ",t.message.summary," "),l(),r("ngClass",t.cx("detail")),d("data-pc-section","detail"),l(),oe(t.message.detail)}}function Xe(e,a){e&1&&j(0)}function Je(e,a){if(e&1&&f(0,"span",4),e&2){let t=h(4);r("ngClass",t.cx("closeIcon"))}}function ti(e,a){if(e&1&&_(0,Je,1,1,"span",6),e&2){let t=h(3);r("ngIf",t.message.closeIcon)}}function ei(e,a){if(e&1&&f(0,"TimesIcon",4),e&2){let t=h(3);r("ngClass",t.cx("closeIcon")),d("aria-hidden",!0)("data-pc-section","closeicon")}}function ii(e,a){if(e&1){let t=X();p(0,"div")(1,"button",7),J("click",function(o){L(t);let n=h(2);return z(n.onCloseIconClick(o))})("keydown.enter",function(o){L(t);let n=h(2);return z(n.onCloseIconClick(o))}),_(2,ti,1,1,"span",4)(3,ei,1,3,"TimesIcon",4),m()()}if(e&2){let t=h(2);l(),r("ariaLabel",t.closeAriaLabel),d("class",t.cx("closeButton"))("data-pc-section","closebutton"),l(),Ot(t.message.closeIcon?2:3)}}function oi(e,a){if(e&1&&(p(0,"div",4),_(1,Ue,8,10,"ng-container",5)(2,Xe,1,0,"ng-container",3)(3,ii,4,4,"div"),m()),e&2){let t=h();T(t.message==null?null:t.message.contentStyleClass),r("ngClass",t.cx("messageContent")),d("data-pc-section","content"),l(),r("ngIf",!t.template),l(),r("ngTemplateOutlet",t.template)("ngTemplateOutletContext",R(8,Be,t.message)),l(),Ot((t.message==null?null:t.message.closable)!==!1?3:-1)}}var ni=["message"],si=["headless"];function ai(e,a){if(e&1){let t=X();p(0,"p-toastItem",3),J("onClose",function(o){L(t);let n=h();return z(n.onMessageClose(o))})("@toastAnimation.start",function(o){L(t);let n=h();return z(n.onAnimationStart(o))})("@toastAnimation.done",function(o){L(t);let n=h();return z(n.onAnimationEnd(o))}),m()}if(e&2){let t=a.$implicit,i=a.index,o=h();r("message",t)("index",i)("life",o.life)("template",o.template||o._template)("headlessTemplate",o.headlessTemplate||o._headlessTemplate)("@toastAnimation",void 0)("showTransformOptions",o.showTransformOptions)("hideTransformOptions",o.hideTransformOptions)("showTransitionOptions",o.showTransitionOptions)("hideTransitionOptions",o.hideTransitionOptions)}}var ri=({dt:e})=>`
.p-toast {
    width: ${e("toast.width")};
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    margin: 0 0 1rem 0;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: ${e("toast.icon.size")};
    width: ${e("toast.icon.size")};
    height: ${e("toast.icon.size")};
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: ${e("toast.content.padding")};
    gap: ${e("toast.content.gap")};
}

.p-toast-message-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: ${e("toast.text.gap")};
}

.p-toast-summary {
    font-weight: ${e("toast.summary.font.weight")};
    font-size: ${e("toast.summary.font.size")};
}

.p-toast-detail {
    font-weight: ${e("toast.detail.font.weight")};
    font-size: ${e("toast.detail.font.size")};
}

.p-toast-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background ${e("toast.transition.duration")}, color ${e("toast.transition.duration")}, outline-color ${e("toast.transition.duration")}, box-shadow ${e("toast.transition.duration")};
    outline-color: transparent;
    color: inherit;
    width: ${e("toast.close.button.width")};
    height: ${e("toast.close.button.height")};
    border-radius: ${e("toast.close.button.border.radius")};
    margin: -25% 0 0 0;
    right: -25%;
    padding: 0;
    border: none;
    user-select: none;
}

.p-toast-close-button:dir(rtl) {
    margin: -25% 0 0 auto;
    left: -25%;
    right: auto;
}

.p-toast-message-info,
.p-toast-message-success,
.p-toast-message-warn,
.p-toast-message-error,
.p-toast-message-secondary,
.p-toast-message-contrast {
    border-width: ${e("toast.border.width")};
    border-style: solid;
    backdrop-filter: blur(${e("toast.blur")});
    border-radius: ${e("toast.border.radius")};
}

.p-toast-close-icon {
    font-size: ${e("toast.close.icon.size")};
    width: ${e("toast.close.icon.size")};
    height: ${e("toast.close.icon.size")};
}

.p-toast-close-button:focus-visible {
    outline-width: ${e("focus.ring.width")};
    outline-style: ${e("focus.ring.style")};
    outline-offset: ${e("focus.ring.offset")};
}

.p-toast-message-info {
    background: ${e("toast.info.background")};
    border-color: ${e("toast.info.border.color")};
    color: ${e("toast.info.color")};
    box-shadow: ${e("toast.info.shadow")};
}

.p-toast-message-info .p-toast-detail {
    color: ${e("toast.info.detail.color")};
}

.p-toast-message-info .p-toast-close-button:focus-visible {
    outline-color: ${e("toast.info.close.button.focus.ring.color")};
    box-shadow: ${e("toast.info.close.button.focus.ring.shadow")};
}

.p-toast-message-info .p-toast-close-button:hover {
    background: ${e("toast.info.close.button.hover.background")};
}

.p-toast-message-success {
    background: ${e("toast.success.background")};
    border-color: ${e("toast.success.border.color")};
    color: ${e("toast.success.color")};
    box-shadow: ${e("toast.success.shadow")};
}

.p-toast-message-success .p-toast-detail {
    color: ${e("toast.success.detail.color")};
}

.p-toast-message-success .p-toast-close-button:focus-visible {
    outline-color: ${e("toast.success.close.button.focus.ring.color")};
    box-shadow: ${e("toast.success.close.button.focus.ring.shadow")};
}

.p-toast-message-success .p-toast-close-button:hover {
    background: ${e("toast.success.close.button.hover.background")};
}

.p-toast-message-warn {
    background: ${e("toast.warn.background")};
    border-color: ${e("toast.warn.border.color")};
    color: ${e("toast.warn.color")};
    box-shadow: ${e("toast.warn.shadow")};
}

.p-toast-message-warn .p-toast-detail {
    color: ${e("toast.warn.detail.color")};
}

.p-toast-message-warn .p-toast-close-button:focus-visible {
    outline-color: ${e("toast.warn.close.button.focus.ring.color")};
    box-shadow: ${e("toast.warn.close.button.focus.ring.shadow")};
}

.p-toast-message-warn .p-toast-close-button:hover {
    background: ${e("toast.warn.close.button.hover.background")};
}

.p-toast-message-error {
    background: ${e("toast.error.background")};
    border-color: ${e("toast.error.border.color")};
    color: ${e("toast.error.color")};
    box-shadow: ${e("toast.error.shadow")};
}

.p-toast-message-error .p-toast-detail {
    color: ${e("toast.error.detail.color")};
}

.p-toast-message-error .p-toast-close-button:focus-visible {
    outline-color: ${e("toast.error.close.button.focus.ring.color")};
    box-shadow: ${e("toast.error.close.button.focus.ring.shadow")};
}

.p-toast-message-error .p-toast-close-button:hover {
    background: ${e("toast.error.close.button.hover.background")};
}

.p-toast-message-secondary {
    background: ${e("toast.secondary.background")};
    border-color: ${e("toast.secondary.border.color")};
    color: ${e("toast.secondary.color")};
    box-shadow: ${e("toast.secondary.shadow")};
}

.p-toast-message-secondary .p-toast-detail {
    color: ${e("toast.secondary.detail.color")};
}

.p-toast-message-secondary .p-toast-close-button:focus-visible {
    outline-color: ${e("toast.secondary.close.button.focus.ring.color")};
    box-shadow: ${e("toast.secondary.close.button.focus.ring.shadow")};
}

.p-toast-message-secondary .p-toast-close-button:hover {
    background: ${e("toast.secondary.close.button.hover.background")};
}

.p-toast-message-contrast {
    background: ${e("toast.contrast.background")};
    border-color: ${e("toast.contrast.border.color")};
    color: ${e("toast.contrast.color")};
    box-shadow: ${e("toast.contrast.shadow")};
}

.p-toast-message-contrast .p-toast-detail {
    color: ${e("toast.contrast.detail.color")};
}

.p-toast-message-contrast .p-toast-close-button:focus-visible {
    outline-color: ${e("toast.contrast.close.button.focus.ring.color")};
    box-shadow: ${e("toast.contrast.close.button.focus.ring.shadow")};
}

.p-toast-message-contrast .p-toast-close-button:hover {
    background: ${e("toast.contrast.close.button.hover.background")};
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`,li={root:({instance:e})=>{let{_position:a}=e;return{position:"fixed",top:a==="top-right"||a==="top-left"||a==="top-center"?"20px":a==="center"?"50%":null,right:(a==="top-right"||a==="bottom-right")&&"20px",bottom:(a==="bottom-left"||a==="bottom-right"||a==="bottom-center")&&"20px",left:a==="top-left"||a==="bottom-left"?"20px":a==="center"||a==="top-center"||a==="bottom-center"?"50%":null}}},ci={root:({instance:e})=>({"p-toast p-component":!0,[`p-toast-${e._position}`]:!!e._position}),message:({instance:e})=>({"p-toast-message":!0,"p-toast-message-info":e.message.severity==="info"||e.message.severity===void 0,"p-toast-message-warn":e.message.severity==="warn","p-toast-message-error":e.message.severity==="error","p-toast-message-success":e.message.severity==="success","p-toast-message-secondary":e.message.severity==="secondary","p-toast-message-contrast":e.message.severity==="contrast"}),messageContent:"p-toast-message-content",messageIcon:({instance:e})=>({"p-toast-message-icon":!0,[`pi ${e.message.icon}`]:!!e.message.icon}),messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:({instance:e})=>({"p-toast-close-icon":!0,[`pi ${e.message.closeIcon}`]:!!e.message.closeIcon})},Nt=(()=>{class e extends ht{name="toast";theme=ri;classes=ci;inlineStyles=li;static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(e)))(o||e)}})();static \u0275prov=nt({token:e,factory:e.\u0275fac})}return e})();var hi=(()=>{class e extends ot{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;onClose=new V;containerViewChild;_componentStyle=W(Nt);timeout;constructor(t){super(),this.zone=t}ngAfterViewInit(){super.ngAfterViewInit(),this.initTimeout()}initTimeout(){this.message?.sticky||this.zone.runOutsideAngular(()=>{this.timeout=setTimeout(()=>{this.onClose.emit({index:this.index,message:this.message})},this.message?.life||this.life||3e3)})}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.initTimeout()}onCloseIconClick=t=>{this.clearTimeout(),this.onClose.emit({index:this.index,message:this.message}),t.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}ngOnDestroy(){this.clearTimeout(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||e)(q(at))};static \u0275cmp=I({type:e,selectors:[["p-toastItem"]],viewQuery:function(i,o){if(i&1&&tt(ze,5),i&2){let n;S(n=O())&&(o.containerViewChild=n.first)}},inputs:{message:"message",index:[2,"index","index",Q],life:[2,"life","life",Q],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onClose:"onClose"},features:[et([Nt]),C],decls:4,vars:15,consts:[["container",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"mouseenter","mouseleave","ngClass"],[3,"ngClass","class"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[4,"ngIf"],[3,"ngClass",4,"ngIf"],["type","button","autofocus","",3,"click","keydown.enter","ariaLabel"]],template:function(i,o){if(i&1){let n=X();p(0,"div",1,0),J("mouseenter",function(){return L(n),z(o.onMouseEnter())})("mouseleave",function(){return L(n),z(o.onMouseLeave())}),_(2,Ne,1,5,"ng-container")(3,oi,4,10,"div",2),m()}i&2&&(T(o.message==null?null:o.message.styleClass),r("ngClass",o.cx("message"))("@messageState",R(13,Pe,ae(8,He,o.showTransformOptions,o.hideTransformOptions,o.showTransitionOptions,o.hideTransitionOptions))),d("id",o.message==null?null:o.message.id)("data-pc-name","toast")("data-pc-section","root"),l(2),Ot(o.headlessTemplate?2:3))},dependencies:[ft,ut,bt,It,xe,Se,Oe,Te,Ee,H],encapsulation:2,data:{animation:[zt("messageState",[le("visible",_t({transform:"translateY(0)",opacity:1})),yt("void => *",[_t({transform:"{{showTransformParams}}",opacity:0}),xt("{{showTransitionParams}}")]),yt("* => void",[xt("{{hideTransitionParams}}",_t({height:0,opacity:0,transform:"{{hideTransformParams}}"}))])])]},changeDetection:0})}return e})(),di=(()=>{class e extends ot{key;autoZIndex=!0;baseZIndex=0;life=3e3;style;styleClass;get position(){return this._position}set position(t){this._position=t,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";breakpoints;onClose=new V;template;headlessTemplate;containerViewChild;messageSubscription;clearSubscription;messages;messagesArchieve;_position="top-right";messageService=W(Ce);_componentStyle=W(Nt);styleElement;id=B("pn_id_");templates;ngOnInit(){super.ngOnInit(),this.messageSubscription=this.messageService.messageObserver.subscribe(t=>{if(t)if(Array.isArray(t)){let i=t.filter(o=>this.canAdd(o));this.add(i)}else this.canAdd(t)&&this.add([t])}),this.clearSubscription=this.messageService.clearObserver.subscribe(t=>{t?this.key===t&&(this.messages=null):this.messages=null,this.cd.markForCheck()})}_template;_headlessTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"message":this._template=t.template;break;case"headless":this._headlessTemplate=t.template;break;default:this._template=t.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),this.breakpoints&&this.createStyle()}add(t){this.messages=this.messages?[...this.messages,...t]:[...t],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...t]:[...t]),this.cd.markForCheck()}canAdd(t){let i=this.key===t.key;return i&&this.preventOpenDuplicates&&(i=!this.containsMessage(this.messages,t)),i&&this.preventDuplicates&&(i=!this.containsMessage(this.messagesArchieve,t)),i}containsMessage(t,i){return t?t.find(o=>o.summary===i.summary&&o.detail==i.detail&&o.severity===i.severity)!=null:!1}onMessageClose(t){this.messages?.splice(t.index,1),this.onClose.emit({message:t.message}),this.cd.detectChanges()}onAnimationStart(t){t.fromState==="void"&&(this.renderer.setAttribute(this.containerViewChild?.nativeElement,this.id,""),this.autoZIndex&&this.containerViewChild?.nativeElement.style.zIndex===""&&Z.set("modal",this.containerViewChild?.nativeElement,this.baseZIndex||this.config.zIndex.modal))}onAnimationEnd(t){t.toState==="void"&&this.autoZIndex&&ve(this.messages)&&Z.clear(this.containerViewChild?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",this.renderer.appendChild(this.document.head,this.styleElement);let t="";for(let i in this.breakpoints){let o="";for(let n in this.breakpoints[i])o+=n+":"+this.breakpoints[i][n]+" !important;";t+=`
                    @media screen and (max-width: ${i}) {
                        .p-toast[${this.id}] {
                           ${o}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",t),ye(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.containerViewChild&&this.autoZIndex&&Z.clear(this.containerViewChild.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(e)))(o||e)}})();static \u0275cmp=I({type:e,selectors:[["p-toast"]],contentQueries:function(i,o,n){if(i&1&&(F(n,ni,5),F(n,si,5),F(n,St,4)),i&2){let s;S(s=O())&&(o.template=s.first),S(s=O())&&(o.headlessTemplate=s.first),S(s=O())&&(o.templates=s)}},viewQuery:function(i,o){if(i&1&&tt(ze,5),i&2){let n;S(n=O())&&(o.containerViewChild=n.first)}},inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",it],baseZIndex:[2,"baseZIndex","baseZIndex",Q],life:[2,"life","life",Q],style:"style",styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",it],preventDuplicates:[2,"preventDuplicates","preventDuplicates",it],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[et([Nt]),C],decls:3,vars:7,consts:[["container",""],[3,"ngClass","ngStyle"],[3,"message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose",4,"ngFor","ngForOf"],[3,"onClose","message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions"]],template:function(i,o){i&1&&(p(0,"div",1,0),_(2,ai,1,10,"p-toastItem",2),m()),i&2&&(Rt(o.style),T(o.styleClass),r("ngClass",o.cx("root"))("ngStyle",o.sx("root")),l(2),r("ngForOf",o.messages))},dependencies:[ft,ut,Bt,Tt,hi,H],encapsulation:2,data:{animation:[zt("toastAnimation",[yt(":enter, :leave",[he("@*",ce())])])]},changeDetection:0})}return e})(),an=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=rt({type:e});static \u0275inj=st({imports:[di,H,H]})}return e})();var Ve=["content"],pi=["overlay"],mi=["*"],ui=(e,a,t,i,o,n,s,c,x,w,y,P,E,A)=>({"p-overlay p-component":!0,"p-overlay-modal p-overlay-mask p-overlay-mask-enter":e,"p-overlay-center":a,"p-overlay-top":t,"p-overlay-top-start":i,"p-overlay-top-end":o,"p-overlay-bottom":n,"p-overlay-bottom-start":s,"p-overlay-bottom-end":c,"p-overlay-left":x,"p-overlay-left-start":w,"p-overlay-left-end":y,"p-overlay-right":P,"p-overlay-right-start":E,"p-overlay-right-end":A}),fi=(e,a,t)=>({showTransitionParams:e,hideTransitionParams:a,transform:t}),gi=e=>({value:"visible",params:e}),_i=e=>({mode:e}),yi=e=>({$implicit:e});function vi(e,a){e&1&&j(0)}function Ci(e,a){if(e&1){let t=X();p(0,"div",3,1),J("click",function(o){L(t);let n=h(2);return z(n.onOverlayContentClick(o))})("@overlayContentAnimation.start",function(o){L(t);let n=h(2);return z(n.onOverlayContentAnimationStart(o))})("@overlayContentAnimation.done",function(o){L(t);let n=h(2);return z(n.onOverlayContentAnimationDone(o))}),Pt(2),_(3,vi,1,0,"ng-container",4),m()}if(e&2){let t=h(2);T(t.contentStyleClass),r("ngStyle",t.contentStyle)("ngClass","p-overlay-content")("@overlayContentAnimation",R(11,gi,At(7,fi,t.showTransitionOptions,t.hideTransitionOptions,t.transformOptions[t.modal?t.overlayResponsiveDirection:"default"]))),l(3),r("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",R(15,yi,R(13,_i,t.overlayMode)))}}function wi(e,a){if(e&1){let t=X();p(0,"div",3,0),J("click",function(){L(t);let o=h();return z(o.onOverlayClick())}),_(2,Ci,4,17,"div",2),m()}if(e&2){let t=h();T(t.styleClass),r("ngStyle",t.style)("ngClass",re(5,ui,[t.modal,t.modal&&t.overlayResponsiveDirection==="center",t.modal&&t.overlayResponsiveDirection==="top",t.modal&&t.overlayResponsiveDirection==="top-start",t.modal&&t.overlayResponsiveDirection==="top-end",t.modal&&t.overlayResponsiveDirection==="bottom",t.modal&&t.overlayResponsiveDirection==="bottom-start",t.modal&&t.overlayResponsiveDirection==="bottom-end",t.modal&&t.overlayResponsiveDirection==="left",t.modal&&t.overlayResponsiveDirection==="left-start",t.modal&&t.overlayResponsiveDirection==="left-end",t.modal&&t.overlayResponsiveDirection==="right",t.modal&&t.overlayResponsiveDirection==="right-start",t.modal&&t.overlayResponsiveDirection==="right-end"])),l(2),r("ngIf",t.visible)}}var bi=({dt:e})=>`
.p-overlay {
    position: absolute;
    top: 0;
}

.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}
`,De=(()=>{class e extends ht{name="overlay";theme=bi;static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(e)))(o||e)}})();static \u0275prov=nt({token:e,factory:e.\u0275fac})}return e})(),Ti=Wt([_t({transform:"{{transform}}",opacity:0}),xt("{{showTransitionParams}}")]),Ii=Wt([xt("{{hideTransitionParams}}",_t({transform:"{{transform}}",opacity:0}))]),xi=(()=>{class e extends ot{overlayService;zone;get visible(){return this._visible}set visible(t){this._visible=t,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(t){this._mode=t}get style(){return Mt.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(t){this._style=t}get styleClass(){return Mt.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(t){this._styleClass=t}get contentStyle(){return Mt.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(t){this._contentStyle=t}get contentStyleClass(){return Mt.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(t){this._contentStyleClass=t}get target(){let t=this._target||this.overlayOptions?.target;return t===void 0?"@prev":t}set target(t){this._target=t}get appendTo(){return this._appendTo||this.overlayOptions?.appendTo}set appendTo(t){this._appendTo=t}get autoZIndex(){let t=this._autoZIndex||this.overlayOptions?.autoZIndex;return t===void 0?!0:t}set autoZIndex(t){this._autoZIndex=t}get baseZIndex(){let t=this._baseZIndex||this.overlayOptions?.baseZIndex;return t===void 0?0:t}set baseZIndex(t){this._baseZIndex=t}get showTransitionOptions(){let t=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return t===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":t}set showTransitionOptions(t){this._showTransitionOptions=t}get hideTransitionOptions(){let t=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return t===void 0?".1s linear":t}set hideTransitionOptions(t){this._hideTransitionOptions=t}get listener(){return this._listener||this.overlayOptions?.listener}set listener(t){this._listener=t}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(t){this._responsive=t}get options(){return this._options}set options(t){this._options=t}visibleChange=new V;onBeforeShow=new V;onShow=new V;onBeforeHide=new V;onHide=new V;onAnimationStart=new V;onAnimationDone=new V;overlayViewChild;contentViewChild;contentTemplate;templates;_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_appendTo;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=W(De);documentKeyboardListener;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(gt(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return k(k({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return k(k({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return ge(this.target,this.el?.nativeElement)}constructor(t,i){super(),this.overlayService=t,this.zone=i}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}show(t,i=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:t||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&Yt(this.targetEl),this.modal&&Kt(this.document?.body,"p-overflow-hidden")}hide(t,i=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:t||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&Yt(this.targetEl),this.modal&&de(this.document?.body,"p-overflow-hidden");else return}alignOverlay(){!this.modal&&kt.alignOverlay(this.overlayEl,this.targetEl,this.appendTo)}onVisibleChange(t){this._visible=t,this.visibleChange.emit(t)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(t){this.overlayService.add({originalEvent:t,target:this.targetEl}),this.isOverlayContentClicked=!0}onOverlayContentAnimationStart(t){switch(t.toState){case"visible":this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.autoZIndex&&Z.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode]),kt.appendOverlay(this.overlayEl,this.appendTo==="body"?this.document.body:this.appendTo,this.appendTo),this.alignOverlay();break;case"void":this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.modal&&Kt(this.overlayEl,"p-overlay-mask-leave");break}this.handleEvents("onAnimationStart",t)}onOverlayContentAnimationDone(t){let i=this.overlayEl||t.element.parentElement;switch(t.toState){case"visible":this.visible&&(this.show(i,!0),this.bindListeners());break;case"void":if(!this.visible){this.hide(i,!0),this.modalVisible=!1,this.unbindListeners(),kt.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),Z.clear(i),this.cd.markForCheck();break}}this.handleEvents("onAnimationDone",t)}handleEvents(t,i){this[t].emit(i),this.options&&this.options[t]&&this.options[t](i),this.config?.overlayOptions&&(this.config?.overlayOptions)[t]&&(this.config?.overlayOptions)[t](i)}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Zt(this.targetEl,t=>{(this.listener?this.listener(t,{type:"scroll",mode:this.overlayMode,valid:!0}):!0)&&this.hide(t,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",t=>{let o=!(this.targetEl&&(this.targetEl.isSameNode(t.target)||!this.isOverlayClicked&&this.targetEl.contains(t.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(t,{type:"outside",mode:this.overlayMode,valid:t.which!==3&&o}):o)&&this.hide(t),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",t=>{(this.listener?this.listener(t,{type:"resize",mode:this.overlayMode,valid:!wt()}):!wt())&&this.hide(t,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",t=>{if(this.overlayOptions.hideOnEscape===!1||t.code!=="Escape")return;(this.listener?this.listener(t,{type:"keydown",mode:this.overlayMode,valid:!wt()}):!wt())&&this.zone.run(()=>{this.hide(t,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}ngOnDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&(kt.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),Z.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||e)(q(we),q(at))};static \u0275cmp=I({type:e,selectors:[["p-overlay"]],contentQueries:function(i,o,n){if(i&1&&(F(n,Ve,4),F(n,St,4)),i&2){let s;S(s=O())&&(o.contentTemplate=s.first),S(s=O())&&(o.templates=s)}},viewQuery:function(i,o){if(i&1&&(tt(pi,5),tt(Ve,5)),i&2){let n;S(n=O())&&(o.overlayViewChild=n.first),S(n=O())&&(o.contentViewChild=n.first)}},inputs:{visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",appendTo:"appendTo",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options"},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone"},features:[et([De]),C],ngContentSelectors:mi,decls:1,vars:1,consts:[["overlay",""],["content",""],[3,"ngStyle","class","ngClass","click",4,"ngIf"],[3,"click","ngStyle","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){i&1&&(Ht(),_(0,wi,3,20,"div",2)),i&2&&r("ngIf",o.modalVisible)},dependencies:[ft,ut,bt,It,Tt,H],encapsulation:2,data:{animation:[zt("overlayContentAnimation",[yt(":enter",[qt(Ti)]),yt(":leave",[qt(Ii)])])]},changeDetection:0})}return e})(),En=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=rt({type:e});static \u0275inj=st({imports:[xi,H,H]})}return e})();var ke=["content"],Si=["item"],Oi=["loader"],Ei=["loadericon"],Li=["element"],zi=["*"],Vi=(e,a,t)=>({"p-virtualscroller":!0,"p-virtualscroller-inline":e,"p-virtualscroller-both p-both-scroll":a,"p-virtualscroller-horizontal p-horizontal-scroll":t}),Xt=(e,a)=>({$implicit:e,options:a}),Di=e=>({"p-virtualscroller-content":!0,"p-virtualscroller-loading ":e}),ki=e=>({"p-virtualscroller-loader-mask":e}),Mi=e=>({numCols:e}),$e=e=>({options:e}),$i=()=>({styleClass:"p-virtualscroller-loading-icon"}),Fi=(e,a)=>({rows:e,columns:a});function Ri(e,a){e&1&&j(0)}function Hi(e,a){if(e&1&&(K(0),_(1,Ri,1,0,"ng-container",10),G()),e&2){let t=h(2);l(),r("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",mt(2,Xt,t.loadedItems,t.getContentOptions()))}}function Pi(e,a){e&1&&j(0)}function Ai(e,a){if(e&1&&(K(0),_(1,Pi,1,0,"ng-container",10),G()),e&2){let t=a.$implicit,i=a.index,o=h(3);l(),r("ngTemplateOutlet",o.itemTemplate||o._itemTemplate)("ngTemplateOutletContext",mt(2,Xt,t,o.getOptions(i)))}}function Bi(e,a){if(e&1&&(p(0,"div",11,3),_(2,Ai,2,5,"ng-container",12),m()),e&2){let t=h(2);Rt(t.contentStyle),T(t.contentStyleClass),r("ngClass",R(8,Di,t.d_loading)),d("data-pc-section","content"),l(2),r("ngForOf",t.loadedItems)("ngForTrackBy",t._trackBy)}}function Zi(e,a){if(e&1&&f(0,"div",13),e&2){let t=h(2);r("ngStyle",t.spacerStyle),d("data-pc-section","spacer")}}function Ni(e,a){e&1&&j(0)}function ji(e,a){if(e&1&&(K(0),_(1,Ni,1,0,"ng-container",10),G()),e&2){let t=a.index,i=h(4);l(),r("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",R(4,$e,i.getLoaderOptions(t,i.both&&R(2,Mi,i.numItemsInViewport.cols))))}}function Qi(e,a){if(e&1&&(K(0),_(1,ji,2,6,"ng-container",15),G()),e&2){let t=h(3);l(),r("ngForOf",t.loaderArr)}}function Wi(e,a){e&1&&j(0)}function qi(e,a){if(e&1&&(K(0),_(1,Wi,1,0,"ng-container",10),G()),e&2){let t=h(4);l(),r("ngTemplateOutlet",t.loaderIconTemplate||t._loaderIconTemplate)("ngTemplateOutletContext",R(3,$e,se(2,$i)))}}function Ki(e,a){e&1&&f(0,"SpinnerIcon",16),e&2&&(r("styleClass","p-virtualscroller-loading-icon pi-spin"),d("data-pc-section","loadingIcon"))}function Gi(e,a){if(e&1&&_(0,qi,2,5,"ng-container",6)(1,Ki,1,2,"ng-template",null,5,Lt),e&2){let t=Et(2),i=h(3);r("ngIf",i.loaderIconTemplate||i._loaderIconTemplate)("ngIfElse",t)}}function Yi(e,a){if(e&1&&(p(0,"div",14),_(1,Qi,2,1,"ng-container",6)(2,Gi,3,2,"ng-template",null,4,Lt),m()),e&2){let t=Et(3),i=h(2);r("ngClass",R(4,ki,!i.loaderTemplate)),d("data-pc-section","loader"),l(),r("ngIf",i.loaderTemplate||i._loaderTemplate)("ngIfElse",t)}}function Ui(e,a){if(e&1){let t=X();K(0),p(1,"div",7,1),J("scroll",function(o){L(t);let n=h();return z(n.onContainerScroll(o))}),_(3,Hi,2,5,"ng-container",6)(4,Bi,3,10,"ng-template",null,2,Lt)(6,Zi,1,2,"div",8)(7,Yi,4,6,"div",9),m(),G()}if(e&2){let t=Et(5),i=h();l(),T(i._styleClass),r("ngStyle",i._style)("ngClass",At(12,Vi,i.inline,i.both,i.horizontal)),d("id",i._id)("tabindex",i.tabindex)("data-pc-name","scroller")("data-pc-section","root"),l(2),r("ngIf",i.contentTemplate||i._contentTemplate)("ngIfElse",t),l(3),r("ngIf",i._showSpacer),l(),r("ngIf",!i.loaderDisabled&&i._showLoader&&i.d_loading)}}function Xi(e,a){e&1&&j(0)}function Ji(e,a){if(e&1&&(K(0),_(1,Xi,1,0,"ng-container",10),G()),e&2){let t=h(2);l(),r("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",mt(5,Xt,t.items,mt(2,Fi,t._items,t.loadedColumns)))}}function to(e,a){if(e&1&&(Pt(0),_(1,Ji,2,8,"ng-container",17)),e&2){let t=h();l(),r("ngIf",t.contentTemplate||t._contentTemplate)}}var eo=({dt:e})=>`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${e("virtualscroller.loader.mask.background")};
    color: ${e("virtualscroller.loader.mask.color")};
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: ${e("virtualscroller.loader.icon.size")};
    width: ${e("virtualscroller.loader.icon.size")};
    height: ${e("virtualscroller.loader.icon.size")};
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,Me=(()=>{class e extends ht{name="virtualscroller";theme=eo;static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(e)))(o||e)}})();static \u0275prov=nt({token:e,factory:e.\u0275fac})}return e})();var io=(()=>{class e extends ot{zone;get id(){return this._id}set id(t){this._id=t}get style(){return this._style}set style(t){this._style=t}get styleClass(){return this._styleClass}set styleClass(t){this._styleClass=t}get tabindex(){return this._tabindex}set tabindex(t){this._tabindex=t}get items(){return this._items}set items(t){this._items=t}get itemSize(){return this._itemSize}set itemSize(t){this._itemSize=t}get scrollHeight(){return this._scrollHeight}set scrollHeight(t){this._scrollHeight=t}get scrollWidth(){return this._scrollWidth}set scrollWidth(t){this._scrollWidth=t}get orientation(){return this._orientation}set orientation(t){this._orientation=t}get step(){return this._step}set step(t){this._step=t}get delay(){return this._delay}set delay(t){this._delay=t}get resizeDelay(){return this._resizeDelay}set resizeDelay(t){this._resizeDelay=t}get appendOnly(){return this._appendOnly}set appendOnly(t){this._appendOnly=t}get inline(){return this._inline}set inline(t){this._inline=t}get lazy(){return this._lazy}set lazy(t){this._lazy=t}get disabled(){return this._disabled}set disabled(t){this._disabled=t}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(t){this._loaderDisabled=t}get columns(){return this._columns}set columns(t){this._columns=t}get showSpacer(){return this._showSpacer}set showSpacer(t){this._showSpacer=t}get showLoader(){return this._showLoader}set showLoader(t){this._showLoader=t}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(t){this._numToleratedItems=t}get loading(){return this._loading}set loading(t){this._loading=t}get autoSize(){return this._autoSize}set autoSize(t){this._autoSize=t}get trackBy(){return this._trackBy}set trackBy(t){this._trackBy=t}get options(){return this._options}set options(t){this._options=t,t&&typeof t=="object"&&(Object.entries(t).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o)),Object.entries(t).forEach(([i,o])=>this[`${i}`]!==o&&(this[`${i}`]=o)))}onLazyLoad=new V;onScroll=new V;onScrollIndexChange=new V;elementViewChild;contentViewChild;height;_id;_style;_styleClass;_tabindex=0;_items;_itemSize=0;_scrollHeight;_scrollWidth;_orientation="vertical";_step=0;_delay=0;_resizeDelay=10;_appendOnly=!1;_inline=!1;_lazy=!1;_disabled=!1;_loaderDisabled=!1;_columns;_showSpacer=!0;_showLoader=!1;_numToleratedItems;_loading;_autoSize=!1;_trackBy;_options;d_loading=!1;d_numToleratedItems;contentEl;contentTemplate;itemTemplate;loaderTemplate;loaderIconTemplate;templates;_contentTemplate;_itemTemplate;_loaderTemplate;_loaderIconTemplate;first=0;last=0;page=0;isRangeChanged=!1;numItemsInViewport=0;lastScrollPos=0;lazyLoadState={};loaderArr=[];spacerStyle={};contentStyle={};scrollTimeout;resizeTimeout;initialized=!1;windowResizeListener;defaultWidth;defaultHeight;defaultContentWidth;defaultContentHeight;_contentStyleClass;get contentStyleClass(){return this._contentStyleClass}set contentStyleClass(t){this._contentStyleClass=t}get vertical(){return this._orientation==="vertical"}get horizontal(){return this._orientation==="horizontal"}get both(){return this._orientation==="both"}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(t=>this._columns?t:t.slice(this._appendOnly?0:this.first.cols,this.last.cols)):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}_componentStyle=W(Me);constructor(t){super(),this.zone=t}ngOnInit(){super.ngOnInit(),this.setInitialState()}ngOnChanges(t){super.ngOnChanges(t);let i=!1;if(this.scrollHeight=="100%"&&(this.height="100%"),t.loading){let{previousValue:o,currentValue:n}=t.loading;this.lazy&&o!==n&&n!==this.d_loading&&(this.d_loading=n,i=!0)}if(t.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),t.numToleratedItems){let{previousValue:o,currentValue:n}=t.numToleratedItems;o!==n&&n!==this.d_numToleratedItems&&(this.d_numToleratedItems=n)}if(t.options){let{previousValue:o,currentValue:n}=t.options;this.lazy&&o?.loading!==n?.loading&&n?.loading!==this.d_loading&&(this.d_loading=n.loading,i=!0),o?.numToleratedItems!==n?.numToleratedItems&&n?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=n.numToleratedItems)}this.initialized&&!i&&(t.items?.previousValue?.length!==t.items?.currentValue?.length||t.itemSize||t.scrollHeight||t.scrollWidth)&&(this.init(),this.calculateAutoSize())}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"item":this._itemTemplate=t.template;break;case"loader":this._loaderTemplate=t.template;break;case"loadericon":this._loaderIconTemplate=t.template;break;default:this._itemTemplate=t.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),Promise.resolve().then(()=>{this.viewInit()})}ngAfterViewChecked(){this.initialized||this.viewInit()}ngOnDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1,super.ngOnDestroy()}viewInit(){gt(this.platformId)&&!this.initialized&&Ut(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=Ct(this.elementViewChild?.nativeElement),this.defaultHeight=vt(this.elementViewChild?.nativeElement),this.defaultContentWidth=Ct(this.contentEl),this.defaultContentHeight=vt(this.contentEl),this.initialized=!0)}init(){this._disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize(),this.bindResizeListener(),this.cd.detectChanges())}setContentEl(t){this.contentEl=t||this.contentViewChild?.nativeElement||Dt(this.elementViewChild?.nativeElement,".p-virtualscroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,this.d_loading=this._loading||!1,this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=[]}getElementRef(){return this.elementViewChild}getPageByFirst(t){return Math.floor(((t??this.first)+this.d_numToleratedItems*4)/(this._step||1))}isPageChanged(t){return this._step?this.page!==this.getPageByFirst(t??this.first):!0}scrollTo(t){this.elementViewChild?.nativeElement?.scrollTo(t)}scrollToIndex(t,i="auto"){if(this.both?t.every(n=>n>-1):t>-1){let n=this.first,{scrollTop:s=0,scrollLeft:c=0}=this.elementViewChild?.nativeElement,{numToleratedItems:x}=this.calculateNumItems(),w=this.getContentPosition(),y=this.itemSize,P=(g=0,b)=>g<=b?0:g,E=(g,b,N)=>g*b+N,A=(g=0,b=0)=>this.scrollTo({left:g,top:b,behavior:i}),D=this.both?{rows:0,cols:0}:0,dt=!1,u=!1;this.both?(D={rows:P(t[0],x[0]),cols:P(t[1],x[1])},A(E(D.cols,y[1],w.left),E(D.rows,y[0],w.top)),u=this.lastScrollPos.top!==s||this.lastScrollPos.left!==c,dt=D.rows!==n.rows||D.cols!==n.cols):(D=P(t,x),this.horizontal?A(E(D,y,w.left),s):A(c,E(D,y,w.top)),u=this.lastScrollPos!==(this.horizontal?c:s),dt=D!==n),this.isRangeChanged=dt,u&&(this.first=D)}}scrollInView(t,i,o="auto"){if(i){let{first:n,viewport:s}=this.getRenderedRange(),c=(y=0,P=0)=>this.scrollTo({left:y,top:P,behavior:o}),x=i==="to-start",w=i==="to-end";if(x){if(this.both)s.first.rows-n.rows>t[0]?c(s.first.cols*this._itemSize[1],(s.first.rows-1)*this._itemSize[0]):s.first.cols-n.cols>t[1]&&c((s.first.cols-1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.first-n>t){let y=(s.first-1)*this._itemSize;this.horizontal?c(y,0):c(0,y)}}else if(w){if(this.both)s.last.rows-n.rows<=t[0]+1?c(s.first.cols*this._itemSize[1],(s.first.rows+1)*this._itemSize[0]):s.last.cols-n.cols<=t[1]+1&&c((s.first.cols+1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.last-n<=t+1){let y=(s.first+1)*this._itemSize;this.horizontal?c(y,0):c(0,y)}}}else this.scrollToIndex(t,o)}getRenderedRange(){let t=(n,s)=>s||n?Math.floor(n/(s||n)):0,i=this.first,o=0;if(this.elementViewChild?.nativeElement){let{scrollTop:n,scrollLeft:s}=this.elementViewChild.nativeElement;if(this.both)i={rows:t(n,this._itemSize[0]),cols:t(s,this._itemSize[1])},o={rows:i.rows+this.numItemsInViewport.rows,cols:i.cols+this.numItemsInViewport.cols};else{let c=this.horizontal?s:n;i=t(c,this._itemSize),o=i+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:i,last:o}}}calculateNumItems(){let t=this.getContentPosition(),i=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-t.left:0)||0,o=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-t.top:0)||0,n=(w,y)=>y||w?Math.ceil(w/(y||w)):0,s=w=>Math.ceil(w/2),c=this.both?{rows:n(o,this._itemSize[0]),cols:n(i,this._itemSize[1])}:n(this.horizontal?i:o,this._itemSize),x=this.d_numToleratedItems||(this.both?[s(c.rows),s(c.cols)]:s(c));return{numItemsInViewport:c,numToleratedItems:x}}calculateOptions(){let{numItemsInViewport:t,numToleratedItems:i}=this.calculateNumItems(),o=(c,x,w,y=!1)=>this.getLast(c+x+(c<w?2:3)*w,y),n=this.first,s=this.both?{rows:o(this.first.rows,t.rows,i[0]),cols:o(this.first.cols,t.cols,i[1],!0)}:o(this.first,t,i);this.last=s,this.numItemsInViewport=t,this.d_numToleratedItems=i,this.showLoader&&(this.loaderArr=this.both?Array.from({length:t.rows}).map(()=>Array.from({length:t.cols})):Array.from({length:t})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:n.cols}:0:n,last:Math.min(this._step?this._step:this.last,this.items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto",this.contentEl.style.position="relative",this.elementViewChild.nativeElement.style.contain="none";let[t,i]=[Ct(this.contentEl),vt(this.contentEl)];t!==this.defaultContentWidth&&(this.elementViewChild.nativeElement.style.width=""),i!==this.defaultContentHeight&&(this.elementViewChild.nativeElement.style.height="");let[o,n]=[Ct(this.elementViewChild.nativeElement),vt(this.elementViewChild.nativeElement)];(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=o<this.defaultWidth?o+"px":this._scrollWidth||this.defaultWidth+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=n<this.defaultHeight?n+"px":this._scrollHeight||this.defaultHeight+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth="",this.contentEl.style.position="",this.elementViewChild.nativeElement.style.contain=""}})}getLast(t=0,i=!1){return this._items?Math.min(i?(this._columns||this._items[0]).length:this._items.length,t):0}getContentPosition(){if(this.contentEl){let t=getComputedStyle(this.contentEl),i=parseFloat(t.paddingLeft)+Math.max(parseFloat(t.left)||0,0),o=parseFloat(t.paddingRight)+Math.max(parseFloat(t.right)||0,0),n=parseFloat(t.paddingTop)+Math.max(parseFloat(t.top)||0,0),s=parseFloat(t.paddingBottom)+Math.max(parseFloat(t.bottom)||0,0);return{left:i,right:o,top:n,bottom:s,x:i+o,y:n+s}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){let t=this.elementViewChild.nativeElement.parentElement.parentElement,i=this._scrollWidth||`${this.elementViewChild.nativeElement.offsetWidth||t.offsetWidth}px`,o=this._scrollHeight||`${this.elementViewChild.nativeElement.offsetHeight||t.offsetHeight}px`,n=(s,c)=>this.elementViewChild.nativeElement.style[s]=c;this.both||this.horizontal?(n("height",o),n("width",i)):n("height",o)}}setSpacerSize(){if(this._items){let t=this.getContentPosition(),i=(o,n,s,c=0)=>this.spacerStyle=jt(k({},this.spacerStyle),{[`${o}`]:(n||[]).length*s+c+"px"});this.both?(i("height",this._items,this._itemSize[0],t.y),i("width",this._columns||this._items[1],this._itemSize[1],t.x)):this.horizontal?i("width",this._columns||this._items,this._itemSize,t.x):i("height",this._items,this._itemSize,t.y)}}setContentPosition(t){if(this.contentEl&&!this._appendOnly){let i=t?t.first:this.first,o=(s,c)=>s*c,n=(s=0,c=0)=>this.contentStyle=jt(k({},this.contentStyle),{transform:`translate3d(${s}px, ${c}px, 0)`});if(this.both)n(o(i.cols,this._itemSize[1]),o(i.rows,this._itemSize[0]));else{let s=o(i,this._itemSize);this.horizontal?n(s,0):n(0,s)}}}onScrollPositionChange(t){let i=t.target,o=this.getContentPosition(),n=(u,g)=>u?u>g?u-g:u:0,s=(u,g)=>g||u?Math.floor(u/(g||u)):0,c=(u,g,b,N,U,pt)=>u<=U?U:pt?b-N-U:g+U-1,x=(u,g,b,N,U,pt,$t)=>u<=pt?0:Math.max(0,$t?u<g?b:u-pt:u>g?b:u-2*pt),w=(u,g,b,N,U,pt=!1)=>{let $t=g+N+2*U;return u>=U&&($t+=U+1),this.getLast($t,pt)},y=n(i.scrollTop,o.top),P=n(i.scrollLeft,o.left),E=this.both?{rows:0,cols:0}:0,A=this.last,D=!1,dt=this.lastScrollPos;if(this.both){let u=this.lastScrollPos.top<=y,g=this.lastScrollPos.left<=P;if(!this._appendOnly||this._appendOnly&&(u||g)){let b={rows:s(y,this._itemSize[0]),cols:s(P,this._itemSize[1])},N={rows:c(b.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],u),cols:c(b.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],g)};E={rows:x(b.rows,N.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],u),cols:x(b.cols,N.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],g)},A={rows:w(b.rows,E.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:w(b.cols,E.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},D=E.rows!==this.first.rows||A.rows!==this.last.rows||E.cols!==this.first.cols||A.cols!==this.last.cols||this.isRangeChanged,dt={top:y,left:P}}}else{let u=this.horizontal?P:y,g=this.lastScrollPos<=u;if(!this._appendOnly||this._appendOnly&&g){let b=s(u,this._itemSize),N=c(b,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,g);E=x(b,N,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,g),A=w(b,E,this.last,this.numItemsInViewport,this.d_numToleratedItems),D=E!==this.first||A!==this.last||this.isRangeChanged,dt=u}}return{first:E,last:A,isRangeChanged:D,scrollPos:dt}}onScrollChange(t){let{first:i,last:o,isRangeChanged:n,scrollPos:s}=this.onScrollPositionChange(t);if(n){let c={first:i,last:o};if(this.setContentPosition(c),this.first=i,this.last=o,this.lastScrollPos=s,this.handleEvents("onScrollIndexChange",c),this._lazy&&this.isPageChanged(i)){let x={first:this._step?Math.min(this.getPageByFirst(i)*this._step,this.items.length-this._step):i,last:Math.min(this._step?(this.getPageByFirst(i)+1)*this._step:o,this.items.length)};(this.lazyLoadState.first!==x.first||this.lazyLoadState.last!==x.last)&&this.handleEvents("onLazyLoad",x),this.lazyLoadState=x}}}onContainerScroll(t){if(this.handleEvents("onScroll",{originalEvent:t}),this._delay&&this.isPageChanged()){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){let{isRangeChanged:i}=this.onScrollPositionChange(t);(i||(this._step?this.isPageChanged():!1))&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(t),this.d_loading&&this.showLoader&&(!this._lazy||this._loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst()),this.cd.detectChanges()},this._delay)}else!this.d_loading&&this.onScrollChange(t)}bindResizeListener(){gt(this.platformId)&&(this.windowResizeListener||this.zone.runOutsideAngular(()=>{let t=this.document.defaultView,i=wt()?"orientationchange":"resize";this.windowResizeListener=this.renderer.listen(t,i,this.onWindowResize.bind(this))}))}unbindResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(Ut(this.elementViewChild?.nativeElement)){let[t,i]=[Ct(this.elementViewChild?.nativeElement),vt(this.elementViewChild?.nativeElement)],[o,n]=[t!==this.defaultWidth,i!==this.defaultHeight];(this.both?o||n:this.horizontal?o:this.vertical?n:!1)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=t,this.defaultHeight=i,this.defaultContentWidth=Ct(this.contentEl),this.defaultContentHeight=vt(this.contentEl),this.init()})}},this._resizeDelay)}handleEvents(t,i){return this.options&&this.options[t]?this.options[t](i):this[t].emit(i)}getContentOptions(){return{contentStyleClass:`p-virtualscroller-content ${this.d_loading?"p-virtualscroller-loading":""}`,items:this.loadedItems,getItemOptions:t=>this.getOptions(t),loading:this.d_loading,getLoaderOptions:(t,i)=>this.getLoaderOptions(t,i),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both}}getOptions(t){let i=(this._items||[]).length,o=this.both?this.first.rows+t:this.first+t;return{index:o,count:i,first:o===0,last:o===i-1,even:o%2===0,odd:o%2!==0}}getLoaderOptions(t,i){let o=this.loaderArr.length;return k({index:t,count:o,first:t===0,last:t===o-1,even:t%2===0,odd:t%2!==0},i)}static \u0275fac=function(i){return new(i||e)(q(at))};static \u0275cmp=I({type:e,selectors:[["p-scroller"],["p-virtualscroller"],["p-virtual-scroller"],["p-virtualScroller"]],contentQueries:function(i,o,n){if(i&1&&(F(n,ke,4),F(n,Si,4),F(n,Oi,4),F(n,Ei,4),F(n,St,4)),i&2){let s;S(s=O())&&(o.contentTemplate=s.first),S(s=O())&&(o.itemTemplate=s.first),S(s=O())&&(o.loaderTemplate=s.first),S(s=O())&&(o.loaderIconTemplate=s.first),S(s=O())&&(o.templates=s)}},viewQuery:function(i,o){if(i&1&&(tt(Li,5),tt(ke,5)),i&2){let n;S(n=O())&&(o.elementViewChild=n.first),S(n=O())&&(o.contentViewChild=n.first)}},hostVars:2,hostBindings:function(i,o){i&2&&ie("height",o.height)},inputs:{id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},features:[et([Me]),C,Ft],ngContentSelectors:zi,decls:3,vars:2,consts:[["disabledContainer",""],["element",""],["buildInContent",""],["content",""],["buildInLoader",""],["buildInLoaderIcon",""],[4,"ngIf","ngIfElse"],[3,"scroll","ngStyle","ngClass"],["class","p-virtualscroller-spacer",3,"ngStyle",4,"ngIf"],["class","p-virtualscroller-loader",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-virtualscroller-spacer",3,"ngStyle"],[1,"p-virtualscroller-loader",3,"ngClass"],[4,"ngFor","ngForOf"],[3,"styleClass"],[4,"ngIf"]],template:function(i,o){if(i&1&&(Ht(),_(0,Ui,8,16,"ng-container",6)(1,to,2,1,"ng-template",null,0,Lt)),i&2){let n=Et(2);r("ngIf",!o._disabled)("ngIfElse",n)}},dependencies:[ft,ut,Bt,bt,It,Tt,be,H],encapsulation:2})}return e})(),Gn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=rt({type:e});static \u0275inj=st({imports:[io,H,H]})}return e})();export{Co as a,xe as b,xo as c,$o as d,Ee as e,xi as f,En as g,io as h,Gn as i,fo as j,go as k,di as l,an as m};
