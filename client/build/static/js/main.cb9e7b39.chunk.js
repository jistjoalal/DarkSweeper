(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n.p+"static/media/logo.eed724ad.svg"},45:function(e,t,n){e.exports=n(72)},61:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(35),o=n.n(i),s=n(4),c=n(5),l=n(7),u=n(6),m=n(8),g=n(20),h=n(18),f=(n(61),n(22)),d=function(e){return e.show?e.children:null},p=function(e){return Object(f.a)(Array(e).keys())},v=n(41),b=n.n(v),y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isRevealed,n=e.hasMine,a=e.nearby,i=e.flag,o=e.onMouseDown,s=e.onMouseUp,c=e.onMouseEnter,l=e.onMouseLeave,u=e.xray,m=e.theme;return r.a.createElement("div",{className:"Tile-".concat(m),onMouseDown:o,onMouseUp:s,onMouseEnter:c,onMouseLeave:l,onContextMenu:function(e){return e.preventDefault()}},r.a.createElement(S,{isRevealed:t,flag:i,xray:u,theme:m},r.a.createElement(E,{hasMine:n,nearby:a})))}}]),t}(a.Component),S=function(e){var t=e.isRevealed,n=e.flag,a=e.children,i=e.xray,o=e.theme;return t?a:r.a.createElement("div",{className:"Cover-".concat(o)},n?r.a.createElement(w,null):i?a:null)},E=function(e){var t=e.hasMine,n=e.nearby;return t?r.a.createElement(N,null):r.a.createElement(O,{n:n})},O=function(e){var t=e.n;return r.a.createElement("span",{className:"nearby".concat(t)},0!==t?t:null)},N=function(){return r.a.createElement("img",{className:"Mine",src:b.a,alt:"X"})},w=function(){return r.a.createElement("span",{className:"Flag"},"F")},j=y,C=function(e){return Object(f.a)(Array(e).keys())},k=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).renderTileAt=function(e){var t=e.i,a=e.j,i=n.props.gridState[t][a],o=i.isRevealed,s=i.hasMine,c=i.nearby,l=i.flag,u=i.isHighlighted,m=i.xray,g=!!u||o,h=!u&&s,f=o?c:u?0:c;return r.a.createElement(j,{isRevealed:g,hasMine:h,nearby:f,flag:l,xray:m||n.props.xray,theme:n.props.theme,onMouseDown:function(e){return n.props.mouseDown(e,t,a)},onMouseUp:function(e){return n.props.mouseUp(e,t,a)},onMouseEnter:function(e){return n.props.mouseEnter(e,t,a)},onMouseLeave:function(e){return n.props.mouseLeave(e,t,a)}})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.gridState;return null===t?null:C(t.length).map(function(n){return r.a.createElement("div",{key:n,className:"Game-grid-row"},C(t[n].length).map(function(t){return r.a.createElement(e.renderTileAt,{key:"".concat(n,",").concat(t),i:n,j:t})}))})}}]),t}(a.Component),x=function(e){var t=e.mines,n=e.hidden,a=e.time;return r.a.createElement("div",{className:"Game-info"},r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"bomb"},"\ud83d\udca3")," ",t,r.a.createElement("span",{role:"img","aria-label":"question"}," \u2753")," ",n,r.a.createElement("span",{role:"img","aria-label":"timer"}," \u23f1")," ",a),r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"ok"},"\ud83d\udc4c "),"Click around with right+left click for a safe start!"),r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"score"},"\ud83d\udcaf "),r.a.createElement("a",{href:"http://www.minesweeper.info/wiki/3BV",target:"blank"},"Difficulty = minimum # of left clicks to win")),r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"radioactive"},"\u2622 "),"Use middle click to xray (cheat) the area."))},M=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.newGame,n=e.infoOn,a=e.xrayOn,i=e.theme,o=e.toggleInfo,s=e.toggleXray,c=e.toggleTheme;return r.a.createElement("div",{className:"GameButtons"},r.a.createElement("button",{onClick:t,className:"Game-button"},"New Game"),r.a.createElement("button",{onClick:o,className:"Game-button".concat(n?" toggle":"")},"Game Info"),r.a.createElement("button",{onClick:s,className:"Game-button".concat(a?" toggle":"")},"X-RAY"),r.a.createElement("button",{onClick:c,className:"Game-button".concat("light"===i?" toggle":"")},"Theme"))}}]),t}(a.Component),G=function(e){return r.a.createElement(d,{show:e.show},r.a.createElement("div",{className:"Popup",onContextMenu:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"Popup-inner"},r.a.createElement("p",null,e.text),"Winner!"===e.text?r.a.createElement("div",{className:"Popup-score"},r.a.createElement("p",null,"Difficulty: ",e.score," | Time: ",e.time),r.a.createElement("form",{onSubmit:function(t){return e.submitHiscore(t)}},r.a.createElement("input",{autoFocus:!0,className:"Popup-name",type:"text",placeholder:"Name"}),r.a.createElement("input",{className:"Popup-submit",type:"submit",value:"Submit"}))):null,r.a.createElement("button",{className:"close",onClick:e.closePopup},"Back"))))},R=n(43),H=n(24);function T(){var e=Object(H.a)(["\n  mutation($name: String!, $score: Int!, $time: Int!){\n    addHiscore(name: $name, score: $score, time: $time){\n      id\n      name\n      score\n      time\n    }\n  }\n"]);return T=function(){return e},e}function U(){var e=Object(H.a)(["\n  {\n    hiscores{\n      id\n      name\n      score\n      time\n    }\n  }\n"]);return U=function(){return e},e}var P=Object(g.b)(U()),A=Object(g.b)(T()),D=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).displayHiscores=function(){var e=n.props.getHiscoresQuery;return e.loading?r.a.createElement("li",null,"Loading Hiscores..."):e.hiscores.map(function(e){return r.a.createElement(I,Object.assign({key:e.id},e))})},n.submitHiscore=function(){var e=n.props.scoreSubmission;e.score<2?alert("score too low to submit :("):n.props.addHiscoreMutation({variables:Object(R.a)({},e),refetchQueries:[{query:P}]})},n.state={lastSubmission:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props.scoreSubmission;e!==this.state.lastSubmission&&(this.setState({lastSubmission:e}),this.submitHiscore())}},{key:"render",value:function(){return r.a.createElement("div",{className:"HiscoreView"},r.a.createElement("h2",null,"Hiscores:"),r.a.createElement("ul",{className:"Hiscores"},this.displayHiscores()))}}]),t}(a.Component),I=function(e){var t=e.name,n=e.score,a=e.time;e.id;return r.a.createElement("li",{className:"Hiscore"},t," | ",n," | ",a)},F=Object(h.compose)(Object(h.graphql)(P,{name:"getHiscoresQuery"}),Object(h.graphql)(A,{name:"addHiscoreMutation"}))(D),L=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]],z=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).mouseEnter=function(e,t,a){"Playing"===n.state.gameStatus&&(3===e.buttons&&n.highlightArea(t,a,!0),4===e.buttons&&n.xrayArea(t,a,!0))},n.mouseLeave=function(e,t,a){3===e.buttons&&n.highlightArea(t,a,!1),4===e.buttons&&n.xrayArea(t,a,!1)},n.mouseDown=function(e,t,a){e.preventDefault(),"Playing"===n.state.gameStatus&&(3===e.buttons&&(n.setState({ignoreNextClick:!0}),n.highlightArea(t,a,!0)),1===e.button&&n.xrayArea(t,a,!0))},n.mouseUp=function(e,t,a){var r=n.state,i=r.ignoreNextClick,o=r.gridState;if([1,2].includes(e.buttons))return n.setState({ignoreNextClick:!0}),n.highlightArea(t,a,!1),void(o[t][a].nearby!==n.nearbyFlags(t,a)||o[t][a].hasMine||(n.reveal(t,a),n.eachNearby(t,a,function(e,t){n.reveal(e,t)})));1===e.button?n.xrayArea(t,a,!1):0!==e.button||i?2!==e.button||i||n.handleRightClick(t,a):n.handleClick(t,a),n.setState({ignoreNextClick:!1})},n.handleClick=function(e,t){var a=n.state,r=a.gridState,i=a.gameStatus,o=r[e][t].flag;"Playing"!==i||o||n.reveal(e,t)},n.handleRightClick=function(e,t){var a=n.state,r=a.gridState,i=a.gameStatus,o=a.totalFlags,s=r[e][t],c=s.isRevealed,l=s.flag;if("Playing"===i&&!c){n.changeTile(e,t,{flag:!l});var u=l?-1:1;n.setState({totalFlags:o+u})}},n.newGame=function(){var e=n.state,t=e.nRows,a=e.nCols;n.setState({gridState:n.newGridState(),gameStatus:"New Game",currentSize:{nRows:t,nCols:a}}),clearInterval(n.timer),n.timer=setInterval(function(){return n.tick()},1e3)},n.tick=function(){var e=n.state,t=e.totalHidden,a=e.gameStatus,r=e.currentSize;t!==r.nRows*r.nCols&&"Playing"===a&&n.setState({time:n.state.time+1})},n.toggleTheme=function(){var e="dark"===n.state.theme?"light":"dark";n.setState({theme:e})},n.toggleInfo=function(){n.setState({infoOn:!n.state.infoOn})},n.toggleXray=function(){n.setState({xrayOn:!n.state.xrayOn})},n.submitSize=function(e){isNaN(e.target.value)||n.newGame()},n.onColChange=function(e){isNaN(parseInt(e.target.value))||n.setState({nCols:parseInt(e.target.value)})},n.onRowChange=function(e){isNaN(parseInt(e.target.value))||n.setState({nRows:parseInt(e.target.value)})},n.onChanceChange=function(e){isNaN(parseFloat(e.target.value))||n.setState({chance:parseFloat(e.target.value)})},n.submitHiscore=function(e){var t=e.target[0].value,a=n.state,r=a.score,i=a.time;n.setState({scoreSubmission:{name:t,score:r,time:i}}),n.newGame(),e.preventDefault()},n.scoreGrid=function(){var e=n.anyUnrevealedBlank(),t=n.anyUnrevealedNumbers();return e?(n.reveal(e.i,e.j),1+n.scoreGrid()):t?(n.reveal(t.i,t.j),1+n.scoreGrid()):0},n.anyUnrevealedNumbers=function(){var e=n.state.gridState,t=!1;return e.forEach(function(e,n){e.forEach(function(e,a){e.isRevealed||e.hasMine||(t={i:n,j:a})})}),t},n.anyUnrevealedBlank=function(){var e=n.state.gridState,t=!1;return e.forEach(function(e,n){e.forEach(function(e,a){0!==e.nearby||e.isRevealed||e.hasMine||(t={i:n,j:a})})}),t},n.newGridState=function(){var e=n.state,t=e.nRows,a=e.nCols,r=e.chance;return p(t).map(function(e){return p(a).map(function(e){return{isRevealed:!1,hasMine:Math.random()<r,nearby:0,flag:!1,isHighlighted:!1,xray:!1}})})},n.resetGrid=function(){n.everyTile(function(e,t){return n.changeTile(e,t,{isRevealed:!1,flag:!1})})},n.xrayArea=function(e,t,a){n.changeTile(e,t,{xray:a}),n.eachNearby(e,t,function(e,t){n.changeTile(e,t,{xray:a})})},n.highlightArea=function(e,t,a){var r=n.state.gridState;n.changeTile(e,t,{isHighlighted:a}),n.eachNearby(e,t,function(e,t){r[e][t].flag||n.changeTile(e,t,{isHighlighted:a})})},n.reveal=function(e,t){var a=n.state.gridState,r=a[e][t],i=r.nearby,o=r.hasMine,s=r.flag;return a[e][t].isRevealed||s?0:o?(n.changeTile(e,t,{isRevealed:!0}),n.setState({gameStatus:"Game Over"})):(n.changeTile(e,t,{isRevealed:!0}),n.setState({gameStatus:"Calculating"}),void(0!==i||o||n.eachNearby(e,t,function(e,t){n.reveal(e,t)})))},n.countNearby=function(){n.everyTile(function(e,t){return n.changeTile(e,t,{nearby:n.nearbyMines(e,t)})})},n.nearbyMines=function(e,t){var a=n.state.gridState,r=0;return n.eachNearby(e,t,function(e,t){return r+=a[e][t].hasMine?1:0}),r},n.nearbyFlags=function(e,t){var a=n.state.gridState,r=0;return n.eachNearby(e,t,function(e,t){return r+=a[e][t].flag?1:0}),r},n.eachNearby=function(e,t,a){L.forEach(function(r){var i=e+r[0],o=t+r[1];n.validTile(i,o)&&a(i,o)})},n.gridReduce=function(e){var t=0;return n.everyTile(function(n,a){return t+=e(n,a)}),t},n.changeTile=function(e,t,a){var r=n.state.gridState.slice();Object.assign(r[e][t],a),n.setState({gridState:r})},n.everyTile=function(e){return n.state.gridState.map(function(t,n){return t.map(function(t,a){return e(n,a)})})},n.validTile=function(e,t){return"undefined"!==typeof n.state.gridState[e]&&"undefined"!==typeof n.state.gridState[e][t]},n.state={nRows:10,nCols:10,currentSize:{nRows:10,nCols:10},chance:.1,gridState:null,totalMines:0,totalFlags:0,totalHidden:100,gameStatus:"Loading",time:0,score:0,theme:"dark",xrayOn:!1,infoOn:!1,ignoreNextClick:!1,scoreSubmission:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.gameStatus,n=e.gridState,a=e.nRows,i=e.nCols,o=e.chance,s=e.totalMines,c=e.totalFlags,l=e.totalHidden,u=e.xrayOn,m=e.infoOn,g=e.theme,h=e.time,f=e.score,d=e.scoreSubmission;return r.a.createElement("div",{className:"Game"},r.a.createElement("div",{className:"Game-menu"},r.a.createElement(M,{newGame:this.newGame,infoOn:m,xrayOn:u,theme:g,toggleInfo:this.toggleInfo,toggleXray:this.toggleXray,toggleTheme:this.toggleTheme}),r.a.createElement("div",null,r.a.createElement("input",{className:"Game-input",type:"number",value:i,min:1,max:64,onChange:this.onColChange,onKeyUp:this.submitSize}),"x",r.a.createElement("input",{className:"Game-input",type:"number",value:a,min:1,max:64,onChange:this.onRowChange,onKeyUp:this.submitSize}),"x",r.a.createElement("input",{className:"Game-input",type:"number",value:o,min:0,max:1,step:.01,onChange:this.onChanceChange,onKeyUp:this.submitSize}))),r.a.createElement("div",{className:"Game-grid"},r.a.createElement(k,{gridState:n,xray:u,theme:g,mouseDown:this.mouseDown,mouseUp:this.mouseUp,mouseEnter:this.mouseEnter,mouseLeave:this.mouseLeave}),r.a.createElement(G,{show:"Playing"!==t,text:t,submitHiscore:this.submitHiscore,score:f,time:h,closePopup:this.newGame})),m?r.a.createElement(x,{mines:s,flags:c,hidden:l,time:h}):null,r.a.createElement(F,{scoreSubmission:d}))}},{key:"componentDidMount",value:function(){this.newGame()}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.totalHidden,n=e.totalMines,a=e.nRows,r=e.nCols,i=e.gameStatus,o=e.gridState;"New Game"===i&&(this.countNearby(),this.setState({totalMines:this.gridReduce(function(e,t){return o[e][t].hasMine?1:0}),totalFlags:0,totalHidden:a*r,time:0,score:0,gameStatus:"Playing"})),"Calculating"===i&&this.setState({totalHidden:this.gridReduce(function(e,t){return o[e][t].isRevealed?0:1}),gameStatus:"Playing"}),t===n&&(this.setState({gameStatus:"Scoring",totalMines:n.toString()}),clearInterval(this.timer),this.resetGrid()),"Scoring"===i&&this.setState({gameStatus:"Winner!",score:this.scoreGrid()})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}}]),t}(a.Component),B=new g.a({uri:"http://localhost:".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).PORT||3001,"/graphql")}),X=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.ApolloProvider,{client:B},r.a.createElement(z,null))}}]),t}(a.Component);o.a.render(r.a.createElement(X,null),document.getElementById("root"))}},[[45,2,1]]]);
//# sourceMappingURL=main.cb9e7b39.chunk.js.map