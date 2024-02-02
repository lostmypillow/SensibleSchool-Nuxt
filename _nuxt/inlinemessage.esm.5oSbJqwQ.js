import{s as l}from"./index.esm.zNa5D7jc.js";import{s as c,a as p}from"./index.esm.WBi7_Q9z.js";import{s as m}from"./index.esm.5uSEKJqO.js";import{B as u,z as d,o as r,c as f,J as a,K as v,F as i,M as g,a as y,d as $}from"./entry.AYd7eUpx.js";var h=`
@layer primevue {
    .p-inline-message {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: top;
    }
    
    .p-inline-message-icon {
        flex-shrink: 0;
    }

    .p-inline-message-icon-only .p-inline-message-text {
        visibility: hidden;
        width: 0;
    }

    .p-fluid .p-inline-message {
        display: flex;
    }
}
`,x={root:function(n){var s=n.props,t=n.instance;return["p-inline-message p-component p-inline-message-"+s.severity,{"p-inline-message-icon-only":!t.$slots.default}]},icon:function(n){var s=n.props;return["p-inline-message-icon",s.icon]},text:"p-inline-message-text"},B=u.extend({name:"inlinemessage",css:h,classes:x}),k={name:"BaseInlineMessage",extends:d,props:{severity:{type:String,default:"error"},icon:{type:String,default:void 0}},style:B,provide:function(){return{$parentInstance:this}}},S={name:"InlineMessage",extends:k,timeout:null,data:function(){return{visible:!0}},mounted:function(){var n=this;this.sticky||setTimeout(function(){n.visible=!1},this.life)},computed:{iconComponent:function(){return{info:c,success:l,warn:p,error:m}[this.severity]}}};function C(e,n,s,t,I,o){return r(),f("div",i({role:"alert","aria-live":"assertive","aria-atomic":"true",class:e.cx("root")},e.ptm("root")),[a(e.$slots,"icon",{},function(){return[(r(),v(g(e.icon?"span":o.iconComponent),i({class:e.cx("icon")},e.ptm("icon")),null,16,["class"]))]}),y("span",i({class:e.cx("text")},e.ptm("text")),[a(e.$slots,"default",{},function(){return[$(" ")]})],16)],16)}S.render=C;export{S as default};
