(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(4),s=c.n(a),i=c(5),o=c(6),r=c(7),l=c(11),b=c(10),u=c(8),d=c.n(u),j=c(0),h=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsx)("button",{className:d.a.button,type:"button",onClick:function(){return c(e)},children:e},e)}))})},O=c(2),f=c.n(O),x=function(e){var t=e.good,c=e.neutral,n=e.bad,a=e.total,s=e.positiveFeedback;return Object(j.jsxs)("ul",{className:f.a.list,children:[Object(j.jsx)("li",{className:f.a.item,children:Object(j.jsxs)("p",{children:["Good: ",t]})}),Object(j.jsx)("li",{className:f.a.item,children:Object(j.jsxs)("p",{children:["Neutral: ",c]})}),Object(j.jsx)("li",{className:f.a.item,children:Object(j.jsxs)("p",{children:["Bad: ",n]})}),Object(j.jsx)("li",{className:f.a.item,children:Object(j.jsxs)("p",{children:["Total: ",a]})}),Object(j.jsx)("li",{className:f.a.item,children:Object(j.jsxs)("p",{children:["Positive feedback: ",s," %"]})})]})},v=c(9),k=c.n(v),p=function(e){var t=e.title,c=e.children;return Object(j.jsxs)("section",{className:k.a.section,children:[Object(j.jsx)("h2",{children:t}),c]})},m=function(e){var t=e.message;return Object(j.jsx)("p",{children:t})},g=function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=Math.round(e.state.good/e.countTotalFeedback()*100);return t>0?t:0},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this.state,t=e.good,c=e.neutral,n=e.bad;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{title:"Please leave feedback",children:Object(j.jsx)(h,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback})}),Object(j.jsx)(p,{title:"Statistics",children:this.countTotalFeedback()?Object(j.jsx)(x,{good:t,neutral:c,bad:n,total:this.countTotalFeedback(),positiveFeedback:this.countPositiveFeedbackPercentage()}):Object(j.jsx)(m,{message:"No feedback given"})})]})}}]),c}(n.Component);c(17);s.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))},2:function(e,t,c){e.exports={title:"Statics_title__1SQEv",buttons:"Statics_buttons__3SBYU",list:"Statics_list__2DBeN"}},8:function(e,t,c){e.exports={button:"feedbackOptions_button__204NE"}},9:function(e,t,c){}},[[18,1,2]]]);
//# sourceMappingURL=main.b46d0d38.chunk.js.map