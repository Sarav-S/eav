(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{176:function(e,t,i){"use strict";i.r(t);var a=i(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("p",[e._v("Entity–attribute–value model (EAV) is a data model to encode, in a space-efficient manner, entities where the number of attributes (properties, parameters) that can be used to describe them is potentially vast, but the number that will actually apply to a given entity is relatively modest.")]),e._v(" "),i("blockquote",[i("p",[i("a",{attrs:{href:"https://en.wikipedia.org/wiki/Entity%E2%80%93attribute%E2%80%93value_model",target:"_blank",rel:"noopener noreferrer"}},[e._v("wikipedia"),i("OutboundLink")],1)])]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"when-to-use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#when-to-use","aria-hidden":"true"}},[this._v("#")]),this._v(" When to Use")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("p",[this._v("Let us consider a situation where a number of different attributes can be used to describe an entity, but only few attributes actually apply to each one. One option is to create a table with a column representing each attribute; this is suitable for entity with a fixed number of attributes, where all or most attributes have values for a most objects. However, in our case we would end up with records where "),t("strong",[this._v("majority of columns would be empty")]),this._v(", because attributes may be unknown or inapplicable. To solve the above problem you can apply the EAV (Entity, Attribute, Value) model.")])]),this._v(" "),t("li",[t("p",[this._v("Have a loose schema that is likely to change over time. Table holding attributes describing an entity is not limited to a specific number of columns, meaning that it doesn't require a schema redesign every time new attribute needs to be introduced. The number of attributes can grow vertically as the database evolves, without the need for structure changes.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"limitation-of-eav"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limitation-of-eav","aria-hidden":"true"}},[this._v("#")]),this._v(" Limitation of EAV")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("In EAV model the entity data is more fragmented and so selecting an entire entity record requires multiple table joins. Check Flat Table.")])])}],!1,null,null,null);t.default=n.exports}}]);