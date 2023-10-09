"use strict";(self.webpackChunk_ovh_ux_manager_documentation=self.webpackChunk_ovh_ux_manager_documentation||[]).push([[673],{3588:(e,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t=JSON.parse('{"key":"v-56d9effa","path":"/guide/architecture.html","title":"Architecture","lang":"en-US","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"General information","slug":"general-information","link":"#general-information","children":[]},{"level":2,"title":"Languages and Framework","slug":"languages-and-framework","link":"#languages-and-framework","children":[]},{"level":2,"title":"Build","slug":"build","link":"#build","children":[]},{"level":2,"title":"Micro-FrontEnd","slug":"micro-frontend","link":"#micro-frontend","children":[{"level":3,"title":"Philosophy","slug":"philosophy","link":"#philosophy","children":[]},{"level":3,"title":"Communication","slug":"communication","link":"#communication","children":[]},{"level":3,"title":"Routing","slug":"routing","link":"#routing","children":[]}]}],"git":{"updatedTime":1696843688000,"contributors":[{"name":"ovh-cds","email":"139278215+BrunoMarquesOVH@users.noreply.github.com","commits":1}]},"filePathRelative":"guide/architecture.md"}')},1879:(e,n,a)=>{a.r(n),a.d(n,{default:()=>J});var t=a(8917);const o=(0,t._)("h1",{id:"architecture",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#architecture","aria-hidden":"true"},"#"),(0,t.Uk)(" Architecture")],-1),r=(0,t._)("h2",{id:"general-information",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#general-information","aria-hidden":"true"},"#"),(0,t.Uk)(" General information")],-1),s=(0,t._)("p",null,"The monorepo is powered by:",-1),i={href:"https://yarnpkg.com",target:"_blank",rel:"noopener noreferrer"},l={href:"https://lerna.js.org/",target:"_blank",rel:"noopener noreferrer"},c={href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://yarnpkg.com/lang/en/docs/workspaces/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/ovh/manager/blob/master/package.json#L7-L12",target:"_blank",rel:"noopener noreferrer"},d=(0,t._)("code",null,"package.json",-1),h=(0,t.uE)('<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;workspaces&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;packages/components/*&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;packages/manager/apps/*&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;packages/manager/modules/*&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;packages/manager/tools/*&quot;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  …<span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A <code>jest.config.js</code> is present in the root of the application, it allows for all projects under <code>components</code> and <code>manager</code> to share the same configuration.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;roots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&lt;rootDir&gt;/packages/components&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;rootDir&gt;/packages/manager&quot;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you have a project that requires a custom configuration, add a <code>jest.config.js</code> in your project that extends the root configuration and mention it in the root configuration under the options <code>projects</code> so that the test command continues to work.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;projects&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&lt;rootDir&gt;/packages/manager/apps/container/jest.config.js&quot;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="languages-and-framework" tabindex="-1"><a class="header-anchor" href="#languages-and-framework" aria-hidden="true">#</a> Languages and Framework</h2><p>The <strong>Manager</strong> application is using these following languages:</p>',7),m=(0,t._)("li",null,"HTML",-1),g={href:"http://lesscss.org/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"},f=(0,t._)("li",null,"JavaScript/TypeScript",-1),b={href:"https://angularjs.org/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://en.wikipedia.org/wiki/Single-page_application",target:"_blank",rel:"noopener noreferrer"},_={href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},w=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("p",{class:"custom-container-title"},"Information"),(0,t._)("p",null,"We are exploring some new solutions to speed up the development workflow.")],-1),U=(0,t._)("h2",{id:"build",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#build","aria-hidden":"true"},"#"),(0,t.Uk)(" Build")],-1),y={href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://rollupjs.org",target:"_blank",rel:"noopener noreferrer"},q={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},x=(0,t._)("h2",{id:"micro-frontend",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#micro-frontend","aria-hidden":"true"},"#"),(0,t.Uk)(" Micro-FrontEnd")],-1),W=(0,t._)("code",null,"Container",-1),S={href:"https://github.com/ovh/manager/blob/master/packages/components/ovh-shell/README.md",target:"_blank",rel:"noopener noreferrer"},T=(0,t._)("h3",{id:"philosophy",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#philosophy","aria-hidden":"true"},"#"),(0,t.Uk)(" Philosophy")],-1),C=(0,t._)("p",null,"The philosophy behind this, is not to be tied to a single framework and big monolithic applications. It allows more resiliency and for smaller apps, that are easier to maintain and to migrate. It also boosts the time to market, since all the common elements are already handled by the container.",-1),L=(0,t._)("h3",{id:"communication",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#communication","aria-hidden":"true"},"#"),(0,t.Uk)(" Communication")],-1),A=(0,t._)("code",null,"iframe",-1),E={href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage",target:"_blank",rel:"noopener noreferrer"},M=(0,t._)("code",null,"window.postMessage",-1),I=(0,t._)("code",null,"@ovh-ux/shell",-1),R=(0,t.uE)('<p>Each app has to instantiate a <code>ShellClient</code> through the <code>initShellClient</code> method. This will allow the application to have access to the shell plugins and can use them for <code>environnement</code>, <code>navigation</code> etc. ( Check the shell library for more information on the subject ).</p><p>Once the shell is instantiated, it will enable communication between the <code>container</code> and the app through a message bus.</p><p><img src="/manager/assets/img/container-shell-comm.png" alt="Container and shell communication and interaction diagramm"></p><h3 id="routing" tabindex="-1"><a class="header-anchor" href="#routing" aria-hidden="true">#</a> Routing</h3><p>The container + shell also keeps the iframe URL and the navigator URL in sync. This way, you can freely route any application inside the iframe, without worrying about what it will do to the container. You don&#39;t have to import anything, this is an out of the box feature.</p>',5),F={},J=(0,a(6049).Z)(F,[["render",function(e,n){const a=(0,t.up)("ExternalLinkIcon"),F=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)("div",null,[o,r,s,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",i,[(0,t.Uk)("Yarn"),(0,t.Wm)(a)]),(0,t.Uk)(" — Fast, reliable, and secure dependency management.")]),(0,t._)("li",null,[(0,t._)("a",l,[(0,t.Uk)("Lerna"),(0,t.Wm)(a)]),(0,t.Uk)(" — A tool for managing JavaScript projects with multiple packages.")]),(0,t._)("li",null,[(0,t._)("a",c,[(0,t.Uk)("Jest"),(0,t.Wm)(a)]),(0,t.Uk)(" - A JavaScript Testing framework with a focus on simplicity.")])]),(0,t._)("p",null,[(0,t.Uk)("Several "),(0,t._)("a",p,[(0,t.Uk)("workspaces"),(0,t.Wm)(a)]),(0,t.Uk)(" are configured and you can find the list in the root "),(0,t._)("a",u,[d,(0,t.Wm)(a)]),(0,t.Uk)(" file.")]),h,(0,t._)("ul",null,[m,(0,t._)("li",null,[(0,t.Uk)("CSS ("),(0,t._)("a",g,[(0,t.Uk)("Less.js"),(0,t.Wm)(a)]),(0,t.Uk)(", "),(0,t._)("a",k,[(0,t.Uk)("SCSS"),(0,t.Wm)(a)]),(0,t.Uk)(")")]),f]),(0,t._)("p",null,[(0,t._)("a",b,[(0,t.Uk)("AngularJS"),(0,t.Wm)(a)]),(0,t.Uk)(" used to be a widelys used MVW Framework to build "),(0,t._)("a",v,[(0,t.Uk)("Single Page Applications"),(0,t.Wm)(a)]),(0,t.Uk)(". "),(0,t._)("a",_,[(0,t.Uk)("ReactJS"),(0,t.Wm)(a)]),(0,t.Uk)(" is used to build the container.")]),w,U,(0,t._)("p",null,[(0,t._)("a",y,[(0,t.Uk)("webpack"),(0,t.Wm)(a)]),(0,t.Uk)(", "),(0,t._)("a",j,[(0,t.Uk)("rollup.js"),(0,t.Wm)(a)]),(0,t.Uk)(" and "),(0,t._)("a",q,[(0,t.Uk)("Vite"),(0,t.Wm)(a)]),(0,t.Uk)(" are respectively used to build our applications, modules and components.")]),(0,t._)("p",null,[(0,t.Uk)("You can see more about our tooling "),(0,t.Wm)(F,{to:"/guide/tools.html"},{default:(0,t.w5)((()=>[(0,t.Uk)("here")])),_:1}),(0,t.Uk)(".")]),x,(0,t._)("p",null,[(0,t.Uk)("In order to enable the µFrontEnd architecture, we use what we call a "),W,(0,t.Uk)(". The container contains a standalone application and elements that are common to all applications. The communication between the standalone application and the common elements is made possible thanks to the library "),(0,t._)("a",S,[(0,t.Uk)("@ovh-ux/shell"),(0,t.Wm)(a)]),(0,t.Uk)(".")]),T,C,L,(0,t._)("p",null,[(0,t.Uk)("The standalone application is loaded inside an "),A,(0,t.Uk)(". The iframe communicates with the container through "),(0,t._)("a",E,[M,(0,t.Wm)(a)]),(0,t.Uk)(" API. You don't have to worry about this part, since the library "),I,(0,t.Uk)(" handles all this part for you, by exposing a set of plugins that you can use to communicate between a standalone application and the container.")]),R])}]])}}]);