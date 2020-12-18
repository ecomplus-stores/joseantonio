/*! For license information please see chunk.9ebbc4a1d187e35069e9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{167:function(t,e,s){"use strict";s(186)},185:function(t,e,s){"use strict";var i={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter(){return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find((({path:t})=>t===this.href))))}}},o=s(53),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.isRouter?"router-link":"a",{tag:"component",attrs:{href:t.isRouter?null:t.href,to:t.isRouter?t.to||t.href:null}},[t._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},186:function(t,e,s){var i=s(213);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(166).default)("fd5c67d2",i,!0,{})},187:function(t,e,s){"use strict";s(14),s(5);var i=s(27),o=s(89),a=s(70);var n={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:()=>({zoom:null,big:800,[i.$ecomConfig.get("default_img_size")||"normal"]:400})},lozadOptions:{type:Object,default:()=>({rootMargin:"350px 0px",threshold:0})}},data:()=>({sources:[],height:null,opacity:null}),computed:{defaultImgObj(){return"object"==typeof this.src&&this.src?Object(o.a)(this.src)||this.src:{}},localFallbackSrc(){const{src:t,defaultImgObj:e,fallbackSrc:s}=this;if(s)return s;const i="object"==typeof t?t.zoom?t.zoom.url:e.url:t;return i?i.replace(/\.webp$/,""):this.placeholder},localAlt(){const{alt:t,src:e,defaultImgObj:s}=this;return t||(e?s.alt||"Product":"No image")}},methods:{updateSources(){const t=[];let e;if("object"==typeof this.src){const{clientWidth:t,clientHeight:s}=this.$el,i=((t,e,s,i)=>{let o,a;for(const n in i){const r=i[n];if(void 0!==r&&t[n]){if(void 0!==a)if(null===r){if(a>=e)continue}else if(r<e||r-50<=s||null!==a&&r>a)continue;o=n,a=r}}return o})(this.src,t,s,this.containerBreakpoints),o=this.src[i],{url:a,size:n}=o||this.defaultImgObj;if(e=a,t&&n&&this.canCalcHeight){const[e,s]=n.split("x").map((t=>parseInt(t,10)));s&&(this.height="".concat(t>=e?s:t*s/e,"px"))}}else e=this.src;e&&(e.endsWith(".webp")?t.push({srcset:e,type:"image/webp"},{srcset:/\/imgs\/[0-9]{3}px/.test(e)?e.replace(/\/imgs\/[0-9]{3}px/,""):e.replace(/\.webp$/,""),type:"image/".concat(".png"===e.substr(-9,4)?"png":"jpeg")}):t.push({srcset:e})),this.sources=t}},mounted(){this.updateSources(),this.$nextTick((()=>{const t=this.$el;Object(a.a)(t,{...this.lozadOptions,loaded:t=>{const{localFallbackSrc:e}=this,s="IMG"===t.tagName?t:t.lastChild;s.style.opacity=0,s.onerror=function(){console.error(new Error("Image load error"),this),t.style.display="none";const s=document.createElement("IMG");s.src=e,t.parentNode.insertBefore(s,t.nextSibling)},s.onload=()=>{this.opacity=0,t.classList.add("loaded"),this.$nextTick((()=>{this.opacity=s.style.opacity=null,this.$emit("load")}))}}}).observe()}))}},r=(s(167),s(53)),c=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var i=t.srcset,o=t.type;return s("source",{key:e,attrs:{srcset:i,type:o}})})):s("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=c.exports},188:function(t,e,s){"use strict";var i=s(28),o=s(40),a=s(41),n=s(42),r=s(80);const c=(t,e)=>{const{type:s,value:i}=e;if(i)return"percentage"===s?t*(100-i)/100:t-i};var l={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,isAmountTotal:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0},discountLabel:this.discountText}},computed:{i19asOf:()=>Object(o.a)(i.n),i19from:()=>Object(o.a)(i.tb),i19interestFree:()=>Object(o.a)(i.Fb),i19of:()=>Object(o.a)(i.kc),i19to:()=>Object(o.a)(i.xd),i19upTo:()=>Object(o.a)(i.Ed),price(){const t=Object(a.a)(this.product);return this.extraDiscount.value?c(t,this.extraDiscount):t},comparePrice(){return Object(n.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(a.a)(this.product):void 0},priceWithDiscount(){return c(this.price,this.discount)},installmentValue(){if(this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:r.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const e=t.min_installment||5,s=parseInt(this.price/e,10);this.installmentsNumber=Math.min(s,t.max_number)}},updateDiscount(t){!t||t.min_amount&&!(t.min_amount<=this.price)||this.isAmountTotal&&"total"!==t.apply_at||(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel="via ".concat(t.label)))}},watch:{price:{handler(t){this.$emit("fix-price",t)},immediate:!0}},created(){const t="object"==typeof window&&window.storefront;if(this.discountOption)this.updateDiscount(this.discountOption);else if(t){const e=()=>{const e=t.info&&t.info.apply_discount;if(e){const t=e.available_extra_discount;return t&&(this.extraDiscount=t),Object.keys(e).length>0}return!1};e()||t.on("info:apply_discount",e)}if(this.installmentsOption)this.updateInstallments(this.installmentsOption);else if(t){const e=()=>{const e=t.info&&t.info.list_payments;return!!e&&(this.updateInstallments(e.installments_option),this.updateDiscount(e.discount_option),Object.keys(e).length>0)};e()||t.on("info:list_payments",e)}}},d=(s(167),s(53)),u=Object(d.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?s("span",{staticClass:"prices__compare"},[t.isLiteral?[s("small",[t._v(t._s(t.i19from))]),s("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),s("small",[t._v(t._s(t.i19to))])]:s("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),s("strong",{staticClass:"prices__value"},[t._v(" "+t._s(t.formatMoney(t.price))+" ")]),s("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.installmentsNumber>1?s("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?s("small",[t._v(" "+t._s(t.i19upTo)+" ")]):t._e(),t._v(" "+t._s(t.installmentsNumber)+"x "),t.isLiteral?s("small",[t._v(" "+t._s(t.i19of)+" ")]):t._e(),s("span",[t._v(" "+t._s(t.formatMoney(t.installmentValue))+" ")]),!t.monthlyInterest&&t.isLiteral?s("small",[t._v(" "+t._s(t.i19interestFree)+" ")]):t._e()]):t._e(),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?s("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[s("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),s("small",[t._v(" "+t._s(t.discountLabel)+" ")])]:[s("small",[t._v(" "+t._s(t.i19asOf)+" ")]),s("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")])]],2):t._e()])],1)}),[],!1,null,null,null);e.a=u.exports},189:function(t,e,s){"use strict";s(50);var i=s(28),o=s(40),a=s(22),n=s(82),r=s(42),c=s(41),l=s(31),d=s.n(l),u=s(4),p=s(9),h=s(185),b=s(187),m=s(188);const g=(t,e)=>{if("object"==typeof window){t="productCard".concat(t,"Html");const s="function"==typeof window[t]?window[t](e):window[t];if("string"==typeof s)return s}};var f={name:"ProductCard",components:{ALink:h.a,APicture:b.a,APrices:m.a},props:{product:Object,productId:String,isSmall:Boolean,headingTag:{type:String,default:"h3"},buyText:String,transitionClass:{type:String,default:"animated fadeIn"},canAddToCart:{type:Boolean,default:!0},isLoaded:Boolean,installmentsOption:Object,discountOption:Object},data:()=>({body:{},isLoading:!1,isWaitingBuy:!1,isHovered:!1,error:""}),computed:{i19outOfStock:()=>Object(o.a)(i.vc),i19unavailable:()=>Object(o.a)(i.Bd),ratingHtml(){return g("Rating",this.body)},buyHtml(){return g("Buy",this.body)},footerHtml(){return g("Footer",this.body)},name(){return Object(a.a)(this.body)},strBuy(){return this.buyText||"object"==typeof window&&window.productCardBuyText||Object(o.a)(i.s)},isInStock(){return Object(n.a)(this.body)},isActive(){return this.body.available&&this.body.visible&&this.isInStock},discount(){const{body:t}=this;return Object(r.a)(t)?Math.round(100*(t.base_price-Object(c.a)(t))/t.base_price):0}},methods:{setBody(t){this.body=Object.assign({},t),delete this.body.body_html,delete this.body.body_text,delete this.body.inventory_records,delete this.body.price_change_records},fetchItem(){this.productId&&(this.isLoading=!0,Object(u.g)({url:"/products/".concat(this.productId,".json")}).then((({data:t})=>{this.$emit("update:product",t),this.setBody(t),this.$emit("update:is-loaded",!0)})).catch((t=>{console.error(t),this.body.name&&this.body.slug&&this.body.pictures||(this.error=Object(o.a)(i.O))})).finally((()=>{this.isLoading=!1})))},buy(){const t=this.body;this.$emit("buy",{product:t}),this.canAddToCart&&(this.isWaitingBuy=!0,Object(u.g)({url:"/products/".concat(t._id,".json")}).then((({data:e})=>{const i=["variations","customizations","kit_composition"];for(let t=0;t<i.length;t++){const o=e[i[t]];if(o&&o.length)return Promise.all([s.e(0),s.e(2),s.e(6),s.e(19)]).then(s.bind(null,378)).then((t=>{new d.a({render:s=>s(t.default,{props:{product:e}})}).$mount(this.$refs.quickview)}))}const{quantity:o,price:a}=e;p.a.addProduct({...t,quantity:o,price:a})})).catch((e=>{console.error(e),window.location="/".concat(t.slug)})).finally((()=>{this.isWaitingBuy=!1})))}},created(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}},y=(s(167),s(53)),_=Object(y.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-card",class:{"product-card--inactive":t.body._id&&!t.isActive,"product-card--small":t.isSmall},attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku},on:{mouseover:function(e){t.isHovered=!0}}},[s("transition",{attrs:{"enter-active-class":t.transitionClass}},[t.isLoading?t._e():s("section",[t._t("discount-tag",[t.isActive&&t.discount>0?s("span",{staticClass:"product-card__offer-stamp"},[s("i",{staticClass:"fas fa-arrow-down"}),t._v(" "),s("b",[t._v(t._s(t.discount))]),t._v("% ")]):t._e()],null,{discount:t.discount}),t._t("body",[s("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("header"),s("div",{staticClass:"product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2).reverse(),(function(e,i){return 1===t.body.pictures.length||1===i||t.isHovered?s("a-picture",{key:i,staticClass:"product-card__picture",attrs:{src:e,"can-calc-height":!1}}):t._e()})):s("a-picture",{staticClass:"product-card__picture"})],2),t._t("title",[s(t.headingTag,{tag:"component",staticClass:"product-card__name"},[t._v(" "+t._s(t.name)+" ")])])],2)]),t._t("rating",[t._m(0)]),t.body.available&&t.body.visible?t.isInStock?[t._t("prices",[s("a-prices",{staticClass:"product-card__prices",attrs:{product:t.body,"installments-option":t.installmentsOption,"discount-option":t.discountOption}})]),s("div",{staticClass:"product-card__buy fade",on:{click:t.buy}},[t._t("buy",[t.buyHtml?s("div",{domProps:{innerHTML:t._s(t.buyHtml)}}):t._e(),s("button",{staticClass:"btn btn-primary",class:t.isSmall?"btn-sm":"btn-block",attrs:{type:"button",disabled:t.isWaitingBuy}},[t.isWaitingBuy?s("span",{staticClass:"product-card__buy-loading spinner-grow spinner-grow-sm",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e(),t._t("buy-button-content",[s("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")])],2)])],2)]:t._t("out-of-stock",[s("p",{staticClass:"badge badge-dark"},[t._v(" "+t._s(t.i19outOfStock)+" ")])]):t._t("unavailable",[s("p",{staticClass:"badge badge-warning"},[t._v(" "+t._s(t.i19unavailable)+" ")])]),t._t("footer",[t.footerHtml?s("div",{domProps:{innerHTML:t._s(t.footerHtml)}}):t._e()])],2)]),t.isLoading?[t._t("default"),t.error?s("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[t._v(" "+t._s(t.error)+" ")]):t._e()]:t._e(),s("div",{ref:"quickview"})],2)}),[function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"product-card__rating",attrs:{"data-sku":t.body.sku},domProps:{innerHTML:t._s(t.ratingHtml)}})}],!1,null,null,null);e.a=_.exports},213:function(t,e,s){(e=s(165)(!1)).push([t.i,"",""]),t.exports=e},221:function(t,e,s){"use strict";s.r(e);s(50),s(5);var i=s(1),o=s(24),a=s(31),n=s.n(a),r=s(70),c=s(82),l=s(67),d=s(189),u=(t={},e="product-card")=>{t.buyText&&(window.productCardBuyText=t.buyText),t.buy&&(window.productCardBuyHtml=t.buy),t.footer&&(window.productCardFooterHtml=t.footer);const s=window.storefront&&window.storefront.getScopedSlots,i=document.querySelectorAll(".".concat(e)),o=[];for(let t=0;t<i.length;t++)if(i[t]){const{productId:e,toRender:s}=i[t].dataset;s&&-1===o.indexOf(e)&&o.push(e)}let a;if(o.length>=4&&o.length<=70&&!t.skipSearchApi){const t=new l.a;a=t.setPageSize(o.length).setProductIds(o).fetch(!0,{timeout:5e3}).then((()=>{const e=t.getItems();for(let t=0;t<2;t++)u(i[t]);return e})).catch((t=>{console.error(t)}))}else a=Promise.resolve();const u=i=>{if(i){const{productId:o,sku:r,toRender:l}=i.dataset;if(l){let l;a.then((t=>{Array.isArray(t)&&(l=t.find((({_id:t})=>t===o)))})).finally((()=>{let a;if(l){if(a=!0,!l.available||!l.visible||!Object(c.a)(l)){const t=i.parentNode&&i.parentNode.parentNode;t&&"LI"===t.tagName&&t.parentNode.appendChild(t)}}else{const t=i.parentNode;if(t&&(l=t.dataset.product,"string"==typeof l))try{l=JSON.parse(l)}catch(t){l=void 0}}((i,o,a,r,c)=>{new n.a({render:n=>n(d.a,{class:"product-card"!==e?e:null,attrs:{"data-product-id":o,"data-sku":a},props:{...t.props,productId:o,product:r,isLoaded:c,transitionClass:null},scopedSlots:"function"==typeof s?s(i,n):void 0})}).$mount(i)})(i,o,r,l,a)}))}}};Object(r.a)(i,{rootMargin:"350px 0px",threshold:0,load:u}).observe()};const p=window.location.pathname.startsWith("/app/"),h=[],b="localhost"===window.location.hostname?50:1,m=(t,e)=>{const s=new Promise((s=>{setTimeout((()=>{const a=window._widgets&&window._widgets[t];if(a&&a.active&&(!a.desktopOnly||!i.isMobile)&&(p?a.enableCheckout:!a.disablePages))return e().then((e=>{"function"==typeof e.default&&e.default(a.options),o.a.emit("widget:".concat(t)),console.log("Widget loaded: ".concat(t))})).catch(console.error).finally(s);s()}),b)}));h.push(s)},{resource:g}=document.body.dataset;p||"products"!==g||m("@ecomplus/widget-product",(()=>Promise.all([s.e(0),s.e(2),s.e(6),s.e(29)]).then(s.bind(null,364)))),Promise.all(h).then((()=>{m("@ecomplus/widget-product-card",(()=>Promise.resolve({default:u}))),"/search"!==window.location.pathname&&"categories"!==g&&"brands"!==g||m("@ecomplus/widget-search-engine",(()=>Promise.all([s.e(3),s.e(16)]).then(s.bind(null,365))));const t=t=>{"function"==typeof window.requestIdleCallback?setTimeout((()=>window.requestIdleCallback(t)),200):setTimeout(t,800)};t((()=>{o.a.emit("load:lcp"),p||(m("@ecomplus/widget-search",(()=>Promise.all([s.e(3),s.e(20)]).then(s.bind(null,373)))),m("@ecomplus/widget-minicart",(()=>s.e(15).then(s.bind(null,374)))),m("@ecomplus/widget-user",(()=>s.e(18).then(s.bind(null,375))))),Promise.all(h).then((()=>{t((()=>o.a.emit("load:components"))),m("@ecomplus/widget-tag-manager",(()=>s.e(23).then(s.bind(null,379)))),m("@ecomplus/widget-analytics",(()=>s.e(21).then(s.bind(null,380)))),m("@ecomplus/widget-fb-pixel",(()=>s.e(28).then(s.bind(null,376)))),m("@ecomplus/widget-gmc-ratings",(()=>s.e(22).then(s.bind(null,366)))),m("@ecomplus/widget-ebit",(()=>s.e(27).then(s.bind(null,367)))),m("@ecomplus/widget-compre-confie",(()=>s.e(26).then(s.bind(null,368))))}))}))}))},70:function(t,e,s){"use strict";const i="undefined"!=typeof document&&document.documentMode,o={rootMargin:"0px",threshold:0,load(t){if("picture"===t.nodeName.toLowerCase()){let e=t.querySelector("img"),s=!1;null===e&&(e=document.createElement("img"),s=!0),i&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),s&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){const e=t.children;let s;for(let t=0;t<=e.length-1;t++)s=e[t].getAttribute("data-src"),s&&(e[t].src=s);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));let e=",";if(t.getAttribute("data-background-delimiter")&&(e=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage=`url('${t.getAttribute("data-background-image").split(e).join("'),url('")}')`;else if(t.getAttribute("data-background-image-set")){const s=t.getAttribute("data-background-image-set").split(e);let i=s[0].substr(0,s[0].indexOf(" "))||s[0];i=-1===i.indexOf("url(")?`url(${i})`:i,1===s.length?t.style.backgroundImage=i:t.setAttribute("style",(t.getAttribute("style")||"")+`background-image: ${i}; background-image: -webkit-image-set(${s}); background-image: image-set(${s})`)}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded(){}};function a(t){t.setAttribute("data-loaded",!0)}const n=t=>"true"===t.getAttribute("data-loaded"),r=(t,e=document)=>t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t);e.a=function(t=".lozad",e={}){const{root:s,rootMargin:i,threshold:c,load:l,loaded:d}=Object.assign({},o,e);let u;"undefined"!=typeof window&&window.IntersectionObserver&&(u=new IntersectionObserver(((t,e)=>(s,i)=>{s.forEach((s=>{(s.intersectionRatio>0||s.isIntersecting)&&(i.unobserve(s.target),n(s.target)||(t(s.target),a(s.target),e(s.target)))}))})(l,d),{root:s,rootMargin:i,threshold:c}));const p=r(t,s);for(let t=0;t<p.length;t++)(h=p[t]).getAttribute("data-placeholder-background")&&(h.style.background=h.getAttribute("data-placeholder-background"));var h;return{observe(){const e=r(t,s);for(let t=0;t<e.length;t++)n(e[t])||(u?u.observe(e[t]):(l(e[t]),a(e[t]),d(e[t])))},triggerLoad(t){n(t)||(l(t),a(t),d(t))},observer:u}}}},0,[0,2,6,29,3,16]]);
//# sourceMappingURL=chunk.9ebbc4a1d187e35069e9.js.map