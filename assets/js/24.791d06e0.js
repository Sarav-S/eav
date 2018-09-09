(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{169:function(t,e,a){"use strict";a.r(e);var s=a(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("To create a "),a("router-link",{attrs:{to:"./ideology/entity.html"}},[t._v("Entity")])],1),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("To create a "),a("router-link",{attrs:{to:"./ideology/attribute.html"}},[t._v("Attribute")])],1),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("This is will create the migration that is needed to create the attibute and map it to the entity.")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("If the "),a("code",[t._v("type")]),t._v(" are left empty it is considered as "),a("router-link",{attrs:{to:"./ideology/static-attribute.html"}},[t._v("Static Attributes")])],1),t._v(" "),a("p",[t._v("Refer "),a("router-link",{attrs:{to:"./ideology/attribute.html#add"}},[t._v("Add Attribute")]),t._v(" for more info.")],1)]),t._v(" "),a("p",[t._v("After editing run the migration.")]),t._v(" "),t._m(8),a("p",[t._v("Thats it, you eav based model is ready now you can start doing CRUD oporations.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ php artisan eav:make:entity product \\\\App\\\\Products \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Here "),e("code",[this._v("product")]),this._v(" is the entity code and "),e("code",[this._v("\\\\App\\\\Products")]),this._v(" is the model related to the entity.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This will create the "),e("code",[this._v("Products")]),this._v(" Model file and the migration for the entity "),e("a",{attrs:{href:"#er-diagram-for-entity"}},[this._v("ER")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The migration contains schema for creating different data type like "),a("code",[t._v("varchar")]),t._v(", "),a("code",[t._v("text")]),t._v(", "),a("code",[t._v("int")]),t._v(", "),a("code",[t._v("decimal")]),t._v(", "),a("code",[t._v("datetime")]),t._v(". We will aslo have schema to create default "),a("a",{attrs:{href:"#attribute-set"}},[t._v("attribute set")]),t._v(" "),a("code",[t._v("Default")]),t._v(" and "),a("a",{attrs:{href:"#attribute-group"}},[t._v("attribute group")]),t._v(" "),a("code",[t._v("General")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ php artisan eav:make:attribute product --attributes sku:string,name:string,search:boolean,description:text \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Here "),e("code",[this._v("sku:string,name:string,search:boolean,description:text")]),this._v(" are the attributes that needs to be added to  "),e("code",[this._v("product")]),this._v(" entity.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("YOU NEED TO EDIT THE ATTRIBUTES INFO IN THE MIGRATION")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ php artisan migrate\n")])])])}],!1,null,null,null);e.default=i.exports}}]);