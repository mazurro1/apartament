(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,a,t){"use strict";var n=t(0),i=t.n(n),o=function(e){var a=e.type,t=e.checked,n=e.onChange,o=e.name,s=e.value,l=e.placeholder,r=e.className,d=e.disabled,m="checkbox"===a?i.a.createElement("input",{checked:t,onChange:n,name:o,type:a,className:"button2 ".concat(r),placeholder:l,disabled:d}):i.a.createElement("input",{value:s,onChange:n,name:o,type:a,className:"button ".concat(r),placeholder:l,disabled:d});return i.a.createElement(i.a.Fragment,null,m)};a.a=function(e){var a=e.itemName,t=void 0===a?"":a,n=e.formName,s=void 0===n?"":n,l=e.itemFalseName,r=e.formValidation,d=void 0===r||r,m=e.itemValidation,c=void 0!==m&&m,u=e.itemValue,h=void 0===u?"":u,v=e.itemOnChange,w=e.itemType,p=e.itemPlaceholder,g=void 0===p?"":p,f=e.itemChecked,b=void 0!==f&&f,E=e.disabled,P=void 0!==E&&E;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row mt-2"},i.a.createElement("div",{className:"col-lg-2 offset-md-3 col-md-3 col-12"},i.a.createElement("div",{className:"positionTop animation"},s,d&&!c?i.a.createElement("div",{className:"font-12 text-danger font-weight-bold mb-1 mb-md-0"},l):null)),i.a.createElement("div",{className:"col-lg-4 col-md-5 col-12"},i.a.createElement(o,{className:d&&!c?"formInvalid":null,value:null===h?"":h,onChange:v,name:t,type:w,placeholder:g,checked:b,disabled:P}))))}},175:function(e,a,t){"use strict";t.r(a);var n=t(5),i=t(6),o=t(8),s=t(7),l=t(9),r=t(10),d=t(0),m=t.n(d),c=t(17),u=t(11),h=t(2),v=t(28),w=t(29),p=t(23),g=t(144),f=t(30),b=function(e){var a=e.inputs,t=e.handleOnClickSave,n=e.changeEmailVisible,i=e.change_email_visible,o=e.animationTiming;return m.a.createElement(f.a,{in:n,timeout:o,mountOnEnter:!0,unmountOnExit:!0,classNames:"animationRight"},m.a.createElement("div",{className:"accountSettings"},m.a.createElement(c.a,{name:"ZMIE\u0143 E-MAIL"}),a,m.a.createElement("div",{className:"text-center margin-top-40"},m.a.createElement(p.a,{buttonName:"Powr\xf3t",buttonColor:"red",buttonInline:!0,buttonOnClick:i}),m.a.createElement(p.a,{buttonName:"Zatwierd\u017a",buttonColor:"gray",buttonInline:!0,buttonOnClick:t}))))},E=t(32),P=function(e){var a=e.inputs,t=e.handleOnClickSavePassword,n=e.changePasswordVisible,i=e.change_password_visible,o=e.animationTiming;return m.a.createElement(f.a,{in:n,timeout:o,mountOnEnter:!0,unmountOnExit:!0,classNames:"animationRight"},m.a.createElement("div",{className:"accountSettings"},m.a.createElement(c.a,{name:"ZMIE\u0143 HAS\u0141O"}),a,m.a.createElement("div",{className:"text-center margin-top-40"},m.a.createElement(p.a,{buttonName:"Powr\xf3t",buttonColor:"red",buttonInline:!0,buttonOnClick:i}),m.a.createElement(p.a,{buttonName:"Zatwierd\u017a",buttonColor:"gray",buttonInline:!0,buttonOnClick:t}))))},C=function(e){var a=e.deleteAccountConfirm,t=e.validationDeleteAccount,n=e.validated,i=e.handleInputOnChange,o=e.value,s=e.delete_account_confirm,l=e.handleOnClickSaveDeleteAccount,r=e.animationTiming;return m.a.createElement(f.a,{in:a,timeout:r,mountOnEnter:!0,unmountOnExit:!0,classNames:"animationRight"},m.a.createElement("div",{className:"accountSettings"},m.a.createElement(c.a,{name:"USU\u0143 KONTO"}),m.a.createElement("div",{className:"container"},m.a.createElement(g.a,{formName:"Podaj has\u0142o",itemFalseName:"B\u0142\u0119dne has\u0142o",formValidation:t,itemValidation:n,itemOnChange:i,itemValue:o,itemName:"password",itemType:"password",itemPlaceholder:"",itemChecked:null,disabled:!1})),m.a.createElement("div",{className:"text-center margin-top-40"},m.a.createElement(p.a,{buttonName:"Wr\xf3\u0107",buttonColor:"green",buttonInline:!0,buttonOnClick:s}),m.a.createElement(p.a,{buttonName:"Usu\u0144",buttonColor:"red",buttonInline:!0,buttonOnClick:l}))))},O=function(e){function a(){var e,t;Object(i.a)(this,a);for(var o=arguments.length,r=new Array(o),d=0;d<o;d++)r[d]=arguments[d];return(t=Object(s.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(r)))).state={formEmail:{email:{value:"",validated:!0},newEmail:{value:"",validated:null},password:{value:"",validated:null}},formPassword:{password:{value:"",validated:null},newPassword:{value:"",validated:null},newPasswordAgain:{value:"",validated:null}},formDeleteAccount:{password:{value:"",validated:null}},validationEmail:!1,validationPassword:!1,validationDeleteAccount:!1},t.handleInputOnChange=function(e){var a=Object(n.a)({},t.state.formDeleteAccount),i=Object(n.a)({},a[e.target.name]);"checkbox"===e.target.type?(i.value=e.target.checked,i.validated=e.target.checked):(i.value=e.target.value,i.validated=t.checkValidity(i.value,i.validated,e.target.name)),a[e.target.name]=i,t.setState({formDeleteAccount:a,validationDeleteAccount:!0})},t.handleInputOnChangeEmail=function(e){var a=Object(n.a)({},t.state.formEmail),i=Object(n.a)({},a[e.target.name]);"checkbox"===e.target.type?(i.value=e.target.checked,i.validated=e.target.checked):(i.value=e.target.value,i.validated=t.checkValidity(i.value,i.validated,e.target.name)),a[e.target.name]=i,t.setState({formEmail:a})},t.handleInputOnChangePassword=function(e){var a=Object(n.a)({},t.state.formPassword),i=Object(n.a)({},a[e.target.name]);"checkbox"===e.target.type?(i.value=e.target.checked,i.validated=e.target.checked):(i.value=e.target.value,i.validated=t.checkValidity(i.value,i.validated,e.target.name)),a[e.target.name]=i,t.setState({formPassword:a})},t.handleOnClickSaveDeleteAccount=function(e){e.preventDefault();var a=(t.state.validationDeleteAccount,!0);if(t.setState({validationDeleteAccount:a}),t.state.formDeleteAccount.password.validated&&a){t.props.authCheckPassword(t.props.userEmail,t.state.formDeleteAccount.password.value,t.props.userToken,null,null);var i=Object(n.a)({},t.state.formEmail);i.password.value="",i.password.validated=!1,t.setState({validationDeleteAccount:!1})}},t.handleOnClickSave=function(e){e.preventDefault();var a=(t.state.validationEmail,!0);if(t.setState({validationEmail:a}),t.state.formEmail.newEmail.validated&&a&&t.state.formEmail.password.validated){t.props.authCheckPassword(t.props.userEmail,t.state.formEmail.password.value,t.props.userToken,t.state.formEmail.newEmail.value,null);var i=Object(n.a)({},t.state.formEmail);i.newEmail.value="",i.newEmail.validated=!1,i.password.value="",i.password.validated=!1,t.setState({validationEmail:!1})}},t.handleOnClickSavePassword=function(e){e.preventDefault();var a=(t.state.validationPassword,!0);if(t.setState({validationPassword:a}),t.state.formPassword.password.validated&&a&&t.state.formPassword.newPassword.validated&&t.state.formPassword.newPasswordAgain.validated){t.props.authCheckPassword(t.props.userEmail,t.state.formPassword.password.value,t.props.userToken,null,t.state.formPassword.newPassword.value);var i=Object(n.a)({},t.state.formPassword);i.password.value="",i.password.validated=!1,i.newPassword.value="",i.newPassword.validated=!1,i.newPasswordAgain.value="",i.newPasswordAgain.validated=!1,t.setState({validationPassword:!1})}},t.handleEmailVisible=function(){t.props.change_email_visible();var e=Object(n.a)({},t.state.formEmail);e.newEmail.value="",e.newEmail.validated=!1,e.password.value="",e.password.validated=!1,t.setState({validationEmail:!1})},t.handlePasswordVisible=function(){t.props.change_password_visible();var e=Object(n.a)({},t.state.formPassword);e.password.value="",e.password.validated=!1,e.newPassword.value="",e.newPassword.validated=!1,e.newPasswordAgain.value="",e.newPasswordAgain.validated=!1,t.setState({validationPassword:!1})},t.handleDeleteAccountVisible=function(){t.props.delete_account_confirm();var e=Object(n.a)({},t.state.formDeleteAccount);e.password.value="",e.password.validated=!1,t.setState({validationDeleteAccount:!1})},t}return Object(r.a)(a,e),Object(o.a)(a,[{key:"checkValidity",value:function(e,a,t){var n=!1;if("password"!==t&&"newPassword"!==t||(n=e.length>=6),"newPasswordAgain"===t&&(n=this.state.formPassword.newPassword.value===e&&e.length>=6),"newEmail"===t){n=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&this.props.userEmail!==e}return n}},{key:"render",value:function(){var e=this,a=this.state,t=a.formEmail,n=a.formPassword,i=this.props.signed?m.a.createElement(v.a,{to:"/"}):null,o=this.props.changeEmail?m.a.createElement(w.a,{modalError:!1,name:"Adres e-mail zosta\u0142 zmieniony",modalOn:!0,onClickButton:function(){return e.props.change_email_bool(!1)}}):m.a.createElement(w.a,{modalError:!1,name:"Adres e-mail zosta\u0142 zmieniony",modalOn:!1,onClickButton:function(){return e.props.change_email_bool(!1)}}),s=this.props.changePassword?m.a.createElement(w.a,{modalError:!1,name:"Haslo zosta\u0142o zmienione",modalOn:!0,onClickButton:function(){return e.props.change_password_bool(!1)}}):m.a.createElement(w.a,{modalError:!1,name:"Haslo zosta\u0142o zmienione",modalOn:!1,onClickButton:function(){return e.props.change_password_bool(!1)}}),l=this.props.changeEmailBusy?m.a.createElement(w.a,{modalError:!0,name:"Podany adres e-mail jest juz zaj\u0119ty",modalOn:!0,onClickButton:function(){return e.props.change_email_busy(!1)}}):m.a.createElement(w.a,{modalError:!0,name:"Podany adres e-mail jest juz zaj\u0119ty",modalOn:!1,onClickButton:function(){return e.props.change_email_busy(!1)}}),r=this.props.badPassword?m.a.createElement(w.a,{modalError:!0,name:"B\u0142\u0119dne has\u0142o",modalOn:!0,onClickButton:function(){return e.props.bad_password(!1)}}):m.a.createElement(w.a,{modalError:!0,name:"B\u0142\u0119dne has\u0142o",modalOn:!1,onClickButton:function(){return e.props.bad_password(!1)}}),d=[{id:1,formName:"Aktualny adres e-mail:",itemFalseName:"Niepoprawny adres e-mail",formValidation:this.state.validationEmail,itemValidation:t.email.validated,itemOnChange:this.handleInputOnChangeEmail,itemValue:this.props.userEmail,itemName:"email",itemType:"email",itemPlaceholder:"",itemChecked:!1,disabled:!0},{id:2,formName:"Nowy adres e-mail:",itemFalseName:"Niepoprawny adres e-maila",formValidation:this.state.validationEmail,itemValidation:t.newEmail.validated,itemOnChange:this.handleInputOnChangeEmail,itemValue:t.newEmail.value,itemName:"newEmail",itemType:"email",itemPlaceholder:"",itemChecked:!1,disabled:!1},{id:3,formName:"Has\u0142o:",itemFalseName:"Niepoprawne has\u0142o",formValidation:this.state.validationEmail,itemValidation:t.password.validated,itemOnChange:this.handleInputOnChangeEmail,itemValue:t.password.value,itemName:"password",itemType:"password",itemPlaceholder:"",itemChecked:!1,disabled:!1}],u=[{id:1,formName:"Aktualne has\u0142o:",itemFalseName:"Niepoprawne has\u0142o",formValidation:this.state.validationPassword,itemValidation:n.password.validated,itemOnChange:this.handleInputOnChangePassword,itemValue:n.password.value,itemName:"password",itemType:"password",itemPlaceholder:"",itemChecked:!1,disabled:!1},{id:2,formName:"Nowe has\u0142o:",itemFalseName:"Niepoprawne has\u0142o",formValidation:this.state.validationPassword,itemValidation:n.newPassword.validated,itemOnChange:this.handleInputOnChangePassword,itemValue:n.newPassword.value,itemName:"newPassword",itemType:"password",itemPlaceholder:"",itemChecked:!1,disabled:!1},{id:3,formName:"Powt\xf3rz nowe has\u0142o:",itemFalseName:"Niepoprawne has\u0142o",formValidation:this.state.validationPassword,itemValidation:n.newPasswordAgain.validated,itemOnChange:this.handleInputOnChangePassword,itemValue:n.newPasswordAgain.value,itemName:"newPasswordAgain",itemType:"password",itemPlaceholder:"",itemChecked:!1,disabled:!1}],h=d.map(function(e){return m.a.createElement(g.a,{key:e.id,formName:e.formName,itemFalseName:e.itemFalseName,formValidation:e.formValidation,itemValidation:e.itemValidation,itemOnChange:e.itemOnChange,itemValue:e.itemValue,itemName:e.itemName,itemType:e.itemType,itemPlaceholder:e.itemPlaceholder,itemChecked:e.itemChecked,disabled:e.disabled})}),O=u.map(function(e){return m.a.createElement(g.a,{key:e.id,formName:e.formName,itemFalseName:e.itemFalseName,formValidation:e.formValidation,itemValidation:e.itemValidation,itemOnChange:e.itemOnChange,itemValue:e.itemValue,itemName:e.itemName,itemType:e.itemType,itemPlaceholder:e.itemPlaceholder,itemChecked:e.itemChecked,disabled:e.disabled})}),N={enter:500,exit:400};return m.a.createElement(f.a,{in:this.props.settingsAccountVisible,timeout:N,mountOnEnter:!0,unmountOnExit:!0,classNames:"animationRight"},m.a.createElement("div",{className:"pagePosition"},i,o,s,l,r,m.a.createElement("div",{className:"container positionRelative"},m.a.createElement(E.a,{onClick:this.props.settings_account_visible}),m.a.createElement(f.a,{in:!1===this.props.changeEmailVisible&&!1===this.props.changePasswordVisible&&!1===this.props.deleteAccountConfirm,timeout:N,mountOnEnter:!0,unmountOnExit:!0,classNames:"animationLeft"},m.a.createElement("div",{className:"accountSettings"},m.a.createElement(c.a,{name:"USTAWIENIA KONTA"}),m.a.createElement("div",{className:"text-center"},m.a.createElement(p.a,{buttonName:"Zmie\u0144 adres e-mail",buttonColor:"gray",buttonInline:!0,buttonOnClick:this.props.change_email_visible})),m.a.createElement("div",{className:"text-center"},m.a.createElement(p.a,{buttonName:"Zmie\u0144 has\u0142o",buttonColor:"gray",buttonInline:!0,buttonOnClick:function(){return e.props.change_password_visible(!0)}})),m.a.createElement("div",{className:"text-center"},m.a.createElement(p.a,{buttonName:"Usu\u0144 konto",buttonColor:"red",buttonInline:!0,buttonOnClick:this.props.delete_account_confirm}))))),m.a.createElement(b,{inputs:h,handleOnClickSave:this.handleOnClickSave,changeEmailVisible:this.props.changeEmailVisible,change_email_visible:this.handleEmailVisible,animationTiming:this.props.animationTiming}),m.a.createElement(P,{inputs:O,handleOnClickSavePassword:this.handleOnClickSavePassword,changePasswordVisible:this.props.changePasswordVisible,change_password_visible:this.handlePasswordVisible,animationTiming:this.props.animationTiming}),m.a.createElement(C,{deleteAccountConfirm:this.props.deleteAccountConfirm,validationDeleteAccount:this.state.validationDeleteAccount,validated:this.state.formDeleteAccount.password.validated,handleInputOnChange:this.handleInputOnChange,value:this.state.formDeleteAccount.password.value,delete_account_confirm:this.handleDeleteAccountVisible,handleOnClickSaveDeleteAccount:this.handleOnClickSaveDeleteAccount,animationTiming:this.props.animationTiming})))}}],[{key:"getDerivedStateFromProps",value:function(e,a){var t=Object(n.a)({},a);return t.formPassword.newPassword.value.length>=6&&e.changePasswordVisible&&(t.formPassword.newPassword.value!==t.formPassword.newPasswordAgain.value?t.formPassword.newPasswordAgain.validated=!1:t.formPassword.newPasswordAgain.validated=!0),t.formPassword.newPassword.value.length>=6&&t.formPassword.password.value.length>=6&&e.changePasswordVisible&&(t.formPassword.password.value===t.formPassword.newPassword.value?(t.formPassword.newPassword.validated=!1,t.formPassword.newPasswordAgain.validated=!1,t.formPassword.password.validated=!1):(t.formPassword.newPassword.validated=!0,t.formPassword.password.validated=!0)),t}}]),a}(d.Component);a.default=Object(u.b)(function(e){return{signed:e.signed,errorLogin:e.errorLogin,settingsAccountVisible:e.settingsAccountVisible,userEmail:e.userEmail,userToken:e.userToken,userId:e.userId,changeEmailVisible:e.changeEmailVisible,deleteAccountConfirm:e.deleteAccountConfirm,changeEmail:e.changeEmail,changeEmailBusy:e.changeEmailBusy,changePasswordVisible:e.changePasswordVisible,changePassword:e.changePassword,badPassword:e.badPassword,animationTiming:e.animationTiming}},function(e){return{onAuth:function(a,t,n){return e(h.G(a,t,n))},is_error_login:function(a){return e(h.Z(a))},settings_account_visible:function(){return e(h.ob())},delete_account:function(a){return e(h.R(a))},onAuth_Reset_Password:function(a){return e(h.gb(a))},change_email:function(a,t,n){return e(h.L(a,t,n))},change_email_visible:function(){return e(h.O())},delete_account_confirm:function(){return e(h.T())},change_email_bool:function(a){return e(h.M(a))},error_reset_password:function(a){return e(h.V(a))},change_email_busy:function(a){return e(h.N(a))},authCheckPassword:function(a,t,n,i,o){return e(h.I(a,t,n,i,o))},change_password_visible:function(){return e(h.Q())},change_password_bool:function(a){return e(h.P(a))},bad_password:function(a){return e(h.J(a))}}})(O)}}]);
//# sourceMappingURL=4.d4b43923.chunk.js.map