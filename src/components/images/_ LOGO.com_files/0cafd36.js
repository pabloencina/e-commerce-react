(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{1397:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(1),o=(n(19),n(21)),r=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(data){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.a.debug("Pushing dataLayer event:",data),window.dataLayer.push(data);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},2090:function(e,t,n){"use strict";n.r(t);var c=n(140),o=n(179),r=n(1397),m=n(345);function d(e,t){Object(r.a)({event:e,ecommerce:{items:t}})}o.a.$on(c.a.EcommerceImpressions,(function(e){var t=!1,n=[];e.forEach((function(e,c){n.push(e),t=!0,(c+1)%20==0&&(d("view_item_list",n),n=[],t=!1)})),t&&d("view_item_list",n)})),o.a.$on(c.a.EcommerceClicked,(function(e){return d("select_item",e)})),o.a.$on(c.a.EcommerceDetailView,(function(e){return d("view_item",e)})),o.a.$on(c.a.EcommerceAddToCart,(function(e){return d("add_to_cart",e)})),o.a.$on(c.a.EcommerceRemoveFromCart,(function(e){d("remove_from_cart",e)})),o.a.$on(c.a.EcommerceCheckout,(function(e){return d("begin_checkout",e)})),o.a.$on(c.a.EcommercePurchase,(function(e){Object(r.a)({event:"purchase",ecommerce:{purchase:e}})})),o.a.$on(c.a.EcommerceAddToWishlist,(function(e){d("add_to_wishlist",e)})),o.a.$on(c.a.EcommerceViewCart,(function(e){return d("view_cart",e)})),o.a.$on(c.a.EcommerceSelectContent,(function(e){var t=e.list,n=void 0===t?"editor":t,c=e.type,o=e.id;Object(r.a)({event:"select_content",ecommerce:{content_type:c,item_id:o,list:n}}),m.b.track(m.a.CONTENT_SELECTED,{content_type:c,item_id:o,list:n})}))}}]);
//# sourceMappingURL=0cafd36.js.map