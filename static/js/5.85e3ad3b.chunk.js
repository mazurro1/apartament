(this["webpackJsonpwebsite-app"]=this["webpackJsonpwebsite-app"]||[]).push([[5],{153:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=function(e){var a=e.type,t=e.checked,n=e.onChange,i=e.name,o=e.value,s=e.placeholder,l=e.className,m=e.disabled,c="checkbox"===a?r.a.createElement("input",{checked:t,onChange:n,name:i,type:a,className:"button2 ".concat(l),placeholder:s,disabled:m}):r.a.createElement("input",{value:o,onChange:n,name:i,type:a,className:"button ".concat(l),placeholder:s,disabled:m});return r.a.createElement(r.a.Fragment,null,c)};a.a=function(e){var a=e.itemName,t=void 0===a?"":a,n=e.formName,o=void 0===n?"":n,s=e.itemFalseName,l=e.formValidation,m=void 0===l||l,c=e.itemValidation,d=void 0!==c&&c,u=e.itemValue,p=void 0===u?"":u,h=e.itemOnChange,v=e.itemType,g=e.itemPlaceholder,w=void 0===g?"":g,f=e.itemChecked,b=void 0!==f&&f,O=e.disabled,E=void 0!==O&&O;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-lg-2 offset-md-3 col-md-3 col-12"},r.a.createElement("div",{className:"positionTop animation"},o,m&&!d?r.a.createElement("div",{className:"font-12 text-danger font-weight-bold mb-1 mb-md-0"},s):null)),r.a.createElement("div",{className:"col-lg-4 col-md-5 col-12"},r.a.createElement(i,{className:m&&!d?"formInvalid":null,value:null===p?"":p,onChange:h,name:t,type:v,placeholder:w,checked:b,disabled:E}))))}},185:function(e,a,t){"use strict";t.r(a);var n=t(29),r=t(11),i=t(13),o=t(12),s=t(14),l=t(15),m=t(0),c=t.n(m),d=t(16),u=t(1),p=t(35),h=t(36),v=t(38),g=t(153),w=t(21),f=t(28),b=t(33),O=function(e){var a=e.inputs,t=e.handleResetPassword,n=e.handleOnClickSave,r=e.resetPasswordVisible,i=e.animationTiming;return c.a.createElement(b.a,{in:!1===r,timeout:i,mountOnEnter:!0,unmountOnExit:!0,classNames:"animationLeft"},c.a.createElement("div",{className:"accountSetting"},c.a.createElement("div",{className:"container"},c.a.createElement(w.a,{name:"LOGOWANIE"}),a,c.a.createElement("div",{className:"row margin-top-40"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"text-center "},c.a.createElement(f.a,{buttonName:"Odzyskaj has\u0142o",buttonOnClick:t,buttonColor:"red",buttonInline:!0}),c.a.createElement(f.a,{buttonName:"Zaloguj",buttonOnClick:n,buttonColor:"gray",buttonInline:!0})))))))},E=function(e){var a=e.resetPasswordVisible,t=e.reset_password_visible,n=e.resetPassword,r=e.resetPasswordValidation,i=e.handleInputOnChangePassword,o=e.handleOnClickResetPassword,s=e.animationTiming;return c.a.createElement(b.a,{in:a,timeout:s,mountOnEnter:!0,unmountOnExit:!0,classNames:"animationRight"},c.a.createElement("div",{className:"accountSetting"},c.a.createElement("div",{className:"container"},c.a.createElement(w.a,{name:"ODZYSKIWANIE HAS\u0141A"}),c.a.createElement(g.a,{formName:"Tw\xf3j adres e-mail",itemFalseName:"Nie poprawny e-mail",formValidation:r,itemValidation:n.email.validated,itemOnChange:i,itemValue:n.email.value,itemName:"email",itemType:"email",itemPlaceholder:""}),c.a.createElement("div",{className:"text-center margin-top-40"},c.a.createElement(f.a,{buttonName:"Powr\xf3t",buttonColor:"red",buttonInline:!0,buttonOnClick:t}),c.a.createElement(f.a,{buttonName:"Wy\u015blij",buttonColor:"gray",buttonInline:!0,buttonOnClick:o})))))};function N(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?N(t,!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var k=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(i)))).state={form:{email:{value:"",validated:null},password:{value:"",validated:null}},resetPassword:{email:{value:"",validated:null}},resetPasswordValidation:!1},t.handleInputOnChange=function(e){var a=P({},t.state.form),n=P({},a[e.target.name]);"checkbox"===e.target.type?(n.value=e.target.checked,n.validated=e.target.checked):(n.value=e.target.value,n.validated=t.checkValidity(n.value,n.validated,e.target.name)),a[e.target.name]=n,t.setState({form:a})},t.handleInputOnChangePassword=function(e){var a=P({},t.state.resetPassword),n=P({},a[e.target.name]);"checkbox"===e.target.type?(n.value=e.target.checked,n.validated=e.target.checked):(n.value=e.target.value,n.validated=t.checkValidity(n.value,n.validated,e.target.name)),a[e.target.name]=n,t.setState({resetPassword:a})},t.handleOnClickSave=function(e){e.preventDefault(),t.props.login_validation_change(!0),t.state.form.email.validated&&t.state.form.password.validated&&t.props.onAuth(t.state.form.email.value,t.state.form.password.value,!1)},t.handleOnClickResetPassword=function(e){e.preventDefault(),t.setState({resetPasswordValidation:!0}),t.state.resetPassword.email.validated&&t.props.onAuth_Reset_Password(t.state.resetPassword.email.value)},t}return Object(l.a)(a,e),Object(i.a)(a,[{key:"shouldComponentUpdate",value:function(e,a){return e!==this.props||a!==this.state}},{key:"checkValidity",value:function(e,a,t){var n=!1;if("password"===t&&(n=e.length>=6),"email"===t){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)}return n}},{key:"render",value:function(){var e=this,a=this.state.form,t=this.props.signed?c.a.createElement(p.a,{to:"/"}):null,n=this.props.errorLogin?c.a.createElement(h.a,{name:"Z\u0142y login lub has\u0142o.",modalOn:!0,onClickButton:function(){return e.props.is_error_login(!1)}}):c.a.createElement(h.a,{name:"Z\u0142y login lub has\u0142o.",modalOn:!1,onClickButton:function(){return e.props.is_error_login(!1)}}),r=this.props.newAccount?c.a.createElement(h.a,{name:"Nowe konto zosta\u0142o utworzone",modalError:!1,modalOn:!0,onClickButton:function(){return e.props.is_newAccount(!1)}}):c.a.createElement(h.a,{name:"Nowe konto zosta\u0142o utworzone",modalError:!1,modalOn:!1,onClickButton:function(){return e.props.is_newAccount(!1)}}),i=[{id:1,formName:"Adres e-mail:",itemFalseName:"Niepoprawny e-mail",formValidation:this.props.loginValidation,itemValidation:a.email.validated,itemOnChange:this.handleInputOnChange,itemValue:a.email.value,itemName:"email",itemType:"text",itemPlaceholder:"",itemChecked:!1},{id:2,formName:"Has\u0142o:",itemFalseName:"Niepoprawne has\u0142o",formValidation:this.props.loginValidation,itemValidation:a.password.validated,itemOnChange:this.handleInputOnChange,itemValue:a.password.value,itemName:"password",itemType:"password",itemPlaceholder:"",itemChecked:!1}].map((function(e){return c.a.createElement(g.a,{key:e.id,formName:e.formName,itemFalseName:e.itemFalseName,formValidation:e.formValidation,itemValidation:e.itemValidation,itemOnChange:e.itemOnChange,itemValue:e.itemValue,itemName:e.itemName,itemType:e.itemType,itemPlaceholder:e.itemPlaceholder,itemChecked:e.itemChecked})}));return c.a.createElement(b.a,{in:this.props.loginVisible,timeout:this.props.animationTiming,mountOnEnter:!0,unmountOnExit:!0,classNames:"animationRight"},c.a.createElement("div",{className:"pagePosition"},!0===e.props.errorResetPassword?c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{modalError:!1,name:"Wiadomos\u0107 zosta\u0142a wys\u0142ana na podany adres e-mail",modalOn:!0,onClickButton:function(){return e.props.error_reset_password(null)}}),c.a.createElement(h.a,{name:"Podany e-mail nie istnieje",modalOn:!1,onClickButton:function(){return e.props.error_reset_password(null)}})):!1===e.props.errorResetPassword?c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{modalError:!1,name:"Wiadomos\u0107 zosta\u0142a wys\u0142ana na podany adres e-mail",modalOn:!1,onClickButton:function(){return e.props.error_reset_password(null)}}),c.a.createElement(h.a,{name:"Podany e-mail nie istnieje",modalOn:!0,onClickButton:function(){return e.props.error_reset_password(null)}})):c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{modalError:!1,name:"Wiadomos\u0107 zosta\u0142a wys\u0142ana na podany adres e-mail",modalOn:!1,onClickButton:function(){return e.props.error_reset_password(null)}}),c.a.createElement(h.a,{name:"Podany e-mail nie istnieje",modalOn:!1,onClickButton:function(){return e.props.error_reset_password(null)}})),t,n,r,c.a.createElement("div",{className:"container positionRelative "},c.a.createElement(v.a,{onClick:this.props.login_visible}),c.a.createElement("div",{className:"positionAbsoluteWidth"},c.a.createElement(O,{inputs:i,handleResetPassword:this.props.reset_password_visible,handleOnClickSave:this.handleOnClickSave,resetPasswordVisible:this.props.resetPasswordVisible,animationTiming:this.props.animationTiming})),c.a.createElement("div",{className:"positionAbsoluteWidth"},c.a.createElement(E,{resetPasswordVisible:this.props.resetPasswordVisible,reset_password_visible:this.props.reset_password_visible,resetPasswordValidation:this.state.resetPasswordValidation,resetPassword:this.state.resetPassword,handleInputOnChangePassword:this.handleInputOnChangePassword,handleOnClickResetPassword:this.handleOnClickResetPassword,animationTiming:this.props.animationTiming})))))}}]),a}(m.Component);a.default=Object(d.b)((function(e){return{login:e.login,signed:e.signed,errorLogin:e.errorLogin,loginVisible:e.loginVisible,errorNetwork:e.errorNetwork,resetPasswordVisible:e.resetPasswordVisible,errorResetPassword:e.errorResetPassword,loginValidation:e.loginValidation,newAccount:e.newAccount,animationTiming:e.animationTiming}}),(function(e){return{onAuth:function(a,t,n){return e(u.d(a,t,n))},is_error_login:function(a){return e(u.A(a))},login_visible:function(){return e(u.H())},error_network:function(a){return e(u.v(a))},reset_password_visible:function(){return e(u.Q())},onAuth_Reset_Password:function(a){return e(u.J(a))},error_reset_password:function(a){return e(u.w(a))},login_validation_change:function(a){return e(u.G(a))}}}))(k)}}]);
//# sourceMappingURL=5.85e3ad3b.chunk.js.map