(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{203:function(e,t,a){e.exports=a.p+"static/media/operator.23ba0e19.png"},239:function(e,t,a){e.exports=a(412)},244:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){},412:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(33),i=a.n(s),o=(a(244),a(93)),l=a(94),c=a(106),u=a(104),h=a(95),m=a.n(h),d=(a(261),a(262),a(263),a(203)),p=a.n(d),g=a(204),y=a(60),E=a(47),f=a(439),v=a(442),b=a(64),k=a(205),w="One-Liner\nShort\nMedium\nLong".split("\n"),S="PG\nPG-13".split("\n"),C=[{categories:["Pick-up Line","Biology"]},{categories:["Pick-up Line","Pun"]},{search:"bar"},{sizes:["One-Liner"]},{search:"Chicken cross the road"},{maturity:"PG-13"},{categories:["Pun","Dad Jokes"],maturity:"PG-13"},{categories:["Pun","Dad Jokes"],maturity:"PG-13"},{categories:["Pun"],maturity:"PG-13"},{categories:["Pun"],maturity:"PG-13"},{search:"math",sizes:["Short"]},{categories:["Yo Mama"],maturity:"PG-13"},{categories:["Yo Mama"],maturity:"PG"},{categories:["Yo Mama"],maturity:"PG"}],L=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){var a=t.name,r=t.value;n.setState(Object(g.a)({},a,r))},n.tonewURL=function(e,t,a,r,s){var i=new URLSearchParams,o=null===e||""===e,l=null===t||0===t.length,c=null===a||""===a,u=null===s||""===s,h=null===r||0===r.length;if(o&&l&&h&&u&&!c)n.setState({displayMessage:!0});else if(o&&l&&h&&u&&c)n.setState({displayMessage:!0});else{o||i.append("search",e),l||t.forEach((function(e){i.append("categories",e)})),c||i.append("score",a),u||i.append("maturity",s),h||r.forEach((function(e){i.append("sizes",e)}));var m="?"+i.toString();n.props.history.push({pathname:"/",search:m})}},n.handleAdvanced=function(e,t){var a=!n.state.isOpen;n.setState({isOpen:a})},n.createDropDownList=function(e){return e.map((function(e){return{key:e,text:e,value:e}}))},n.state={isLoaded:!1,cat_options:[],categories:n.props.categories||[],search:n.props.search||"",score:n.props.score||"",sizes:n.props.sizes||[],maturity:n.props.maturity||"",displayMessage:!1,isOpen:!1},n.advanced=r.a.createRef(),n.handleSubmit=n.handleSubmit.bind(Object(y.a)(n)),n.handleAdvanced=n.handleAdvanced.bind(Object(y.a)(n)),n.handleLucky=n.handleLucky.bind(Object(y.a)(n)),n}return Object(l.a)(a,[{key:"isOpen",value:function(){var e=this.props,t=e.categories,a=e.score,n=e.sizes,r=e.maturity,s=null===t||0===t.length,i=null===a||""===a,o=null===r||""===r,l=null===n||0===n.length,c=!s||!i||!o||!l;this.setState({isOpen:c})}},{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.categories,n=t.score,r=t.sizes,s=t.maturity,i=t.search;m()({method:"GET",url:"/api/cat-options"}).then((function(t){e.setState({cat_options:t.data.categories,isLoaded:!0,categories:a,score:n,sizes:r,maturity:s,search:i})})).catch((function(e){return console.log(e)})),this.isOpen()}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.search,n=t.categories,r=t.score,s=t.sizes,i=t.maturity;this.tonewURL(a,n,r,s,i)}},{key:"focus",value:function(){this.advanced&&this.advanced.current.scrollIntoView({behavior:"smooth",block:"start"})}},{key:"handleLucky",value:function(e){e.preventDefault();var t=this.state.cat_options.map((function(e){return{categories:[e]}})),a=C.concat(t),n=a[Math.floor(Math.random()*a.length)],r=n.categories||[],s=n.search||"",i=n.sizes||[],o=n.maturity||"";this.tonewURL(s,r,.25,i,o)}},{key:"componentDidUpdate",value:function(){this.focus()}},{key:"render",value:function(){var e=this,t=this.createDropDownList(this.state.cat_options),a=this.createDropDownList(w),n=this.createDropDownList(S),s={start:this.state.score||.25,min:0,max:.5,step:.125,onChange:function(t){e.setState({score:t})}},i=this.state.isOpen?"chevron down":"chevron right";return r.a.createElement("div",{ref:this.advanced},r.a.createElement("br",null),r.a.createElement(f.a,{onSubmit:this.handleSubmit,size:"large",key:"large"},r.a.createElement(f.a.Input,{placeholder:"Enter your search",name:"search",type:"text",onChange:this.handleChange,value:this.state.search,clearable:!0,focus:!0}),r.a.createElement(v.a,null,r.a.createElement(v.a.Title,{onClick:this.handleAdvanced},r.a.createElement(b.a,{name:i}),"Advanced Search")),this.state.isOpen?r.a.createElement("div",null,r.a.createElement(f.a.Dropdown,{closeOnChange:!0,placeholder:"Select Categories",name:"categories",label:"Categories",multiple:!0,search:!0,selection:!0,options:t,onChange:this.handleChange,value:this.state.categories,clearable:!0,focus:!0}),r.a.createElement(f.a.Group,{widths:"equal"},r.a.createElement(f.a.Field,null,r.a.createElement("p",null,r.a.createElement("b",null,"Relevancy       vs.      Funny Factor")),r.a.createElement(k.Slider,{discrete:!0,color:"white",settings:s})),r.a.createElement(f.a.Dropdown,{placeholder:"Select Maturity",name:"maturity",label:"Maturity Rating",selection:!0,clearable:!0,options:n,onChange:this.handleChange,value:this.state.maturity}),r.a.createElement(f.a.Dropdown,{placeholder:"Select Joke Length",name:"sizes",label:"Joke Length",selection:!0,clearable:!0,multiple:!0,options:a,onChange:this.handleChange,value:this.state.sizes,focus:!0}))):null,this.state.displayMessage?r.a.createElement("h5",{style:{color:"black"}},'Please provide an input for "Keywords", "Categories", "Maturity" or "Joke Length" to search.'):null,r.a.createElement(f.a.Group,{inline:!0,style:{justifyContent:"center",alignItems:"center"}},r.a.createElement(f.a.Button,{secondary:!0,type:"submit",size:"large"},"Find Jokes"),r.a.createElement(f.a.Button,{primary:!0,size:"large",onClick:this.handleLucky},"I'm Feeling Funny!"))))}}]),a}(r.a.Component),D=Object(E.f)(L),z=a(105),O=a(440),j=a(217),P=a.n(j),F=a(438),N=a(218),_=function(e){var t=e.jokes,a=e.query;return 0===t.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return t<=20?r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},e.text.split("\n").map((function(e,t){return r.a.createElement("h5",{key:t}," ",r.a.createElement(P.a,{highlightClassName:"Highlight",searchWords:a,autoEscape:!0,textToHighlight:e}))})),e.categories.map((function(e){return r.a.createElement(z.a,null,e)})),r.a.createElement("div",null,r.a.createElement(O.a,{content:e.score,position:"right center",trigger:r.a.createElement("h6",{className:"star_hover"},r.a.createElement(F.a,{className:"rating_stars",name:"half-rating-read",defaultValue:e.score,precision:.1,readOnly:!0}))})),r.a.createElement("h6",{className:"sim_sc_display"},"Similarity Score: ",Number((100*Number(e.similarity)).toFixed(1))+"%"),r.a.createElement(O.a,{position:"right center",trigger:r.a.createElement(b.a,{className:"info_icon",color:"teal",name:"question circle",size:"large"}),hoverable:!0},r.a.createElement(O.a.Header,null,"Similarity Score Breakdown"),r.a.createElement(O.a.Content,null,r.a.createElement(N.a,{data:{labels:["Keywords (%)","Categories (%)","Funny Factor (%)"],datasets:[{label:"breakdown",backgroundColor:["#FDC144","#FD6585","#3DA3E8"],hoverBackgroundColor:["#FEDB93","#FEBCCA","#3DCEE8"],data:[Number((Number(e.cos_score)/Number(e.similarity)*100).toFixed(1)),Number((Number(e.jac_score)/Number(e.similarity)*100).toFixed(1)),Number((Number(e.sc_score)/Number(e.similarity)*100).toFixed(1))]}]},options:{legend:{display:!0,position:"right",fontSize:4}}}))))),r.a.createElement("br",null)):null})))},q=a(435),M=a(436),x=a(443),G=a(434),A=a(444),R=a(437),B=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isLoaded:!1,jokes:[],typo:!1,typo_query:"",query:[],categories:[],score:"",search:"",sizes:[],maturity:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchResults()}},{key:"fetchResults",value:function(){var e=this,t=new URLSearchParams(window.location.search),a=t.getAll("categories"),n=t.get("score"),r=t.get("search"),s=t.getAll("sizes"),i=t.get("maturity");m()({method:"GET",url:"/api/search",params:t}).then((function(t){e.setState({isLoaded:!0,jokes:t.data.jokes,typo:t.data.typo,typo_query:t.data.typo_query,query:t.data.query,categories:a,score:n,search:r,sizes:s,maturity:i})})).catch((function(e){return console.log(e)}))}},{key:"componentDidUpdate",value:function(e){!1===this.state.isLoaded&&this.fetchResults()}},{key:"render",value:function(){return this.state.isLoaded?r.a.createElement("div",null,r.a.createElement("div",{inline:!0},r.a.createElement(x.a,{style:{margin:"10px"},onClick:function(){return window.open("http://hahafactory-og.herokuapp.com/","_blank")}}," First Prototype "),r.a.createElement(x.a,{style:{margin:"10px"},onClick:function(){return window.open("http://hahafactory-v2.herokuapp.com/","_blank")}}," Second Prototype ")),r.a.createElement("div",{style:{alignItems:"center",justify:"center",maxWidth:"50%",left:"25%",position:"absolute"}},r.a.createElement(G.a,null,r.a.createElement(q.a,{className:"justify-content-md-center"},r.a.createElement(M.a,null,r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"HahaFactory:"),r.a.createElement("h2",null,"Finding Hilarious Jokes for You"),r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"})),r.a.createElement(D,{score:this.state.score,categories:this.state.categories,search:this.state.search,sizes:this.state.sizes,maturity:this.state.maturity}))),r.a.createElement(q.a,null,r.a.createElement(M.a,{className:"jokes-col"},this.state.typo&""===this.state.typo_query?r.a.createElement("div",null,r.a.createElement("h4",null," We could not find any results for ",r.a.createElement("b",null,'"',this.state.search,'"'),".")):null,this.state.typo&""!==this.state.typo_query?r.a.createElement("div",null,r.a.createElement("h4",null," Did you mean... ",r.a.createElement("b",null,'"',this.state.typo_query,'"'),"? "),r.a.createElement("h4",null," We are showing results for ",r.a.createElement("b",null,'"',this.state.typo_query,'"'),".")):null,r.a.createElement(_,{jokes:this.state.jokes,query:this.state.query}),"           "))))):r.a.createElement(A.a,{active:!0,inverted:!0},r.a.createElement(R.a,{size:"large"},"Loading"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=new URLSearchParams(e.location.search),n=a.getAll("categories"),r=a.get("score"),s=a.get("search"),i=a.getAll("sizes"),o=a.get("maturity"),l=n.sort().toString()!==t.categories.sort().toString(),c=i.sort().toString()!==t.sizes.sort().toString();return l||r!==t.score||s!==t.search||c||o!==t.maturity?{isLoaded:!1}:null}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(129);i.a.render(r.a.createElement(J.a,null,r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/",component:B}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[239,1,2]]]);
//# sourceMappingURL=main.3b67a5df.chunk.js.map