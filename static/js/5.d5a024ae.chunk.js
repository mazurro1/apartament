(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,a,t){"use strict";var n=t(0),i=t.n(n),o=function(e){var a=e.type,t=e.checked,n=e.onChange,o=e.name,r=e.value,s=e.placeholder,l=e.className,m=e.disabled,d="checkbox"===a?i.a.createElement("input",{checked:t,onChange:n,name:o,type:a,className:"button2 ".concat(l),placeholder:s,disabled:m}):i.a.createElement("input",{value:r,onChange:n,name:o,type:a,className:"button ".concat(l),placeholder:s,disabled:m});return i.a.createElement(i.a.Fragment,null,d)};a.a=function(e){var a=e.itemName,t=void 0===a?"":a,n=e.formName,r=void 0===n?"":n,s=e.itemFalseName,l=e.formValidation,m=void 0===l||l,d=e.itemValidation,c=void 0!==d&&d,u=e.itemValue,p=void 0===u?"":u,h=e.itemOnChange,v=e.itemType,g=e.itemPlaceholder,w=void 0===g?"":g,b=e.itemChecked,f=void 0!==b&&b,E=e.disabled,N=void 0!==E&&E;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row mt-2"},i.a.createElement("div",{className:"col-lg-2 offset-md-3 col-md-3 col-12"},i.a.createElement("div",{className:"positionTop animation"},r,m&&!c?i.a.createElement("div",{className:"font-12 text-danger font-weight-bold mb-1 mb-md-0"},s):null)),i.a.createElement("div",{className:"col-lg-4 col-md-5 col-12"},i.a.createElement(o,{className:m&&!c?"formInvalid":null,value:null===p?"":p,onChange:h,name:t,type:v,placeholder:w,checked:f,disabled:N}))))}},176:function(e,a,t){"use strict";t.r(a);var n=t(5),i=t(6),o=t(8),r=t(7),s=t(9),l=t(10),m=t(0),d=t.n(m),c=t(11),u=t(2),p=t(28),h=t(29),v=t(32),g=t(144),w=t(17),b=t(23),f=t(30),E=function(e){var a=e.inputs,t=e.handleResetPassword,n=e.handleOnClickSave,i=e.resetPasswordVisible,o=e.animationTiming;return d.a.createElement(f.a,{in:!1===i,timeout:o,mountOnEnter:!0,unmountOnExit:!0,classNames:"animationRight"},d.a.createElement("div",{className:"accountSetting"},d.a.createElement("div",{className:"container"},d.a.createElement(w.a,{name:"LOGOWANIE"}),a,d.a.createElement("div",{className:"row margin-top-40"},d.a.createElement("div",{className:"col-12"},d.a.createElement("div",{className:"text-center "},d.a.createElement(b.a,{buttonName:"Odzyskaj has\u0142o",buttonOnClick:t,buttonColor:"red",buttonInline:!0}),d.a.createElement(b.a,{buttonName:"Zaloguj",buttonOnClick:n,buttonColor:"gray",buttonInline:!0})))))))},N=function(e){var a=e.resetPasswordVisible,t=e.reset_password_visible,n=e.resetPassword,i=e.resetPasswordValidation,o=e.handleInputOnChangePassword,r=e.handleOnClickResetPassword,s=e.animationTiming;return d.a.createElement(f.a,{in:a,timeout:s,mountOnEnter:!0,unmountOnExit:!0,classNames:"animationRight"},d.a.createElement("div",{className:"accountSetting"},d.a.createElement("div",{className:"container"},d.a.createElement(w.a,{name:"ODZYSKIWANIE HAS\u0141A"}),d.a.createElement(g.a,{formName:"Tw\xf3j adres e-mail",itemFalseName:"Nie poprawny e-mail",formValidation:i,itemValidation:n.email.validated,itemOnChange:o,itemValue:n.email.value,itemName:"email",itemType:"email",itemPlaceholder:""}),d.a.createElement("div",{className:"text-center margin-top-40"},d.a.createElement(b.a,{buttonName:"Powr\xf3t",buttonColor:"red",buttonInline:!0,buttonOnClick:t}),d.a.createElement(b.a,{buttonName:"Wy\u015blij",buttonColor:"gray",buttonInline:!0,buttonOnClick:r})))))},O=function(e){function a(){var e,t;Object(i.a)(this,a);for(var o=arguments.length,l=new Array(o),m=0;m<o;m++)l[m]=arguments[m];return(t=Object(r.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(l)))).state={form:{email:{value:"",validated:null},password:{value:"",validated:null}},resetPassword:{email:{value:"",validated:null}},resetPasswordValidation:!1},t.handleInputOnChange=function(e){var a=Object(n.a)({},t.state.form),i=Object(n.a)({},a[e.target.name]);"checkbox"===e.target.type?(i.value=e.target.checked,i.validated=e.target.checked):(i.value=e.target.value,i.validated=t.checkValidity(i.value,i.validated,e.target.name)),a[e.target.name]=i,t.setState({form:a})},t.handleInputOnChangePassword=function(e){var a=Object(n.a)({},t.state.resetPassword),i=Object(n.a)({},a[e.target.name]);"checkbox"===e.target.type?(i.value=e.target.checked,i.validated=e.target.checked):(i.value=e.target.value,i.validated=t.checkValidity(i.value,i.validated,e.target.name)),a[e.target.name]=i,t.setState({resetPassword:a})},t.handleOnClickSave=function(e){e.preventDefault(),t.props.login_validation_change(!0),t.state.form.email.validated&&t.state.form.password.validated&&t.props.onAuth(t.state.form.email.value,t.state.form.password.value,!1)},t.handleOnClickResetPassword=function(e){e.preventDefault(),t.setState({resetPasswordValidation:!0}),t.state.resetPassword.email.validated&&t.props.onAuth_Reset_Password(t.state.resetPassword.email.value)},t}return Object(l.a)(a,e),Object(o.a)(a,[{key:"shouldComponentUpdate",value:function(e,a){return e!==this.props||a!==this.state}},{key:"checkValidity",value:function(e,a,t){var n=!1;if("password"===t&&(n=e.length>=6),"email"===t){n=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)}return n}},{key:"render",value:function(){var e=this,a=this.state.form,t=this.props.signed?d.a.createElement(p.a,{to:"/"}):null,n=this.props.errorLogin?d.a.createElement(h.a,{name:"Z\u0142y login lub has\u0142o.",modalOn:!0,onClickButton:function(){return e.props.is_error_login(!1)}}):d.a.createElement(h.a,{name:"Z\u0142y login lub has\u0142o.",modalOn:!1,onClickButton:function(){return e.props.is_error_login(!1)}}),i=this.props.newAccount?d.a.createElement(h.a,{name:"Nowe konto zosta\u0142o utworzone",modalError:!1,modalOn:!0,onClickButton:function(){return e.props.is_newAccount(!1)}}):d.a.createElement(h.a,{name:"Nowe konto zosta\u0142o utworzone",modalError:!1,modalOn:!1,onClickButton:function(){return e.props.is_newAccount(!1)}}),o=[{id:1,formName:"Adres e-mail:",itemFalseName:"Niepoprawny e-mail",formValidation:this.props.loginValidation,itemValidation:a.email.validated,itemOnChange:this.handleInputOnChange,itemValue:a.email.value,itemName:"email",itemType:"text",itemPlaceholder:"",itemChecked:!1},{id:2,formName:"Has\u0142o:",itemFalseName:"Niepoprawne has\u0142o",formValidation:this.props.loginValidation,itemValidation:a.password.validated,itemOnChange:this.handleInputOnChange,itemValue:a.password.value,itemName:"password",itemType:"password",itemPlaceholder:"",itemChecked:!1}].map(function(e){return d.a.createElement(g.a,{key:e.id,formName:e.formName,itemFalseName:e.itemFalseName,formValidation:e.formValidation,itemValidation:e.itemValidation,itemOnChange:e.itemOnChange,itemValue:e.itemValue,itemName:e.itemName,itemType:e.itemType,itemPlaceholder:e.itemPlaceholder,itemChecked:e.itemChecked})});return d.a.createElement(f.a,{in:this.props.loginVisible,timeout:this.props.animationTiming,mountOnEnter:!0,unmountOnExit:!0,classNames:"animationRight"},d.a.createElement("div",{className:"pagePosition"},!0===e.props.errorResetPassword?d.a.createElement(d.a.Fragment,null,d.a.createElement(h.a,{modalError:!1,name:"Wiadomos\u0107 zosta\u0142a wys\u0142ana na podany adres e-mail",modalOn:!0,onClickButton:function(){return e.props.error_reset_password(null)}}),d.a.createElement(h.a,{name:"Podany e-mail nie istnieje",modalOn:!1,onClickButton:function(){return e.props.error_reset_password(null)}})):!1===e.props.errorResetPassword?d.a.createElement(d.a.Fragment,null,d.a.createElement(h.a,{modalError:!1,name:"Wiadomos\u0107 zosta\u0142a wys\u0142ana na podany adres e-mail",modalOn:!1,onClickButton:function(){return e.props.error_reset_password(null)}}),d.a.createElement(h.a,{name:"Podany e-mail nie istnieje",modalOn:!0,onClickButton:function(){return e.props.error_reset_password(null)}})):d.a.createElement(d.a.Fragment,null,d.a.createElement(h.a,{modalError:!1,name:"Wiadomos\u0107 zosta\u0142a wys\u0142ana na podany adres e-mail",modalOn:!1,onClickButton:function(){return e.props.error_reset_password(null)}}),d.a.createElement(h.a,{name:"Podany e-mail nie istnieje",modalOn:!1,onClickButton:function(){return e.props.error_reset_password(null)}})),t,n,i,d.a.createElement("div",{className:"container positionRelative "},d.a.createElement(v.a,{onClick:this.props.login_visible}),d.a.createElement("div",{className:"positionAbsoluteWidth"},d.a.createElement(E,{inputs:o,handleResetPassword:this.props.reset_password_visible,handleOnClickSave:this.handleOnClickSave,resetPasswordVisible:this.props.resetPasswordVisible,animationTiming:this.props.animationTiming})),d.a.createElement("div",{className:"positionAbsoluteWidth"},d.a.createElement(N,{resetPasswordVisible:this.props.resetPasswordVisible,reset_password_visible:this.props.reset_password_visible,resetPasswordValidation:this.state.resetPasswordValidation,resetPassword:this.state.resetPassword,handleInputOnChangePassword:this.handleInputOnChangePassword,handleOnClickResetPassword:this.handleOnClickResetPassword,animationTiming:this.props.animationTiming})))))}}]),a}(m.Component);a.default=Object(c.b)(function(e){return{login:e.login,signed:e.signed,errorLogin:e.errorLogin,loginVisible:e.loginVisible,errorNetwork:e.errorNetwork,resetPasswordVisible:e.resetPasswordVisible,errorResetPassword:e.errorResetPassword,loginValidation:e.loginValidation,newAccount:e.newAccount,animationTiming:e.animationTiming}},function(e){return{onAuth:function(a,t,n){return e(u.G(a,t,n))},is_error_login:function(a){return e(u.Z(a))},login_visible:function(){return e(u.eb())},error_network:function(a){return e(u.U(a))},reset_password_visible:function(){return e(u.nb())},onAuth_Reset_Password:function(a){return e(u.gb(a))},error_reset_password:function(a){return e(u.V(a))},login_validation_change:function(a){return e(u.db(a))}}})(O)}}]);
//# sourceMappingURL=5.d5a024ae.chunk.js.map