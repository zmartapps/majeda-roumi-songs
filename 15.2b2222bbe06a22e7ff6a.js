(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{TP0X:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=function(){return function(){}}(),i=e("pMnS"),a=e("gIcY"),o=e("NgMZ"),r=e("Z4CC"),s=e("Ip0R"),d=e("rk39"),c=e("kcMI"),g=(e("wBv1"),e("oVYL")),h=e("AilQ"),f=function(){function l(l,n,e,t,u){this.rest=l,this.gameBusiness=n,this.sanitizer=e,this.route=t,this.router=u,this.withvalue=50,this.valw="50",this.options={floor:0,ceil:100,step:1,minLimit:20,maxLimit:90},this.withvalue1=50,this.options1={floor:0,ceil:100,step:1,minLimit:20,maxLimit:90},this.title="helloworld",this.widthImg=0,this.heightImg=0,this.grillex=5,this.grilley=5,this.widthcase=0,this.heightcase=0,this.status=-1,this.nbdep=0,this.sel1="",this.sel2="",this.msg="",this.showorign=!0,this.tabImages=new Map,this.curStat=new Map}return l.prototype.changeStatus=function(){this.showorign=!this.showorign,document.getElementById("ddd").hidden=!this.showorign},l.prototype.selectFile=function(l){var n=this;if(l.target.files[0]&&0!=l.target.files[0].length)if(null!=l.target.files[0].type.match(/image\/*/)){var e=new FileReader;e.readAsDataURL(l.target.files[0]),e.onload=function(l){n.msg="",n.url=e.result,n.imageSrc=e.result,n.status=0,n.gameBusiness.initTable(n.tabImages,10,10),setTimeout(function(){n.timer.stop(),n.timer.reset()},1e3)}}else this.msg="Only images are supported";else this.msg="You must select an image"},l.prototype.newimage=function(){this.router.navigate(["spec"])},l.prototype.ngOnInit=function(){this.gameBusiness.initTable(this.tabImages,10,10)},l.prototype.ngAfterViewInit=function(){null!=this.timer&&(this.timer.stop(),this.timer.reset()),this.rest.track("MAJD","SELIMG").subscribe(function(l){})},l.prototype.dosomething=function(l){this.initImg=l,this.widthImg=l.clientWidth,this.heightImg=l.clientHeight,this.widthcase=this.widthImg/this.grillex,this.heightcase=this.heightImg/this.grilley,this.widthcase=Math.floor(this.widthcase),this.heightcase=Math.floor(this.heightcase),e("fjcx"),document.getElementById("rrr").hidden=!0},l.prototype.startMel=function(){var l=this;setTimeout(function(){l.gameBusiness.randomizeTables(l.tabImages,l.curStat,l.grillex,l.grilley),l.status=2,l.timer.start()},1e3)},l.prototype.extract=function(l){var n=new Uint8Array(l).reduce(function(l,n){return l+String.fromCharCode(n)},""),e=btoa(n);return this.sanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64,"+e)},l.prototype.getRandomInt=function(l,n){return Math.floor(Math.random()*(n-l+1))+l},l.prototype.checkPuzzel=function(){for(var l=this,n=!0,e=0;e<this.grillex;e++)for(var t=0;t<this.grilley;t++){var u=void 0;this.curStat.get(u=(u=""+t)+e)!=u&&(n=!1)}n&&setTimeout(function(){l.timer.stop(),l.status=0,alert("BRAVO !")},1e3)},l.prototype.melanger=function(){var l=this;if(1!=this.status){this.nbdep=0,this.status=1,this.timer.reset(),this.gameBusiness.initTable(this.tabImages,10,10),this.widthcase=this.widthImg/this.grillex,this.heightcase=this.heightImg/this.grilley,this.widthcase=Math.floor(this.widthcase),this.heightcase=Math.floor(this.heightcase);for(var n=e("fjcx"),t=0,u=function(e){for(var u=function(u){var a=e*i.widthcase,o=u*i.heightcase;n.read(i.imageSrc,function(i,r){r.crop(a,o,l.widthcase,l.heightcase).getBuffer(n.MIME_JPEG,function(n,i){var a=l.extract(i),o=""+u+e;l.curStat.set(o,o),l.tabImages.set(o,a),++t==l.grillex*l.grilley&&l.startMel()})})},a=0;a<i.grilley;a++)u(a)},i=this,a=0;a<this.grillex;a++)u(a)}},l.prototype.handleEvent=function(l){"done"!=l.action||alert("YOU LOSE ! GAME OVER .")},l.prototype.selectCase=function(l){if(""==this.sel1)this.sel1=l;else if(l!=this.sel1){var n=this.tabImages.get(l),e=this.tabImages.get(this.sel1);this.tabImages.set(this.sel1,n),this.tabImages.set(l,e);var t=this.curStat.get(l),u=this.curStat.get(this.sel1);this.curStat.set(this.sel1,t),this.curStat.set(l,u),this.sel1="",this.nbdep++,this.checkPuzzel()}},l.prototype.ngOnDestroy=function(){this.gameBusiness.initTable(this.tabImages,10,10),this.tabImages=void 0,this.imageSrc=void 0},l}(),m=e("ZYjt"),p=e("ZYCi"),v=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{animation:[{type:7,name:"routerTransition",definitions:[],options:{}}]}});function I(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"div",[["style","text-align:left"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h6",[["style","color:tomato;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["UPLOAD IMAGE JPEG/JPG"])),(l()(),t["\u0275eld"](3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,0,"input",[["accept","image/jpg, image/jpeg"],["type","file"]],null,[[null,"change"]],function(l,n,e){var t=!0;return"change"===n&&(t=!1!==l.component.selectFile(e)&&t),t},null,null))],null,null)}function C(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"div",[["style","text-align:left"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.newimage()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Select New Image"]))],null,null)}function w(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),t["\u0275did"](1,147456,null,0,a.l,[t.ElementRef,t.Renderer2,[2,a.n]],{value:[0,"value"]},null),t["\u0275did"](2,147456,null,0,a.r,[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),t["\u0275ted"](3,null,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit),l(n,2,0,n.context.$implicit)},function(l,n){l(n,3,0,n.context.$implicit)})}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),t["\u0275did"](1,147456,null,0,a.l,[t.ElementRef,t.Renderer2,[2,a.n]],{value:[0,"value"]},null),t["\u0275did"](2,147456,null,0,a.r,[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),t["\u0275ted"](3,null,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit),l(n,2,0,n.context.$implicit)},function(l,n){l(n,3,0,n.context.$implicit)})}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ng5-slider",[["class","ng5-slider"],["style"," width: 30%"]],[[2,"vertical",null],[2,"animate",null],[1,"disabled",0]],[[null,"valueChange"],["window","resize"]],function(l,n,e){var u=!0,i=l.component;return"window:resize"===n&&(u=!1!==t["\u0275nov"](l,2).onResize(e)&&u),"valueChange"===n&&(u=!1!==(i.withvalue1=e)&&u),u},o.b,o.a)),t["\u0275prd"](5120,null,a.g,function(l){return[l]},[r.b]),t["\u0275did"](2,4964352,null,1,r.b,[t.Renderer2,t.ElementRef,t.ChangeDetectorRef,t.NgZone],{value:[0,"value"],options:[1,"options"]},{valueChange:"valueChange"}),t["\u0275qud"](335544320,2,{tooltipTemplate:0})],function(l,n){var e=n.component;l(n,2,0,e.withvalue1,e.options1)},function(l,n){l(n,0,0,t["\u0275nov"](n,2).sliderElementVerticalClass,t["\u0275nov"](n,2).sliderElementAnimateClass,t["\u0275nov"](n,2).sliderElementDisabledAttr)})}function y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"img",[["id","ddd"]],[[8,"src",4]],null,null,null,null)),t["\u0275did"](1,278528,null,0,s.NgStyle,[t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngStyle:[0,"ngStyle"]},null),t["\u0275pod"](2,{width:0})],function(l,n){var e=l(n,2,0,n.component.withvalue1+"%");l(n,1,0,e)},function(l,n){l(n,0,0,n.component.imageSrc)})}function E(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,[["img2",1]],null,0,"img",[["id","rrr"]],[[8,"src",4]],[[null,"load"]],function(l,n,e){var u=!0;return"load"===n&&(u=!1!==l.component.dosomething(t["\u0275nov"](l,0))&&u),u},null,null))],null,function(l,n){l(n,0,0,n.component.imageSrc)})}function T(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,0,"img",[["alt",""],["src","assets/load.gif"],["style","width:220px;height:320px;"]],null,null,null,null,null))],null,null)}function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ng5-slider",[["class","ng5-slider"],["style"," width: 30%"]],[[2,"vertical",null],[2,"animate",null],[1,"disabled",0]],[[null,"valueChange"],["window","resize"]],function(l,n,e){var u=!0,i=l.component;return"window:resize"===n&&(u=!1!==t["\u0275nov"](l,2).onResize(e)&&u),"valueChange"===n&&(u=!1!==(i.withvalue=e)&&u),u},o.b,o.a)),t["\u0275prd"](5120,null,a.g,function(l){return[l]},[r.b]),t["\u0275did"](2,4964352,null,1,r.b,[t.Renderer2,t.ElementRef,t.ChangeDetectorRef,t.NgZone],{value:[0,"value"],options:[1,"options"]},{valueChange:"valueChange"}),t["\u0275qud"](335544320,3,{tooltipTemplate:0})],function(l,n){var e=n.component;l(n,2,0,e.withvalue,e.options)},function(l,n){l(n,0,0,t["\u0275nov"](n,2).sliderElementVerticalClass,t["\u0275nov"](n,2).sliderElementAnimateClass,t["\u0275nov"](n,2).sliderElementDisabledAttr)})}function S(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,0,"img",[["style","display: block; width: 100%;"]],[[8,"src",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.selectCase(""+l.parent.parent.context.$implicit+l.parent.context.$implicit)&&t),t},null,null))],null,function(l,n){l(n,0,0,n.component.tabImages.get(""+n.parent.parent.context.$implicit+n.parent.context.$implicit))})}function M(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"td",[["BORDER","0"],["CELLPADDING","0"],["CELLSPACING","0"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,S)),t["\u0275did"](2,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,null!=n.component.tabImages.get(""+n.parent.context.$implicit+n.context.$implicit))},null)}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"tr",[["BORDER","0"],["CELLPADDING","0"],["CELLSPACING","0"],["style","width: 100%"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,2,null,M)),t["\u0275did"](2,278528,null,0,s.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pad"](3,10)],function(l,n){var e=l(n,3,0,0,1,2,3,4,5,6,7,8,9);l(n,2,0,e)},null)}function D(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,6,"table",[["BORDER","0"],["CELLPADDING","0"],["CELLSPACING","0"]],null,null,null,null,null)),t["\u0275did"](1,278528,null,0,s.NgStyle,[t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngStyle:[0,"ngStyle"]},null),t["\u0275pod"](2,{width:0}),(l()(),t["\u0275eld"](3,0,null,null,3,"tbody",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,2,null,N)),t["\u0275did"](5,278528,null,0,s.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pad"](6,10)],function(l,n){var e=l(n,2,0,n.component.withvalue+"%");l(n,1,0,e);var t=l(n,6,0,0,1,2,3,4,5,6,7,8,9);l(n,5,0,t)},null)}function L(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,47,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.melanger()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Play"])),(l()(),t["\u0275ted"](-1,null,[" X-Case : "])),(l()(),t["\u0275eld"](4,0,null,null,9,"select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var u=!0,i=l.component;return"change"===n&&(u=!1!==t["\u0275nov"](l,5).onChange(e.target.value)&&u),"blur"===n&&(u=!1!==t["\u0275nov"](l,5).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(i.grillex=e)&&u),u},null,null)),t["\u0275did"](5,16384,null,0,a.n,[t.Renderer2,t.ElementRef],null,null),t["\u0275prd"](1024,null,a.g,function(l){return[l]},[a.n]),t["\u0275did"](7,671744,null,0,a.k,[[8,null],[8,null],[8,null],[6,a.g]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,a.h,null,[a.k]),t["\u0275did"](9,16384,null,0,a.i,[[4,a.h]],null,null),(l()(),t["\u0275and"](16777216,null,null,2,null,w)),t["\u0275did"](11,278528,null,0,s.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pad"](12,7),(l()(),t["\u0275ted"](-1,null,["5 "])),(l()(),t["\u0275ted"](-1,null,[" Y-Case : "])),(l()(),t["\u0275eld"](15,0,null,null,8,"select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var u=!0,i=l.component;return"change"===n&&(u=!1!==t["\u0275nov"](l,16).onChange(e.target.value)&&u),"blur"===n&&(u=!1!==t["\u0275nov"](l,16).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(i.grilley=e)&&u),u},null,null)),t["\u0275did"](16,16384,null,0,a.n,[t.Renderer2,t.ElementRef],null,null),t["\u0275prd"](1024,null,a.g,function(l){return[l]},[a.n]),t["\u0275did"](18,671744,null,0,a.k,[[8,null],[8,null],[8,null],[6,a.g]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,a.h,null,[a.k]),t["\u0275did"](20,16384,null,0,a.i,[[4,a.h]],null,null),(l()(),t["\u0275and"](16777216,null,null,2,null,R)),t["\u0275did"](22,278528,null,0,s.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pad"](23,7),(l()(),t["\u0275ted"](-1,null,[" Show Origin: "])),(l()(),t["\u0275eld"](25,0,null,null,0,"input",[["type","checkbox"]],[[8,"checked",0]],[[null,"change"]],function(l,n,e){var t=!0;return"change"===n&&(t=!1!==l.component.changeStatus()&&t),t},null,null)),(l()(),t["\u0275eld"](26,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](27,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,b)),t["\u0275did"](29,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](30,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,y)),t["\u0275did"](32,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](33,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](34,null,["\nMoves : "," Time : "])),(l()(),t["\u0275eld"](35,0,null,null,1,"cd-timer",[["format","hms"],["id","basicTimer"]],null,null,null,d.b,d.a)),t["\u0275did"](36,4374528,[[1,4],["basicTimer",4]],0,c.a,[t.ElementRef,t.Renderer2],{format:[0,"format"]},null),(l()(),t["\u0275eld"](37,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,E)),t["\u0275did"](39,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,T)),t["\u0275did"](41,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](43,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](44,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,D)),t["\u0275did"](46,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](47,0,null,null,0,"br",[],null,null,null,null,null))],function(l,n){var e=n.component;l(n,7,0,e.grillex);var t=l(n,12,0,3,4,5,6,7,8,9);l(n,11,0,t),l(n,18,0,e.grilley);var u=l(n,23,0,3,4,5,6,7,8,9);l(n,22,0,u),l(n,29,0,e.showorign),l(n,32,0,e.showorign),l(n,36,0,"hms"),l(n,39,0,5!=e.status),l(n,41,0,1==e.status),l(n,43,0,2==e.status),l(n,46,0,2==e.status)},function(l,n){var e=n.component;l(n,4,0,t["\u0275nov"](n,9).ngClassUntouched,t["\u0275nov"](n,9).ngClassTouched,t["\u0275nov"](n,9).ngClassPristine,t["\u0275nov"](n,9).ngClassDirty,t["\u0275nov"](n,9).ngClassValid,t["\u0275nov"](n,9).ngClassInvalid,t["\u0275nov"](n,9).ngClassPending),l(n,15,0,t["\u0275nov"](n,20).ngClassUntouched,t["\u0275nov"](n,20).ngClassTouched,t["\u0275nov"](n,20).ngClassPristine,t["\u0275nov"](n,20).ngClassDirty,t["\u0275nov"](n,20).ngClassValid,t["\u0275nov"](n,20).ngClassInvalid,t["\u0275nov"](n,20).ngClassPending),l(n,25,0,e.showorign),l(n,34,0,e.nbdep)})}function O(l){return t["\u0275vid"](0,[t["\u0275qud"](671088640,1,{timer:0}),(l()(),t["\u0275eld"](1,0,null,null,6,"div",[],[[24,"@routerTransition",0]],null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,I)),t["\u0275did"](3,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,C)),t["\u0275did"](5,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,L)),t["\u0275did"](7,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,3,0,-1==e.status),l(n,5,0,-1!=e.status),l(n,7,0,-1!=e.status)},function(l,n){l(n,1,0,void 0)})}function V(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-tables",[],null,null,null,O,v)),t["\u0275did"](1,4440064,null,0,f,[h.a,g.a,m.c,p.a,p.l],null,null)],function(l,n){l(n,1,0)},null)}var k=t["\u0275ccf"]("app-tables",f,V,{},{},[]),A=function(){return function(){}}(),F=e("+Sv0"),P=e("WB5j");e.d(n,"TablesModuleNgFactory",function(){return z});var z=t["\u0275cmf"](u,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,k]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[t.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,a.q,a.q,[]),t["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),t["\u0275mpd"](1073742336,p.o,p.o,[[2,p.u],[2,p.l]]),t["\u0275mpd"](1073742336,A,A,[]),t["\u0275mpd"](1073742336,F.a,F.a,[]),t["\u0275mpd"](1073742336,P.a,P.a,[]),t["\u0275mpd"](1073742336,a.p,a.p,[]),t["\u0275mpd"](1073742336,a.e,a.e,[]),t["\u0275mpd"](1073742336,r.a,r.a,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,p.j,function(){return[[{path:"",component:f}]]},[])])})}}]);