(function(){"use strict";var t={522:function(t,e,r){var n=r(144),a=r(3726),s=r(2903),o=function(){var t=this,e=t._self._c;return e(a.Z,[e("Navbar"),e(s.Z,[e("router-view")],1)],1)},i=[],c=r(5078),l=r(9396),u=r(3381),m=r(683),p=r(9088),d=r(9456),v=r(7970),f=r(1667),h=r(4504),_=r(352),g=r(3560),y=r(8814),b=r(2515),Z=r(2732),w=r(3845),x=function(){var t=this,e=t._self._c;return e("nav",[e(Z.Z,[e(w.qW,[t._v("최성진")]),e(c.Z,{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),e(b.Z),e(u.Z,{attrs:{icon:""}},[e(p.Z,[t._v("mdi-magnify")])],1),e(u.Z,{attrs:{icon:""}},[e(p.Z,[t._v("mdi-heart")])],1)],1),e(y.Z,{attrs:{absolute:"",bottom:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(d.Z,{attrs:{column:"","align-center":""}},[e(m.Z,{staticClass:"mt-4"},[e(l.Z,{attrs:{size:"100"}},[e("img",{attrs:{src:"/img/증명사진.jpg"}})]),e("p",{staticClass:"mt-5"},[t._v("CHOI SEONG JIN")])],1)],1),e(v.Z,{attrs:{nav:"",dense:""}},[e(_.Z,{model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},t._l(t.items,(function(r,n){return e(f.Z,{key:n,attrs:{to:r.router}},[e(g.Z,[e(p.Z,[t._v(t._s(r.icon))])],1),e(h.km,[e(h.V9,[t._v(t._s(r.title))])],1)],1)})),1)],1)],1)],1)},I=[],j={data:()=>({drawer:!1,group:null,items:[{icon:"mdi-domain",title:"Dashboard",router:"/"},{icon:"mdi-inbox",title:"My Prject",router:"/myprject"},{icon:"mdi-school",title:"MyInfo",router:"/myinfo"},{icon:"mdi-school",title:"학력사항",router:"/about"},{icon:"mdi-school",title:"언어",router:"/language"}]})},C=j,k=r(1001),P=(0,k.Z)(C,x,I,!1,null,null,null),S=P.exports,D={name:"App",data:()=>({}),components:{Navbar:S}},O=D,J=(0,k.Z)(O,o,i,!1,null,null,null),B=J.exports,M=r(8345),T=r(941),E=r(7024),G=r(6530),N=r(3102),U=r(7894),A=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"subheading gray--text",staticStyle:{margin:"10px"}},[t._v(" Dashboard (이페이지를 나는 이런사람이다 라는걸로 변경할생각) ")]),e(N.Z,[e(G.Z,[e(d.Z,{attrs:{column:""}},[e(d.Z,{attrs:{row:""}},[e("div",{staticClass:"mt-4",attrs:{cols:"auto"}},[e(l.Z,{attrs:{size:"150"}},[e("img",{attrs:{src:t.myInfo.myImg}})])],1),e("div",[e("p",{staticClass:"mt-5"},[t._v("이름 : "+t._s(t.myInfo.name))]),e("p",[t._v("전화번호 : "+t._s(t.myInfo.phone))]),e("p",[t._v("생년월일 : "+t._s(t.myInfo.date))]),e("p",[t._v("주소 : "+t._s(t.myInfo.address))])])])],1),t._l(t.projects,(function(r){return e(T.Z,{key:r.tit,staticClass:"gray lighten-4",attrs:{flat:""}},["ongoing"==r.sta?e(U.Z,{class:`pa-3 data ${r.sta}`,attrs:{"no-gutters":"",wrap:""}},[e(E.Z,{attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"caption gray--text"},[t._v("Project Title")]),e("div",[t._v(" "+t._s(r.tit)+" ")])]),e(E.Z,{attrs:{cols:"4",sm:"4",md:"2"}},[e("div",{staticClass:"caption gray--text"},[t._v("Person")]),e("div",[t._v(" "+t._s(r.per)+" ")])]),e(E.Z,{attrs:{cols:"8",sm:"5",md:"2"}},[e("div",{staticClass:"caption gray--text"},[t._v("Due")]),e("div",[t._v(" "+t._s(r.due)+" ")])]),e(E.Z,{staticClass:"pl-4",attrs:{cols:"4",sm:"3",md:"2"}},[e("div",{staticClass:"caption gray--text"},[t._v("State")]),e("div",{class:`${r.sta} sta`},[t._v(" "+t._s(r.sta)+" ")])])],1):t._e()],1)}))],2)],1)],1)},V=[],$=JSON.parse('[{"tit":"자바GUI프로젝트","per":"최성진","due":"2021","sta":"complete","text":"이 프로젝트는 대학교 2학년 2학기에 자바 GUI를 배운기념으로 만들었던 로그인기능과 가계부 기능을 가지고 있는 프로젝트입니다. <br>이프로젝트를 만든이유는 GUI를 사용해서 뭔가를 만들어보고싶는다는 생각과 나중에 만약 GUI를 사용하게 될 일이 생길때 보기 위해서 만들었습니다. <br><br><b>로그인과 가계부 기능을 만듬</b><br><b>DB복구중</b><br>git : <a href=\'https://github.com/Jin2u1194/project/tree/main/GUI\'>https://github.com/Jin2u1194/project/tree/main/GUI</a>","imgs":["img/가계부.png"],"use":"IDE : 이클립스, 사용라이브러리 : javaSwing, DB : 오라클DB","show":false},{"tit":"안드로이드 배달어플 만들어보기","per":"최성진, 장성훈","due":"2022-05-10~2022-06-20","sta":"complete","text":"이 프로젝트는 대학교 3학년 1학기 모바일 프로그래밍 시간 기말고사 대체과제로 배달앱을 만드는것을 목표로 제작했습니다 <br>기능은 배달의 민족앱에 있는 기능들을 보고 넣었으며 2인1조로 만들었습니다 <br><br><b>현제 포멧실수로 프로그램 유실</b>","imgs":[""],"use":"IDE : Android-studio","show":false},{"tit":"웹 포스기","per":"최성진","due":"2022-04-29~2022-05-07","sta":"complete","text":"이프로젝트는 대학교 3학년 1학기에 배운 자바MVC를 활용한 웹 프로그램 입니다. <br>이 프로그램의 목적은 교회의 행사중 어버이날에 교회 어르신들에게 커피를 주문받아 만들어 드리는 행사를 했는데 그때 주문을 받기 위해서 만들어 보았던 프로그램입니다.<br>제작과정에서 테스트를 할때는 이상이 없었으나 여러 주문이 동시에 들어오면서 DB설계상 1개의 작업을 수행하면 연결을 끊도록 제작해서 동시다발적인 주문이 버그를 발생 시켰고 그로인해 프로그램이 죽었으나 나중에 자바 셧다운 훅을 배워서 주문을 처리하고 연결은 셧다운 훅을 이용하여 프로그램이 종료될때 연결을 끊도록 수정했었습니다 <br><br><b>현제 포멧실수로 프로그램 유실</b>","imgs":[""],"use":"IDE : 이클립스, DB : 오라클 DB","show":false},{"tit":"지도에 신호등 정보를 띄어보자","per":"최성진","due":"2023-03-01~","sta":"complete","text":"4학년 1학기 개인과제로서 지도에 신호등 정보를 띄우는것을 목표로 잡고 만들고 있습니다.<br>제작배경은 대중교통중 버스를 이용하다 보면 신호등이 바뀌는 시간을 기다리다가 버스가 지나가는 상황을 격는 일이 종종 있습니다. 그때마다 \'내가 신호등이 바뀌는데까지 남은 시간을 알수있다면 열마나 좋을까\' 라는 생각을 하다가 이번 기회에 제작하게 되었습니다.<br> 이 프로그램을 만들다 보니 문제점은 메인으로 사용하는 신호등 API가 모든 지역의 신호등 정보를 지원하지 않다 보니 지원되는 지역이 한정될수밖에 없고 요즘 점점 신호등 중에 초록불의 시간을 표현 하는것을 넘어 빨간불의 남은 시간까지 표현 하다보니 프로그램이 활용될 가능성이 낮아지고 있습니다 <br>git : <a href=\'https://github.com/Jin2u1194/project/tree/main/Traffic%20Light\'>https://github.com/Jin2u1194/project/tree/main/Traffic%20Light</a>","imgs":["img/map.png","img/map2.png"],"use":"IDE : 인텔리제이, 데이터형태 : Json, 데이터제공 : 공공데이터포털","show":false},{"tit":"포트폴리오 제작","per":"최성진","due":"2023-03-01~2023-08-31","sta":"ongoing","text":"vue를 이용한 포트폴리오 만들기 <br>git : <a href=\'https://github.com/Jin2u1194/project/tree/main/vue_portfolio\'>https://github.com/Jin2u1194/project/tree/main/vue_portfolio</a>","imgs":[""],"use":"IDE : VSCode, 프레임워크 : vuetify, 데이터 : Json","show":false},{"tit":"유니티를 이용해서 서비스를 종료한 게임을 다시 살려보자","per":"최성진","due":"2023-03-01~","sta":"ongoing","text":"옛날에 즐겨했지만 서비를 종료한 미니 게임을 유니티를 이용해서 살려볼 계획인 프로젝트","imgs":[""],"use":"IDE : Unity,VSCode","show":false}]'),z=JSON.parse('{"my":{"name":"최성진","address":"부산광역시 남구 황령대로319번가길 110 (대연동, 대연청구아파트) (102동 102호)","myImg":"img/증명사진.jpg","phone":"010-4679-8292","date":"2001.08.25","url":"https://github.com/Jin2u1194","certificate":["정보처리기사 자격증 실기 준비중",""],"endEducational":"신라대학교 4학년 재학중","language":"JAVA"}}');const L=z.my,F=$;var H={data(){return{projects:F,myInfo:L}}},q=H,W=(0,k.Z)(q,A,V,!1,null,null,null),K=W.exports,Q=r(5255),R=r(5073),X=r(9690),Y=r(7690),tt=r(6930),et=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{margin:"10px"}},[e("h1",[t._v("MyPrject")]),e(N.Z,[e(G.Z,[e(U.Z,{staticClass:"mb-3 ml-2"},[e(u.Z,{attrs:{small:"",plain:""},on:{click:function(e){return t.sortBy("tit")}}},[e("span",[t._v("by Project Title")])]),e(u.Z,{attrs:{small:"",plain:""},on:{click:function(e){return t.sortBy("per")}}},[e("span",[t._v("by Person")])]),e(u.Z,{attrs:{small:"",plain:""},on:{click:function(e){return t.sortBy("due")}}},[e("span",[t._v("by Due")])]),e(u.Z,{attrs:{small:"",plain:""},on:{click:function(e){return t.sortBy("sta")}}},[e("span",[t._v("by State")])])],1),t._l(t.projects,(function(r){return e(T.Z,{key:r.tit,staticClass:"gray lighten-4",attrs:{flat:""}},[e(U.Z,{class:`pa-3 data ${r.sta}`,attrs:{"no-gutters":"",wrap:""}},[e(E.Z,{attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"caption gray--text"},[t._v("Project Title")]),e("div",[t._v(" "+t._s(r.tit)+" ")])]),e(E.Z,{attrs:{cols:"4",sm:"4",md:"2"}},[e("div",{staticClass:"caption gray--text"},[t._v("Person")]),e("div",[t._v(" "+t._s(r.per)+" ")])]),e(E.Z,{attrs:{cols:"8",sm:"5",md:"2"}},[e("div",{staticClass:"caption gray--text"},[t._v("Due")]),e("div",[t._v(" "+t._s(r.due)+" ")])]),e(E.Z,{staticClass:"pl-4",attrs:{cols:"4",sm:"3",md:"2"}},[e("div",{staticClass:"caption gray--text"},[t._v("State")]),e("div",{class:`${r.sta} sta`},[t._v(" "+t._s(r.sta)+" ")])])],1),e(Q.h7,[e(u.Z,{attrs:{icon:""},on:{click:function(t){r.show=!r.show}}},[e(p.Z,[t._v(t._s(r.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),e(tt.Fx,[e("div",{directives:[{name:"show",rawName:"v-show",value:r.show,expression:"data.show"}]},[e(Y.Z),e(R.Z,t._l(r.imgs,(function(t){return e(X.Z,{key:t,attrs:{src:t,cover:""}})})),1),e(Q.ZB,[e("p",{domProps:{innerHTML:t._s(r.text)}}),e("p",[t._v(t._s(r.use))])])],1)])],1)}))],2)],1)],1)},rt=[];const nt=$;var at={data(){return{projects:nt}},methods:{sortBy(t){this.projects.sort(((e,r)=>e[t]<r[t]?-1:1))}}},st=at,ot=(0,k.Z)(st,et,rt,!1,null,null,null),it=ot.exports,ct=r(4057),lt=r(7608),ut=r(2496),mt=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"subheading gray--text",staticStyle:{margin:"10px"}},[t._v("학력사항")]),e(lt.Z,{attrs:{side:"end"}},t._l(t.items,(function(r){return e(ut.Z,{key:r.id,attrs:{"dot-color":r.color,size:"small"}},[e(ct.Z,{attrs:{value:!0,color:r.color,icon:r.icon}},[t._v(" "+t._s(r.data)),e("br"),t._v(" "+t._s(r.time)),e("br")])],1)})),1)],1)},pt=[],dt={data:()=>({items:[{id:1,color:"info",icon:"mdi-information",data:"대연초등학교",time:"2008~2014",url:"<a href='https://school.busanedu.net/daeyon-e/main.do'>https://school.busanedu.net/daeyon-e/main.do</a>"},{id:2,color:"error",icon:"mdi-alert-circle",data:"대연중학교",time:"2014~2017",url:"<a href='http://www.bjungang.hs.kr/'>http://www.bjungang.hs.kr/</a>"},{id:2,color:"error",icon:"mdi-alert-circle",data:"부산중앙고등학교",time:"2017~2020",url:"<a href='https://school.busanedu.net/bjungang-h/main.do'>https://school.busanedu.net/bjungang-h/main.do</a>"},{id:2,color:"error",icon:"mdi-alert-circle",data:"신라대학교",time:"2020.03.01~2024.02",url:"<a href='https://www.silla.ac.kr/ko/'>https://www.silla.ac.kr/ko/</a>"}]})},vt=dt,ft=(0,k.Z)(vt,mt,pt,!1,null,null,null),ht=ft.exports,_t=r(1584),gt=function(){var t=this,e=t._self._c;return e("div",[e(G.Z,{staticStyle:{margin:"10px"}},[e("h1",[t._v("내정보")]),e(U.Z,{attrs:{justify:"center"}},[e(E.Z,{attrs:{cols:"auto"}},[e(_t.Z,{attrs:{"lazy-src":t.myInfo.myImg,"max-height":"250","max-width":"200",src:t.myInfo.myImg}})],1),e(E.Z,[e("div",[e("p",[t._v("이름 : "+t._s(t.myInfo.name))]),e("p",[t._v("생년월일 : "+t._s(t.myInfo.date))]),e("p",[t._v("주소 : "+t._s(t.myInfo.address))]),e("p",[t._v("전화번호 : "+t._s(t.myInfo.phone))]),e("p",[t._v("최종학력사항 : "+t._s(t.myInfo.endEducational))]),e("p",[t._v("주로 사용하는 언어 : "+t._s(t.myInfo.language))])])])],1),e(U.Z,[e(E.Z,[e("div",[e("h3",[t._v("취득 자격증")]),t._l(t.myInfo.certificate,(function(r){return""!=r?e("li",[t._v(" "+t._s(r)+" ")]):t._e()}))],2)])],1)],1)],1)},yt=[];const bt=z.my;var Zt={data(){return{myInfo:bt}}},wt=Zt,xt=(0,k.Z)(wt,gt,yt,!1,null,null,null),It=xt.exports,jt=function(){var t=this;t._self._c;return t._m(0)},Ct=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("프로그래밍 언어")]),e("p",[t._v("스파이더 그래프를 이용하여 표현할예정")])])}],kt={data(){return{}}},Pt=kt,St=(0,k.Z)(Pt,jt,Ct,!1,null,null,null),Dt=St.exports;n.ZP.use(M.ZP);const Ot=[{path:"/",name:"home",component:K},{path:"/myprject",name:"MyPrject",component:it},{path:"/myinfo",name:"MyInfo",component:It},{path:"/about",name:"MyInfo",component:ht},{path:"/language",name:"MyInfo",component:Dt}],Jt=new M.ZP({mode:"history",base:"/",routes:Ot});var Bt=Jt,Mt=r(154);n.ZP.use(Mt.Z);var Tt=new Mt.Z({});n.ZP.config.productionTip=!1,new n.ZP({router:Bt,vuetify:Tt,render:function(t){return t(B)}}).$mount("#app")}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,n,a,s){if(!n){var o=1/0;for(u=0;u<t.length;u++){n=t[u][0],a=t[u][1],s=t[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&s||o>=s)&&Object.keys(r.O).every((function(t){return r.O[t](n[c])}))?n.splice(c--,1):(i=!1,s<o&&(o=s));if(i){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,a,s]}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,s,o=n[0],i=n[1],c=n[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var u=c(r)}for(e&&e(n);l<o.length;l++)s=o[l],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(u)},n=self["webpackChunktest1"]=self["webpackChunktest1"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(522)}));n=r.O(n)})();
//# sourceMappingURL=app.5398f04e.js.map