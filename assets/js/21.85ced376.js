(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{179:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p"),t._m(1),a("p"),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("A eloquent model with additional sweet to support EAV.")]),t._v(" "),a("p",[t._v("We makes it easy for developers to interact with a attributes by defining simple models without writing relationships or long SQL queries.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("To create a model instance")]),t._v(" "),t._m(5),a("p",[t._v("Below will create migration and model class.")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v('This works same as Eloquent. By convention, the "snake case", plural name of the class will be used as the table name unless another name is explicitly specified.')]),t._v(" "),a("p",[t._v("But when "),a("router-link",{attrs:{to:"./ideology/flat-table.html"}},[t._v("Flat Table")]),t._v(" is enabled the table name is prefixed with "),a("code",[t._v("_flat")]),t._v(".")],1),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("To create a new record in the database, create a new model instance, set attributes on the model, then save. It is the same as create a new record in eloquent.")]),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("Again it is same as eloquent.")]),t._v(" "),t._m(16),t._m(17),t._v(" "),a("p",[t._v("As the Attributes for the entity are unpredictable. we have made the model unguarded by default.")]),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("Updates can also be performed against any number of entity that match a given query.")]),t._v(" "),t._m(21)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model","aria-hidden":"true"}},[this._v("#")]),this._v(" Model")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#intorduction"}},[t._v("Intorduction")])]),a("li",[a("a",{attrs:{href:"#defining-models"}},[t._v("Defining Models")])]),a("li",[a("a",{attrs:{href:"#model-conventions"}},[t._v("Model Conventions")]),a("ul",[a("li",[a("a",{attrs:{href:"#table-names"}},[t._v("Table Names")])])])]),a("li",[a("a",{attrs:{href:"#inserting-updating-entity"}},[t._v("Inserting & Updating Entity")]),a("ul",[a("li",[a("a",{attrs:{href:"#insert"}},[t._v("Insert")])]),a("li",[a("a",{attrs:{href:"#update"}},[t._v("Update")])]),a("li",[a("a",{attrs:{href:"#mass-assignment"}},[t._v("Mass Assignment")])]),a("li",[a("a",{attrs:{href:"#mass-updates"}},[t._v("Mass Updates")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"intorduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intorduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Intorduction")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"defining-models"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defining-models","aria-hidden":"true"}},[this._v("#")]),this._v(" Defining Models")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("All EAV models extend "),s("code",[this._v("Eav\\Model")]),this._v(" class.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("php artisan eav:make:model -e product\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ php artisan eav:make:entity product \\\\App\\\\Products \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"model-conventions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-conventions","aria-hidden":"true"}},[this._v("#")]),this._v(" Model Conventions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Look at an example "),s("code",[this._v("Products")]),this._v(" model.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("App")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Eav"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Model")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Products")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Model")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ENTITY")]),t._v("  "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'product'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("const ENTITY")]),this._v(" is required value, this will be filled automaticaly when the entity is created. Under the hood the property is used to map the current model to the corresponding ENTITY.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"table-names"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-names","aria-hidden":"true"}},[this._v("#")]),this._v(" Table Names")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"inserting-updating-entity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inserting-updating-entity","aria-hidden":"true"}},[this._v("#")]),this._v(" Inserting & Updating Entity")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"insert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insert","aria-hidden":"true"}},[this._v("#")]),this._v(" Insert")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("App"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Products")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nProducts"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("create")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Flamethrower'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'sku'")]),t._v("  "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'1HJK92'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'upc'")]),t._v("  "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'SHNDUU451888'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'description'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Not a Flamethrower'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'search'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update","aria-hidden":"true"}},[this._v("#")]),this._v(" Update")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("App"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Products")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token variable"}},[t._v("$product")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Products"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("find")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token variable"}},[t._v("$product")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token property"}},[t._v("name")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Not a Flamethrower'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token variable"}},[t._v("$product")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("save")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"mass-assignment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mass-assignment","aria-hidden":"true"}},[this._v("#")]),this._v(" Mass Assignment")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/**\n * Indicates if all mass assignment is enabled.\n *\n * @var bool\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$unguarded")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("It the responsiblity of the developer to take care of mass-assignment vulnerability.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"mass-updates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mass-updates","aria-hidden":"true"}},[this._v("#")]),this._v(" Mass Updates")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[t._v("$p")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Products"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("whereNullAttribute")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'search'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("whereAttribute")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'active'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token variable"}},[t._v("$p")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("update")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'search'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);