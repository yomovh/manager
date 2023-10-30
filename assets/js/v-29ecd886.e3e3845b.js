"use strict";(self.webpackChunk_ovh_ux_manager_documentation=self.webpackChunk_ovh_ux_manager_documentation||[]).push([[717],{512:(e,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t=JSON.parse('{"key":"v-29ecd886","path":"/guide/scripts.html","title":"Scripts","lang":"en-US","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"Table of Content","slug":"table-of-content","link":"#table-of-content","children":[{"level":3,"title":"Generate a module (or an Application)","slug":"generate-a-module-or-an-application","link":"#generate-a-module-or-an-application","children":[]}]}],"git":{"updatedTime":1698666729000,"contributors":[{"name":"ovh-cds","email":"pdepaepe@users.noreply.github.com","commits":1}]},"filePathRelative":"guide/scripts.md"}')},6624:(e,n,a)=>{a.r(n),a.d(n,{default:()=>d});var t=a(8917);const s=(0,t._)("h1",{id:"scripts",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#scripts","aria-hidden":"true"},"#"),(0,t.Uk)(" Scripts")],-1),o=(0,t._)("a",{href:"package.json"},[(0,t._)("code",null,"package.json")],-1),l={href:"https://docs.npmjs.com/cli/run-script",target:"_blank",rel:"noopener noreferrer"},i=(0,t._)("h2",{id:"table-of-content",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#table-of-content","aria-hidden":"true"},"#"),(0,t.Uk)(" Table of Content")],-1),r={class:"table-of-contents"},c=(0,t.uE)('<h3 id="generate-a-module-or-an-application" tabindex="-1"><a class="header-anchor" href="#generate-a-module-or-an-application" aria-hidden="true">#</a> Generate a module (or an Application)</h3><p><img src="/manager/assets/img/generate-module-app.gif" alt="generate module"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># `foo` is the name of your module.</span>\n$ <span class="token function">yarn</span> run generate:module ./packages/manager/modules/foo\n\n<span class="token comment"># `foo` is the name of your application.</span>\n$ <span class="token function">yarn</span> run generate:app ./packages/manager/apps/foo\n\n<span class="token comment"># `foo` is the name of your micro-application.</span>\n$ <span class="token function">yarn</span> run generate:uapp\n\n<span class="token comment"># start the application</span>\n$ <span class="token function">yarn</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> packages/manager/apps/foo <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> run start:dev\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now you are able to visit <code>http://localhost:9000/#!/foo</code> (route based on the module name).</p>',4),p={},d=(0,a(6049).Z)(p,[["render",function(e,n){const a=(0,t.up)("ExternalLinkIcon"),p=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",null,[s,(0,t._)("p",null,[(0,t.Uk)("Our "),o,(0,t.Uk)(" houses a collection of "),(0,t._)("a",l,[(0,t.Uk)("run-scripts"),(0,t.Wm)(a)]),(0,t.Uk)(" that we use to maintain, test, build, and publish the OVHcloud Manager, notably:")]),i,(0,t.kq)("lint disable no-shortcut-reference-link no-undefined-references"),(0,t._)("nav",r,[(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(p,{to:"#table-of-content"},{default:(0,t.w5)((()=>[(0,t.Uk)("Table of Content")])),_:1}),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(p,{to:"#generate-a-module-or-an-application"},{default:(0,t.w5)((()=>[(0,t.Uk)("Generate a module (or an Application)")])),_:1})])])])])]),c])}]])}}]);