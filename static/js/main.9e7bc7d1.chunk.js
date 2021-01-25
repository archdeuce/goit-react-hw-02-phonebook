(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(8),o=n.n(i),s=(n(17),n(11)),l=n(2),u=n(3),m=n(5),b=n(4),d=(n(18),n(9)),j=(n(19),n(10)),h=n.n(j),f=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.changeHandler=function(e){e.preventDefault(),t.setState(Object(d.a)({},e.currentTarget.name,e.currentTarget.value))},t.submitHandler=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;""!==a&&""!==c?(t.props.onCreate({id:h.a.generate(),name:a,number:c}),t.setState({name:"",number:""})):alert("You need to specify the name and phone number.")},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{className:"ContactForm__form",action:"URL",onSubmit:this.submitHandler,children:[Object(a.jsx)("label",{className:"ContactForm__label",htmlFor:"nameId",children:"Name:"}),Object(a.jsx)("input",{className:"ContactForm__input",id:"nameId",name:"name",type:"text",value:e,onChange:this.changeHandler}),Object(a.jsx)("label",{className:"ContactForm__label",htmlFor:"telId",children:"Number:"}),Object(a.jsx)("input",{className:"ContactForm__input",id:"telId",name:"number",type:"tel",value:n,onChange:this.changeHandler}),Object(a.jsx)("button",{className:"ContactForm__button",type:"submit",children:"Add contact"})]})})}}]),n}(c.Component),p=(n(28),function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.onDelete;return Object(a.jsx)("div",{className:"ContactList__container",children:Object(a.jsx)("ul",{className:"ContactList__list",children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:"ContactList__list_item",children:[Object(a.jsx)("button",{className:"ContactList__delete_button",type:"button",onClick:function(){return n(e)},children:"Delete"}),Object(a.jsx)("span",{className:"ContactList__name",children:c}),Object(a.jsx)("span",{className:"ContactList__dash",children:" - "}),Object(a.jsx)("span",{className:"ContactList__number",children:r})]},e)}))})})}}]),n}(c.Component)),O=(n(29),function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).inputHandler=function(e){t.props.onFilterChanged(e.target.value)},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Filter__container",children:[Object(a.jsx)("label",{className:"Filter__label",htmlFor:"filterId",children:"Find contacts by name:"}),Object(a.jsx)("input",{className:"Filter__input",id:"filterId",type:"text",onChange:this.inputHandler})]})}}]),n}(c.Component)),C=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.onCreate=function(e){t.state.contacts.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts.")):t.setState((function(t){return{contacts:[e].concat(Object(s.a)(t.contacts))}}))},t.onFilterChanged=function(e){t.setState({filter:e})},t.onDelete=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return a=a.toLowerCase(),n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.filteredContacts();return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(f,{onCreate:this.onCreate}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(O,{onFilterChanged:this.onFilterChanged}),Object(a.jsx)(p,{contacts:t,onDelete:this.onDelete})]})}}]),n}(c.Component);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.9e7bc7d1.chunk.js.map