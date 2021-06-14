(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1687:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(13);var vue_esm=__webpack_require__(1),offer=__webpack_require__(44),store_actions=__webpack_require__(315),pagesvue_type_script_lang_ts_=vue_esm.default.extend({layout:"without-margins",computed:{latestOffers:function latestOffers(){return this.$store.getters[store_actions.a.getters.latestOffers]},isLoggedIn:function isLoggedIn(){return null!==this.$store.getters[store_actions.b.getters.userName]}},mounted:function mounted(){this.$store.dispatch(store_actions.a.actions.getListOfLatestOffers)},methods:{onSearch:function onSearch(_ref){var value=_ref.value,searchType=_ref.searchType;this.$router.push({path:"/items",query:{phrase:value,type:searchType}})},onItemSelect:function onItemSelect(_ref2){var id=_ref2.id,path=_ref2.type===offer.a.Handover?"items":"accept";this.$router.push({path:"/".concat(path,"/").concat(id)})},onAcceptButtonClick:function onAcceptButtonClick(){this.$router.push(this.isLoggedIn?"/accept":"/log-in?target=accept")},onHandoverButtonClick:function onHandoverButtonClick(){this.$router.push(this.isLoggedIn?"/handover":"/log-in?target=handover")}}}),componentNormalizer=__webpack_require__(14),installComponents=__webpack_require__(12),installComponents_default=__webpack_require__.n(installComponents),VBtn=__webpack_require__(453),VCard=__webpack_require__(445),VCol=__webpack_require__(1660),VContainer=__webpack_require__(1677),VRow=__webpack_require__(1661),VSheet=__webpack_require__(109),component=Object(componentNormalizer.a)(pagesvue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",[_c("v-landing-page",{on:{search:_vm.onSearch}}),_vm._v(" "),_c("co-lazy",{attrs:{"min-height":"50vh"}},[_c("v-row",{staticClass:"mt-n3 mb-2"},[_c("v-col",{attrs:{cols:"12",lg:"6"}},[_c("co-card-action",{staticClass:"mt-5",attrs:{action:_vm.acceptCardDetails,image:"/landing-page/light-bulb-give.webp"}},[_c("template",{slot:"title"},[_vm._v(" Nie wyrzucaj.")]),_vm._v("\n                    Coś zalega Ci w szafie lub piwnicy? Chcesz podarować swoim rzeczom drugie życie? Daj o tym znać tworząc nowe\n                    ogłoszenie. Twoje śmieci mogą komuś się przydać.\n                    "),_c("template",{slot:"action"},[_c("v-btn",{staticClass:"px-8",attrs:{large:"",color:"warning"},on:{click:_vm.onHandoverButtonClick}},[_vm._v(" Dodaj ogłoszenie ")])],1)],2)],1),_vm._v(" "),_c("v-col",{attrs:{cols:"12",lg:"6"}},[_c("co-card-action",{staticClass:"mt-5",attrs:{image:"/landing-page/light-bulb-idea.webp",action:_vm.handOverCardDetails}},[_c("template",{slot:"title"},[_vm._v("Utwórz zbiórkę.")]),_vm._v("\n                    Masz ciekawy pomysł ale brakuje Ci materiałów? Nie ruszaj od razu do sklepu! Powiedz światu czego potrzebujesz i\n                    pozwól innym zaangażować się w Twój projekt.\n                    "),_c("template",{slot:"action"},[_c("v-btn",{staticClass:"px-8",attrs:{large:"",color:"warning"},on:{click:_vm.onAcceptButtonClick}},[_vm._v(" Dodaj zbiórkę ")])],1)],2)],1)],1)],1),_vm._v(" "),_c("v-sheet",{attrs:{color:"grey lighten-3 pb-12"}},[_c("v-container",[_c("h1",{staticClass:"text-h5 mt-12"},[_vm._v("Ostatnio dodane oferty")]),_vm._v(" "),_c("p",{staticClass:"font-weight-light text--secondary mb-12"},[_vm._v("Najnowsze ogłoszenia od użytkowników")]),_vm._v(" "),_c("v-card",[_c("v-list-items",{attrs:{items:_vm.latestOffers},on:{"item-select":_vm.onItemSelect}})],1)],1)],1),_vm._v(" "),_c("br")],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents_default()(component,{VLandingPage:__webpack_require__(463).default,CoCardAction:__webpack_require__(465).default,CoLazy:__webpack_require__(316).default,VListItems:__webpack_require__(457).default}),installComponents_default()(component,{VBtn:VBtn.a,VCard:VCard.a,VCol:VCol.a,VContainer:VContainer.a,VRow:VRow.a,VSheet:VSheet.a}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"pages",description:"",tags:{}}}}]);
//# sourceMappingURL=index.1260133753c17f63891f.bundle.js.map