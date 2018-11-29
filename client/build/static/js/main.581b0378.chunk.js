(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){e.exports=a.p+"static/media/logo.eed724ad.svg"},118:function(e,t,a){e.exports=a(228)},135:function(e,t){},137:function(e,t){},171:function(e,t){},172:function(e,t){},218:function(e,t,a){},228:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(107),o=a.n(i),s=a(9),c=a(10),l=a(12),u=a(11),m=a(13),h=a(34),g=a(23),d=a(60),f=a.n(d),p=(a(218),a(115)),v=function(e){return e.show?e.children:null},b=function(e){return Object(p.a)(Array(e).keys())},y=a(113),E=a.n(y),S=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isRevealed,a=e.hasMine,n=e.nearby,i=e.flag,o=e.onMouseDown,s=e.onMouseUp,c=e.onMouseEnter,l=e.onMouseLeave,u=e.handleTouch,m=e.xray,h=e.theme;return r.a.createElement("div",{className:"Tile-".concat(h),onMouseDown:o,onMouseUp:s,onMouseEnter:c,onMouseLeave:l,onTouchEnd:u,onContextMenu:function(e){return e.preventDefault()}},r.a.createElement(C,{isRevealed:t,flag:i,xray:m,theme:h},r.a.createElement(w,{hasMine:a,nearby:n})))}}]),t}(n.Component),C=function(e){var t=e.isRevealed,a=e.flag,n=e.children,i=e.xray,o=e.theme;return t?n:r.a.createElement("div",{className:"Cover-".concat(o)},a?r.a.createElement(j,null):i?n:null)},w=function(e){var t=e.hasMine,a=e.nearby;return t?r.a.createElement(O,null):r.a.createElement(N,{n:a})},N=function(e){var t=e.n;return r.a.createElement("span",{className:"nearby".concat(t)},0!==t?t:null)},O=function(){return r.a.createElement("img",{className:"Mine",src:E.a,alt:"X"})},j=function(){return r.a.createElement("span",{className:"Flag"},"F")},k=S,x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).renderTileAt=function(e){var t=e.i,n=e.j,i=a.props.gridState[t][n],o=i.isRevealed,s=i.hasMine,c=i.nearby,l=i.flag,u=i.isHighlighted,m=i.xray,h=!!u||o,g=!u&&s,d=o?c:u?0:c;return r.a.createElement(k,{isRevealed:h,hasMine:g,nearby:d,flag:l,xray:m||a.props.xray,theme:a.props.theme,onMouseDown:function(e){return a.props.mouseDown(e,t,n)},onMouseUp:function(e){return a.props.mouseUp(e,t,n)},onMouseEnter:function(e){return a.props.mouseEnter(e,t,n)},onMouseLeave:function(e){return a.props.mouseLeave(e,t,n)},handleTouch:function(e){return a.props.handleTouch(e,t,n)}})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.gridState;return null===t?null:b(t.length).map(function(a){return r.a.createElement("div",{key:a,className:"Game-grid-row"},b(t[a].length).map(function(t){return r.a.createElement(e.renderTileAt,{key:"".concat(a,",").concat(t),i:a,j:t})}))})}}]),t}(n.Component),M=function(e){var t=e.mines,a=e.hidden,n=e.time;return r.a.createElement("div",{className:"Game-info"},r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"bomb"},"\ud83d\udca3")," ",t,r.a.createElement("span",{role:"img","aria-label":"question"}," \u2753")," ",a,r.a.createElement("span",{role:"img","aria-label":"timer"}," \u23f1")," ",n),r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"ok"},"\ud83d\udc4c "),"Click around with right+left click for a safe start!"),r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"score"},"\ud83d\udcaf "),r.a.createElement("a",{href:"http://www.minesweeper.info/wiki/3BV",target:"blank"},"Difficulty = minimum # of left clicks to win")),r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"radioactive"},"\u2622 "),"Use middle click to xray (cheat) the area."))},H=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.newGame,a=e.infoOn,n=e.xrayOn,i=e.theme,o=e.toggleInfo,s=e.toggleXray,c=e.toggleTheme;return r.a.createElement("div",{className:"GameButtons"},r.a.createElement("button",{onClick:t,className:"Game-button"},"New Game"),r.a.createElement("button",{onClick:o,className:"Game-button".concat(a?" toggle":"")},"Game Info"),r.a.createElement("button",{onClick:s,className:"Game-button".concat(n?" toggle":"")},"X-RAY"),r.a.createElement("button",{onClick:c,className:"Game-button".concat("light"===i?" toggle":"")},"Theme"))}}]),t}(n.Component),G=function(e){var t=e.nCols,a=e.nRows,n=e.chance,i=e.onColChange,o=e.onRowChange,s=e.onChanceChange,c=e.newGame;return r.a.createElement("div",null,r.a.createElement("input",{className:"Game-input",type:"number",value:t,min:1,max:32,onChange:i,onKeyUp:c}),"x",r.a.createElement("input",{className:"Game-input",type:"number",value:a,min:1,max:32,onChange:o,onKeyUp:c}),"x",r.a.createElement("input",{className:"Game-input",type:"number",value:n,min:0,max:1,step:.01,onChange:s,onKeyUp:c}))},T=function(e){return r.a.createElement(v,{show:e.show},r.a.createElement("div",{className:"Popup",onContextMenu:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"Popup-inner"},r.a.createElement("p",null,e.text),"Winner!"===e.text?r.a.createElement("div",{className:"Popup-score"},r.a.createElement("p",null,"Difficulty: ",e.score," | Time: ",e.time),e.time<5||e.xrayUsed?null:r.a.createElement("form",{onSubmit:function(t){return e.submitHiscore(t)}},r.a.createElement("input",{autoFocus:!0,className:"Popup-name",type:"text",placeholder:"Name"}),r.a.createElement("input",{className:"Popup-submit",type:"submit",value:"Submit"}))):null,r.a.createElement("button",{className:"close",onClick:e.closePopup},"Back"))))},R=a(116),U=a(61);function D(){var e=Object(U.a)(["\n  mutation($name: String!, $score: Int!, $time: Int!, $speed: Float!){\n    addHiscore(name: $name, score: $score, time: $time, speed: $speed){\n      id\n      name\n      score\n      time\n      speed\n    }\n  }\n"]);return D=function(){return e},e}function A(){var e=Object(U.a)(["\n  {\n    hiscores{\n      id\n      name\n      score\n      time\n      speed\n    }\n  }\n"]);return A=function(){return e},e}var I=Object(h.b)(A()),P=Object(h.b)(D()),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).displayHiscores=function(){var e=a.props.getHiscoresQuery;return e.loading?r.a.createElement("li",null,"Loading Hiscores..."):e.hiscores?e.hiscores.map(function(e){return r.a.createElement(L,Object.assign({key:e.id},e))}):r.a.createElement("li",null,"Couldn't connect to DB")},a.submitHiscore=function(){var e=a.props.scoreSubmission;e.name.length<1||a.props.addHiscoreMutation({variables:Object(R.a)({},e),refetchQueries:[{query:I}]})},a.state={lastSubmission:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props.scoreSubmission;e!==this.state.lastSubmission&&(this.setState({lastSubmission:e}),this.submitHiscore())}},{key:"render",value:function(){return r.a.createElement("div",{className:"HiscoreView"},r.a.createElement("h2",null,"Top 10:"),r.a.createElement("div",{className:"Hiscores"},r.a.createElement("li",{className:"Hiscore"},r.a.createElement("span",{className:"HiscoreHeader"},"Name"),r.a.createElement("span",{className:"HiscoreHeader"},"EBV / s")),this.displayHiscores()))}}]),t}(n.Component),L=function(e){var t=e.name,a=e.score,n=e.time;return r.a.createElement("li",{className:"Hiscore"},r.a.createElement("span",null,t),r.a.createElement("span",null,a," / ",n))},B=Object(g.compose)(Object(g.graphql)(I,{name:"getHiscoresQuery"}),Object(g.graphql)(P,{name:"addHiscoreMutation"}))(F),$=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]],X=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleTouch=function(e,t,n){1===e.changedTouches[0].identifier&&a.handleRightClick(t,n)},a.mouseEnter=function(e,t,n){"Playing"===a.state.gameStatus&&(3===e.buttons&&a.highlightArea(t,n,!0),4===e.buttons&&a.xrayArea(t,n,!0))},a.mouseLeave=function(e,t,n){3===e.buttons&&a.highlightArea(t,n,!1),4===e.buttons&&a.xrayArea(t,n,!1)},a.mouseDown=function(e,t,n){e.preventDefault(),"Playing"===a.state.gameStatus&&(3===e.buttons&&(a.setState({ignoreNextClick:!0}),a.highlightArea(t,n,!0)),1===e.button&&a.xrayArea(t,n,!0))},a.mouseUp=function(e,t,n){var r=a.state,i=r.ignoreNextClick,o=r.gridState;if([1,2].includes(e.buttons))return a.setState({ignoreNextClick:!0}),a.highlightArea(t,n,!1),void(o[t][n].nearby!==a.nearbyFlags(t,n)||o[t][n].hasMine||(a.reveal(t,n),a.eachNearby(t,n,function(e,t){a.reveal(e,t)})));1===e.button?a.xrayArea(t,n,!1):2!==e.button||i?0!==e.button||i||a.handleClick(t,n):a.handleRightClick(t,n),a.setState({ignoreNextClick:!1})},a.handleClick=function(e,t){var n=a.state,r=n.gridState,i=n.gameStatus,o=r[e][t].flag;"Playing"!==i||o||a.reveal(e,t)},a.handleRightClick=function(e,t){var n=a.state,r=n.gridState,i=n.gameStatus,o=n.totalFlags,s=r[e][t],c=s.isRevealed,l=s.flag;if("Playing"===i&&!c){a.changeTile(e,t,{flag:!l});var u=l?-1:1;a.setState({totalFlags:o+u})}},a.newGame=function(){a.setState({gridState:a.newGridState(),gameStatus:"New Game",xrayUsed:!1}),clearInterval(a.timer),a.timer=setInterval(function(){return a.tick()},1e3)},a.tick=function(){var e=a.state,t=e.totalHidden,n=e.gameStatus;t!==e.nRows*e.nCols&&"Playing"===n&&a.setState({time:a.state.time+1})},a.toggleTheme=function(){var e="dark"===a.state.theme?"light":"dark";a.setState({theme:e})},a.toggleInfo=function(){a.setState({infoOn:!a.state.infoOn})},a.toggleXray=function(){a.setState({xrayOn:!a.state.xrayOn,xrayUsed:!0})},a.onColChange=function(e){var t=parseInt(e.target.value);t>0&&t<=32&&a.setState({nCols:parseInt(e.target.value)})},a.onRowChange=function(e){var t=parseInt(e.target.value);t>0&&t<=32&&a.setState({nRows:parseInt(e.target.value)})},a.onChanceChange=function(e){isNaN(parseFloat(e.target.value))||a.setState({chance:parseFloat(e.target.value)})},a.submitHiscore=function(e){var t=e.target[0].value,n=a.state,r=n.score,i=n.time,o=n.hash;f.a.createHash("sha1").update("".concat(r," ").concat(i)).digest("base64")===o?(a.setState({scoreSubmission:{name:t,score:r,time:i,speed:r/i}}),a.newGame()):a.setState({gameStatus:"\ud83d\udea8 Hacker \ud83d\udea8"}),e.preventDefault()},a.scoreGrid=function(){var e=a.anyUnrevealedBlank(),t=a.anyUnrevealedNumbers();return e?(a.reveal(e.i,e.j),1+a.scoreGrid()):t?(a.reveal(t.i,t.j),1+a.scoreGrid()):0},a.anyUnrevealedNumbers=function(){var e=a.state.gridState,t=!1;return e.forEach(function(e,a){e.forEach(function(e,n){e.isRevealed||e.hasMine||(t={i:a,j:n})})}),t},a.anyUnrevealedBlank=function(){var e=a.state.gridState,t=!1;return e.forEach(function(e,a){e.forEach(function(e,n){0!==e.nearby||e.isRevealed||e.hasMine||(t={i:a,j:n})})}),t},a.newGridState=function(){var e=a.state,t=e.nRows,n=e.nCols,r=e.chance;return b(t).map(function(e){return b(n).map(function(e){return{isRevealed:!1,hasMine:Math.random()<r,nearby:0,flag:!1,isHighlighted:!1,xray:!1}})})},a.resetGrid=function(){a.everyTile(function(e,t){return a.changeTile(e,t,{isRevealed:!1,flag:!1})})},a.xrayArea=function(e,t,n){a.changeTile(e,t,{xray:n}),a.eachNearby(e,t,function(e,t){a.changeTile(e,t,{xray:n})}),a.setState({xrayUsed:!0})},a.highlightArea=function(e,t,n){var r=a.state.gridState;a.changeTile(e,t,{isHighlighted:n}),a.eachNearby(e,t,function(e,t){r[e][t].flag||a.changeTile(e,t,{isHighlighted:n})})},a.reveal=function(e,t){var n=a.state.gridState,r=n[e][t],i=r.nearby,o=r.hasMine,s=r.flag;return n[e][t].isRevealed||s?0:o?(a.changeTile(e,t,{isRevealed:!0}),a.setState({gameStatus:"Game Over"})):(a.changeTile(e,t,{isRevealed:!0}),a.setState({totalHidden:a.gridReduce(function(e,t){return n[e][t].isRevealed?0:1})}),void(0!==i||o||a.eachNearby(e,t,function(e,t){a.reveal(e,t)})))},a.countNearby=function(){a.everyTile(function(e,t){return a.changeTile(e,t,{nearby:a.nearbyMines(e,t)})})},a.nearbyMines=function(e,t){var n=a.state.gridState,r=0;return a.eachNearby(e,t,function(e,t){return r+=n[e][t].hasMine?1:0}),r},a.nearbyFlags=function(e,t){var n=a.state.gridState,r=0;return a.eachNearby(e,t,function(e,t){return r+=n[e][t].flag?1:0}),r},a.eachNearby=function(e,t,n){$.forEach(function(r){var i=e+r[0],o=t+r[1];a.validTile(i,o)&&n(i,o)})},a.gridReduce=function(e){var t=0;return a.everyTile(function(a,n){return t+=e(a,n)}),t},a.changeTile=function(e,t,n){var r=a.state.gridState.slice();Object.assign(r[e][t],n),a.setState({gridState:r})},a.everyTile=function(e){return a.state.gridState.map(function(t,a){return t.map(function(t,n){return e(a,n)})})},a.validTile=function(e,t){return"undefined"!==typeof a.state.gridState[e]&&"undefined"!==typeof a.state.gridState[e][t]},a.state={nRows:10,nCols:10,chance:.1,gridState:null,totalMines:0,totalFlags:0,totalHidden:100,gameStatus:"Loading",time:0,score:0,theme:"dark",xrayOn:!1,infoOn:!1,ignoreNextClick:!1,scoreSubmission:null,xrayUsed:!1,hash:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.gameStatus,a=e.gridState,n=e.nRows,i=e.nCols,o=e.chance,s=e.totalMines,c=e.totalFlags,l=e.totalHidden,u=e.xrayOn,m=e.infoOn,h=e.theme,g=e.time,d=e.score,f=e.scoreSubmission,p=e.xrayUsed;return r.a.createElement("div",{className:"Game"},r.a.createElement("div",{className:"Game-menu"},r.a.createElement(H,{newGame:this.newGame,infoOn:m,xrayOn:u,theme:h,toggleInfo:this.toggleInfo,toggleXray:this.toggleXray,toggleTheme:this.toggleTheme}),r.a.createElement(G,{nCols:i,nRows:n,chance:o,onColChange:this.onColChange,onRowChange:this.onRowChange,onChanceChange:this.onChanceChange,newGame:this.newGame})),r.a.createElement("div",{className:"Game-grid"},r.a.createElement(x,{gridState:a,xray:u,theme:h,mouseDown:this.mouseDown,mouseUp:this.mouseUp,mouseEnter:this.mouseEnter,mouseLeave:this.mouseLeave,handleTouch:this.handleTouch}),r.a.createElement(T,{text:t,xrayUsed:p,score:d,time:g,submitHiscore:this.submitHiscore,closePopup:this.newGame,show:"Playing"!==t})),m?r.a.createElement(M,{mines:s,flags:c,hidden:l,time:g}):null,r.a.createElement(B,{scoreSubmission:f}),r.a.createElement("footer",null,r.a.createElement("a",{href:"https://github.com/jistjoalal/DarkSweeper"},r.a.createElement("i",{className:"fa fa-2x fa-github"}))))}},{key:"componentDidMount",value:function(){this.newGame()}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.totalHidden,a=e.totalMines,n=e.nRows,r=e.nCols,i=e.gameStatus,o=e.gridState;if("New Game"===i&&(this.countNearby(),this.setState({totalMines:this.gridReduce(function(e,t){return o[e][t].hasMine?1:0}),totalFlags:0,totalHidden:n*r,time:0,score:0,gameStatus:"Playing"})),t===a&&t!==n*r&&(this.setState({gameStatus:"Scoring",totalMines:a.toString()}),clearInterval(this.timer),this.resetGrid()),"Scoring"===i&&this.setState({gameStatus:"Hashing",score:this.scoreGrid()}),"Hashing"===i){var s=this.state,c=s.score,l=s.time;this.setState({gameStatus:"Winner!",hash:f.a.createHash("sha1").update("".concat(c," ").concat(l)).digest("base64")})}}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}}]),t}(n.Component),q=new h.a({uri:"/graphql"}),K=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(g.ApolloProvider,{client:q},r.a.createElement(X,null))}}]),t}(n.Component);o.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[118,2,1]]]);
//# sourceMappingURL=main.581b0378.chunk.js.map