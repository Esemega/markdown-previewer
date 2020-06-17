(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),o=a.n(i),c=a(4),l=a(5),s=a(9),m=a(8),d=a(1),h=a(15),u=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={markdown:"# Headings \n# h1\n## h2\n### h3 \n<br> **bold text** and *italicized text*. \n> This is a blockquote\n---\n<br>\n\n1. First item \n2. Second item \n3. Third item <br>\n\n[There is a link to my Github](https://github.com/Esemega/)\n\n| Syntax | Description |\n| ----------- | ----------- |\n| Header | Title |\n| Paragraph | Text |\n\n<br>\n\n~~The world is flat.~~\n\n<br>\n\n### TODO\n- [x] Visit my Github page\n- [ ] Share this proyect with your friends\n- [ ] Contact me "},n}return Object(l.a)(a,[{key:"updateMarkdown",value:function(e){this.setState({markdown:e})}},{key:"render",value:function(){var e=this,t={width:"550px",height:"70vh",marginLeft:"auto",marginRight:"auto",padding:"10px",borderRadius:"2px 2px 4px 4px",boxShadow:"1px"};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("h1",null,r.a.createElement(d.a,{className:"text-align-center",variant:"light"},"Markdown Previewer")))),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("h4",null,r.a.createElement(d.a,{className:"text-align-center",variant:"secondary"},"Markdown Input"))),r.a.createElement("div",{className:"mark-input",style:t},r.a.createElement("textarea",{className:"input",style:t,value:this.state.markdown,onChange:function(t){e.updateMarkdown(t.target.value)}}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("h4",null,r.a.createElement(d.a,{className:"text-align-center",variant:"secondary"},"Preview"))),r.a.createElement("div",{style:t},r.a.createElement("div",{style:{width:"550px",height:"70vh",backgroundColor:"#f1f1f1",marginLeft:"auto",marginRight:"auto",padding:"10px",overflow:"auto",borderRadius:"2px 2px 4px 4px",boxShadow:"1px"},dangerouslySetInnerHTML:{__html:h(this.state.markdown)}}))))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.6405efdc.chunk.js.map