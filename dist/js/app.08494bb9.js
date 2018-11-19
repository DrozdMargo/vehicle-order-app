(function(e){function t(t){for(var l,n,r=t[0],a=t[1],o=t[2],h=0,u=[];h<r.length;h++)n=r[h],s[n]&&u.push(s[n][0]),s[n]=0;for(l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l]);d&&d(t);while(u.length)u.shift()();return c.push.apply(c,o||[]),i()}function i(){for(var e,t=0;t<c.length;t++){for(var i=c[t],l=!0,r=1;r<i.length;r++){var a=i[r];0!==s[a]&&(l=!1)}l&&(c.splice(t--,1),e=n(n.s=i[0]))}return e}var l={},s={app:0},c=[];function n(t){if(l[t])return l[t].exports;var i=l[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=l,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(i,l,function(t){return e[t]}.bind(null,l));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var d=a;c.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("097d");var l=i("2b0e"),s=i("bb71");i("da64");l["a"].use(s["a"],{iconfont:"md"});var c=i("2f62"),n=(i("ac6a"),i("96cf"),i("1da1")),r=i("bc3a"),a=i.n(r),o={namespaced:!0,state:{vehicles:[],types:[],models:[]},mutations:{setVehicles:function(e,t){e.vehicles=t},setTypes:function(e,t){e.types=t},setModels:function(e,t){e.models=t}},actions:{fetchVehicleTypes:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.get("https://api.myjson.com/bins/7y3fr");case 3:i=e.sent,t.commit("setTypes",i.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),fetchVehicleModels:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.get("https://api.myjson.com/bins/170i8s");case 3:i=e.sent,t.commit("setModels",i.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),fetchVehicleList:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.get("https://api.myjson.com/bins/1h4vj0");case 3:i=e.sent,t.commit("setVehicles",i.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()},getters:{composedVehicles:function(e){var t=e.types.slice(),i=e.models.slice(),l=e.vehicles.slice();return i.forEach(function(e){e.vehicles=[],l.forEach(function(t){t.vehicleModel===e.id&&e.vehicles.push(t)})}),t.forEach(function(e){e.models=[],i.forEach(function(t){t.vehicleType===e.id&&e.models.push(t)})}),t}}},d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-toolbar",{attrs:{app:""}},[i("v-toolbar-title",{staticClass:"headline text-uppercase"},[i("span",[e._v("Vehicle App")])])],1),i("v-content",[i("VehicleModal",{attrs:{filter:e.filter},on:{select:e.getSelectedVehicles}}),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs4:""}}),i("v-flex",{attrs:{xs4:""}},[e.selectedVehicles.length?i("v-card",[i("v-list",{attrs:{"two-line":""}},[e._l(e.selectedVehicles,function(t){return[t.name?i("v-subheader",{key:t.name},[e._v("\n                "+e._s(t.name)+"\n              ")]):e._e(),i("v-divider"),i("v-list-tile",{key:t.id,attrs:{avatar:""}},[i("v-list-tile-avatar",[i("img",{attrs:{src:t.image}})]),i("v-list-tile-content",[i("v-list-tile-title",{domProps:{innerHTML:e._s(t.vehicleStatus.name)}}),i("v-list-tile-sub-title",{domProps:{innerHTML:e._s(t.vehicleOwnershipType.name)}}),e._v("\n                  Контрагент: "+e._s(t.counterparty.name)+",\n                  "+e._s(e.getVehicleModelName(t.vehicleModel))+"\n                ")],1)],1)]})],2)],1):e._e()],1)],1)],1)],1)},h=[],u=(i("7f7f"),i("6762"),i("2fdb"),i("be94")),f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("div",{staticClass:"text-xs-center"},[i("v-dialog",{attrs:{width:"700"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-btn",{attrs:{slot:"activator",color:"red lighten-2",dark:""},slot:"activator"},[e._v("\n            Выбрать технику\n          ")]),i("v-card",[i("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[e._v("\n              Выбор техники\n            ")]),i("v-divider"),i("v-card-text",[e._l(e.availableVehicles,function(t){return i("div",[e.filteredTypes.includes(t.id)?i("v-checkbox",{ref:"type"+t.id,refInFor:!0,attrs:{label:t.name,value:t.id},on:{change:function(i){e.setModelsSelected(t.id)}},model:{value:e.selectedTypes,callback:function(t){e.selectedTypes=t},expression:"selectedTypes"}}):e._e(),e._l(t.models,function(t){return e._t("default",[e.filteredModels.includes(t.id)?i("v-checkbox",{ref:"model"+t.id,refInFor:!0,staticClass:"pl-4",attrs:{label:t.name,value:t.id},on:{change:function(i){e.setVehiclesSelected(t.id)}},model:{value:e.selectedModels,callback:function(t){e.selectedModels=t},expression:"selectedModels"}}):e._e(),e._l(t.vehicles,function(t){return i("div",[e.filteredVehicles.includes(t.id)?i("v-checkbox",{ref:"vehicle"+t.id,refInFor:!0,staticClass:"pl-4 ml-4",attrs:{label:t.name,value:t.id},model:{value:e.selectedVehicles,callback:function(t){e.selectedVehicles=t},expression:"selectedVehicles"}}):e._e()],1)})])})],2)}),i("v-checkbox",{attrs:{label:"Hide not selected items"},model:{value:e.hideNotSelected,callback:function(t){e.hideNotSelected=t},expression:"hideNotSelected"}})],2),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",flat:""},on:{click:e.save}},[e._v("\n                Подтвердить\n              ")])],1)],1)],1)],1)])],1)],1)},v=[],p=(i("7514"),{props:{filter:Array},data:function(){return{dialog:!1,selectedTypes:[],selectedModels:[],selectedVehicles:[],hideNotSelected:!1}},computed:Object(u["a"])({},Object(c["b"])("vehicles",["composedVehicles"]),{filteredTypes:function(){var e=[];return this.filter.forEach(function(t){t.vehicleTypeId&&e.push(t.vehicleTypeId)}),e},filteredModels:function(){var e=[];return this.filter.forEach(function(t){t.vehicleModelId&&e.push(t.vehicleModelId)}),e},filteredVehicles:function(){var e=[];return this.filter.forEach(function(t){t.vehicleId&&e.push(t.vehicleId)}),e},availableVehicles:function(){return this.composedVehicles}}),methods:{save:function(){this.dialog=!1;var e=[];this.selectedTypes.forEach(function(t){e.push({vehicleTypeId:t})}),this.selectedModels.forEach(function(t){e.push({vehicleModelId:t})}),this.selectedVehicles.forEach(function(t){e.push({vehicleId:t})}),console.log(e),this.$emit("select",this.selectedVehicles)},setVehiclesSelected:function(e){var t=this;this.selectedModels.includes(e)?this.availableVehicles.forEach(function(i){var l=i.models.find(function(t){return t.id===e});if(l){var s=l.vehicles.find(function(t){return t.vehicleModel===e});t.selectedVehicles.includes(s.id)||t.selectedVehicles.push(s.id)}}):this.availableVehicles.forEach(function(i){var l=i.models.find(function(t){return t.id===e});if(l){var s=l.vehicles.find(function(t){return t.vehicleModel===e});if(t.selectedVehicles.includes(s.id)){var c=t.selectedVehicles.indexOf(s.id);c>-1&&t.selectedVehicles.splice(c,1)}}})},setModelsSelected:function(e){var t=this.availableVehicles.find(function(t){return t.id===e}),i=t.models.find(function(t){return t.vehicleType===e}),l=i.vehicles.find(function(e){return e.vehicleModel===i.id});if(this.selectedTypes.includes(e))this.selectedModels.includes(i.id)||this.selectedModels.push(i.id),this.selectedVehicles.includes(l.id)||this.selectedVehicles.push(l.id);else{if(this.selectedModels.includes(i.id)){var s=this.selectedModels.indexOf(i.id);s>-1&&this.selectedModels.splice(s,1)}if(this.selectedVehicles.includes(l.id)){var c=this.selectedVehicles.indexOf(l.id);c>-1&&this.selectedVehicles.splice(c,1)}}}},watch:{hideNotSelected:function(){var e=this;this.hideNotSelected?this.availableVehicles.forEach(function(t){e.selectedTypes.includes(t.id)||e.$refs["type"+t.id]&&(e.$refs["type"+t.id][0].$el.style.display="none"),t.models.forEach(function(t){e.selectedModels.includes(t.id)||e.$refs["model"+t.id]&&(e.$refs["model"+t.id][0].$el.style.display="none"),t.vehicles.forEach(function(t){e.selectedVehicles.includes(t.id)||e.$refs["vehicle"+t.id]&&(e.$refs["vehicle"+t.id][0].$el.style.display="none")})})}):this.availableVehicles.forEach(function(t){e.selectedTypes.includes(t.id)||e.$refs["type"+t.id]&&(e.$refs["type"+t.id][0].$el.style.display="block"),t.models.forEach(function(t){e.selectedModels.includes(t.id)||e.$refs["model"+t.id]&&(e.$refs["model"+t.id][0].$el.style.display="block"),t.vehicles.forEach(function(t){e.selectedVehicles.includes(t.id)||e.$refs["vehicle"+t.id]&&(e.$refs["vehicle"+t.id][0].$el.style.display="block")})})})}}}),m=p,V=i("2877"),b=i("6544"),y=i.n(b),x=i("8336"),g=i("b0af"),M=i("99d9"),T=i("12b2"),_=i("ac7c"),k=i("a523"),w=i("169a"),$=i("ce7e"),O=i("0e8f"),S=i("a722"),j=i("9910"),E=Object(V["a"])(m,f,v,!1,null,null,null);E.options.__file="VehicleModal.vue";var I=E.exports;y()(E,{VBtn:x["a"],VCard:g["a"],VCardActions:M["a"],VCardText:M["b"],VCardTitle:T["a"],VCheckbox:_["a"],VContainer:k["a"],VDialog:w["a"],VDivider:$["a"],VFlex:O["a"],VLayout:S["a"],VSpacer:j["a"]});var C={name:"App",components:{VehicleModal:I},data:function(){return{selectedVehicles:[],filter:[{vehicleTypeId:1},{vehicleTypeId:2},{vehicleModelId:1},{vehicleModelId:2},{vehicleId:1},{vehicleId:2}]}},computed:Object(u["a"])({},Object(c["c"])("vehicles",["vehicles","models","types"])),created:function(){this.$store.dispatch("vehicles/fetchVehicleTypes"),this.$store.dispatch("vehicles/fetchVehicleModels"),this.$store.dispatch("vehicles/fetchVehicleList")},methods:{getSelectedVehicles:function(e){this.selectedVehicles=this.vehicles.filter(function(t){return e.includes(t.id)})},getVehicleModelName:function(e){var t=this.models.filter(function(t){return t.id===e}),i=this.types.filter(function(e){return e.id===t[0].vehicleType});return"Модель: "+t[0].name+", Тип: "+i[0].name}}},L=C,N=i("7496"),P=i("549c"),A=i("8860"),R=i("ba95"),F=i("c954"),D=i("5d23"),H=i("e0c7"),J=i("71d9"),B=i("2a7f"),q=Object(V["a"])(L,d,h,!1,null,null,null);q.options.__file="App.vue";var z=q.exports;y()(q,{VApp:N["a"],VCard:g["a"],VContent:P["a"],VDivider:$["a"],VFlex:O["a"],VLayout:S["a"],VList:A["a"],VListTile:R["a"],VListTileAvatar:F["a"],VListTileContent:D["a"],VListTileSubTitle:D["b"],VListTileTitle:D["c"],VSubheader:H["a"],VToolbar:J["a"],VToolbarTitle:B["a"]}),l["a"].config.productionTip=!1,l["a"].use(c["a"]);var G={modules:{vehicles:o}},K=new c["a"].Store(G);new l["a"]({store:K,el:"#app",render:function(e){return e(z)}})}});
//# sourceMappingURL=app.08494bb9.js.map