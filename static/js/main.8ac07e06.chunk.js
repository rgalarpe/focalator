(this.webpackJsonpfocalator=this.webpackJsonpfocalator||[]).push([[0],{293:function(e,t,a){},294:function(e,t,a){},295:function(e,t,a){},296:function(e,t,a){},298:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),i=a(39),s=a.n(i),r=(a(80),a(17)),l=a(18),c=a(20),m=a(19),u=a(72),h=a.n(u),d=function(e){var t=e.onRouteChange;return e.isSignedIn?o.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement("p",{onClick:function(){return t("signout")},className:"f5 link dim black ph3 pointer"},"Sign Out")):o.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement("p",{onClick:function(){return t("register")},className:"f5 link dim black ph3 pointer"},"Register"),o.a.createElement("p",{onClick:function(){return t("signin")},className:"f5 link dim black ph3 pointer"},"Sign In"))},p=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("https://shielded-anchorage-14744.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){this.props.onRouteChange;return o.a.createElement("article",{className:"br3 ba b--black-10 mv1 w-100 w-50-m w-25-l mw6 shadow-5 center"},o.a.createElement("main",{className:"pa4 black-80"},o.a.createElement("div",{className:"measure"},o.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},o.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),o.a.createElement("div",{className:"mt3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),o.a.createElement("input",{className:"br3 ba b--black-20 mw6 shadow-5 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),o.a.createElement("div",{className:"mv3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),o.a.createElement("input",{className:"br3 ba b--black-20 mw6 shadow-5 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),o.a.createElement("div",{className:""},o.a.createElement("input",{onClick:this.onSubmitSignIn,className:"br3 ba b--black-20 mw6 shadow-5 b ph3 pv2 input-reset bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})))))}}]),a}(o.a.Component),g=(a(293),function(e){var t=e.imageUrl,a=e.box;return o.a.createElement("div",{className:"center ma"},o.a.createElement("div",{className:"absolute mt2"},o.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),o.a.createElement("div",{className:"bounding-box",style:{bottom:a.bottomRow,left:a.leftCol,right:a.rightCol,top:a.topRow}})))}),b=a(73),f=a.n(b),w=a(74),v=a.n(w),E=(a(294),function(){return o.a.createElement("div",{className:"ph3 pb2 mt0"},o.a.createElement(f.a,{className:"Tilt b5 shadow-2",options:{max:30},style:{height:80,width:80}},o.a.createElement("div",{className:"Tilt-inner"}," ",o.a.createElement("img",{alt:"logo",src:v.a})," ")))}),N=(a(295),function(e){var t=e.onInputChange,a=e.onPictureSubmit;return o.a.createElement("div",null,o.a.createElement("p",{className:"f4"},"Attach an image link and focalator will detect a face"),o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"form center pa2 b3 shadow-5"},o.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),o.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),k=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onNameCreate=function(e){n.setState({name:e.target.value})},n.onEmailCreate=function(e){n.setState({email:e.target.value})},n.onPasswordCreate=function(e){n.setState({password:e.target.value})},n.onSubmitRegister=function(){fetch("https://shielded-anchorage-14744.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.name,email:n.state.email,password:n.state.password})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={name:"",email:"",password:""},n}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("article",{className:"br3 ba b--black-10 mv1 w-100 w-50-m w-25-l mw6 shadow-5 center"},o.a.createElement("main",{className:"pa3 black-80"},o.a.createElement("div",{className:"measure"},o.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},o.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Register"),o.a.createElement("div",{className:"mt1"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),o.a.createElement("input",{className:"br3 ba b--black-20 mw6 shadow-5 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameCreate})),o.a.createElement("div",{className:"mt1"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),o.a.createElement("input",{className:"br3 ba b--black-20 mw6 shadow-5 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailCreate})),o.a.createElement("div",{className:"mv3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),o.a.createElement("input",{className:"br3 ba b--black-20 mw6 shadow-5 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordCreate}))),o.a.createElement("div",{className:""},o.a.createElement("input",{onClick:this.onSubmitRegister,className:"br3 ba b--black-20 mw6 shadow-5 b ph3 pv2 input-reset bg-transparent grow pointer f6 dib",type:"submit",value:"Save"})))))}}]),a}(o.a.Component),y=function(e){var t=e.name,a=e.entries;return o.a.createElement("div",null,o.a.createElement("div",{className:"white f3"},"".concat(t,", your current entry count is...")),o.a.createElement("div",{className:"white f1"},a))},A=(a(296),{particles:{number:{value:40,density:{enable:!0,value_area:800}}}}),C={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},j=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),o=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*o,rightCol:n-t.right_col*n,bottomRow:o-t.bottom_row*o}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onPictureSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://shielded-anchorage-14744.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://shielded-anchorage-14744.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(C):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=C,e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.route,i=e.box;return o.a.createElement("div",{className:"App"},o.a.createElement(h.a,{className:"particles",params:A}),o.a.createElement(d,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===n?o.a.createElement("div",null," ",o.a.createElement(E,null),o.a.createElement(y,{name:this.state.user.name,entries:this.state.user.entries}),o.a.createElement(N,{onInputChange:this.onInputChange,onPictureSubmit:this.onPictureSubmit}),o.a.createElement(g,{box:i,imageUrl:a})):"signin"===n?o.a.createElement(p,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):o.a.createElement(k,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(297);s.a.render(o.a.createElement(j,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/focalator",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/focalator","/service-worker.js");R?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):S(e)}))}}()},74:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAE8ElEQVR4nO3dUUxbVRgH8P+FbqVKZb22JIQsurVQyuKigUSjsJkwWTRZNpYljMSHSXzYgyR9M6YWR50PPmnkyZc9aYAJA8FEWVFjwEQTE5RusMsKxCgMU+hlttAWOuoD64bNxmz7XTmU7/fWpv3uOfn3nntue+4twBhjjDHGGGOMMcYYY4wxxhjbvSTqgnXnnZ5Fv/+t0J9zpngslnU9S0UFjl1sI2gZ4HW5saBMZl1Hp9cnnthfuiQftLV/++lH7xE07Z48ymIvNr7xo3/Q61anZkjCAABJovvMSESfv3gsJgX90yb/1autNU3NwyRF7yLrbd15p8c/6HXn6XR45mwjDhypgUGWqcoLJRIMYuaHYfi6LmM9Hoetvt5DtafkUxQBgKIiy5WoqhYcbjqLyoaT2GMwUJUWzh6DARZHBfJ1+ZgfuwYAh+enlQ8pausoigBAaHauCAAOvHwEADDkakVAUTKuV1hSghPtH9M0LsVAixPhW7ceud3k65LPJR8XOxyoe/8Cnj56FL9+1oG/Z2f3UbWNLJB4LCoBgMFkAgAEFAVN3V1U5Un916BTX5d83HGmEcD9vsajUbKhn/SgzrLHgQiGAxEMByIYzQIpLCnRqnRO0ywQraasuY6HLMFoFshAi1Or0jlNs0AedibMtsZDlmA4EMHwtFcwPO0VjDBDltflxtC7mf3Gk/V7Xa0ZvVcLZF+/pxpocaa1l2TzW/d2vVcLPO0VDNkeYrHbIeXdzzeXD+qb+2ax2wFJwu8z10lqkwVy7APPvx7n8kF9c9+S/f7l6x6S2sIc1NkGzQ7q6Uod8v7P7YJw7Ve2hAkkdcjL9e0+DA9ZguFABMOBCIYDEQwHIhgORDAciGA4EMFwIIIR5kw9HVTXCopoR+4hD7pWsNjh2IaW0NuRe4ho3z9R2pF7SC7jQARDNmR5XW5IUh7ZRf4i27yAw+tyk13/DhAGkquznkeh7jcPWRnQcr2A0IGM9/Wj51wzyacwoCjoOdeMif6vCFqmHaEDWY+vYTW8jO/aPPB1XkZEVdOuEVFVjHV24fsLF7EaXsb62lrW7dLy2hdhVi4+yKHTpxFduo2b3wziWncPxvu+RHGlA2a7HebyMhjMMvY+ZoTeWAgAiIXCWF0JIRJYxMJNPxYUBX9dH0fizh0AQPlrr6Ky4WTWfdNyEaBmgVA0WsqTUP1mM56qfQkTV/owNzqK+TEf5sd8adUora5CZUMDzPayrNuktR1xpm6x22F5523EQiEsKJMI3JiEOjWF6O0lrC6HEQuFAQB6YyH2Pl6Ign0myFYrzBXlMJeXQW80krZHy1WZOyKQJL3RiNLqKpRWV21rO3btLGs34kAEw4FkQMtpLweSAS2nvRyIYDgQwXAgguFABMOBCIbsTF2n1yfisZgUCQZhkGUUOxz37t6ZesvXrW7TmorydrHpbHcrxYc2VrisLG58+6wzGBJZF72L7LfH5145EQz6p03Pvt4Ex6lTVGWFNt7bi98+74RstaqjQ/0kt/EmG7Lkg7Z2ABjr/AITfX2IBINUpYWzsqhivLcXvq5uAMCTNtsnVLVJr3asaWoe/uOnn2soa4r47wib7X/h+ZGRjku1VPVID+ojHZdqbfX1HtlqVXX6ApJxVcR/R9DpCxKy1aqWHT/eRhkGY4wxxhhjjDHGGGOMMcYYY2y3+wcxQIsM6GeUawAAAABJRU5ErkJggg=="},75:function(e,t,a){e.exports=a(298)},80:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.8ac07e06.chunk.js.map