!function(){"use strict";var n={6202:function(n,r,t){var e=t(4747);onmessage=function(n){var r=n.data,t=r.fen,o=r.lvl,u=(0,e.aiMove)((0,e.status)(t),o);postMessage(u)}}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var u=r[e]={exports:{}};return n[e].call(u.exports,u,u.exports,t),u.exports}t.m=n,t.x=function(){var n=t.O(void 0,[747],(function(){return t(6202)}));return n=t.O(n)},function(){var n=[];t.O=function(r,e,o,u){if(!e){var i=1/0;for(a=0;a<n.length;a++){e=n[a][0],o=n[a][1],u=n[a][2];for(var c=!0,f=0;f<e.length;f++)(!1&u||i>=u)&&Object.keys(t.O).every((function(n){return t.O[n](e[f])}))?e.splice(f--,1):(c=!1,u<i&&(i=u));if(c){n.splice(a--,1);var s=o();void 0!==s&&(r=s)}}return r}u=u||0;for(var a=n.length;a>0&&n[a-1][2]>u;a--)n[a]=n[a-1];n[a]=[e,o,u]}}(),t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,{a:r}),r},t.d=function(n,r){for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(r,e){return t.f[e](n,r),r}),[]))},t.u=function(n){return"static/js/"+n+".d94ec0e5.chunk.js"},t.miniCssF=function(n){},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="/",function(){var n={202:1};t.f.i=function(r,e){n[r]||importScripts(t.p+t.u(r))};var r=self.webpackChunkchess_client=self.webpackChunkchess_client||[],e=r.push.bind(r);r.push=function(r){var o=r[0],u=r[1],i=r[2];for(var c in u)t.o(u,c)&&(t.m[c]=u[c]);for(i&&i(t);o.length;)n[o.pop()]=1;e(r)}}(),function(){var n=t.x;t.x=function(){return t.e(747).then(n)}}();t.x()}();
//# sourceMappingURL=202.c7c1bec2.chunk.js.map