(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1007:function(e,t,o){"use strict";o.r(t);var i=o(243),s={defaultTitle:{type:"title",options:{title:"标题文本标题文本"}},subTitle:{type:"title",options:{title:"标题文本标题文本",subTitle:"副标题"}}},n=o(262),a=o.n(n),c=o(260),l=o.n(c),d={mixins:[i.a],mounted:function(){var e=a()(s[this.blockName]);this.configCode=l()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,s[this.blockName]),this.init=!0)}},u=o(13),f=Object(u.a)(d,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?o("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),o("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[o("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),o("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[o("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n    ")])],1)},[],!1,null,null,null);t.default=f.exports},237:function(e,t,o){"use strict";var i=o(0),s=(o(245),o(242)),n=o.n(s),a=o(238),c=o.n(a),l=o(251),d=o(246),u=o.n(d),f=(o(247),o(248)),r=o.n(f),m=o(249),g=o.n(m),h=o(250),p=o.n(h);i.default.use(n.a),i.default.use(c.a),console.log("ams init config"),i.default.use(r.a),i.default.use(g.a),i.default.use(p.a),"undefined"!=typeof window&&(window.Vue=i.default),i.default.use(l.a,{languages:{javascript:u.a}}),c.a.config({resource:{api:{withCredentials:!1}}})},243:function(e,t,o){"use strict";o(237);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String},methods:{toggleDemoCofig:function(){this.showConfig=!this.showConfig}}}}}]);