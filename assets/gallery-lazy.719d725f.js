import{_ as o,o as r,i as n,k as i,q as a,e as c,g as d,m as l}from"./lodash.1321b47a.js";const u={name:"lazy",props:["tag","offset","delay"],data:function(){return{observer:null,intersected:!1}},mounted(){this.$nextTick(function(){this.observe()})},destroyed(){this.observer&&this.observer.disconnect()},methods:{observe(){const e=this;this.observer=new IntersectionObserver(function(t){t[0].isIntersecting&&setTimeout(function(){e.intersected=!0,e.observer.disconnect()},e.delay||0)},{threshold:0,rootMargin:(this.offset||100)+"px"}),this.observer.observe(this.$el)}}};function f(e,t,s,m,h,v){return r(),n(l(s.tag||"div"),{class:d({mounted:e.intersected})},{default:i(()=>[e.intersected?a(e.$slots,"default",{key:0}):c("",!0)]),_:3},8,["class"])}var _=o(u,[["render",f]]);export{_};
