(this.webpackJsonpevolvfit=this.webpackJsonpevolvfit||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(3),s=c.n(i),r=(c(12),c(13),c(4)),m=c(5),d=c(7),l=c(6),h=[{id:0,name:"VIRAT",image:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"},{id:1,name:"ROHIT",image:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170658/rohit-sharma.jpg"},{id:2,name:"RAHUL",image:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170673/kl-rahul.jpg"},{id:3,name:"SHREYAS",image:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c171024/shreyas-iyer.jpg"},{id:4,name:"RISHAB",image:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c171010/rishabh-pant.jpg"},{id:5,name:"ASHWIN",image:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c153372/ravichandran-ashwin.jpg"},{id:6,name:"HARDIK",image:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170666/hardik-pandya.jpg"},{id:7,name:"JADEJA",image:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170670/ravindra-jadeja.jpg"}],o=c(0),j=function(e){var t=e.contact,c=e.onClick;return Object(o.jsxs)("div",{className:"contact",onClick:c,children:[Object(o.jsx)("img",{src:t.image,alt:t.name,className:"img-thumbnail"}),Object(o.jsx)("div",{className:"contactName d-none d-md-inline",children:t.name}),Object(o.jsx)("hr",{})]},t.id)},u=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var a;return Object(r.a)(this,c),(a=t.call(this,e)).onContactSelected=function(e){a.setState({selectedContact:e})},a.handleSubmit=function(e){e.preventDefault(),a.setState({messageSent:a.state.message,message:""})},a.handleInputChange=function(e){a.setState({message:e.target.value})},a.RenderChatForm=function(e){return null!=e?Object(o.jsxs)("div",{className:"ChatSection vh-100",children:[Object(o.jsx)("header",{children:e.name}),Object(o.jsx)("div",{className:"ChatSpace",children:a.RenderMessage(a.state.messageSent)}),Object(o.jsx)("div",{className:"TypeMsg",children:Object(o.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(o.jsx)("input",{type:"text",name:"message",placeholder:"Type your message...",value:a.state.message,onChange:a.handleInputChange}),Object(o.jsx)("button",{type:"submit",children:Object(o.jsx)("i",{className:"fa fa-arrow-right","aria-hidden":"true"})})]})})]}):Object(o.jsx)("div",{className:"ChatSection vh-100",children:Object(o.jsx)("header",{children:"Click on a contact to chat"})})},a.RenderMessage=function(e){return""!==e?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"messageSent",children:e}),Object(o.jsx)("div",{className:"messageReceived",children:e})]}):Object(o.jsx)("div",{})},a.state={contacts:h,selectedContact:null,message:"",messageSent:""},a}return Object(m.a)(c,[{key:"render",value:function(){var e=this,t=this.state.contacts.map((function(t){return Object(o.jsx)(j,{contact:t,onClick:function(){return e.onContactSelected(t)}})}));return Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsxs)("div",{className:"row vh-100",children:[Object(o.jsxs)("div",{className:"col-3 contact-col vh-100",children:[Object(o.jsx)("div",{className:"contacts",children:"CONTACTS"}),Object(o.jsx)("div",{children:t})]}),Object(o.jsx)("div",{className:"col-9 vh-100",children:this.RenderChatForm(this.state.selectedContact)})]})})}}]),c}(a.Component);var b=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(u,{})})};c(15),c(16);s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.aaa6e48e.chunk.js.map