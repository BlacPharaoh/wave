(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{286:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(286)),i={id:"migrating-0",title:"Migrating from pre-alpha"},l={unversionedId:"migrating-0",id:"migrating-0",isDocsHomePage:!1,title:"Migrating from pre-alpha",description:"Before you begin, it is highly recommended that you download a release and run the interactive tour.py that ships with the release to get a feel for what Q programs look like in practice.",source:"@site/docs/migrating-0.md",slug:"/migrating-0",permalink:"/qd/docs/migrating-0",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/migrating-0.md",version:"current",sidebar:"someSidebar",previous:{title:"Change Log",permalink:"/qd/docs/change-log"},next:{title:"Contributing",permalink:"/qd/docs/contributing"}},c=[{value:"What has changed?",id:"what-has-changed",children:[]},{value:"Breaking changes",id:"breaking-changes",children:[]}],b={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Before you begin, it is highly recommended that you ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/h2oai/qd/releases"}),"download")," a release and run the interactive ",Object(o.b)("inlineCode",{parentName:"p"},"tour.py")," that ships with the release to get a feel for what Q programs look like in practice."),Object(o.b)("h2",{id:"what-has-changed"},"What has changed?"),Object(o.b)("p",null,"From an app-development perspective, the most important change is that Q is more of a library rather than a framework."),Object(o.b)("p",null,"With the previous framework, the only way to execute an app was via the Q server. This limitation has been removed. The script/app you author is just a regular Python program in which you ",Object(o.b)("inlineCode",{parentName:"p"},"import h2o_q")," and execute via:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The command line: ",Object(o.b)("inlineCode",{parentName:"li"},"python3 my_script.py"),"."),Object(o.b)("li",{parentName:"ul"},"In the Python REPL."),Object(o.b)("li",{parentName:"ul"},"In a Jupyter notebook."),Object(o.b)("li",{parentName:"ul"},"In your favorite IDE (PyCharm, VSCode, etc.).")),Object(o.b)("p",null,"This also means that you can apply breakpoints and debug or step-through your program in your debugger of choice."),Object(o.b)("p",null,"From an information architecture perspective, control has been inverted: instead of your app being an extension to Q's data/prep/search features, Q's features are now optional additions to your app, and your app takes center stage. Implementation-wise, instead of your app running in a sidebar inside of Q's UI, your app now occupies the entire UI."),Object(o.b)("h2",{id:"breaking-changes"},"Breaking changes"),Object(o.b)("h4",{id:"removed-qapp-qui-annotations"},"Removed: ",Object(o.b)("inlineCode",{parentName:"h4"},"@Q.app"),", ",Object(o.b)("inlineCode",{parentName:"h4"},"@Q.ui")," annotations."),Object(o.b)("p",null,"Instead, define a ",Object(o.b)("inlineCode",{parentName:"p"},"async")," request-handling function, say ",Object(o.b)("inlineCode",{parentName:"p"},"main()"),", and pass that function to ",Object(o.b)("inlineCode",{parentName:"p"},"listen()"),", like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"from h2o_q import Q, listen\n\nasync def main(q: Q):\n  pass\n\nlisten('/my/app/route', main)\n")),Object(o.b)("h4",{id:"removed-qwait-qshow-qfail-qexit"},"Removed: ",Object(o.b)("inlineCode",{parentName:"h4"},"q.wait()"),", ",Object(o.b)("inlineCode",{parentName:"h4"},"q.show()"),", ",Object(o.b)("inlineCode",{parentName:"h4"},"q.fail()"),", ",Object(o.b)("inlineCode",{parentName:"h4"},"q.exit()"),"."),Object(o.b)("p",null,"The above four methods were the primary mechanism to make changes to your app's UI. They have all been replaced with a single ",Object(o.b)("inlineCode",{parentName:"p"},"h2o_q.core.Page.save()")," method."),Object(o.b)("p",null,"The new technique is:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Access the page or card you want to modify."),Object(o.b)("li",{parentName:"ol"},"Modify the page or card."),Object(o.b)("li",{parentName:"ol"},"Call ",Object(o.b)("inlineCode",{parentName:"li"},"h2o_q.core.Page.save()")," to save your changes and update the browser page.")),Object(o.b)("p",null,"Before:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"q.wait(\n  callback_function,\n  ui.text('Step 1'),\n  ui.button(name='next', label='Next'),\n)\n")),Object(o.b)("p",null,"After:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"q.page['my_card'] = ui.form_card(\n  # A card with its top-left corner at column 1, row 5; 2 columns wide and 4 rows high.\n  box='1 5 2 4',\n  items=[\n    ui.text('Step 1'),\n    ui.button(name='next', label='Next'),\n  ],\n)\nawait q.page.save()\n")),Object(o.b)("p",null,"Note that the ",Object(o.b)("em",{parentName:"p"},"After")," example requires a ",Object(o.b)("inlineCode",{parentName:"p"},"box")," that specifies where to draw your form. This is because you are not limited to using a sidebar, and can use the entire width/length of the page."),Object(o.b)("p",null,"The same technique can be used to update the UI again (or display intermediate results):"),Object(o.b)("p",null,"Before:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"q.wait(\n  callback_function,\n  ui.text('Step 2'),\n  ui.button(name='next', label='Next'),\n)\n")),Object(o.b)("p",null,"After:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# Don't have to recreate the entire form again; simply replace its items and save the page.\nq.page['my_card'].items = [\n  ui.text('Step 2'),\n  ui.button(name='next', label='Next'),\n]\nawait q.page.save()\n")),Object(o.b)("h4",{id:"removed-callback-functions-for-request-handling"},"Removed: callback functions for request-handling."),Object(o.b)("p",null,"Q apps are 100% push-based, using duplex communication instead of a request/reply paradigm. There is no need to have a tangled mess of callbacks to handle UI events."),Object(o.b)("p",null,"Instead, all requests are routed to a single function, and you can decide how to organize your application logic by branching on ",Object(o.b)("inlineCode",{parentName:"p"},"q.args.*"),"."),Object(o.b)("p",null,"Before:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"def step1(q: Q):\n  q.wait(\n    step2,\n    ui.text('Step 1'),\n    ui.button(name='next', label='Next'),\n  )\n\ndef step2(q: Q):\n  q.wait(\n    step3,\n    ui.text('Step 2'),\n    ui.button(name='next', label='Next'),\n  )\n\ndef step3(q: Q):\n  q.wait(\n    step4,\n    ui.text('Step 3'),\n    ui.button(name='next', label='Next'),\n  )\n")),Object(o.b)("p",null,"After:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"async def main(q: Q):\n  if q.args.step2:\n    items = [\n      ui.text('Step 2'),\n      ui.button(name='step3', label='Next'),\n    ]\n  elif q.args.step3:\n    items = [\n      ui.text('Step 3'),\n      ui.button(name='step4', label='Next'),\n    ]\n  else:\n    items = [\n      ui.text('Step 1'),\n      ui.button(name='step2', label='Next'),\n    ]\n\n  q.page['my_card'].items = items\n  await q.page.save()\n\nlisten('/my/app/route', main)\n")),Object(o.b)("h4",{id:"removed-qdashboard-and-qnotebook"},"Removed: ",Object(o.b)("inlineCode",{parentName:"h4"},"q.dashboard()")," and ",Object(o.b)("inlineCode",{parentName:"h4"},"q.notebook()"),"."),Object(o.b)("p",null,"Every page in Q is a dashboard page. Instead of creating a separate dashboard or notebook, simply add cards to a page and arrange it the way you want. Cards can be created by using one of the several ",Object(o.b)("inlineCode",{parentName:"p"},"ui.*_card()")," APIs. Also see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#dashboard"}),"dashboard"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#layout-position"}),"layout")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#layout-size"}),"sizing")," examples to learn how to lay out several cards on a page."),Object(o.b)("p",null,"If you want to display a notebook-style vertical stack of markdown, html or other content, use ",Object(o.b)("inlineCode",{parentName:"p"},"h2o_q.ui.text()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"h2o_q.ui.frame()")," contained inside a ",Object(o.b)("inlineCode",{parentName:"p"},"h2o_q.ui.form_card()"),", like this:"),Object(o.b)("p",null,"Before:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"ui.notebook([ui.notebook_section([\n  ui.markdown_cell(content='Foo'),\n  ui.frame_cell(source=html_foo, height='200px'),\n  ui.markdown_cell(content='Bar'),\n  ui.frame_cell(source=html_bar, height='200px'),\n])])\n\n")),Object(o.b)("p",null,"After: Note the parameter name change ",Object(o.b)("inlineCode",{parentName:"p"},"frame_cell(source=...)")," to ",Object(o.b)("inlineCode",{parentName:"p"},"frame(content=...)"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"ui.form_cell(\n  box='1 5 2 4',\n  items=[\n    ui.text(content='Foo'),\n    ui.frame(content=html_foo, height='200px'),\n    ui.text(content='Bar'),\n    ui.frame(content=html_bar, height='200px'),\n  ],\n)\n")),Object(o.b)("h4",{id:"changed-uibuttons-uiexpander-and-uitabs-accept-a-list-of-items-instead-of-var-args-args"},"Changed: ",Object(o.b)("inlineCode",{parentName:"h4"},"ui.buttons()"),", ",Object(o.b)("inlineCode",{parentName:"h4"},"ui.expander()")," and ",Object(o.b)("inlineCode",{parentName:"h4"},"ui.tabs()")," accept a ",Object(o.b)("inlineCode",{parentName:"h4"},"list")," of items instead of var args ",Object(o.b)("inlineCode",{parentName:"h4"},"*args"),"."),Object(o.b)("p",null,"Before:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"ui.buttons(ui.button(...), ui.button(...), ui.button(...))\n")),Object(o.b)("p",null,"After:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"ui.buttons([ui.button(...), ui.button(...), ui.button(...)]) # Note enclosing [ ]\n")),Object(o.b)("h4",{id:"changed-qupload-changed-to-qsiteupload"},"Changed: ",Object(o.b)("inlineCode",{parentName:"h4"},"q.upload()")," changed to ",Object(o.b)("inlineCode",{parentName:"h4"},"q.site.upload()"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"upload()")," method has been moved to the ",Object(o.b)("inlineCode",{parentName:"p"},"h2o_q.core.Site")," instance, since each ",Object(o.b)("inlineCode",{parentName:"p"},"h2o_q.core.Site")," represents a distinct server, and makes it possible to control multiple sites from a single Python script."),Object(o.b)("h4",{id:"changed-qargsfoo-changed-to-qclientfoo"},"Changed: ",Object(o.b)("inlineCode",{parentName:"h4"},"q.args.foo=")," changed to ",Object(o.b)("inlineCode",{parentName:"h4"},"q.client.foo="),"."),Object(o.b)("p",null,"Setting attributes on ",Object(o.b)("inlineCode",{parentName:"p"},"q.args")," (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"q.args.foo = 'bar'"),") is no longer preserved between requests. This was the primary mechanism employed previously to preserve data between requests."),Object(o.b)("p",null,"Instead, Q provides 4 mechanisms for preserving data between requests:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Process-level"),": Use global variables."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"App-level"),": Use ",Object(o.b)("inlineCode",{parentName:"li"},"q.app.foo = 'bar'")," to save; access ",Object(o.b)("inlineCode",{parentName:"li"},"q.app.foo")," to read it back again."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"User-level"),": Use ",Object(o.b)("inlineCode",{parentName:"li"},"q.user.foo = 'bar'")," to save; access ",Object(o.b)("inlineCode",{parentName:"li"},"q.user.foo")," to read it back again."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Client-level"),": Use ",Object(o.b)("inlineCode",{parentName:"li"},"q.client.foo = 'bar'")," to save; access ",Object(o.b)("inlineCode",{parentName:"li"},"q.client.foo")," to read it back again.")),Object(o.b)("p",null,"Here, ",Object(o.b)("em",{parentName:"p"},"Client")," refers to a distinct tab in a browser."),Object(o.b)("p",null,"If you want to rely on the old behavior of preserving ",Object(o.b)("inlineCode",{parentName:"p"},"q.args")," for the lifetime of the application, copy ",Object(o.b)("inlineCode",{parentName:"p"},"q.args")," to ",Object(o.b)("inlineCode",{parentName:"p"},"q.client")," like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"from h2o_q import copy_expando\n\ncopy_expando(q.args, q.client, exclude_keys=['back2', 'select_target', 'restart'])\n")),Object(o.b)("h4",{id:"changed-no-need-to-json-serialize-values-to-preserve-them-between-requests"},"Changed: No need to JSON-serialize values to preserve them between requests."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"q.args.foo=")," only supported JSON-serialized values. No such restrictions exist for the ",Object(o.b)("inlineCode",{parentName:"p"},"q.app"),", ",Object(o.b)("inlineCode",{parentName:"p"},"q.user")," and ",Object(o.b)("inlineCode",{parentName:"p"},"q.client")," containers. You could, for example, load a Pandas dataframe and set ",Object(o.b)("inlineCode",{parentName:"p"},"q.user.df = my_df"),", and the dataframe will be accessible across requests for the lifetime of the app."))}p.isMDXComponent=!0}}]);