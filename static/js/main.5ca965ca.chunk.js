(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(10),s=n.n(o),i=n(3),u=n(5),l=n(6),b=n(8),m=n(7),h=n(20),d=n(11),j=n(2),p=n.n(j),f=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(d.a)({},e.currentTarget.name,e.currentTarget.value))},t.contactMatching=function(){var e=t.state,n=e.name,a=e.number,c=t.props.contacts,r=c.reduce((function(t,e){return[].concat(Object(i.a)(t),[e.name])}),[]),o=c.reduce((function(t,e){return[].concat(Object(i.a)(t),[e.number])}),[]);return r.includes(n)||o.includes(a)?(alert("".concat(n).concat(a," is already in contacts")),!0):""===n||""===a?(alert("Please enter all data"),!0):void 0},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),t.setState({name:"",number:""}),t.contactMatching()||t.props.onSubmit(a,c)},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.form,children:[Object(a.jsxs)("label",{className:p.a.label,children:["Name",Object(a.jsx)("input",{type:"text",name:"name",value:this.state.name,placeholder:"Jack Sparrow",onChange:this.handleChange,className:p.a.input})]}),Object(a.jsxs)("label",{className:p.a.label,children:["Number",Object(a.jsx)("input",{type:"tel",name:"number",value:this.state.number,placeholder:"111-11-11",onChange:this.handleChange,className:p.a.input})]}),Object(a.jsx)("button",{type:"submit",className:p.a.button,children:"Add contact"})]})}}]),n}(c.Component);var C=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{children:["Find contacts by name:",Object(a.jsx)("input",{type:"text",value:e,onChange:n})]})},O=n(4),_=n.n(O);var v=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:_.a.list,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:_.a.item,children:[Object(a.jsxs)("p",{className:_.a.text,children:[c,": ",r]}),Object(a.jsx)("button",{type:"button",onClick:function(){return n(e)},className:_.a.button,children:"Delete"})]},e)}))})},x=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:Object(h.a)(),name:e,number:n};t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(i.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,c=this.getVisibleContacts();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(f,{onSubmit:this.addContact,contacts:n}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(C,{value:e,onChange:this.changeFilter}),Object(a.jsx)(v,{contacts:c,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component);n(17);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form:"ContactForm_form__1HSXB",label:"ContactForm_label__a_l0Y",input:"ContactForm_input__33yWk",button:"ContactForm_button__30Qeu"}},4:function(t,e,n){t.exports={list:"ContactList_list__3lJhu",item:"ContactList_item__3_h9y",text:"ContactList_text__2u3BH",span:"ContactList_span__ZtI3V",button:"ContactList_button__3RHNc",heart:"ContactList_heart__3lFYz"}}},[[18,1,2]]]);
//# sourceMappingURL=main.5ca965ca.chunk.js.map