(this.webpackJsonpevolvfit=this.webpackJsonpevolvfit||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(3),i=c.n(s),r=(c(12),c(13),c(4)),m=c(5),d=c(7),o=c(6),h=[{id:0,name:"VIRAT KOHLI",image:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"},{id:1,name:"ROHIT SHARMA",image:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170658/rohit-sharma.jpg"},{id:2,name:"KL RAHUL",image:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170673/kl-rahul.jpg"},{id:3,name:"SHREYAS IYER",image:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c171024/shreyas-iyer.jpg"},{id:4,name:"RISHAB PANT",image:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c171010/rishabh-pant.jpg"},{id:5,name:"RAVI ASHWIN",image:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c153372/ravichandran-ashwin.jpg"},{id:6,name:"HARDIK PANDYA",image:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170666/hardik-pandya.jpg"},{id:7,name:"RAVINDRA JADEJA",image:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170670/ravindra-jadeja.jpg"}],j=c(0),l=function(e){var t=e.contact,c=e.onClick;return Object(j.jsxs)("div",{className:"contact",onClick:c,children:[Object(j.jsx)("img",{src:t.image,alt:t.name}),Object(j.jsx)("div",{className:"contactName",children:t.name}),Object(j.jsx)("hr",{})]},t.id)},u=function(e){Object(d.a)(c,e);var t=Object(o.a)(c);function c(e){var a;return Object(r.a)(this,c),(a=t.call(this,e)).onContactSelected=function(e){a.setState({selectedContact:e})},a.handleSubmit=function(e){e.preventDefault(),a.setState({messageSent:a.state.message,message:""})},a.handleInputChange=function(e){a.setState({message:e.target.value})},a.RenderChatForm=function(e){return null!=e?Object(j.jsxs)("div",{className:"ChatSection vh-100",children:[Object(j.jsx)("header",{children:e.name}),Object(j.jsx)("div",{className:"ChatSpace",children:a.RenderMessage(a.state.messageSent)}),Object(j.jsx)("div",{className:"TypeMsg",children:Object(j.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(j.jsx)("input",{type:"text",name:"message",placeholder:"Type your message...",value:a.state.message,onChange:a.handleInputChange}),Object(j.jsx)("button",{type:"submit",children:Object(j.jsx)("i",{className:"fa fa-arrow-right","aria-hidden":"true"})})]})})]}):Object(j.jsx)("div",{className:"ChatSection vh-100",children:Object(j.jsx)("header",{children:"Click on a contact to chat"})})},a.RenderMessage=function(e){return""!==e?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"messageSent",children:e}),Object(j.jsx)("div",{className:"messageReceived",children:e})]}):Object(j.jsx)("div",{})},a.state={contacts:h,selectedContact:null,message:"",messageSent:""},a}return Object(m.a)(c,[{key:"render",value:function(){var e=this,t=this.state.contacts.map((function(t){return Object(j.jsx)(l,{contact:t,onClick:function(){return e.onContactSelected(t)}})}));return Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsxs)("div",{className:"row vh-100",children:[Object(j.jsxs)("div",{className:"col-2 col-md-3 contact-col vh-100",children:[Object(j.jsx)("div",{className:"contacts",children:"CONTACTS"}),Object(j.jsx)("hr",{}),t]}),Object(j.jsx)("div",{className:"col-10 col-md-9 vh-100",children:this.RenderChatForm(this.state.selectedContact)})]})})}}]),c}(a.Component);var b=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(u,{})})};c(15),c(16);i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c3ca22e8.chunk.js.map