(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{183:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"flat-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flat-table","aria-hidden":"true"}},[t._v("#")]),t._v(" Flat Table")]),t._v(" "),s("p",[t._v("Flat tables on the other hand means, storing all data in a single table instead of multiple tables. So this reduces the number of queries required and hence increases the speed.")]),t._v(" "),s("p",[t._v("So all attributes of an EAV entity become column name of a single table and all attribute data relating to an entity is stored in a single table.")]),t._v(" "),s("p",[s("strong",[t._v("To create Flat table.")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ php artisan eav:compile:entity "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("entity_code"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("This will collect all attribute, build and run the scheme.")]),t._v(" "),s("p",[s("strong",[t._v("To updated the table with value.")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ php artisan eav:compile:updater "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("entity_code"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -C 100\n")])])]),s("p",[t._v("By default it will insert 100 records in a single insert. You can increase the value using "),s("code",[t._v("-C")]),t._v(" option.")]),t._v(" "),s("p",[s("strong",[t._v("To Activate the Flat table for the entity")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ php artisan eav:flat:entity "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("entity_code"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -E "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),s("p",[s("strong",[t._v("To Deactivate the Flat table for the entity")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ php artisan eav:flat:entity "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("entity_code"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -E "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("When Flat table is enabled and if you try to insert or update a entity, it will update only the flat table.")]),t._v(" "),s("p",[t._v("You can temporarily enabled or disable flat table though the code.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$product")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Product")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Disable")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$product")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("setUseFlat")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Enable")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$product")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("setUseFlat")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])}],!1,null,null,null);a.default=n.exports}}]);