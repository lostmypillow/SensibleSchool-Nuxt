import{B as f,U as y,s as B,z as v,A as p,o as b,c as h,J as l,b as i,w as s,L as r,a as w,F as a,K as C,M as S,N as $}from"./entry.GE46RM9P.js";import{s as I}from"./index.esm.yTTcjRM8.js";import k from"./tieredmenu.esm.Ctu6cYia.js";import"./index.esm.wv-PXrVg.js";var g=`
@layer primevue {
    .p-splitbutton {
        display: inline-flex;
        position: relative;
    }

    .p-splitbutton .p-splitbutton-defaultbutton,
    .p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button-outlined.p-button:hover {
        flex: 1 1 auto;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0 none;
    }

    .p-splitbutton-menubutton,
    .p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-splitbutton .p-menu {
        min-width: 100%;
    }

    .p-fluid .p-splitbutton {
        display: flex;
    }
}
`,D={root:function(n){var o=n.props;return["p-splitbutton p-component",{"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large"}]},button:"p-splitbutton-defaultbutton",menuButton:"p-splitbutton-menubutton"},z=f.extend({name:"splitbutton",css:g,classes:D}),V={name:"BaseSplitButton",extends:v,props:{label:{type:String,default:null},icon:{type:String,default:null},model:{type:Array,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1},class:{type:null,default:null},style:{type:null,default:null},buttonProps:{type:null,default:null},menuButtonProps:{type:null,default:null},menuButtonIcon:{type:String,default:void 0},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:z,provide:function(){return{$parentInstance:this}}},Z={name:"SplitButton",extends:V,emits:["click"],data:function(){return{isExpanded:!1}},mounted:function(){var n=this;this.$watch("$refs.menu.visible",function(o){n.isExpanded=o})},methods:{onDropdownButtonClick:function(n){n&&n.preventDefault(),this.$refs.menu.toggle({currentTarget:this.$el,relatedTarget:this.$refs.button.$el}),this.isExpanded=this.$refs.menu.visible},onDropdownKeydown:function(n){(n.code==="ArrowDown"||n.code==="ArrowUp")&&(this.onDropdownButtonClick(),n.preventDefault())},onDefaultButtonClick:function(n){this.isExpanded&&this.$refs.menu.hide(n),this.$emit("click",n)}},computed:{ariaId:function(){return y()},containerClass:function(){return[this.cx("root"),this.class]}},components:{PVSButton:B,PVSMenu:k,ChevronDownIcon:I}},E=["data-pc-severity"];function K(t,n,o,T,c,u){var d=p("PVSButton"),m=p("PVSMenu");return b(),h("div",a({class:u.containerClass,style:t.style},t.ptm("root"),{"data-pc-name":"splitbutton","data-pc-severity":t.severity}),[l(t.$slots,"default",{},function(){return[i(d,a({type:"button",class:t.cx("button"),label:t.label,disabled:t.disabled,severity:t.severity,text:t.text,outlined:t.outlined,size:t.size,"aria-label":t.label,onClick:u.onDefaultButtonClick},t.buttonProps,{pt:t.ptm("button"),unstyled:t.unstyled,"data-pc-section":"button"}),{icon:s(function(e){return[l(t.$slots,"icon",{class:r(e.class)},function(){return[w("span",a({class:[t.icon,e.class]},t.ptm("button").icon,{"data-pc-section":"buttonicon"}),null,16)]})]}),default:s(function(){return[l(t.$slots,"buttoncontent")]}),_:3},16,["class","label","disabled","severity","text","outlined","size","aria-label","onClick","pt","unstyled"])]}),i(d,a({ref:"button",type:"button",class:t.cx("menuButton"),disabled:t.disabled,"aria-haspopup":"true","aria-expanded":c.isExpanded,"aria-controls":u.ariaId+"_overlay",onClick:u.onDropdownButtonClick,onKeydown:u.onDropdownKeydown,severity:t.severity,text:t.text,outlined:t.outlined,size:t.size},t.menuButtonProps,{pt:t.ptm("menuButton"),unstyled:t.unstyled,"data-pc-section":"menubutton"}),{icon:s(function(e){return[l(t.$slots,"menubuttonicon",{class:r(e.class)},function(){return[(b(),C(S(t.menuButtonIcon?"span":"ChevronDownIcon"),a({class:[t.menuButtonIcon,e.class]},t.ptm("menuButton").icon,{"data-pc-section":"menubuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-expanded","aria-controls","onClick","onKeydown","severity","text","outlined","size","pt","unstyled"]),i(m,{ref:"menu",id:u.ariaId+"_overlay",model:t.model,popup:!0,autoZIndex:t.autoZIndex,baseZIndex:t.baseZIndex,appendTo:t.appendTo,unstyled:t.unstyled,pt:t.ptm("menu")},$({_:2},[t.$slots.menuitemicon?{name:"itemicon",fn:s(function(e){return[l(t.$slots,"menuitemicon",{item:e.item,class:r(e.class)})]}),key:"0"}:void 0,t.$slots.item?{name:"item",fn:s(function(e){return[l(t.$slots,"item",{item:e.item,hasSubmenu:e.hasSubmenu,label:e.label,props:e.props})]}),key:"1"}:void 0]),1032,["id","model","autoZIndex","baseZIndex","appendTo","unstyled","pt"])],16,E)}Z.render=K;export{Z as default};
