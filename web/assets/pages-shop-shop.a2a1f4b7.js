import{z as t,o as e,c as a,w as l,b as s,l as c,f as i,g as u,F as o,L as d,i as n,S as r,k as h,J as m,h as _,q as f,v as p,G as k,E as y,P as x,Q as g,H as C}from"./index-1c6cc45e.js";import{_ as b}from"./_plugin-vue_export-helper.1b428a4d.js";const w=b({components:{search:b({data:()=>({"搜索text":"","搜索平台Cur":0,"搜索list":[],"搜索平台list":[{name:"拼多多",key:"pdd"},{name:"淘宝",key:"tb"},{name:"京东",key:"jd"}],"搜索排序":[{name:"综合",key:"zh"},{name:"价格",key:"jg"},{name:"销量",key:"xl"}]}),props:{"搜索text_home":String},mounted(){this.搜索text=this.搜索text_home,this.搜索()},methods:{"搜索"(){let t=this.搜索text;if(t.includes("m.tb.cn")||t.includes("tmall.com")||t.includes("taobao.com")||t.includes("淘宝")||t.includes("天猫")){if(this.搜索平台Cur=1,t.includes("「")&&t.includes("」")){let e=t.indexOf("「")+1,a=t.indexOf("」");this.搜索text=t.substring(e,a),console.log("淘宝")}}else t.includes("yangkeduo.com")||t.includes("pinduoduo.com")?(this.搜索平台Cur=0,console.log("拼多多")):(t.includes("jd.com")||t.includes("京东")||t.includes("京喜"))&&(this.搜索平台Cur=2,console.log("京东"));this.获取搜索数据()},"购买"(e){let a="";"jd"==e.pt&&0!=e.yhq&&(a=e.yhqLink),t({url:this.$store.state.APIURL+"/shop/xiadan.php",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{token:this.$store.state.data.token,id:e.id,yhq:a,pt:e.pt},success:t=>{200==t.data.code&&(window.location.href=t.data.url)}})},"获取搜索数据"(){""!=this.搜索text&&t({url:this.$store.state.APIURL+"/shop/search.php",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{token:this.$store.state.data.token,q:this.搜索text,pt:this.搜索平台list[this.搜索平台Cur].key},success:t=>{console.log(t.data.time),this.搜索list=t.data.list,""!=t.data.fanli&&(console.log(t.data.fanli.title),this.搜索text=t.data.fanli.title)},fail:t=>{console.log(t)}})},"选择搜索平台"(t){this.搜索平台Cur=t.currentTarget.dataset.id,this.搜索list=[],this.获取搜索数据()}}},[["render",function(t,k,y,x,g,C){const b=d,w=n,j=r,q=f,T=p;return e(),a(w,null,{default:l((()=>[s(w,{class:"search-card"},{default:l((()=>[s(b,{class:"textarea",modelValue:g.搜索text,"onUpdate:modelValue":k[0]||(k[0]=t=>g.搜索text=t),placeholder:"输入商品关键词或粘贴拼多多,淘宝,京东链接,口令"},null,8,["modelValue"]),s(w,{class:"ss-button",onClick:C.搜索},{default:l((()=>[c("搜索 ( 查找优惠券和返利 )")])),_:1},8,["onClick"])])),_:1}),s(j,{"scroll-x":"",class:"scroll"},{default:l((()=>[(e(!0),i(o,null,u(g.搜索平台list,((t,s)=>(e(),a(w,{class:h(["title",s==g.搜索平台Cur?"cur":""]),style:{width:"200rpx"},onClick:C.选择搜索平台,"data-id":s,key:s},{default:l((()=>[c(m(t.name),1)])),_:2},1032,["class","onClick","data-id"])))),128))])),_:1}),(e(!0),i(o,null,u(g.搜索list,((t,i)=>(e(),a(w,{class:"goodscard",onClick:e=>C.购买(t),key:i},{default:l((()=>[s(w,{class:"imgv"},{default:l((()=>[s(q,{class:"img",src:t.img},null,8,["src"])])),_:2},1024),s(w,{class:"info"},{default:l((()=>[s(w,{class:"title"},{default:l((()=>[c(m(t.title),1)])),_:2},1024),s(w,{class:"goods"},{default:l((()=>[s(T,{class:"qh"},{default:l((()=>[c("券后")])),_:1}),s(T,{class:"price"},{default:l((()=>[c(" ¥"+m(t.price),1)])),_:2},1024),0!=t.yhq?(e(),a(T,{key:0,class:"yhq1"},{default:l((()=>[c("优惠券")])),_:1})):_("",!0),0!=t.yhq?(e(),a(T,{key:1,class:"yhq2"},{default:l((()=>[c(" ¥"+m(t.yhq)+"元",1)])),_:2},1024)):_("",!0),s(T,{class:"yhq1"},{default:l((()=>[c("返利")])),_:1}),s(T,{class:"yhq2"},{default:l((()=>[c("¥"+m(t.hb)+"元",1)])),_:2},1024)])),_:2},1024),s(w,{class:"dpname"},{default:l((()=>[c("已售"+m(t.volume)+"件 店铺："+m(t.shop_title),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})}],["__scopeId","data-v-bac064aa"]]),tuijian:b({data:()=>({tjCur:0,"推荐list":[],tjs:[{name:"推荐",key:"home"},{name:"免费送",key:"yhq"},{name:"捡漏",key:"yhq"},{name:"赚钱",key:"waimai"}]}),props:{"搜索text":String},mounted(){this.getHomeInfo()},methods:{getHomeInfo(){t({url:this.$store.state.APIURL+"/shop/home.php",data:{token:this.$store.state.data.token},success:t=>{console.log(t.data.time),this.推荐list=t.data.tjlist},fail:t=>{console.log(t)}})},tjSelect(t){this.tjCur=t.currentTarget.dataset.id},pimgs(t,e){let a=[];for(let l=0;l<t.length;l++)a.push(t[l]);k({urls:a,current:e,indicator:"number"})}}},[["render",function(t,d,_,k,y,x){const g=n,C=r,b=f,w=p;return e(),a(g,null,{default:l((()=>[s(g,null,{default:l((()=>[s(C,{"scroll-x":"",class:"scroll"},{default:l((()=>[(e(!0),i(o,null,u(y.tjs,((t,s)=>(e(),a(g,{class:h(["title",s==y.tjCur?"cur":""]),onClick:x.tjSelect,"data-id":s,key:s},{default:l((()=>[c(m(t.name),1)])),_:2},1032,["class","onClick","data-id"])))),128))])),_:1})])),_:1}),(e(!0),i(o,null,u(y.推荐list,((t,d)=>(e(),a(g,{key:d},{default:l((()=>[s(g,{class:"goodscard"},{default:l((()=>[s(g,{class:"tj"},{default:l((()=>[s(b,{class:"tjimg",src:"https://img.alicdn.com/i3/2856125177/O1CN01mLcG061o77AE8CERO_!!2856125177.jpg_310x310"}),s(g,null,{default:l((()=>[s(g,{class:"tjname"},{default:l((()=>[c(m(t.tjname),1)])),_:2},1024),s(g,{class:"tjly"},{default:l((()=>[c(m(t.tjly),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),s(g,{class:"tjtext"},{default:l((()=>[c(m(t.tjtext),1)])),_:2},1024),s(g,{class:"tjimglist"},{default:l((()=>[(e(!0),i(o,null,u(t.tjimglist,((l,s)=>(e(),a(b,{class:"img",key:s,onClick:e=>x.pimgs(t.tjimglist,s),src:l},null,8,["onClick","src"])))),128))])),_:2},1024),s(g,{class:"tjurlcard"},{default:l((()=>[s(g,null,{default:l((()=>[s(b,{class:"img",src:t.img},null,8,["src"])])),_:2},1024),s(g,{class:"goods"},{default:l((()=>[s(g,{class:"title"},{default:l((()=>[c(m(t.title),1)])),_:2},1024),s(g,null,{default:l((()=>[s(w,{class:"qh"},{default:l((()=>[c("券后")])),_:1}),s(w,{class:"price"},{default:l((()=>[c("¥"+m(t.price),1)])),_:2},1024),s(w,{class:"coupon"},{default:l((()=>[c(m(t.yhq),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})}],["__scopeId","data-v-4cfc8eaf"]])},data:()=>({"搜索text":"",tabs:[{name:"推荐",key:"home"},{name:"搜索",key:"search"},{name:"小卖部",key:"xiaomaibu"},{name:"优惠券",key:"yhq"},{name:"订单",key:"order"}],pt:[{name:"小卖部",key:"xiaomaibu",url:"https://wework.qpic.cn/wwpic/514367_BEigEvWHQkuN-zu_1686822360/0"},{name:"拼多多",key:"pdd",url:"https://wework.qpic.cn/wwpic/188860_y8xqJVllQWy8NWl_1686754852/0"},{name:"淘宝",key:"tb",url:"https://wework.qpic.cn/wwpic/516714_i784NBUtSCWFvWv_1686754889/0"},{name:"京东",key:"jd",url:"https://wework.qpic.cn/wwpic/196253_xtDRu0bxSRyvNb4_1686754904/0"},{name:"美团",key:"meituan",url:"https://wework.qpic.cn/wwpic/451134_vo5bbsKDSRqcbMH_1686818295/0"},{name:"赚钱",key:"zhuanqian",url:"https://wework.qpic.cn/wwpic/104895_Uirkz5D0TMGNAEO_1688625713/0"}],TabCur:0}),onLoad(){},onShow(){y({title:"小卖部正在开发中,后期会上架优惠券,返利,1分购,捡漏,零食包等产品",icon:"success",duration:5e3})},methods:{"搜索"(){this.TabCur=1},dj_pt(t){console.log(t),"xiaomaibu"==t.key&&(this.TabCur=2)},"tab切换"(t){this.TabCur=t.currentTarget.dataset.id,console.log(this.tabs[this.TabCur])}}},[["render",function(t,k,y,b,w,j){const q=n,T=r,v=p,S=d,I=f,L=C("search");return e(),a(q,{class:"content"},{default:l((()=>[s(q,null,{default:l((()=>[s(T,{"scroll-x":"",class:"scroll"},{default:l((()=>[(e(!0),i(o,null,u(w.tabs,((t,s)=>(e(),a(q,{class:h(["title",s==w.TabCur?"cur qiehuantab":""]),onClick:j.tab切换,"data-id":s,key:s},{default:l((()=>[c(m(t.name),1)])),_:2},1032,["class","onClick","data-id"])))),128))])),_:1})])),_:1}),x(s(q,{class:"wxfont gonggao"},{default:l((()=>[s(v,{class:"text"},{default:l((()=>[c("可以搜索无门槛优惠券和返利,下单后将获得微信红包返利")])),_:1})])),_:1},512),[[g,w.TabCur<2]]),x(s(q,null,{default:l((()=>[s(q,{class:"search-card"},{default:l((()=>[s(S,{class:"textarea",modelValue:w.搜索text,"onUpdate:modelValue":k[0]||(k[0]=t=>w.搜索text=t),placeholder:"输入商品关键词或粘贴拼多多,淘宝,京东链接,口令"},null,8,["modelValue"]),s(q,{class:"ss-button",onClick:j.搜索},{default:l((()=>[c("搜索 ( 查找优惠券和返利 )")])),_:1},8,["onClick"])])),_:1}),s(q,{class:"fltitle"},{default:l((()=>[c("返利平台")])),_:1}),s(q,{class:"ptcard",style:{display:"flex"}},{default:l((()=>[(e(!0),i(o,null,u(w.pt,((t,i)=>(e(),a(q,{class:"cu-item",key:i,onClick:e=>j.dj_pt(t)},{default:l((()=>[s(q,{class:"image"},{default:l((()=>[s(I,{class:"img",src:t.url},null,8,["src"])])),_:2},1024),s(q,{class:"name"},{default:l((()=>[c(m(t.name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},512),[[g,0==w.TabCur]]),1==w.TabCur?(e(),a(L,{key:0,"搜索text_home":w.搜索text,ref:"child"},null,8,["搜索text_home"])):_("",!0),2==w.TabCur?(e(),a(q,{key:1,class:"xiaomaibu"},{default:l((()=>[c(" 小卖部 "),s(q,null,{default:l((()=>[c(" 商品待上架 ")])),_:1})])),_:1})):_("",!0),3==w.TabCur?(e(),a(q,{key:2,class:"xiaomaibu"},{default:l((()=>[c(" 优惠券 "),s(q,null,{default:l((()=>[c(" 优惠券待上架 ")])),_:1})])),_:1})):_("",!0),4==w.TabCur?(e(),a(q,{key:3,class:"xiaomaibu"},{default:l((()=>[c(" 在拼多多,淘宝,京东,美团的返利单将在这里显示 ")])),_:1})):_("",!0)])),_:1})}],["__scopeId","data-v-29e19a22"]]);export{w as default};
