(function(t){function e(e){for(var o,i,n=e[0],l=e[1],u=e[2],m=0,d=[];m<n.length;m++)i=n[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],o=!0,n=1;n<r.length;n++){var l=r[n];0!==a[l]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},a={app:0},s=[];function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var u=0;u<n.length;u++)e(n[u]);var c=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e623"),r("e379"),r("5dc8"),r("37e1");var o=r("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("img",{staticClass:"logo",attrs:{alt:"Cloud logo",src:r("cf05")}}),o("h1",[t._v("Регистрация клиента")]),o("div",{staticClass:"error"},[t._v("* - Поля обязательные для заполнения")]),o("form",{on:{submit:function(e){return e.preventDefault(),t.someAction()}}},[o("Full",{attrs:{clientTittle:"Данные клиента",addressTittle:"Адрес клиента",documentsTittle:"Паспортные данные"},on:{"change-page":t.changePage}})],1)])},s=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"full"},[r("div",{staticClass:"client-data"},[r("h2",[t._v(t._s(t.clientTittle))]),r("p",{staticClass:"title"},[t._v("Ф.И.О.")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.lastName,expression:"form.lastName",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{type:"text",placeholder:"Фамилия*"},domProps:{value:t.form.lastName},on:{blur:[function(e){return t.$v.form.lastName.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.form,"lastName",e.target.value.trim())}}}),t.$v.form.lastName.$error?r("span",{staticClass:"error"},[t._v(" Поле обязательно для заполнения ")]):t._e()]),r("div",{staticClass:"col"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.firstName,expression:"form.firstName",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{type:"text",placeholder:"Имя*"},domProps:{value:t.form.firstName},on:{blur:[function(e){return t.$v.form.firstName.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.form,"firstName",e.target.value.trim())}}}),t.$v.form.firstName.$error?r("span",{staticClass:"error"},[t._v(" Поле обязательно для заполнения ")]):t._e()]),r("div",{staticClass:"col"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.patronomic,expression:"form.patronomic",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{type:"text",placeholder:"Отчество"},domProps:{value:t.form.patronomic},on:{input:function(e){e.target.composing||t.$set(t.form,"patronomic",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("p",{staticClass:"title"},[t._v("Дата рождения*")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.dateBirth,expression:"form.dateBirth"}],staticClass:"form-input",attrs:{type:"date"},domProps:{value:t.form.dateBirth},on:{blur:function(e){return t.$v.form.dateBirth.$touch()},input:function(e){e.target.composing||t.$set(t.form,"dateBirth",e.target.value)}}}),t.$v.form.dateBirth.$error?r("span",{staticClass:"error"},[t._v(" Поле обязательно для заполнения ")]):t._e()]),r("div",{staticClass:"col"},[r("p",{staticClass:"title"},[t._v("Телефон*")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.tel,expression:"form.tel",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{type:"text",placeholder:"77777777777"},domProps:{value:t.form.tel},on:{blur:[function(e){return t.$v.form.tel.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.form,"tel",e.target.value.trim())}}}),t.$v.form.tel.$error?r("span",{staticClass:"error"},[t.$v.form.tel.validFormat?[t._v(" Поле обязательно для заполнения ")]:[t._v(" Поле должно содержать 11 цифр и начинаться с 7 ")]],2):t._e()])]),r("div",{staticClass:"row gender"},[r("p",{staticClass:"title"},[t._v("Пол")]),t._l(t.sex,(function(e){return r("div",{key:e.index,staticClass:"col"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.sex,expression:"form.sex"}],staticClass:"radio",attrs:{type:"radio",id:e.value},domProps:{value:e.value,checked:t._q(t.form.sex,e.value)},on:{change:function(r){return t.$set(t.form,"sex",e.value)}}}),r("label",{attrs:{for:e.value}},[t._v(" "+t._s(e.label)+" ")])])}))],2),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("label",{staticClass:"title",attrs:{for:"groupClient"}},[t._v("Группа клиентов*")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.groupClients,expression:"form.groupClients"}],staticClass:"multi-select",attrs:{id:"groupClient",multiple:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"groupClients",e.target.multiple?r:r[0])}}},t._l(t.groupClients,(function(e){return r("option",{key:e.index,domProps:{value:e.value},on:{blur:function(e){return t.$v.form.groupClients.$touch()}}},[t._v(" "+t._s(e.label)+" ")])})),0),t.$v.form.groupClients.$error?r("span",{staticClass:"error"},[t._v(" Поле обязательно для заполнения ")]):t._e()]),r("div",{staticClass:"col"},[r("label",{staticClass:"title",attrs:{for:"doctor"}},[t._v("Лечащий врач")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.doctor,expression:"form.doctor"}],staticClass:"select",attrs:{id:"doctor"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"doctor",e.target.multiple?r:r[0])}}},t._l(t.doctor,(function(e){return r("option",{key:e.index,domProps:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),0)])]),r("div",{staticClass:"checkbox col"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.noSms,expression:"form.noSms"}],attrs:{type:"checkbox",id:"noSms"},domProps:{checked:Array.isArray(t.form.noSms)?t._i(t.form.noSms,null)>-1:t.form.noSms},on:{change:function(e){var r=t.form.noSms,o=e.target,a=!!o.checked;if(Array.isArray(r)){var s=null,i=t._i(r,s);o.checked?i<0&&t.$set(t.form,"noSms",r.concat([s])):i>-1&&t.$set(t.form,"noSms",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.form,"noSms",a)}}}),r("label",{attrs:{for:"noSms"}},[t._v("Не отправлять СМС")])]),r("div",{staticClass:"control"},[r("div",{staticClass:"space"}),r("button",{staticClass:"btn btn-forward",attrs:{type:"button"},on:{click:function(e){return t.$emit("change-page",".address",".client-data")}}},[t._v(" Далее ")])])]),r("div",{staticClass:"address disabled"},[r("h2",[t._v(t._s(t.addressTittle))]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.index,expression:"form.index",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{type:"text",placeholder:"Индекс"},domProps:{value:t.form.index},on:{input:function(e){e.target.composing||t.$set(t.form,"index",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"col"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.country,expression:"form.country",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{type:"text",placeholder:"Страна"},domProps:{value:t.form.country},on:{input:function(e){e.target.composing||t.$set(t.form,"country",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"col"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.region,expression:"form.region",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{type:"text",placeholder:"Область"},domProps:{value:t.form.region},on:{input:function(e){e.target.composing||t.$set(t.form,"region",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"col"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.city,expression:"form.city",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{type:"text",placeholder:"Город*"},domProps:{value:t.form.city},on:{blur:[function(e){return t.$v.form.city.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.form,"city",e.target.value.trim())}}}),t.$v.form.city.$error?r("span",{staticClass:"error"},[t._v(" Поле обязательно для заполнения ")]):t._e()]),r("div",{staticClass:"col"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.street,expression:"form.street",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{type:"text",placeholder:"Улица"},domProps:{value:t.form.street},on:{input:function(e){e.target.composing||t.$set(t.form,"street",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"col"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.house,expression:"form.house",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{type:"text",placeholder:"Дом"},domProps:{value:t.form.house},on:{input:function(e){e.target.composing||t.$set(t.form,"house",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"control"},[r("button",{staticClass:"btn btn-back",attrs:{type:"button"},on:{click:function(e){return t.$emit("change-page",".client-data",".address")}}},[t._v(" Назад ")]),r("div",{staticClass:"space"}),r("button",{staticClass:"btn btn-forward",attrs:{type:"button"},on:{click:function(e){return t.$emit("change-page",".documents",".address")}}},[t._v(" Далее ")])])]),r("div",{staticClass:"documents disabled"},[r("h2",[t._v(t._s(t.documentsTittle))]),r("div",[r("label",{staticClass:"title",attrs:{for:"documents"}},[t._v("Тип документа*")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.document,expression:"form.document"}],staticClass:"select",attrs:{id:"documents"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"document",e.target.multiple?r:r[0])}}},t._l(t.documents,(function(e){return r("option",{key:e.index,domProps:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),0),t.$v.form.document.$error?r("div",{staticClass:"error"},[t._v(" Поле обязательно для заполнения ")]):t._e()]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("label",{staticClass:"title",attrs:{for:"serial"}},[t._v("Серия")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.serial,expression:"form.serial",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{id:"serial",type:"text",placeholder:"Серия"},domProps:{value:t.form.serial},on:{input:function(e){e.target.composing||t.$set(t.form,"serial",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"col"},[r("label",{staticClass:"title",attrs:{for:"number"}},[t._v("Номер")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.number,expression:"form.number",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{id:"number",type:"text",placeholder:"Номер"},domProps:{value:t.form.number},on:{input:function(e){e.target.composing||t.$set(t.form,"number",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"col"},[r("label",{staticClass:"title",attrs:{for:"dateIsseud"}},[t._v("Дата выдачи")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.dateIssued,expression:"form.dateIssued"}],staticClass:"form-input",attrs:{id:"dateIssued",type:"date"},domProps:{value:t.form.dateIssued},on:{input:function(e){e.target.composing||t.$set(t.form,"dateIssued",e.target.value)}}})]),r("div",{staticClass:"col"},[r("label",{staticClass:"title",attrs:{for:"issued"}},[t._v("Кем выдан*")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.issued,expression:"form.issued",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{id:"issued",type:"text",placeholder:"Кем выдан*"},domProps:{value:t.form.issued},on:{blur:[function(e){return t.$v.form.issued.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.form,"issued",e.target.value.trim())}}}),t.$v.form.issued.$error?r("div",{staticClass:"error"},[t._v(" Поле обязательно для заполнения ")]):t._e()])]),r("div",{staticClass:"control"},[r("button",{staticClass:"btn btn-back",attrs:{type:"button"},on:{click:function(e){return t.$emit("change-page",".address",".documents")}}},[t._v(" Назад ")]),r("div",{staticClass:"space"})])]),r("div",{staticClass:"control submit"},[r("div",{staticClass:"space"}),r("button",{staticClass:"btn btn-submit",attrs:{type:"submit",disabled:t.$v.$invalid}},[t._v(" Отправить форму ")]),r("div",{staticClass:"space"})])])},n=[],l=r("b5ae"),u={name:"Full",props:["clientTittle","addressTittle","documentsTittle"],data:function(){return{sex:[{value:"male",label:"Мужчина"},{value:"female",label:"Женщина"}],groupClients:[{value:"VIP",label:"VIP"},{value:"Problem",label:"Проблемные"},{value:"OMS",label:"ОМС"}],doctor:[{value:"Ivanov",label:"Иванов"},{value:"Zakharov",label:"Захаров"},{value:"Chernysheva",label:"Чернышева"}],documents:[{value:"Passport",label:"Паспорт"},{value:"birthCertificate",label:"Св-во о рождении"},{value:"driveLicense",label:"Вод. удостоверение"}],form:{firstName:"",lastName:"",patronomic:"",dateBirth:"",tel:"",sex:"male",groupClients:["OMS"],doctor:"Ivanov",noSms:!1,index:"",country:"",region:"",city:"",street:"",house:"",document:"Passport",serial:"",number:"",dateIssued:"",issued:""}}},validations:{form:{firstName:{required:l["required"]},lastName:{required:l["required"]},dateBirth:{required:l["required"]},tel:{required:l["required"],validFormat:function(t){return/^7\d{10}$/.test(t)}},groupClients:{required:l["required"]},city:{required:l["required"]},document:{required:l["required"]},issued:{required:l["required"]}}}},c=u,m=r("2877"),d=Object(m["a"])(c,i,n,!1,null,null,null),f=d.exports,p={name:"App",components:{Full:f},methods:{changePage:function(t,e){var r=document.querySelector(t),o=document.querySelector(e);r.classList.remove("disabled"),o.classList.add("disabled")},someAction:function(){alert("Форма отправлена")}}},v=p,g=(r("5c0b"),Object(m["a"])(v,a,s,!1,null,null,null)),b=g.exports,C=r("1dce"),h=r.n(C);o["a"].use(h.a),o["a"].config.productionTip=!1,o["a"].config.devtools=!0,new o["a"]({render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){},cf05:function(t,e,r){t.exports=r.p+"img/logo.74e019b1.png"}});
//# sourceMappingURL=app.eaf8ccec.js.map