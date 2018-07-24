(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{2573:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(284),n=a(96),l=function(e){return e&&e.__esModule?e:{default:e}}(a(2574));t.default=(0,r.connect)(function(e){var t=(0,n.getLicense)(e),a=(0,n.getConfig)(e);return{mfa:"true"===t.MFA,enableMultifactorAuthentication:"true"===a.EnableMultifactorAuthentication,enforceMultifactorAuthentication:"true"===a.EnforceMultifactorAuthentication}})(l.default)},2574:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=y(a(42)),n=y(a(282)),l=y(a(279)),u=y(a(283)),o=y(a(280)),s=y(a(281)),i=y(a(1)),c=y(a(3)),d=a(762),f=a(285),m=a(773),p=a(763),h=y(a(809)),g=y(a(805)),v=y(a(2575)),M=y(a(2577));function y(e){return e&&e.__esModule?e:{default:e}}var E=function(e){function t(){var e,a,r,u;(0,l.default)(this,t);for(var s=arguments.length,i=Array(s),c=0;c<s;c++)i[c]=arguments[c];return a=r=(0,o.default)(this,(e=t.__proto__||(0,n.default)(t)).call.apply(e,[this].concat(i))),r.handleOnClick=function(e){e.preventDefault(),(0,m.emitUserLoggedOutEvent)("/login")},u=a,(0,o.default)(r,u)}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){document.body.classList.add("sticky"),document.getElementById("root").classList.add("container-fluid"),this.props.mfa&&this.props.enableMultifactorAuthentication||this.props.history.push("/")}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("sticky"),document.getElementById("root").classList.remove("container-fluid")}},{key:"render",value:function(){var e=this,t=void 0;return t=this.props.enforceMultifactorAuthentication?c.default.createElement("div",{className:"signup-header"},c.default.createElement("button",{className:"style--none color--link",onClick:this.handleOnClick},c.default.createElement("span",{className:"fa fa-chevron-left",title:(0,p.localizeMessage)("generic_icons.logout","Logout Icon")}),c.default.createElement(d.FormattedMessage,{id:"web.header.logout",defaultMessage:"Logout"}))):c.default.createElement(g.default,null),c.default.createElement("div",{className:"inner-wrap"},c.default.createElement("div",{className:"row content"},c.default.createElement("div",null,t,c.default.createElement("div",{className:"col-sm-12"},c.default.createElement("div",{className:"signup-team__container"},c.default.createElement("h3",null,c.default.createElement(d.FormattedMessage,{id:"mfa.setupTitle",defaultMessage:"Multi-factor Authentication Setup"})),c.default.createElement("img",{className:"signup-team-logo",src:h.default}),c.default.createElement("div",{id:"mfa"},c.default.createElement(f.Switch,null,c.default.createElement(f.Route,{path:this.props.match.url+"/setup",render:function(t){return c.default.createElement(v.default,(0,r.default)({state:e.state,updateParent:e.updateParent},t))}}),c.default.createElement(f.Route,{path:this.props.match.url+"/confirm",render:function(t){return c.default.createElement(M.default,(0,r.default)({state:e.state,updateParent:e.updateParent},t))}}))))))))}}]),t}(c.default.Component);t.default=E,E.propTypes={location:i.default.object.isRequired,children:i.default.node,mfa:i.default.bool.isRequired,enableMultifactorAuthentication:i.default.bool.isRequired,enforceMultifactorAuthentication:i.default.bool.isRequired,match:i.default.shape({url:i.default.string.isRequired}).isRequired}},2575:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(284),n=a(96),l=function(e){return e&&e.__esModule?e:{default:e}}(a(2576));t.default=(0,r.connect)(function(e){var t=(0,n.getConfig)(e);return{siteName:t.SiteName,enforceMultifactorAuthentication:"true"===t.EnforceMultifactorAuthentication}})(l.default)},2576:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=p(a(282)),n=p(a(279)),l=p(a(283)),u=p(a(280)),o=p(a(281)),s=p(a(3)),i=a(762),c=p(a(1)),d=a(777),f=p(a(769)),m=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(763));function p(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){(0,n.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return a.submit=function(e){e.preventDefault();var t=a.refs.code.value.replace(/\s/g,"");t&&0!==t.length?(a.setState({error:null}),(0,d.activateMfa)(t,function(){a.props.history.push("/mfa/confirm")},function(e){"ent.mfa.activate.authenticate.app_error"!==e.id?a.setState({error:e.message}):a.setState({error:m.localizeMessage("mfa.setup.badCode","Invalid code. If this issue persists, contact your System Administrator.")})})):a.setState({error:m.localizeMessage("mfa.setup.codeError","Please enter the code from Google Authenticator.")})},a.state={secret:"",qrCode:""},a}return(0,o.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=f.default.getCurrentUser();t&&!t.mfa_active?(0,d.generateMfaSecret)(function(t){return e.setState({secret:t.secret,qrCode:t.qr_code})},function(t){return e.setState({serverError:t.message})}):this.props.history.push("/")}},{key:"render",value:function(){var e="form-group",t=void 0;this.state.error&&(t=s.default.createElement("div",{className:"form-group has-error"},s.default.createElement("label",{className:"control-label"},this.state.error)),e+=" has-error");var a=void 0;return this.props.enforceMultifactorAuthentication&&(a=s.default.createElement("p",null,s.default.createElement(i.FormattedHTMLMessage,{id:"mfa.setup.required",defaultMessage:"<strong>Multi-factor authentication is required on {siteName}.</strong>",values:{siteName:this.props.siteName}}))),s.default.createElement("div",null,s.default.createElement("form",{onSubmit:this.submit,className:e},a,s.default.createElement("p",null,s.default.createElement(i.FormattedHTMLMessage,{id:"mfa.setup.step1",defaultMessage:"<strong>Step 1: </strong>On your phone, download Google Authenticator from <a target='_blank' href='https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8'>iTunes</a> or <a target='_blank' href='https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en'>Google Play</a>"})),s.default.createElement("p",null,s.default.createElement(i.FormattedHTMLMessage,{id:"mfa.setup.step2",defaultMessage:"<strong>Step 2: </strong>Use Google Authenticator to scan this QR code, or manually type in the secret key"})),s.default.createElement("div",{className:"form-group"},s.default.createElement("div",{className:"col-sm-12"},s.default.createElement("img",{style:g.qrCode,src:"data:image/png;base64,"+this.state.qrCode}))),s.default.createElement("br",null),s.default.createElement("div",{className:"form-group"},s.default.createElement("p",{className:"col-sm-12"},s.default.createElement(i.FormattedMessage,{id:"mfa.setup.secret",defaultMessage:"Secret: {secret}",values:{secret:this.state.secret}}))),s.default.createElement("p",null,s.default.createElement(i.FormattedHTMLMessage,{id:"mfa.setup.step3",defaultMessage:"<strong>Step 3: </strong>Enter the code generated by Google Authenticator"})),s.default.createElement("p",null,s.default.createElement("input",{ref:"code",className:"form-control",placeholder:m.localizeMessage("mfa.setup.code","MFA Code"),autoFocus:!0})),t,s.default.createElement("button",{type:"submit",className:"btn btn-primary"},s.default.createElement(i.FormattedMessage,{id:"mfa.setup.save",defaultMessage:"Save"}))))}}]),t}(s.default.Component);t.default=h,h.propTypes={siteName:c.default.string,enforceMultifactorAuthentication:c.default.bool.isRequired};var g={qrCode:{maxHeight:170}}},2577:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=m(a(282)),n=m(a(279)),l=m(a(283)),u=m(a(280)),o=m(a(281)),s=m(a(3)),i=a(762),c=a(777),d=m(a(25)),f=m(a(763));function m(e){return e&&e.__esModule?e:{default:e}}var p=d.default.KeyCodes,h=function(e){function t(){var e,a,l,o;(0,n.default)(this,t);for(var s=arguments.length,i=Array(s),d=0;d<s;d++)i[d]=arguments[d];return a=l=(0,u.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(i))),l.submit=function(e){e.preventDefault(),(0,c.loadMe)().then(function(){l.props.history.push("/")})},l.onKeyPress=function(e){f.default.isKeyPressed(e,p.ENTER)&&l.submit(e)},o=a,(0,u.default)(l,o)}return(0,o.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){document.body.addEventListener("keydown",this.onKeyPress)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("keydown",this.onKeyPress)}},{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement("form",{onSubmit:this.submit,onKeyPress:this.onKeyPress,className:"form-group"},s.default.createElement("p",null,s.default.createElement(i.FormattedHTMLMessage,{id:"mfa.confirm.complete",defaultMessage:"<strong>Set up complete!</strong>"})),s.default.createElement("p",null,s.default.createElement(i.FormattedMessage,{id:"mfa.confirm.secure",defaultMessage:"Your account is now secure. Next time you sign in, you will be asked to enter a code from the Google Authenticator app on your phone."})),s.default.createElement("button",{type:"submit",className:"btn btn-primary"},s.default.createElement(i.FormattedMessage,{id:"mfa.confirm.okay",defaultMessage:"Okay"}))))}}]),t}(s.default.Component);t.default=h,h.defaultProps={},h.propTypes={}},805:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=m(a(282)),n=m(a(279)),l=m(a(283)),u=m(a(280)),o=m(a(281)),s=m(a(1)),i=m(a(3)),c=a(762),d=a(285),f=a(763);function m(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return(0,n.default)(this,t),(0,u.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return i.default.createElement("div",{className:"signup-header"},i.default.createElement(d.Link,{onClick:this.props.onClick,to:this.props.url},i.default.createElement("span",{className:"fa fa-chevron-left",title:(0,f.localizeMessage)("generic_icons.back","Back Icon")}),i.default.createElement(c.FormattedMessage,{id:"web.header.back",defaultMessage:"Back"})))}}]),t}(i.default.PureComponent);p.propTypes={url:s.default.string,onClick:s.default.func},p.defaultProps={url:"/"},t.default=p},809:function(e,t,a){e.exports=a.p+"files/5d6be4015bde2a4e0358c8bc110deadc.png"}}]);
//# sourceMappingURL=8.1113e452042ba6c3d234.js.map