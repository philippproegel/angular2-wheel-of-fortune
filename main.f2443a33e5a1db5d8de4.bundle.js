webpackJsonp([1,4],{"/fcW":function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="/fcW"},0:function(t,e,n){t.exports=n("x35b")},"02Fp":function(t,e,n){"use strict";var i=n("Rw+2");n.d(e,"a",function(){return r});var r=function(){function t(){this.photoWidth=300,this.onNewPhoto=new i.K}return t.prototype.ngOnInit=function(){},t.prototype.ngAfterViewInit=function(){this.canvas=this.canvasRef.nativeElement,this.photo=this.photoRef.nativeElement,this.video=this.videoRef.nativeElement,this.linkCameraStreamToVideo(),this.clearPhoto()},t.prototype.linkCameraStreamToVideo=function(){var t=this,e=this;navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0}).then(function(n){t.video.src=window.URL.createObjectURL(n),t.video.play(),t.video.addEventListener("canplay",function(){this.streaming||(e.resizeCanvasAndVideo(),e.streaming=!0)},!1)})},t.prototype.resizeCanvasAndVideo=function(){this.photoHeight=this.video.videoHeight/(this.video.videoWidth/this.photoWidth),console.log("computed photo height: "+this.photoHeight),this.video.setAttribute("width",this.photoWidth),this.video.setAttribute("height",this.photoHeight),this.canvas.setAttribute("width",this.photoWidth),this.canvas.setAttribute("height",this.photoHeight),this.photo.setAttribute("width",this.photoWidth),this.photo.setAttribute("height",this.photoHeight)},t.prototype.takePhotoClicked=function(){this.takePicture()},t.prototype.takePicture=function(){var t=this.canvas.getContext("2d");if(this.photoWidth&&this.photoHeight){this.canvas.width=this.photoWidth,this.canvas.height=this.photoHeight,t.drawImage(this.video,0,0,this.photoWidth,this.photoHeight);var e=this.canvas.toDataURL("image/png");this.onNewPhoto.emit(e);(new Image).setAttribute("src",e),this.photo.setAttribute("src",e)}else this.clearPhoto()},t.prototype.clearPhoto=function(){var t=this.canvas.getContext("2d");t.fillStyle="#AAA",t.fillRect(0,0,this.canvas.width,this.canvas.height);var e=this.canvas.toDataURL("image/png");this.photo.setAttribute("src",e)},t.ctorParameters=function(){return[]},t}()},"1A80":function(t,e,n){"use strict";var i=n("YWx4"),r=n("R2h3"),o=n("qs5H"),s=n("TTjD"),_=n("jzTW"),h=n("gWLF"),a=n("vU4g"),l=n("Ni5f"),c=n("uPqc"),u=n("UQcF"),p=n("bgHk");n.d(e,"a",function(){return g});var d=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},f=function(){function t(){this._changed=!1,this.context=new i.a}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){return!0},t.prototype.subscribe=function(t,e){this._eventHandler=e},t}(),m=o.createRenderComponentType("",0,s.b.None,[],{}),y=function(t){function e(n,i,r,o){t.call(this,e,m,_.a.HOST,n,i,r,o,h.b.CheckAlways)}return d(e,t),e.prototype.createInternal=function(t){return this._el_0=o.selectOrCreateRenderHostElement(this.renderer,"app-root",o.EMPTY_INLINE_ARRAY,t,null),this.compView_0=new v(this.viewUtils,this,0,this._el_0),this._AppComponent_0_3=new f,this.compView_0.create(this._AppComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new a.a(0,this,this._el_0,this._AppComponent_0_3.context)},e.prototype.injectorGetInternal=function(t,e,n){return t===i.a&&0===e?this._AppComponent_0_3.context:n},e.prototype.detectChangesInternal=function(t){this._AppComponent_0_3.ngDoCheck(this,this._el_0,t),this.compView_0.internalDetectChanges(t)},e.prototype.destroyInternal=function(){this.compView_0.destroy()},e.prototype.visitRootNodesInternal=function(t,e){t(this._el_0,e)},e}(r.a),g=new a.b("app-root",y,i.a),b=[l.a],w=o.createRenderComponentType("",0,s.b.Emulated,b,{}),v=function(t){function e(n,i,r,o){t.call(this,e,w,_.a.COMPONENT,n,i,r,o,h.b.CheckAlways),this._expr_7=p.b}return d(e,t),e.prototype.createInternal=function(t){var e=this.renderer.createViewRoot(this.parentElement);return this._el_0=o.createRenderElement(this.renderer,e,"h1",o.EMPTY_INLINE_ARRAY,null),this._text_1=this.renderer.createText(this._el_0,"",null),this._text_2=this.renderer.createText(e,"\n",null),this._el_3=o.createRenderElement(this.renderer,e,"spin-wheel",o.EMPTY_INLINE_ARRAY,null),this.compView_3=new u.a(this.viewUtils,this,3,this._el_3),this._SpinWheelComponent_3_3=new u.b,this.compView_3.create(this._SpinWheelComponent_3_3.context),this._text_4=this.renderer.createText(e,"\n",null),this.init(null,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._text_2,this._el_3,this._text_4],null),null},e.prototype.injectorGetInternal=function(t,e,n){return t===c.a&&3===e?this._SpinWheelComponent_3_3.context:n},e.prototype.detectChangesInternal=function(t){this._SpinWheelComponent_3_3.ngDoCheck(this,this._el_3,t);var e=o.inlineInterpolate(1,"\n  ",this.context.title,"\n");o.checkBinding(t,this._expr_7,e)&&(this.renderer.setText(this._text_1,e),this._expr_7=e),this.compView_3.internalDetectChanges(t),t||0===this.numberOfChecks&&this._SpinWheelComponent_3_3.context.ngAfterViewInit()},e.prototype.destroyInternal=function(){this.compView_3.destroy()},e}(r.a)},Iksp:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(){}return t}()},Kuli:function(t,e,n){"use strict";var i=n("02Fp"),r=n("bgHk"),o=n("R2h3"),s=n("qs5H"),_=n("TTjD"),h=n("jzTW"),a=n("gWLF"),l=n("vU4g"),c=n("XFjt"),u=n("qbqm"),p=n("dJaa");n.d(e,"b",function(){return f}),n.d(e,"a",function(){return w});var d=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},f=function(){function t(){this._changed=!1,this.context=new i.a,this._expr_0=r.b}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){this.subscription0&&this.subscription0.unsubscribe()},t.prototype.check_photoWidth=function(t,e,n){(n||s.checkBinding(e,this._expr_0,t))&&(this._changed=!0,this.context.photoWidth=t,this._expr_0=t)},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,n||0===t.numberOfChecks&&this.context.ngOnInit(),i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){return!0},t.prototype.subscribe=function(t,e,n){this._eventHandler=e,n&&(this.subscription0=this.context.onNewPhoto.subscribe(e.bind(t,"onNewPhoto")))},t}(),m=s.createRenderComponentType("",0,_.b.None,[],{}),y=function(t){function e(n,i,r,o){t.call(this,e,m,h.a.HOST,n,i,r,o,a.b.CheckAlways)}return d(e,t),e.prototype.createInternal=function(t){return this._el_0=s.selectOrCreateRenderHostElement(this.renderer,"my-camera",s.EMPTY_INLINE_ARRAY,t,null),this.compView_0=new w(this.viewUtils,this,0,this._el_0),this._CameraComponent_0_3=new f,this.compView_0.create(this._CameraComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new l.a(0,this,this._el_0,this._CameraComponent_0_3.context)},e.prototype.injectorGetInternal=function(t,e,n){return t===i.a&&0===e?this._CameraComponent_0_3.context:n},e.prototype.detectChangesInternal=function(t){this._CameraComponent_0_3.ngDoCheck(this,this._el_0,t),this.compView_0.internalDetectChanges(t),t||0===this.numberOfChecks&&this._CameraComponent_0_3.context.ngAfterViewInit()},e.prototype.destroyInternal=function(){this.compView_0.destroy(),this._CameraComponent_0_3.ngOnDestroy()},e.prototype.visitRootNodesInternal=function(t,e){t(this._el_0,e)},e}(o.a),g=(new l.b("my-camera",y,i.a),[c.a]),b=s.createRenderComponentType("",0,_.b.Emulated,g,{}),w=function(t){function e(n,i,r,o){t.call(this,e,b,h.a.COMPONENT,n,i,r,o,a.b.CheckAlways)}return d(e,t),e.prototype.createInternal=function(t){var e=this.renderer.createViewRoot(this.parentElement);this._viewQuery_canvas_0=new u.a,this._viewQuery_video_1=new u.a,this._viewQuery_photo_2=new u.a,this._el_0=s.createRenderElement(this.renderer,e,"p",s.EMPTY_INLINE_ARRAY,null),this._text_1=this.renderer.createText(this._el_0,"\n  camera component works!\n",null),this._text_2=this.renderer.createText(e,"\n",null),this._el_3=s.createRenderElement(this.renderer,e,"div",new s.InlineArray2(2,"class","camera"),null),this._text_4=this.renderer.createText(this._el_3,"\n  ",null),this._el_5=s.createRenderElement(this.renderer,this._el_3,"video",new s.InlineArray2(2,"id","video"),null),this._text_6=this.renderer.createText(this._el_5,"Video stream not available.",null),this._text_7=this.renderer.createText(this._el_3,"\n  ",null),this._el_8=s.createRenderElement(this.renderer,this._el_3,"button",new s.InlineArray2(2,"id","startbutton"),null),this._text_9=this.renderer.createText(this._el_8,"Take photo",null),this._text_10=this.renderer.createText(this._el_3,"\n",null),this._text_11=this.renderer.createText(e,"\n",null),this._el_12=s.createRenderElement(this.renderer,e,"canvas",new s.InlineArray4(4,"id","canvas","style","display: none"),null),this._text_13=this.renderer.createText(this._el_12,"\n",null),this._text_14=this.renderer.createText(e,"\n",null),this._el_15=s.createRenderElement(this.renderer,e,"div",new s.InlineArray2(2,"class","output"),null),this._text_16=this.renderer.createText(this._el_15,"\n  ",null),this._el_17=s.createRenderElement(this.renderer,this._el_15,"img",new s.InlineArray4(4,"alt","The screen capture will appear in this box.","id","photo"),null),this._text_18=this.renderer.createText(this._el_15,"\n",null),this._text_19=this.renderer.createText(e,"\n",null);var n=s.subscribeToRenderElement(this,this._el_8,new s.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_8));return this._viewQuery_canvas_0.reset([new p.a(this._el_12)]),this.context.canvasRef=this._viewQuery_canvas_0.first,this._viewQuery_video_1.reset([new p.a(this._el_5)]),this.context.videoRef=this._viewQuery_video_1.first,this._viewQuery_photo_2.reset([new p.a(this._el_17)]),this.context.photoRef=this._viewQuery_photo_2.first,this.init(null,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._text_2,this._el_3,this._text_4,this._el_5,this._text_6,this._text_7,this._el_8,this._text_9,this._text_10,this._text_11,this._el_12,this._text_13,this._text_14,this._el_15,this._text_16,this._el_17,this._text_18,this._text_19],[n]),null},e.prototype.handleEvent_8=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if("click"==t){n=this.context.takePhotoClicked()!==!1&&n}return n},e}(o.a)},Ni5f:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=[""]},UQcF:function(t,e,n){"use strict";var i=n("uPqc"),r=n("bgHk"),o=n("R2h3"),s=n("qs5H"),_=n("TTjD"),h=n("jzTW"),a=n("gWLF"),l=n("vU4g"),c=n("d1rn"),u=n("qbqm"),p=n("02Fp"),d=n("Kuli"),f=n("dJaa");n.d(e,"b",function(){return y}),n.d(e,"a",function(){return R});var m=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},y=function(){function t(){this._changed=!1,this.context=new i.a,this._expr_0=r.b,this._expr_1=r.b,this._expr_2=r.b}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){},t.prototype.check_width=function(t,e,n){(n||s.checkBinding(e,this._expr_0,t))&&(this._changed=!0,this.context.width=t,this._expr_0=t)},t.prototype.check_height=function(t,e,n){(n||s.checkBinding(e,this._expr_1,t))&&(this._changed=!0,this.context.height=t,this._expr_1=t)},t.prototype.check_sliceColors=function(t,e,n){(n||s.checkBinding(e,this._expr_2,t))&&(this._changed=!0,this.context.sliceColors=t,this._expr_2=t)},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,n||0===t.numberOfChecks&&this.context.ngOnInit(),i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){return!0},t.prototype.subscribe=function(t,e){this._eventHandler=e},t}(),g=s.createRenderComponentType("",0,_.b.None,[],{}),b=function(t){function e(n,i,r,o){t.call(this,e,g,h.a.HOST,n,i,r,o,a.b.CheckAlways)}return m(e,t),e.prototype.createInternal=function(t){return this._el_0=s.selectOrCreateRenderHostElement(this.renderer,"spin-wheel",s.EMPTY_INLINE_ARRAY,t,null),this.compView_0=new R(this.viewUtils,this,0,this._el_0),this._SpinWheelComponent_0_3=new y,this.compView_0.create(this._SpinWheelComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new l.a(0,this,this._el_0,this._SpinWheelComponent_0_3.context)},e.prototype.injectorGetInternal=function(t,e,n){return t===i.a&&0===e?this._SpinWheelComponent_0_3.context:n},e.prototype.detectChangesInternal=function(t){this._SpinWheelComponent_0_3.ngDoCheck(this,this._el_0,t),this.compView_0.internalDetectChanges(t),t||0===this.numberOfChecks&&this._SpinWheelComponent_0_3.context.ngAfterViewInit()},e.prototype.destroyInternal=function(){this.compView_0.destroy()},e.prototype.visitRootNodesInternal=function(t,e){t(this._el_0,e)},e}(o.a),w=(new l.b("spin-wheel",b,i.a),[c.a]),v=s.createRenderComponentType("",0,_.b.Emulated,w,{}),R=function(t){function e(n,i,r,o){t.call(this,e,v,h.a.COMPONENT,n,i,r,o,a.b.CheckAlways)}return m(e,t),e.prototype.createInternal=function(t){var e=this.renderer.createViewRoot(this.parentElement);this._viewQuery_canvas_0=new u.a,this._el_0=s.createRenderElement(this.renderer,e,"my-camera",s.EMPTY_INLINE_ARRAY,null),this.compView_0=new d.a(this.viewUtils,this,0,this._el_0),this._CameraComponent_0_3=new d.b,this.compView_0.create(this._CameraComponent_0_3.context),this._text_1=this.renderer.createText(e,"\n",null),this._el_2=s.createRenderElement(this.renderer,e,"h2",s.EMPTY_INLINE_ARRAY,null),this._text_3=this.renderer.createText(this._el_2,"wheel of fortune",null),this._text_4=this.renderer.createText(e,"\n",null),this._el_5=s.createRenderElement(this.renderer,e,"div",new s.InlineArray2(2,"style","width: 400px"),null),this._text_6=this.renderer.createText(this._el_5,"\n",null),this._el_7=s.createRenderElement(this.renderer,this._el_5,"canvas",s.EMPTY_INLINE_ARRAY,null),this._text_8=this.renderer.createText(this._el_5,"\n",null),this._text_9=this.renderer.createText(e,"\n",null),this._el_10=s.createRenderElement(this.renderer,e,"button",new s.InlineArray2(2,"id","spinWheelButton"),null),this._text_11=this.renderer.createText(this._el_10,"spin wheel!",null),this._text_12=this.renderer.createText(e,"\n",null);var n=s.subscribeToRenderElement(this,this._el_0,new s.InlineArray2(2,"onNewPhoto",null),this.eventHandler(this.handleEvent_0));this._CameraComponent_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),!0);var i=s.subscribeToRenderElement(this,this._el_10,new s.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_10));return this._viewQuery_canvas_0.reset([new f.a(this._el_7)]),this.context.canvasRef=this._viewQuery_canvas_0.first,this.init(null,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._el_2,this._text_3,this._text_4,this._el_5,this._text_6,this._el_7,this._text_8,this._text_9,this._el_10,this._text_11,this._text_12],[n,i]),null},e.prototype.injectorGetInternal=function(t,e,n){return t===p.a&&0===e?this._CameraComponent_0_3.context:n},e.prototype.detectChangesInternal=function(t){this._CameraComponent_0_3.ngDoCheck(this,this._el_0,t),this.compView_0.internalDetectChanges(t),t||0===this.numberOfChecks&&this._CameraComponent_0_3.context.ngAfterViewInit()},e.prototype.destroyInternal=function(){this.compView_0.destroy(),this._CameraComponent_0_3.ngOnDestroy()},e.prototype.handleEvent_0=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if("onNewPhoto"==t){n=this.context.onNewPhoto(e)!==!1&&n}return n},e.prototype.handleEvent_10=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if("click"==t){n=this.context.startTimer()!==!1&&n}return n},e}(o.a)},XFjt:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=[""]},YWx4:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(){this.title="app works!"}return t}()},d1rn:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=[""]},kZql:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={production:!0}},kke6:function(t,e,n){"use strict";var i=n("mPYt"),r=n("Iksp"),o=n("SumY"),s=n("nnRi"),_=n("MXpF"),h=n("afOh"),a=n("d3cp"),l=n("VJXx"),c=n("PY0G"),u=n("6ZWU"),p=n("xBum"),d=n("hq13"),f=n("z5Ce"),m=n("2Fx2"),y=n("TnsU"),g=n("UAaV"),b=n("T5cK"),w=n("c+H2"),v=n("DbnS"),R=n("qs5H"),x=n("urEj"),C=n("YmUE"),A=n("MuAL"),E=n("yb2a"),I=n("9MX5"),T=n("2wEa"),O=n("1A80"),S=n("+uD9"),P=n("cnHn"),D=n("fQgb"),k=n("qXRy"),N=n("982l"),M=n("5fxb"),H=n("uc9x"),V=n("88Kh"),j=n("M2ac"),U=n("c2UE"),L=n("QZA1"),W=n("5CeK"),F=n("ikuj"),G=n("Bor2"),Y=n("EezI"),z=n("FvJ4");n.d(e,"a",function(){return B});var X=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},q=function(t){function e(e){t.call(this,e,[O.a],[O.a])}return X(e,t),Object.defineProperty(e.prototype,"_LOCALE_ID_7",{get:function(){return null==this.__LOCALE_ID_7&&(this.__LOCALE_ID_7=s.a(this.parent.get(S.a,null))),this.__LOCALE_ID_7},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_NgLocalization_8",{get:function(){return null==this.__NgLocalization_8&&(this.__NgLocalization_8=new c.a(this._LOCALE_ID_7)),this.__NgLocalization_8},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ApplicationRef_13",{get:function(){return null==this.__ApplicationRef_13&&(this.__ApplicationRef_13=this._ApplicationRef__12),this.__ApplicationRef_13},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Compiler_14",{get:function(){return null==this.__Compiler_14&&(this.__Compiler_14=new f.a),this.__Compiler_14},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_APP_ID_15",{get:function(){return null==this.__APP_ID_15&&(this.__APP_ID_15=P.a()),this.__APP_ID_15},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DOCUMENT_16",{get:function(){return null==this.__DOCUMENT_16&&(this.__DOCUMENT_16=_.a()),this.__DOCUMENT_16},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_HAMMER_GESTURE_CONFIG_17",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_17&&(this.__HAMMER_GESTURE_CONFIG_17=new m.a),this.__HAMMER_GESTURE_CONFIG_17},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EVENT_MANAGER_PLUGINS_18",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_18&&(this.__EVENT_MANAGER_PLUGINS_18=[new D.a,new k.a,new m.b(this._HAMMER_GESTURE_CONFIG_17)]),this.__EVENT_MANAGER_PLUGINS_18},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EventManager_19",{get:function(){return null==this.__EventManager_19&&(this.__EventManager_19=new y.a(this._EVENT_MANAGER_PLUGINS_18,this.parent.get(N.a))),this.__EventManager_19},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_AnimationDriver_21",{get:function(){return null==this.__AnimationDriver_21&&(this.__AnimationDriver_21=_.b()),this.__AnimationDriver_21},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DomRootRenderer_22",{get:function(){return null==this.__DomRootRenderer_22&&(this.__DomRootRenderer_22=new b.a(this._DOCUMENT_16,this._EventManager_19,this._DomSharedStylesHost_20,this._AnimationDriver_21,this._APP_ID_15)),this.__DomRootRenderer_22},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RootRenderer_23",{get:function(){return null==this.__RootRenderer_23&&(this.__RootRenderer_23=M.a(this._DomRootRenderer_22,this.parent.get(M.b,null),this.parent.get(d.a,null))),this.__RootRenderer_23},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DomSanitizer_24",{get:function(){return null==this.__DomSanitizer_24&&(this.__DomSanitizer_24=new w.a),this.__DomSanitizer_24},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Sanitizer_25",{get:function(){return null==this.__Sanitizer_25&&(this.__Sanitizer_25=this._DomSanitizer_24),this.__Sanitizer_25},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_AnimationQueue_26",{get:function(){return null==this.__AnimationQueue_26&&(this.__AnimationQueue_26=new v.a(this.parent.get(N.a))),this.__AnimationQueue_26},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ViewUtils_27",{get:function(){return null==this.__ViewUtils_27&&(this.__ViewUtils_27=new R.ViewUtils(this._RootRenderer_23,this._Sanitizer_25,this._AnimationQueue_26)),this.__ViewUtils_27},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_IterableDiffers_28",{get:function(){return null==this.__IterableDiffers_28&&(this.__IterableDiffers_28=s.b()),this.__IterableDiffers_28},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_KeyValueDiffers_29",{get:function(){return null==this.__KeyValueDiffers_29&&(this.__KeyValueDiffers_29=s.c()),this.__KeyValueDiffers_29},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_SharedStylesHost_30",{get:function(){return null==this.__SharedStylesHost_30&&(this.__SharedStylesHost_30=this._DomSharedStylesHost_20),this.__SharedStylesHost_30},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Title_31",{get:function(){return null==this.__Title_31&&(this.__Title_31=new x.a),this.__Title_31},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RadioControlRegistry_32",{get:function(){return null==this.__RadioControlRegistry_32&&(this.__RadioControlRegistry_32=new C.a),this.__RadioControlRegistry_32},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_BrowserXhr_33",{get:function(){return null==this.__BrowserXhr_33&&(this.__BrowserXhr_33=new A.a),this.__BrowserXhr_33},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ResponseOptions_34",{get:function(){return null==this.__ResponseOptions_34&&(this.__ResponseOptions_34=new E.a),this.__ResponseOptions_34},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XSRFStrategy_35",{get:function(){return null==this.__XSRFStrategy_35&&(this.__XSRFStrategy_35=l.a()),this.__XSRFStrategy_35},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XHRBackend_36",{get:function(){return null==this.__XHRBackend_36&&(this.__XHRBackend_36=new I.a(this._BrowserXhr_33,this._ResponseOptions_34,this._XSRFStrategy_35)),this.__XHRBackend_36},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RequestOptions_37",{get:function(){return null==this.__RequestOptions_37&&(this.__RequestOptions_37=new T.a),this.__RequestOptions_37},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Http_38",{get:function(){return null==this.__Http_38&&(this.__Http_38=l.b(this._XHRBackend_36,this._RequestOptions_37)),this.__Http_38},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new o.a,this._ApplicationModule_1=new s.d,this._BrowserModule_2=new _.c(this.parent.get(_.c,null)),this._InternalFormsSharedModule_3=new h.a,this._FormsModule_4=new a.a,this._HttpModule_5=new l.c,this._AppModule_6=new r.a,this._ErrorHandler_9=_.d(),this._ApplicationInitStatus_10=new u.a(this.parent.get(u.b,null)),this._Testability_11=new p.a(this.parent.get(N.a)),this._ApplicationRef__12=new d.b(this.parent.get(N.a),this.parent.get(H.a),this,this._ErrorHandler_9,this,this._ApplicationInitStatus_10,this.parent.get(p.b,null),this._Testability_11),this._DomSharedStylesHost_20=new g.a(this._DOCUMENT_16),this._AppModule_6},e.prototype.getInternal=function(t,e){return t===o.a?this._CommonModule_0:t===s.d?this._ApplicationModule_1:t===_.c?this._BrowserModule_2:t===h.a?this._InternalFormsSharedModule_3:t===a.a?this._FormsModule_4:t===l.c?this._HttpModule_5:t===r.a?this._AppModule_6:t===S.a?this._LOCALE_ID_7:t===c.b?this._NgLocalization_8:t===V.a?this._ErrorHandler_9:t===u.a?this._ApplicationInitStatus_10:t===p.a?this._Testability_11:t===d.b?this._ApplicationRef__12:t===d.c?this._ApplicationRef_13:t===f.a?this._Compiler_14:t===P.b?this._APP_ID_15:t===j.a?this._DOCUMENT_16:t===m.c?this._HAMMER_GESTURE_CONFIG_17:t===y.b?this._EVENT_MANAGER_PLUGINS_18:t===y.a?this._EventManager_19:t===g.a?this._DomSharedStylesHost_20:t===U.a?this._AnimationDriver_21:t===b.b?this._DomRootRenderer_22:t===L.a?this._RootRenderer_23:t===w.b?this._DomSanitizer_24:t===W.a?this._Sanitizer_25:t===v.a?this._AnimationQueue_26:t===R.ViewUtils?this._ViewUtils_27:t===F.a?this._IterableDiffers_28:t===G.a?this._KeyValueDiffers_29:t===g.b?this._SharedStylesHost_30:t===x.a?this._Title_31:t===C.a?this._RadioControlRegistry_32:t===A.a?this._BrowserXhr_33:t===E.b?this._ResponseOptions_34:t===Y.a?this._XSRFStrategy_35:t===I.a?this._XHRBackend_36:t===T.b?this._RequestOptions_37:t===z.a?this._Http_38:e},e.prototype.destroyInternal=function(){this._ApplicationRef__12.ngOnDestroy(),this._DomSharedStylesHost_20.ngOnDestroy()},e}(i.a),B=new i.b(q,r.a)},uPqc:function(t,e,n){"use strict";var i=n("Gvdl");n.n(i);n.d(e,"a",function(){return r});var r=function(){function t(){this.width=300,this.height=300,this.sliceColors=["#e7e5e5","#c3bebe","#e7e5e5","#c3bebe","#e7e5e5","#c3bebe","#e7e5e5","#c3bebe"],this.spinTime=0,this.simStep=33,this.photoArray=[]}return t.prototype.ngOnInit=function(){console.log("wheel of fortune props: width: "+this.width+" height: "+this.height)},t.prototype.ngAfterViewInit=function(){this.spinTimer=i.Observable.timer(0,this.simStep),this.canvas=this.canvasRef.nativeElement,this.canvas.width=this.width,this.canvas.height=this.height,this.degreeOfSlice=360/this.sliceColors.length,this.deg=0,this.draw()},t.prototype.onNewPhoto=function(t){console.log("received photo data");var e=new Image;e.setAttribute("src",t),this.photoArray.push(e),this.draw()},t.prototype.randomIntFromInterval=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},t.prototype.startTimer=function(){var t=this;this.spinTime<=0&&(this.spinTimerSubscription=this.spinTimer.subscribe(function(e){return t.animate()}),this.spinTime=this.randomIntFromInterval(2e3,1e4),console.log("spintime: "+this.spinTime))},t.prototype.stopTimer=function(){this.spinTimerSubscription.unsubscribe()},t.prototype.animate=function(){var t=this;window.requestAnimationFrame(function(e){return t.rotateWheel()}),this.spinTime-=this.simStep,this.spinTime<=0&&this.stopTimer()},t.prototype.deg2rad=function(t){return t*Math.PI/180},t.prototype.drawText=function(t,e,n){var i=this.width/2;t.save(),t.translate(i,i),t.rotate(this.deg2rad(e)),t.textAlign="right",t.fillStyle="#fff",t.font="bold 30px sans-serif",t.fillText(n,130,10),t.restore()},t.prototype.drawImage=function(t,e,n){console.log("drawImage");var i=this.width/2;t.save(),t.translate(i,i),t.rotate(this.deg2rad(e)),t.drawImage(n,70,-30,70,70),t.restore()},t.prototype.drawSlice=function(t,e,n,i){t.beginPath(),t.fillStyle=i,t.moveTo(e,e),t.arc(e,e,this.width/2,this.deg2rad(n),this.deg2rad(n+this.degreeOfSlice)),t.lineTo(e,e),t.fill()},t.prototype.drawSelectionMarker=function(t){t.beginPath(),t.fillStyle="#0000ff",t.moveTo(140,0),t.lineTo(160,0),t.lineTo(150,15),t.fill()},t.prototype.rotateWheel=function(){this.deg+=this.spinTime/1e3,this.draw()},t.prototype.draw=function(){if(this.canvas.getContext){var t=this.canvas.getContext("2d");this.drawSelectionMarker(t),t.fillStyle="#e70a0a",t.fillRect(0,0,this.width,this.height);for(var e=0;e<this.sliceColors.length;e++)this.drawSlice(t,this.width/2,this.deg,this.sliceColors[e]),this.photoArray[e]&&this.drawImage(t,this.deg+this.degreeOfSlice/2,this.photoArray[e]),this.deg+=this.degreeOfSlice;this.drawSelectionMarker(t)}},t.ctorParameters=function(){return[]},t}()},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Rw+2"),r=n("kZql"),o=n("D8Yg"),s=n("kke6");r.a.production&&n.i(i.a)(),n.i(o.a)().bootstrapModuleFactory(s.a)}},[0]);