"use strict";(self.webpackChunktest_assignment=self.webpackChunktest_assignment||[]).push([[582],{4582:(it,h,i)=>{i.r(h),i.d(h,{BlogModule:()=>ct});var p=i(6642),e=i(9633);const d=(0,e.PH)("[Blog] Load posts"),P=(0,e.PH)("[Blog] Select current post",(0,e.Ky)()),b=(0,e.PH)("[Blog] Clear selected post"),u=(0,e.PH)("[Blog] Load comments",(0,e.Ky)()),v=(0,e.PH)("[Blog] Clear comments"),r=(0,e.ZF)("blog"),C=(0,e.P1)(r,o=>o.posts),_=(0,e.P1)(r,o=>o.currentPostId),F=(0,e.P1)(r,_,(o,n)=>o.posts.find(c=>c.id===n)||null),j=(0,e.P1)(r,o=>o.postsLoading),U=(0,e.P1)(r,o=>o.comments),M=(0,e.P1)(r,o=>o.commentsLoading),Z=(0,e.PH)("[Blog] Load posts success",(0,e.Ky)()),L=(0,e.PH)("[Blog] Load posts failure",(0,e.Ky)()),y=(0,e.PH)("[Blog] Load comments success",(0,e.Ky)()),O=(0,e.PH)("[Blog] Load comments failure",(0,e.Ky)());var t=i(5e3),m=i(9291),a=i(9808),g=i(9224),S=i(7423),x=i(773);function Y(o,n){if(1&o&&(t.TgZ(0,"mat-card",7),t.TgZ(1,"p"),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA(),t.qZA()),2&o){const s=t.oxw().$implicit;t.xp6(2),t.Oqu(s.name),t.xp6(2),t.Oqu(s.email),t.xp6(2),t.Oqu(s.body)}}function J(o,n){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,Y,7,3,"mat-card",6),t.qZA()),2&o){const s=n.index,c=t.oxw(3);t.xp6(1),t.Q6J("ngIf",s<c.commentsLimit)}}function q(o,n){if(1&o){const s=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){return t.CHM(s),t.oxw(3).showMore()}),t._uU(1,"Show More"),t.qZA()}}function Q(o,n){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,J,2,1,"div",4),t.ALo(2,"async"),t.YNc(3,q,2,0,"button",5),t.ALo(4,"async"),t.qZA()),2&o){const s=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,2,s.comments$)),t.xp6(2),t.Q6J("ngIf",s.commentsLimit<t.lcZ(4,4,s.comments$).length)}}function H(o,n){1&o&&t._UZ(0,"mat-spinner")}function N(o,n){if(1&o&&(t.TgZ(0,"div",1),t.TgZ(1,"h1"),t._uU(2,"Post:"),t.qZA(),t.TgZ(3,"h2"),t._uU(4),t.ALo(5,"async"),t.qZA(),t._UZ(6,"br"),t.TgZ(7,"p"),t._uU(8),t.ALo(9,"async"),t.qZA(),t.TgZ(10,"div",2),t.TgZ(11,"h2"),t._uU(12,"Comments: "),t.qZA(),t.YNc(13,Q,5,6,"div",3),t.ALo(14,"async"),t.YNc(15,H,1,0,"mat-spinner",3),t.ALo(16,"async"),t.qZA(),t.qZA()),2&o){const s=t.oxw();t.xp6(4),t.Oqu(t.lcZ(5,4,s.post$).title),t.xp6(4),t.Oqu(t.lcZ(9,6,s.post$).body),t.xp6(5),t.Q6J("ngIf",!1===t.lcZ(14,8,s.commentsLoading$)),t.xp6(2),t.Q6J("ngIf",!0===t.lcZ(16,10,s.commentsLoading$))}}let K=(()=>{class o{constructor(s,c){this.route=s,this.store=c,this.postId=0,this.commentsLimit=3}ngOnInit(){this.postId=+this.route.snapshot.params.id,this.store.dispatch(P({currentPostId:this.postId})),this.post$=this.store.select(F),this.comments$=this.store.select(U),this.commentsLoading$=this.store.select(M)}ngAfterViewInit(){this.store.dispatch(u({postId:this.postId}))}ngOnDestroy(){this.store.dispatch(v())}showMore(){this.commentsLimit=this.commentsLimit+3}}return o.\u0275fac=function(s){return new(s||o)(t.Y36(m.gz),t.Y36(e.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],decls:2,vars:3,consts:[["class","app-post-page",4,"ngIf"],[1,"app-post-page"],[1,"app-post-page-comments"],[4,"ngIf"],[4,"ngFor","ngForOf"],["mat-button","",3,"click",4,"ngIf"],["class","app-post-page-comment-card",4,"ngIf"],[1,"app-post-page-comment-card"],["mat-button","",3,"click"]],template:function(s,c){1&s&&(t.YNc(0,N,17,12,"div",0),t.ALo(1,"async")),2&s&&t.Q6J("ngIf",t.lcZ(1,1,c.post$))},directives:[a.O5,a.sg,g.a8,S.lW,x.$g],pipes:[a.Ov],styles:[".app-post-page[_ngcontent-%COMP%]{width:auto;padding:100px 50px 50px}.app-post-page-comments[_ngcontent-%COMP%]{margin-top:30px}.app-post-page-comment-card[_ngcontent-%COMP%]{margin-bottom:20px}"]}),o})();const w=function(o){return["/blog","post",o]};let z=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-post-card"]],inputs:{post:"post"},decls:6,vars:5,consts:[[1,"app-post-card",3,"routerLink"]],template:function(s,c){1&s&&(t.TgZ(0,"mat-card",0),t.TgZ(1,"mat-card-title"),t._uU(2),t.qZA(),t.TgZ(3,"mat-card-content"),t.TgZ(4,"p"),t._uU(5),t.qZA(),t.qZA(),t.qZA()),2&s&&(t.Q6J("routerLink",t.VKq(3,w,c.post.id)),t.xp6(2),t.Oqu(c.post.title),t.xp6(3),t.Oqu(c.post.body))},directives:[g.a8,m.rH,g.n5,g.dn],styles:[".app-post-card[_ngcontent-%COMP%]{margin-bottom:15px}"]}),o})();function E(o,n){1&o&&t._UZ(0,"app-post-card",2),2&o&&t.Q6J("post",n.$implicit)}let G=(()=>{class o{constructor(s){this.store=s}ngOnInit(){this.posts$=this.store.select(C)}}return o.\u0275fac=function(s){return new(s||o)(t.Y36(e.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-posts-list"]],decls:3,vars:3,consts:[[1,"app-posts"],[3,"post",4,"ngFor","ngForOf"],[3,"post"]],template:function(s,c){1&s&&(t.TgZ(0,"div",0),t.YNc(1,E,1,1,"app-post-card",1),t.ALo(2,"async"),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,c.posts$)))},directives:[a.sg,z],pipes:[a.Ov],styles:[".app-posts[_ngcontent-%COMP%]{padding:100px 50px 50px}"]}),o})();var B=i(8306);function X(o,n){1&o&&t._UZ(0,"mat-spinner")}function R(o,n){if(1&o&&(t.TgZ(0,"div",1),t.YNc(1,X,1,0,"mat-spinner",2),t.ALo(2,"async"),t._UZ(3,"router-outlet"),t.qZA()),2&o){const s=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,s.postsLoading$))}}const W=[{component:(()=>{class o{constructor(s){this.store=s,this.posts$=new B.y,this.postsLoading$=new B.y}ngOnInit(){this.store.dispatch(d()),this.posts$=this.store.select(C),this.postsLoading$=this.store.select(j)}}return o.\u0275fac=function(s){return new(s||o)(t.Y36(e.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],decls:2,vars:3,consts:[["class","app-blog",4,"ngIf"],[1,"app-blog"],[4,"ngIf"]],template:function(s,c){1&s&&(t.YNc(0,R,4,3,"div",0),t.ALo(1,"async")),2&s&&t.Q6J("ngIf",t.lcZ(1,1,c.posts$))},directives:[a.O5,x.$g,m.lC],pipes:[a.Ov],styles:[".app-blog[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center}"]}),o})(),path:"",children:[{path:"",component:G},{path:"post/:id",component:K}]}];let V=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.Bz.forChild(W)],m.Bz]}),o})();const k=(0,e.Lq)({posts:[],comments:[],currentPostId:null,postsLoading:!1,commentsLoading:!1,error:""},(0,e.on)(d,o=>Object.assign(Object.assign({},o),{postsLoading:!0})),(0,e.on)(Z,(o,n)=>Object.assign(Object.assign({},o),{posts:[...n.posts],postsLoading:!1})),(0,e.on)(L,(o,n)=>Object.assign(Object.assign({},o),{postsLoading:!1,error:n.error})),(0,e.on)(P,(o,n)=>Object.assign(Object.assign({},o),{currentPostId:n.currentPostId})),(0,e.on)(b,o=>Object.assign(Object.assign({},o),{currentPostId:null})),(0,e.on)(u,o=>Object.assign(Object.assign({},o),{commentsLoading:!0})),(0,e.on)(y,(o,n)=>Object.assign(Object.assign({},o),{comments:n.comments,commentsLoading:!1})),(0,e.on)(O,(o,n)=>Object.assign(Object.assign({},o),{commentsLoading:!1,error:n.error})),(0,e.on)(v,(o,n)=>Object.assign(Object.assign({},o),{comments:[]})));var A=i(5577),T=i(4004),I=i(262),$=i(9646),tt=i(5111),ot=i(520);let st=(()=>{class o{constructor(s,c){this.httpClient=s,this.apiUrl=c}loadPosts(){return this.httpClient.get(`${this.apiUrl}/posts`)}loadComments(s){return this.httpClient.get(`${this.apiUrl}/posts/${s}/comments`)}}return o.\u0275fac=function(s){return new(s||o)(t.LFG(ot.eN),t.LFG(tt.E))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),nt=(()=>{class o{constructor(s,c){this.actions$=s,this.blogService=c,this.loadPosts$=(0,p.GW)(()=>this.actions$.pipe((0,p.l4)(d),(0,A.z)(()=>this.blogService.loadPosts().pipe((0,T.U)(l=>Z({posts:l})),(0,I.K)(l=>(0,$.of)(L({error:l}))))))),this.loadComments$=(0,p.GW)(()=>this.actions$.pipe((0,p.l4)(u),(0,A.z)(l=>this.blogService.loadComments(l.postId).pipe((0,T.U)(f=>y({comments:f})),(0,I.K)(f=>(0,$.of)(O({error:f})))))))}}return o.\u0275fac=function(s){return new(s||o)(t.LFG(p.eX),t.LFG(st))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();var et=i(8170);let ct=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[],imports:[[V,e.Aw.forFeature("blog",k),p.sQ.forFeature([nt]),a.ez,et.q]]}),o})()}}]);