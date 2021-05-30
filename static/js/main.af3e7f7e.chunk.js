(this["webpackJsonplocal-govt-reporter"]=this["webpackJsonplocal-govt-reporter"]||[]).push([[0],{24:function(e,t,a){e.exports={meetingRow:"MeetingRow_meetingRow__2JxLN",meetingActions:"MeetingRow_meetingActions__1tjaQ",jurisdiction:"MeetingRow_jurisdiction__3-S_i",bold:"MeetingRow_bold__1Z7D8",primaryText:"MeetingRow_primaryText__3_XRT"}},25:function(e,t,a){e.exports={header:"MeetingGroups_header__2KnZo",meetingGroup:"MeetingGroups_meetingGroup__2lUpu",meetingGroupContainer:"MeetingGroups_meetingGroupContainer__2zwCY"}},26:function(e,t,a){e.exports={NavBarMain:"NavBar_NavBarMain__2xK-S",NavContainer:"NavBar_NavContainer__3jjeU",PrimaryNav:"NavBar_PrimaryNav__1ij-L"}},53:function(e,t,a){e.exports={filterSelect:"CardFilter_filterSelect__2xmAD"}},78:function(e,t,a){},79:function(e,t,a){},8:function(e,t,a){e.exports={OddSection:"HomePage_OddSection__3jvCo",MidSection:"HomePage_MidSection__7jZj0",MidSectionHeader:"HomePage_MidSectionHeader__2rfvE",MidSectionGrid:"HomePage_MidSectionGrid__w7eX1",MidSectionDescription:"HomePage_MidSectionDescription__17168",FontTwo:"HomePage_FontTwo__3_eIC",MidImageContainer:"HomePage_MidImageContainer__3ob2Z",MidImage:"HomePage_MidImage__1xdIt",BaseSection:"HomePage_BaseSection__1Yh2v",BaseSectionImage:"HomePage_BaseSectionImage__1KKul",BaseSectionText:"HomePage_BaseSectionText__xF6jY",Footer:"HomePage_Footer__2DqJ7",FooterLink:"HomePage_FooterLink__2II38",TopText:"HomePage_TopText__3VCMR",TopImage:"HomePage_TopImage__3zXB5"}},89:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);a(10);var n=a(0),i=a.n(n),r=a(18),o=a.n(r),l=(a(78),a(44)),c=a(11),s=(a(79),a(49)),m=a(45),d=function(e,t){switch(e){case"Mission":return"https://www.missionks.org/agenda.aspx";case"Jackson":return"https://jacksonco.legistar.com/Calendar.aspx";case"Overland Park":return"https://opkansas.civicweb.net/Portal/MeetingTypeList.aspx";case"KCMO":return"http://cityclerk.kcmo.org/liveweb/Meetings/HistoricalMeetings.aspx";default:return""}},u=function(e,t){switch(e){case"Jackson":case"Johnson":return"".concat(e," County, ").concat(t);case"KCMO":return"Kansas City, MO";default:return"".concat(e,", ").concat(t)}},g=function(e){var t=e.meeting,a=e.nextMeeting;return i.a.createElement("article",{className:"slds-card"},i.a.createElement("header",{className:"slds-card__header"},i.a.createElement("h2",{className:"slds-card__header-title",style:{fontSize:"24px",fontFamily:"Merriweather",fontWeight:"bold"}},u(t.Jurisdiction,t.State))),i.a.createElement("div",{className:"slds-card__body slds-card__body_inner"},t&&i.a.createElement("div",{style:{width:"50%",height:"215px",float:"left",textAlign:"left",paddingTop:"20px",paddingLeft:"15px",paddingRight:"20px"}},i.a.createElement("p",{style:{fontSize:"10pt",paddingBottom:"5px"}},"Last Meeting"),i.a.createElement("p",{style:{fontSize:"12pt",fontWeight:"bold"}},t.MeetingDate),i.a.createElement("p",{style:{fontSize:"12pt",fontStyle:"italic",paddingTop:"5px"}},i.a.createElement("a",{href:t.SourceURL},t.MeetingType))),a&&i.a.createElement("div",{style:{width:"50%",float:"right",textAlign:"left",paddingTop:"20px",paddingRight:"5px"}},i.a.createElement("p",{style:{fontSize:"10pt",paddingBottom:"5px"}},"Next Meeting"),i.a.createElement("p",{style:{fontSize:"12pt",fontWeight:"bold"}},a.MeetingDate),i.a.createElement("p",{style:{fontSize:"12pt",fontStyle:"italic",paddingTop:"5px"}},i.a.createElement("a",{href:t.SourceURL},a.MeetingType)))),i.a.createElement("footer",{className:"slds-card__footer"},i.a.createElement("a",{className:"slds-button slds-button_brand ",href:d(t.Jurisdiction,t.State),style:{position:"absolute",bottom:"15px",left:"15px",margin:"15px",fontSize:"12pt"}},"View All Info For ".concat(u(t.Jurisdiction,t.State)))))},p=a(51),f=a(52),h=a(69),E=a(68),_=a(53),v=a.n(_),y=a(116),b=a(115),S=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("article",{className:"slds-card"},i.a.createElement("div",{className:"slds-grid slds-gutters_direct"},i.a.createElement("div",{className:"slds-col",style:{display:"flex",flexDirection:"column",justifyContent:"center",fontSize:"20px",fontFamily:"Merriweather",textAlign:"center"}},"Group meetings by"),i.a.createElement("div",{className:v.a.filterSelect},i.a.createElement(y.a,{className:"slds-col",onChange:function(t){return e.props.onFilterChange({filter:t.target.value})}},["Date","Jurisdiction"].map((function(t){return i.a.createElement(b.a,{key:t,id:t,labels:{label:t},value:t,checked:e.props.filter===t,variant:"button-group"})})))),i.a.createElement("div",{className:"slds-col",style:{margin:"15px"}},i.a.createElement("p",{style:{fontStyle:"italic",textAlign:"left"}},"See any inaccuracies in our information?"),i.a.createElement("p",{style:{textAlign:"left"}},"Let us know"))))}}]),a}(n.Component),N=a(66),w=(a(88),a(89),a(67)),x=a(113),M=a(114),D=a(112),C=a(25),T=a.n(C),O=a(24),j=a.n(O),I=a(110),z=a(106),F=a(4),P=a.n(F),B=function(e){var t=e.meeting,a=e.hideJurisdiction,n=void 0!==a&&a,r=e.children;return i.a.createElement("div",{className:j.a.meetingRow},i.a.createElement("span",{className:P()(j.a.bold,j.a.primaryText)},"".concat(Object(I.a)(Object(z.a)(t.MeetingDate),"MMM d"))),!n&&i.a.createElement("span",{className:P()(j.a.bold,j.a.primaryText)},"".concat(t.Jurisdiction)),i.a.createElement("span",{className:j.a.jurisdiction},"".concat(t.MeetingType)),i.a.createElement("span",{className:j.a.meetingActions},r))},k=function(e){var t=e.meetings,a=new Date,n=t.filter((function(e){return new Date(e.MeetingDate)>a})),r=t.filter((function(e){return new Date(e.MeetingDate)<a}));return i.a.createElement("div",{style:{marginTop:"20px"}},i.a.createElement(D.a,{header:i.a.createElement("h1",{className:T.a.header},"Upcoming City Council Meetings Within the Next 30 Days")},i.a.createElement("div",{className:T.a.meetingGroupContainer},i.a.createElement("div",{className:T.a.meetingGroup},n.map((function(e){return i.a.createElement(B,{meeting:e},i.a.createElement(w.a,{variant:"brand"},"View All Meetings"))}))))),i.a.createElement(D.a,{header:i.a.createElement("h1",{className:T.a.header},"Past City Council Meetings Within Last 30 Days")},i.a.createElement("div",{className:T.a.meetingGroupContainer},i.a.createElement("div",{className:T.a.meetingGroup},r.map((function(e){return i.a.createElement(B,{meeting:e},i.a.createElement(w.a,{variant:"brand"},"View All Meetings"))}))))))},A=a(3),L=a(36),R=function(e){var t=e.all,a=e.left,n=e.right,r=e.top,o=e.bottom,l=e.children,c=Object(L.a)(e,["all","left","right","top","bottom","children"]),s=0,m=0,d=0,u=0;return t&&(s=20,m=20,d=20,u=20),!0===a?s=20:"number"===typeof a&&(s=20*a),!0===n?m=20:"number"===typeof n&&(m=20*n),!0===r?d=20:"number"===typeof r&&(d=20*r),!0===o?u=20:"number"===typeof o&&(u=20*o),i.a.createElement("div",Object(A.a)({style:{marginLeft:s,marginRight:m,marginTop:d,marginBottom:u}},c),l)},H=function(e){var t=e.children,a=Object(L.a)(e,["children"]);return i.a.createElement(R,Object(A.a)({left:2,right:2},a),t)},J=Object({NODE_ENV:"production",PUBLIC_URL:"/local-govt-reporter",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL||"https://jt5wf041v4.execute-api.us-east-2.amazonaws.com/Prod",K=function(e){for(var t=new Date((new Date).toDateString()),a=0;a<e.length;a++)if(new Date(e[a].MeetingDate)>t)return e[a]},G=function(){var e,t,a=Object(n.useState)("Date"),r=Object(s.a)(a,2),o=r[0],l=r[1],c=Object(n.useState)(),d=Object(s.a)(c,2),u=d[0],p=d[1],f=function(){var e=new Date,t=new Date;return e.setDate(e.getDate()-14),t.setDate(t.getDate()+30),{startDate:e,endDate:t}}(),h=f.startDate,E=f.endDate,_=Object(M.a)("repoData",(function(){return fetch("".concat(J,"/api/meetings?start=0&length=100&startDate=").concat(h.toISOString().substring(0,10),"&endDate=").concat(E.toISOString().substring(0,10))).then((function(e){return e.json()}))})),v=_.isLoading,y=_.error,b=_.data;if(v)return i.a.createElement("p",null,"Loading Page");if(y)return i.a.createElement("p",null,"Failed to Fetch Data");var D=b.data.reduce((function(e,t){return e[t.Jurisdiction]?e[t.Jurisdiction].splice(Object(m.sortedIndexBy)(e[t.Jurisdiction],t,(function(e){return e.MeetingDate})),0,t):e[t.Jurisdiction]=[t],e}),{}),C=function(e){return Object.values(e).reduce((function(e,t){return t.forEach((function(t){e[t.MeetingDate]?e[t.MeetingDate].push(t):e[t.MeetingDate]=[t]})),e}),{})}(D),T=function(e){return e.sort((function(e,t){return new Date(e.MeetingDate)>new Date(t.MeetingDate)?0:1}))}(b.data);return i.a.createElement(H,null,i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",paddingBottom:"50px"}},i.a.createElement("div",{className:"slds-grid",style:{marginTop:"20px"}},i.a.createElement("div",{style:{display:"flex",flexDirection:"column",marginRight:"20px"}},i.a.createElement("article",{className:"slds-card",style:{flexGrow:1}},i.a.createElement("header",{className:"slds-card__header"},i.a.createElement("h1",{style:{fontSize:"20px",fontFamily:"Merriweather",fontWeight:"bold"}},"Find local meetings and meeting minutes")),i.a.createElement("div",{className:"slds-card__body slds-card__body_inner"},i.a.createElement("p",{style:{fontSize:"14px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus."),i.a.createElement("footer",null,i.a.createElement(w.a,{className:"slds-button slds-button_brand",variant:"outline-brand",style:{color:"rgb(43, 104, 134)",marginTop:"20px",fontSize:"12pt"}},"Need more help?")))),i.a.createElement(S,{onFilterChange:function(e){var t=e.filter;l(t)},filter:o})),i.a.createElement("article",{className:"slds-card",style:{padding:"0 20px 20px",display:"flex",flexDirection:"column",alignItems:"center"}},i.a.createElement("header",{className:"slds-card__header"},i.a.createElement("h1",{style:{fontSize:"20px",fontFamily:"Merriweather",fontWeight:"bold"}},"Upcoming Meetings")),i.a.createElement(N.a,{value:u,onChange:function(e){return!Object(m.isArray)(e)&&p(e)},calendarType:"US",tileClassName:function(e){e.activeStartDate;var t=e.date;e.view;return C[t.toISOString().substring(0,10)]?P()("meeting-date","date-".concat(t.toISOString().substring(0,10))):P()("disabled-date","date-".concat(t.toISOString().substring(0,10)))},tileDisabled:function(e){return void 0===C[e.date.toISOString().substring(0,10)]}}),i.a.createElement(x.a,{className:"something",style:{border:"none",borderRadius:0},key:(null===u||void 0===u?void 0:u.toISOString())||"",isOpen:void 0!==u,hasNoCloseButton:!0,classNameBody:"popover-body",body:u&&i.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},i.a.createElement(w.a,{className:"button-styles",style:{marginLeft:"auto",float:"right"},variant:"base",onClick:function(){p(void 0)}},"X"),i.a.createElement("div",null,null===(e=null!==(t=C[u.toISOString().substring(0,10)])&&void 0!==t?t:[])||void 0===e?void 0:e.map((function(e){return i.a.createElement("div",{style:{marginBottom:16}},i.a.createElement("h1",{className:"popover-meeting-header"},"".concat(Object(I.a)(Object(z.a)(e.MeetingDate),"MMM d")," ").concat(e.Jurisdiction)),i.a.createElement("em",null,e.MeetingType))})))),id:"popover-heading",onRequestTargetElement:function(){return u&&document.querySelector(".date-".concat(null===u||void 0===u?void 0:u.toISOString().substring(0,10)))}}))),"Jurisdiction"===o&&i.a.createElement("div",{className:"meetings slds-grid slds-wrap"},Object.keys(D).map((function(e){var t=function(e){for(var t=new Date((new Date).toDateString()),a=e.length-1;a>0;a--)if(new Date(e[a].MeetingDate.replaceAll("-","/"))<t)return e[a]}(D[e]);if(t)return i.a.createElement(g,{key:e,meeting:t,nextMeeting:K(D[e])})}))),"Date"===o&&i.a.createElement(k,{meetings:T})))},W=function(){return i.a.createElement("div",{style:{width:"1236px",marginLeft:"auto",marginRight:"auto"}},i.a.createElement("div",null,i.a.createElement("h1",{style:{fontSize:"68px",fontWeight:"bold",float:"left"}},"Down in San Francisco"),i.a.createElement("p",{style:{fontSize:"24px",float:"left"}},"Government cannot go unchecked in a democracy. That\u2019s why we worked with the team of civic coders at KC Digital Drive to develop ___________, a community-designed effort to standardize, collect and display public meeting information, including dates, times, locations and documentation, in a central database serving Kansas and Missouri. _________ equips journalists with public records to report local news and residents with information to effect change in their communities."," ")),i.a.createElement("div",null,i.a.createElement("h1",{style:{fontSize:"68px",fontWeight:"bold",float:"left"}},"Why we deliver..."),i.a.createElement("div",{style:{fontSize:"18px",float:"left"}},"_________ equips journalists with public records to report local news and residents with information to effect change in their communities."),i.a.createElement("div",{style:{fontSize:"18px"}},"Allows the public to have easier access to the government records, enabling easier civic participation."),i.a.createElement("div",{style:{fontSize:"18px"}},"_________ equips journalists with public records to report local news and residents with information to effect change in their communities."," "),i.a.createElement("div",{style:{fontSize:"18px"}},"Allows the public to have easier access to the government records, enabling easier civic participation.")),i.a.createElement("div",null,i.a.createElement("h1",{style:{fontSize:"68px",fontWeight:"bold"}},"Our Partners"),i.a.createElement("div",null,i.a.createElement("p",{style:{fontSize:"24px"}},"Identifying a shared interest in illuminating civic processes to preserve democracy, KC Digital Drive joined the effort as a technology partner.")),i.a.createElement("div",{style:{fontSize:"24px"}},"Jackson County Advocate The Kansas City Star Kansas Press Association Columbia Missourian at the University of Missouri School of Journalism KCUR KLC Journal Northeast News Shawnee Mission Post and Startland News. KC Digital Drive")),i.a.createElement("footer",null))},U=a(107),q=a(108),V=a(109),X=a(26),Z=a.n(X),Y=function(){var e=Object(c.g)();return i.a.createElement(U.a,{className:Z.a.NavBarMain},i.a.createElement(q.a,{className:Z.a.PrimaryNav,region:"primary",navigation:!0},i.a.createElement(H,{className:Z.a.NavContainer},i.a.createElement(V.a,{className:Z.a.NavBarItem,label:"Home",id:"home",href:"#",onClick:function(){return e.push("/home")}}),i.a.createElement(V.a,{className:Z.a.NavBarItem,label:"Local News",id:"news",href:"#",onClick:function(){return e.push("/news")}}),i.a.createElement(V.a,{className:Z.a.NavBarItem,label:"About",id:"about",href:"#",onClick:function(){return e.push("/about")}}))))},Q=a(111),$=a(63),ee=a(8),te=a.n(ee),ae=a.p+"static/media/top.fe65b341.png",ne=a.p+"static/media/cityhall.f8df7f2d.png",ie=a.p+"static/media/typing.f21672a9.png",re=a.p+"static/media/generic_meeting.8a23b74f.png",oe=a.p+"static/media/protest.01d685e6.png",le=a.p+"static/media/meeting_protest.620d9a02.png",ce=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:te.a.OddSection},i.a.createElement(H,null,i.a.createElement("div",{className:te.a.TopText},i.a.createElement("h1",{className:te.a.FontTwo,style:{fontSize:"4em"}},"An open-source digital treasure trove for local government information"),i.a.createElement(R,{bottom:1}),i.a.createElement("p",{style:{fontSize:"2em"}},"A certain king had a beautiful garden, and in the garden stood a tree which bore golden apples"),i.a.createElement(R,{bottom:2}),i.a.createElement("p",{style:{fontSize:"2em"}},"The only resource in the KC Metro.")),i.a.createElement("img",{src:ae,alt:"",width:"486",height:"347",className:te.a.TopImage}))),i.a.createElement("section",{className:te.a.MidSection},i.a.createElement(H,null,i.a.createElement("div",{className:te.a.MidSectionHeader},i.a.createElement("p",{style:{fontSize:"2em"}},"Our Services"),i.a.createElement("p",{className:te.a.FontTwo,style:{fontSize:"4em"}},"Empowering you to be an informed member your community"),i.a.createElement("p",{className:te.a.MidSectionDescription},"Time passed on again, and the youngest son too wished to set out into the wide world to seek for the golden bird; but his father would not listen.")),i.a.createElement(R,{top:3,bottom:2},i.a.createElement("div",{className:te.a.MidSectionGrid},i.a.createElement("div",{className:te.a.MidImageContainer},i.a.createElement("img",{className:te.a.MidImage,src:re,alt:"Meeting"})),i.a.createElement("div",{className:te.a.MidImageContainer},i.a.createElement("img",{className:te.a.MidImage,src:ne,alt:"City Hall"})),i.a.createElement("div",{className:te.a.MidImageContainer},i.a.createElement("img",{className:te.a.MidImage,src:ie,alt:"Typing"})))))),i.a.createElement("section",{className:te.a.OddSection},i.a.createElement(H,null,i.a.createElement("div",{className:te.a.BaseSection},i.a.createElement("img",{className:te.a.BaseSectionImage,src:oe,alt:"Protest Outside"}),i.a.createElement("div",{className:te.a.BaseSectionText},i.a.createElement("p",{className:te.a.FontTwo,style:{fontSize:"2em"}},"For the people - it's your right")))),i.a.createElement(H,null,i.a.createElement("div",{className:te.a.BaseSection},i.a.createElement("div",{className:te.a.BaseSectionText},i.a.createElement("p",{className:te.a.FontTwo,style:{fontSize:"2em"}},"Decide what matters to you and how you act on it")),i.a.createElement("img",{alt:"Protest Inside",className:te.a.BaseSectionImage,src:le})))),i.a.createElement("section",{className:te.a.Footer},i.a.createElement(H,null,i.a.createElement("p",null,"Made by"," ",i.a.createElement("a",{className:te.a.FooterLink,href:"https://codeforkc.org/"},"CodeForKC"),i.a.createElement("span",{style:{float:"right"}},"@ Copyright 2021")))))},se=new Q.a;var me=function(){return i.a.createElement($.a,{client:se},i.a.createElement(l.a,null,i.a.createElement(Y,null),i.a.createElement("div",{className:"App"},i.a.createElement(c.d,null,i.a.createElement(c.a,{exact:!0,from:"/",to:"/home"}),i.a.createElement(c.b,{exact:!0,path:"/home",component:ce}),i.a.createElement(c.b,{exact:!0,path:"/about",component:W}),i.a.createElement(c.b,{exact:!0,path:"/news",component:G}),i.a.createElement(c.b,{render:function(){return i.a.createElement("h1",null,"404")}})))))},de=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,117)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),r(e),o(e)}))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(me,null)),document.getElementById("root")),de()}},[[97,1,2]]]);
//# sourceMappingURL=main.af3e7f7e.chunk.js.map