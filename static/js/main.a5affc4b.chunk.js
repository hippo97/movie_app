(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{37:function(e,t,s){},60:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(29),r=s.n(i),c=s(9),o=s(2),l=(s(37),s(1));var m=function(){return Object(l.jsxs)("div",{className:"about__container",children:[Object(l.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(l.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},j=s(17),u=s.n(j),d=s(30),b=s(11),h=s(12),v=s(14),p=s(13),O=s(31),x=s.n(O),_=s(5),f=s.n(_);s(60);function g(e){var t=e.id,s=e.year,a=e.title,n=e.summary,i=e.poster,r=e.genres;return Object(l.jsx)("div",{className:"movie",children:Object(l.jsxs)(c.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:a,summary:n,poster:i,genres:r}},children:[Object(l.jsx)("img",{src:i,alt:a,title:a}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie__title",children:a}),Object(l.jsx)("h5",{className:"movie__year",children:s}),Object(l.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie__summary",children:[n.slice(0,180),"..."]})]})]})})}g.prototype={id:f.a.number.isRequired,year:f.a.number.isRequired,title:f.a.string.isRequired,summary:f.a.string.isRequired,poster:f.a.string.isRequired,genres:f.a.arrayOf(f.a.string).isRequired};var y=g,N=(s(64),function(e){Object(v.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(b.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var s,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:s.map((function(e){return Object(l.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component)),w=(s(65),function(e){Object(v.a)(s,e);var t=Object(p.a)(s);function s(){return Object(b.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("img",{src:e.state.poster,alt:e.state.title,title:e.state.title}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie__title",children:e.state.title}),Object(l.jsx)("h5",{className:"movie__year",children:e.state.year}),Object(l.jsx)("ul",{className:"movie__genres",children:e.state.genres.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsx)("p",{className:"movie__summary",children:e.state.summary})]})]}):null}}]),s}(n.a.Component));s(66);var k=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(c.b,{to:"/",children:"Home"}),Object(l.jsx)(c.b,{to:"/about",children:"About"})]})};s(67);var q=function(){return Object(l.jsxs)(c.a,{children:[Object(l.jsx)(k,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:N}),Object(l.jsx)(o.a,{path:"/about",component:m}),Object(l.jsx)(o.a,{path:"/movie/:id",component:w})]})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(q,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.a5affc4b.chunk.js.map