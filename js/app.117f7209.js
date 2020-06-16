(function(e){function t(t){for(var n,i,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/kaas-ui/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},5348:function(e,t,a){"use strict";var n=a("d573"),s=a.n(n);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),a("Feature"),a("Footer")],1)},r=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item",attrs:{href:"/"}},[a("img",{attrs:{src:"android-icon-192x192.png",width:"28",height:"28"}})]),a("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("a",{staticClass:"navbar-item",attrs:{href:"/"}},[e._v("Home")]),a("a",{staticClass:"navbar-item"},[e._v("Documentation")])]),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"})])])])}],l={name:"Header",props:{}},c=l,u=a("2877"),d=Object(u["a"])(c,i,o,!1,null,null,null),p=d.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section"},[a("footer",{staticClass:"footer"},[a("div",{staticClass:"content has-text-centered"},[a("p",[a("strong",[e._v("KAAS")]),e._v(" by "),a("a",{attrs:{href:"https://areguig.github.io"}},[e._v("Akli Reguig")]),e._v(". The source code is licensed "),a("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[e._v("MIT")]),e._v(". The website content is licensed "),a("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"}},[e._v("CC BY NC SA 4.0")]),e._v(". ")])])])])}],h={name:"Footer",props:{}},b=h,m=Object(u["a"])(b,f,v,!1,null,null,null),g=m.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("section",{staticClass:"section is-size-7"},[e.error?a("div",{staticClass:"notification is-danger is-light"},[e._v(e._s(e.error))]):e._e(),e.failure?a("div",{staticClass:"notification is-danger is-light"},[a("strong",[e._v("🐞 line "+e._s(e.failure.line))]),e._v(" : "+e._s(e.failure.doc_string.value)+" 🐞 ")]):e._e(),e.passed?a("div",{staticClass:"notification is-success is-light"},[e._v("🏆 All green! Well done 🤘🤘")]):e._e(),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("label",{staticClass:"label"},[e._v("Feature")]),a("codemirror",{attrs:{options:e.gherkinOptions},model:{value:e.feature,callback:function(t){e.feature=t},expression:"feature"}})],1),a("div",{staticClass:"column is-half"},[a("label",{staticClass:"label"},[e._v("Config")]),a("codemirror",{attrs:{options:e.jsonOptions},model:{value:e.config,callback:function(t){e.config=t},expression:"config"}})],1)]),a("div",{staticClass:"control"},[a("button",{staticClass:"button is-success is-rounded",on:{click:e.postFeature}},[e._v("Run")])])]),a("section",{staticClass:"section is-size-7"},[e.result?a("codemirror",{attrs:{options:e.resultOptions},model:{value:e.result,callback:function(t){e.result=t},expression:"result"}}):e._e()],1),a("div",{class:e.loading?"is-active loader-wrapper":"loader-wrapper"},[a("div",{staticClass:"loader is-loading"})])])},C=[],y=(a("7db0"),a("5db7"),a("73d9"),a("bc3a")),O=a.n(y),x=(a("a7be"),a("b640"),a("f9d4"),a("cc10"),a("281e"),a("31c5"),a("697e"),a("aedd"),a("164b"),a("4895"),a("cbc8"),a("8d70"),a("9f09"),a("a2c1"),{name:"Feature",data:function(){return{passed:!1,loading:!1,failure:void 0,error:"",result:"",feature:"Feature: testing FOAAS api.\n  Background:\n    * configure headers = { 'Content-Type': 'application/json', Accept: 'application/json' }\n    * url base_url\n  Scenario: should say that this is awesome\n    When method get\n    Then status 200\n    And match response.message == 'This is Fucking Awesome.'\n    * print response",gherkinOptions:{tabSize:4,foldGutter:!0,styleActiveLine:!0,lineNumbers:!0,line:!0,theme:"base16-light",autofocus:!0,mode:"text/x-feature"},config:'{\n "base_url": "https://foaas.com//awesome/Karate"\n}',jsonOptions:{tabSize:4,foldGutter:!0,styleActiveLine:!0,lineNumbers:!0,line:!0,theme:"base16-light",mode:"text/javascript"},resultOptions:{height:"auto",readOnly:!0,foldGutter:!0,lineNumbers:!0,theme:"paraiso-light",mode:"text/javascript"}}},methods:{postFeature:function(){var e=this;this.loading=!0;var t={content:this.feature,config:JSON.parse(this.config)};O.a.post("https://karate-aas.herokuapp.com/feature",t).then((function(t){e.error=void 0;var a=t.data;e.result=JSON.stringify(a,null,2);var n=a.elements.flatMap((function(e){return e.steps})).find((function(e){return"failed"==e.result.status}));n?(e.passed=!1,e.failure=n):(e.passed=!0,e.failure=void 0),e.loading=!1})).catch((function(t){e.error=t,e.loading=!1}))}}}),j=x,w=(a("5348"),Object(u["a"])(j,_,C,!1,null,null,null)),k=w.exports,A={name:"App",components:{Header:p,Feature:k,Footer:g}},S=A,F=Object(u["a"])(S,s,r,!1,null,null,null),T=F.exports,E=(a("92c6"),a("8f94")),P=a.n(E);n["a"].config.productionTip=!1,n["a"].use(P.a),new n["a"]({render:function(e){return e(T)}}).$mount("#app")},d573:function(e,t,a){}});
//# sourceMappingURL=app.117f7209.js.map