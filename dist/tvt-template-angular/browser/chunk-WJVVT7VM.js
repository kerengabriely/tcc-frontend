import{a as Y,b as Z}from"./chunk-UK5TJNWC.js";import{a as H}from"./chunk-GNMCPGL7.js";import{g as G,h as A,i as W,k as q}from"./chunk-KOI2BV3Z.js";import{b as ge}from"./chunk-NN363JUB.js";import{b as me,d as ce}from"./chunk-OL42OIXF.js";import"./chunk-7AWYNYRD.js";import"./chunk-F4Q2XGET.js";import{a as se}from"./chunk-PMWQWODE.js";import{a as J,b as K}from"./chunk-6WLY72XZ.js";import{B as le,C as de,D as pe,q as ee,r as I,t as te,u as ne,w as ie,x as oe,y as re,z as ae}from"./chunk-MMNBBZVP.js";import{$ as g,Bb as s,Cd as U,Dd as _,Fd as S,Ha as l,Hd as w,Ib as k,Jb as O,M as b,N as C,Ra as u,Rd as Q,S as p,Sa as M,Td as X,Va as x,Xa as m,Y as F,Z as L,_ as D,bb as f,cb as a,db as P,eb as T,gb as z,kb as o,lb as r,mb as c,mc as $,oc as V,pc as R,qb as j,sb as v,tb as y,tc as h,ub as B,vb as N}from"./chunk-4EPYZPYR.js";var be=["*"],Ce=({dt:e})=>`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${e("divider.horizontal.margin")};
    padding: ${e("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${e("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${e("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${e("divider.vertical.margin")};
    padding: ${e("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${e("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${e("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${e("divider.content.background")};
    color: ${e("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`,Me={root:({props:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},xe={root:({props:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},ue=(()=>{class e extends S{name="divider";theme=Ce;classes=xe;inlineStyles=Me;static \u0275fac=(()=>{let n;return function(t){return(n||(n=g(e)))(t||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var Pe=(()=>{class e extends w{style;styleClass;layout="horizontal";type="solid";align;_componentStyle=p(ue);get hostClass(){return this.styleClass}static \u0275fac=(()=>{let n;return function(t){return(n||(n=g(e)))(t||e)}})();static \u0275cmp=u({type:e,selectors:[["p-divider"]],hostVars:33,hostBindings:function(i,t){i&2&&(f("aria-orientation",t.layout)("data-pc-name","divider")("role","separator"),z(t.hostClass),P("justify-content",t.layout==="horizontal"?t.align==="center"||t.align===void 0?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null)("align-items",t.layout==="vertical"?t.align==="center"||t.align===void 0?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null),T("p-divider",!0)("p-component",!0)("p-divider-horizontal",t.layout==="horizontal")("p-divider-vertical",t.layout==="vertical")("p-divider-solid",t.type==="solid")("p-divider-dashed",t.type==="dashed")("p-divider-dotted",t.type==="dotted")("p-divider-left",t.layout==="horizontal"&&(!t.align||t.align==="left"))("p-divider-center",t.layout==="horizontal"&&t.align==="center"||t.layout==="vertical"&&(!t.align||t.align==="center"))("p-divider-right",t.layout==="horizontal"&&t.align==="right")("p-divider-top",t.layout==="vertical"&&t.align==="top")("p-divider-bottom",t.layout==="vertical"&&t.align==="bottom"))},inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[k([ue]),x],ngContentSelectors:be,decls:2,vars:0,consts:[[1,"p-divider-content"]],template:function(i,t){i&1&&(B(),o(0,"div",0),N(1),r())},dependencies:[h,_],encapsulation:2,changeDetection:0})}return e})(),ve=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=M({type:e});static \u0275inj=C({imports:[Pe]})}return e})();var Oe=({dt:e})=>`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${e("progressspinner.colorOne")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${e("progressspinner.colorOne")};
    }
    40% {
        stroke: ${e("progressspinner.colorTwo")};
    }
    66% {
        stroke: ${e("progressspinner.colorThree")};
    }
    80%,
    90% {
        stroke: ${e("progressspinner.colorFour")};
    }
}
`,Se={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},ye=(()=>{class e extends S{name="progressspinner";theme=Oe;classes=Se;static \u0275fac=(()=>{let n;return function(t){return(n||(n=g(e)))(t||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var we=(()=>{class e extends w{styleClass;style;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=p(ye);static \u0275fac=(()=>{let n;return function(t){return(n||(n=g(e)))(t||e)}})();static \u0275cmp=u({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],inputs:{styleClass:"styleClass",style:"style",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[k([ye]),x],decls:3,vars:11,consts:[["role","progressbar",1,"p-progressspinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progressspinner-spin"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progressspinner-circle"]],template:function(i,t){i&1&&(o(0,"div",0),D(),o(1,"svg",1),c(2,"circle",2),r()()),i&2&&(a("ngStyle",t.style)("ngClass",t.styleClass),f("aria-label",t.ariaLabel)("aria-busy",!0)("data-pc-name","progressspinner")("data-pc-section","root"),l(),P("animation-duration",t.animationDuration),f("data-pc-section","root"),l(),f("fill",t.fill)("stroke-width",t.strokeWidth))},dependencies:[h,$,R,_],encapsulation:2,changeDetection:0})}return e})(),he=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=M({type:e});static \u0275inj=C({imports:[we,_,_]})}return e})();var E=()=>["/home"];function Ie(e,d){e&1&&(o(0,"div",23)(1,"h2"),s(2,"Seja bem-vindo(a)"),r(),o(3,"p"),s(4,"Fa\xE7a login para continuar"),r()())}function Fe(e,d){e&1&&(o(0,"span"),s(1,"E-mail \xE9 obrigat\xF3rio."),r())}function Le(e,d){e&1&&(o(0,"span"),s(1,"Formato de e-mail inv\xE1lido."),r())}function Ee(e,d){if(e&1&&(o(0,"small",24),m(1,Fe,2,0,"span",25)(2,Le,2,0,"span",25),r()),e&2){let n=y();l(),a("ngIf",n.email==null||n.email.errors==null?null:n.email.errors.required),l(),a("ngIf",n.email==null||n.email.errors==null?null:n.email.errors.email)}}function De(e,d){e&1&&(o(0,"small",24),s(1," Senha \xE9 obrigat\xF3ria. "),r())}function Te(e,d){if(e&1&&c(0,"p-message",30),e&2){let n=y(2);a("text",n.errorMessage)}}function ze(e,d){if(e&1){let n=j();m(0,Te,1,1,"p-message",26),o(1,"button",27),v("click",function(){F(n);let t=y();return L(t.onSubmit())}),r(),o(2,"div",28)(3,"span"),s(4,"N\xE3o tem uma conta? "),r(),o(5,"a",29),v("click",function(){F(n);let t=y();return L(t.goToRegister())}),s(6,"Cadastre-se"),r()()}if(e&2){let n=y();a("ngIf",n.errorMessage),l(),a("loading",n.isLoggingIn)("disabled",n.loginForm.invalid||n.isLoggingIn)}}var _e=class e{constructor(){this.router=p(G);this.authService=p(H);this.fb=p(ae);this.isLoggingIn=!1;this.errorMessage="";this.isMsalInitialized=!1;this.lastLoginInfo=null;this.hasValidSession=!1}ngOnInit(){this.loginForm=this.fb.group({email:["",[I.required,I.email]],password:["",[I.required]]})}get email(){return this.loginForm.get("email")}get password(){return this.loginForm.get("password")}onSubmit(){if(this.loginForm.invalid)return;this.isLoggingIn=!0,this.errorMessage="";let d=this.loginForm.value;this.authService.login(d).subscribe({next:()=>{},error:n=>{this.errorMessage="E-mail ou senha inv\xE1lidos. Tente novamente.",this.isLoggingIn=!1}})}goToRegister(){this.router.navigate(["/register"])}goToLogin(){this.router.navigate(["/login"])}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=u({type:e,selectors:[["app-login"]],decls:31,vars:10,consts:[[1,"header"],[1,"container"],["src","assets/images/logo.jpg","alt","TechStart Logo",1,"logo"],[1,"nav"],["routerLink","/home","routerLinkActive","active"],["fragment","solucoes",3,"routerLink"],["fragment","empresas",3,"routerLink"],["fragment","estudantes",3,"routerLink"],[1,""],["pButton","","label","Login",1,"p-button-text",3,"click"],["pButton","","label","Registrar",1,"p-button-rounded","btnRegistrar",3,"click"],[1,"login-container"],["styleClass","login-card shadow-5"],["pTemplate","header"],[3,"ngSubmit","formGroup"],[1,"p-fluid"],[1,"field"],["for","email"],["id","email","type","email","pInputText","","formControlName","email","placeholder","seuemail@exemplo.com"],["class","input-error",4,"ngIf"],["for","password"],["id","password","type","password","pInputText","","formControlName","password","placeholder","Sua senha"],["pTemplate","footer"],[1,"card-header"],[1,"input-error"],[4,"ngIf"],["severity","error","styleClass","w-full mb-3",3,"text",4,"ngIf"],["pButton","","type","submit","label","Entrar",1,"w-full",3,"click","loading","disabled"],[1,"mt-4","text-center"],[3,"click"],["severity","error","styleClass","w-full mb-3",3,"text"]],template:function(n,i){n&1&&(o(0,"header",0)(1,"div",1),c(2,"img",2),o(3,"nav",3)(4,"a",4),s(5,"In\xEDcio"),r(),o(6,"a",5),s(7,"Solu\xE7\xF5es"),r(),o(8,"a",6),s(9,"Empresas"),r(),o(10,"a",7),s(11,"Estudantes"),r()(),o(12,"div",8)(13,"button",9),v("click",function(){return i.goToLogin()}),r(),o(14,"button",10),v("click",function(){return i.goToRegister()}),r()()()(),o(15,"div",11)(16,"p-card",12),m(17,Ie,5,0,"ng-template",13),o(18,"form",14),v("ngSubmit",function(){return i.onSubmit()}),o(19,"div",15)(20,"div",16)(21,"label",17),s(22,"E-mail"),r(),c(23,"input",18),m(24,Ee,3,2,"small",19),r(),o(25,"div",16)(26,"label",20),s(27,"Senha"),r(),c(28,"input",21),m(29,De,2,0,"small",19),r()()(),m(30,ze,7,3,"ng-template",22),r()()),n&2&&(l(6),a("routerLink",O(7,E)),l(2),a("routerLink",O(8,E)),l(2),a("routerLink",O(9,E)),l(5),a("@pageAnimation",void 0),l(3),a("formGroup",i.loginForm),l(6),a("ngIf",(i.email==null?null:i.email.invalid)&&((i.email==null?null:i.email.dirty)||(i.email==null?null:i.email.touched))),l(5),a("ngIf",(i.password==null?null:i.password.invalid)&&((i.password==null?null:i.password.dirty)||(i.password==null?null:i.password.touched))))},dependencies:[h,V,K,J,U,X,Q,ve,Z,Y,he,le,ie,ee,te,ne,oe,re,pe,de,me,ce,ge,q,A,W],styles:['@charset "UTF-8";  .login-card{width:560px!important;border-radius:1.5rem!important;overflow:hidden;padding:0}.card-header[_ngcontent-%COMP%]{text-align:center;padding:2rem 1rem 1rem}.card-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:90px;margin-bottom:1rem}.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:700;color:var(--text-color);margin-bottom:.25rem}.card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.95rem;color:var(--text-color-secondary);margin:0}form[_ngcontent-%COMP%]{margin-top:1.5rem;display:flex;flex-direction:column;gap:1.25rem}form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{display:flex;flex-direction:column}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:600;color:var(--text-color);margin-bottom:.4rem;font-size:.9rem}form[_ngcontent-%COMP%]   input[pInputText][_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   .input-error[_ngcontent-%COMP%]{color:#d32f2f;font-size:.85rem;margin-top:.25rem}[_nghost-%COMP%]     .p-card-footer{padding:1.5rem}p-message[_ngcontent-%COMP%]{display:block;margin-bottom:1rem}.login-container[_ngcontent-%COMP%]   button[pButton][_ngcontent-%COMP%]{width:100%;border-radius:2rem!important;font-weight:600!important;font-size:1rem!important;padding:.9rem 0!important;background:var(--primary-color)!important;border:none!important}.login-container[_ngcontent-%COMP%]   button[pButton][_ngcontent-%COMP%]:hover:not(:disabled){background:var(--primary-color-hover)!important}.header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;gap:.5rem;align-items:center}.header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[pButton][_ngcontent-%COMP%]{width:auto;display:inline-flex;align-items:center;justify-content:center}.header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .p-button-text[_ngcontent-%COMP%]{background:transparent!important;border:none!important;color:#111930!important;padding:.5rem .75rem!important}.mt-4[_ngcontent-%COMP%]{margin-top:1.5rem;text-align:center}.mt-4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--text-color-secondary)}.mt-4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--primary-color);font-weight:600;text-decoration:none;margin-left:.25rem}.mt-4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.header[_ngcontent-%COMP%]{background:var(--surface-card);border-bottom:1px solid var(--border-color)}.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:1rem 2rem}.logo[_ngcontent-%COMP%]{height:40px;border-radius:6px}.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 .75rem;color:#111930;font-size:larger;font-weight:600;text-decoration:none}.actions[_ngcontent-%COMP%]{display:flex;gap:.5rem}.btnRegistrar[_ngcontent-%COMP%]{padding:10px 20px}.hero-actions[_ngcontent-%COMP%]{margin-top:1rem;display:flex;gap:1rem;justify-content:center;padding-top:30px}.container[_ngcontent-%COMP%]{max-width:1100px;margin:0 auto}.login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:80vh;background:var(--surface-ground);padding:2rem}.footer[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;padding:20px}.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.footer[_ngcontent-%COMP%]{background-color:#111930;left:0;right:0;bottom:0;width:100%;z-index:10}.footer-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 .5rem;color:var(--text-color-secondary);font-size:larger;font-weight:600;text-decoration:none;text-align:center}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-size:.75rem;text-align:center;margin-top:30px}@media (max-width: 768px){.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{flex-direction:column;gap:1rem}}'],data:{animation:[se]}})}};export{_e as LoginComponent};
