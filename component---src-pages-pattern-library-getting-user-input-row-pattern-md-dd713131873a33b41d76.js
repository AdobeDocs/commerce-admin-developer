"use strict";(self.webpackChunkcommerce_admin_developer=self.webpackChunkcommerce_admin_developer||[]).push([[5170],{2053:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return m},default:function(){return s}});var n=t(7462),i=t(3366),o=(t(5007),t(4983)),r=t(1515),d=["components"],m={},p={_frontmatter:m},l=r.Z;function s(e){var a=e.components,t=(0,i.Z)(e,d);return(0,o.mdx)(l,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"row-pattern-table"},"Row pattern (table)"),(0,o.mdx)("p",null,'The "row pattern" (also referred to as ',(0,o.mdx)("em",{parentName:"p"},"table light")," and ",(0,o.mdx)("em",{parentName:"p"},"mini grid"),") is used in the ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/magento-admin"},"Admin"),' interface wherever the User is expected to want to input tabular data. This pattern allows the user to add as many rows of data as they desire. "Light tables" are used when the User needs to add/edit a relatively small amount of items (rows).'),(0,o.mdx)("p",null,"The pattern supports following actions:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Add new row"),(0,o.mdx)("li",{parentName:"ul"},"Remove row"),(0,o.mdx)("li",{parentName:"ul"},"Rearrange/drag the rows"),(0,o.mdx)("li",{parentName:"ul"},"Edit fields in a row"),(0,o.mdx)("li",{parentName:"ul"},"Pagination (for 20 > more rows)")),(0,o.mdx)("p",null,"The pattern does ",(0,o.mdx)("em",{parentName:"p"},"not")," support:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Filtering, sorting, searching the table"),(0,o.mdx)("li",{parentName:"ul"},"Adding, removing, rearranging of ",(0,o.mdx)("em",{parentName:"li"},"columns"))),(0,o.mdx)("h2",{id:"anatomy-of-a-row-pattern"},"Anatomy of a Row Pattern"),(0,o.mdx)("p",null,"May include any of the following elements:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Table Body"),(0,o.mdx)("li",{parentName:"ul"},"Table heading"),(0,o.mdx)("li",{parentName:"ul"},"Row"),(0,o.mdx)("li",{parentName:"ul"},"Text in the row"),(0,o.mdx)("li",{parentName:"ul"},"Form elements inside the row"),(0,o.mdx)("li",{parentName:"ul"},"Drag handle"),(0,o.mdx)("li",{parentName:"ul"},'"Add row" button'),(0,o.mdx)("li",{parentName:"ul"},'"Remove row" icon'),(0,o.mdx)("li",{parentName:"ul"},"Pagination (for more than 20 rows)")),(0,o.mdx)("p",null,"All these elements are optional, depending on the functions needed."),(0,o.mdx)("h2",{id:"behavior-and-interaction"},"Behavior and Interaction"),(0,o.mdx)("p",null,"The Row Pattern, by default, will display one row to indicate to the User that data input is available (or required). A link beneath this initial input row will allow the User to add an additional row if desired."),(0,o.mdx)("p",null,"Each row will have a delete control on the far right, often represented by a ",(0,o.mdx)("em",{parentName:"p"},'"trash can"')," icon. This will allow the User to remove any unwanted rows, along with any data that has been input into them (prior to saving the form)."),(0,o.mdx)("p",null,"The delete control ",(0,o.mdx)("em",{parentName:"p"},"CAN")," allow the user to remove all rows, even the initial row displayed upon page load."),(0,o.mdx)("p",null,'The "Add" link however should always be present to allow the user to add a row, even in the ',(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/event"},"event")," of deleting all rows."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"700px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"114.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/edae5b414393676361aac13d21ea6332/5530d/behavior.webp 320w","/commerce-admin-developer/static/edae5b414393676361aac13d21ea6332/0c8fb/behavior.webp 640w","/commerce-admin-developer/static/edae5b414393676361aac13d21ea6332/84c6d/behavior.webp 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/edae5b414393676361aac13d21ea6332/dd4a7/behavior.png 320w","/commerce-admin-developer/static/edae5b414393676361aac13d21ea6332/0f09e/behavior.png 640w","/commerce-admin-developer/static/edae5b414393676361aac13d21ea6332/a27c6/behavior.png 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-admin-developer/static/edae5b414393676361aac13d21ea6332/a27c6/behavior.png",alt:"behavior",title:"behavior",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"pagination"},"Pagination"),(0,o.mdx)("p",null,'For better performance, the Row Pattern pagination should be enabled automatically whenever 20 (or more) rows are present. Once pagination is enabled an "Order" column should be appended to allow the user to rearrange the rows.'),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"974px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/b69fcb49ed7099f47eea1ede145b70e7/5530d/pagination.webp 320w","/commerce-admin-developer/static/b69fcb49ed7099f47eea1ede145b70e7/0c8fb/pagination.webp 640w","/commerce-admin-developer/static/b69fcb49ed7099f47eea1ede145b70e7/c1156/pagination.webp 974w"],sizes:"(max-width: 974px) 100vw, 974px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/b69fcb49ed7099f47eea1ede145b70e7/dd4a7/pagination.png 320w","/commerce-admin-developer/static/b69fcb49ed7099f47eea1ede145b70e7/0f09e/pagination.png 640w","/commerce-admin-developer/static/b69fcb49ed7099f47eea1ede145b70e7/1ed31/pagination.png 974w"],sizes:"(max-width: 974px) 100vw, 974px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-admin-developer/static/b69fcb49ed7099f47eea1ede145b70e7/1ed31/pagination.png",alt:"pagination",title:"pagination",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,'Once pagination is enabled an "Order" column should be appended to allow the user to rearrange the rows.'),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"957px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"15.312499999999998%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/0533982234d95fb25cd852ef2054cecd/5530d/drag.webp 320w","/commerce-admin-developer/static/0533982234d95fb25cd852ef2054cecd/0c8fb/drag.webp 640w","/commerce-admin-developer/static/0533982234d95fb25cd852ef2054cecd/20358/drag.webp 957w"],sizes:"(max-width: 957px) 100vw, 957px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/0533982234d95fb25cd852ef2054cecd/dd4a7/drag.png 320w","/commerce-admin-developer/static/0533982234d95fb25cd852ef2054cecd/0f09e/drag.png 640w","/commerce-admin-developer/static/0533982234d95fb25cd852ef2054cecd/f937e/drag.png 957w"],sizes:"(max-width: 957px) 100vw, 957px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-admin-developer/static/0533982234d95fb25cd852ef2054cecd/f937e/drag.png",alt:"drag",title:"drag",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"examples"},"Examples"),(0,o.mdx)("p",null,"Typically the Row Pattern will span either 8 or 12 columns for the page grid, depending on the ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/layout"},"layout")," of the page or panel on which it appears. The Row Pattern should accommodate all typical form elements as are necessary, but discretion should be used to insure the elements within the row are easy to read and interact with and do not become to cramped within the space."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"935px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"245.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/59bf199d39ce1f715e5caf733ba0185b/5530d/row-examples.webp 320w","/commerce-admin-developer/static/59bf199d39ce1f715e5caf733ba0185b/0c8fb/row-examples.webp 640w","/commerce-admin-developer/static/59bf199d39ce1f715e5caf733ba0185b/0597b/row-examples.webp 935w"],sizes:"(max-width: 935px) 100vw, 935px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-admin-developer/static/59bf199d39ce1f715e5caf733ba0185b/dd4a7/row-examples.png 320w","/commerce-admin-developer/static/59bf199d39ce1f715e5caf733ba0185b/0f09e/row-examples.png 640w","/commerce-admin-developer/static/59bf199d39ce1f715e5caf733ba0185b/487e7/row-examples.png 935w"],sizes:"(max-width: 935px) 100vw, 935px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-admin-developer/static/59bf199d39ce1f715e5caf733ba0185b/487e7/row-examples.png",alt:"row examples",title:"row examples",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"accessibility"},"Accessibility"),(0,o.mdx)("p",null,"The form drop down, scroll area, and selections should be accessible via keyboard."),(0,o.mdx)("p",null,"Follow this form control accessibility guideline: ",(0,o.mdx)("a",{parentName:"p",href:"http://www.w3.org/TR/WCAG10-HTML-TECHS/#forms"},"http://www.w3.org/TR/WCAG10-HTML-TECHS/#forms")),(0,o.mdx)("h2",{id:"assets"},"Assets"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/download/Magento_Row_pattern_src.zip"},"Download Row Pattern ZIP file"),"."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-pattern-library-getting-user-input-row-pattern-md-dd713131873a33b41d76.js.map