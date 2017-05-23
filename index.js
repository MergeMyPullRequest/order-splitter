"use strict";var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/'use strict';var qb="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;(function(){function k(){var a=this;this.s={};this.g=document.documentElement;var b=new za();b.rules=[];this.h=u.set(this.g,new u(b));this.i=!1;this.b=this.a=null;rb(function(){a.c();});}function L(){this.customStyles=[];this.enqueued=!1;}function sb(){}function ja(a){this.cache={};this.c=void 0===a?100:a;}function n(){}function u(a,b,c,d,e){this.H=a||null;this.b=b||null;this.Ba=c||[];this.R=null;this.$=e||"";this.a=this.F=this.J=null;}function p(){}function za(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName="";}function Zc(a){function b(b,c){Object.defineProperty(b,"innerHTML",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function set(b){var d=this,e=void 0;m(this)&&(e=[],Q(this,function(a){a!==d&&e.push(a);}));c.set.call(this,b);if(e)for(var f=0;f<e.length;f++){var g=e[f];1===g.__CE_state&&a.disconnectedCallback(g);}this.ownerDocument.__CE_hasRegistry?a.c(this):a.j(this);return b;}});}function c(b,c){v(b,"insertAdjacentElement",function(b,d){var e=m(d);b=c.call(this,b,d);e&&a.a(d);m(b)&&a.b(d);return b;});}tb?v(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=tb.call(this,a);}):console.warn("Custom Elements: `Element#attachShadow` was not patched.");if(Aa&&Aa.get)b(Element.prototype,Aa);else if(Ba&&Ba.get)b(HTMLElement.prototype,Ba);else{var d=Ca.call(document,"div");a.u(function(a){b(a,{enumerable:!0,configurable:!0,get:function get(){return ub.call(this,!0).innerHTML;},set:function set(a){var b="template"===this.localName?this.content:this;for(d.innerHTML=a;0<b.childNodes.length;){Da.call(b,b.childNodes[0]);}for(;0<d.childNodes.length;){ka.call(b,d.childNodes[0]);}}});});}v(Element.prototype,"setAttribute",function(b,c){if(1!==this.__CE_state)return vb.call(this,b,c);var d=Ea.call(this,b);vb.call(this,b,c);c=Ea.call(this,b);a.attributeChangedCallback(this,b,d,c,null);});v(Element.prototype,"setAttributeNS",function(b,c,d){if(1!==this.__CE_state)return wb.call(this,b,c,d);var e=la.call(this,b,c);wb.call(this,b,c,d);d=la.call(this,b,c);a.attributeChangedCallback(this,c,e,d,b);});v(Element.prototype,"removeAttribute",function(b){if(1!==this.__CE_state)return xb.call(this,b);var c=Ea.call(this,b);xb.call(this,b);null!==c&&a.attributeChangedCallback(this,b,c,null,null);});v(Element.prototype,"removeAttributeNS",function(b,c){if(1!==this.__CE_state)return yb.call(this,b,c);var d=la.call(this,b,c);yb.call(this,b,c);var e=la.call(this,b,c);d!==e&&a.attributeChangedCallback(this,c,d,e,b);});zb?c(HTMLElement.prototype,zb):Ab?c(Element.prototype,Ab):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");Bb(a,Element.prototype,{Sa:$c,append:ad});bd(a,{pb:cd,ob:dd,zb:ed,remove:fd});}function bd(a,b){var c=Element.prototype;c.before=function(c){for(var d=[],f=0;f<arguments.length;++f){d[f-0]=arguments[f];}f=d.filter(function(a){return a instanceof Node&&m(a);});b.pb.apply(this,d);for(var g=0;g<f.length;g++){a.a(f[g]);}if(m(this))for(f=0;f<d.length;f++){g=d[f],g instanceof Element&&a.b(g);}};c.after=function(c){for(var d=[],f=0;f<arguments.length;++f){d[f-0]=arguments[f];}f=d.filter(function(a){return a instanceof Node&&m(a);});b.ob.apply(this,d);for(var g=0;g<f.length;g++){a.a(f[g]);}if(m(this))for(f=0;f<d.length;f++){g=d[f],g instanceof Element&&a.b(g);}};c.replaceWith=function(c){for(var d=[],f=0;f<arguments.length;++f){d[f-0]=arguments[f];}var f=d.filter(function(a){return a instanceof Node&&m(a);}),g=m(this);b.zb.apply(this,d);for(var h=0;h<f.length;h++){a.a(f[h]);}if(g)for(a.a(this),f=0;f<d.length;f++){g=d[f],g instanceof Element&&a.b(g);}};c.remove=function(){var c=m(this);b.remove.call(this);c&&a.a(this);};}function gd(a){function b(b,d){Object.defineProperty(b,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function set(b){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,b);else{var c=void 0;if(this.firstChild){var e=this.childNodes,h=e.length;if(0<h&&m(this))for(var c=Array(h),l=0;l<h;l++){c[l]=e[l];}}d.set.call(this,b);if(c)for(b=0;b<c.length;b++){a.a(c[b]);}}}});}v(Node.prototype,"insertBefore",function(b,d){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);b=Cb.call(this,b,d);if(m(this))for(d=0;d<c.length;d++){a.b(c[d]);}return b;}c=m(b);d=Cb.call(this,b,d);c&&a.a(b);m(this)&&a.b(b);return d;});v(Node.prototype,"appendChild",function(b){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);b=ka.call(this,b);if(m(this))for(var e=0;e<c.length;e++){a.b(c[e]);}return b;}c=m(b);e=ka.call(this,b);c&&a.a(b);m(this)&&a.b(b);return e;});v(Node.prototype,"cloneNode",function(b){b=ub.call(this,b);this.ownerDocument.__CE_hasRegistry?a.c(b):a.j(b);return b;});v(Node.prototype,"removeChild",function(b){var c=m(b),e=Da.call(this,b);c&&a.a(b);return e;});v(Node.prototype,"replaceChild",function(b,d){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);b=Db.call(this,b,d);if(m(this))for(a.a(d),d=0;d<c.length;d++){a.b(c[d]);}return b;}var c=m(b),f=Db.call(this,b,d),g=m(this);g&&a.a(d);c&&a.a(b);g&&a.b(b);return f;});Fa&&Fa.get?b(Node.prototype,Fa):a.u(function(a){b(a,{enumerable:!0,configurable:!0,get:function get(){for(var a=[],b=0;b<this.childNodes.length;b++){a.push(this.childNodes[b].textContent);}return a.join("");},set:function set(a){for(;this.firstChild;){Da.call(this,this.firstChild);}ka.call(this,document.createTextNode(a));}});});}function hd(a){v(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var c=a.f(b);if(c)return new c.constructor();}b=Ca.call(this,b);a.g(b);return b;});v(Document.prototype,"importNode",function(b,c){b=id.call(this,b,c);this.__CE_hasRegistry?a.c(b):a.j(b);return b;});v(Document.prototype,"createElementNS",function(b,c){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var d=a.f(c);if(d)return new d.constructor();}b=jd.call(this,b,c);a.g(b);return b;});Bb(a,Document.prototype,{Sa:kd,append:ld});}function Bb(a,b,c){b.prepend=function(b){for(var d=[],f=0;f<arguments.length;++f){d[f-0]=arguments[f];}f=d.filter(function(a){return a instanceof Node&&m(a);});c.Sa.apply(this,d);for(var g=0;g<f.length;g++){a.a(f[g]);}if(m(this))for(f=0;f<d.length;f++){g=d[f],g instanceof Element&&a.b(g);}};b.append=function(b){for(var d=[],f=0;f<arguments.length;++f){d[f-0]=arguments[f];}f=d.filter(function(a){return a instanceof Node&&m(a);});c.append.apply(this,d);for(var g=0;g<f.length;g++){a.a(f[g]);}if(m(this))for(f=0;f<d.length;f++){g=d[f],g instanceof Element&&a.b(g);}};}function md(a){window.HTMLElement=function(){function b(){var b=this.constructor,d=a.K(b);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(!e.length)return e=Ca.call(document,d.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=d,a.g(e),e;var d=e.length-1,f=e[d];if(f===Eb)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");e[d]=Eb;Object.setPrototypeOf(f,b.prototype);a.g(f);return f;}b.prototype=nd.prototype;return b;}();}function r(a){this.f=!1;this.a=a;this.h=new Map();this.g=function(a){return a();};this.b=!1;this.c=[];this.i=new Ga(a,document);}function Fb(){var a=this;this.b=this.a=void 0;this.c=new Promise(function(b){a.b=b;a.a&&b(a.a);});}function Ga(a,b){this.b=a;this.a=b;this.M=void 0;this.b.c(this.a);"loading"===this.a.readyState&&(this.M=new MutationObserver(this.f.bind(this)),this.M.observe(this.a,{childList:!0,subtree:!0}));}function z(){this.s=new Map();this.o=new Map();this.i=[];this.h=!1;}function q(a,b){if(a!==Gb)throw new TypeError("Illegal constructor");a=document.createDocumentFragment();a.__proto__=q.prototype;a.i(b);return a;}function H(a){this.root=a;this.fa="slot";}function V(a){if(!a.__shady||void 0===a.__shady.firstChild){a.__shady=a.__shady||{};a.__shady.firstChild=Ha(a);a.__shady.lastChild=Ia(a);Hb(a);for(var b=a.__shady.childNodes=da(a),c=0,d;c<b.length&&(d=b[c]);c++){d.__shady=d.__shady||{},d.__shady.parentNode=a,d.__shady.nextSibling=b[c+1]||null,d.__shady.previousSibling=b[c-1]||null,Ib(d);}}}function od(a){var b=a&&a.M;b&&(b.ea.delete(a.hb),b.ea.size||(a.mb.__shady.Y=null));}function pd(a,b){a.__shady=a.__shady||{};a.__shady.Y||(a.__shady.Y=new ma());a.__shady.Y.ea.add(b);var c=a.__shady.Y;return{hb:b,M:c,mb:a,takeRecords:function takeRecords(){return c.takeRecords();}};}function ma(){this.a=!1;this.addedNodes=[];this.removedNodes=[];this.ea=new Set();}function C(a){return"ShadyRoot"===a.eb;}function W(a){a=a.getRootNode();if(C(a))return a;}function Ja(a,b){if(a&&b)for(var c=Object.getOwnPropertyNames(b),d=0,e;d<c.length&&(e=c[d]);d++){var f=Object.getOwnPropertyDescriptor(b,e);f&&Object.defineProperty(a,e,f);}}function Ka(a,b){for(var c=[],d=1;d<arguments.length;++d){c[d-1]=arguments[d];}for(d=0;d<c.length;d++){Ja(a,c[d]);}return a;}function qd(a,b){for(var c in b){a[c]=b[c];}}function Jb(a){La.push(a);Ma.textContent=Kb++;}function Lb(a){Na||(Na=!0,Jb(na));ea.push(a);}function na(){Na=!1;for(var a=!!ea.length;ea.length;){ea.shift()();}return a;}function rd(a,b){var c=b.getRootNode();return a.map(function(a){var b=c===a.target.getRootNode();if(b&&a.addedNodes){if(b=Array.from(a.addedNodes).filter(function(a){return c===a.getRootNode();}),b.length)return a=Object.create(a),Object.defineProperty(a,"addedNodes",{value:b,configurable:!0}),a;}else if(b)return a;}).filter(function(a){return a;});}function Mb(a){switch(a){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case"\xA0":return"&nbsp;";}}function Nb(a){for(var b={},c=0;c<a.length;c++){b[a[c]]=!0;}return b;}function Oa(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,g;e<f&&(g=d[e]);e++){var h;a:{var l;h=g;l=a;var B=b;switch(h.nodeType){case Node.ELEMENT_NODE:for(var k=h.localName,G="<"+k,m=h.attributes,n=0;l=m[n];n++){G+=" "+l.name+'="'+l.value.replace(sd,Mb)+'"';}G+=">";h=td[k]?G:G+Oa(h,B)+"</"+k+">";break a;case Node.TEXT_NODE:h=h.data;h=l&&ud[l.localName]?h:h.replace(vd,Mb);break a;case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),Error("not implemented");}}c+=h;}return c;}function R(a){D.currentNode=a;return D.parentNode();}function Ha(a){D.currentNode=a;return D.firstChild();}function Ia(a){D.currentNode=a;return D.lastChild();}function Ob(a){D.currentNode=a;return D.previousSibling();}function Pb(a){D.currentNode=a;return D.nextSibling();}function da(a){var b=[];D.currentNode=a;for(a=D.firstChild();a;){b.push(a),a=D.nextSibling();}return b;}function Qb(a){E.currentNode=a;return E.parentNode();}function Rb(a){E.currentNode=a;return E.firstChild();}function Sb(a){E.currentNode=a;return E.lastChild();}function Tb(a){E.currentNode=a;return E.previousSibling();}function Ub(a){E.currentNode=a;return E.nextSibling();}function Vb(a){var b=[];E.currentNode=a;for(a=E.firstChild();a;){b.push(a),a=E.nextSibling();}return b;}function Wb(a){return Oa(a,function(a){return da(a);});}function Xb(a){if(a.nodeType!==Node.ELEMENT_NODE)return a.nodeValue;a=document.createTreeWalker(a,NodeFilter.SHOW_TEXT,null,!1);for(var b="",c;c=a.nextNode();){b+=c.nodeValue;}return b;}function M(a,b,c){for(var d in b){var e=Object.getOwnPropertyDescriptor(a,d);e&&e.configurable||!e&&c?Object.defineProperty(a,d,b[d]):c&&console.warn("Could not define",d,"on",a);}}function S(a){M(a,Yb);M(a,Pa);M(a,Qa);}function Zb(a,b,c){Ib(a);c=c||null;a.__shady=a.__shady||{};b.__shady=b.__shady||{};c&&(c.__shady=c.__shady||{});a.__shady.previousSibling=c?c.__shady.previousSibling:b.lastChild;var d=a.__shady.previousSibling;d&&d.__shady&&(d.__shady.nextSibling=a);(d=a.__shady.nextSibling=c)&&d.__shady&&(d.__shady.previousSibling=a);a.__shady.parentNode=b;c?c===b.__shady.firstChild&&(b.__shady.firstChild=a):(b.__shady.lastChild=a,b.__shady.firstChild||(b.__shady.firstChild=a));b.__shady.childNodes=null;}function $b(a){var b=a.__shady&&a.__shady.parentNode,c,d=W(a);if(b||d){c=ac(a);if(b){a.__shady=a.__shady||{};b.__shady=b.__shady||{};a===b.__shady.firstChild&&(b.__shady.firstChild=a.__shady.nextSibling);a===b.__shady.lastChild&&(b.__shady.lastChild=a.__shady.previousSibling);var e=a.__shady.previousSibling,f=a.__shady.nextSibling;e&&(e.__shady=e.__shady||{},e.__shady.nextSibling=f);f&&(f.__shady=f.__shady||{},f.__shady.previousSibling=e);a.__shady.parentNode=a.__shady.previousSibling=a.__shady.nextSibling=void 0;void 0!==b.__shady.childNodes&&(b.__shady.childNodes=null);}if(e=d){for(var g,e=d.ta(),f=0;f<e.length;f++){var h=e[f],l;a:{for(l=h;l;){if(l==a){l=!0;break a;}l=l.parentNode;}l=void 0;}if(l)for(h=h.assignedNodes({flatten:!0}),l=0;l<h.length;l++){g=!0;var B=h[l],k=R(B);k&&X.call(k,B);}}e=g;}b=b&&d&&b.localName===d.C.fa;if(e||b)d.ca=!1,oa(d);}Ra(a);return c;}function Sa(a,b,c){if(a=a.__shady&&a.__shady.Y)b&&a.addedNodes.push(b),c&&a.removedNodes.push(c),a.Bb();}function Ta(a){if(a&&a.nodeType){a.__shady=a.__shady||{};var b=a.__shady.Ca;void 0===b&&(C(a)?b=a:b=(b=a.parentNode)?Ta(b):a,document.documentElement.contains(a)&&(a.__shady.Ca=b));return b;}}function bc(a,b,c){var d,e=c.C.fa;if(a.nodeType!==Node.DOCUMENT_FRAGMENT_NODE||a.__noInsertionPoint)a.localName===e&&(V(b),V(a),d=!0);else for(var e=a.querySelectorAll(e),f=0,g,h;f<e.length&&(g=e[f]);f++){h=g.parentNode,h===a&&(h=b),h=bc(g,h,c),d=d||h;}return d;}function cc(a){return(a=a&&a.__shady&&a.__shady.root)&&a.za();}function Ra(a){if(a.__shady&&void 0!==a.__shady.Ca)for(var b=a.childNodes,c=0,d=b.length,e;c<d&&(e=b[c]);c++){Ra(e);}a.__shady=a.__shady||{};a.__shady.Ca=void 0;}function ac(a){a=a.parentNode;if(cc(a))return oa(a.__shady.root),!0;}function oa(a){a.sa=!0;a.update();}function dc(a,b){"slot"===b?ac(a):"slot"===a.localName&&"name"===b&&(a=W(a))&&a.update();}function ec(a,b,c){var d=[];fc(a.childNodes,b,c,d);return d;}function fc(a,b,c,d){for(var e=0,f=a.length,g;e<f&&(g=a[e]);e++){var h;if(h=g.nodeType===Node.ELEMENT_NODE){h=g;var l=b,B=c,k=d,G=l(h);G&&k.push(h);B&&B(G)?h=G:(fc(h.childNodes,l,B,k),h=void 0);}if(h)break;}}function gc(a){a=a.getRootNode();C(a)&&a.Ta();}function hc(a,b,c){if(c){var d=c.__shady&&c.__shady.parentNode;if(void 0!==d&&d!==a||void 0===d&&R(c)!==a)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(c===b)return b;b.nodeType!==Node.DOCUMENT_FRAGMENT_NODE&&((d=b.__shady&&b.__shady.parentNode)?(Sa(d,null,b),$b(b)):(b.parentNode&&X.call(b.parentNode,b),Ra(b)));var d=c,e=W(a),f;e&&(b.__noInsertionPoint&&!e.sa&&(e.ca=!0),f=bc(b,a,e))&&(e.ca=!1);if(a.__shady&&void 0!==a.__shady.firstChild)if(Hb(a),a.__shady=a.__shady||{},void 0!==a.__shady.firstChild&&(a.__shady.childNodes=null),b.nodeType===Node.DOCUMENT_FRAGMENT_NODE){for(var g=b.childNodes,h=0;h<g.length;h++){Zb(g[h],a,d);}b.__shady=b.__shady||{};g=void 0!==b.__shady.firstChild?null:void 0;b.__shady.firstChild=b.__shady.lastChild=g;b.__shady.childNodes=g;}else Zb(b,a,d);var g=f,h=e&&e.C.fa||"",l=b.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&!b.__noInsertionPoint&&h&&b.querySelector(h);f=l&&l.parentNode.nodeType!==Node.DOCUMENT_FRAGMENT_NODE;((l=l||b.localName===h)||a.localName===h||g)&&e&&oa(e);(e=cc(a))&&oa(a.__shady&&a.__shady.root);if(!(e||l&&!f||a.__shady.root||d&&C(d.parentNode)&&d.parentNode.N)){if(c&&(d=W(c))){var B;if(c.localName===d.C.fa)a:{d=c.assignedNodes({flatten:!0});e=Ta(c);f=0;for(g=d.length;f<g&&(B=d[f]);f++){if(e.ga(c,B))break a;}B=void 0;}else B=c;c=B;}B=C(a)?a.host:a;c?Ua.call(B,b,c):ic.call(B,b);}Sa(a,b);return b;}function jc(a,b){if(a.ownerDocument!==document)return Va.call(document,a,b);var c=Va.call(document,a,!1);if(b){a=a.childNodes;b=0;for(var d;b<a.length;b++){d=jc(a[b],!0),c.appendChild(d);}}return c;}function Wa(a,b){var c=[],d=a;for(a=a===window?window:a.getRootNode();d;){c.push(d),d=d.assignedSlot?d.assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d.host:d.parentNode;}c[c.length-1]===document&&c.push(window);return c;}function kc(a,b){if(!C)return a;a=Wa(a,!0);for(var c=0,d,e,f,g;c<b.length;c++){if(d=b[c],f=d===window?window:d.getRootNode(),f!==e&&(g=a.indexOf(f),e=f),!C(f)||-1<g)return d;}}function Xa(a){function b(b,d){b=new a(b,d);b.oa=d&&!!d.composed;return b;}qd(b,a);b.prototype=a.prototype;return b;}function lc(a,b,c){if(c=b.B&&b.B[a.type]&&b.B[a.type][c])for(var d=0,e;(e=c[d])&&a.target!==a.relatedTarget&&(e.call(b,a),!a.bb);d++){}}function wd(a){var b=a.composedPath(),c;Object.defineProperty(a,"currentTarget",{get:function get(){return c;},configurable:!0});for(var d=b.length-1;0<=d;d--){if(c=b[d],lc(a,c,"capture"),a.pa)return;}Object.defineProperty(a,"eventPhase",{get:function get(){return Event.AT_TARGET;}});for(var e,d=0;d<b.length;d++){if(c=b[d],!d||c.shadowRoot&&c.shadowRoot===e)if(lc(a,c,"bubble"),c!==window&&(e=c.getRootNode()),a.pa)break;}}function mc(a,b,c,d,e,f){for(var g=0;g<a.length;g++){var h=a[g],l=h.type,B=h.capture,k=h.once,G=h.passive;if(b===h.node&&c===l&&d===B&&e===k&&f===G)return g;}return-1;}function nc(a,b,c){if(b){var d,e,f;"object"===(typeof c==="undefined"?"undefined":_typeof(c))?(d=!!c.capture,e=!!c.once,f=!!c.passive):(d=!!c,f=e=!1);var g=c&&c.qa||this,h=b.aa;if(h){if(-1<mc(h,g,a,d,e,f))return;}else b.aa=[];h=function h(d){e&&this.removeEventListener(a,b,c);d.__target||oc(d);var f;g!==this&&(f=Object.getOwnPropertyDescriptor(d,"currentTarget"),Object.defineProperty(d,"currentTarget",{get:function get(){return g;},configurable:!0}));if(d.composed||-1<d.composedPath().indexOf(g))if(d.target===d.relatedTarget)d.eventPhase===Event.BUBBLING_PHASE&&d.stopImmediatePropagation();else if(d.eventPhase===Event.CAPTURING_PHASE||d.bubbles||d.target===g){var h="object"===(typeof b==="undefined"?"undefined":_typeof(b))&&b.handleEvent?b.handleEvent(d):b.call(g,d);g!==this&&(f?(Object.defineProperty(d,"currentTarget",f),f=null):delete d.currentTarget);return h;}};b.aa.push({node:this,type:a,capture:d,once:e,passive:f,Eb:h});Ya[a]?(this.B=this.B||{},this.B[a]=this.B[a]||{capture:[],bubble:[]},this.B[a][d?"capture":"bubble"].push(h)):(this instanceof Window?pc:qc).call(this,a,h,c);}}function rc(a,b,c){if(b){var d,e,f;"object"===(typeof c==="undefined"?"undefined":_typeof(c))?(d=!!c.capture,e=!!c.once,f=!!c.passive):(d=!!c,f=e=!1);var g=c&&c.qa||this,h=void 0,l;l=null;try{l=b.aa;}catch(B){}l&&(e=mc(l,g,a,d,e,f),-1<e&&(h=l.splice(e,1)[0].Eb,l.length||(b.aa=void 0)));(this instanceof Window?sc:tc).call(this,a,h||b,c);h&&Ya[a]&&this.B&&this.B[a]&&(a=this.B[a][d?"capture":"bubble"],h=a.indexOf(h),-1<h&&a.splice(h,1));}}function xd(){for(var a in Ya){window.addEventListener(a,function(a){a.__target||(oc(a),wd(a));},!0);}}function oc(a){a.__target=a.target;a.Ia=a.relatedTarget;if(y.X){var b=uc,c=Object.getPrototypeOf(a);if(!c.hasOwnProperty("__patchProto")){var d=Object.create(c);d.Gb=c;Ja(d,b);c.__patchProto=d;}a.__proto__=c.__patchProto;}else Ja(a,uc);}function fa(a,b){return{index:a,Z:[],da:b};}function yd(a,b,c,d){var e=0,f=0,g=0,h=0,l=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(g=0;g<l;g++){if(a[g]!==c[g])break a;}g=l;}if(b==a.length&&d==c.length){for(var h=a.length,k=c.length,A=0;A<l-g&&zd(a[--h],c[--k]);){A++;}h=A;}e+=g;f+=g;b-=h;d-=h;if(!(b-e||d-f))return[];if(e==b){for(b=fa(e,0);f<d;){b.Z.push(c[f++]);}return[b];}if(f==d)return[fa(e,b-e)];l=e;g=f;d=d-g+1;h=b-l+1;b=Array(d);for(k=0;k<d;k++){b[k]=Array(h),b[k][0]=k;}for(k=0;k<h;k++){b[0][k]=k;}for(k=1;k<d;k++){for(A=1;A<h;A++){if(a[l+A-1]===c[g+k-1])b[k][A]=b[k-1][A-1];else{var G=b[k-1][A]+1,m=b[k][A-1]+1;b[k][A]=G<m?G:m;}}}l=b.length-1;g=b[0].length-1;d=b[l][g];for(a=[];0<l||0<g;){l?g?(h=b[l-1][g-1],k=b[l-1][g],A=b[l][g-1],G=k<A?k<h?k:h:A<h?A:h,G==h?(h==d?a.push(0):(a.push(1),d=h),l--,g--):G==k?(a.push(3),l--,d=k):(a.push(2),g--,d=A)):(a.push(3),l--):(a.push(2),g--);}a.reverse();b=void 0;l=[];for(g=0;g<a.length;g++){switch(a[g]){case 0:b&&(l.push(b),b=void 0);e++;f++;break;case 1:b||(b=fa(e,0));b.da++;e++;b.Z.push(c[f]);f++;break;case 2:b||(b=fa(e,0));b.da++;e++;break;case 3:b||(b=fa(e,0)),b.Z.push(c[f]),f++;}}b&&l.push(b);return l;}function zd(a,b){return a===b;}function vc(a){gc(a);return a.__shady&&a.__shady.assignedSlot||null;}function J(a,b){for(var c=Object.getOwnPropertyNames(b),d=0;d<c.length;d++){var e=c[d],f=Object.getOwnPropertyDescriptor(b,e);f.value?a[e]=f.value:Object.defineProperty(a,e,f);}}function Ad(){var a=window.customElements&&window.customElements.nativeHTMLElement||HTMLElement;J(window.Node.prototype,Bd);J(window.Window.prototype,Cd);J(window.Text.prototype,Dd);J(window.DocumentFragment.prototype,Za);J(window.Element.prototype,wc);J(window.Document.prototype,xc);window.HTMLSlotElement&&J(window.HTMLSlotElement.prototype,yc);J(a.prototype,Ed);y.X&&(S(window.Node.prototype),S(window.Text.prototype),S(window.DocumentFragment.prototype),S(window.Element.prototype),S(a.prototype),S(window.Document.prototype),window.HTMLSlotElement&&S(window.HTMLSlotElement.prototype));}function zc(a){var b=Fd.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return!b&&a;}function m(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);){a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);}return!(!a||!(a.__CE_isImportDocument||a instanceof Document));}function $a(a,b){for(;b&&b!==a&&!b.nextSibling;){b=b.parentNode;}return b&&b!==a?b.nextSibling:null;}function Q(a,b,c){c=c?c:new Set();for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling){Q(d,b,c);}d=$a(a,e);continue;}else if("template"===f){d=$a(a,e);continue;}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling){Q(e,b,c);}}d=d.firstChild?d.firstChild:$a(a,d);}}function v(a,b,c){a[b]=c;}function ab(a){a=a.replace(N.rb,"").replace(N.port,"");var b=Ac,c=a,d=new za();d.start=0;d.end=c.length;for(var e=d,f=0,g=c.length;f<g;f++){if("{"===c[f]){e.rules||(e.rules=[]);var h=e,l=h.rules[h.rules.length-1]||null,e=new za();e.start=f+1;e.parent=h;e.previous=l;h.rules.push(e);}else"}"===c[f]&&(e.end=f+1,e=e.parent||d);}return b(d,a);}function Ac(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&((c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=Gd(c),c=c.replace(N.Ra," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=!c.indexOf("@"),a.atRule)?c.indexOf("@media")?c.match(N.xb)&&(a.type=I.na,a.keyframesName=a.selector.split(N.Ra).pop()):a.type=I.MEDIA_RULE:a.type=c.indexOf("--")?I.STYLE_RULE:I.Ea);if(c=a.rules)for(var d=0,e=c.length,f;d<e&&(f=c[d]);d++){Ac(f,b);}return a;}function Gd(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(a,c){a=c;for(c=6-a.length;c--;){a="0"+a;}return"\\"+a;});}function Bc(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var g=e.length,h;f<g&&(h=e[f]);f++){d=Bc(h,b,d);}}else b?b=a.cssText:(b=a.cssText,b=b.replace(N.Ma,"").replace(N.Qa,""),b=b.replace(N.yb,"").replace(N.Db,"")),(d=b.trim())&&(d="  "+d+"\n");}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c;}function Cc(a){w=a&&a.shimcssproperties?!1:t||!(navigator.userAgent.match("AppleWebKit/601")||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"));}function Y(a,b){if(!a)return"";"string"===typeof a&&(a=ab(a));b&&Z(a,b);return Bc(a,w);}function pa(a){!a.__cssRules&&a.textContent&&(a.__cssRules=ab(a.textContent));return a.__cssRules||null;}function Dc(a){return!!a.parent&&a.parent.type===I.na;}function Z(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===I.MEDIA_RULE){var g=a.selector.match(Hd);g&&(window.matchMedia(g[1]).matches||(e=!0));}f===I.STYLE_RULE?b(a):c&&f===I.na?c(a):f===I.Ea&&(e=!0);if((a=a.rules)&&!e)for(var e=0,f=a.length,h;e<f&&(h=a[e]);e++){Z(h,b,c,d);}}}function bb(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;Ec(e,c,d);return e;}function Ec(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);T?a.compareDocumentPosition(T)===Node.DOCUMENT_POSITION_PRECEDING&&(T=a):T=a;}function Fc(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");var d;a:{var e=0;d=c+3;for(var f=a.length;d<f;d++){if("("===a[d])e++;else if(")"===a[d]&&! --e)break a;}d=-1;}e=a.substring(c+4,d);c=a.substring(0,c);a=Fc(a.substring(d+1),b);d=e.indexOf(",");return-1===d?b(c,e.trim(),"",a):b(c,e.substring(0,d).trim(),e.substring(d+1).trim(),a);}function qa(a,b){t?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b);}function U(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return{is:b,$:c};}function Gc(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode(),g;g=e;var h=[];g.classList?h=Array.from(g.classList):g instanceof window.SVGElement&&g.hasAttribute("class")&&(h=g.getAttribute("class").split(/\s+/));g=h;h=g.indexOf(x.c);(g=-1<h?g[h+1]:"")&&f===e.ownerDocument?x.a(e,g,!0):f.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(f=f.host)&&(f=U(f).is,g!==f&&(g&&x.a(e,g,!0),x.a(e,f)));}}}}function Id(a){if(a=ra[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1;}function Hc(a){return a._applyShimCurrentVersion===a._applyShimNextVersion;}function Jd(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a.b||(a.b=!0,Kd.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a.b=!1;}));}function rb(a){requestAnimationFrame(function(){Ic?Ic(a):(cb||(cb=new Promise(function(a){db=a;}),"complete"===document.readyState?db():document.addEventListener("readystatechange",function(){"complete"===document.readyState&&db();})),cb.then(function(){a&&a();}));});}(function(){if(!function(){var a=document.createEvent("Event");a.initEvent("foo",!0,!0);a.preventDefault();return a.defaultPrevented;}()){var a=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(a.call(this),Object.defineProperty(this,"defaultPrevented",{get:function get(){return!0;},configurable:!0}));};}var b=/Trident/.test(navigator.userAgent);if(!window.CustomEvent||b&&"function"!==typeof window.CustomEvent)window.CustomEvent=function(a,b){b=b||{};var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c;},window.CustomEvent.prototype=window.Event.prototype;if(!window.Event||b&&"function"!==typeof window.Event){var c=window.Event;window.Event=function(a,b){b=b||{};var c=document.createEvent("Event");c.initEvent(a,!!b.bubbles,!!b.cancelable);return c;};if(c)for(var d in c){window.Event[d]=c[d];}window.Event.prototype=c.prototype;}if(!window.MouseEvent||b&&"function"!==typeof window.MouseEvent){b=window.MouseEvent;window.MouseEvent=function(a,b){b=b||{};var c=document.createEvent("MouseEvent");c.initMouseEvent(a,!!b.bubbles,!!b.cancelable,b.view||window,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget);return c;};if(b)for(d in b){window.MouseEvent[d]=b[d];}window.MouseEvent.prototype=b.prototype;}Array.from||(Array.from=function(a){return[].slice.call(a);});Object.assign||(Object.assign=function(a,b){for(var c=[].slice.call(arguments,1),d=0,e;d<c.length;d++){if(e=c[d])for(var f=a,k=e,m=Object.getOwnPropertyNames(k),n=0;n<m.length;n++){e=m[n],f[e]=k[e];}}return a;});})(window.WebComponents);(function(){function a(){}var b="undefined"===typeof HTMLTemplateElement;/Trident/.test(navigator.userAgent)&&function(){var a=Document.prototype.importNode;Document.prototype.importNode=function(){var b=a.apply(this,arguments);if(b.nodeType===Node.DOCUMENT_FRAGMENT_NODE){var c=this.createDocumentFragment();c.appendChild(b);return c;}return b;};}();var c=Node.prototype.cloneNode,d=Document.prototype.createElement,e=Document.prototype.importNode,f=function(){if(!b){var a=document.createElement("template"),c=document.createElement("template");c.content.appendChild(document.createElement("div"));a.content.appendChild(c);a=a.cloneNode(!0);return 0===a.content.childNodes.length||0===a.content.firstChild.content.childNodes.length||!(document.createDocumentFragment().cloneNode()instanceof DocumentFragment);}}();if(b){var g=function g(a){switch(a){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case"\xA0":return"&nbsp;";}},h=function h(b){Object.defineProperty(b,"innerHTML",{get:function get(){for(var a="",b=this.content.firstChild;b;b=b.nextSibling){a+=b.outerHTML||b.data.replace(q,g);}return a;},set:function set(b){l.body.innerHTML=b;for(a.b(l);this.content.firstChild;){this.content.removeChild(this.content.firstChild);}for(;l.body.firstChild;){this.content.appendChild(l.body.firstChild);}},configurable:!0});},l=document.implementation.createHTMLDocument("template"),k=!0,A=document.createElement("style");A.textContent="template{display:none;}";var m=document.head;m.insertBefore(A,m.firstElementChild);a.prototype=Object.create(HTMLElement.prototype);var n=!document.createElement("div").hasOwnProperty("innerHTML");a.O=function(b){if(!b.content){b.content=l.createDocumentFragment();for(var c;c=b.firstChild;){b.content.appendChild(c);}if(n)b.__proto__=a.prototype;else if(b.cloneNode=function(b){return a.a(this,b);},k)try{h(b);}catch(me){k=!1;}a.b(b.content);}};h(a.prototype);a.b=function(b){b=b.querySelectorAll("template");for(var c=0,d=b.length,e;c<d&&(e=b[c]);c++){a.O(e);}};document.addEventListener("DOMContentLoaded",function(){a.b(document);});Document.prototype.createElement=function(){var b=d.apply(this,arguments);"template"===b.localName&&a.O(b);return b;};var q=/[&\u00A0<>]/g;}if(b||f)a.a=function(a,b){var d=c.call(a,!1);this.O&&this.O(d);b&&(d.content.appendChild(c.call(a.content,!0)),this.ya(d.content,a.content));return d;},a.prototype.cloneNode=function(b){return a.a(this,b);},a.ya=function(a,b){if(b.querySelectorAll){b=b.querySelectorAll("template");a=a.querySelectorAll("template");for(var c=0,d=a.length,e,f;c<d;c++){f=b[c],e=a[c],this.O&&this.O(f),e.parentNode.replaceChild(f.cloneNode(!0),e);}}},Node.prototype.cloneNode=function(b){var d;if(this instanceof DocumentFragment){if(b)d=this.ownerDocument.importNode(this,!0);else return this.ownerDocument.createDocumentFragment();}else d=c.call(this,b);b&&a.ya(d,this);return d;},Document.prototype.importNode=function(b,c){if("template"===b.localName)return a.a(b,c);var d=e.call(this,b,c);c&&a.ya(d,b);return d;},f&&(window.HTMLTemplateElement.prototype.cloneNode=function(b){return a.a(this,b);});b&&(window.HTMLTemplateElement=a);})();!function(a,b){"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.Jb?define(b):a.ES6Promise=b();}(window,function(){function a(a,b){C[aa]=a;C[aa+1]=b;aa+=2;2===aa&&(E?E(g):N());}function b(){return function(){return process.Mb(g);};}function c(){return"undefined"!=typeof D?function(){D(g);}:f();}function d(){var a=0,b=new L(g),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2;};}function e(){var a=new MessageChannel();return a.port1.onmessage=g,function(){return a.port2.postMessage(0);};}function f(){var a=setTimeout;return function(){return a(g,1);};}function g(){for(var a=0;a<aa;a+=2){(0,C[a])(C[a+1]),C[a]=void 0,C[a+1]=void 0;}aa=0;}function h(){try{var a=require("vertx");return D=a.Ob||a.Nb,c();}catch(Jc){return f();}}function l(b,c){var d=arguments,e=this,f=new this.constructor(m);void 0===f[K]&&Kc(f);var g=e.m;return g?!function(){var b=d[g-1];a(function(){return ga(g,f,b,e.l);});}():v(e,f,b,c),f;}function k(a){if(a&&"object"==(typeof a==="undefined"?"undefined":_typeof(a))&&a.constructor===this)return a;var b=new this(m);return t(b,a),b;}function m(){}function n(a){try{return a.then;}catch(Jc){return P.error=Jc,P;}}function q(a,b,c,d){try{a.call(b,c,d);}catch(Nd){return Nd;}}function p(b,c,d){a(function(a){var b=!1,e=q(d,c,function(d){b||(b=!0,c!==d?t(a,d):r(a,d));},function(c){b||(b=!0,O(a,c));});!b&&e&&(b=!0,O(a,e));},b);}function u(a,b){b.m===M?r(a,b.l):b.m===J?O(a,b.l):v(b,void 0,function(b){return t(a,b);},function(b){return O(a,b);});}function x(a,b,c){b.constructor===a.constructor&&c===l&&b.constructor.resolve===k?u(a,b):c===P?(O(a,P.error),P.error=null):void 0===c?r(a,b):"function"==typeof c?p(a,b,c):r(a,b);}function t(a,b){a===b?O(a,new TypeError("You cannot resolve a promise with itself")):"function"==typeof b||"object"==(typeof b==="undefined"?"undefined":_typeof(b))&&null!==b?x(a,b,n(b)):r(a,b);}function w(a){a.Ka&&a.Ka(a.l);z(a);}function r(b,c){b.m===I&&(b.l=c,b.m=M,0!==b.W.length&&a(z,b));}function O(b,c){b.m===I&&(b.m=J,b.l=c,a(w,b));}function v(b,c,d,e){var f=b.W,g=f.length;b.Ka=null;f[g]=c;f[g+M]=d;f[g+J]=e;0===g&&b.m&&a(z,b);}function z(a){var b=a.W,c=a.m;if(0!==b.length){for(var d,e,f=a.l,g=0;g<b.length;g+=3){d=b[g],e=b[g+c],d?ga(c,d,e,f):e(f);}a.W.length=0;}}function H(){this.error=null;}function ga(a,b,c,d){var e="function"==typeof c,f=void 0,g=void 0,h=void 0,ga=void 0;if(e){var l;try{l=c(d);}catch(Od){l=(Q.error=Od,Q);}if(f=l,f===Q?(ga=!0,g=f.error,f.error=null):h=!0,b===f)return void O(b,new TypeError("A promises callback cannot return that same promise."));}else f=d,h=!0;b.m!==I||(e&&h?t(b,f):ga?O(b,g):a===M?r(b,f):a===J&&O(b,f));}function Pd(a,b){try{b(function(b){t(a,b);},function(b){O(a,b);});}catch(Ld){O(a,Ld);}}function Kc(a){a[K]=R++;a.m=void 0;a.l=void 0;a.W=[];}function ba(a,b){this.lb=a;this.I=new a(m);this.I[K]||Kc(this.I);Lc(b)?(this.kb=b,this.length=b.length,this.ba=b.length,this.l=Array(this.length),0===this.length?r(this.I,this.l):(this.length=this.length||0,this.jb(),0===this.ba&&r(this.I,this.l))):O(this.I,Error("Array Methods must be provided an Array"));}function F(a){this[K]=R++;this.l=this.m=void 0;this.W=[];if(m!==a){if("function"!=typeof a)throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(this instanceof F)Pd(this,a);else throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");}}var eb=void 0,Lc=eb=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a);},aa=0,D=void 0,E=void 0,y=(eb="undefined"!=typeof window?window:void 0)||{},L=y.MutationObserver||y.WebKitMutationObserver,y="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,C=Array(1E3),N=void 0,N="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?b():L?d():y?e():eb||"function"!=typeof require?f():h(),K=Math.random().toString(36).substring(16),I=void 0,M=1,J=2,P=new H(),Q=new H(),R=0;return ba.prototype.jb=function(){for(var a=this.length,b=this.kb,c=0;this.m===I&&c<a;c++){this.ib(b[c],c);}},ba.prototype.ib=function(a,b){var c=this.lb,d=c.resolve;d===k?(d=n(a),d===l&&a.m!==I?this.va(a.m,b,a.l):"function"!=typeof d?(this.ba--,this.l[b]=a):c===F?(c=new c(m),x(c,a,d),this.wa(c,b)):this.wa(new c(function(b){return b(a);}),b)):this.wa(d(a),b);},ba.prototype.va=function(a,b,c){var d=this.I;d.m===I&&(this.ba--,a===J?O(d,c):this.l[b]=c);0===this.ba&&r(d,this.l);},ba.prototype.wa=function(a,b){var c=this;v(a,void 0,function(a){return c.va(M,b,a);},function(a){return c.va(J,b,a);});},F.g=function(a){return new ba(this,a).I;},F.h=function(a){var b=this;return new b(Lc(a)?function(c,d){for(var e=a.length,f=0;f<e;f++){b.resolve(a[f]).then(c,d);}}:function(a,b){return b(new TypeError("You must pass an array to race."));});},F.resolve=k,F.i=function(a){var b=new this(m);return O(b,a),b;},F.f=function(a){E=a;},F.c=function(b){a=b;},F.b=a,F.prototype={constructor:F,then:l,"catch":function _catch(a){return this.then(null,a);}},F.a=function(){var a=void 0;if("undefined"!=typeof global)a=global;else if("undefined"!=typeof self)a=self;else try{a=Function("return this")();}catch(Md){throw Error("polyfill failed because global object is unavailable in this environment");}var b=a.Promise;if(b){var c=null;try{c=Object.prototype.toString.call(b.resolve());}catch(Md){}if("[object Promise]"===c&&!b.Kb)return;}a.Promise=F;},F.Promise=F,F.a(),F;});(function(a){function b(a,b){if("function"===typeof window.CustomEvent)return new CustomEvent(a,b);var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c;}function c(a){if(k)return a.ownerDocument!==document?a.ownerDocument:null;var b=a.__importDoc;if(!b&&a.parentNode){b=a.parentNode;if("function"===typeof b.closest)b=b.closest("link[rel=import]");else for(;!h(b)&&(b=b.parentNode);){}a.__importDoc=b;}return b;}function d(a){var b=document.querySelectorAll("link[rel=import]:not(import-dependency)"),c=b.length;if(c)for(var d=0,e=b.length,f;d<e&&(f=b[d]);d++){g(f,function(){--c||a();});}else a();}function e(a){function b(){"loading"!==document.readyState&&document.body&&(document.removeEventListener("readystatechange",b),a());}document.addEventListener("readystatechange",b);b();}function f(a){e(function(){return d(function(){return a&&a();});});}function g(a,b){if(a.__loaded)b&&b();else if("script"!==a.localName||a.src){var c=function c(d){a.removeEventListener(d.type,c);a.__loaded=!0;b&&b();};a.addEventListener("load",c);u&&"style"===a.localName||a.addEventListener("error",c);}else a.__loaded=!0,b&&b();}function h(a){return a.nodeType===Node.ELEMENT_NODE&&"link"===a.localName&&"import"===a.rel;}function l(){var a=this;this.a={};this.b=0;this.f=new MutationObserver(function(b){return a.o(b);});this.f.observe(document.head,{childList:!0,subtree:!0});this.c(document);}var k="import"in document.createElement("link"),m=null;!1==="currentScript"in document&&Object.defineProperty(document,"currentScript",{get:function get(){return m||("complete"!==document.readyState?document.scripts[document.scripts.length-1]:null);},configurable:!0});var n=/(^\/)|(^#)|(^[\w-\d]*:)/,q=/(url\()([^)]*)(\))/g,r=/(@import[\s]+(?!url\())([^;]*)(;)/g,t=/(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g,p={sb:function sb(a,b){a.href&&a.setAttribute("href",p.Da(a.getAttribute("href"),b));a.src&&a.setAttribute("src",p.Da(a.getAttribute("src"),b));if("style"===a.localName){var c=p.Ua(a.textContent,b,q);a.textContent=p.Ua(c,b,r);}},Ua:function Ua(a,b,c){return a.replace(c,function(a,c,d,e){a=d.replace(/["']/g,"");b&&(a=p.Va(a,b));return c+"'"+a+"'"+e;});},Da:function Da(a,b){return a&&n.test(a)?a:p.Va(a,b);},Va:function Va(a,b){if(void 0===p.ra){p.ra=!1;try{var c=new URL("b","http://a");c.pathname="c%20d";p.ra="http://a/c%20d"===c.href;}catch(ba){}}if(p.ra)return new URL(a,b).href;c=p.gb;c||(c=document.implementation.createHTMLDocument("temp"),p.gb=c,c.Ga=c.createElement("base"),c.head.appendChild(c.Ga),c.Fa=c.createElement("a"));c.Ga.href=b;c.Fa.href=a;return c.Fa.href||a;}},x={async:!0,load:function load(a,b,c){if(a){if(a.match(/^data:/)){a=a.split(",");var d=a[1],d=-1<a[0].indexOf(";base64")?atob(d):decodeURIComponent(d);b(d);}else{var e=new XMLHttpRequest();e.open("GET",a,x.async);e.onload=function(){var a=e.getResponseHeader("Location");a&&!a.indexOf("/")&&(a=(location.origin||location.protocol+"//"+location.host)+a);var d=e.response||e.responseText;304===e.status||!e.status||200<=e.status&&300>e.status?b(d,a):c(d);};e.send();}}else c("error: href must be specified");}},u=/Trident/.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent);l.prototype.c=function(a){a=a.querySelectorAll("link[rel=import]");for(var b=0,c=a.length;b<c;b++){this.h(a[b]);}};l.prototype.h=function(a){var b=this,c=a.href;if(void 0!==this.a[c]){var d=this.a[c];d&&d.__loaded&&(a.import=d,this.g(a));}else this.b++,this.a[c]="pending",x.load(c,function(a,d){a=b.s(a,d||c);b.a[c]=a;b.b--;b.c(a);b.i();},function(){b.a[c]=null;b.b--;b.i();});};l.prototype.s=function(a,b){if(!a)return document.createDocumentFragment();u&&(a=a.replace(t,function(a,b,c){return-1===a.indexOf("type=")?b+" type=import-disable "+c:a;}));var c=document.createElement("template");c.innerHTML=a;if(c.content)a=c.content;else for(a=document.createDocumentFragment();c.firstChild;){a.appendChild(c.firstChild);}if(c=a.querySelector("base"))b=p.Da(c.getAttribute("href"),b),c.removeAttribute("href");for(var c=a.querySelectorAll('link[rel=import], link[rel=stylesheet][href][type=import-disable],\n    style:not([type]), link[rel=stylesheet][href]:not([type]),\n    script:not([type]), script[type="application/javascript"],\n    script[type="text/javascript"]'),d=0,e=0,f=c.length,h;e<f&&(h=c[e]);e++){g(h),p.sb(h,b),h.setAttribute("import-dependency",""),"script"===h.localName&&!h.src&&h.textContent&&(h.setAttribute("src","data:text/javascript;charset=utf-8,"+encodeURIComponent(h.textContent+("\n//# sourceURL="+b+(d?"-"+d:"")+".js\n"))),h.textContent="",d++);}return a;};l.prototype.i=function(){var a=this;if(!this.b){this.f.disconnect();this.flatten(document);var b=!1,c=!1,d=function d(){c&&b&&(a.c(document),a.b||(a.f.observe(document.head,{childList:!0,subtree:!0}),a.j()));};this.A(function(){c=!0;d();});this.u(function(){b=!0;d();});}};l.prototype.flatten=function(a){a=a.querySelectorAll("link[rel=import]");for(var b=0,c=a.length,d;b<c&&(d=a[b]);b++){var e=this.a[d.href];(d.import=e)&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(this.a[d.href]=d,d.readyState="loading",d.import=d,this.flatten(e),d.appendChild(e));}};l.prototype.u=function(a){function b(e){if(e<d){var f=c[e],h=document.createElement("script");f.removeAttribute("import-dependency");for(var l=0,k=f.attributes.length;l<k;l++){h.setAttribute(f.attributes[l].name,f.attributes[l].value);}m=h;f.parentNode.replaceChild(h,f);g(h,function(){m=null;b(e+1);});}else a();}var c=document.querySelectorAll("script[import-dependency]"),d=c.length;b(0);};l.prototype.A=function(a){var b=document.querySelectorAll("style[import-dependency],\n    link[rel=stylesheet][import-dependency]"),d=b.length;if(d)for(var e=u&&!!document.querySelector("link[rel=stylesheet][href][type=import-disable]"),f={},h=0,l=b.length;h<l&&(f.w=b[h]);f={w:f.w},h++){if(g(f.w,function(b){return function(){b.w.removeAttribute("import-dependency");--d||a();};}(f)),e&&f.w.parentNode!==document.head){var k=document.createElement(f.w.localName);k.__appliedElement=f.w;k.setAttribute("type","import-placeholder");f.w.parentNode.insertBefore(k,f.w.nextSibling);for(k=c(f.w);k&&c(k);){k=c(k);}k.parentNode!==document.head&&(k=null);document.head.insertBefore(f.w,k);f.w.removeAttribute("type");}}else a();};l.prototype.j=function(){for(var a=document.querySelectorAll("link[rel=import]"),b=a.length-1,c;0<=b&&(c=a[b]);b--){this.g(c);}};l.prototype.g=function(a){a.__loaded||(a.__loaded=!0,a.import&&(a.import.readyState="complete"),a.dispatchEvent(b(a.import?"load":"error",{bubbles:!1,cancelable:!1,detail:void 0})));};l.prototype.o=function(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.addedNodes)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];e&&e.nodeType===Node.ELEMENT_NODE&&(h(e)?this.h(e):this.c(e));}}};if(k){for(var v=document.querySelectorAll("link[rel=import]"),z=0,C=v.length,y;z<C&&(y=v[z]);z++){y.import&&"loading"===y.import.readyState||(y.__loaded=!0);}v=function v(a){a=a.target;h(a)&&(a.__loaded=!0);};document.addEventListener("load",v,!0);document.addEventListener("error",v,!0);}else{var w=Object.getOwnPropertyDescriptor(Node.prototype,"baseURI");Object.defineProperty((!w||w.configurable?Node:Element).prototype,"baseURI",{get:function get(){var a=h(this)?this:c(this);return a?a.href:w&&w.get?w.get.call(this):(document.querySelector("base")||window.location).href;},configurable:!0,enumerable:!0});e(function(){return new l();});}f(function(){return document.dispatchEvent(b("HTMLImportsLoaded",{cancelable:!0,bubbles:!0,detail:void 0}));});a.useNative=k;a.whenReady=f;a.importForElement=c;})(window.HTMLImports=window.HTMLImports||{});(function(){window.WebComponents=window.WebComponents||{flags:{}};var a=document.querySelector('script[src*="webcomponents-lite.js"]'),b=/wc-(.+)/,c={};if(!c.noOpts){location.search.slice(1).split("&").forEach(function(a){a=a.split("=");var d;a[0]&&(d=a[0].match(b))&&(c[d[1]]=a[1]||!0);});if(a)for(var d=0,e;e=a.attributes[d];d++){"src"!==e.name&&(c[e.name]=e.value||!0);}c.log&&c.log.split?(a=c.log.split(","),c.log={},a.forEach(function(a){c.log[a]=!0;})):c.log={};}window.WebComponents.flags=c;if(a=c.shadydom)window.ShadyDOM=window.ShadyDOM||{},window.ShadyDOM.force=a;(a=c.register||c.ce)&&window.customElements&&(window.customElements.forcePolyfill=a);})();var y=window.ShadyDOM||{};y.ub=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var fb=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");y.X=!!(fb&&fb.configurable&&fb.get);y.Pa=y.force||!y.ub;var ca=Element.prototype,Mc=ca.matches||ca.matchesSelector||ca.mozMatchesSelector||ca.msMatchesSelector||ca.oMatchesSelector||ca.webkitMatchesSelector,Ma=document.createTextNode(""),Kb=0,La=[];new MutationObserver(function(){for(;La.length;){try{La.shift()();}catch(a){throw Ma.textContent=Kb++,a;}}}).observe(Ma,{characterData:!0});var ea=[],Na;na.list=ea;ma.prototype.Bb=function(){var a=this;this.a||(this.a=!0,Jb(function(){a.b();}));};ma.prototype.b=function(){if(this.a){this.a=!1;var a=this.takeRecords();a.length&&this.ea.forEach(function(b){b(a);});}};ma.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a;}return[];};var ic=Element.prototype.appendChild,Ua=Element.prototype.insertBefore,X=Element.prototype.removeChild,Nc=Element.prototype.setAttribute,Oc=Element.prototype.removeAttribute,gb=Element.prototype.cloneNode,Va=Document.prototype.importNode,qc=Element.prototype.addEventListener,tc=Element.prototype.removeEventListener,pc=Window.prototype.addEventListener,sc=Window.prototype.removeEventListener,hb=Element.prototype.dispatchEvent,Qd=Object.freeze({appendChild:ic,insertBefore:Ua,removeChild:X,setAttribute:Nc,removeAttribute:Oc,cloneNode:gb,importNode:Va,addEventListener:qc,removeEventListener:tc,Pb:pc,Qb:sc,dispatchEvent:hb}),sd=/[&\u00A0"]/g,vd=/[&\u00A0<>]/g,td=Nb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),ud=Nb("style script xmp iframe noembed noframes plaintext noscript".split(" ")),D=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),E=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1),Rd=Object.freeze({parentNode:R,firstChild:Ha,lastChild:Ia,previousSibling:Ob,nextSibling:Pb,childNodes:da,parentElement:Qb,firstElementChild:Rb,lastElementChild:Sb,previousElementSibling:Tb,nextElementSibling:Ub,children:Vb,innerHTML:Wb,textContent:Xb}),ib=Object.getOwnPropertyDescriptor(Element.prototype,"innerHTML")||Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML"),sa=document.implementation.createHTMLDocument("inert").createElement("div"),jb=Object.getOwnPropertyDescriptor(Document.prototype,"activeElement"),Yb={parentElement:{get:function get(){var a=this.__shady&&this.__shady.parentNode;a&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:Qb(this);},configurable:!0},parentNode:{get:function get(){var a=this.__shady&&this.__shady.parentNode;return void 0!==a?a:R(this);},configurable:!0},nextSibling:{get:function get(){var a=this.__shady&&this.__shady.nextSibling;return void 0!==a?a:Pb(this);},configurable:!0},previousSibling:{get:function get(){var a=this.__shady&&this.__shady.previousSibling;return void 0!==a?a:Ob(this);},configurable:!0},className:{get:function get(){return this.getAttribute("class")||"";},set:function set(a){this.setAttribute("class",a);},configurable:!0},nextElementSibling:{get:function get(){if(this.__shady&&void 0!==this.__shady.nextSibling){for(var a=this.nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;){a=a.nextSibling;}return a;}return Ub(this);},configurable:!0},previousElementSibling:{get:function get(){if(this.__shady&&void 0!==this.__shady.previousSibling){for(var a=this.previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;){a=a.previousSibling;}return a;}return Tb(this);},configurable:!0}},Pa={childNodes:{get:function get(){var a;if(this.__shady&&void 0!==this.__shady.firstChild){if(!this.__shady.childNodes){this.__shady.childNodes=[];for(var b=this.firstChild;b;b=b.nextSibling){this.__shady.childNodes.push(b);}}a=this.__shady.childNodes;}else a=da(this);a.item=function(b){return a[b];};return a;},configurable:!0},childElementCount:{get:function get(){return this.children.length;},configurable:!0},firstChild:{get:function get(){var a=this.__shady&&this.__shady.firstChild;return void 0!==a?a:Ha(this);},configurable:!0},lastChild:{get:function get(){var a=this.__shady&&this.__shady.lastChild;return void 0!==a?a:Ia(this);},configurable:!0},textContent:{get:function get(){if(this.__shady&&void 0!==this.__shady.firstChild){for(var a=[],b=0,c=this.childNodes,d;d=c[b];b++){d.nodeType!==Node.COMMENT_NODE&&a.push(d.textContent);}return a.join("");}return Xb(this);},set:function set(a){if(this.nodeType!==Node.ELEMENT_NODE)this.nodeValue=a;else{for(;this.firstChild;){this.removeChild(this.firstChild);}this.appendChild(document.createTextNode(a));}},configurable:!0},firstElementChild:{get:function get(){if(this.__shady&&void 0!==this.__shady.firstChild){for(var a=this.firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;){a=a.nextSibling;}return a;}return Rb(this);},configurable:!0},lastElementChild:{get:function get(){if(this.__shady&&void 0!==this.__shady.lastChild){for(var a=this.lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;){a=a.previousSibling;}return a;}return Sb(this);},configurable:!0},children:{get:function get(){var a;this.__shady&&void 0!==this.__shady.firstChild?a=Array.prototype.filter.call(this.childNodes,function(a){return a.nodeType===Node.ELEMENT_NODE;}):a=Vb(this);a.item=function(b){return a[b];};return a;},configurable:!0},innerHTML:{get:function get(){var a="template"===this.localName?this.content:this;return this.__shady&&void 0!==this.__shady.firstChild?Oa(a):Wb(a);},set:function set(a){for(var b="template"===this.localName?this.content:this;b.firstChild;){b.removeChild(b.firstChild);}for(ib&&ib.set?ib.set.call(sa,a):sa.innerHTML=a;sa.firstChild;){b.appendChild(sa.firstChild);}},configurable:!0}},Pc={shadowRoot:{get:function get(){return this.__shady&&this.__shady.root||null;},set:function set(a){this.__shady=this.__shady||{};this.__shady.root=a;},configurable:!0}},Qa={activeElement:{get:function get(){var a;a=jb&&jb.get?jb.get.call(document):y.X?void 0:document.activeElement;if(a&&a.nodeType){var b=!!C(this);if(this===document||b&&this.host!==a&&this.host.contains(a)){for(b=W(a);b&&b!==this;){a=b.host,b=W(a);}a=this===document?b?null:a:b===this?a:null;}else a=null;}else a=null;return a;},set:function set(){},configurable:!0}},Ib=y.X?function(){}:function(a){a.__shady&&a.__shady.fb||(a.__shady=a.__shady||{},a.__shady.fb=!0,M(a,Yb,!0));},Hb=y.X?function(){}:function(a){a.__shady&&a.__shady.cb||(a.__shady=a.__shady||{},a.__shady.cb=!0,M(a,Pa,!0),M(a,Pc,!0));},ta=null,Sd={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},uc={get composed(){!1!==this.isTrusted&&void 0===this.oa&&(this.oa=Sd[this.type]);return this.oa||!1;},composedPath:function composedPath(){this.Ha||(this.Ha=Wa(this.__target,this.composed));return this.Ha;},get target(){return kc(this.currentTarget,this.composedPath());},get relatedTarget(){if(!this.Ia)return null;this.Ja||(this.Ja=Wa(this.Ia,!0));return kc(this.currentTarget,this.Ja);},stopPropagation:function stopPropagation(){Event.prototype.stopPropagation.call(this);this.pa=!0;},stopImmediatePropagation:function stopImmediatePropagation(){Event.prototype.stopImmediatePropagation.call(this);this.pa=this.bb=!0;}},Ya={focus:!0,blur:!0},Td=Xa(window.Event),Ud=Xa(window.CustomEvent),Vd=Xa(window.MouseEvent),Wd="function"===typeof Event?Event:function(a,b){b=b||{};var c=document.createEvent("Event");c.initEvent(a,!!b.bubbles,!!b.cancelable);return c;};H.prototype.tb=function(){return this.root.querySelectorAll("slot");};H.prototype.Aa=function(a){return a.localName&&"slot"==a.localName;};H.prototype.xa=function(){return this.root.za()?this.g(this.c()):[];};H.prototype.c=function(){for(var a=[],b=0,c=this.root.host.firstChild;c;c=c.nextSibling){a[b++]=c;}return a;};H.prototype.g=function(a){for(var b=[],c=this.root.ta(),d=0,e=c.length,f;d<e&&(f=c[d]);d++){this.f(f,a);var g=f.parentNode;(g=g&&g.__shady&&g.__shady.root)&&g.za()&&b.push(g);}for(c=0;c<a.length;c++){if(d=a[c])d.__shady=d.__shady||{},d.__shady.assignedSlot=void 0,(e=R(d))&&X.call(e,d);}return b;};H.prototype.f=function(a,b){var c=a.__shady.assignedNodes;c&&this.La(a,!0);a.__shady.assignedNodes=[];for(var d=!1,e=!1,f=0,g=b.length,h;f<g;f++){(h=b[f])&&this.h(h,a)&&(h.__shady.ua!=a&&(d=!0),this.b(h,a),b[f]=void 0,e=!0);}if(!e)for(b=a.childNodes,e=0;e<b.length;e++){h=b[e],h.__shady.ua!=a&&(d=!0),this.b(h,a);}if(c){for(h=0;h<c.length;h++){c[h].__shady.ua=null;}a.__shady.assignedNodes.length<c.length&&(d=!0);}this.i(a);d&&this.a(a);};H.prototype.La=function(a,b){var c=a.__shady.assignedNodes;if(c)for(var d=0;d<c.length;d++){var e=c[d];b&&(e.__shady.ua=e.__shady.assignedSlot);e.__shady.assignedSlot===a&&(e.__shady.assignedSlot=null);}};H.prototype.h=function(a,b){b=(b=b.getAttribute("name"))?b.trim():"";a=(a=a.getAttribute&&a.getAttribute("slot"))?a.trim():"";return a==b;};H.prototype.b=function(a,b){b.__shady.assignedNodes.push(a);a.__shady.assignedSlot=b;};H.prototype.i=function(a){var b=a.__shady.assignedNodes;a.__shady.P=[];for(var c=0,d;c<b.length&&(d=b[c]);c++){if(this.Aa(d)){var e=d.__shady.P;if(e)for(var f=0;f<e.length;f++){a.__shady.P.push(e[f]);}}else a.__shady.P.push(b[c]);}};H.prototype.a=function(a){hb.call(a,new Wd("slotchange"));a.__shady.assignedSlot&&this.a(a.__shady.assignedSlot);};H.prototype.ga=function(a){return!a.__shady.assignedSlot;};var Gb={};q.prototype=Object.create(DocumentFragment.prototype);q.prototype.i=function(a){this.eb="ShadyRoot";V(a);V(this);a.shadowRoot=this;this.host=a;this.sa=this.N=!1;this.C=new H(this);this.update();};q.prototype.update=function(){var a=this;this.N||(this.N=!0,Lb(function(){return a.Ta();}));};q.prototype.h=function(){for(var a=this,b=this;b;){b.N&&(a=b),b=b.nb();}return a;};q.prototype.nb=function(){var a=this.host.getRootNode();if(C(a))for(var b=this.host.childNodes,c=0,d;c<b.length;c++){if(d=b[c],this.C.Aa(d))return a;}};q.prototype.Ta=function(){this.N&&this.h()._render();};q.prototype._render=function(){this.sa=this.N=!1;this.ca||this.f();this.ca=!1;this.xa();this.j();};q.prototype.xa=function(){for(var a=this.C.xa(),b=0;b<a.length;b++){a[b]._render();}};q.prototype.f=function(){var a=this.a;if(a)for(var b=0,c;b<a.length;b++){c=a[b],c.getRootNode()!==this&&this.C.La(c);}a=this.a=this.C.tb();for(b=0;b<a.length;b++){c=a[b],c.__shady=c.__shady||{},V(c),V(c.parentNode);}};q.prototype.j=function(){this.g();};q.prototype.g=function(){this.c(this.host,this.b(this.host));for(var a=this.ta(),b=0,c=a.length,d,e;b<c&&(d=a[b]);b++){e=d.parentNode,e!==this.host&&e!==this&&this.c(e,this.b(e));}};q.prototype.b=function(a){var b=[];a=(a.__shady&&a.__shady.root||a).childNodes;for(var c=0;c<a.length;c++){var d=a[c];if(this.C.Aa(d))for(var e=d.__shady.P||(d.__shady.P=[]),f=0;f<e.length;f++){var g=e[f];this.ga(d,g)&&b.push(g);}else b.push(d);}return b;};q.prototype.ga=function(a,b){return this.C.ga(a,b);};q.prototype.c=function(a,b){for(var c=da(a),d=yd(b,b.length,c,c.length),e=0,f=0,g;e<d.length&&(g=d[e]);e++){for(var h=0,k;h<g.Z.length&&(k=g.Z[h]);h++){R(k)===a&&X.call(a,k),c.splice(g.index+f,1);}f-=g.da;}for(e=0;e<d.length&&(g=d[e]);e++){for(f=c[g.index],h=g.index;h<g.index+g.da;h++){k=b[h],Ua.call(a,k,f),c.splice(h,0,k);}}};q.prototype.za=function(){return!(!this.a||!this.a.length);};q.prototype.ta=function(){this.a||this.f();return this.a;};q.prototype.addEventListener=function(a,b,c){"object"!==(typeof c==="undefined"?"undefined":_typeof(c))&&(c={capture:!!c});c.qa=this;this.host.addEventListener(a,b,c);};q.prototype.removeEventListener=function(a,b,c){"object"!==(typeof c==="undefined"?"undefined":_typeof(c))&&(c={capture:!!c});c.qa=this;this.host.removeEventListener(a,b,c);};q.prototype.getElementById=function(a){return this.querySelector("#"+a);};(function(a){M(a,Pa,!0);M(a,Qa,!0);})(q.prototype);var Cd={addEventListener:nc.bind(window),removeEventListener:rc.bind(window)},Bd={addEventListener:nc,removeEventListener:rc,appendChild:function appendChild(a){return hc(this,a);},insertBefore:function insertBefore(a,b){return hc(this,a,b);},removeChild:function removeChild(a){if(a.parentNode!==this)throw Error("The node to be removed is not a child of this node: "+a);if(!$b(a)){var b=C(this)?this.host:this,c=R(a);b===c&&X.call(b,a);}Sa(this,null,a);return a;},replaceChild:function replaceChild(a,b){this.insertBefore(a,b);this.removeChild(b);return a;},cloneNode:function cloneNode(a){var b;if("template"==this.localName)b=gb.call(this,a);else if(b=gb.call(this,!1),a){a=this.childNodes;for(var c=0,d;c<a.length;c++){d=a[c].cloneNode(!0),b.appendChild(d);}}return b;},getRootNode:function getRootNode(){return Ta(this);},get isConnected(){var a=this.ownerDocument;if(a&&a.contains&&a.contains(this)||(a=a.documentElement)&&a.contains&&a.contains(this))return!0;for(a=this;a&&!(a instanceof Document);){a=a.parentNode||(a instanceof q?a.host:void 0);}return!!(a&&a instanceof Document);},dispatchEvent:function dispatchEvent(a){na();return hb.call(this,a);}},Dd={get assignedSlot(){return vc(this);}},Za={querySelector:function querySelector(a){return ec(this,function(b){return Mc.call(b,a);},function(a){return!!a;})[0]||null;},querySelectorAll:function querySelectorAll(a){return ec(this,function(b){return Mc.call(b,a);});}},yc={assignedNodes:function assignedNodes(a){if("slot"===this.localName)return gc(this),this.__shady?(a&&a.flatten?this.__shady.P:this.__shady.assignedNodes)||[]:[];}},wc=Ka({setAttribute:function setAttribute(a,b){ta||(ta=window.ShadyCSS&&window.ShadyCSS.ScopingShim);ta&&"class"===a?ta.setElementClass(this,b):(Nc.call(this,a,b),dc(this,a));},removeAttribute:function removeAttribute(a){Oc.call(this,a);dc(this,a);},attachShadow:function attachShadow(a){if(!this)throw"Must provide a host.";if(!a)throw"Not enough arguments.";return new q(Gb,this);},get slot(){return this.getAttribute("slot");},set slot(a){this.setAttribute("slot",a);},get assignedSlot(){return vc(this);}},Za,yc);Object.defineProperties(wc,Pc);var xc=Ka({importNode:function importNode(a,b){return jc(a,b);},getElementById:function getElementById(a){return this.querySelector("#"+a);}},Za);Object.defineProperties(xc,{_activeElement:Qa.activeElement});var Xd=HTMLElement.prototype.blur,Ed=Ka({blur:function blur(){var a=this.shadowRoot;(a=a&&a.activeElement)?a.blur():Xd.call(this);}});y.Pa&&(window.ShadyDOM={inUse:y.Pa,patch:function patch(a){return a;},isShadyRoot:C,enqueue:Lb,flush:na,settings:y,filterMutations:rd,observeChildren:pd,unobserveChildren:od,nativeMethods:Qd,nativeTree:Rd},window.Event=Td,window.CustomEvent=Ud,window.MouseEvent=Vd,xd(),Ad(),window.ShadowRoot=q);var Fd=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));z.prototype.L=function(a,b){this.s.set(a,b);this.o.set(b.constructor,b);};z.prototype.f=function(a){return this.s.get(a);};z.prototype.K=function(a){return this.o.get(a);};z.prototype.u=function(a){this.h=!0;this.i.push(a);};z.prototype.j=function(a){var b=this;this.h&&Q(a,function(a){return b.g(a);});};z.prototype.g=function(a){if(this.h&&!a.__CE_patched){a.__CE_patched=!0;for(var b=0;b<this.i.length;b++){this.i[b](a);}}};z.prototype.b=function(a){var b=[];Q(a,function(a){return b.push(a);});for(a=0;a<b.length;a++){var c=b[a];1===c.__CE_state?this.connectedCallback(c):this.A(c);}};z.prototype.a=function(a){var b=[];Q(a,function(a){return b.push(a);});for(a=0;a<b.length;a++){var c=b[a];1===c.__CE_state&&this.disconnectedCallback(c);}};z.prototype.c=function(a,b){b=b?b:new Set();var c=this,d=[];Q(a,function(a){if("link"===a.localName&&"import"===a.getAttribute("rel")){var e=a.import;e instanceof Node&&"complete"===e.readyState?(e.__CE_isImportDocument=!0,e.__CE_hasRegistry=!0):a.addEventListener("load",function(){var d=a.import;d.__CE_documentLoadHandled||(d.__CE_documentLoadHandled=!0,d.__CE_isImportDocument=!0,d.__CE_hasRegistry=!0,b.delete(d),c.c(d,b));});}else d.push(a);},b);if(this.h)for(a=0;a<d.length;a++){this.g(d[a]);}for(a=0;a<d.length;a++){this.A(d[a]);}};z.prototype.A=function(a){if(void 0===a.__CE_state){var b=this.f(a.localName);if(b){b.constructionStack.push(a);var c=b.constructor;try{try{if(new c()!==a)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{b.constructionStack.pop();}}catch(f){throw a.__CE_state=2,f;}a.__CE_state=1;a.__CE_definition=b;if(b.attributeChangedCallback)for(b=b.observedAttributes,c=0;c<b.length;c++){var d=b[c],e=a.getAttribute(d);null!==e&&this.attributeChangedCallback(a,d,null,e,null);}m(a)&&this.connectedCallback(a);}}};z.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a);};z.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&b.disconnectedCallback.call(a);};z.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,c,d,e);};Ga.prototype.c=function(){this.M&&this.M.disconnect();};Ga.prototype.f=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||this.c();for(b=0;b<a.length;b++){for(var c=a[b].addedNodes,d=0;d<c.length;d++){this.b.c(c[d]);}}};Fb.prototype.resolve=function(a){if(this.a)throw Error("Already resolved.");this.a=a;this.b&&this.b(a);};r.prototype.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!zc(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.a.f(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.f)throw Error("A custom element is already being defined.");this.f=!0;var d,e,f,g,h;try{var k=function k(a){var b=m[a];if(void 0!==b&&!(b instanceof Function))throw Error("The '"+a+"' callback must be a function.");return b;},m=b.prototype;if(!(m instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");d=k("connectedCallback");e=k("disconnectedCallback");f=k("adoptedCallback");g=k("attributeChangedCallback");h=b.observedAttributes||[];}catch(A){return;}finally{this.f=!1;}this.a.L(a,{localName:a,constructor:b,connectedCallback:d,disconnectedCallback:e,adoptedCallback:f,attributeChangedCallback:g,observedAttributes:h,constructionStack:[]});this.c.push(a);this.b||(this.b=!0,this.g(function(){return c.j();}));};r.prototype.j=function(){if(!1!==this.b)for(this.b=!1,this.a.c(document);0<this.c.length;){var a=this.c.shift();(a=this.h.get(a))&&a.resolve(void 0);}};r.prototype.get=function(a){if(a=this.a.f(a))return a.constructor;};r.prototype.whenDefined=function(a){if(!zc(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.h.get(a);if(b)return b.c;b=new Fb();this.h.set(a,b);this.a.f(a)&&-1===this.c.indexOf(a)&&b.resolve(void 0);return b.c;};r.prototype.o=function(a){this.i.c();var b=this.g;this.g=function(c){return a(function(){return b(c);});};};window.CustomElementRegistry=r;r.prototype.define=r.prototype.define;r.prototype.get=r.prototype.get;r.prototype.whenDefined=r.prototype.whenDefined;r.prototype.polyfillWrapFlushCallback=r.prototype.o;var Ca=window.Document.prototype.createElement,jd=window.Document.prototype.createElementNS,id=window.Document.prototype.importNode,kd=window.Document.prototype.prepend,ld=window.Document.prototype.append,ub=window.Node.prototype.cloneNode,ka=window.Node.prototype.appendChild,Cb=window.Node.prototype.insertBefore,Da=window.Node.prototype.removeChild,Db=window.Node.prototype.replaceChild,Fa=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),tb=window.Element.prototype.attachShadow,Aa=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Ea=window.Element.prototype.getAttribute,vb=window.Element.prototype.setAttribute,xb=window.Element.prototype.removeAttribute,la=window.Element.prototype.getAttributeNS,wb=window.Element.prototype.setAttributeNS,yb=window.Element.prototype.removeAttributeNS,Ab=window.Element.prototype.insertAdjacentElement,$c=window.Element.prototype.prepend,ad=window.Element.prototype.append,cd=window.Element.prototype.before,dd=window.Element.prototype.after,ed=window.Element.prototype.replaceWith,fd=window.Element.prototype.remove,nd=window.HTMLElement,Ba=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),zb=window.HTMLElement.prototype.insertAdjacentElement,Eb=new function(){}(),ua=window.customElements;if(!ua||ua.forcePolyfill||"function"!=typeof ua.define||"function"!=typeof ua.get){var ha=new z();md(ha);hd(ha);gd(ha);Zc(ha);document.__CE_hasRegistry=!0;var Yd=new r(ha);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:Yd});}var I={STYLE_RULE:1,na:7,MEDIA_RULE:4,Ea:1E3},N={rb:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,Ma:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,Qa:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,yb:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,Db:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,xb:/^@[^\s]*keyframes/,Ra:/\s+/g},t=!(window.ShadyDOM&&window.ShadyDOM.inUse),w;window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?w=window.ShadyCSS.nativeCss:window.ShadyCSS?(Cc(window.ShadyCSS),window.ShadyCSS=void 0):Cc(window.WebComponents&&window.WebComponents.flags);var va=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};{])+)|\{([^\}]*)\}(?:(?=[;\s}])|$))/gi,wa=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Zd=/(--[\w-]+)\s*([:,;)]|$)/gi,$d=/(animation\s*:)|(animation-name\s*:)/,Hd=/@media[^(]*(\([^)]*\))/,ae=/\{[^}]*\}/g,T=null;p.prototype.a=function(a,b,c){a.__styleScoped?a.__styleScoped=null:this.i(a,b||"",c);};p.prototype.i=function(a,b,c){a.nodeType===Node.ELEMENT_NODE&&this.A(a,b,c);if(a="template"===a.localName?(a.content||a.Hb).childNodes:a.children||a.childNodes)for(var d=0;d<a.length;d++){this.i(a[d],b,c);}};p.prototype.A=function(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute(be);c?d&&(b=d.replace("style-scope","").replace(b,""),qa(a,b)):qa(a,(d?d+" ":"")+"style-scope "+b);}};p.prototype.b=function(a,b,c){var d=a.__cssBuild;t||"shady"===d?b=Y(b,c):(a=U(a),b=this.T(b,a.is,a.$,c)+"\n\n");return b.trim();};p.prototype.T=function(a,b,c,d){var e=this.f(b,c);b=this.h(b);var f=this;return Y(a,function(a){a.c||(f.V(a,b,e),a.c=!0);d&&d(a,b,e);});};p.prototype.h=function(a){return a?ce+a:"";};p.prototype.f=function(a,b){return b?"[is="+a+"]":a;};p.prototype.V=function(a,b,c){this.j(a,this.g,b,c);};p.prototype.j=function(a,b,c,d){a.selector=a.D=this.o(a,b,c,d);};p.prototype.o=function(a,b,c,d){var e=a.selector.split(Qc);if(!Dc(a)){a=0;for(var f=e.length,g;a<f&&(g=e[a]);a++){e[a]=b.call(this,g,c,d);}}return e.join(Qc);};p.prototype.g=function(a,b,c){var d=this,e=!1;a=a.trim();a=a.replace(de,function(a,b,c){return":"+b+"("+c.replace(/\s/g,"")+")";});a=a.replace(ee,kb+" $1");return a=a.replace(fe,function(a,g,h){e||(a=d.K(h,g,b,c),e=e||a.stop,g=a.qb,h=a.value);return g+h;});};p.prototype.K=function(a,b,c,d){var e=a.indexOf(lb);0<=a.indexOf(kb)?a=this.S(a,d):0!==e&&(a=c?this.s(a,c):a);c=!1;0<=e&&(b="",c=!0);var f;c&&(f=!0,c&&(a=a.replace(ge,function(a,b){return" > "+b;})));a=a.replace(he,function(a,b,c){return'[dir="'+c+'"] '+b+", "+b+'[dir="'+c+'"]';});return{value:a,qb:b,stop:f};};p.prototype.s=function(a,b){a=a.split(Rc);a[0]+=b;return a.join(Rc);};p.prototype.S=function(a,b){var c=a.match(Sc);return(c=c&&c[2].trim()||"")?c[0].match(Tc)?a.replace(Sc,function(a,c,f){return b+f;}):c.split(Tc)[0]===b?c:ie:a.replace(kb,b);};p.prototype.U=function(a){a.selector=a.parsedSelector;this.u(a);this.j(a,this.L);};p.prototype.u=function(a){a.selector===je&&(a.selector="html");};p.prototype.L=function(a){return a.match(lb)?this.g(a,Uc):this.s(a.trim(),Uc);};qb.Object.defineProperties(p.prototype,{c:{configurable:!0,enumerable:!0,get:function get(){return"style-scope";}}});var de=/:(nth[-\w]+)\(([^)]+)\)/,Uc=":not(.style-scope)",Qc=",",fe=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=\[])+)/g,Tc=/[[.:#*]/,kb=":host",je=":root",lb="::slotted",ee=new RegExp("^("+lb+")"),Sc=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,ge=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,he=/(.*):dir\((?:(ltr|rtl))\)/,ce=".",Rc=":",be="class",ie="should_not_match",x=new p();u.get=function(a){return a?a.__styleInfo:null;};u.set=function(a,b){return a.__styleInfo=b;};u.prototype.c=function(){return this.H;};u.prototype._getStyleRules=u.prototype.c;var Vc=function(a){return a.matches||a.matchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector||a.webkitMatchesSelector;}(window.Element.prototype),ke=navigator.userAgent.match("Trident");n.prototype.V=function(a){var b=this,c={},d=[],e=0;Z(a,function(a){b.c(a);a.index=e++;b.U(a.v.cssText,c);},function(a){d.push(a);});a.b=d;a=[];for(var f in c){a.push(f);}return a;};n.prototype.c=function(a){if(!a.v){var b={},c={};this.b(a,c)&&(b.G=c,a.rules=null);b.cssText=this.T(a);a.v=b;}};n.prototype.b=function(a,b){var c=a.v;if(c){if(c.G)return Object.assign(b,c.G),!0;}else{for(var c=a.parsedCssText,d;a=va.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0;}return d;}};n.prototype.T=function(a){return this.S(a.parsedCssText);};n.prototype.S=function(a){return a.replace(ae,"").replace(va,"");};n.prototype.U=function(a,b){for(var c;c=Zd.exec(a);){var d=c[1];":"!==c[2]&&(b[d]=!0);}};n.prototype.ka=function(a){for(var b=Object.getOwnPropertyNames(a),c=0,d;c<b.length;c++){d=b[c],a[d]=this.a(a[d],a);}};n.prototype.a=function(a,b){if(a)if(0<=a.indexOf(";"))a=this.f(a,b);else{var c=this;a=Fc(a,function(a,e,f,g){if(!e)return a+g;(e=c.a(b[e],b))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=c.a(b[f]||f,b)||f;return a+(e||"")+g;});}return a&&a.trim()||"";};n.prototype.f=function(a,b){a=a.split(";");for(var c=0,d,e;c<a.length;c++){if(d=a[c]){wa.lastIndex=0;if(e=wa.exec(d))d=this.a(b[e[1]],b);else if(e=d.indexOf(":"),-1!==e){var f=d.substring(e),f=f.trim(),f=this.a(f,b)||f;d=d.substring(0,e)+f;}a[c]=d&&d.lastIndexOf(";")===d.length-1?d.slice(0,-1):d||"";}}return a.join(";");};n.prototype.L=function(a,b){var c="";a.v||this.c(a);a.v.cssText&&(c=this.f(a.v.cssText,b));a.cssText=c;};n.prototype.K=function(a,b){var c=a.cssText,d=a.cssText;null==a.Oa&&(a.Oa=$d.test(c));if(a.Oa)if(null==a.ha){a.ha=[];for(var e in b){d=b[e],d=d(c),c!==d&&(c=d,a.ha.push(e));}}else{for(e=0;e<a.ha.length;++e){d=b[a.ha[e]],c=d(c);}d=c;}a.cssText=d;};n.prototype.ja=function(a,b){var c={},d=this,e=[];Z(a,function(a){a.v||d.c(a);var f=a.D||a.parsedSelector;b&&a.v.G&&f&&Vc.call(b,f)&&(d.b(a,c),a=a.index,f=parseInt(a/32,10),e[f]=(e[f]||0)|1<<a%32);},null,!0);return{G:c,key:e};};n.prototype.ma=function(a,b,c,d){b.v||this.c(b);if(b.v.G){var e=U(a);a=e.is;var e=e.$,e=a?x.f(a,e):"html",f=b.parsedSelector,g=":host > *"===f||"html"===f,h=0===f.indexOf(":host")&&!g;"shady"===c&&(g=f===e+" > *."+e||-1!==f.indexOf("html"),h=!g&&0===f.indexOf(e));"shadow"===c&&(g=":host > *"===f||"html"===f,h=h&&!g);if(g||h)c=e,h&&(t&&!b.D&&(b.D=x.o(b,x.g,x.h(a),e)),c=b.D||e),d({Cb:c,wb:h,Lb:g});}};n.prototype.ia=function(a,b){var c={},d={},e=this,f=b&&b.__cssBuild;Z(b,function(b){e.ma(a,b,f,function(f){Vc.call(a.Ib||a,f.Cb)&&(f.wb?e.b(b,c):e.b(b,d));});},null,!0);return{Ab:d,vb:c};};n.prototype.la=function(a,b,c){var d=this,e=U(a),f=x.f(e.is,e.$),g=new RegExp("(?:^|[^.#[:])"+(a.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])"),e=u.get(a).H,h=this.h(e,c);return x.b(a,e,function(a){d.L(a,b);t||Dc(a)||!a.cssText||(d.K(a,h),d.o(a,g,f,c));});};n.prototype.h=function(a,b){a=a.b;var c={};if(!t&&a)for(var d=0,e=a[d];d<a.length;e=a[++d]){this.j(e,b),c[e.keyframesName]=this.i(e);}return c;};n.prototype.i=function(a){return function(b){return b.replace(a.f,a.a);};};n.prototype.j=function(a,b){a.f=new RegExp(a.keyframesName,"g");a.a=a.keyframesName+"-"+b;a.D=a.D||a.selector;a.selector=a.D.replace(a.keyframesName,a.a);};n.prototype.o=function(a,b,c,d){a.D=a.D||a.selector;d="."+d;for(var e=a.D.split(","),f=0,g=e.length,h;f<g&&(h=e[f]);f++){e[f]=h.match(b)?h.replace(c,d):d+" "+h;}a.selector=e.join(",");};n.prototype.u=function(a,b,c){var d=a.getAttribute("class")||"",e=d;c&&(e=d.replace(new RegExp("\\s*x-scope\\s*"+c+"\\s*","g")," "));e+=(e?" ":"")+"x-scope "+b;d!==e&&qa(a,e);};n.prototype.A=function(a,b,c,d){b=d?d.textContent||"":this.la(a,b,c);var e=u.get(a),f=e.a;f&&!t&&f!==d&&(f._useCount--,0>=f._useCount&&f.parentNode&&f.parentNode.removeChild(f));t?e.a?(e.a.textContent=b,d=e.a):b&&(d=bb(b,c,a.shadowRoot,e.b)):d?d.parentNode||(ke&&-1<b.indexOf("@media")&&(d.textContent=b),Ec(d,null,e.b)):b&&(d=bb(b,c,null,e.b));d&&(d._useCount=d._useCount||0,e.a!=d&&d._useCount++,e.a=d);return d;};n.prototype.s=function(a,b){var c=pa(a),d=this;a.textContent=Y(c,function(a){var c=a.cssText=a.parsedCssText;a.v&&a.v.cssText&&(c=c.replace(N.Ma,"").replace(N.Qa,""),a.cssText=d.f(c,b));});};qb.Object.defineProperties(n.prototype,{g:{configurable:!0,enumerable:!0,get:function get(){return"x-scope";}}});var P=new n(),mb={},xa=window.customElements;if(xa&&!t){var le=xa.define;xa.define=function(a,b,c){var d=document.createComment(" Shady DOM styles for "+a+" "),e=document.head;e.insertBefore(d,(T?T.nextSibling:null)||e.firstChild);T=d;mb[a]=d;return le.call(xa,a,b,c);};}ja.prototype.a=function(a,b,c){for(var d=0;d<c.length;d++){var e=c[d];if(a.G[e]!==b[e])return!1;}return!0;};ja.prototype.b=function(a,b,c,d){var e=this.cache[a]||[];e.push({G:b,styleElement:c,F:d});e.length>this.c&&e.shift();this.cache[a]=e;};ja.prototype.fetch=function(a,b,c){if(a=this.cache[a])for(var d=a.length-1;0<=d;d--){var e=a[d];if(this.a(e,b,c))return e;}};if(!t){var Wc=new MutationObserver(Gc),Xc=function Xc(a){Wc.observe(a,{childList:!0,subtree:!0});};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)Xc(document);else{var nb=function nb(){Xc(document.body);};window.HTMLImports?window.HTMLImports.whenReady(nb):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function a(){nb();document.removeEventListener("readystatechange",a);};document.addEventListener("readystatechange",a);}else nb();});}sb=function sb(){Gc(Wc.takeRecords());};}var ra={},Kd=Promise.resolve(),cb=null,Ic=window.HTMLImports&&window.HTMLImports.whenReady||null,db,ya=null,ia=null;L.prototype.Na=function(){!this.enqueued&&ia&&(this.enqueued=!0,rb(ia));};L.prototype.b=function(a){a.__seenByShadyCSS||(a.__seenByShadyCSS=!0,this.customStyles.push(a),this.Na());};L.prototype.a=function(a){return a.__shadyCSSCachedStyle?a.__shadyCSSCachedStyle:a.getStyle?a.getStyle():a;};L.prototype.c=function(){for(var a=this.customStyles,b=0;b<a.length;b++){var c=a[b];if(!c.__shadyCSSCachedStyle){var d=this.a(c);if(d){var e=d.__appliedElement;if(e)for(var f=0;f<d.attributes.length;f++){var g=d.attributes[f];e.setAttribute(g.name,g.value);}d=e||d;ya&&ya(d);c.__shadyCSSCachedStyle=d;}}}return a;};L.prototype.addCustomStyle=L.prototype.b;L.prototype.getStyleForCustomStyle=L.prototype.a;L.prototype.processStyles=L.prototype.c;Object.defineProperties(L.prototype,{transformCallback:{get:function get(){return ya;},set:function set(a){ya=a;}},validateCallback:{get:function get(){return ia;},set:function set(a){var b=!1;ia||(b=!0);ia=a;b&&this.Na();}}});var Yc=new ja();k.prototype.K=function(){sb();};k.prototype.ia=function(a){var b=this.s[a]=(this.s[a]||0)+1;return a+"-"+b;};k.prototype.Za=function(a){return pa(a);};k.prototype.ab=function(a){return Y(a);};k.prototype.V=function(a){a=a.content.querySelectorAll("style");for(var b=[],c=0;c<a.length;c++){var d=a[c];b.push(d.textContent);d.parentNode.removeChild(d);}return b.join("").trim();};k.prototype.ka=function(a){return(a=a.content.querySelector("style"))?a.getAttribute("css-build")||"":"";};k.prototype.prepareTemplate=function(a,b,c){if(!a.f){a.f=!0;a.name=b;a.extends=c;ra[b]=a;var d=this.ka(a),e=this.V(a);c={is:b,extends:c,Fb:d};t||x.a(a.content,b);this.c();var f=wa.test(e)||va.test(e);wa.lastIndex=0;va.lastIndex=0;e=ab(e);f&&w&&this.a&&this.a.transformRules(e,b);a._styleAst=e;a.g=d;d=[];w||(d=P.V(a._styleAst));if(!d.length||w)b=this.ja(c,a._styleAst,t?a.content:null,mb[b]),a.a=b;a.c=d;}};k.prototype.ja=function(a,b,c,d){b=x.b(a,b);if(b.length)return bb(b,a.is,c,d);};k.prototype.ma=function(a){var b=U(a),c=b.is,b=b.$,d=mb[c],c=ra[c],e,f;c&&(e=c._styleAst,f=c.c);return u.set(a,new u(e,d,f,0,b));};k.prototype.T=function(){!this.a&&window.ShadyCSS&&window.ShadyCSS.ApplyShim&&(this.a=window.ShadyCSS.ApplyShim,this.a.invalidCallback=Id);};k.prototype.U=function(){var a=this;!this.b&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(this.b=window.ShadyCSS.CustomStyleInterface,this.b.transformCallback=function(b){a.A(b);},this.b.validateCallback=function(){requestAnimationFrame(function(){(a.b.enqueued||a.i)&&a.f();});});};k.prototype.c=function(){this.T();this.U();};k.prototype.f=function(){this.c();if(this.b){var a=this.b.processStyles();this.b.enqueued&&(w?this.Xa(a):(this.u(this.g,this.h),this.L(a)),this.b.enqueued=!1,this.i&&!w&&this.styleDocument());}};k.prototype.styleElement=function(a,b){var c=U(a).is,d=u.get(a);d||(d=this.ma(a));this.j(a)||(this.i=!0);b&&(d.R=d.R||{},Object.assign(d.R,b));if(w){if(d.R){b=d.R;for(var e in b){null===e?a.style.removeProperty(e):a.style.setProperty(e,b[e]);}}if(((e=ra[c])||this.j(a))&&e&&e.a&&!Hc(e)){if(Hc(e)||e._applyShimValidatingVersion!==e._applyShimNextVersion)this.c(),this.a&&this.a.transformRules(e._styleAst,c),e.a.textContent=x.b(a,d.H),Jd(e);t&&(c=a.shadowRoot)&&(c.querySelector("style").textContent=x.b(a,d.H));d.H=e._styleAst;}}else this.u(a,d),d.Ba&&d.Ba.length&&this.S(a,d);};k.prototype.o=function(a){return(a=a.getRootNode().host)?u.get(a)?a:this.o(a):this.g;};k.prototype.j=function(a){return a===this.g;};k.prototype.S=function(a,b){var c=U(a).is,d=Yc.fetch(c,b.J,b.Ba),e=d?d.styleElement:null,f=b.F;b.F=d&&d.F||this.ia(c);e=P.A(a,b.J,b.F,e);t||P.u(a,b.F,f);d||Yc.b(c,b.J,e,b.F);};k.prototype.u=function(a,b){var c=this.o(a),d=u.get(c),c=Object.create(d.J||null),e=P.ia(a,b.H);a=P.ja(d.H,a).G;Object.assign(c,e.vb,a,e.Ab);this.la(c,b.R);P.ka(c);b.J=c;};k.prototype.la=function(a,b){for(var c in b){var d=b[c];if(d||0===d)a[c]=d;}};k.prototype.styleDocument=function(a){this.styleSubtree(this.g,a);};k.prototype.styleSubtree=function(a,b){var c=a.shadowRoot;(c||this.j(a))&&this.styleElement(a,b);if(b=c&&(c.children||c.childNodes))for(a=0;a<b.length;a++){this.styleSubtree(b[a]);}else if(a=a.children||a.childNodes)for(b=0;b<a.length;b++){this.styleSubtree(a[b]);}};k.prototype.Xa=function(a){for(var b=0;b<a.length;b++){var c=this.b.getStyleForCustomStyle(a[b]);c&&this.Wa(c);}};k.prototype.L=function(a){for(var b=0;b<a.length;b++){var c=this.b.getStyleForCustomStyle(a[b]);c&&P.s(c,this.h.J);}};k.prototype.A=function(a){var b=this,c=pa(a);Z(c,function(a){t?x.u(a):x.U(a);w&&(b.c(),b.a&&b.a.transformRule(a));});w?a.textContent=Y(c):this.h.H.rules.push(c);};k.prototype.Wa=function(a){if(w&&this.a){var b=pa(a);this.c();this.a.transformRules(b);a.textContent=Y(b);}};k.prototype.getComputedStyleValue=function(a,b){var c;w||(c=(u.get(a)||u.get(this.o(a))).J[b]);return(c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():"";};k.prototype.$a=function(a,b){var c=a.getRootNode();b=b?b.split(/\s/):[];c=c.host&&c.host.localName;if(!c){var d=a.getAttribute("class");if(d)for(var d=d.split(/\s/),e=0;e<d.length;e++){if(d[e]===x.c){c=d[e+1];break;}}}c&&b.push(x.c,c);w||(c=u.get(a))&&c.F&&b.push(P.g,c.F);qa(a,b.join(" "));};k.prototype.Ya=function(a){return u.get(a);};k.prototype.flush=k.prototype.K;k.prototype.prepareTemplate=k.prototype.prepareTemplate;k.prototype.styleElement=k.prototype.styleElement;k.prototype.styleDocument=k.prototype.styleDocument;k.prototype.styleSubtree=k.prototype.styleSubtree;k.prototype.getComputedStyleValue=k.prototype.getComputedStyleValue;k.prototype.setElementClass=k.prototype.$a;k.prototype._styleInfoForNode=k.prototype.Ya;k.prototype.transformCustomStyleForDocument=k.prototype.A;k.prototype.getStyleAst=k.prototype.Za;k.prototype.styleAstToString=k.prototype.ab;k.prototype.flushCustomStyles=k.prototype.f;Object.defineProperties(k.prototype,{nativeShadow:{get:function get(){return t;}},nativeCss:{get:function get(){return w;}}});var K=new k(),ob,pb;window.ShadyCSS&&(ob=window.ShadyCSS.ApplyShim,pb=window.ShadyCSS.CustomStyleInterface);window.ShadyCSS={ScopingShim:K,prepareTemplate:function prepareTemplate(a,b,c){K.f();K.prepareTemplate(a,b,c);},styleSubtree:function styleSubtree(a,b){K.f();K.styleSubtree(a,b);},styleElement:function styleElement(a){K.f();K.styleElement(a);},styleDocument:function styleDocument(a){K.f();K.styleDocument(a);},getComputedStyleValue:function getComputedStyleValue(a,b){return K.getComputedStyleValue(a,b);},nativeCss:w,nativeShadow:t};ob&&(window.ShadyCSS.ApplyShim=ob);pb&&(window.ShadyCSS.CustomStyleInterface=pb);(function(){var a=window.customElements,b=window.HTMLImports;window.WebComponents=window.WebComponents||{};if(a&&a.polyfillWrapFlushCallback){var c,d=function d(){if(c){var a=c;c=null;a();return!0;}},e=b.whenReady;a.polyfillWrapFlushCallback(function(a){c=a;e(d);});b.whenReady=function(a){e(function(){d()?b.whenReady(a):a();});};}b.whenReady(function(){requestAnimationFrame(function(){window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}));});});})();(function(){var a=document.createElement("style");a.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var b=document.querySelector("head");b.insertBefore(a,b.firstChild);})();})();}).call(self);//# sourceMappingURL=webcomponents-lite.js.map
window.onload=init;window.addEventListener('message',function(event){if(event.data!=='parseDom'){handleOrder(function(){return event.data;});}});function requestOrder(e){window.postMessage('parseDom','*');}function init(){document.getElementById('parseDom').addEventListener('click',requestOrder);document.getElementById('split').addEventListener('click',onSplitButtonClick);document.getElementById('percentageCheckbox').addEventListener('click',onPercentageCheckboxClick);// check for URL query parameters
if(window.location.search){var queryString=window.location.search.substring(1);// remove prefixing '?'
handleOrder(function(){return parseQueryStringInput(queryString);});}loadPreferences();}/**
 * Loads user preferences from localStorage.
 */function loadPreferences(){if(Storage){if(localStorage.getItem('isTipPercentage')==='false'){// tip is a percentage by default, update if user prefs is 'false'
updateTipComponents(false);document.getElementById('percentageCheckbox').checked=false;}}}function onPercentageCheckboxClick(){var isTipPercentage=document.getElementById('percentageCheckbox').checked;updateTipComponents(isTipPercentage);// save user preference to localStorage
if(Storage){localStorage.setItem('isTipPercentage',isTipPercentage);}}/**
 * Updates the tip components according to the tip being a percentage.
 * @param {boolean} isTipPercentage
 */function updateTipComponents(isTipPercentage){document.getElementById('fixedSpan').hidden=isTipPercentage;document.getElementById('percentageSpan').hidden=!isTipPercentage;}function onSplitButtonClick(){var text=document.getElementById('textarea').value;var tax=Number(document.getElementById('taxes').value);var fee=Number(document.getElementById('fees').value);var tip=Number(document.getElementById('tip').value);var isTipPercentage=document.getElementById('percentageCheckbox').checked;handleOrder(function(){return parseOrderUpInput(text,fee,tax,tip,isTipPercentage);});}function handleOrder(parserFunction){try{var order=parserFunction();order.split();display(order);}catch(error){alert(error);console.error(error);}}function display(order){var calculationsTable='<table>'+'<tr><td>Subtotal:</td><td>$'+prettifyNumber(order.subTotal)+'</td><td>(user input; sum of item costs)</td></tr>'+'<tr><td>Tax:</td><td>$'+prettifyNumber(order.tax)+'</td><td>(user input)</td></tr>'+'<tr><td>Fees:</td><td>$'+prettifyNumber(order.fee)+'</td><td>(user input)</td></tr>'+'<tr><td>Tip:</td><td>$'+prettifyNumber(order.tipDollars)+'</td><td>('+(order.isTipPercentage?'tip percent * subtotal':'user input')+')</td></tr>'+'<tr><td>Total:</td><td>$'+prettifyNumber(order.total)+'</td><td>(subtotal + tax + fees + tip)</td></tr>'+'<tr><td>Fees per Person:</td><td>$'+prettifyNumber(order.feesPerPerson)+'</td><td>(fees / number of people)</td></tr>'+'<tr><td>Tax (Percent):</td><td>'+order.taxPercentDisplay+'%</td><td>(tax / subtotal)</td></tr>'+'<tr><td>Tip (Percent):</td><td>'+order.tipPercentDisplay+'%</td><td>('+(order.isTipPercentage?'user input':'tip / subtotal')+')</td></tr>'+'</table>';var html='<hr>'+calculationsTable+'<br>'+makeBreakdownDisplay(order)+'<br>'+'Publish the following:<br>'+'<pre>'+makeTotalsDisplay(order.totals)+'</pre>'+makeHyperlink(order.tax,order.fee,order.tip,order.people);document.getElementById('result').innerHTML=html;}/**
 * Returns a string of a number in the format "#.##"
 * @example
 * prettifyNumber(12); // returns "12.00"
 * @param {number} n - The number to prettify
 * @returns {string} A string of a number rounded and padded to 2 decimal places
 */function prettifyNumber(n){n=Math.round(n*100)/100;// round to 2 decimal places
// pad to 2 decimal places if necessary
var s=n.toString();if(s.indexOf('.')===-1){s+='.';}while(s.length<s.indexOf('.')+3){s+='0';}return s;}/**
 * Returns a listing of names to split costs
 * @param {object} totals - The totals property from the Order
 * @returns {string} A view mapping names to split costs
 */function makeTotalsDisplay(totals){// get length of longest name
var longestName=-1;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=totals[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var _step$value=_slicedToArray(_step.value,2),person=_step$value[0],price=_step$value[1];longestName=Math.max(person.length,longestName);}// add 1 to longest name for a space after name
}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}longestName+=1;var output='';var name;var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=totals[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var _step2$value=_slicedToArray(_step2.value,2),_person=_step2$value[0],_price=_step2$value[1];var _name=_person;for(var i=_person.length;i<longestName;i++){_name+=' ';}output+=_name+'$'+prettifyNumber(_price)+'<br>';}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}return output;}/**
 * Returns a hyperlink to this split order.
 * @param {number} tax - amount of taxes
 * @param {fee} fee - amount of fees
 * @param {number} tip - tip
 * @param {Object} personItemCosts - map of person name to item costs
 * @return {string} The hyperlink to this order
 */function makeHyperlink(tax,fee,tip,personItemCosts){var link=window.location.origin+window.location.pathname;if(link.indexOf('index.html')===-1){link+='index.html';}if(tip!==0)tip=prettifyNumber(tip);link+='?tax='+tax+'&fee='+fee+'&tip='+tip;var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=personItemCosts[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var _step3$value=_slicedToArray(_step3.value,2),person=_step3$value[0],val=_step3$value[1];link+='&'+encodeURIComponent(person)+'='+prettifyNumber(val);}}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return){_iterator3.return();}}finally{if(_didIteratorError3){throw _iteratorError3;}}}return'<a href='+link+'>'+link+'</a>';}/**
 * Returns a display breaking down the Order split calculations
 * @param {Order} order - the Order to breakdown
 * @returns {string} A view of the Order breakdown
 */function makeBreakdownDisplay(order){var breakdown='<table id="breakdown">';breakdown+='<tr><th>Person</th><th>Item Costs</th><th>Tax</th><th>Tip</th><th>Fees Per Person</th><th>Person Total</th></tr>';var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=order.people[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){var _step4$value=_slicedToArray(_step4.value,2),person=_step4$value[0],price=_step4$value[1];breakdown+='<tr><td>'+person+'</td><td>'+price+'</td><td> + '+// item costs
price+' * '+order.taxPercent+'</td><td> + '+// taxes
price+' * '+order.tipPercent+'</td><td> + '+// tip
order.feesPerPerson+'</td><td> = '+prettifyNumber(order.totals.get(person))+'</td></tr>';}}catch(err){_didIteratorError4=true;_iteratorError4=err;}finally{try{if(!_iteratorNormalCompletion4&&_iterator4.return){_iterator4.return();}}finally{if(_didIteratorError4){throw _iteratorError4;}}}breakdown+='</table>';return breakdown;};var Order=function(){function Order(){_classCallCheck(this,Order);this.people=new Map();this.tip=0;this.tax=0;this.nonTaxedFees=0;this.taxedFees=0;this.isTipPercentage=false;}_createClass(Order,[{key:"withTip",value:function withTip(tip){var asPercentage=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;this.isTipPercentage=asPercentage;if(this.isTipPercentage){this._tipPercentage=tip/100;}else{this._tipDollars=tip;}return this;}},{key:"withNonTaxedFees",value:function withNonTaxedFees(){for(var _len=arguments.length,fees=Array(_len),_key=0;_key<_len;_key++){fees[_key]=arguments[_key];}this.nonTaxedFees=fees.reduce(function(acc,val){return acc+val;});return this;}},{key:"withTaxedFees",value:function withTaxedFees(){for(var _len2=arguments.length,fees=Array(_len2),_key2=0;_key2<_len2;_key2++){fees[_key2]=arguments[_key2];}this.taxedFees=fees.reduce(function(acc,val){return acc+val;});return this;}},{key:"withTax",value:function withTax(tax){this.tax=tax;return this;}},{key:"withPerson",value:function withPerson(name,price){var newPrice=price;if(this.people.has(name)){newPrice+=this.people.get(name);}this.people.set(name,newPrice);return this;}},{key:"split",value:function split(){var totals=new Map();this.subTotal=0;var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=this.people.entries()[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=true){var _step5$value=_slicedToArray(_step5.value,2),name=_step5$value[0],price=_step5$value[1];this.subTotal+=price;}}catch(err){_didIteratorError5=true;_iteratorError5=err;}finally{try{if(!_iteratorNormalCompletion5&&_iterator5.return){_iterator5.return();}}finally{if(_didIteratorError5){throw _iteratorError5;}}}this.subTotal+=this.taxedFees;var _iteratorNormalCompletion6=true;var _didIteratorError6=false;var _iteratorError6=undefined;try{for(var _iterator6=this.people.entries()[Symbol.iterator](),_step6;!(_iteratorNormalCompletion6=(_step6=_iterator6.next()).done);_iteratorNormalCompletion6=true){var _step6$value=_slicedToArray(_step6.value,2),name=_step6$value[0],price=_step6$value[1];var totalForPerson=price;totalForPerson+=price*this.taxPercent;totalForPerson+=price*this.tipPercent;totalForPerson+=this.feesPerPerson;totals.set(name,totalForPerson);}}catch(err){_didIteratorError6=true;_iteratorError6=err;}finally{try{if(!_iteratorNormalCompletion6&&_iterator6.return){_iterator6.return();}}finally{if(_didIteratorError6){throw _iteratorError6;}}}this.totals=totals;var totalPrice=Array.from(totals.values()).reduce(function(acc,val){return acc+val;});if(Math.round(totalPrice*100)!=Math.round(this.total*100)){throw new Error('Everyone\'s share does not add up to total');}return this;}},{key:"toJSON",value:function toJSON(){var ret={};ret.people=Array.from(this.people);ret.tip=this.tip;ret.tax=this.tax;ret.nonTaxedFees=this.nonTaxedFees;ret.taxedFees=this.taxedFees;ret.isTipPercentage=this.isTipPercentage;return ret;}},{key:"taxPercent",get:function get(){return this.tax/this.subTotal;}},{key:"taxPercentDisplay",get:function get(){return this.taxPercent*100;}},{key:"fee",get:function get(){return this.nonTaxedFees;}},{key:"tipPercent",get:function get(){if(this.isTipPercentage){return this._tipPercentage;}return this._tipDollars/this.subTotal;}},{key:"tipPercentDisplay",get:function get(){return this.tipPercent*100;}},{key:"tipDollars",get:function get(){return this.tipPercent*this.subTotal;}},{key:"feesPerPerson",get:function get(){return this.fee/this.people.size;}},{key:"total",get:function get(){return this.subTotal+this.fee+this.tipDollars+this.tax;}}],[{key:"fromJSON",value:function fromJSON(json){var order=new Order();order.people=new Map(json.people);order.withTip(json.tip,json.isTipPercentage).withTax(json.tax).withNonTaxedFees(json.nonTaxedFees).withTaxedFees(json.taxedFees);return order.split();}}]);return Order;}();;/**
 * Parses input from a URL query string into an Order.
 * @example
 * parseQueryStringInput('tax=0.30&fee=1.50&tip=1.25&Gus=5.00');
 * @param {string} queryString - The URL query string
 * @returns {Order} An order parsed from the URL query string
 */function parseQueryStringInput(queryString){var pairs=queryString.split('&');var order=new Order();for(var i=0;i<pairs.length;i++){var pairValues=pairs[i].split('=');pairValues[1]=Number(pairValues[1]);if(pairValues[0]==='fee'){order.withNonTaxedFees(pairValues[1]);}else if(pairValues[0]==='tax'){order.withTax(pairValues[1]);}else if(pairValues[0]==='tip'){order.withTip(pairValues[1]);}else{order.withPerson(decodeURIComponent(pairValues[0]),pairValues[1]);}}return order;}/**
 * Parses the confirmation summary from an OrderUp.com order
 * @param {string} orderUpText - The confirmation summary from OrderUp.com
 * @param {number} fee
 * @param {number} tax
 * @param {number} tip - The tip (either a fixed value or percentage)
 * @param {boolean} isTipPercentage - True if the tip is a percentage as opposed to a fixed value
 * @return {Order} An order parsed from the OrderUp.com confirmation summary
 */function parseOrderUpInput(orderUpText,fee,tax,tip,isTipPercentage){// TODO: check if the number at the beginning of the line affects the item cost
// example: 2 Chicken $4.00
//   should the cost for the person be $4 or $8?
var order=new Order().withNonTaxedFees(fee).withTax(tax).withTip(tip,isTipPercentage);var label='Label for:';var itemCost=null;var array=orderUpText.split('\n');for(var i=0;i<array.length;i++){var line=array[i].trim();line=line.replace(/\s+/g,' ');// replace all whitespace with single space
if(!itemCost){var dollarIndex=line.lastIndexOf('$');if(dollarIndex>-1){itemCost=Number(line.substring(dollarIndex+1,line.length));}continue;}var labelIndex=line.indexOf(label);if(labelIndex>-1){var name=line.substring(labelIndex+label.length,line.length);order.withPerson(name,itemCost);itemCost=null;}}return order;};(function(){var queryParams=new Map(location.search.slice(1).split('&').map(function(t){return t.split('=');}));if(location.hostname==='localhost'&&queryParams.get('sw')!=='test'){console.log('service worker disabled on localhost');return;}if(!('serviceWorker'in navigator)){console.log('service worker not supported');return;}navigator.serviceWorker.register('./sw.js').then(function(registration){// Registration was successful 😊
console.log('ServiceWorker registration successful with scope: ',registration.scope);}).catch(function(err){// registration failed :(
console.log('ServiceWorker registration failed: ',err);});})();(function(){'use strict';var userPolymer=window.Polymer;/**
   * @namespace Polymer
   * @summary Polymer is a lightweight library built on top of the web
   * standards-based Web Components API's, and makes it easy to build your
   * own custom HTML elements.
   * @param {Object} info Prototype for the custom element. It must contain
   * an `is` property to specify the element name. Other properties populate
   * the element prototype. The `properties`, `observers`, `hostAttributes`,
   * and `listeners` properties are processed to create element features.
   * @return {Object} Returns a custom element class for the given provided
   * prototype `info` object. The name of the element if given by `info.is`.
   */window.Polymer=function(info){return window.Polymer._polymerFn(info);};// support user settings on the Polymer object
if(userPolymer){Object.assign(Polymer,userPolymer);}// To be plugged by legacy implementation if loaded
/**
   * @param {Object} info Prototype for the custom element. It must contain
   * an `is` property to specify the element name. Other properties populate
   * the element prototype. The `properties`, `observers`, `hostAttributes`,
   * and `listeners` properties are processed to create element features.
   */window.Polymer._polymerFn=function(info){// eslint-disable-line no-unused-vars
throw new Error('Load polymer.html to use the Polymer() function.');};window.Polymer.version='2.0.0';/* eslint-disable no-unused-vars *//*
  When using Closure Compiler, JSCompiler_renameProperty(property, object) is replaced by the munged name for object[property]
  We cannot alias this function, so we have to use a small shim that has the same behavior when not compiling.
  */window.JSCompiler_renameProperty=function(prop,obj){return prop;};/* eslint-enable */})();(function(){'use strict';// unique global id for deduping mixins.
var dedupeId=0;/**
   * Given a mixin producing function, memoize applications of mixin to base
   * @private
   * @param {Function} mixin Mixin for which to create a caching mixin.
   * @return {Function} Returns a mixin which when applied multiple times to the
   * same base will always return the same extended class.
   */function cachingMixin(mixin){return function(base){if(!mixin.__mixinApplications){mixin.__mixinApplications=new WeakMap();}var map=mixin.__mixinApplications;var application=map.get(base);if(!application){application=mixin(base);map.set(base,application);}return application;};}/**
   * Wraps an ES6 class expression mixin such that the mixin is only applied
   * if it has not already been applied its base argument.  Also memoizes mixin
   * applications.
   *
   * @memberof Polymer
   * @param {Function} mixin ES6 class expression mixin to wrap
   * @return {Function} Wrapped mixin that deduplicates and memoizes
   *   mixin applications to base
   */Polymer.dedupingMixin=function(mixin){mixin=cachingMixin(mixin);// maintain a unique id for each mixin
mixin.__dedupeId=++dedupeId;return function(base){var baseSet=base.__mixinSet;if(baseSet&&baseSet[mixin.__dedupeId]){return base;}var extended=mixin(base);// copy inherited mixin set from the extended class, or the base class
// NOTE: we avoid use of Set here because some browser (IE11)
// cannot extend a base Set via the constructor.
extended.__mixinSet=Object.create(extended.__mixinSet||baseSet||null);extended.__mixinSet[mixin.__dedupeId]=true;return extended;};};})();(function(){'use strict';var caseMap={};var DASH_TO_CAMEL=/-[a-z]/g;var CAMEL_TO_DASH=/([A-Z])/g;/**
   * Module with utilities for converting between "dash-case" and "camelCase"
   * identifiers.
   *
   * @namespace
   * @memberof Polymer
   * @summary Module that provides utilities for converting between "dash-case"
   *   and "camelCase".
   */var CaseMap={/**
     * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
     * (e.g. `fooBarBaz`).
     *
     * @memberof Polymer.CaseMap
     * @param {string} dash Dash-case identifier
     * @return {string} Camel-case representation of the identifier
     */dashToCamelCase:function dashToCamelCase(dash){return caseMap[dash]||(caseMap[dash]=dash.indexOf('-')<0?dash:dash.replace(DASH_TO_CAMEL,function(m){return m[1].toUpperCase();}));},/**
     * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
     * (e.g. `foo-bar-baz`).
     *
     * @memberof Polymer.CaseMap
     * @param {string} camel Camel-case identifier
     * @return {string} Dash-case representation of the identifier
     */camelToDashCase:function camelToDashCase(camel){return caseMap[camel]||(caseMap[camel]=camel.replace(CAMEL_TO_DASH,'-$1').toLowerCase());}};Polymer.CaseMap=CaseMap;})();(function(){'use strict';var CSS_URL_RX=/(url\()([^)]*)(\))/g;var ABS_URL=/(^\/)|(^#)|(^[\w-\d]*:)/;var workingURL=void 0;var resolveDoc=void 0;/**
     * Resolves the given URL against the provided `baseUri'.
     *
     * @memberof Polymer.ResolveUrl
     * @param {string} url Input URL to resolve
     * @param {string} baseURI Base URI to resolve the URL against
     * @return {string} resolved URL
     */function resolveUrl(url,baseURI){if(url&&ABS_URL.test(url)){return url;}// Lazy feature detection.
if(workingURL===undefined){workingURL=false;try{var u=new URL('b','http://a');u.pathname='c%20d';workingURL=u.href==='http://a/c%20d';}catch(e){// silently fail
}}if(!baseURI){baseURI=document.baseURI||window.location.href;}if(workingURL){return new URL(url,baseURI).href;}// Fallback to creating an anchor into a disconnected document.
if(!resolveDoc){resolveDoc=document.implementation.createHTMLDocument('temp');resolveDoc.base=resolveDoc.createElement('base');resolveDoc.head.appendChild(resolveDoc.base);resolveDoc.anchor=resolveDoc.createElement('a');resolveDoc.body.appendChild(resolveDoc.anchor);}resolveDoc.base.href=baseURI;resolveDoc.anchor.href=url;return resolveDoc.anchor.href||url;}/**
     * Resolves any relative URL's in the given CSS text against the provided
     * `ownerDocument`'s `baseURI`.
     *
     * @memberof Polymer.ResolveUrl
     * @param {string} cssText CSS text to process
     * @param {string} baseURI Base URI to resolve the URL against
     * @return {string} Processed CSS text with resolved URL's
     */function resolveCss(cssText,baseURI){return cssText.replace(CSS_URL_RX,function(m,pre,url,post){return pre+'\''+resolveUrl(url.replace(/["']/g,''),baseURI)+'\''+post;});}/**
     * Returns a path from a given `url`. The path includes the trailing
     * `/` from the url.
     *
     * @memberof Polymer.ResolveUrl
     * @param {string} url Input URL to transform
     * @return {string} resolved path
     */function pathFromUrl(url){return url.substring(0,url.lastIndexOf('/')+1);}/**
     * Module with utilities for resolving relative URL's.
     *
     * @namespace
     * @memberof Polymer
     * @summary Module with utilities for resolving relative URL's.
     */Polymer.ResolveUrl={resolveCss:resolveCss,resolveUrl:resolveUrl,pathFromUrl:pathFromUrl};})();(function(){'use strict';var MODULE_STYLE_LINK_SELECTOR='link[rel=import][type~=css]';var INCLUDE_ATTR='include';function importModule(moduleId){if(!Polymer.DomModule){return null;}return Polymer.DomModule.import(moduleId);}/**
   * Module with utilities for collection CSS text from `<templates>`, external
   * stylesheets, and `dom-module`s.
   *
   * @namespace
   * @memberof Polymer
   * @summary Module with utilities for collection CSS text from various sources.
   */var StyleGather={/**
     * Returns CSS text of styles in a space-separated list of `dom-module`s.
     *
     * @memberof Polymer.StyleGather
     * @param {string} moduleIds List of dom-module id's within which to
     * search for css.
     * @return {string} Concatenated CSS content from specified `dom-module`s
     */cssFromModules:function cssFromModules(moduleIds){var modules=moduleIds.trim().split(' ');var cssText='';for(var i=0;i<modules.length;i++){cssText+=this.cssFromModule(modules[i]);}return cssText;},/**
     * Returns CSS text of styles in a given `dom-module`.  CSS in a `dom-module`
     * can come either from `<style>`s within the first `<template>`, or else
     * from one or more `<link rel="import" type="css">` links outside the
     * template.
     *
     * Any `<styles>` processed are removed from their original location.
     *
     * @memberof Polymer.StyleGather
     * @param {string} moduleId dom-module id to gather styles from
     * @return {string} Concatenated CSS content from specified `dom-module`
     */cssFromModule:function cssFromModule(moduleId){var m=importModule(moduleId);if(m&&m._cssText===undefined){var cssText='';// include css from the first template in the module
var t=m.querySelector('template');if(t){cssText+=this.cssFromTemplate(t,m.assetpath);}// module imports: <link rel="import" type="css">
cssText+=this.cssFromModuleImports(moduleId);m._cssText=cssText||null;}if(!m){console.warn('Could not find style data in module named',moduleId);}return m&&m._cssText||'';},/**
     * Returns CSS text of `<styles>` within a given template.
     *
     * Any `<styles>` processed are removed from their original location.
     *
     * @memberof Polymer.StyleGather
     * @param {HTMLTemplateElement} template Template to gather styles from
     * @param {string} baseURI Base URI to resolve the URL against
     * @return {string} Concatenated CSS content from specified template
     */cssFromTemplate:function cssFromTemplate(template,baseURI){var cssText='';// if element is a template, get content from its .content
var e$=template.content.querySelectorAll('style');for(var i=0;i<e$.length;i++){var e=e$[i];// support style sharing by allowing styles to "include"
// other dom-modules that contain styling
var include=e.getAttribute(INCLUDE_ATTR);if(include){cssText+=this.cssFromModules(include);}e.parentNode.removeChild(e);cssText+=baseURI?Polymer.ResolveUrl.resolveCss(e.textContent,baseURI):e.textContent;}return cssText;},/**
     * Returns CSS text from stylsheets loaded via `<link rel="import" type="css">`
     * links within the specified `dom-module`.
     *
     * @memberof Polymer.StyleGather
     * @param {string} moduleId Id of `dom-module` to gather CSS from
     * @return {string} Concatenated CSS content from links in specified `dom-module`
     */cssFromModuleImports:function cssFromModuleImports(moduleId){var cssText='';var m=importModule(moduleId);if(!m){return cssText;}var p$=m.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);for(var i=0;i<p$.length;i++){var p=p$[i];if(p.import){var importDoc=p.import;// NOTE: polyfill affordance.
// under the HTMLImports polyfill, there will be no 'body',
// but the import pseudo-doc can be used directly.
var container=importDoc.body?importDoc.body:importDoc;cssText+=Polymer.ResolveUrl.resolveCss(container.textContent,importDoc.baseURI);}}return cssText;}};Polymer.StyleGather=StyleGather;})();(function(){'use strict';var modules={};var lcModules={};function findModule(id){return modules[id]||lcModules[id.toLowerCase()];}function styleOutsideTemplateCheck(inst){if(inst.querySelector('style')){console.warn('dom-module %s has style outside template',inst.id);}}/**
   * The `dom-module` element registers the dom it contains to the name given
   * by the module's id attribute. It provides a unified database of dom
   * accessible via its static `import` API.
   *
   * A key use case of `dom-module` is for providing custom element `<template>`s
   * via HTML imports that are parsed by the native HTML parser, that can be
   * relocated during a bundling pass and still looked up by `id`.
   *
   * Example:
   *
   *     <dom-module id="foo">
   *       <img src="stuff.png">
   *     </dom-module>
   *
   * Then in code in some other location that cannot access the dom-module above
   *
   *     let img = document.createElement('dom-module').import('foo', 'img');
   *
   * @extends HTMLElement
   * @memberof Polymer
   * @summary Custom element that provides a registry of relocatable DOM content
   *   by `id` that is agnostic to bundling.
   */var DomModule=function(_HTMLElement){_inherits(DomModule,_HTMLElement);function DomModule(){_classCallCheck(this,DomModule);return _possibleConstructorReturn(this,(DomModule.__proto__||Object.getPrototypeOf(DomModule)).apply(this,arguments));}_createClass(DomModule,[{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value){if(old!==value){this.register();}}/**
     * The absolute URL of the original location of this `dom-module`.
     *
     * This value will differ from this element's `ownerDocument` in the
     * following ways:
     * - Takes into account any `assetpath` attribute added during bundling
     *   to indicate the original location relative to the bundled location
     * - Uses the HTMLImports polyfill's `importForElement` API to ensure
     *   the path is relative to the import document's location since
     *   `ownerDocument` is not currently polyfilled
     */},{key:"register",/**
     * Registers the dom-module at a given id. This method should only be called
     * when a dom-module is imperatively created. For
     * example, `document.createElement('dom-module').register('foo')`.
     * @param {string=} id The id at which to register the dom-module.
     */value:function register(id){id=id||this.id;if(id){this.id=id;// store id separate from lowercased id so that
// in all cases mixedCase id will stored distinctly
// and lowercase version is a fallback
modules[id]=this;lcModules[id.toLowerCase()]=this;styleOutsideTemplateCheck(this);}}},{key:"assetpath",get:function get(){// Don't override existing assetpath.
if(!this.__assetpath){// note: assetpath set via an attribute must be relative to this
// element's location; accomodate polyfilled HTMLImports
var owner=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument;var url=Polymer.ResolveUrl.resolveUrl(this.getAttribute('assetpath')||'',owner.baseURI);this.__assetpath=Polymer.ResolveUrl.pathFromUrl(url);}return this.__assetpath;}}],[{key:"import",/**
     * Retrieves the element specified by the css `selector` in the module
     * registered by `id`. For example, this.import('foo', 'img');
     * @param {string} id The id of the dom-module in which to search.
     * @param {string=} selector The css selector by which to find the element.
     * @return {Element} Returns the element which matches `selector` in the
     * module registered at the specified `id`.
     */value:function _import(id,selector){if(id){var m=findModule(id);if(m&&selector){return m.querySelector(selector);}return m;}return null;}},{key:"observedAttributes",get:function get(){return['id'];}}]);return DomModule;}(HTMLElement);DomModule.prototype['modules']=modules;customElements.define('dom-module',DomModule);// export
Polymer.DomModule=DomModule;})();(function(){'use strict';/**
   * Module with utilities for manipulating structured data path strings.
   *
   * @namespace
   * @memberof Polymer
   * @summary Module with utilities for manipulating structured data path strings.
   */var Path={/**
     * Returns true if the given string is a structured data path (has dots).
     *
     * Example:
     *
     * ```
     * Polymer.Path.isPath('foo.bar.baz') // true
     * Polymer.Path.isPath('foo')         // false
     * ```
     *
     * @memberof Polymer.Path
     * @param {string} path Path string
     * @return {boolean} True if the string contained one or more dots
     */isPath:function isPath(path){return path.indexOf('.')>=0;},/**
     * Returns the root property name for the given path.
     *
     * Example:
     *
     * ```
     * Polymer.Path.root('foo.bar.baz') // 'foo'
     * Polymer.Path.root('foo')         // 'foo'
     * ```
     *
     * @memberof Polymer.Path
     * @param {string} path Path string
     * @return {string} Root property name
     */root:function root(path){var dotIndex=path.indexOf('.');if(dotIndex===-1){return path;}return path.slice(0,dotIndex);},/**
     * Given `base` is `foo.bar`, `foo` is an ancestor, `foo.bar` is not
     * Returns true if the given path is an ancestor of the base path.
     *
     * Example:
     *
     * ```
     * Polymer.Path.isAncestor('foo.bar', 'foo')         // true
     * Polymer.Path.isAncestor('foo.bar', 'foo.bar')     // false
     * Polymer.Path.isAncestor('foo.bar', 'foo.bar.baz') // false
     * ```
     *
     * @memberof Polymer.Path
     * @param {string} base Path string to test against.
     * @param {string} path Path string to test.
     * @return {boolean} True if `path` is an ancestor of `base`.
     */isAncestor:function isAncestor(base,path){//     base.startsWith(path + '.');
return base.indexOf(path+'.')===0;},/**
     * Given `base` is `foo.bar`, `foo.bar.baz` is an descendant
     *
     * Example:
     *
     * ```
     * Polymer.Path.isDescendant('foo.bar', 'foo.bar.baz') // true
     * Polymer.Path.isDescendant('foo.bar', 'foo.bar')     // false
     * Polymer.Path.isDescendant('foo.bar', 'foo')         // false
     * ```
     *
     * @memberof Polymer.Path
     * @param {string} base Path string to test against.
     * @param {string} path Path string to test.
     * @return {boolean} True if `path` is a descendant of `base`.
     */isDescendant:function isDescendant(base,path){//     path.startsWith(base + '.');
return path.indexOf(base+'.')===0;},/**
     * Replaces a previous base path with a new base path, preserving the
     * remainder of the path.
     *
     * User must ensure `path` has a prefix of `base`.
     *
     * Example:
     *
     * ```
     * Polymer.Path.translate('foo.bar', 'zot' 'foo.bar.baz') // 'zot.baz'
     * ```
     *
     * @memberof Polymer.Path
     * @param {string} base Current base string to remove
     * @param {string} newBase New base string to replace with
     * @param {string} path Path to translate
     * @return {string} Translated string
     */translate:function translate(base,newBase,path){return newBase+path.slice(base.length);},matches:function matches(base,path){return base===path||this.isAncestor(base,path)||this.isDescendant(base,path);},/**
     * Converts array-based paths to flattened path.  String-based paths
     * are returned as-is.
     *
     * Example:
     *
     * ```
     * Polymer.Path.normalize(['foo.bar', 0, 'baz'])  // 'foo.bar.0.baz'
     * Polymer.Path.normalize('foo.bar.0.baz')        // 'foo.bar.0.baz'
     * ```
     *
     * @memberof Polymer.Path
     * @param {string | !Array<string|number>} path Input path
     * @return {string} Flattened path
     */normalize:function normalize(path){if(Array.isArray(path)){var parts=[];for(var i=0;i<path.length;i++){var args=path[i].toString().split('.');for(var j=0;j<args.length;j++){parts.push(args[j]);}}return parts.join('.');}else{return path;}},/**
     * Splits a path into an array of property names. Accepts either arrays
     * of path parts or strings.
     *
     * Example:
     *
     * ```
     * Polymer.Path.split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
     * Polymer.Path.split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
     * ```
     *
     * @memberof Polymer.Path
     * @param {string | !Array<string|number>} path Input path
     * @return {!Array<string>} Array of path parts
     */split:function split(path){if(Array.isArray(path)){return this.normalize(path).split('.');}return path.toString().split('.');},/**
     * Reads a value from a path.  If any sub-property in the path is `undefined`,
     * this method returns `undefined` (will never throw.
     *
     * @memberof Polymer.Path
     * @param {Object} root Object from which to dereference path from
     * @param {string | !Array<string|number>} path Path to read
     * @param {Object=} info If an object is provided to `info`, the normalized
     *  (flattened) path will be set to `info.path`.
     * @return {*} Value at path, or `undefined` if the path could not be
     *  fully dereferenced.
     */get:function get(root,path,info){var prop=root;var parts=this.split(path);// Loop over path parts[0..n-1] and dereference
for(var i=0;i<parts.length;i++){if(!prop){return;}var part=parts[i];prop=prop[part];}if(info){info.path=parts.join('.');}return prop;},/**
     * Sets a value to a path.  If any sub-property in the path is `undefined`,
     * this method will no-op.
     *
     * @memberof Polymer.Path
     * @param {Object} root Object from which to dereference path from
     * @param {string | !Array<string|number>} path Path to set
     * @param {*} value Value to set to path
     * @return {string | undefined} The normalized version of the input path
     */set:function set(root,path,value){var prop=root;var parts=this.split(path);var last=parts[parts.length-1];if(parts.length>1){// Loop over path parts[0..n-2] and dereference
for(var i=0;i<parts.length-1;i++){var part=parts[i];prop=prop[part];if(!prop){return;}}// Set value to object at end of path
prop[last]=value;}else{// Simple property set
prop[path]=value;}return parts.join('.');}};/**
   * Returns true if the given string is a structured data path (has dots).
   *
   * This function is deprecated.  Use `Polymer.Path.isPath` instead.
   *
   * Example:
   *
   * ```
   * Polymer.Path.isDeep('foo.bar.baz') // true
   * Polymer.Path.isDeep('foo')         // false
   * ```
   *
   * @deprecated
   * @memberof Polymer.Path
   * @param {string} path Path string
   * @return {boolean} True if the string contained one or more dots
   */Path.isDeep=Path.isPath;Polymer.Path=Path;})();(function(){'use strict';/** @typedef {{run: function(function(), number=):number, cancel: function(number)}} */var AsyncInterface=void 0;// eslint-disable-line no-unused-vars
// Microtask implemented using Mutation Observer
var microtaskCurrHandle=0;var microtaskLastHandle=0;var microtaskCallbacks=[];var microtaskNodeContent=0;var microtaskNode=document.createTextNode('');new window.MutationObserver(microtaskFlush).observe(microtaskNode,{characterData:true});function microtaskFlush(){var len=microtaskCallbacks.length;for(var i=0;i<len;i++){var cb=microtaskCallbacks[i];if(cb){try{cb();}catch(e){setTimeout(function(){throw e;});}}}microtaskCallbacks.splice(0,len);microtaskLastHandle+=len;}/**
   * Module that provides a number of strategies for enqueuing asynchronous
   * tasks.  Each sub-module provides a standard `run(fn)` interface that returns a
   * handle, and a `cancel(handle)` interface for canceling async tasks before
   * they run.
   *
   * @namespace
   * @memberof Polymer
   * @summary Module that provides a number of strategies for enqueuing asynchronous
   * tasks.
   */Polymer.Async={/**
     * Async interface wrapper around `setTimeout`.
     *
     * @namespace
     * @memberof Polymer.Async
     * @summary Async interface wrapper around `setTimeout`.
     */timeOut:{/**
       * Returns a sub-module with the async interface providing the provided
       * delay.
       *
       * @memberof Polymer.Async.timeOut
       * @param {number} delay Time to wait before calling callbacks in ms
       * @return {AsyncInterface} An async timeout interface
       */after:function after(delay){return{run:function run(fn){return setTimeout(fn,delay);},cancel:window.clearTimeout.bind(window)};},/**
       * Enqueues a function called in the next task.
       *
       * @memberof Polymer.Async.timeOut
       * @param {Function} fn Callback to run
       * @return {number} Handle used for canceling task
       */run:window.setTimeout.bind(window),/**
       * Cancels a previously enqueued `timeOut` callback.
       *
       * @memberof Polymer.Async.timeOut
       * @param {number} handle Handle returned from `run` of callback to cancel
       */cancel:window.clearTimeout.bind(window)},/**
     * Async interface wrapper around `requestAnimationFrame`.
     *
     * @namespace
     * @memberof Polymer.Async
     * @summary Async interface wrapper around `requestAnimationFrame`.
     */animationFrame:{/**
       * Enqueues a function called at `requestAnimationFrame` timing.
       *
       * @memberof Polymer.Async.animationFrame
       * @param {Function} fn Callback to run
       * @return {number} Handle used for canceling task
       */run:window.requestAnimationFrame.bind(window),/**
       * Cancels a previously enqueued `animationFrame` callback.
       *
       * @memberof Polymer.Async.timeOut
       * @param {number} handle Handle returned from `run` of callback to cancel
       */cancel:window.cancelAnimationFrame.bind(window)},/**
     * Async interface wrapper around `requestIdleCallback`.  Falls back to
     * `setTimeout` on browsers that do not support `requestIdleCallback`.
     *
     * @namespace
     * @memberof Polymer.Async
     * @summary Async interface wrapper around `requestIdleCallback`.
     */idlePeriod:{/**
       * Enqueues a function called at `requestIdleCallback` timing.
       *
       * @memberof Polymer.Async.idlePeriod
       * @param {function(IdleDeadline)} fn Callback to run
       * @return {number} Handle used for canceling task
       */run:function run(fn){return window.requestIdleCallback?window.requestIdleCallback(fn):window.setTimeout(fn,16);},/**
       * Cancels a previously enqueued `idlePeriod` callback.
       *
       * @memberof Polymer.Async.idlePeriod
       * @param {number} handle Handle returned from `run` of callback to cancel
       */cancel:function cancel(handle){window.cancelIdleCallback?window.cancelIdleCallback(handle):window.clearTimeout(handle);}},/**
     * Async interface for enqueueing callbacks that run at microtask timing.
     *
     * Note that microtask timing is achieved via a single `MutationObserver`,
     * and thus callbacks enqueued with this API will all run in a single
     * batch, and not interleaved with other microtasks such as promises.
     * Promises are avoided as an implementation choice for the time being
     * due to Safari bugs that cause Promises to lack microtask guarantees.
     *
     * @namespace
     * @memberof Polymer.Async
     * @summary Async interface for enqueueing callbacks that run at microtask
     *   timing.
     */microTask:{/**
       * Enqueues a function called at microtask timing.
       *
       * @memberof Polymer.Async.microTask
       * @param {Function} callback Callback to run
       * @return {*} Handle used for canceling task
       */run:function run(callback){microtaskNode.textContent=microtaskNodeContent++;microtaskCallbacks.push(callback);return microtaskCurrHandle++;},/**
       * Cancels a previously enqueued `microTask` callback.
       *
       * @memberof Polymer.Async.microTask
       * @param {number} handle Handle returned from `run` of callback to cancel
       */cancel:function cancel(handle){var idx=handle-microtaskLastHandle;if(idx>=0){if(!microtaskCallbacks[idx]){throw new Error('invalid async handle: '+handle);}microtaskCallbacks[idx]=null;}}}};})();(function(){'use strict';var caseMap=Polymer.CaseMap;var microtask=Polymer.Async.microTask;// Save map of native properties; this forms a blacklist or properties
// that won't have their values "saved" by `saveAccessorValue`, since
// reading from an HTMLElement accessor from the context of a prototype throws
var nativeProperties={};var proto=HTMLElement.prototype;while(proto){var props=Object.getOwnPropertyNames(proto);for(var i=0;i<props.length;i++){nativeProperties[props[i]]=true;}proto=Object.getPrototypeOf(proto);}/**
   * Used to save the value of a property that will be overridden with
   * an accessor. If the `model` is a prototype, the values will be saved
   * in `__dataProto`, and it's up to the user (or downstream mixin) to
   * decide how/when to set these values back into the accessors.
   * If `model` is already an instance (it has a `__data` property), then
   * the value will be set as a pending property, meaning the user should
   * call `_invalidateProperties` or `_flushProperties` to take effect
   *
   * @param {Object} model Prototype or instance
   * @param {string} property Name of property
   * @private
   */function saveAccessorValue(model,property){// Don't read/store value for any native properties since they could throw
if(!nativeProperties[property]){var value=model[property];if(value!==undefined){if(model.__data){// Adding accessor to instance; update the property
// It is the user's responsibility to call _flushProperties
model._setPendingProperty(property,value);}else{// Adding accessor to proto; save proto's value for instance-time use
if(!model.__dataProto){model.__dataProto={};}else if(!model.hasOwnProperty(JSCompiler_renameProperty('__dataProto',model))){model.__dataProto=Object.create(model.__dataProto);}model.__dataProto[property]=value;}}}}/**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin, simply declare attributes to observe via
   * the standard `static get observedAttributes()`, implement `_propertiesChanged`
   * on the class, and then call `MyClass.createPropertiesForAttributes()` once
   * on the class to generate property accessors for each observed attribute
   * prior to instancing.  Last, call `this._flushProperties()` once to enable
   * the accessors.
   *
   * Any `observedAttributes` will automatically be
   * deserialized via `attributeChangedCallback` and set to the associated
   * property using `dash-case`-to-`camelCase` convention.
   *
   * @polymerMixin
   * @memberof Polymer
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   */Polymer.PropertyAccessors=Polymer.dedupingMixin(function(superClass){/**
     * @polymerMixinClass
     * @implements {Polymer_PropertyAccessors}
     * @unrestricted
     */var PropertyAccessors=function(_superClass){_inherits(PropertyAccessors,_superClass);_createClass(PropertyAccessors,null,[{key:"createPropertiesForAttributes",/**
       * Generates property accessors for all attributes in the standard
       * static `observedAttributes` array.
       *
       * Attribute names are mapped to property names using the `dash-case` to
       * `camelCase` convention
       *
       */value:function createPropertiesForAttributes(){var a$=this.observedAttributes;for(var _i=0;_i<a$.length;_i++){this.prototype._createPropertyAccessor(caseMap.dashToCamelCase(a$[_i]));}}}]);function PropertyAccessors(){_classCallCheck(this,PropertyAccessors);var _this2=_possibleConstructorReturn(this,(PropertyAccessors.__proto__||Object.getPrototypeOf(PropertyAccessors)).call(this));_this2._initializeProperties();return _this2;}_createClass(PropertyAccessors,[{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value){if(old!==value){this._attributeToProperty(name,value);}}/**
       * Initializes the local storage for property accessors.
       *
       * Provided as an override point for performing any setup work prior
       * to initializing the property accessor system.
       *
       * @protected
       */},{key:"_initializeProperties",value:function _initializeProperties(){this.__serializing=false;this.__dataCounter=0;this.__dataEnabled=false;this.__dataInitialized=false;this.__dataInvalid=false;// initialize data with prototype values saved when creating accessors
this.__data={};this.__dataPending=null;this.__dataOld=null;if(this.__dataProto){this._initializeProtoProperties(this.__dataProto);this.__dataProto=null;}// Capture instance properties; these will be set into accessors
// during first flush. Don't set them here, since we want
// these to overwrite defaults/constructor assignments
for(var p in this.__dataHasAccessor){if(this.hasOwnProperty(p)){this.__dataInstanceProps=this.__dataInstanceProps||{};this.__dataInstanceProps[p]=this[p];delete this[p];}}}/**
       * Called at instance time with bag of properties that were overwritten
       * by accessors on the prototype when accessors were created.
       *
       * The default implementation sets these properties back into the
       * setter at instance time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @protected
       */},{key:"_initializeProtoProperties",value:function _initializeProtoProperties(props){for(var p in props){this._setProperty(p,props[p]);}}/**
       * Called at ready time with bag of instance properties that overwrote
       * accessors when the element upgraded.
       *
       * The default implementation sets these properties back into the
       * setter at ready time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @protected
       */},{key:"_initializeInstanceProperties",value:function _initializeInstanceProperties(props){Object.assign(this,props);}/**
       * Ensures the element has the given attribute. If it does not,
       * assigns the given value to the attribute.
       *
       *
       * @param {string} attribute Name of attribute to ensure is set.
       * @param {string} value of the attribute.
       */},{key:"_ensureAttribute",value:function _ensureAttribute(attribute,value){if(!this.hasAttribute(attribute)){this._valueToNodeAttribute(this,value,attribute);}}/**
       * Deserializes an attribute to its associated property.
       *
       * This method calls the `_deserializeValue` method to convert the string to
       * a typed value.
       *
       * @param {string} attribute Name of attribute to deserialize.
       * @param {string} value of the attribute.
       * @param {*} type type to deserialize to.
       */},{key:"_attributeToProperty",value:function _attributeToProperty(attribute,value,type){// Don't deserialize back to property if currently reflecting
if(!this.__serializing){var property=caseMap.dashToCamelCase(attribute);this[property]=this._deserializeValue(value,type);}}/**
       * Serializes a property to its associated attribute.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect.
       * @param {*=} value Property value to refect.
       */},{key:"_propertyToAttribute",value:function _propertyToAttribute(property,attribute,value){this.__serializing=true;value=arguments.length<3?this[property]:value;this._valueToNodeAttribute(this,value,attribute||caseMap.camelToDashCase(property));this.__serializing=false;}/**
       * Sets a typed value to an HTML attribute on a node.
       *
       * This method calls the `_serializeValue` method to convert the typed
       * value to a string.  If the `_serializeValue` method returns `undefined`,
       * the attribute will be removed (this is the default for boolean
       * type `false`).
       *
       * @param {Element} node Element to set attribute to.
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       */},{key:"_valueToNodeAttribute",value:function _valueToNodeAttribute(node,value,attribute){var str=this._serializeValue(value);if(str===undefined){node.removeAttribute(attribute);}else{node.setAttribute(attribute,str);}}/**
       * Converts a typed JavaScript value to a string.
       *
       * This method is called by Polymer when setting JS property values to
       * HTML attributes.  Users may override this method on Polymer element
       * prototypes to provide serialization for custom types.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided property value.
       */},{key:"_serializeValue",value:function _serializeValue(value){/* eslint-disable no-fallthrough */switch(typeof value==="undefined"?"undefined":_typeof(value)){case'boolean':return value?'':undefined;case'object':if(value instanceof Date){return value.toString();}else if(value){try{return JSON.stringify(value);}catch(x){return'';}}default:return value!=null?value.toString():undefined;}}/**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called by Polymer when reading HTML attribute values to
       * JS properties.  Users may override this method on Polymer element
       * prototypes to provide deserialization for custom `type`s.  Note,
       * the `type` argument is the value of the `type` field provided in the
       * `properties` configuration object for a given property, and is
       * by convention the constructor for the type to deserialize.
       *
       * Note: The return value of `undefined` is used as a sentinel value to
       * indicate the attribute should be removed.
       *
       * @param {string} value Attribute value to deserialize.
       * @param {*} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       */},{key:"_deserializeValue",value:function _deserializeValue(value,type){/**
         * @type {*}
         */var outValue=void 0;switch(type){case Number:outValue=Number(value);break;case Boolean:outValue=value!==null;break;case Object:try{outValue=JSON.parse(value);}catch(x){// allow non-JSON literals like Strings and Numbers
}break;case Array:try{outValue=JSON.parse(value);}catch(x){outValue=null;console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+value);}break;case Date:outValue=new Date(value);break;case String:default:outValue=value;break;}return outValue;}/* eslint-enable no-fallthrough *//**
       * Creates a setter/getter pair for the named property with its own
       * local storage.  The getter returns the value in the local storage,
       * and the setter calls `_setProperty`, which updates the local storage
       * for the property and enqueues a `_propertiesChanged` callback.
       *
       * This method may be called on a prototype or an instance.  Calling
       * this method may overwrite a property value that already exists on
       * the prototype/instance by creating the accessor.  When calling on
       * a prototype, any overwritten values are saved in `__dataProto`,
       * and it is up to the subclasser to decide how/when to set those
       * properties back into the accessor.  When calling on an instance,
       * the overwritten value is set via `_setPendingProperty`, and the
       * user should call `_invalidateProperties` or `_flushProperties`
       * for the values to take effect.
       *
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created; the
       *   protected `_setProperty` function must be used to set the property
       * @protected
       */},{key:"_createPropertyAccessor",value:function _createPropertyAccessor(property,readOnly){if(!this.hasOwnProperty('__dataHasAccessor')){this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor);}if(!this.__dataHasAccessor[property]){this.__dataHasAccessor[property]=true;saveAccessorValue(this,property);Object.defineProperty(this,property,{get:function get(){return this.__data[property];},set:readOnly?function(){}:function(value){this._setProperty(property,value);}});}}/**
       * Returns true if this library created an accessor for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if an accessor was created
       */},{key:"_hasAccessor",value:function _hasAccessor(property){return this.__dataHasAccessor&&this.__dataHasAccessor[property];}/**
       * Updates the local storage for a property (via `_setPendingProperty`)
       * and enqueues a `_proeprtiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @protected
       */},{key:"_setProperty",value:function _setProperty(property,value){if(this._setPendingProperty(property,value)){this._invalidateProperties();}}/**
       * Updates the local storage for a property, records the previous value,
       * and adds it to the set of "pending changes" that will be passed to the
       * `_propertiesChanged` callback.  This method does not enqueue the
       * `_propertiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {boolean} Returns true if the property changed
       * @protected
       */},{key:"_setPendingProperty",value:function _setPendingProperty(property,value){var old=this.__data[property];if(this._shouldPropertyChange(property,value,old)){if(!this.__dataPending){this.__dataPending={};this.__dataOld={};}// Ensure old is captured from the last turn
if(!(property in this.__dataOld)){this.__dataOld[property]=old;}this.__data[property]=value;this.__dataPending[property]=value;return true;}}/**
       * Returns true if the specified property has a pending change.
       *
       * @param {string} prop Property name
       * @return {boolean} True if property has a pending change
       * @protected
       */},{key:"_isPropertyPending",value:function _isPropertyPending(prop){return this.__dataPending&&prop in this.__dataPending;}/**
       * Marks the properties as invalid, and enqueues an async
       * `_propertiesChanged` callback.
       *
       * @protected
       */},{key:"_invalidateProperties",value:function _invalidateProperties(){var _this3=this;if(!this.__dataInvalid&&this.__dataInitialized){this.__dataInvalid=true;microtask.run(function(){if(_this3.__dataInvalid){_this3.__dataInvalid=false;_this3._flushProperties();}});}}/**
       * Call to enable property accessor processing. Before this method is
       * called accessor values will be set but side effects are
       * queued. When called, any pending side effects occur immediately.
       * For elements, generally `connectedCallback` is a normal spot to do so.
       * It is safe to call this method multiple times as it only turns on
       * property accessors once.
       */},{key:"_enableProperties",value:function _enableProperties(){if(!this.__dataEnabled){this.__dataEnabled=true;if(this.__dataInstanceProps){this._initializeInstanceProperties(this.__dataInstanceProps);this.__dataInstanceProps=null;}this.ready();}}/**
       * Calls the `_propertiesChanged` callback with the current set of
       * pending changes (and old values recorded when pending changes were
       * set), and resets the pending set of changes. Generally, this method
       * should not be called in user code.
       *
       *
       * @protected
       */},{key:"_flushProperties",value:function _flushProperties(){if(this.__dataPending){var changedProps=this.__dataPending;this.__dataPending=null;this.__dataCounter++;this._propertiesChanged(this.__data,changedProps,this.__dataOld);this.__dataCounter--;}}/**
       * Lifecycle callback called the first time properties are being flushed.
       * Prior to `ready`, all property sets through accessors are queued and
       * their effects are flushed after this method returns.
       *
       * Users may override this function to implement behavior that is
       * dependent on the element having its properties initialized, e.g.
       * from defaults (initialized from `constructor`, `_initializeProperties`),
       * `attributeChangedCallback`, or values propagated from host e.g. via
       * bindings.  `super.ready()` must be called to ensure the data system
       * becomes enabled.
       *
       * @public
       */},{key:"ready",value:function ready(){this.__dataInitialized=true;// Run normal flush
this._flushProperties();}/**
       * Callback called when any properties with accessors created via
       * `_createPropertyAccessor` have been set.
       *
       * @param {Object} currentProps Bag of all current accessor values
       * @param {Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @protected
       */},{key:"_propertiesChanged",value:function _propertiesChanged(currentProps,changedProps,oldProps){}// eslint-disable-line no-unused-vars
/**
       * Method called to determine whether a property value should be
       * considered as a change and cause the `_propertiesChanged` callback
       * to be enqueued.
       *
       * The default implementation returns `true` for primitive types if a
       * strict equality check fails, and returns `true` for all Object/Arrays.
       * The method always returns false for `NaN`.
       *
       * Override this method to e.g. provide stricter checking for
       * Objects/Arrays when using immutable patterns.
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       *   and enqueue a `_proeprtiesChanged` callback
       * @protected
       */},{key:"_shouldPropertyChange",value:function _shouldPropertyChange(property,value,old){return(// Strict equality check
old!==value&&(// This ensures (old==NaN, value==NaN) always returns false
old===old||value===value));}}]);return PropertyAccessors;}(superClass);return PropertyAccessors;});})();(function(){'use strict';// 1.x backwards-compatible auto-wrapper for template type extensions
// This is a clear layering violation and gives favored-nation status to
// dom-if and dom-repeat templates.  This is a conceit we're choosing to keep
// a.) to ease 1.x backwards-compatibility due to loss of `is`, and
// b.) to maintain if/repeat capability in parser-constrained elements
//     (e.g. table, select) in lieu of native CE type extensions without
//     massive new invention in this space (e.g. directive system)
var templateExtensions={'dom-if':true,'dom-repeat':true};function wrapTemplateExtension(node){var is=node.getAttribute('is');if(is&&templateExtensions[is]){var t=node;t.removeAttribute('is');node=t.ownerDocument.createElement(is);t.parentNode.replaceChild(node,t);node.appendChild(t);while(t.attributes.length){node.setAttribute(t.attributes[0].name,t.attributes[0].value);t.removeAttribute(t.attributes[0].name);}}return node;}function findTemplateNode(root,nodeInfo){// recursively ascend tree until we hit root
var parent=nodeInfo.parentInfo&&findTemplateNode(root,nodeInfo.parentInfo);// unwind the stack, returning the indexed node at each level
if(parent){// note: marginally faster than indexing via childNodes
// (http://jsperf.com/childnodes-lookup)
for(var n=parent.firstChild,i=0;n;n=n.nextSibling){if(nodeInfo.parentIndex===i++){return n;}}}else{return root;}}// construct `$` map (from id annotations)
function applyIdToMap(inst,map,node,nodeInfo){if(nodeInfo.id){map[nodeInfo.id]=node;}}// install event listeners (from event annotations)
function applyEventListener(inst,node,nodeInfo){if(nodeInfo.events&&nodeInfo.events.length){for(var j=0,e$=nodeInfo.events,e;j<e$.length&&(e=e$[j]);j++){inst._addMethodEventListenerToNode(node,e.name,e.value,inst);}}}// push configuration references at configure time
function applyTemplateContent(inst,node,nodeInfo){if(nodeInfo.templateInfo){node._templateInfo=nodeInfo.templateInfo;}}function createNodeEventHandler(context,eventName,methodName){// Instances can optionally have a _methodHost which allows redirecting where
// to find methods. Currently used by `templatize`.
context=context._methodHost||context;var handler=function handler(e){if(context[methodName]){context[methodName](e,e.detail);}else{console.warn('listener method `'+methodName+'` not defined');}};return handler;}/**
   * Element mixin that provides basic template parsing and stamping, including
   * the following template-related features for stamped templates:
   *
   * - Declarative event listeners (`on-eventname="listener"`)
   * - Map of node id's to stamped node instances (`this.$.id`)
   * - Nested template content caching/removal and re-installation (performance
   *   optimization)
   *
   * @polymerMixin
   * @memberof Polymer
   * @summary Element class mixin that provides basic template parsing and stamping
   */Polymer.TemplateStamp=Polymer.dedupingMixin(function(superClass){/**
     * @polymerMixinClass
     * @implements {Polymer_TemplateStamp}
     */var TemplateStamp=function(_superClass2){_inherits(TemplateStamp,_superClass2);function TemplateStamp(){_classCallCheck(this,TemplateStamp);return _possibleConstructorReturn(this,(TemplateStamp.__proto__||Object.getPrototypeOf(TemplateStamp)).apply(this,arguments));}_createClass(TemplateStamp,[{key:"_stampTemplate",/**
       * Clones the provided template content and returns a document fragment
       * containing the cloned dom.
       *
       * The template is parsed (once and memoized) using this library's
       * template parsing features, and provides the following value-added
       * features:
       * * Adds declarative event listeners for `on-event="handler"` attributes
       * * Generates an "id map" for all nodes with id's under `$` on returned
       *   document fragment
       * * Passes template info including `content` back to templates as
       *   `_templateInfo` (a performance optimization to avoid deep template
       *   cloning)
       *
       * Note that the memoized template parsing process is destructive to the
       * template: attributes for bindings and declarative event listeners are
       * removed after being noted in notes, and any nested `<template>.content`
       * is removed and stored in notes as well.
       *
       * @param {HTMLTemplateElement} template Template to stamp
       * @return {DocumentFragment} Cloned template content
       */value:function _stampTemplate(template){// Polyfill support: bootstrap the template if it has not already been
if(template&&!template.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate){HTMLTemplateElement.decorate(template);}var templateInfo=this.constructor._parseTemplate(template);var nodeInfo=templateInfo.nodeInfoList;var content=templateInfo.content||template.content;var dom=document.importNode(content,true);// NOTE: ShadyDom optimization indicating there is an insertion point
dom.__noInsertionPoint=!templateInfo.hasInsertionPoint;var nodes=dom.nodeList=new Array(nodeInfo.length);dom.$={};for(var i=0,l=nodeInfo.length,info;i<l&&(info=nodeInfo[i]);i++){var node=nodes[i]=findTemplateNode(dom,info);applyIdToMap(this,dom.$,node,info);applyTemplateContent(this,node,info);applyEventListener(this,node,info);}return dom;}/**
       * Adds an event listener by method name for the event provided.
       *
       * This method generates a handler function that looks up the method
       * name at handling time.
       *
       * @param {Node} node Node to add listener on
       * @param {string} eventName Name of event
       * @param {string} methodName Name of method
       * @param {*=} context Context the method will be called on (defaults
       *   to `node`)
       * @return {Function} Generated handler function
       */},{key:"_addMethodEventListenerToNode",value:function _addMethodEventListenerToNode(node,eventName,methodName,context){context=context||node;var handler=createNodeEventHandler(context,eventName,methodName);this._addEventListenerToNode(node,eventName,handler);return handler;}/**
       * Override point for adding custom or simulated event handling.
       *
       * @param {Node} node Node to add event listener to
       * @param {string} eventName Name of event
       * @param {Function} handler Listener function to add
       */},{key:"_addEventListenerToNode",value:function _addEventListenerToNode(node,eventName,handler){node.addEventListener(eventName,handler);}/**
       * Override point for adding custom or simulated event handling.
       *
       * @param {Node} node Node to remove event listener from
       * @param {string} eventName Name of event
       * @param {Function} handler Listener function to remove
       */},{key:"_removeEventListenerFromNode",value:function _removeEventListenerFromNode(node,eventName,handler){node.removeEventListener(eventName,handler);}}],[{key:"_parseTemplate",/**
       * Scans a template to produce template metadata.
       *
       * Template-specific metadata are stored in the object returned, and node-
       * specific metadata are stored in objects in its flattened `nodeInfoList`
       * array.  Only nodes in the template that were parsed as nodes of
       * interest contain an object in `nodeInfoList`.  Each `nodeInfo` object
       * contains an `index` (`childNodes` index in parent) and optionally
       * `parent`, which points to node info of its parent (including its index).
       *
       * The template metadata object returned from this method has the following
       * structure (many fields optional):
       *
       * ```js
       *   {
       *     // Flattened list of node metadata (for nodes that generated metadata)
       *     nodeInfoList: [
       *       {
       *         // `id` attribute for any nodes with id's for generating `$` map
       *         id: {string},
       *         // `on-event="handler"` metadata
       *         events: [
       *           {
       *             name: {string},   // event name
       *             value: {string},  // handler method name
       *           }, ...
       *         ],
       *         // Notes when the template contained a `<slot>` for shady DOM
       *         // optimization purposes
       *         hasInsertionPoint: {boolean},
       *         // For nested `<template>`` nodes, nested template metadata
       *         templateInfo: {object}, // nested template metadata
       *         // Metadata to allow efficient retrieval of instanced node
       *         // corresponding to this metadata
       *         parentInfo: {number},   // reference to parent nodeInfo>
       *         parentIndex: {number},  // index in parent's `childNodes` collection
       *         infoIndex: {number},    // index of this `nodeInfo` in `templateInfo.nodeInfoList`
       *       },
       *       ...
       *     ],
       *     // When true, the template had the `strip-whitespace` attribute
       *     // or was nested in a template with that setting
       *     stripWhitespace: {boolean},
       *     // For nested templates, nested template content is moved into
       *     // a document fragment stored here; this is an optimization to
       *     // avoid the cost of nested template cloning
       *     content: {DocumentFragment}
       *   }
       * ```
       *
       * This method kicks off a recursive treewalk as follows:
       *
       * ```
       *    _parseTemplate <---------------------+
       *      _parseTemplateContent              |
       *        _parseTemplateNode  <------------|--+
       *          _parseTemplateNestedTemplate --+  |
       *          _parseTemplateChildNodes ---------+
       *          _parseTemplateNodeAttributes
       *            _parseTemplateNodeAttribute
       *
       * ```
       *
       * These methods may be overridden to add custom metadata about templates
       * to either `templateInfo` or `nodeInfo`.
       *
       * Note that this method may be destructive to the template, in that
       * e.g. event annotations may be removed after being noted in the
       * template metadata.
       *
       * @param {HTMLTemplateElement} template Template to parse
       * @param {Object=} outerTemplateInfo Template metadata from the outer
       *   template, for parsing nested templates
       * @return {Object} Parsed template metadata
       */value:function _parseTemplate(template,outerTemplateInfo){// since a template may be re-used, memo-ize metadata
if(!template._templateInfo){var templateInfo=template._templateInfo={};templateInfo.nodeInfoList=[];templateInfo.stripWhiteSpace=outerTemplateInfo&&outerTemplateInfo.stripWhiteSpace||template.hasAttribute('strip-whitespace');this._parseTemplateContent(template,templateInfo,{parent:null});}return template._templateInfo;}},{key:"_parseTemplateContent",value:function _parseTemplateContent(template,templateInfo,nodeInfo){return this._parseTemplateNode(template.content,templateInfo,nodeInfo);}/**
       * Parses template node and adds template and node metadata based on
       * the current node, and its `childNodes` and `attributes`.
       *
       * This method may be overridden to add custom node or template specific
       * metadata based on this node.
       *
       * @param {Node} node Node to parse
       * @param {Object} templateInfo Template metadata for current template
       * @param {Object} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */},{key:"_parseTemplateNode",value:function _parseTemplateNode(node,templateInfo,nodeInfo){var noted=void 0;if(node.localName=='template'&&!node.hasAttribute('preserve-content')){noted=this._parseTemplateNestedTemplate(node,templateInfo,nodeInfo)||noted;}else if(node.localName==='slot'){// For ShadyDom optimization, indicating there is an insertion point
templateInfo.hasInsertionPoint=true;}if(node.firstChild){noted=this._parseTemplateChildNodes(node,templateInfo,nodeInfo)||noted;}if(node.hasAttributes&&node.hasAttributes()){noted=this._parseTemplateNodeAttributes(node,templateInfo,nodeInfo)||noted;}return noted;}/**
       * Parses template child nodes for the given root node.
       *
       * This method also wraps whitelisted legacy template extensions
       * (`is="dom-if"` and `is="dom-repeat"`) with their equivalent element
       * wrappers, collapses text nodes, and strips whitespace from the template
       * if the `templateInfo.stripWhitespace` setting was provided.
       *
       * @param {Node} root Root node whose `childNodes` will be parsed
       * @param {Object} templateInfo Template metadata for current template
       * @param {Object} nodeInfo Node metadata for current template.
       */},{key:"_parseTemplateChildNodes",value:function _parseTemplateChildNodes(root,templateInfo,nodeInfo){for(var node=root.firstChild,parentIndex=0,next;node;node=next){// Wrap templates
if(node.localName=='template'){node=wrapTemplateExtension(node);}// collapse adjacent textNodes: fixes an IE issue that can cause
// text nodes to be inexplicably split =(
// note that root.normalize() should work but does not so we do this
// manually.
next=node.nextSibling;if(node.nodeType===Node.TEXT_NODE){var n=next;while(n&&n.nodeType===Node.TEXT_NODE){node.textContent+=n.textContent;next=n.nextSibling;root.removeChild(n);n=next;}// optionally strip whitespace
if(templateInfo.stripWhiteSpace&&!node.textContent.trim()){root.removeChild(node);continue;}}var childInfo={parentIndex:parentIndex,parentInfo:nodeInfo};if(this._parseTemplateNode(node,templateInfo,childInfo)){childInfo.infoIndex=templateInfo.nodeInfoList.push(childInfo)-1;}// Increment if not removed
if(node.parentNode){parentIndex++;}}}/**
       * Parses template content for the given nested `<template>`.
       *
       * Nested template info is stored as `templateInfo` in the current node's
       * `nodeInfo`. `template.content` is removed and stored in `templateInfo`.
       * It will then be the responsibility of the host to set it back to the
       * template and for users stamping nested templates to use the
       * `_contentForTemplate` method to retrieve the content for this template
       * (an optimization to avoid the cost of cloning nested template content).
       *
       * @param {HTMLTemplateElement} node Node to parse (a <template>)
       * @param {Object} outerTemplateInfo Template metadata for current template
       *   that includes the template `node`
       * @param {Object} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */},{key:"_parseTemplateNestedTemplate",value:function _parseTemplateNestedTemplate(node,outerTemplateInfo,nodeInfo){var templateInfo=this._parseTemplate(node,outerTemplateInfo);var content=templateInfo.content=node.content.ownerDocument.createDocumentFragment();content.appendChild(node.content);nodeInfo.templateInfo=templateInfo;return true;}/**
       * Parses template node attributes and adds node metadata to `nodeInfo`
       * for nodes of interest.
       *
       * @param {Node} node Node to parse
       * @param {Object} templateInfo Template metadata for current template
       * @param {Object} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */},{key:"_parseTemplateNodeAttributes",value:function _parseTemplateNodeAttributes(node,templateInfo,nodeInfo){// Make copy of original attribute list, since the order may change
// as attributes are added and removed
var noted=void 0;var attrs=Array.from(node.attributes);for(var i=attrs.length-1,a;a=attrs[i];i--){noted=this._parseTemplateNodeAttribute(node,templateInfo,nodeInfo,a.name,a.value)||noted;}return noted;}/**
       * Parses a single template node attribute and adds node metadata to
       * `nodeInfo` for attributes of interest.
       *
       * This implementation adds metadata for `on-event="handler"` attributes
       * and `id` attributes.
       *
       * @param {Node} node Node to parse
       * @param {Object} templateInfo Template metadata for current template
       * @param {Object} nodeInfo Node metadata for current template.
       * @param {string} name Attribute name
       * @param {*} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */},{key:"_parseTemplateNodeAttribute",value:function _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){// events (on-*)
if(name.slice(0,3)==='on-'){node.removeAttribute(name);nodeInfo.events=nodeInfo.events||[];nodeInfo.events.push({name:name.slice(3),value:value});return true;}// static id
else if(name==='id'){nodeInfo.id=value;return true;}}/**
       * Returns the `content` document fragment for a given template.
       *
       * For nested templates, Polymer performs an optimization to cache nested
       * template content to avoid the cost of cloning deeply nested templates.
       * This method retrieves the cached content for a given template.
       *
       * @param {HTMLTemplateElement} template Template to retrieve `content` for
       * @return {DocumentFragment} Content fragment
       */},{key:"_contentForTemplate",value:function _contentForTemplate(template){var templateInfo=template.__templateInfo;return templateInfo&&templateInfo.content||template.content;}}]);return TemplateStamp;}(superClass);return TemplateStamp;});})();(function(){'use strict';/** @const {Object} */var CaseMap=Polymer.CaseMap;// Monotonically increasing unique ID used for de-duping effects triggered
// from multiple properties in the same turn
var dedupeId=0;// Property effect types; effects are stored on the prototype using these keys
var TYPES={COMPUTE:'__computeEffects',REFLECT:'__reflectEffects',NOTIFY:'__notifyEffects',PROPAGATE:'__propagateEffects',OBSERVE:'__observeEffects',READ_ONLY:'__readOnly'};/**
   * Ensures that the model has an own-property map of effects for the given type.
   * The model may be a prototype or an instance.
   *
   * Property effects are stored as arrays of effects by property in a map,
   * by named type on the model. e.g.
   *
   *   __computeEffects: {
   *     foo: [ ... ],
   *     bar: [ ... ]
   *   }
   *
   * If the model does not yet have an effect map for the type, one is created
   * and returned.  If it does, but it is not an own property (i.e. the
   * prototype had effects), the the map is deeply cloned and the copy is
   * set on the model and returned, ready for new effects to be added.
   *
   * @param {Object} model Prototype or instance
   * @param {string} type Property effect type
   * @return {Object} The own-property map of effects for the given type
   * @private
   */function ensureOwnEffectMap(model,type){var effects=model[type];if(!effects){effects=model[type]={};}else if(!model.hasOwnProperty(type)){effects=model[type]=Object.create(model[type]);for(var p in effects){var protoFx=effects[p];var instFx=effects[p]=Array(protoFx.length);for(var i=0;i<protoFx.length;i++){instFx[i]=protoFx[i];}}}return effects;}// -- effects ----------------------------------------------
/**
   * Runs all effects of a given type for the given set of property changes
   * on an instance.
   *
   * @param {Object} inst The instance with effects to run
   * @param {Object} effects Object map of property-to-Array of effects
   * @param {Object} props Bag of current property changes
   * @param {Object=} oldProps Bag of previous values for changed properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */function runEffects(inst,effects,props,oldProps,hasPaths,extraArgs){if(effects){var ran=false;var id=dedupeId++;for(var prop in props){if(runEffectsForProperty(inst,effects,id,prop,props,oldProps,hasPaths,extraArgs)){ran=true;}}return ran;}return false;}/**
   * Runs a list of effects for a given property.
   *
   * @param {Object} inst The instance with effects to run
   * @param {Object} effects Object map of property-to-Array of effects
   * @param {number} dedupeId Counter used for de-duping effects
   * @param {string} prop Name of changed property
   * @param {*} props Changed properties
   * @param {*} oldProps Old properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */function runEffectsForProperty(inst,effects,dedupeId,prop,props,oldProps,hasPaths,extraArgs){var ran=false;var rootProperty=hasPaths?Polymer.Path.root(prop):prop;var fxs=effects[rootProperty];if(fxs){for(var i=0,l=fxs.length,fx;i<l&&(fx=fxs[i]);i++){if((!fx.info||fx.info.lastRun!==dedupeId)&&(!hasPaths||pathMatchesTrigger(prop,fx.trigger))){if(fx.info){fx.info.lastRun=dedupeId;}fx.fn(inst,prop,props,oldProps,fx.info,hasPaths,extraArgs);ran=true;}}}return ran;}/**
   * Determines whether a property/path that has changed matches the trigger
   * criteria for an effect.  A trigger is a descriptor with the following
   * structure, which matches the descriptors returned from `parseArg`.
   * e.g. for `foo.bar.*`:
   * ```
   * trigger: {
   *   name: 'a.b',
   *   structured: true,
   *   wildcard: true
   * }
   * ```
   * If no trigger is given, the path is deemed to match.
   *
   * @param {string} path Path or property that changed
   * @param {Object} trigger Descriptor
   * @return {boolean} Whether the path matched the trigger
   */function pathMatchesTrigger(path,trigger){if(trigger){var triggerPath=trigger.name;return triggerPath==path||trigger.structured&&Polymer.Path.isAncestor(triggerPath,path)||trigger.wildcard&&Polymer.Path.isDescendant(triggerPath,path);}else{return true;}}/**
   * Implements the "observer" effect.
   *
   * Calls the method with `info.methodName` on the instance, passing the
   * new and old values.
   *
   * @param {Object} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {Object} info Effect metadata
   * @private
   */function runObserverEffect(inst,property,props,oldProps,info){var fn=inst[info.methodName];var changedProp=info.property;if(fn){fn.call(inst,inst.__data[changedProp],oldProps[changedProp]);}else if(!info.dynamicFn){console.warn('observer method `'+info.methodName+'` not defined');}}/**
   * Runs "notify" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * will dispatch path notification events in the case that the property
   * changed was a path and the root property for that path didn't have a
   * "notify" effect.  This is to maintain 1.0 behavior that did not require
   * `notify: true` to ensure object sub-property notifications were
   * sent.
   *
   * @param {Element} inst The instance with effects to run
   * @param {Object} notifyProps Bag of properties to notify
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @private
   */function runNotifyEffects(inst,notifyProps,props,oldProps,hasPaths){// Notify
var fxs=inst.__notifyEffects;var notified=void 0;var id=dedupeId++;// Try normal notify effects; if none, fall back to try path notification
for(var prop in notifyProps){if(notifyProps[prop]){if(fxs&&runEffectsForProperty(inst,fxs,id,prop,props,oldProps,hasPaths)){notified=true;}else if(hasPaths&&notifyPath(inst,prop,props)){notified=true;}}}// Flush host if we actually notified and host was batching
// And the host has already initialized clients; this prevents
// an issue with a host observing data changes before clients are ready.
var host=void 0;if(notified&&(host=inst.__dataHost)&&host._invalidateProperties){host._invalidateProperties();}}/**
   * Dispatches {property}-changed events with path information in the detail
   * object to indicate a sub-path of the property was changed.
   *
   * @param {Element} inst The element from which to fire the event
   * @param {string} path The path that was changed
   * @param {Object} props Bag of current property changes
   * @return {boolean} Returns true if the path was notified
   * @private
   */function notifyPath(inst,path,props){var rootProperty=Polymer.Path.root(path);if(rootProperty!==path){var eventName=Polymer.CaseMap.camelToDashCase(rootProperty)+'-changed';dispatchNotifyEvent(inst,eventName,props[path],path);return true;}}/**
   * Dispatches {property}-changed events to indicate a property (or path)
   * changed.
   *
   * @param {Element} inst The element from which to fire the event
   * @param {string} eventName The name of the event to send ('{property}-changed')
   * @param {*} value The value of the changed property
   * @param {string | null | undefined} path If a sub-path of this property changed, the path
   *   that changed (optional).
   * @private
   */function dispatchNotifyEvent(inst,eventName,value,path){var detail={value:value,queueProperty:true};if(path){detail.path=path;}inst.dispatchEvent(new CustomEvent(eventName,{detail:detail}));}/**
   * Implements the "notify" effect.
   *
   * Dispatches a non-bubbling event named `info.eventName` on the instance
   * with a detail object containing the new `value`.
   *
   * @param {Element} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {Object} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @private
   */function runNotifyEffect(inst,property,props,oldProps,info,hasPaths){var rootProperty=hasPaths?Polymer.Path.root(property):property;var path=rootProperty!=property?property:null;var value=path?Polymer.Path.get(inst,path):inst.__data[property];if(path&&value===undefined){value=props[property];// specifically for .splices
}dispatchNotifyEvent(inst,info.eventName,value,path);}/**
   * Handler function for 2-way notification events. Receives context
   * information captured in the `addNotifyListener` closure from the
   * `__notifyListeners` metadata.
   *
   * Sets the value of the notified property to the host property or path.  If
   * the event contained path information, translate that path to the host
   * scope's name for that path first.
   *
   * @param {Event} event Notification event (e.g. '<property>-changed')
   * @param {Object} inst Host element instance handling the notification event
   * @param {string} fromProp Child element property that was bound
   * @param {string} toPath Host property/path that was bound
   * @param {boolean} negate Whether the binding was negated
   * @private
   */function handleNotification(event,inst,fromProp,toPath,negate){var value=void 0;var detail=event.detail;var fromPath=detail&&detail.path;if(fromPath){toPath=Polymer.Path.translate(fromProp,toPath,fromPath);value=detail&&detail.value;}else{value=event.target[fromProp];}value=negate?!value:value;if(!inst.__readOnly||!inst.__readOnly[toPath]){if(inst._setPendingPropertyOrPath(toPath,value,true,Boolean(fromPath))&&(!detail||!detail.queueProperty)){inst._invalidateProperties();}}}/**
   * Implements the "reflect" effect.
   *
   * Sets the attribute named `info.attrName` to the given property value.
   *
   * @param {Object} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {Object} info Effect metadata
   * @private
   */function runReflectEffect(inst,property,props,oldProps,info){var value=inst.__data[property];if(Polymer.sanitizeDOMValue){value=Polymer.sanitizeDOMValue(value,info.attrName,'attribute',inst);}inst._propertyToAttribute(property,info.attrName,value);}/**
   * Runs "computed" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * continues to run computed effects based on the output of each pass until
   * there are no more newly computed properties.  This ensures that all
   * properties that will be computed by the initial set of changes are
   * computed before other effects (binding propagation, observers, and notify)
   * run.
   *
   * @param {Element} inst The instance the effect will be run on
   * @param {Object} changedProps Bag of changed properties
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @private
   */function runComputedEffects(inst,changedProps,oldProps,hasPaths){var computeEffects=inst.__computeEffects;if(computeEffects){var inputProps=changedProps;while(runEffects(inst,computeEffects,inputProps,oldProps,hasPaths)){Object.assign(oldProps,inst.__dataOld);Object.assign(changedProps,inst.__dataPending);inputProps=inst.__dataPending;inst.__dataPending=null;}}}/**
   * Implements the "computed property" effect by running the method with the
   * values of the arguments specified in the `info` object and setting the
   * return value to the computed property specified.
   *
   * @param {Object} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {Object} info Effect metadata
   * @private
   */function runComputedEffect(inst,property,props,oldProps,info){var result=runMethodEffect(inst,property,props,oldProps,info);var computedProp=info.methodInfo;if(inst.__dataHasAccessor&&inst.__dataHasAccessor[computedProp]){inst._setPendingProperty(computedProp,result,true);}else{inst[computedProp]=result;}}/**
   * Computes path changes based on path links set up using the `linkPaths`
   * API.
   *
   * @param {Element} inst The instance whose props are changing
   * @param {string} path Path that has changed
   * @param {*} value Value of changed path
   * @private
   */function computeLinkedPaths(inst,path,value){var links=inst.__dataLinkedPaths;if(links){var link=void 0;for(var a in links){var b=links[a];if(Polymer.Path.isDescendant(a,path)){link=Polymer.Path.translate(a,b,path);inst._setPendingPropertyOrPath(link,value,true,true);}else if(Polymer.Path.isDescendant(b,path)){link=Polymer.Path.translate(b,a,path);inst._setPendingPropertyOrPath(link,value,true,true);}}}}// -- bindings ----------------------------------------------
/**
   * Adds binding metadata to the current `nodeInfo`, and binding effects
   * for all part dependencies to `templateInfo`.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {Object} templateInfo Template metadata for current template
   * @param {Object} nodeInfo Node metadata for current template node
   * @param {string} kind Binding kind, either 'property', 'attribute', or 'text'
   * @param {string} target Target property name
   * @param {Array<Object>} parts Array of binding part metadata
   * @param {string} literal Literal text surrounding binding parts (specified
   *   only for 'property' bindings, since these must be initialized as part
   *   of boot-up)
   * @private
   */function addBinding(constructor,templateInfo,nodeInfo,kind,target,parts,literal){// Create binding metadata and add to nodeInfo
nodeInfo.bindings=nodeInfo.bindings||[];var binding={kind:kind,target:target,parts:parts,literal:literal,isCompound:parts.length!==1};nodeInfo.bindings.push(binding);// Add listener info to binding metadata
if(shouldAddListener(binding)){var _binding$parts$=binding.parts[0],event=_binding$parts$.event,negate=_binding$parts$.negate;binding.listenerEvent=event||CaseMap.camelToDashCase(target)+'-changed';binding.listenerNegate=negate;}// Add "propagate" property effects to templateInfo
var index=templateInfo.nodeInfoList.length;for(var i=0;i<binding.parts.length;i++){var part=binding.parts[i];part.compoundIndex=i;addEffectForBindingPart(constructor,templateInfo,binding,part,index);}}/**
   * Adds property effects to the given `templateInfo` for the given binding
   * part.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {Object} templateInfo Template metadata for current template
   * @param {Object} binding Binding metadata
   * @param {Object} part Binding part metadata
   * @param {number} index Index into `nodeInfoList` for this node
   */function addEffectForBindingPart(constructor,templateInfo,binding,part,index){if(!part.literal){if(binding.kind==='attribute'&&binding.target[0]==='-'){console.warn('Cannot set attribute '+binding.target+' because "-" is not a valid attribute starting character');}else{var dependencies=part.dependencies;var info={index:index,binding:binding,part:part,evaluator:constructor};for(var j=0;j<dependencies.length;j++){var trigger=dependencies[j];if(typeof trigger=='string'){trigger=parseArg(trigger);trigger.wildcard=true;}constructor._addTemplatePropertyEffect(templateInfo,trigger.rootProperty,{fn:runBindingEffect,info:info,trigger:trigger});}}}}/**
   * Implements the "binding" (property/path binding) effect.
   *
   * Note that binding syntax is overridable via `_parseBindings` and
   * `_evaluateBindings`.  This method will call `_evaluateBinding` for any
   * non-literal parts returned from `_parseBindings`.  However,
   * there is no support for _path_ bindings via custom binding parts,
   * as this is specific to Polymer's path binding syntax.
   *
   * @param {Element} inst The instance the effect will be run on
   * @param {string} path Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {Object} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @param {Array} nodeList List of nodes associated with `nodeInfoList` template
   *   metadata
   * @private
   */function runBindingEffect(inst,path,props,oldProps,info,hasPaths,nodeList){var node=nodeList[info.index];var binding=info.binding;var part=info.part;// Subpath notification: transform path and set to client
// e.g.: foo="{{obj.sub}}", path: 'obj.sub.prop', set 'foo.prop'=obj.sub.prop
if(hasPaths&&part.source&&path.length>part.source.length&&binding.kind=='property'&&!binding.isCompound&&node.__dataHasAccessor&&node.__dataHasAccessor[binding.target]){var value=props[path];path=Polymer.Path.translate(part.source,binding.target,path);if(node._setPendingPropertyOrPath(path,value,false,true)){inst._enqueueClient(node);}}else{var _value=info.evaluator._evaluateBinding(inst,part,path,props,oldProps,hasPaths);// Propagate value to child
applyBindingValue(inst,node,binding,part,_value);}}/**
   * Sets the value for an "binding" (binding) effect to a node,
   * either as a property or attribute.
   *
   * @param {Object} inst The instance owning the binding effect
   * @param {Node} node Target node for binding
   * @param {Object} binding Binding metadata
   * @param {Object} part Binding part metadata
   * @param {*} value Value to set
   * @private
   */function applyBindingValue(inst,node,binding,part,value){value=computeBindingValue(node,value,binding,part);if(Polymer.sanitizeDOMValue){value=Polymer.sanitizeDOMValue(value,binding.target,binding.kind,node);}if(binding.kind=='attribute'){// Attribute binding
inst._valueToNodeAttribute(node,value,binding.target);}else{// Property binding
var prop=binding.target;if(node.__dataHasAccessor&&node.__dataHasAccessor[prop]){if(!node.__readOnly||!node.__readOnly[prop]){if(node._setPendingProperty(prop,value)){inst._enqueueClient(node);}}}else{inst._setUnmanagedPropertyToNode(node,prop,value);}}}/**
   * Transforms an "binding" effect value based on compound & negation
   * effect metadata, as well as handling for special-case properties
   *
   * @param {Node} node Node the value will be set to
   * @param {*} value Value to set
   * @param {Object} binding Binding metadata
   * @param {Object} part Binding part metadata
   * @return {*} Transformed value to set
   * @private
   */function computeBindingValue(node,value,binding,part){if(binding.isCompound){var storage=node.__dataCompoundStorage[binding.target];storage[part.compoundIndex]=value;value=storage.join('');}if(binding.kind!=='attribute'){// Some browsers serialize `undefined` to `"undefined"`
if(binding.target==='textContent'||node.localName=='input'&&binding.target=='value'){value=value==undefined?'':value;}}return value;}/**
   * Returns true if a binding's metadata meets all the requirements to allow
   * 2-way binding, and therefore a `<property>-changed` event listener should be
   * added:
   * - used curly braces
   * - is a property (not attribute) binding
   * - is not a textContent binding
   * - is not compound
   *
   * @param {Object} binding Binding metadata
   * @return {boolean} True if 2-way listener should be added
   * @private
   */function shouldAddListener(binding){return binding.target&&binding.kind!='attribute'&&binding.kind!='text'&&!binding.isCompound&&binding.parts[0].mode==='{';}/**
   * Setup compound binding storage structures, notify listeners, and dataHost
   * references onto the bound nodeList.
   *
   * @param {Object} inst Instance that bas been previously bound
   * @param {Object} templateInfo Template metadata
   * @private
   */function setupBindings(inst,templateInfo){// Setup compound storage, dataHost, and notify listeners
var nodeList=templateInfo.nodeList,nodeInfoList=templateInfo.nodeInfoList;if(nodeInfoList.length){for(var i=0;i<nodeInfoList.length;i++){var info=nodeInfoList[i];var node=nodeList[i];var bindings=info.bindings;if(bindings){for(var _i2=0;_i2<bindings.length;_i2++){var binding=bindings[_i2];setupCompoundStorage(node,binding);addNotifyListener(node,inst,binding);}}node.__dataHost=inst;}}}/**
   * Initializes `__dataCompoundStorage` local storage on a bound node with
   * initial literal data for compound bindings, and sets the joined
   * literal parts to the bound property.
   *
   * When changes to compound parts occur, they are first set into the compound
   * storage array for that property, and then the array is joined to result in
   * the final value set to the property/attribute.
   *
   * @param {Node} node Bound node to initialize
   * @param {Object} binding Binding metadata
   * @private
   */function setupCompoundStorage(node,binding){if(binding.isCompound){// Create compound storage map
var storage=node.__dataCompoundStorage||(node.__dataCompoundStorage={});var parts=binding.parts;// Copy literals from parts into storage for this binding
var literals=new Array(parts.length);for(var j=0;j<parts.length;j++){literals[j]=parts[j].literal;}var target=binding.target;storage[target]=literals;// Configure properties with their literal parts
if(binding.literal&&binding.kind=='property'){node[target]=binding.literal;}}}/**
   * Adds a 2-way binding notification event listener to the node specified
   *
   * @param {Object} node Child element to add listener to
   * @param {Object} inst Host element instance to handle notification event
   * @param {Object} binding Binding metadata
   * @private
   */function addNotifyListener(node,inst,binding){if(binding.listenerEvent){var part=binding.parts[0];node.addEventListener(binding.listenerEvent,function(e){handleNotification(e,inst,binding.target,part.source,part.negate);});}}// -- for method-based effects (complexObserver & computed) --------------
/**
   * Adds property effects for each argument in the method signature (and
   * optionally, for the method name if `dynamic` is true) that calls the
   * provided effect function.
   *
   * @param {Element | Object} model Prototype or instance
   * @param {Object} sig Method signature metadata
   * @param {string} type Type of property effect to add
   * @param {Function} effectFn Function to run when arguments change
   * @param {*=} methodInfo Effect-specific information to be included in
   *   method effect metadata
   * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
   *   method names should be included as a dependency to the effect. Note,
   *   defaults to true if the signature is static (sig.static is true).
   * @private
   */function createMethodEffect(model,sig,type,effectFn,methodInfo,dynamicFn){dynamicFn=sig.static||dynamicFn&&((typeof dynamicFn==="undefined"?"undefined":_typeof(dynamicFn))!=='object'||dynamicFn[sig.methodName]);var info={methodName:sig.methodName,args:sig.args,methodInfo:methodInfo,dynamicFn:dynamicFn};for(var i=0,arg;i<sig.args.length&&(arg=sig.args[i]);i++){if(!arg.literal){model._addPropertyEffect(arg.rootProperty,type,{fn:effectFn,info:info,trigger:arg});}}if(dynamicFn){model._addPropertyEffect(sig.methodName,type,{fn:effectFn,info:info});}}/**
   * Calls a method with arguments marshaled from properties on the instance
   * based on the method signature contained in the effect metadata.
   *
   * Multi-property observers, computed properties, and inline computing
   * functions call this function to invoke the method, then use the return
   * value accordingly.
   *
   * @param {Object} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {Object} info Effect metadata
   * @return {*} Returns the return value from the method invocation
   * @private
   */function runMethodEffect(inst,property,props,oldProps,info){// Instances can optionally have a _methodHost which allows redirecting where
// to find methods. Currently used by `templatize`.
var context=inst._methodHost||inst;var fn=context[info.methodName];if(fn){var args=marshalArgs(inst.__data,info.args,property,props);return fn.apply(context,args);}else if(!info.dynamicFn){console.warn('method `'+info.methodName+'` not defined');}}var emptyArray=[];// Regular expressions used for binding
var IDENT='(?:'+'[a-zA-Z_$][\\w.:$\\-*]*'+')';var NUMBER='(?:'+'[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?'+')';var SQUOTE_STRING='(?:'+'\'(?:[^\'\\\\]|\\\\.)*\''+')';var DQUOTE_STRING='(?:'+'"(?:[^"\\\\]|\\\\.)*"'+')';var STRING='(?:'+SQUOTE_STRING+'|'+DQUOTE_STRING+')';var ARGUMENT='(?:'+IDENT+'|'+NUMBER+'|'+STRING+'\\s*'+')';var ARGUMENTS='(?:'+ARGUMENT+'(?:,\\s*'+ARGUMENT+')*'+')';var ARGUMENT_LIST='(?:'+'\\(\\s*'+'(?:'+ARGUMENTS+'?'+')'+'\\)\\s*'+')';var BINDING='('+IDENT+'\\s*'+ARGUMENT_LIST+'?'+')';// Group 3
var OPEN_BRACKET='(\\[\\[|{{)'+'\\s*';var CLOSE_BRACKET='(?:]]|}})';var NEGATE='(?:(!)\\s*)?';// Group 2
var EXPRESSION=OPEN_BRACKET+NEGATE+BINDING+CLOSE_BRACKET;var bindingRegex=new RegExp(EXPRESSION,"g");function literalFromParts(parts){var s='';for(var i=0;i<parts.length;i++){var literal=parts[i].literal;s+=literal||'';}return s;}/**
   * Parses an expression string for a method signature, and returns a metadata
   * describing the method in terms of `methodName`, `static` (whether all the
   * arguments are literals), and an array of `args`
   *
   * @param {string} expression The expression to parse
   * @return {?Object} The method metadata object if a method expression was
   *   found, otherwise `undefined`
   * @private
   */function parseMethod(expression){// tries to match valid javascript property names
var m=expression.match(/([^\s]+?)\(([\s\S]*)\)/);if(m){var methodName=m[1];var sig={methodName:methodName,static:true};if(m[2].trim()){// replace escaped commas with comma entity, split on un-escaped commas
var args=m[2].replace(/\\,/g,'&comma;').split(',');return parseArgs(args,sig);}else{sig.args=emptyArray;return sig;}}return null;}/**
   * Parses an array of arguments and sets the `args` property of the supplied
   * signature metadata object. Sets the `static` property to false if any
   * argument is a non-literal.
   *
   * @param {Array<string>} argList Array of argument names
   * @param {Object} sig Method signature metadata object
   * @return {Object} The updated signature metadata object
   * @private
   */function parseArgs(argList,sig){sig.args=argList.map(function(rawArg){var arg=parseArg(rawArg);if(!arg.literal){sig.static=false;}return arg;},this);return sig;}/**
   * Parses an individual argument, and returns an argument metadata object
   * with the following fields:
   *
   *   {
   *     value: 'prop',        // property/path or literal value
   *     literal: false,       // whether argument is a literal
   *     structured: false,    // whether the property is a path
   *     rootProperty: 'prop', // the root property of the path
   *     wildcard: false       // whether the argument was a wildcard '.*' path
   *   }
   *
   * @param {string} rawArg The string value of the argument
   * @return {Object} Argument metadata object
   * @private
   */function parseArg(rawArg){// clean up whitespace
var arg=rawArg.trim()// replace comma entity with comma
.replace(/&comma;/g,',')// repair extra escape sequences; note only commas strictly need
// escaping, but we allow any other char to be escaped since its
// likely users will do this
.replace(/\\(.)/g,'\$1');// basic argument descriptor
var a={name:arg};// detect literal value (must be String or Number)
var fc=arg[0];if(fc==='-'){fc=arg[1];}if(fc>='0'&&fc<='9'){fc='#';}switch(fc){case"'":case'"':a.value=arg.slice(1,-1);a.literal=true;break;case'#':a.value=Number(arg);a.literal=true;break;}// if not literal, look for structured path
if(!a.literal){a.rootProperty=Polymer.Path.root(arg);// detect structured path (has dots)
a.structured=Polymer.Path.isPath(arg);if(a.structured){a.wildcard=arg.slice(-2)=='.*';if(a.wildcard){a.name=arg.slice(0,-2);}}}return a;}/**
   * Gather the argument values for a method specified in the provided array
   * of argument metadata.
   *
   * The `path` and `value` arguments are used to fill in wildcard descriptor
   * when the method is being called as a result of a path notification.
   *
   * @param {Object} data Instance data storage object to read properties from
   * @param {Array<Object>} args Array of argument metadata
   * @param {string} path Property/path name that triggered the method effect
   * @param {Object} props Bag of current property changes
   * @return {Array<*>} Array of argument values
   * @private
   */function marshalArgs(data,args,path,props){var values=[];for(var i=0,l=args.length;i<l;i++){var arg=args[i];var name=arg.name;var v=void 0;if(arg.literal){v=arg.value;}else{if(arg.structured){v=Polymer.Path.get(data,name);// when data is not stored e.g. `splices`
if(v===undefined){v=props[name];}}else{v=data[name];}}if(arg.wildcard){// Only send the actual path changed info if the change that
// caused the observer to run matched the wildcard
var baseChanged=name.indexOf(path+'.')===0;var matches=path.indexOf(name)===0&&!baseChanged;values[i]={path:matches?path:name,value:matches?props[path]:v,base:v};}else{values[i]=v;}}return values;}// data api
/**
   * Sends array splice notifications (`.splices` and `.length`)
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {Element} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {Array} splices Array of splice records
   * @private
   */function _notifySplices(inst,array,path,splices){var splicesPath=path+'.splices';inst.notifyPath(splicesPath,{indexSplices:splices});inst.notifyPath(path+'.length',array.length);// Null here to allow potentially large splice records to be GC'ed.
inst.__data[splicesPath]={indexSplices:null};}/**
   * Creates a splice record and sends an array splice notification for
   * the described mutation
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {Element} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {number} index Index at which the array mutation occurred
   * @param {number} addedCount Number of added items
   * @param {Array} removed Array of removed items
   * @private
   */function notifySplice(inst,array,path,index,addedCount,removed){_notifySplices(inst,array,path,[{index:index,addedCount:addedCount,removed:removed,object:array,type:'splice'}]);}/**
   * Returns an upper-cased version of the string.
   *
   * @param {string} name String to uppercase
   * @return {string} Uppercased string
   * @private
   */function upper(name){return name[0].toUpperCase()+name.substring(1);}/**
   * Element class mixin that provides meta-programming for Polymer's template
   * binding and data observation (collectively, "property effects") system.
   *
   * This mixin uses provides the following key static methods for adding
   * property effects to an element class:
   * - `addPropertyEffect`
   * - `createPropertyObserver`
   * - `createMethodObserver`
   * - `createNotifyingProperty`
   * - `createReadOnlyProperty`
   * - `createReflectedProperty`
   * - `createComputedProperty`
   * - `bindTemplate`
   *
   * Each method creates one or more property accessors, along with metadata
   * used by this mixin's implementation of `_propertiesChanged` to perform
   * the property effects.
   *
   * Underscored versions of the above methods also exist on the element
   * prototype for adding property effects on instances at runtime.
   *
   * Note that this mixin overrides several `PropertyAccessors` methods, in
   * many cases to maintain guarantees provided by the Polymer 1.x features;
   * notably it changes property accessors to be synchronous by default
   * whereas the default when using `PropertyAccessors` standalone is to be
   * async by default.
   *
   * @polymerMixin
   * @mixes Polymer.TemplateStamp
   * @mixes Polymer.PropertyAccessors
   * @memberof Polymer
   * @summary Element class mixin that provides meta-programming for Polymer's
   * template binding and data observation system.
   */Polymer.PropertyEffects=Polymer.dedupingMixin(function(superClass){/**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_PropertyAccessors}
     * @implements {Polymer_TemplateStamp}
     */var propertyEffectsBase=Polymer.TemplateStamp(Polymer.PropertyAccessors(superClass));/**
     * @polymerMixinClass
     * @unrestricted
     * @implements {Polymer_PropertyEffects}
     */var PropertyEffects=function(_propertyEffectsBase){_inherits(PropertyEffects,_propertyEffectsBase);function PropertyEffects(){_classCallCheck(this,PropertyEffects);return _possibleConstructorReturn(this,(PropertyEffects.__proto__||Object.getPrototypeOf(PropertyEffects)).apply(this,arguments));}_createClass(PropertyEffects,[{key:"_initializeProperties",/**
       * Overrides `Polymer.PropertyAccessors` implementation to initialize
       * additional property-effect related properties.
       *
       * @override
       */value:function _initializeProperties(){_get(PropertyEffects.prototype.__proto__||Object.getPrototypeOf(PropertyEffects.prototype),"_initializeProperties",this).call(this);hostStack.registerHost(this);this.__dataClientsInitialized=false;this.__dataPendingClients=null;this.__dataToNotify=null;this.__dataLinkedPaths=null;this.__dataHasPaths=false;// May be set on instance prior to upgrade
this.__dataCompoundStorage=this.__dataCompoundStorage||null;this.__dataHost=this.__dataHost||null;this.__dataTemp={};}/**
       * Overrides `Polymer.PropertyAccessors` implementation to provide a
       * more efficient implementation of initializing properties from
       * the prototype on the instance.
       *
       * @override
       */},{key:"_initializeProtoProperties",value:function _initializeProtoProperties(props){this.__data=Object.create(props);this.__dataPending=Object.create(props);this.__dataOld={};}/**
       * Overrides `Polymer.PropertyAccessors` implementation to avoid setting
       * `_setProperty`'s `shouldNotify: true`.
       *
       * @override
       */},{key:"_initializeInstanceProperties",value:function _initializeInstanceProperties(props){var readOnly=this.__readOnly;for(var prop in props){if(!readOnly||!readOnly[prop]){this.__dataPending=this.__dataPending||{};this.__dataOld=this.__dataOld||{};this.__data[prop]=this.__dataPending[prop]=props[prop];}}}// Prototype setup ----------------------------------------
/**
       * Equivalent to static `addPropertyEffect` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property that should trigger the effect
       * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @param {Object=} effect Effect metadata object
       * @protected
       */},{key:"_addPropertyEffect",value:function _addPropertyEffect(property,type,effect){this._createPropertyAccessor(property,type==TYPES.READ_ONLY);// effects are accumulated into arrays per property based on type
var effects=ensureOwnEffectMap(this,type)[property];if(!effects){effects=this[type][property]=[];}effects.push(effect);}/**
       * Removes the given property effect.
       *
       * @param {string} property Property the effect was associated with
       * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @param {Object=} effect Effect metadata object to remove
       */},{key:"_removePropertyEffect",value:function _removePropertyEffect(property,type,effect){var effects=ensureOwnEffectMap(this,type)[property];var idx=effects.indexOf(effect);if(idx>=0){effects.splice(idx,1);}}/**
       * Returns whether the current prototype/instance has a property effect
       * of a certain type.
       *
       * @param {string} property Property name
       * @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasPropertyEffect",value:function _hasPropertyEffect(property,type){var effects=this[type];return Boolean(effects&&effects[property]);}/**
       * Returns whether the current prototype/instance has a "read only"
       * accessor for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasReadOnlyEffect",value:function _hasReadOnlyEffect(property){return this._hasPropertyEffect(property,TYPES.READ_ONLY);}/**
       * Returns whether the current prototype/instance has a "notify"
       * property effect for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasNotifyEffect",value:function _hasNotifyEffect(property){return this._hasPropertyEffect(property,TYPES.NOTIFY);}/**
       * Returns whether the current prototype/instance has a "reflect to attribute"
       * property effect for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasReflectEffect",value:function _hasReflectEffect(property){return this._hasPropertyEffect(property,TYPES.REFLECT);}/**
       * Returns whether the current prototype/instance has a "computed"
       * property effect for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasComputedEffect",value:function _hasComputedEffect(property){return this._hasPropertyEffect(property,TYPES.COMPUTE);}// Runtime ----------------------------------------
/**
       * Sets a pending property or path.  If the root property of the path in
       * question had no accessor, the path is set, otherwise it is enqueued
       * via `_setPendingProperty`.
       *
       * This function isolates relatively expensive functionality necessary
       * for the public API (`set`, `setProperties`, `notifyPath`, and property
       * change listeners via {{...}} bindings), such that it is only done
       * when paths enter the system, and not at every propagation step.  It
       * also sets a `__dataHasPaths` flag on the instance which is used to
       * fast-path slower path-matching code in the property effects host paths.
       *
       * `path` can be a path string or array of path parts as accepted by the
       * public API.
       *
       * @param {string | !Array<number|string>} path Path to set
       * @param {*} value Value to set
       * @param {boolean=} shouldNotify Set to true if this change should
       *  cause a property notification event dispatch
       * @param {boolean=} isPathNotification If the path being set is a path
       *   notification of an already changed value, as opposed to a request
       *   to set and notify the change.  In the latter `false` case, a dirty
       *   check is performed and then the value is set to the path before
       *   enqueuing the pending property change.
       * @return {boolean} Returns true if the property/path was enqueued in
       *   the pending changes bag.
       * @protected
       */},{key:"_setPendingPropertyOrPath",value:function _setPendingPropertyOrPath(path,value,shouldNotify,isPathNotification){if(isPathNotification||Polymer.Path.root(Array.isArray(path)?path[0]:path)!==path){// Dirty check changes being set to a path against the actual object,
// since this is the entry point for paths into the system; from here
// the only dirty checks are against the `__dataTemp` cache to prevent
// duplicate work in the same turn only. Note, if this was a notification
// of a change already set to a path (isPathNotification: true),
// we always let the change through and skip the `set` since it was
// already dirty checked at the point of entry and the underlying
// object has already been updated
if(!isPathNotification){var old=Polymer.Path.get(this,path);path=/** @type {string} */Polymer.Path.set(this,path,value);// Use property-accessor's simpler dirty check
if(!path||!_get(PropertyEffects.prototype.__proto__||Object.getPrototypeOf(PropertyEffects.prototype),"_shouldPropertyChange",this).call(this,path,value,old)){return false;}}this.__dataHasPaths=true;if(this._setPendingProperty(path,value,shouldNotify)){computeLinkedPaths(this,path,value);return true;}}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[path]){return this._setPendingProperty(path,value,shouldNotify);}else{this[path]=value;}}return false;}/**
       * Applies a value to a non-Polymer element/node's property.
       *
       * The implementation makes a best-effort at binding interop:
       * Some native element properties have side-effects when
       * re-setting the same value (e.g. setting `<input>.value` resets the
       * cursor position), so we do a dirty-check before setting the value.
       * However, for better interop with non-Polymer custom elements that
       * accept objects, we explicitly re-set object changes coming from the
       * Polymer world (which may include deep object changes without the
       * top reference changing), erring on the side of providing more
       * information.
       *
       * Users may override this method to provide alternate approaches.
       *
       * @param {Node} node The node to set a property on
       * @param {string} prop The property to set
       * @param {*} value The value to set
       * @protected
       */},{key:"_setUnmanagedPropertyToNode",value:function _setUnmanagedPropertyToNode(node,prop,value){// It is a judgment call that resetting primitives is
// "bad" and resettings objects is also "good"; alternatively we could
// implement a whitelist of tag & property values that should never
// be reset (e.g. <input>.value && <select>.value)
if(value!==node[prop]||(typeof value==="undefined"?"undefined":_typeof(value))=='object'){node[prop]=value;}}/**
       * Overrides the `PropertyAccessors` implementation to introduce special
       * dirty check logic depending on the property & value being set:
       *
       * 1. Any value set to a path (e.g. 'obj.prop': 42 or 'obj.prop': {...})
       *    Stored in `__dataTemp`, dirty checked against `__dataTemp`
       * 2. Object set to simple property (e.g. 'prop': {...})
       *    Stored in `__dataTemp` and `__data`, dirty checked against
       *    `__dataTemp` by default implementation of `_shouldPropertyChange`
       * 3. Primitive value set to simple property (e.g. 'prop': 42)
       *    Stored in `__data`, dirty checked against `__data`
       *
       * The dirty-check is important to prevent cycles due to two-way
       * notification, but paths and objects are only dirty checked against any
       * previous value set during this turn via a "temporary cache" that is
       * cleared when the last `_propertiesChaged` exits. This is so:
       * a. any cached array paths (e.g. 'array.3.prop') may be invalidated
       *    due to array mutations like shift/unshift/splice; this is fine
       *    since path changes are dirty-checked at user entry points like `set`
       * b. dirty-checking for objects only lasts one turn to allow the user
       *    to mutate the object in-place and re-set it with the same identity
       *    and have all sub-properties re-propagated in a subsequent turn.
       *
       * The temp cache is not necessarily sufficient to prevent invalid array
       * paths, since a splice can happen during the same turn (with pathological
       * user code); we could introduce a "fixup" for temporarily cached array
       * paths if needed: https://github.com/Polymer/polymer/issues/4227
       *
       * @override
       */},{key:"_setPendingProperty",value:function _setPendingProperty(property,value,shouldNotify){var isPath=this.__dataHasPaths&&Polymer.Path.isPath(property);var prevProps=isPath?this.__dataTemp:this.__data;if(this._shouldPropertyChange(property,value,prevProps[property])){if(!this.__dataPending){this.__dataPending={};this.__dataOld={};}// Ensure old is captured from the last turn
if(!(property in this.__dataOld)){this.__dataOld[property]=this.__data[property];}// Paths are stored in temporary cache (cleared at end of turn),
// which is used for dirty-checking, all others stored in __data
if(isPath){this.__dataTemp[property]=value;}else{this.__data[property]=value;}// All changes go into pending property bag, passed to _propertiesChanged
this.__dataPending[property]=value;// Track properties that should notify separately
if(isPath||this.__notifyEffects&&this.__notifyEffects[property]){this.__dataToNotify=this.__dataToNotify||{};this.__dataToNotify[property]=shouldNotify;}return true;}}/**
       * Overrides base implementation to ensure all accessors set `shouldNotify`
       * to true, for per-property notification tracking.
       *
       * @override
       */},{key:"_setProperty",value:function _setProperty(property,value){if(this._setPendingProperty(property,value,true)){this._invalidateProperties();}}/**
       * Overrides `PropertyAccessor`'s default async queuing of
       * `_propertiesChanged`: if `__dataInitialized` is false (has not yet been
       * manually flushed), the function no-ops; otherwise flushes
       * `_propertiesChanged` synchronously.
       *
       * @override
       */},{key:"_invalidateProperties",value:function _invalidateProperties(){if(this.__dataInitialized){this._flushProperties();}}/**
       * Enqueues the given client on a list of pending clients, whose
       * pending property changes can later be flushed via a call to
       * `_flushClients`.
       *
       * @param {Object} client PropertyEffects client to enqueue
       * @protected
       */},{key:"_enqueueClient",value:function _enqueueClient(client){this.__dataPendingClients=this.__dataPendingClients||[];if(client!==this){this.__dataPendingClients.push(client);}}/**
       * Flushes any clients previously enqueued via `_enqueueClient`, causing
       * their `_flushProperties` method to run.
       *
       * @protected
       */},{key:"_flushClients",value:function _flushClients(){if(!this.__dataClientsInitialized){this.__dataClientsInitialized=true;this._readyClients();// Override point where accessors are turned on; importantly,
// this is after clients have fully readied, providing a guarantee
// that any property effects occur only after all clients are ready.
this.__dataInitialized=true;}else{// Flush all clients
var clients=this.__dataPendingClients;if(clients){this.__dataPendingClients=null;for(var i=0;i<clients.length;i++){var client=clients[i];if(client.__dataPending){client._flushProperties();}}}}}/**
       * Perform any initial setup on client dom. Called before the first
       * `_flushProperties` call on client dom and before any element
       * observers are called.
       *
       * @protected
       */},{key:"_readyClients",value:function _readyClients(){var clients=this.__dataPendingClients;if(clients){this.__dataPendingClients=null;for(var i=0;i<clients.length;i++){var client=clients[i];if(!client.__dataEnabled){client._enableProperties();}}}}/**
       * Sets a bag of property changes to this instance, and
       * synchronously processes all effects of the properties as a batch.
       *
       * Property names must be simple properties, not paths.  Batched
       * path propagation is not supported.
       *
       * @param {Object} props Bag of one or more key-value pairs whose key is
       *   a property and value is the new value to set for that property.
       * @param {boolean=} setReadOnly When true, any private values set in
       *   `props` will be set. By default, `setProperties` will not set
       *   `readOnly: true` root properties.
       * @public
       */},{key:"setProperties",value:function setProperties(props,setReadOnly){for(var path in props){if(setReadOnly||!this.__readOnly||!this.__readOnly[path]){//TODO(kschaaf): explicitly disallow paths in setProperty?
// wildcard observers currently only pass the first changed path
// in the `info` object, and you could do some odd things batching
// paths, e.g. {'foo.bar': {...}, 'foo': null}
this._setPendingPropertyOrPath(path,props[path],true);}}this._invalidateProperties();}/**
       * Overrides `PropertyAccessors` so that property accessor
       * side effects are not enabled until after client dom is fully ready.
       * Also calls `_flushClients` callback to ensure client dom is enabled
       * that was not enabled as a result of flushing properties.
       *
       * @override
       */},{key:"ready",value:function ready(){// It is important that `super.ready()` is not called here as it
// immediately turns on accessors. Instead, we wait until `readyClients`
// to enable accessors to provide a guarantee that clients are ready
// before processing any accessors side effects.
this._flushProperties();// If no data was pending, `_flushProperties` will not `flushClients`
// so ensure this is done.
if(!this.__dataClientsInitialized){this._flushClients();}// Before ready, client notifications do not trigger _flushProperties.
// Therefore a flush is necessary here if data has been set.
if(this.__dataPending){this._flushProperties();}}/**
       * Implements `PropertyAccessors`'s properties changed callback.
       *
       * Runs each class of effects for the batch of changed properties in
       * a specific order (compute, propagate, reflect, observe, notify).
       *
       * @override
       */},{key:"_propertiesChanged",value:function _propertiesChanged(currentProps,changedProps,oldProps){// ----------------------------
// let c = Object.getOwnPropertyNames(changedProps || {});
// window.debug && console.group(this.localName + '#' + this.id + ': ' + c);
// if (window.debug) { debugger; }
// ----------------------------
var hasPaths=this.__dataHasPaths;this.__dataHasPaths=false;// Compute properties
runComputedEffects(this,changedProps,oldProps,hasPaths);// Clear notify properties prior to possible reentry (propagate, observe),
// but after computing effects have a chance to add to them
var notifyProps=this.__dataToNotify;this.__dataToNotify=null;// Propagate properties to clients
this._propagatePropertyChanges(changedProps,oldProps,hasPaths);// Flush clients
this._flushClients();// Reflect properties
runEffects(this,this.__reflectEffects,changedProps,oldProps,hasPaths);// Observe properties
runEffects(this,this.__observeEffects,changedProps,oldProps,hasPaths);// Notify properties to host
if(notifyProps){runNotifyEffects(this,notifyProps,changedProps,oldProps,hasPaths);}// Clear temporary cache at end of turn
if(this.__dataCounter==1){this.__dataTemp={};}// ----------------------------
// window.debug && console.groupEnd(this.localName + '#' + this.id + ': ' + c);
// ----------------------------
}/**
       * Called to propagate any property changes to stamped template nodes
       * managed by this element.
       *
       * @param {Object} changedProps Bag of changed properties
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @protected
       */},{key:"_propagatePropertyChanges",value:function _propagatePropertyChanges(changedProps,oldProps,hasPaths){if(this.__propagateEffects){runEffects(this,this.__propagateEffects,changedProps,oldProps,hasPaths);}var templateInfo=this.__templateInfo;while(templateInfo){runEffects(this,templateInfo.propertyEffects,changedProps,oldProps,hasPaths,templateInfo.nodeList);templateInfo=templateInfo.nextTemplateInfo;}}/**
       * Aliases one data path as another, such that path notifications from one
       * are routed to the other.
       *
       * @param {string | !Array<string|number>} to Target path to link.
       * @param {string | !Array<string|number>} from Source path to link.
       * @public
       */},{key:"linkPaths",value:function linkPaths(to,from){to=Polymer.Path.normalize(to);from=Polymer.Path.normalize(from);this.__dataLinkedPaths=this.__dataLinkedPaths||{};this.__dataLinkedPaths[to]=from;}/**
       * Removes a data path alias previously established with `_linkPaths`.
       *
       * Note, the path to unlink should be the target (`to`) used when
       * linking the paths.
       *
       * @param {string | !Array<string|number>} path Target path to unlink.
       * @public
       */},{key:"unlinkPaths",value:function unlinkPaths(path){path=Polymer.Path.normalize(path);if(this.__dataLinkedPaths){delete this.__dataLinkedPaths[path];}}/**
       * Notify that an array has changed.
       *
       * Example:
       *
       *     this.items = [ {name: 'Jim'}, {name: 'Todd'}, {name: 'Bill'} ];
       *     ...
       *     this.items.splice(1, 1, {name: 'Sam'});
       *     this.items.push({name: 'Bob'});
       *     this.notifySplices('items', [
       *       { index: 1, removed: [{name: 'Todd'}], addedCount: 1, obect: this.items, type: 'splice' },
       *       { index: 3, removed: [], addedCount: 1, object: this.items, type: 'splice'}
       *     ]);
       *
       * @param {string} path Path that should be notified.
       * @param {Array} splices Array of splice records indicating ordered
       *   changes that occurred to the array. Each record should have the
       *   following fields:
       *    * index: index at which the change occurred
       *    * removed: array of items that were removed from this index
       *    * addedCount: number of new items added at this index
       *    * object: a reference to the array in question
       *    * type: the string literal 'splice'
       *
       *   Note that splice records _must_ be normalized such that they are
       *   reported in index order (raw results from `Object.observe` are not
       *   ordered and must be normalized/merged before notifying).
       * @public
      */},{key:"notifySplices",value:function notifySplices(path,splices){var info={};var array=/** @type {Array} */Polymer.Path.get(this,path,info);_notifySplices(this,array,info.path,splices);}/**
       * Convenience method for reading a value from a path.
       *
       * Note, if any part in the path is undefined, this method returns
       * `undefined` (this method does not throw when dereferencing undefined
       * paths).
       *
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `users.12.name` or `['users', 12, 'name']`).
       * @param {Object=} root Root object from which the path is evaluated.
       * @return {*} Value at the path, or `undefined` if any part of the path
       *   is undefined.
       * @public
       */},{key:"get",value:function get(path,root){return Polymer.Path.get(root||this,path);}/**
       * Convenience method for setting a value to a path and notifying any
       * elements bound to the same path.
       *
       * Note, if any part in the path except for the last is undefined,
       * this method does nothing (this method does not throw when
       * dereferencing undefined paths).
       *
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `'users.12.name'` or `['users', 12, 'name']`).
       * @param {*} value Value to set at the specified path.
       * @param {Object=} root Root object from which the path is evaluated.
       *   When specified, no notification will occur.
       * @public
      */},{key:"set",value:function set(path,value,root){if(root){Polymer.Path.set(root,path,value);}else{if(!this.__readOnly||!this.__readOnly[/** @type {string} */path]){if(this._setPendingPropertyOrPath(path,value,true)){this._invalidateProperties();}}}}/**
       * Adds items onto the end of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string} path Path to array.
       * @param {...*} items Items to push onto array
       * @return {number} New length of the array.
       * @public
       */},{key:"push",value:function push(path){var info={};var array=/** @type {Array}*/Polymer.Path.get(this,path,info);var len=array.length;for(var _len3=arguments.length,items=Array(_len3>1?_len3-1:0),_key3=1;_key3<_len3;_key3++){items[_key3-1]=arguments[_key3];}var ret=array.push.apply(array,items);if(items.length){notifySplice(this,array,info.path,len,items.length,[]);}return ret;}/**
       * Removes an item from the end of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */},{key:"pop",value:function pop(path){var info={};var array=/** @type {Array} */Polymer.Path.get(this,path,info);var hadLength=Boolean(array.length);var ret=array.pop();if(hadLength){notifySplice(this,array,info.path,array.length,0,[ret]);}return ret;}/**
       * Starting from the start index specified, removes 0 or more items
       * from the array and inserts 0 or more new items in their place.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.splice`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string} path Path to array.
       * @param {number} start Index from which to start removing/inserting.
       * @param {number} deleteCount Number of items to remove.
       * @param {...*} items Items to insert into array.
       * @return {Array} Array of removed items.
       * @public
       */},{key:"splice",value:function splice(path,start,deleteCount){var info={};var array=/** @type {Array} */Polymer.Path.get(this,path,info);// Normalize fancy native splice handling of crazy start values
if(start<0){start=array.length-Math.floor(-start);}else{start=Math.floor(start);}if(!start){start=0;}for(var _len4=arguments.length,items=Array(_len4>3?_len4-3:0),_key4=3;_key4<_len4;_key4++){items[_key4-3]=arguments[_key4];}var ret=array.splice.apply(array,[start,deleteCount].concat(items));if(items.length||ret.length){notifySplice(this,array,info.path,start,items.length,ret);}return ret;}/**
       * Removes an item from the beginning of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */},{key:"shift",value:function shift(path){var info={};var array=/** @type {Array} */Polymer.Path.get(this,path,info);var hadLength=Boolean(array.length);var ret=array.shift();if(hadLength){notifySplice(this,array,info.path,0,0,[ret]);}return ret;}/**
       * Adds items onto the beginning of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string} path Path to array.
       * @param {...*} items Items to insert info array
       * @return {number} New length of the array.
       * @public
       */},{key:"unshift",value:function unshift(path){var info={};var array=/** @type {Array} */Polymer.Path.get(this,path,info);for(var _len5=arguments.length,items=Array(_len5>1?_len5-1:0),_key5=1;_key5<_len5;_key5++){items[_key5-1]=arguments[_key5];}var ret=array.unshift.apply(array,items);if(items.length){notifySplice(this,array,info.path,0,items.length,[]);}return ret;}/**
       * Notify that a path has changed.
       *
       * Example:
       *
       *     this.item.user.name = 'Bob';
       *     this.notifyPath('item.user.name');
       *
       * @param {string} path Path that should be notified.
       * @param {*=} value Value at the path (optional).
       * @public
      */},{key:"notifyPath",value:function notifyPath(path,value){/** @type {string} */var propPath=void 0;if(arguments.length==1){// Get value if not supplied
var info={};value=Polymer.Path.get(this,path,info);propPath=info.path;}else if(Array.isArray(path)){// Normalize path if needed
propPath=Polymer.Path.normalize(path);}else{propPath=/** @type{string} */path;}if(this._setPendingPropertyOrPath(propPath,value,true,true)){this._invalidateProperties();}}/**
       * Equivalent to static `createReadOnlyProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @protected
       */},{key:"_createReadOnlyProperty",value:function _createReadOnlyProperty(property,protectedSetter){this._addPropertyEffect(property,TYPES.READ_ONLY);if(protectedSetter){this['_set'+upper(property)]=function(value){this._setProperty(property,value);};}}/**
       * Equivalent to static `createPropertyObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @param {string} methodName Name of observer method to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @protected
       */},{key:"_createPropertyObserver",value:function _createPropertyObserver(property,methodName,dynamicFn){var info={property:property,methodName:methodName,dynamicFn:dynamicFn};this._addPropertyEffect(property,TYPES.OBSERVE,{fn:runObserverEffect,info:info,trigger:{name:property}});if(dynamicFn){this._addPropertyEffect(methodName,TYPES.OBSERVE,{fn:runObserverEffect,info:info,trigger:{name:methodName}});}}/**
       * Equivalent to static `createMethodObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @protected
       */},{key:"_createMethodObserver",value:function _createMethodObserver(expression,dynamicFn){var sig=parseMethod(expression);if(!sig){throw new Error("Malformed observer expression '"+expression+"'");}createMethodEffect(this,sig,TYPES.OBSERVE,runMethodEffect,null,dynamicFn);}/**
       * Equivalent to static `createNotifyingProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @protected
       */},{key:"_createNotifyingProperty",value:function _createNotifyingProperty(property){this._addPropertyEffect(property,TYPES.NOTIFY,{fn:runNotifyEffect,info:{eventName:CaseMap.camelToDashCase(property)+'-changed',property:property}});}/**
       * Equivalent to static `createReflectedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @protected
       */},{key:"_createReflectedProperty",value:function _createReflectedProperty(property){var attr=CaseMap.camelToDashCase(property);if(attr[0]==='-'){console.warn('Property '+property+' cannot be reflected to attribute '+attr+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property thisead.');}else{this._addPropertyEffect(property,TYPES.REFLECT,{fn:runReflectEffect,info:{attrName:attr}});}}/**
       * Equivalent to static `createComputedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @protected
       */},{key:"_createComputedProperty",value:function _createComputedProperty(property,expression,dynamicFn){var sig=parseMethod(expression);if(!sig){throw new Error("Malformed computed expression '"+expression+"'");}createMethodEffect(this,sig,TYPES.COMPUTE,runComputedEffect,property,dynamicFn);}// -- static class methods ------------
/**
       * Ensures an accessor exists for the specified property, and adds
       * to a list of "property effects" that will run when the accessor for
       * the specified property is set.  Effects are grouped by "type", which
       * roughly corresponds to a phase in effect processing.  The effect
       * metadata should be in the following form:
       *
       *   {
       *     fn: effectFunction, // Reference to function to call to perform effect
       *     info: { ... }       // Effect metadata passed to function
       *     trigger: {          // Optional triggering metadata; if not provided
       *       name: string      // the property is treated as a wildcard
       *       structured: boolean
       *       wildcard: boolean
       *     }
       *   }
       *
       * Effects are called from `_propertiesChanged` in the following order by
       * type:
       *
       * 1. COMPUTE
       * 2. PROPAGATE
       * 3. REFLECT
       * 4. OBSERVE
       * 5. NOTIFY
       *
       * Effect functions are called with the following signature:
       *
       *   effectFunction(inst, path, props, oldProps, info, hasPaths)
       *
       * @param {string} property Property that should trigger the effect
       * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @param {Object=} effect Effect metadata object
       * @protected
       */},{key:"_bindTemplate",// -- binding ----------------------------------------------
/**
       * Equivalent to static `bindTemplate` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * This method may be called on the prototype (for prototypical template
       * binding, to avoid creating accessors every instance) once per prototype,
       * and will be called with `runtimeBinding: true` by `_stampTemplate` to
       * create and link an instance of the template metadata associated with a
       * particular stamping.
       *
       * @param {HTMLTemplateElement} template Template containing binding
       *   bindings
       * @param {boolean=} instanceBinding When false (default), performs
       *   "prototypical" binding of the template and overwrites any previously
       *   bound template for the class. When true (as passed from
       *   `_stampTemplate`), the template info is instanced and linked into
       *   the list of bound templates.
       * @return {Object} Template metadata object; for `runtimeBinding`,
       *   this is an instance of the prototypical template info
       * @protected
       */value:function _bindTemplate(template,instanceBinding){var templateInfo=this.constructor._parseTemplate(template);var wasPreBound=this.__templateInfo==templateInfo;// Optimization: since this is called twice for proto-bound templates,
// don't attempt to recreate accessors if this template was pre-bound
if(!wasPreBound){for(var prop in templateInfo.propertyEffects){this._createPropertyAccessor(prop);}}if(instanceBinding){// For instance-time binding, create instance of template metadata
// and link into list of templates if necessary
templateInfo=Object.create(templateInfo);templateInfo.wasPreBound=wasPreBound;if(!wasPreBound&&this.__templateInfo){var last=this.__templateInfoLast||this.__templateInfo;this.__templateInfoLast=last.nextTemplateInfo=templateInfo;templateInfo.previousTemplateInfo=last;return templateInfo;}}return this.__templateInfo=templateInfo;}/**
       * Adds a property effect to the given template metadata, which is run
       * at the "propagate" stage of `_propertiesChanged` when the template
       * has been bound to the element via `_bindTemplate`.
       *
       * The `effect` object should match the format in `_addPropertyEffect`.
       *
       * @param {Object} templateInfo Template metadata to add effect to
       * @param {string} prop Property that should trigger the effect
       * @param {Object=} effect Effect metadata object
       * @protected
       */},{key:"_stampTemplate",/**
       * Stamps the provided template and performs instance-time setup for
       * Polymer template features, including data bindings, declarative event
       * listeners, and the `this.$` map of `id`'s to nodes.  A document fragment
       * is returned containing the stamped DOM, ready for insertion into the
       * DOM.
       *
       * This method may be called more than once; however note that due to
       * `shadycss` polyfill limitations, only styles from templates prepared
       * using `ShadyCSS.prepareTemplate` will be correctly polyfilled (scoped
       * to the shadow root and support CSS custom properties), and note that
       * `ShadyCSS.prepareTemplate` may only be called once per element. As such,
       * any styles required by in runtime-stamped templates must be included
       * in the main element template.
       *
       * @param {HTMLTemplateElement} template Template to stamp
       * @return {DocumentFragment} Cloned template content
       * @protected
       */value:function _stampTemplate(template){// Ensures that created dom is `_enqueueClient`'d to this element so
// that it can be flushed on next call to `_flushProperties`
hostStack.beginHosting(this);var dom=_get(PropertyEffects.prototype.__proto__||Object.getPrototypeOf(PropertyEffects.prototype),"_stampTemplate",this).call(this,template);hostStack.endHosting(this);var templateInfo=this._bindTemplate(template,true);// Add template-instance-specific data to instanced templateInfo
templateInfo.nodeList=dom.nodeList;// Capture child nodes to allow unstamping of non-prototypical templates
if(!templateInfo.wasPreBound){var nodes=templateInfo.childNodes=[];for(var n=dom.firstChild;n;n=n.nextSibling){nodes.push(n);}}dom.templateInfo=templateInfo;// Setup compound storage, 2-way listeners, and dataHost for bindings
setupBindings(this,templateInfo);// Flush properties into template nodes if already booted
if(this.__dataInitialized){runEffects(this,templateInfo.propertyEffects,this.__data,null,false,templateInfo.nodeList);}return dom;}/**
       * Removes and unbinds the nodes previously contained in the provided
       * DocumentFragment returned from `_stampTemplate`.
       *
       * @param {DocumentFragment} dom DocumentFragment previously returned
       *   from `_stampTemplate` associated with the nodes to be removed
       * @protected
       */},{key:"_removeBoundDom",value:function _removeBoundDom(dom){// Unlink template info
var templateInfo=dom.templateInfo;if(templateInfo.previousTemplateInfo){templateInfo.previousTemplateInfo.nextTemplateInfo=templateInfo.nextTemplateInfo;}if(templateInfo.nextTemplateInfo){templateInfo.nextTemplateInfo.previousTemplateInfo=templateInfo.previousTemplateInfo;}if(this.__templateInfoLast==templateInfo){this.__templateInfoLast=templateInfo.previousTemplateInfo;}templateInfo.previousTemplateInfo=templateInfo.nextTemplateInfo=null;// Remove stamped nodes
var nodes=templateInfo.childNodes;for(var i=0;i<nodes.length;i++){var node=nodes[i];node.parentNode.removeChild(node);}}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from `TextNode`'s' `textContent`.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @override
       * @param {Node} node Node to parse
       * @param {Object} templateInfo Template metadata for current template
       * @param {Object} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       */},{key:"PROPERTY_EFFECT_TYPES",get:function get(){return TYPES;}}],[{key:"addPropertyEffect",value:function addPropertyEffect(property,type,effect){this.prototype._addPropertyEffect(property,type,effect);}/**
       * Creates a single-property observer for the given property.
       *
       * @param {string} property Property name
       * @param {string} methodName Name of observer method to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @protected
       */},{key:"createPropertyObserver",value:function createPropertyObserver(property,methodName,dynamicFn){this.prototype._createPropertyObserver(property,methodName,dynamicFn);}/**
       * Creates a multi-property "method observer" based on the provided
       * expression, which should be a string in the form of a normal Javascript
       * function signature: `'methodName(arg1, [..., argn])'`.  Each argument
       * should correspond to a property or path in the context of this
       * prototype (or instance), or may be a literal string or number.
       *
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @protected
       */},{key:"createMethodObserver",value:function createMethodObserver(expression,dynamicFn){this.prototype._createMethodObserver(expression,dynamicFn);}/**
       * Causes the setter for the given property to dispatch `<property>-changed`
       * events to notify of changes to the property.
       *
       * @param {string} property Property name
       * @protected
       */},{key:"createNotifyingProperty",value:function createNotifyingProperty(property){this.prototype._createNotifyingProperty(property);}/**
       * Creates a read-only accessor for the given property.
       *
       * To set the property, use the protected `_setProperty` API.
       * To create a custom protected setter (e.g. `_setMyProp()` for
       * property `myProp`), pass `true` for `protectedSetter`.
       *
       * Note, if the property will have other property effects, this method
       * should be called first, before adding other effects.
       *
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @protected
       */},{key:"createReadOnlyProperty",value:function createReadOnlyProperty(property,protectedSetter){this.prototype._createReadOnlyProperty(property,protectedSetter);}/**
       * Causes the setter for the given property to reflect the property value
       * to a (dash-cased) attribute of the same name.
       *
       * @param {string} property Property name
       * @protected
       */},{key:"createReflectedProperty",value:function createReflectedProperty(property){this.prototype._createReflectedProperty(property);}/**
       * Creates a computed property whose value is set to the result of the
       * method described by the given `expression` each time one or more
       * arguments to the method changes.  The expression should be a string
       * in the form of a normal Javascript function signature:
       * `'methodName(arg1, [..., argn])'`
       *
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
       *   method names should be included as a dependency to the effect.
       * @protected
       */},{key:"createComputedProperty",value:function createComputedProperty(property,expression,dynamicFn){this.prototype._createComputedProperty(property,expression,dynamicFn);}/**
       * Parses the provided template to ensure binding effects are created
       * for them, and then ensures property accessors are created for any
       * dependent properties in the template.  Binding effects for bound
       * templates are stored in a linked list on the instance so that
       * templates can be efficiently stamped and unstamped.
       *
       * @param {HTMLTemplateElement} template Template containing binding
       *   bindings
       * @return {Object} Template metadata object
       * @protected
       */},{key:"bindTemplate",value:function bindTemplate(template){return this.prototype._bindTemplate(template);}},{key:"_addTemplatePropertyEffect",value:function _addTemplatePropertyEffect(templateInfo,prop,effect){var hostProps=templateInfo.hostProps=templateInfo.hostProps||{};hostProps[prop]=true;var effects=templateInfo.propertyEffects=templateInfo.propertyEffects||{};var propEffects=effects[prop]=effects[prop]||[];propEffects.push(effect);}},{key:"_parseTemplateNode",value:function _parseTemplateNode(node,templateInfo,nodeInfo){var noted=_get(PropertyEffects.__proto__||Object.getPrototypeOf(PropertyEffects),"_parseTemplateNode",this).call(this,node,templateInfo,nodeInfo);if(node.nodeType===Node.TEXT_NODE){var parts=this._parseBindings(node.textContent,templateInfo);if(parts){// Initialize the textContent with any literal parts
// NOTE: default to a space here so the textNode remains; some browsers
// (IE) evacipate an empty textNode following cloneNode/importNode.
node.textContent=literalFromParts(parts)||' ';addBinding(this,templateInfo,nodeInfo,'text','textContent',parts);noted=true;}}return noted;}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from attributes.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @override
       * @param {Node} node Node to parse
       * @param {Object} templateInfo Template metadata for current template
       * @param {Object} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       */},{key:"_parseTemplateNodeAttribute",value:function _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){var parts=this._parseBindings(value,templateInfo);if(parts){// Attribute or property
var origName=name;var kind='property';if(name[name.length-1]=='$'){name=name.slice(0,-1);kind='attribute';}// Initialize attribute bindings with any literal parts
var literal=literalFromParts(parts);if(literal&&kind=='attribute'){node.setAttribute(name,literal);}// Clear attribute before removing, since IE won't allow removing
// `value` attribute if it previously had a value (can't
// unconditionally set '' before removing since attributes with `$`
// can't be set using setAttribute)
if(node.localName==='input'&&origName==='value'){node.setAttribute(origName,'');}// Remove annotation
node.removeAttribute(origName);// Case hackery: attributes are lower-case, but bind targets
// (properties) are case sensitive. Gambit is to map dash-case to
// camel-case: `foo-bar` becomes `fooBar`.
// Attribute bindings are excepted.
if(kind==='property'){name=Polymer.CaseMap.dashToCamelCase(name);}addBinding(this,templateInfo,nodeInfo,kind,name,parts,literal);return true;}else{return _get(PropertyEffects.__proto__||Object.getPrototypeOf(PropertyEffects),"_parseTemplateNodeAttribute",this).call(this,node,templateInfo,nodeInfo,name,value);}}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * binding the properties that a nested template depends on to the template
       * as `_host_<property>`.
       *
       * @override
       * @param {Node} node Node to parse
       * @param {Object} templateInfo Template metadata for current template
       * @param {Object} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       */},{key:"_parseTemplateNestedTemplate",value:function _parseTemplateNestedTemplate(node,templateInfo,nodeInfo){var noted=_get(PropertyEffects.__proto__||Object.getPrototypeOf(PropertyEffects),"_parseTemplateNestedTemplate",this).call(this,node,templateInfo,nodeInfo);// Merge host props into outer template and add bindings
var hostProps=nodeInfo.templateInfo.hostProps;var mode='{';for(var source in hostProps){var parts=[{mode:mode,source:source,dependencies:[source]}];addBinding(this,templateInfo,nodeInfo,'property','_host_'+source,parts);}return noted;}/**
       * Called to parse text in a template (either attribute values or
       * textContent) into binding metadata.
       *
       * Any overrides of this method should return an array of binding part
       * metadata  representing one or more bindings found in the provided text
       * and any "literal" text in between.  Any non-literal parts will be passed
       * to `_evaluateBinding` when any dependencies change.  The only required
       * fields of each "part" in the returned array are as follows:
       *
       * - `dependencies` - Array containing trigger metadata for each property
       *   that should trigger the binding to update
       * - `literal` - String containing text if the part represents a literal;
       *   in this case no `dependencies` are needed
       *
       * Additional metadata for use by `_evaluateBinding` may be provided in
       * each part object as needed.
       *
       * The default implementation handles the following types of bindings
       * (one or more may be intermixed with literal strings):
       * - Property binding: `[[prop]]`
       * - Path binding: `[[object.prop]]`
       * - Negated property or path bindings: `[[!prop]]` or `[[!object.prop]]`
       * - Two-way property or path bindings (supports negation):
       *   `{{prop}}`, `{{object.prop}}`, `{{!prop}}` or `{{!object.prop}}`
       * - Inline computed method (supports negation):
       *   `[[compute(a, 'literal', b)]]`, `[[!compute(a, 'literal', b)]]`
       *
       * @param {string} text Text to parse from attribute or textContent
       * @param {Object} templateInfo Current template metadata
       * @return {Array<Object>} Array of binding part metadata
       * @protected
       */},{key:"_parseBindings",value:function _parseBindings(text,templateInfo){var parts=[];var lastIndex=0;var m=void 0;// Example: "literal1{{prop}}literal2[[!compute(foo,bar)]]final"
// Regex matches:
//        Iteration 1:  Iteration 2:
// m[1]: '{{'          '[['
// m[2]: ''            '!'
// m[3]: 'prop'        'compute(foo,bar)'
while((m=bindingRegex.exec(text))!==null){// Add literal part
if(m.index>lastIndex){parts.push({literal:text.slice(lastIndex,m.index)});}// Add binding part
var mode=m[1][0];var negate=Boolean(m[2]);var source=m[3].trim();var customEvent=void 0,notifyEvent=void 0,colon=void 0;if(mode=='{'&&(colon=source.indexOf('::'))>0){notifyEvent=source.substring(colon+2);source=source.substring(0,colon);customEvent=true;}var signature=parseMethod(source);var dependencies=[];if(signature){// Inline computed function
var args=signature.args,methodName=signature.methodName;for(var i=0;i<args.length;i++){var arg=args[i];if(!arg.literal){dependencies.push(arg);}}var dynamicFns=templateInfo.dynamicFns;if(dynamicFns&&dynamicFns[methodName]||signature.static){dependencies.push(methodName);signature.dynamicFn=true;}}else{// Property or path
dependencies.push(source);}parts.push({source:source,mode:mode,negate:negate,customEvent:customEvent,signature:signature,dependencies:dependencies,event:notifyEvent});lastIndex=bindingRegex.lastIndex;}// Add a final literal part
if(lastIndex&&lastIndex<text.length){var literal=text.substring(lastIndex);if(literal){parts.push({literal:literal});}}if(parts.length){return parts;}}/**
       * Called to evaluate a previously parsed binding part based on a set of
       * one or more changed dependencies.
       *
       * @param {HTMLElement} inst Element that should be used as scope for
       *   binding dependencies
       * @param {Object} part Binding part metadata
       * @param {string} path Property/path that triggered this effect
       * @param {Object} props Bag of current property changes
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {*} Value the binding part evaluated to
       * @protected
       */},{key:"_evaluateBinding",value:function _evaluateBinding(inst,part,path,props,oldProps,hasPaths){var value=void 0;if(part.signature){value=runMethodEffect(inst,path,props,oldProps,part.signature);}else if(path!=part.source){value=Polymer.Path.get(inst,part.source);}else{if(hasPaths&&Polymer.Path.isPath(path)){value=Polymer.Path.get(inst,path);}else{value=inst.__data[path];}}if(part.negate){value=!value;}return value;}}]);return PropertyEffects;}(propertyEffectsBase);return PropertyEffects;});/**
   * Helper api for enqueing client dom created by a host element.
   *
   * By default elements are flushed via `_flushProperties` when
   * `connectedCallback` is called. Elements attach their client dom to
   * themselves at `ready` time which results from this first flush.
   * This provides an ordering guarantee that the client dom an element
   * creates is flushed before the element itself (i.e. client `ready`
   * fires before host `ready`).
   *
   * However, if `_flushProperties` is called *before* an element is connected,
   * as for example `Templatize` does, this ordering guarantee cannot be
   * satisfied because no elements are connected. (Note: Bound elements that
   * receive data do become enqueued clients and are properly ordered but
   * unbound elements are not.)
   *
   * To maintain the desired "client before host" ordering guarantee for this
   * case we rely on the "host stack. Client nodes registers themselves with
   * the creating host element when created. This ensures that all client dom
   * is readied in the proper order, maintaining the desired guarantee.
   *
   * @private
   */var hostStack={stack:[],registerHost:function registerHost(inst){if(this.stack.length){var host=this.stack[this.stack.length-1];host._enqueueClient(inst);}},beginHosting:function beginHosting(inst){this.stack.push(inst);},endHosting:function endHosting(inst){var stackLen=this.stack.length;if(stackLen&&this.stack[stackLen-1]==inst){this.stack.pop();}}};})();(function(){'use strict';/**
   * @typedef Object<string, {
   *   value: *,
   *   type: (Function | undefined),
   *   readOnly: (boolean | undefined),
   *   computed: (string | undefined),
   *   reflectToAttribute: (boolean | undefined),
   *   notify: (boolean | undefined),
   *   observer: (string | undefined)
   * }>)
   */var PolymerElementProperties=void 0;// eslint-disable-line no-unused-vars
/** @record */var PolymerElementConstructor=function PolymerElementConstructor(){};// eslint-disable-line no-unused-vars
/** @type {(string | undefined)} */PolymerElementConstructor.is;/** @type {(string | undefined)} */PolymerElementConstructor.extends;/** @type {(!PolymerElementProperties | undefined)} */PolymerElementConstructor.properties;/** @type {(!Array<string> | undefined)} */PolymerElementConstructor.observers;/** @type {(!HTMLTemplateElement | string | undefined)} */PolymerElementConstructor.template;/**
   * Element class mixin that provides the core API for Polymer's meta-programming
   * features including template stamping, data-binding, attribute deserialization,
   * and property change observation.
   *
   * Subclassers may provide the following static getters to return metadata
   * used to configure Polymer's features for the class:
   *
   * - `static get is()`: When the template is provided via a `dom-module`,
   *   users should return the `dom-module` id from a static `is` getter.  If
   *   no template is needed or the template is provided directly via the
   *   `template` getter, there is no need to define `is` for the element.
   *
   * - `static get template()`: Users may provide the template directly (as
   *   opposed to via `dom-module`) by implementing a static `template` getter.
   *   The getter may return an `HTMLTemplateElement` or a string, which will
   *   automatically be parsed into a template.
   *
   * - `static get properties()`: Should return an object describing
   *   property-related metadata used by Polymer features (key: property name
   *   value: object containing property metadata). Valid keys in per-property
   *   metadata include:
   *   - `type` (String|Number|Object|Array|...): Used by
   *     `attributeChangedCallback` to determine how string-based attributes
   *     are deserialized to JavaScript property values.
   *   - `notify` (boolean): Causes a change in the property to fire a
   *     non-bubbling event called `<property>-changed`. Elements that have
   *     enabled two-way binding to the property use this event to observe changes.
   *   - `readOnly` (boolean): Creates a getter for the property, but no setter.
   *     To set a read-only property, use the private setter method
   *     `_setProperty(property, value)`.
   *   - `observer` (string): Observer method name that will be called when
   *     the property changes. The arguments of the method are
   *     `(value, previousValue)`.
   *   - `computed` (string): String describing method and dependent properties
   *     for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
   *     Computed properties are read-only by default and can only be changed
   *     via the return value of the computing method.
   *
   * - `static get observers()`: Array of strings describing multi-property
   *   observer methods and their dependent properties (e.g.
   *   `'observeABC(a, b, c)'`).
   *
   * The base class provides default implementations for the following standard
   * custom element lifecycle callbacks; users may override these, but should
   * call the super method to ensure
   * - `constructor`: Run when the element is created or upgraded
   * - `connectedCallback`: Run each time the element is connected to the
   *   document
   * - `disconnectedCallback`: Run each time the element is disconnected from
   *   the document
   * - `attributeChangedCallback`: Run each time an attribute in
   *   `observedAttributes` is set or removed (note: this element's default
   *   `observedAttributes` implementation will automatically return an array
   *   of dash-cased attributes based on `properties`)
   *
   * @polymerMixin
   * @mixes Polymer.PropertyEffects
   * @memberof Polymer
   * @property rootPath {string} Set to the value of `Polymer.rootPath`,
   *   which defaults to the main document path
   * @property importPath {string} Set to the value of the class's static
   *   `importPath` property, which defaults to the path of this element's
   *   `dom-module` (when `is` is used), but can be overridden for other
   *   import strategies.
   * @summary Element class mixin that provides the core API for Polymer's
   * meta-programming features.
   */Polymer.ElementMixin=Polymer.dedupingMixin(function(base){/**
     * @constructor
     * @extends {base}
     * @implements {Polymer_PropertyEffects}
     */var polymerElementBase=Polymer.PropertyEffects(base);var caseMap=Polymer.CaseMap;/**
     * Returns the `properties` object specifically on `klass`. Use for:
     * (1) super chain mixes togther to make `propertiesForClass` which is
     * then used to make `observedAttributes`.
     * (2) properties effects and observers are created from it at `finalize` time.
     *
     * @param {HTMLElement} klass Element class
     * @return {Object} Object containing own properties for this class
     * @private
     */function ownPropertiesForClass(klass){if(!klass.hasOwnProperty(JSCompiler_renameProperty('__ownProperties',klass))){klass.__ownProperties=klass.hasOwnProperty(JSCompiler_renameProperty('properties',klass))?klass.properties:{};}return klass.__ownProperties;}/**
     * Returns the `observers` array specifically on `klass`. Use for
     * setting up observers.
     *
     * @param {HTMLElement} klass Element class
     * @return {Array} Array containing own observers for this class
     * @private
     */function ownObserversForClass(klass){if(!klass.hasOwnProperty(JSCompiler_renameProperty('__ownObservers',klass))){klass.__ownObservers=klass.hasOwnProperty(JSCompiler_renameProperty('observers',klass))?klass.observers:[];}return klass.__ownObservers;}/**
     * Mixes `props` into `flattenedProps` but upgrades shorthand type
     * syntax to { type: Type}.
     *
     * @param {Object} flattenedProps Bag to collect flattened properties into
     * @param {Object} props Bag of properties to add to `flattenedProps`
     * @return {Objecg} The input `flattenedProps` bag
     * @private
     */function flattenProperties(flattenedProps,props){for(var p in props){var o=props[p];if(typeof o=='function'){o={type:o};}flattenedProps[p]=o;}return flattenedProps;}/**
     * Returns a flattened list of properties mixed together from the chain of all
     * constructor's `config.properties`. This list is used to create
     * (1) observedAttributes,
     * (2) class property default values
     *
     * @param {HTMLElement} klass Element class
     * @return {PolymerElementProperties} Flattened properties for this class
     * @private
     */function propertiesForClass(klass){if(!klass.hasOwnProperty(JSCompiler_renameProperty('__classProperties',klass))){klass.__classProperties=flattenProperties({},ownPropertiesForClass(klass));var superCtor=Object.getPrototypeOf(klass.prototype).constructor;if(superCtor.prototype instanceof PolymerElement){klass.__classProperties=Object.assign(Object.create(propertiesForClass(superCtor)),klass.__classProperties);}}return klass.__classProperties;}/**
     * Returns a list of properties with default values.
     * This list is created as an optimization since it is a subset of
     * the list returned from `propertiesForClass`.
     * This list is used in `_initializeProperties` to set property defaults.
     *
     * @param {HTMLElement} klass Element class
     * @return {PolymerElementProperties} Flattened properties for this class
     *   that have default values
     * @private
     */function propertyDefaultsForClass(klass){if(!klass.hasOwnProperty(JSCompiler_renameProperty('__classPropertyDefaults',klass))){klass.__classPropertyDefaults=null;var props=propertiesForClass(klass);for(var p in props){var info=props[p];if('value'in info){klass.__classPropertyDefaults=klass.__classPropertyDefaults||{};klass.__classPropertyDefaults[p]=info;}}}return klass.__classPropertyDefaults;}/**
     * Returns true if a `klass` has finalized. Called in `ElementClass.finalize()`
     * @param {HTMLElement} klass Element class
     * @return {boolean} True if all metaprogramming for this class has been
     *   completed
     * @private
     */function hasClassFinalized(klass){return klass.hasOwnProperty(JSCompiler_renameProperty('__finalized',klass));}/**
     * Called by `ElementClass.finalize()`. Ensures this `klass` and
     * *all superclasses* are finalized by traversing the prototype chain
     * and calling `klass.finalize()`.
     *
     * @param {HTMLElement} klass Element class
     * @private
     */function finalizeClassAndSuper(klass){var proto=klass.prototype;var superCtor=Object.getPrototypeOf(proto).constructor;if(superCtor.prototype instanceof PolymerElement){superCtor.finalize();}finalizeClass(klass);}/**
     * Configures a `klass` based on a staic `klass.config` object and
     * a `template`. This includes creating accessors and effects
     * for properties in `config` and the `template` as well as preparing the
     * `template` for stamping.
     *
     * @param {HTMLElement} klass Element class
     * @private
     */function finalizeClass(klass){klass.__finalized=true;var proto=klass.prototype;if(klass.hasOwnProperty(JSCompiler_renameProperty('is',klass))&&klass.is){Polymer.telemetry.register(proto);}var props=ownPropertiesForClass(klass);if(props){finalizeProperties(proto,props);}var observers=ownObserversForClass(klass);if(observers){finalizeObservers(proto,observers,props);}// note: create "working" template that is finalized at instance time
var template=klass.template;if(template){if(typeof template==='string'){var t=document.createElement('template');t.innerHTML=template;template=t;}else{template=template.cloneNode(true);}proto._template=template;}}/**
     * Configures a `proto` based on a `properties` object.
     * Leverages `PropertyEffects` to create property accessors and effects
     * supporting, observers, reflecting to attributes, change notification,
     * computed properties, and read only properties.
     * @param {HTMLElement} proto Element class prototype to add accessors
     *    and effects to
     * @param {Object} properties Flattened bag of property descriptors for
     *    this class
     * @private
     */function finalizeProperties(proto,properties){for(var p in properties){createPropertyFromConfig(proto,p,properties[p],properties);}}/**
     * Configures a `proto` based on a `observers` array.
     * Leverages `PropertyEffects` to create observers.
     * @param {HTMLElement} proto Element class prototype to add accessors
     *   and effects to
     * @param {Object} observers Flattened array of observer descriptors for
     *   this class
     * @param {Object} dynamicFns Object containing keys for any properties
     *   that are functions and should trigger the effect when the function
     *   reference is changed
     * @private
     */function finalizeObservers(proto,observers,dynamicFns){for(var i=0;i<observers.length;i++){proto._createMethodObserver(observers[i],dynamicFns);}}/**
     * Creates effects for a property.
     *
     * Note, once a property has been set to
     * `readOnly`, `computed`, `reflectToAttribute`, or `notify`
     * these values may not be changed. For example, a subclass cannot
     * alter these settings. However, additional `observers` may be added
     * by subclasses.
     *
     * The info object should may contain property metadata as follows:
     *
     * * `type`: {function} type to which an attribute matching the property
     * is deserialized. Note the property is camel-cased from a dash-cased
     * attribute. For example, 'foo-bar' attribute is dersialized to a
     * property named 'fooBar'.
     *
     * * `readOnly`: {boolean} creates a readOnly property and
     * makes a private setter for the private of the form '_setFoo' for a
     * property 'foo',
     *
     * * `computed`: {string} creates a computed property. A computed property
     * also automatically is set to `readOnly: true`. The value is calculated
     * by running a method and arguments parsed from the given string. For
     * example 'compute(foo)' will compute a given property when the
     * 'foo' property changes by executing the 'compute' method. This method
     * must return the computed value.
     *
     * * `reflectToAttriute`: {boolean} If true, the property value is reflected
     * to an attribute of the same name. Note, the attribute is dash-cased
     * so a property named 'fooBar' is reflected as 'foo-bar'.
     *
     * * `notify`: {boolean} sends a non-bubbling notification event when
     * the property changes. For example, a property named 'foo' sends an
     * event named 'foo-changed' with `event.detail` set to the value of
     * the property.
     *
     * * observer: {string} name of a method that runs when the property
     * changes. The arguments of the method are (value, previousValue).
     *
     * Note: Users may want control over modifying property
     * effects via subclassing. For example, a user might want to make a
     * reflectToAttribute property not do so in a subclass. We've chosen to
     * disable this because it leads to additional complication.
     * For example, a readOnly effect generates a special setter. If a subclass
     * disables the effect, the setter would fail unexpectedly.
     * Based on feedback, we may want to try to make effects more malleable
     * and/or provide an advanced api for manipulating them.
     * Also consider adding warnings when an effect cannot be changed.
     *
     * @param {HTMLElement} proto Element class prototype to add accessors
     *   and effects to
     * @param {string} name Name of the property.
     * @param {Object} info Info object from which to create property effects.
     * Supported keys:
     * @param {Object} allProps Flattened map of all properties defined in this
     *   element (including inherited properties)
     * @private
     */function createPropertyFromConfig(proto,name,info,allProps){// computed forces readOnly...
if(info.computed){info.readOnly=true;}// Note, since all computed properties are readOnly, this prevents
// adding additional computed property effects (which leads to a confusing
// setup where multiple triggers for setting a property)
// While we do have `hasComputedEffect` this is set on the property's
// dependencies rather than itself.
if(info.computed&&!proto._hasReadOnlyEffect(name)){proto._createComputedProperty(name,info.computed,allProps);}if(info.readOnly&&!proto._hasReadOnlyEffect(name)){proto._createReadOnlyProperty(name,!info.computed);}if(info.reflectToAttribute&&!proto._hasReflectEffect(name)){proto._createReflectedProperty(name);}if(info.notify&&!proto._hasNotifyEffect(name)){proto._createNotifyingProperty(name);}// always add observer
if(info.observer){proto._createPropertyObserver(name,info.observer,allProps[info.observer]);}}/**
     * Configures an element `proto` to function with a given `template`.
     * The element name `is` and extends `ext` must be specified for ShadyCSS
     * style scoping.
     *
     * @param {HTMLElement} proto Element class prototype to add accessors
     *   and effects to
     * @param {HTMLTemplateElement} template Template to process and bind
     * @param {string} baseURI URL against which to resolve urls in
     *   style element cssText
     * @param {string} is Tag name (or type extension name) for this element
     * @param {string=} ext For type extensions, the tag name that was extended
     * @private
     */function finalizeTemplate(proto,template,baseURI,is,ext){// support `include="module-name"`
var cssText=Polymer.StyleGather.cssFromTemplate(template,baseURI)+Polymer.StyleGather.cssFromModuleImports(is);if(cssText){var style=document.createElement('style');style.textContent=cssText;template.content.insertBefore(style,template.content.firstChild);}if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(template,is,ext);}proto._bindTemplate(template);}/**
     * @polymerMixinClass
     * @unrestricted
     * @implements {Polymer_ElementMixin}
     */var PolymerElement=function(_polymerElementBase){_inherits(PolymerElement,_polymerElementBase);function PolymerElement(){_classCallCheck(this,PolymerElement);return _possibleConstructorReturn(this,(PolymerElement.__proto__||Object.getPrototypeOf(PolymerElement)).apply(this,arguments));}_createClass(PolymerElement,[{key:"_initializeProperties",/**
       * Overrides the default `Polymer.PropertyAccessors` to ensure class
       * metaprogramming related to property accessors and effects has
       * completed (calls `finalize`).
       *
       * It also initializes any property defaults provided via `value` in
       * `properties` metadata.
       *
       * @override
       */value:function _initializeProperties(){Polymer.telemetry.instanceCount++;this.constructor.finalize();var importPath=this.constructor.importPath;// note: finalize template when we have access to `localName` to
// avoid dependence on `is` for polyfilling styling.
if(this._template&&!this._template.__polymerFinalized){this._template.__polymerFinalized=true;var baseURI=importPath?Polymer.ResolveUrl.resolveUrl(importPath):'';finalizeTemplate(this.__proto__,this._template,baseURI,this.localName);}_get(PolymerElement.prototype.__proto__||Object.getPrototypeOf(PolymerElement.prototype),"_initializeProperties",this).call(this);// set path defaults
this.rootPath=Polymer.rootPath;this.importPath=importPath;// apply property defaults...
var p$=propertyDefaultsForClass(this.constructor);if(!p$){return;}for(var p in p$){var info=p$[p];// Don't set default value if there is already an own property, which
// happens when a `properties` property with default but no effects had
// a property set (e.g. bound) by its host before upgrade
if(!this.hasOwnProperty(p)){var value=typeof info.value=='function'?info.value.call(this):info.value;// Set via `_setProperty` if there is an accessor, to enable
// initializing readOnly property defaults
if(this._hasAccessor(p)){this._setPendingProperty(p,value,true);}else{this[p]=value;}}}}/**
       * Provides a default implementation of the standard Custom Elements
       * `connectedCallback`.
       *
       * The default implementation enables the property effects system and
       * flushes any pending properties, and updates shimmed CSS properties
       * when using the ShadyCSS scoping/custom properties polyfill.
       *
       * @override
       */},{key:"connectedCallback",value:function connectedCallback(){if(window.ShadyCSS&&this._template){window.ShadyCSS.styleElement(this);}this._enableProperties();}/**
       * Provides a default implementation of the standard Custom Elements
       * `disconnectedCallback`.
       *
       * @override
       */},{key:"disconnectedCallback",value:function disconnectedCallback(){}/**
       * Stamps the element template.
       *
       * @override
       */},{key:"ready",value:function ready(){if(this._template){this.root=this._stampTemplate(this._template);this.$=this.root.$;}_get(PolymerElement.prototype.__proto__||Object.getPrototypeOf(PolymerElement.prototype),"ready",this).call(this);}/**
       * Implements `PropertyEffects`'s `_readyClients` call. Attaches
       * element dom by calling `_attachDom` with the dom stamped from the
       * element's template via `_stampTemplate`. Note that this allows
       * client dom to be attached to the element prior to any observers
       * running.
       *
       * @override
       */},{key:"_readyClients",value:function _readyClients(){if(this._template){this.root=this._attachDom(this.root);}// The super._readyClients here sets the clients initialized flag.
// We must wait to do this until after client dom is created/attached
// so that this flag can be checked to prevent notifications fired
// during this process from being handled before clients are ready.
_get(PolymerElement.prototype.__proto__||Object.getPrototypeOf(PolymerElement.prototype),"_readyClients",this).call(this);}/**
       * Attaches an element's stamped dom to itself. By default,
       * this method creates a `shadowRoot` and adds the dom to it.
       * However, this method may be overridden to allow an element
       * to put its dom in another location.
       *
       * @throws {Error}
       * @suppress {missingReturn}
       * @param {NodeList} dom to attach to the element.
       * @return {Node} node to which the dom has been attached.
       */},{key:"_attachDom",value:function _attachDom(dom){if(this.attachShadow){if(dom){if(!this.shadowRoot){this.attachShadow({mode:'open'});}this.shadowRoot.appendChild(dom);return this.shadowRoot;}}else{throw new Error('ShadowDOM not available. '+// TODO(sorvell): move to compile-time conditional when supported
'Polymer.Element can create dom as children instead of in '+'ShadowDOM by setting `this.root = this;\` before \`ready\`.');}}/**
       * Provides a default implementation of the standard Custom Elements
       * `attributeChangedCallback`.
       *
       * By default, attributes declared in `properties` metadata are
       * deserialized using their `type` information to properties of the
       * same name.  "Dash-cased" attributes are deserialzed to "camelCase"
       * properties.
       *
       * @override
       */},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value){if(old!==value){var property=caseMap.dashToCamelCase(name);var type=propertiesForClass(this.constructor)[property].type;if(!this._hasReadOnlyEffect(property)){this._attributeToProperty(name,value,type);}}}/**
       * When using the ShadyCSS scoping and custom property shim, causes all
       * shimmed styles in this element (and its subtree) to be updated
       * based on current custom property values.
       *
       * The optional parameter overrides inline custom property styles with an
       * object of properties where the keys are CSS properties, and the values
       * are strings.
       *
       * Example: `this.updateStyles({'--color': 'blue'})`
       *
       * These properties are retained unless a value of `null` is set.
       *
       * @param {Object=} properties Bag of custom property key/values to
       *   apply to this element.
       */},{key:"updateStyles",value:function updateStyles(properties){if(window.ShadyCSS){window.ShadyCSS.styleSubtree(this,properties);}}/**
       * Rewrites a given URL relative to a base URL. The base URL defaults to
       * the original location of the document containing the `dom-module` for
       * this element. This method will return the same URL before and after
       * bundling.
       *
       * @param {string} url URL to resolve.
       * @param {string=} base Optional base URL to resolve against, defaults
       * to the element's `importPath`
       * @return {string} Rewritten URL relative to base
       */},{key:"resolveUrl",value:function resolveUrl(url,base){if(!base&&this.importPath){base=Polymer.ResolveUrl.resolveUrl(this.importPath);}return Polymer.ResolveUrl.resolveUrl(url,base);}/**
       * Overrides `PropertyAccessors` to add map of dynamic functions on
       * template info, for consumption by `PropertyEffects` template binding
       * code. This map determines which method templates should have accessors
       * created for them.
       *
       * @override
       */}],[{key:"finalize",/**
       * Called automatically when the first element instance is created to
       * ensure that class finalization work has been completed.
       * May be called by users to eagerly perform class finalization work
       * prior to the creation of the first element instance.
       *
       * Class finalization work generally includes meta-programming such as
       * creating property accessors and any property effect metadata needed for
       * the features used.
       *
       * @public
       */value:function finalize(){if(!hasClassFinalized(this)){finalizeClassAndSuper(this);}}/**
       * Returns the template that will be stamped into this element's shadow root.
       *
       * If a `static get is()` getter is defined, the default implementation
       * will return the first `<template>` in a `dom-module` whose `id`
       * matches this element's `is`.
       *
       * Users may override this getter to return an arbitrary template
       * (in which case the `is` getter is unnecessary). The template returned
       * may be either an `HTMLTemplateElement` or a string that will be
       * automatically parsed into a template.
       *
       * Note that when subclassing, if the super class overrode the default
       * implementation and the subclass would like to provide an alternate
       * template via a `dom-module`, it should override this getter and
       * return `Polymer.DomModule.import(this.is, 'template')`.
       *
       * If a subclass would like to modify the super class template, it should
       * clone it rather than modify it in place.  If the getter does expensive
       * work such as cloning/modifying a template, it should memoize the
       * template for maximum performance:
       *
       *   let memoizedTemplate;
       *   class MySubClass extends MySuperClass {
       *     static get template() {
       *       if (!memoizedTemplate) {
       *         memoizedTemplate = super.template.cloneNode(true);
       *         let subContent = document.createElement('div');
       *         subContent.textContent = 'This came from MySubClass';
       *         memoizedTemplate.content.appendChild(subContent);
       *       }
       *       return memoizedTemplate;
       *     }
       *   }
       *
       * @return {HTMLTemplateElement|string} Template to be stamped
       */},{key:"_parseTemplateContent",value:function _parseTemplateContent(template,templateInfo,nodeInfo){templateInfo.dynamicFns=templateInfo.dynamicFns||propertiesForClass(this);return _get(PolymerElement.__proto__||Object.getPrototypeOf(PolymerElement),"_parseTemplateContent",this).call(this,template,templateInfo,nodeInfo);}},{key:"observedAttributes",/**
       * Standard Custom Elements V1 API.  The default implementation returns
       * a list of dash-cased attributes based on a flattening of all properties
       * declared in `static get properties()` for this element and any
       * superclasses.
       *
       * @return {Array} Observed attribute list
       */get:function get(){if(!this.hasOwnProperty(JSCompiler_renameProperty('__observedAttributes',this))){var list=[];var properties=propertiesForClass(this);for(var prop in properties){list.push(Polymer.CaseMap.camelToDashCase(prop));}this.__observedAttributes=list;}return this.__observedAttributes;}},{key:"template",get:function get(){if(!this.hasOwnProperty(JSCompiler_renameProperty('_template',this))){this._template=Polymer.DomModule.import(this.is,'template')||// note: implemented so a subclass can retrieve the super
// template; call the super impl this way so that `this` points
// to the superclass.
Object.getPrototypeOf(this.prototype).constructor.template;}return this._template;}/**
       * Path matching the url from which the element was imported.
       * This path is used to resolve url's in template style cssText.
       * The `importPath` property is also set on element instances and can be
       * used to create bindings relative to the import path.
       * Defaults to the path matching the url containing a `dom-module` element
       * matching this element's static `is` property.
       * Note, this path should contain a trailing `/`.
       *
       * @return {string} The import path for this element class
       */},{key:"importPath",get:function get(){if(!this.hasOwnProperty(JSCompiler_renameProperty('_importPath',this))){var _module=Polymer.DomModule.import(this.is);this._importPath=_module?_module.assetpath:''||Object.getPrototypeOf(this.prototype).constructor.importPath;}return this._importPath;}}]);return PolymerElement;}(polymerElementBase);return PolymerElement;});/**
   * Provides basic tracking of element definitions (registrations) and
   * instance counts.
   *
   * @namespace
   * @summary Provides basic tracking of element definitions (registrations) and
   * instance counts.
   */Polymer.telemetry={/**
     * Total number of Polymer element instances created.
     * @type {number}
     */instanceCount:0,/**
     * Array of Polymer element classes that have been finalized.
     * @type {Array<Polymer.Element>}
     */registrations:[],/**
     * @param {HTMLElement} prototype Element prototype to log
     * @private
     */_regLog:function _regLog(prototype){console.log('['+prototype.is+']: registered');},/**
     * Registers a class prototype for telemetry purposes.
     * @param {HTMLElement} prototype Element prototype to register
     * @protected
     */register:function register(prototype){this.registrations.push(prototype);Polymer.log&&this._regLog(prototype);},/**
     * Logs all elements registered with an `is` to the console.
     * @public
     */dumpRegistrations:function dumpRegistrations(){this.registrations.forEach(this._regLog);}};/**
   * When using the ShadyCSS scoping and custom property shim, causes all
   * shimmed `styles` (via `custom-style`) in the document (and its subtree)
   * to be updated based on current custom property values.
   *
   * The optional parameter overrides inline custom property styles with an
   * object of properties where the keys are CSS properties, and the values
   * are strings.
   *
   * Example: `Polymer.updateStyles({'--color': 'blue'})`
   *
   * These properties are retained unless a value of `null` is set.
   *
   * @param {Object=} props Bag of custom property key/values to
   *   apply to the document.
   */Polymer.updateStyles=function(props){if(window.ShadyCSS){window.ShadyCSS.styleDocument(props);}};/**
   * Globally settable property that is automatically assigned to
   * `Polymer.ElementMixin` instances, useful for binding in templates to
   * make URL's relative to an application's root.  Defaults to the main
   * document URL, but can be overridden by users.  It may be useful to set
   * `Polymer.rootPath` to provide a stable application mount path when
   * using client side routing.
   *
   * @memberof Polymer
   */Polymer.rootPath=Polymer.rootPath||Polymer.ResolveUrl.pathFromUrl(document.baseURI||window.location.href);})();(function(){'use strict';/**
   * Base class that provides the core API for Polymer's meta-programming
   * features including template stamping, data-binding, attribute deserialization,
   * and property change observation.
   *
   * @polymerElement
   * @memberof Polymer
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @extends HTMLElement
   * @mixes Polymer.ElementMixin
   * @summary Custom element base class that provides the core API for Polymer's
   *   key meta-programming features including template stamping, data-binding,
   *   attribute deserialization, and property change observation
   */var Element=Polymer.ElementMixin(HTMLElement);Polymer.Element=Element;})();(function(){'use strict';// Common implementation for mixin & behavior
function mutablePropertyChange(inst,property,value,old,mutableData){var isObject=void 0;if(mutableData){isObject=(typeof value==="undefined"?"undefined":_typeof(value))==='object'&&value!==null;// Pull `old` for Objects from temp cache, but treat `null` as a primitive
if(isObject){old=inst.__dataTemp[property];}}// Strict equality check, but return false for NaN===NaN
var shouldChange=old!==value&&(old===old||value===value);// Objects are stored in temporary cache (cleared at end of
// turn), which is used for dirty-checking
if(isObject&&shouldChange){inst.__dataTemp[property]=value;}return shouldChange;}/**
   * Element class mixin to skip strict dirty-checking for objects and arrays
   * (always consider them to be "dirty"), for use on elements utilizing
   * `Polymer.PropertyEffects`
   *
   * By default, `Polymer.PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will cause Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   *
   * In order to make the dirty check strategy configurable, see
   * `Polymer.OptionalMutableData`.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse as opposed to using strict dirty checking with immutable
   * patterns or Polymer's path notification API.
   *
   * @polymerMixin
   * @memberof Polymer
   * @summary Element class mixin to skip strict dirty-checking for objects
   *   and arrays
   */Polymer.MutableData=Polymer.dedupingMixin(function(superClass){/**
     * @polymerMixinClass
     * @implements {Polymer_MutableData}
     */var MutableData=function(_superClass3){_inherits(MutableData,_superClass3);function MutableData(){_classCallCheck(this,MutableData);return _possibleConstructorReturn(this,(MutableData.__proto__||Object.getPrototypeOf(MutableData)).apply(this,arguments));}_createClass(MutableData,[{key:"_shouldPropertyChange",/**
       * Overrides `Polymer.PropertyEffects` to provide option for skipping
       * strict equality checking for Objects and Arrays.
       *
       * This method pulls the value to dirty check against from the `__dataTemp`
       * cache (rather than the normal `__data` cache) for Objects.  Since the temp
       * cache is cleared at the end of a turn, this implementation allows
       * side-effects of deep object changes to be processed by re-setting the
       * same object (using the temp cache as an in-turn backstop to prevent
       * cycles due to 2-way notification).
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       * @protected
       */value:function _shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,true);}}]);return MutableData;}(superClass);return MutableData;});/**
   * Element class mixin to add the optional ability to skip strict
   * dirty-checking for objects and arrays (always consider them to be
   * "dirty") by setting a `mutable-data` attribute on an element instance.
   *
   * By default, `Polymer.PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will allow Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   *
   * While this mixin adds the ability to forgo Object/Array dirty checking,
   * the `mutableData` flag defaults to false and must be set on the instance.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse by relying on `mutableData: true` as opposed to using
   * strict dirty checking with immutable patterns or Polymer's path notification
   * API.
   *
   * @polymerMixin
   * @memberof Polymer
   * @summary Element class mixin to optionally skip strict dirty-checking
   *   for objects and arrays
   */Polymer.OptionalMutableData=Polymer.dedupingMixin(function(superClass){/**
     * @polymerMixinClass
     * @implements {Polymer_OptionalMutableData}
     */var OptionalMutableData=function(_superClass4){_inherits(OptionalMutableData,_superClass4);function OptionalMutableData(){_classCallCheck(this,OptionalMutableData);return _possibleConstructorReturn(this,(OptionalMutableData.__proto__||Object.getPrototypeOf(OptionalMutableData)).apply(this,arguments));}_createClass(OptionalMutableData,[{key:"_shouldPropertyChange",/**
       * Overrides `Polymer.PropertyEffects` to provide option for skipping
       * strict equality checking for Objects and Arrays.
       *
       * When `this.mutableData` is true on this instance, this method
       * pulls the value to dirty check against from the `__dataTemp` cache
       * (rather than the normal `__data` cache) for Objects.  Since the temp
       * cache is cleared at the end of a turn, this implementation allows
       * side-effects of deep object changes to be processed by re-setting the
       * same object (using the temp cache as an in-turn backstop to prevent
       * cycles due to 2-way notification).
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       * @protected
       */value:function _shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,this.mutableData);}}],[{key:"properties",get:function get(){return{/**
           * Instance-level flag for configuring the dirty-checking strategy
           * for this element.  When true, Objects and Arrays will skip dirty
           * checking, otherwise strict equality checking will be used.
           */mutableData:Boolean};}}]);return OptionalMutableData;}(superClass);return OptionalMutableData;});// Export for use by legacy behavior
Polymer.MutableData._mutablePropertyChange=mutablePropertyChange;})();(function(){'use strict';// Base class for HTMLTemplateElement extension that has property effects
// machinery for propagating host properties to children. This is an ES5
// class only because Babel (incorrectly) requires super() in the class
// constructor even though no `this` is used and it returns an instance.
var newInstance=null;function HTMLTemplateElementExtension(){return newInstance;}HTMLTemplateElementExtension.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:HTMLTemplateElementExtension,writable:true}});var DataTemplate=Polymer.PropertyEffects(HTMLTemplateElementExtension);var MutableDataTemplate=Polymer.MutableData(DataTemplate);// Applies a DataTemplate subclass to a <template> instance
function upgradeTemplate(template,constructor){newInstance=template;Object.setPrototypeOf(template,constructor.prototype);new constructor();newInstance=null;}// Base class for TemplateInstance's
/**
     * @constructor
     * @implements {Polymer_PropertyEffects}
     */var base=Polymer.PropertyEffects(function(){function _class(){_classCallCheck(this,_class);}return _class;}());var TemplateInstanceBase=function(_base){_inherits(TemplateInstanceBase,_base);function TemplateInstanceBase(props){_classCallCheck(this,TemplateInstanceBase);var _this9=_possibleConstructorReturn(this,(TemplateInstanceBase.__proto__||Object.getPrototypeOf(TemplateInstanceBase)).call(this));_this9._configureProperties(props);_this9.root=_this9._stampTemplate(_this9.__dataHost);// Save list of stamped children
var children=_this9.children=[];for(var n=_this9.root.firstChild;n;n=n.nextSibling){children.push(n);n.__templatizeInstance=_this9;}if(_this9.__templatizeOwner.__hideTemplateChildren__){_this9._showHideChildren(true);}// Flush props only when props are passed if instance props exist
// or when there isn't instance props.
var options=_this9.__templatizeOptions;if(props&&options.instanceProps||!options.instanceProps){_this9._enableProperties();}return _this9;}/**
       * Configure the given `props` by calling `_setPendingProperty`. Also
       * sets any properties stored in `__hostProps`.
       * @private
       * @param {Object} props Object of property name-value pairs to set.
       */_createClass(TemplateInstanceBase,[{key:"_configureProperties",value:function _configureProperties(props){var options=this.__templatizeOptions;if(props){for(var iprop in options.instanceProps){if(iprop in props){this._setPendingProperty(iprop,props[iprop]);}}}for(var hprop in this.__hostProps){this._setPendingProperty(hprop,this.__dataHost['_host_'+hprop]);}}/**
       * Forwards a host property to this instance.  This method should be
       * called on instances from the `options.forwardHostProp` callback
       * to propagate changes of host properties to each instance.
       *
       * Note this method enqueues the change, which are flushed as a batch.
       *
       * @param {string} prop Property or path name
       * @param {*} value Value of the property to forward
       */},{key:"forwardHostProp",value:function forwardHostProp(prop,value){if(this._setPendingPropertyOrPath(prop,value,false,true)){this.__dataHost._enqueueClient(this);}}/**
       * @override
       */},{key:"_addEventListenerToNode",value:function _addEventListenerToNode(node,eventName,handler){var _this10=this;if(this._methodHost&&this.__templatizeOptions.parentModel){// If this instance should be considered a parent model, decorate
// events this template instance as `model`
this._methodHost._addEventListenerToNode(node,eventName,function(e){e.model=_this10;handler(e);});}else{// Otherwise delegate to the template's host (which could be)
// another template instance
var templateHost=this.__dataHost.__dataHost;if(templateHost){templateHost._addEventListenerToNode(node,eventName,handler);}}}/**
       * Shows or hides the template instance top level child elements. For
       * text nodes, `textContent` is removed while "hidden" and replaced when
       * "shown."
       * @param {boolean} hide Set to true to hide the children;
       * set to false to show them.
       * @protected
       */},{key:"_showHideChildren",value:function _showHideChildren(hide){var c=this.children;for(var i=0;i<c.length;i++){var n=c[i];// Ignore non-changes
if(Boolean(hide)!=Boolean(n.__hideTemplateChildren__)){if(n.nodeType===Node.TEXT_NODE){if(hide){n.__polymerTextContent__=n.textContent;n.textContent='';}else{n.textContent=n.__polymerTextContent__;}}else if(n.style){if(hide){n.__polymerDisplay__=n.style.display;n.style.display='none';}else{n.style.display=n.__polymerDisplay__;}}}n.__hideTemplateChildren__=hide;if(n._showHideChildren){n._showHideChildren(hide);}}}/**
       * Overrides default property-effects implementation to intercept
       * textContent bindings while children are "hidden" and cache in
       * private storage for later retrieval.
       *
       * @override
       */},{key:"_setUnmanagedPropertyToNode",value:function _setUnmanagedPropertyToNode(node,prop,value){if(node.__hideTemplateChildren__&&node.nodeType==Node.TEXT_NODE&&prop=='textContent'){node.__polymerTextContent__=value;}else{_get(TemplateInstanceBase.prototype.__proto__||Object.getPrototypeOf(TemplateInstanceBase.prototype),"_setUnmanagedPropertyToNode",this).call(this,node,prop,value);}}/**
       * Find the parent model of this template instance.  The parent model
       * is either another templatize instance that had option `parentModel: true`,
       * or else the host element.
       *
       * @return {Polymer.PropertyEffectsInterface} The parent model of this instance
       */},{key:"parentModel",get:function get(){var model=this.__parentModel;if(!model){var options=void 0;model=this;do{// A template instance's `__dataHost` is a <template>
// `model.__dataHost.__dataHost` is the template's host
model=model.__dataHost.__dataHost;}while((options=model.__templatizeOptions)&&!options.parentModel);this.__parentModel=model;}return model;}}]);return TemplateInstanceBase;}(base);var MutableTemplateInstanceBase=Polymer.MutableData(TemplateInstanceBase);function findMethodHost(template){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
var templateHost=template.__dataHost;return templateHost&&templateHost._methodHost||templateHost;}function createTemplatizerClass(template,templateInfo,options){// Anonymous class created by the templatize
/**
       * @unrestricted
       */var base=options.mutableData?MutableTemplateInstanceBase:TemplateInstanceBase;var klass=function(_base2){_inherits(klass,_base2);function klass(){_classCallCheck(this,klass);return _possibleConstructorReturn(this,(klass.__proto__||Object.getPrototypeOf(klass)).apply(this,arguments));}return klass;}(base);klass.prototype.__templatizeOptions=options;klass.prototype._bindTemplate(template);addNotifyEffects(klass,template,templateInfo,options);return klass;}function addPropagateEffects(template,templateInfo,options){var userForwardHostProp=options.forwardHostProp;if(userForwardHostProp){// Provide data API and property effects on memoized template class
var klass=templateInfo.templatizeTemplateClass;if(!klass){var _base3=options.mutableData?MutableDataTemplate:DataTemplate;klass=templateInfo.templatizeTemplateClass=function(_base4){_inherits(TemplatizedTemplate,_base4);function TemplatizedTemplate(){_classCallCheck(this,TemplatizedTemplate);return _possibleConstructorReturn(this,(TemplatizedTemplate.__proto__||Object.getPrototypeOf(TemplatizedTemplate)).apply(this,arguments));}return TemplatizedTemplate;}(_base3);// Add template - >instances effects
// and host <- template effects
var hostProps=templateInfo.hostProps;for(var prop in hostProps){klass.prototype._addPropertyEffect('_host_'+prop,klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:createForwardHostPropEffect(prop,userForwardHostProp)});klass.prototype._createNotifyingProperty('_host_'+prop);}}upgradeTemplate(template,klass);// Mix any pre-bound data into __data; no need to flush this to
// instances since they pull from the template at instance-time
if(template.__dataProto){// Note, generally `__dataProto` could be chained, but it's guaranteed
// to not be since this is a vanilla template we just added effects to
Object.assign(template.__data,template.__dataProto);}// Clear any pending data for performance
template.__dataTemp={};template.__dataPending=null;template.__dataOld=null;template._enableProperties();}}function createForwardHostPropEffect(hostProp,userForwardHostProp){return function forwardHostProp(template,prop,props){userForwardHostProp.call(template.__templatizeOwner,prop.substring('_host_'.length),props[prop]);};}function addNotifyEffects(klass,template,templateInfo,options){var hostProps=templateInfo.hostProps||{};for(var iprop in options.instanceProps){delete hostProps[iprop];var userNotifyInstanceProp=options.notifyInstanceProp;if(userNotifyInstanceProp){klass.prototype._addPropertyEffect(iprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyInstancePropEffect(iprop,userNotifyInstanceProp)});}}if(options.forwardHostProp&&template.__dataHost){for(var hprop in hostProps){klass.prototype._addPropertyEffect(hprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyHostPropEffect()});}}}function createNotifyInstancePropEffect(instProp,userNotifyInstanceProp){return function notifyInstanceProp(inst,prop,props){userNotifyInstanceProp.call(inst.__templatizeOwner,inst,prop,props[prop]);};}function createNotifyHostPropEffect(){return function notifyHostProp(inst,prop,props){inst.__dataHost._setPendingPropertyOrPath('_host_'+prop,props[prop],true,true);};}/**
     * Module for preparing and stamping instances of templates that utilize
     * Polymer's data-binding and declarative event listener features.
     *
     * Example:
     *
     *     // Get a template from somewhere, e.g. light DOM
     *     let template = this.querySelector('template');
     *     // Prepare the template
     *     let TemplateClass = Polymer.Templatize.templatize(template);
     *     // Instance the template with an initial data model
     *     let instance = new TemplateClass({myProp: 'initial'});
     *     // Insert the instance's DOM somewhere, e.g. element's shadow DOM
     *     this.shadowRoot.appendChild(instance.root);
     *     // Changing a property on the instance will propagate to bindings
     *     // in the template
     *     instance.myProp = 'new value';
     *
     * The `options` dictionary passed to `templatize` allows for customizing
     * features of the generated template class, including how outer-scope host
     * properties should be forwarded into template instances, how any instance
     * properties added into the template's scope should be notified out to
     * the host, and whether the instance should be decorated as a "parent model"
     * of any event handlers.
     *
     *     // Customze property forwarding and event model decoration
     *     let TemplateClass = Polymer.Tempaltize.templatize(template, this, {
     *       parentModel: true,
     *       instanceProps: {...},
     *       forwardHostProp(property, value) {...},
     *       notifyInstanceProp(instance, property, value) {...},
     *     });
     *
     *
     * @namespace
     * @memberof Polymer
     * @summary Module for preparing and stamping instances of templates
     *   utilizing Polymer templating features.
     */var Templatize={/**
       * Returns an anonymous `Polymer.PropertyEffects` class bound to the
       * `<template>` provided.  Instancing the class will result in the
       * template being stamped into document fragment stored as the instance's
       * `root` property, after which it can be appended to the DOM.
       *
       * Templates may utilize all Polymer data-binding features as well as
       * declarative event listeners.  Event listeners and inline computing
       * functions in the template will be called on the host of the template.
       *
       * The constructor returned takes a single argument dictionary of initial
       * property values to propagate into template bindings.  Additionally
       * host properties can be forwarded in, and instance properties can be
       * notified out by providing optional callbacks in the `options` dictionary.
       *
       * Valid configuration in `options` are as follows:
       *
       * - `forwardHostProp(property, value)`: Called when a property referenced
       *   in the template changed on the template's host. As this library does
       *   not retain references to templates instanced by the user, it is the
       *   templatize owner's responsibility to forward host property changes into
       *   user-stamped instances.  The `instance.forwardHostProp(property, value)`
       *    method on the generated class should be called to forward host
       *   properties into the template to prevent unnecessary property-changed
       *   notifications. Any properties referenced in the template that are not
       *   defined in `instanceProps` will be notified up to the template's host
       *   automatically.
       * - `instanceProps`: Dictionary of property names that will be added
       *   to the instance by the templatize owner.  These properties shadow any
       *   host properties, and changes within the template to these properties
       *   will result in `notifyInstanceProp` being called.
       * - `mutableData`: When `true`, the generated class will skip strict
       *   dirty-checking for objects and arrays (always consider them to be
       *   "dirty").
       * - `notifyInstanceProp(instance, property, value)`: Called when
       *   an instance property changes.  Users may choose to call `notifyPath`
       *   on e.g. the owner to notify the change.
       * - `parentModel`: When `true`, events handled by declarative event listeners
       *   (`on-event="handler"`) will be decorated with a `model` property pointing
       *   to the template instance that stamped it.  It will also be returned
       *   from `instance.parentModel` in cases where template instance nesting
       *   causes an inner model to shadow an outer model.
       *
       * Note that the class returned from `templatize` is generated only once
       * for a given `<template>` using `options` from the first call for that
       * template, and the cached class is returned for all subsequent calls to
       * `templatize` for that template.  As such, `options` callbacks should not
       * close over owner-specific properties since only the first `options` is
       * used; rather, callbacks are called bound to the `owner`, and so context
       * needed from the callbacks (such as references to `instances` stamped)
       * should be stored on the `owner` such that they can be retrieved via `this`.
       *
       * @memberof Polymer.Templatize
       * @param {HTMLTemplateElement} template Template to templatize
       * @param {*} owner Owner of the template instances; any optional callbacks
       *   will be bound to this owner.
       * @param {*=} options Options dictionary (see summary for details)
       * @return {TemplateInstanceBase} Generated class bound to the template
       *   provided
       */templatize:function templatize(template,owner,options){options=options||{};if(template.__templatizeOwner){throw new Error('A <template> can only be templatized once');}template.__templatizeOwner=owner;var templateInfo=owner.constructor._parseTemplate(template);// Get memoized base class for the prototypical template, which
// includes property effects for binding template & forwarding
var baseClass=templateInfo.templatizeInstanceClass;if(!baseClass){baseClass=createTemplatizerClass(template,templateInfo,options);templateInfo.templatizeInstanceClass=baseClass;}// Host property forwarding must be installed onto template instance
addPropagateEffects(template,templateInfo,options);// Subclass base class and add reference for this specific template
var klass=function(_baseClass){_inherits(TemplateInstance,_baseClass);function TemplateInstance(){_classCallCheck(this,TemplateInstance);return _possibleConstructorReturn(this,(TemplateInstance.__proto__||Object.getPrototypeOf(TemplateInstance)).apply(this,arguments));}return TemplateInstance;}(baseClass);klass.prototype._methodHost=findMethodHost(template);klass.prototype.__dataHost=template;klass.prototype.__templatizeOwner=owner;klass.prototype.__hostProps=templateInfo.hostProps;return klass;},/**
       * Returns the template "model" associated with a given element, which
       * serves as the binding scope for the template instance the element is
       * contained in. A template model is an instance of
       * `TemplateInstanceBase`, and should be used to manipulate data
       * associated with this template instance.
       *
       * Example:
       *
       *   let model = modelForElement(el);
       *   if (model.index < 10) {
       *     model.set('item.checked', true);
       *   }
       *
       * @memberof Polymer.Templatize
       * @param {HTMLTemplateElement} template The model will be returned for
       *   elements stamped from this template
       * @param {HTMLElement} el Element for which to return a template model.
       * @return {TemplateInstanceBase} Template instance representing the
       *   binding scope for the element
       */modelForElement:function modelForElement(template,el){var model=void 0;while(el){// An element with a __templatizeInstance marks the top boundary
// of a scope; walk up until we find one, and then ensure that
// its __dataHost matches `this`, meaning this dom-repeat stamped it
if(model=el.__templatizeInstance){// Found an element stamped by another template; keep walking up
// from its __dataHost
if(model.__dataHost!=template){el=model.__dataHost;}else{return model;}}else{// Still in a template scope, keep going up until
// a __templatizeInstance is found
el=el.parentNode;}}return null;}};Polymer.Templatize=Templatize;})();(function(){'use strict';/** @typedef {{run: function(function(), number=):number, cancel: function(number)}} */var AsyncModule=void 0;// eslint-disable-line no-unused-vars
var Debouncer=function(){function Debouncer(){_classCallCheck(this,Debouncer);this._asyncModule=null;this._callback=null;this._timer=null;}/**
     * Sets the scheduler; that is, a module with the Async interface,
     * a callback and optional arguments to be passed to the run function
     * from the async module.
     *
     * @param {!AsyncModule} asyncModule Object with Async interface.
     * @param {function()} callback Callback to run.
     */_createClass(Debouncer,[{key:"setConfig",value:function setConfig(asyncModule,callback){var _this14=this;this._asyncModule=asyncModule;this._callback=callback;this._timer=this._asyncModule.run(function(){_this14._timer=null;_this14._callback();});}/**
     * Cancels an active debouncer and returns a reference to itself.
     */},{key:"cancel",value:function cancel(){if(this.isActive()){this._asyncModule.cancel(this._timer);this._timer=null;}}/**
     * Flushes an active debouncer and returns a reference to itself.
     */},{key:"flush",value:function flush(){if(this.isActive()){this.cancel();this._callback();}}/**
     * Returns true if the debouncer is active.
     *
     * @return {boolean} True if active.
     */},{key:"isActive",value:function isActive(){return this._timer!=null;}/**
   * Creates a debouncer if no debouncer is passed as a parameter
   * or it cancels an active debouncer otherwise. The following
   * example shows how a debouncer can be called multiple times within a
   * microtask and "debounced" such that the provided callback function is
   * called once. Add this method to a custom element:
   *
   * _debounceWork() {
   *   this._debounceJob = Polymer.Debouncer.debounce(this._debounceJob,
   *       Polymer.Async.microTask, () => {
   *     this._doWork();
   *   });
   * }
   *
   * If the `_debounceWork` method is called multiple times within the same
   * microtask, the `_doWork` function will be called only once at the next
   * microtask checkpoint.
   *
   * Note: In testing it is often convenient to avoid asynchrony. To accomplish
   * this with a debouncer, you can use `Polymer.enqueueDebouncer` and
   * `Polymer.flush`. For example, extend the above example by adding
   * `Polymer.enqueueDebouncer(this._debounceJob)` at the end of the
   * `_debounceWork` method. Then in a test, call `Polymer.flush` to ensure
   * the debouncer has completed.
   *
   * @param {Polymer.Debouncer?} debouncer Debouncer object.
   * @param {!AsyncModule} asyncModule Object with Async interface
   * @param {function()} callback Callback to run.
   * @return {!Debouncer} Returns a debouncer object.
   */}],[{key:"debounce",value:function debounce(debouncer,asyncModule,callback){if(debouncer instanceof Debouncer){debouncer.cancel();}else{debouncer=new Debouncer();}debouncer.setConfig(asyncModule,callback);return debouncer;}}]);return Debouncer;}();/**
   * @memberof Polymer
   */Polymer.Debouncer=Debouncer;})();(function(){'use strict';var debouncerQueue=[];/**
   * Adds a `Polymer.Debouncer` to a list of globally flushable tasks.
   *
   * @memberof Polymer
   * @param {Polymer.Debouncer} debouncer Debouncer to enqueue
   */Polymer.enqueueDebouncer=function(debouncer){debouncerQueue.push(debouncer);};function flushDebouncers(){var didFlush=Boolean(debouncerQueue.length);while(debouncerQueue.length){try{debouncerQueue.shift().flush();}catch(e){setTimeout(function(){throw e;});}}return didFlush;}/**
   * Forces several classes of asynchronously queued tasks to flush:
   * - Debouncers added via `enqueueDebouncer`
   * - ShadyDOM distribution
   *
   * @memberof Polymer
   */Polymer.flush=function(){var shadyDOM=void 0,debouncers=void 0;do{shadyDOM=window.ShadyDOM&&ShadyDOM.flush();if(window.ShadyCSS&&window.ShadyCSS.ScopingShim){window.ShadyCSS.ScopingShim.flush();}debouncers=flushDebouncers();}while(shadyDOM||debouncers);};})();(function(){'use strict';/**
   * @constructor
   * @implements {Polymer_OptionalMutableData}
   * @extends {Polymer.Element}
   */var domRepeatBase=Polymer.OptionalMutableData(Polymer.Element);/**
   * The `<dom-repeat>` element will automatically stamp and binds one instance
   * of template content to each object in a user-provided array.
   * `dom-repeat` accepts an `items` property, and one instance of the template
   * is stamped for each item into the DOM at the location of the `dom-repeat`
   * element.  The `item` property will be set on each instance's binding
   * scope, thus templates should bind to sub-properties of `item`.
   *
   * Example:
   *
   * ```html
   * <dom-module id="employee-list">
   *
   *   <template>
   *
   *     <div> Employee list: </div>
   *     <template is="dom-repeat" items="{{employees}}">
   *         <div>First name: <span>{{item.first}}</span></div>
   *         <div>Last name: <span>{{item.last}}</span></div>
   *     </template>
   *
   *   </template>
   *
   *   <script>
   *     Polymer({
   *       is: 'employee-list',
   *       ready: function() {
   *         this.employees = [
   *             {first: 'Bob', last: 'Smith'},
   *             {first: 'Sally', last: 'Johnson'},
   *             ...
   *         ];
   *       }
   *     });
   *   < /script>
   *
   * </dom-module>
   * ```
   *
   * Notifications for changes to items sub-properties will be forwarded to template
   * instances, which will update via the normal structured data notification system.
   *
   * Mutations to the `items` array itself should me made using the Array
   * mutation API's on `Polymer.Base` (`push`, `pop`, `splice`, `shift`,
   * `unshift`), and template instances will be kept in sync with the data in the
   * array.
   *
   * Events caught by event handlers within the `dom-repeat` template will be
   * decorated with a `model` property, which represents the binding scope for
   * each template instance.  The model is an instance of Polymer.Base, and should
   * be used to manipulate data on the instance, for example
   * `event.model.set('item.checked', true);`.
   *
   * Alternatively, the model for a template instance for an element stamped by
   * a `dom-repeat` can be obtained using the `modelForElement` API on the
   * `dom-repeat` that stamped it, for example
   * `this.$.domRepeat.modelForElement(event.target).set('item.checked', true);`.
   * This may be useful for manipulating instance data of event targets obtained
   * by event handlers on parents of the `dom-repeat` (event delegation).
   *
   * A view-specific filter/sort may be applied to each `dom-repeat` by supplying a
   * `filter` and/or `sort` property.  This may be a string that names a function on
   * the host, or a function may be assigned to the property directly.  The functions
   * should implemented following the standard `Array` filter/sort API.
   *
   * In order to re-run the filter or sort functions based on changes to sub-fields
   * of `items`, the `observe` property may be set as a space-separated list of
   * `item` sub-fields that should cause a re-filter/sort when modified.  If
   * the filter or sort function depends on properties not contained in `items`,
   * the user should observe changes to those properties and call `render` to update
   * the view based on the dependency change.
   *
   * For example, for an `dom-repeat` with a filter of the following:
   *
   * ```js
   * isEngineer: function(item) {
   *     return item.type == 'engineer' || item.manager.type == 'engineer';
   * }
   * ```
   *
   * Then the `observe` property should be configured as follows:
   *
   * ```html
   * <template is="dom-repeat" items="{{employees}}"
   *           filter="isEngineer" observe="type manager.type">
   * ```
   *
   * @polymerElement
   * @memberof Polymer
   * @extends Polymer.Element
   * @mixes Polymer.MutableData
   * @summary Custom element for stamping instance of a template bound to
   *   items in an array.
   */var DomRepeat=function(_domRepeatBase){_inherits(DomRepeat,_domRepeatBase);_createClass(DomRepeat,null,[{key:"is",// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
get:function get(){return'dom-repeat';}},{key:"template",get:function get(){return null;}},{key:"properties",get:function get(){/**
       * Fired whenever DOM is added or removed by this template (by
       * default, rendering occurs lazily).  To force immediate rendering, call
       * `render`.
       *
       * @event dom-change
       */return{/**
         * An array containing items determining how many instances of the template
         * to stamp and that that each template instance should bind to.
         */items:{type:Array},/**
         * The name of the variable to add to the binding scope for the array
         * element associated with a given template instance.
         */as:{type:String,value:'item'},/**
         * The name of the variable to add to the binding scope with the index
         * of the instance in the sorted and filtered list of rendered items.
         * Note, for the index in the `this.items` array, use the value of the
         * `itemsIndexAs` property.
         */indexAs:{type:String,value:'index'},/**
         * The name of the variable to add to the binding scope with the index
         * of the instance in the `this.items` array. Note, for the index of
         * this instance in the sorted and filtered list of rendered items,
         * use the value of the `indexAs` property.
         */itemsIndexAs:{type:String,value:'itemsIndex'},/**
         * A function that should determine the sort order of the items.  This
         * property should either be provided as a string, indicating a method
         * name on the element's host, or else be an actual function.  The
         * function should match the sort function passed to `Array.sort`.
         * Using a sort function has no effect on the underlying `items` array.
         */sort:{type:Function,observer:'__sortChanged'},/**
         * A function that can be used to filter items out of the view.  This
         * property should either be provided as a string, indicating a method
         * name on the element's host, or else be an actual function.  The
         * function should match the sort function passed to `Array.filter`.
         * Using a filter function has no effect on the underlying `items` array.
         */filter:{type:Function,observer:'__filterChanged'},/**
         * When using a `filter` or `sort` function, the `observe` property
         * should be set to a space-separated list of the names of item
         * sub-fields that should trigger a re-sort or re-filter when changed.
         * These should generally be fields of `item` that the sort or filter
         * function depends on.
         */observe:{type:String,observer:'__observeChanged'},/**
         * When using a `filter` or `sort` function, the `delay` property
         * determines a debounce time after a change to observed item
         * properties that must pass before the filter or sort is re-run.
         * This is useful in rate-limiting shuffing of the view when
         * item changes may be frequent.
         */delay:Number,/**
         * Count of currently rendered items after `filter` (if any) has been applied.
         * If "chunking mode" is enabled, `renderedItemCount` is updated each time a
         * set of template instances is rendered.
         *
         */renderedItemCount:{type:Number,notify:true,readOnly:true},/**
         * Defines an initial count of template instances to render after setting
         * the `items` array, before the next paint, and puts the `dom-repeat`
         * into "chunking mode".  The remaining items will be created and rendered
         * incrementally at each animation frame therof until all instances have
         * been rendered.
         */initialCount:{type:Number,observer:'__initializeChunking'},/**
         * When `initialCount` is used, this property defines a frame rate to
         * target by throttling the number of instances rendered each frame to
         * not exceed the budget for the target frame rate.  Setting this to a
         * higher number will allow lower latency and higher throughput for
         * things like event handlers, but will result in a longer time for the
         * remaining items to complete rendering.
         */targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:'__computeFrameTime(targetFramerate)'}};}},{key:"observers",get:function get(){return['__itemsChanged(items.*)'];}}]);function DomRepeat(){_classCallCheck(this,DomRepeat);var _this15=_possibleConstructorReturn(this,(DomRepeat.__proto__||Object.getPrototypeOf(DomRepeat)).call(this));_this15.__instances=[];_this15.__limit=Infinity;_this15.__pool=[];_this15.__renderDebouncer=null;_this15.__itemsIdxToInstIdx={};_this15.__chunkCount=null;_this15.__lastChunkTime=null;_this15.__needFullRefresh=false;_this15.__sortFn=null;_this15.__filterFn=null;_this15.__observePaths=null;_this15.__ctor=null;return _this15;}_createClass(DomRepeat,[{key:"disconnectedCallback",value:function disconnectedCallback(){_get(DomRepeat.prototype.__proto__||Object.getPrototypeOf(DomRepeat.prototype),"disconnectedCallback",this).call(this);this.__isDetached=true;for(var i=0;i<this.__instances.length;i++){this.__detachInstance(i);}}},{key:"connectedCallback",value:function connectedCallback(){_get(DomRepeat.prototype.__proto__||Object.getPrototypeOf(DomRepeat.prototype),"connectedCallback",this).call(this);// only perform attachment if the element was previously detached.
if(this.__isDetached){this.__isDetached=false;var parent=this.parentNode;for(var i=0;i<this.__instances.length;i++){this.__attachInstance(i,parent);}}}},{key:"__ensureTemplatized",value:function __ensureTemplatized(){var _this16=this;// Templatizing (generating the instance constructor) needs to wait
// until ready, since won't have its template content handed back to
// it until then
if(!this.__ctor){var template=this.template=this.querySelector('template');if(!template){// // Wait until childList changes and template should be there by then
var observer=new MutationObserver(function(){if(_this16.querySelector('template')){observer.disconnect();_this16.__render();}else{throw new Error('dom-repeat requires a <template> child');}});observer.observe(this,{childList:true});return false;}// Template instance props that should be excluded from forwarding
var instanceProps={};instanceProps[this.as]=true;instanceProps[this.indexAs]=true;instanceProps[this.itemsIndexAs]=true;this.__ctor=Polymer.Templatize.templatize(template,this,{mutableData:this.mutableData,parentModel:true,instanceProps:instanceProps,forwardHostProp:function forwardHostProp(prop,value){var i$=this.__instances;for(var i=0,inst;i<i$.length&&(inst=i$[i]);i++){inst.forwardHostProp(prop,value);}},notifyInstanceProp:function notifyInstanceProp(inst,prop,value){if(Polymer.Path.matches(this.as,prop)){var idx=inst[this.itemsIndexAs];if(prop==this.as){this.items[idx]=value;}var path=Polymer.Path.translate(this.as,'items.'+idx,prop);this.notifyPath(path,value);}}});}return true;}},{key:"__getMethodHost",value:function __getMethodHost(){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
return this.__dataHost._methodHost||this.__dataHost;}},{key:"__sortChanged",value:function __sortChanged(sort){var methodHost=this.__getMethodHost();this.__sortFn=sort&&(typeof sort=='function'?sort:function(){return methodHost[sort].apply(methodHost,arguments);});this.__needFullRefresh=true;if(this.items){this.__debounceRender(this.__render);}}},{key:"__filterChanged",value:function __filterChanged(filter){var methodHost=this.__getMethodHost();this.__filterFn=filter&&(typeof filter=='function'?filter:function(){return methodHost[filter].apply(methodHost,arguments);});this.__needFullRefresh=true;if(this.items){this.__debounceRender(this.__render);}}},{key:"__computeFrameTime",value:function __computeFrameTime(rate){return Math.ceil(1000/rate);}},{key:"__initializeChunking",value:function __initializeChunking(){if(this.initialCount){this.__limit=this.initialCount;this.__chunkCount=this.initialCount;this.__lastChunkTime=performance.now();}}},{key:"__tryRenderChunk",value:function __tryRenderChunk(){// Debounced so that multiple calls through `_render` between animation
// frames only queue one new rAF (e.g. array mutation & chunked render)
if(this.items&&this.__limit<this.items.length){this.__debounceRender(this.__requestRenderChunk);}}},{key:"__requestRenderChunk",value:function __requestRenderChunk(){var _this17=this;requestAnimationFrame(function(){return _this17.__renderChunk();});}},{key:"__renderChunk",value:function __renderChunk(){// Simple auto chunkSize throttling algorithm based on feedback loop:
// measure actual time between frames and scale chunk count by ratio
// of target/actual frame time
var currChunkTime=performance.now();var ratio=this._targetFrameTime/(currChunkTime-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*ratio)||1;this.__limit+=this.__chunkCount;this.__lastChunkTime=currChunkTime;this.__debounceRender(this.__render);}},{key:"__observeChanged",value:function __observeChanged(){this.__observePaths=this.observe&&this.observe.replace('.*','.').split(' ');}},{key:"__itemsChanged",value:function __itemsChanged(change){if(this.items&&!Array.isArray(this.items)){console.warn('dom-repeat expected array for `items`, found',this.items);}// If path was to an item (e.g. 'items.3' or 'items.3.foo'), forward the
// path to that instance synchronously (retuns false for non-item paths)
if(!this.__handleItemPath(change.path,change.value)){// Otherwise, the array was reset ('items') or spliced ('items.splices'),
// so queue a full refresh
this.__needFullRefresh=true;this.__initializeChunking();this.__debounceRender(this.__render);}}},{key:"__handleObservedPaths",value:function __handleObservedPaths(path){if(this.__observePaths){path=path.substring(path.indexOf('.')+1);var paths=this.__observePaths;for(var i=0;i<paths.length;i++){if(path.indexOf(paths[i])===0){this.__needFullRefresh=true;this.__debounceRender(this.__render,this.delay);return true;}}}}/**
     * @param {function()} fn Function to debounce.
     * @param {number=} delay Delay in ms to debounce by.
     */},{key:"__debounceRender",value:function __debounceRender(fn,delay){this.__renderDebouncer=Polymer.Debouncer.debounce(this.__renderDebouncer,delay>0?Polymer.Async.timeOut.after(delay):Polymer.Async.microTask,fn.bind(this));Polymer.enqueueDebouncer(this.__renderDebouncer);}/**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     */},{key:"render",value:function render(){// Queue this repeater, then flush all in order
this.__needFullRefresh=true;this.__debounceRender(this.__render);Polymer.flush();}},{key:"__render",value:function __render(){if(!this.__ensureTemplatized()){// No template found yet
return;}this.__applyFullRefresh();// Reset the pool
// TODO(kschaaf): Reuse pool across turns and nested templates
// Now that objects/arrays are re-evaluated when set, we can safely
// reuse pooled instances across turns, however we still need to decide
// semantics regarding how long to hold, how many to hold, etc.
this.__pool.length=0;// Set rendered item count
this._setRenderedItemCount(this.__instances.length);// Notify users
this.dispatchEvent(new CustomEvent('dom-change',{bubbles:true,composed:true}));// Check to see if we need to render more items
this.__tryRenderChunk();}},{key:"__applyFullRefresh",value:function __applyFullRefresh(){var _this18=this;var items=this.items||[];var isntIdxToItemsIdx=new Array(items.length);for(var i=0;i<items.length;i++){isntIdxToItemsIdx[i]=i;}// Apply user filter
if(this.__filterFn){isntIdxToItemsIdx=isntIdxToItemsIdx.filter(function(i,idx,array){return _this18.__filterFn(items[i],idx,array);});}// Apply user sort
if(this.__sortFn){isntIdxToItemsIdx.sort(function(a,b){return _this18.__sortFn(items[a],items[b]);});}// items->inst map kept for item path forwarding
var itemsIdxToInstIdx=this.__itemsIdxToInstIdx={};var instIdx=0;// Generate instances and assign items
var limit=Math.min(isntIdxToItemsIdx.length,this.__limit);for(;instIdx<limit;instIdx++){var inst=this.__instances[instIdx];var itemIdx=isntIdxToItemsIdx[instIdx];var item=items[itemIdx];itemsIdxToInstIdx[itemIdx]=instIdx;if(inst&&instIdx<this.__limit){inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties();}else{this.__insertInstance(item,instIdx,itemIdx);}}// Remove any extra instances from previous state
for(var _i3=this.__instances.length-1;_i3>=instIdx;_i3--){this.__detachAndRemoveInstance(_i3);}}},{key:"__detachInstance",value:function __detachInstance(idx){var inst=this.__instances[idx];for(var i=0;i<inst.children.length;i++){var el=inst.children[i];inst.root.appendChild(el);}return inst;}},{key:"__attachInstance",value:function __attachInstance(idx,parent){var inst=this.__instances[idx];parent.insertBefore(inst.root,this);}},{key:"__detachAndRemoveInstance",value:function __detachAndRemoveInstance(idx){var inst=this.__detachInstance(idx);if(inst){this.__pool.push(inst);}this.__instances.splice(idx,1);}},{key:"__stampInstance",value:function __stampInstance(item,instIdx,itemIdx){var model={};model[this.as]=item;model[this.indexAs]=instIdx;model[this.itemsIndexAs]=itemIdx;return new this.__ctor(model);}},{key:"__insertInstance",value:function __insertInstance(item,instIdx,itemIdx){var inst=this.__pool.pop();if(inst){// TODO(kschaaf): If the pool is shared across turns, hostProps
// need to be re-set to reused instances in addition to item
inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties();}else{inst=this.__stampInstance(item,instIdx,itemIdx);}var beforeRow=this.__instances[instIdx+1];var beforeNode=beforeRow?beforeRow.children[0]:this;this.parentNode.insertBefore(inst.root,beforeNode);this.__instances[instIdx]=inst;return inst;}// Implements extension point from Templatize mixin
},{key:"_showHideChildren",value:function _showHideChildren(hidden){for(var i=0;i<this.__instances.length;i++){this.__instances[i]._showHideChildren(hidden);}}// Called as a side effect of a host items.<key>.<path> path change,
// responsible for notifying item.<path> changes to inst for key
},{key:"__handleItemPath",value:function __handleItemPath(path,value){var itemsPath=path.slice(6);// 'items.'.length == 6
var dot=itemsPath.indexOf('.');var itemsIdx=dot<0?itemsPath:itemsPath.substring(0,dot);// If path was index into array...
if(itemsIdx==parseInt(itemsIdx,10)){var itemSubPath=dot<0?'':itemsPath.substring(dot+1);// See if the item subpath should trigger a full refresh...
if(!this.__handleObservedPaths(itemSubPath)){// If not, forward to the instance for that index
var instIdx=this.__itemsIdxToInstIdx[itemsIdx];var inst=this.__instances[instIdx];if(inst){var itemPath=this.as+(itemSubPath?'.'+itemSubPath:'');// This is effectively `notifyPath`, but avoids some of the overhead
// of the public API
inst._setPendingPropertyOrPath(itemPath,value,false,true);inst._flushProperties();}}return true;}}/**
     * Returns the item associated with a given element stamped by
     * this `dom-repeat`.
     *
     * Note, to modify sub-properties of the item,
     * `modelForElement(el).set('item.<sub-prop>', value)`
     * should be used.
     *
     * @param {HTMLElement} el Element for which to return the item.
     * @return {*} Item associated with the element.
     */},{key:"itemForElement",value:function itemForElement(el){var instance=this.modelForElement(el);return instance&&instance[this.as];}/**
     * Returns the inst index for a given element stamped by this `dom-repeat`.
     * If `sort` is provided, the index will reflect the sorted order (rather
     * than the original array order).
     *
     * @param {HTMLElement} el Element for which to return the index.
     * @return {*} Row index associated with the element (note this may
     *   not correspond to the array index if a user `sort` is applied).
     */},{key:"indexForElement",value:function indexForElement(el){var instance=this.modelForElement(el);return instance&&instance[this.indexAs];}/**
     * Returns the template "model" associated with a given element, which
     * serves as the binding scope for the template instance the element is
     * contained in. A template model is an instance of `Polymer.Base`, and
     * should be used to manipulate data associated with this template instance.
     *
     * Example:
     *
     *   let model = modelForElement(el);
     *   if (model.index < 10) {
     *     model.set('item.checked', true);
     *   }
     *
     * @param {HTMLElement} el Element for which to return a template model.
     * @return {TemplateInstanceBase} Model representing the binding scope for
     *   the element.
     */},{key:"modelForElement",value:function modelForElement(el){return Polymer.Templatize.modelForElement(this.template,el);}}]);return DomRepeat;}(domRepeatBase);customElements.define(DomRepeat.is,DomRepeat);Polymer.DomRepeat=DomRepeat;})();var OrderData=function(){function OrderData(){_classCallCheck(this,OrderData);}_createClass(OrderData,[{key:"getData",value:function getData(){var _this19=this;return fetch("/data/orderUp.json").then(function(stream){return stream.body.getReader().read();}).then(function(_ref){var value=_ref.value,done=_ref.done;return _this19.parse(value);});}},{key:"parse",value:function parse(value){var string=value.reduce(function(acc,code){return acc+=String.fromCharCode(code);},"");return JSON.parse(string).map(function(e){return"\n"+e+"\n";});}}]);return OrderData;}();window.OrderData=OrderData;var ExampleOrder=function(_Polymer$Element){_inherits(ExampleOrder,_Polymer$Element);function ExampleOrder(){_classCallCheck(this,ExampleOrder);return _possibleConstructorReturn(this,(ExampleOrder.__proto__||Object.getPrototypeOf(ExampleOrder)).apply(this,arguments));}_createClass(ExampleOrder,[{key:"ready",value:function ready(){var _this21=this;_get(ExampleOrder.prototype.__proto__||Object.getPrototypeOf(ExampleOrder.prototype),"ready",this).call(this);new OrderData().getData().then(function(orders){_this21.orders=orders;});}}],[{key:"is",get:function get(){return"example-order";}},{key:"properties",get:function get(){return{orders:Array};}}]);return ExampleOrder;}(Polymer.Element);window.customElements.define(ExampleOrder.is,ExampleOrder);