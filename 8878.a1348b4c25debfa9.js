"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8878],{8878:(P,u,n)=>{n.r(u),n.d(u,{MultitaskPageModule:()=>f});var d=n(6814),g=n(95),l=n(6728),c=n(3044),t=n(6242),p=n(2927);const m=[{path:"",component:(()=>{var a;class o{constructor(e,s,r){this.router=e,this.route=s,this.pcComponentService=r,this.selectedRamCapacity=null,this.selectedStorageData=[]}ionViewWillEnter(){const e=this.router.getCurrentNavigation();null!=e&&e.extras.state&&(this.selectedStorageData=e.extras.state.selectedStorageData),this.fetchRamData()}selectRamCapacity(e){this.selectedRamCapacity=e}nextPage(){this.router.navigate(["/resultater"],{queryParams:{selectedRamCapacity:this.selectedRamCapacity,selectedComponentNames:this.route.snapshot.queryParams.selectedComponentNames||null,selectedStorageCapacity:this.route.snapshot.queryParams.selectedStorageCapacity||null,selectedProcessorName:this.route.snapshot.queryParams.selectedProcessorName||null,selectedStorageData:this.selectedStorageData}})}fetchRamData(){null!==this.selectedRamCapacity&&this.pcComponentService.findByRamCapacity(this.selectedRamCapacity).subscribe(e=>{console.log("Selected RAM Data:",e)})}}return(a=o).\u0275fac=function(e){return new(e||a)(t.Y36(c.F0),t.Y36(c.gz),t.Y36(p.e))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-multitask"]],decls:28,vars:1,consts:[[1,"ion-padding"],[1,"ion-text-center","ion-padding"],[1,""],[1,"next_build-color"],["size","6"],["src","../../assets/img/pink.png ","alt","Billede 1"],["expand","full",3,"click"],["src","../../assets/img/blue.png","alt","Billede 2"],[3,"disabled","click"]],template:function(e,s){1&e&&(t.TgZ(0,"ion-content",0)(1,"div",1)(2,"h1",2),t._uU(3,"Har du behov for at kunne "),t.TgZ(4,"span",3),t._uU(5,"multitaske"),t.qZA(),t._uU(6,"?"),t.qZA(),t.TgZ(7,"p",0),t._uU(8," Dette kan forkomme ved brug af flere "),t.TgZ(9,"span",3),t._uU(10,"sk\xe6rme"),t.qZA(),t._uU(11," eller mange "),t.TgZ(12,"span",3),t._uU(13,"applikationer"),t.qZA(),t._uU(14,", der er \xe5bne p\xe5 samme tid. "),t.qZA()(),t.TgZ(15,"ion-grid")(16,"ion-row")(17,"ion-col",4),t._UZ(18,"img",5),t.TgZ(19,"button",6),t.NdJ("click",function(){return s.selectRamCapacity("16")}),t._uU(20," Nej "),t.qZA()(),t.TgZ(21,"ion-col",4),t._UZ(22,"img",7),t.TgZ(23,"button",6),t.NdJ("click",function(){return s.selectRamCapacity("32")}),t._uU(24," Ja "),t.qZA()()()(),t.TgZ(25,"ion-col")(26,"button",8),t.NdJ("click",function(){return s.nextPage()}),t._uU(27," Resultater "),t.qZA()()()),2&e&&(t.xp6(26),t.Q6J("disabled",null===s.selectedRamCapacity))},dependencies:[l.wI,l.W2,l.jY,l.Nd],styles:["ion-content[_ngcontent-%COMP%]{--background: linear-gradient(196deg, #321D4D 47.63%, #2A1936 107.97%)!important}.next_build-color[_ngcontent-%COMP%]{color:#39d67f}h1[_ngcontent-%COMP%]{font-size:32px;font-style:normal;font-weight:700;line-height:normal}p[_ngcontent-%COMP%]{font-size:18px;font-style:normal;font-weight:400;line-height:normal}.card[_ngcontent-%COMP%]{height:240px;width:220px;object-fit:cover;box-shadow:0 4px 4px #00000040;border-radius:8px}button[_ngcontent-%COMP%]{margin-top:40px;border-radius:5px;background:linear-gradient(277deg,#12c657 5.23%,#075138 107.86%);box-shadow:0 4px 4px #00000040;width:152px;height:43px;font-size:17px;padding:5px 10px}.d-flex[_ngcontent-%COMP%]{display:flex!important}ion-icon[_ngcontent-%COMP%]{padding:5px}ion-row[_ngcontent-%COMP%]{align-items:stretch}ion-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.card-container[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:180px}.card-container[_ngcontent-%COMP%]{position:relative;overflow:hidden}.card[_ngcontent-%COMP%]{width:100%;object-fit:cover}.ion-overlay[_ngcontent-%COMP%], .ion-overlay1[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:8px}"]}),o})()}];let h=(()=>{var a;class o{}return(a=o).\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[c.Bz.forChild(m),c.Bz]}),o})(),f=(()=>{var a;class o{}return(a=o).\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[d.ez,g.u5,l.Pc,h]}),o})()}}]);