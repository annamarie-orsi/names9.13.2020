
/*================ HOMEPAGE NAV ================*/

// window.onscroll = function() { namesFunction()};
//
// var navbar = document.getElementById("navbarintro");
// var wholeText = document.getElementById("megamenuappear");
// var itemText = document.getElementById("lifeitem");
// var logo = document.getElementById("names_2_logo");
// var bkgimage = document.getElementById("backgroundimagenav");
// var intro = document.getElementById("introdiv");
// var eIn = document.getElementById('megamenu');
// var eInMobile = document.getElementById('megamenumobile');
// var eOut = document.getElementById('megamenuappear');
// var eOutMobile = document.getElementById('megamenuappearmobile');
// intro.offsetBottom = intro.offsetTop + intro.offsetHeight;
// var sticky = intro.offsetBottom;
//
// function namesFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("navbar-names")
//     navbar.classList.remove("navbar-names-intro")
//     bkgimage.classList.add("bg-names")
//     logo.classList.remove("d-none")
//     wholeText.classList.remove("fc-names")
//     itemText.classList.remove("fc-names")
//   } else {
//     navbar.classList.add("navbar-names-intro")
//     navbar.classList.remove("navbar-names")
//     bkgimage.classList.remove("bg-names")
//     logo.classList.add("d-none")
//     wholeText.classList.add("fc-names")
//     itemText.classList.add("fc-names")
//   }
// }
//
// // navbar mousenter
//
// navbar.addEventListener("mouseenter",function(){
//
//   navbar.classList.add("navbar-names")
//   navbar.classList.remove("navbar-names-intro")
//   bkgimage.classList.add("bg-names")
//   logo.classList.remove("d-none")
//   wholeText.classList.remove("fc-names")
//   itemText.classList.remove("fc-names")
//
// });
//
// navbar.addEventListener("mouseleave",function() {
//
//   if (window.pageYOffset >= sticky){
//
//     navbar.classList.add("navbar-names")
//     navbar.classList.remove("navbar-names-intro")
//     bkgimage.classList.add("bg-names")
//     logo.classList.remove("d-none")
//     wholeText.classList.remove("fc-names")
//     itemText.classList.remove("fc-names")
//
//   } else {
//
//     navbar.classList.add("navbar-names-intro")
//     navbar.classList.remove("navbar-names")
//     bkgimage.classList.remove("bg-names")
//     logo.classList.add("d-none")
//     wholeText.classList.add("fc-names")
//     itemText.classList.add("fc-names")
//
//   }});
//
//
// eOut.addEventListener("mouseenter",function(){
//   eIn.classList.remove('d-none');
// });
// eIn.addEventListener("mouseleave",function(){
//   this.classList.add('d-none');
// });
//
//
// eOutMobile.addEventListener("click",function(){
//   eInMobile.classList.remove('d-none');
// });
// eOutMobileIndex.addEventListener("click",function(){
//   eInMobileIndex.classList.remove('d-none');
// });


/*================ MODAL MOBILE ================*/



/*================ CART================*/


// function checkSections() {
//
//   var vendor = "{{product.vendor}}";
//   var divs = document.getElementsByTagName("div"), i=divs.length;
//   while (i--) {
//    if (divs[i].getAttribute('id') === vendor){
//      var divs[i] = vendorDiv;
//      if (vendorDiv) {
//        products.forEach(product => {
//        const titleNode = document.createElement("h1");
//        titleNode.innerHTML = product.title;
//
//        const productNode = document.createElement("P")
//        productNode.innerHTML = product.title;
//        const productPrice = document.createElement("P");
//        productPrice.innerHTML = product.price;
//        const checkoutButton = document.createElement('a');
//
//        vendordiv.appendChild(titleNode);
//        vendordiv.appendChild(productNode);
//        vendordiv.appendChild(productPrice);
//        vendordiv.appendChild(checkoutButton)
//
//        else {
//
//          var newdiv= document.createElement("div");
//          newdiv.id = vendor;
//          const titleNode = document.createElement("h1");
//          titleNode.innerHTML = product.title;
//
//          const productNode = document.createElement("P")
//          productNode.innerHTML = product.title;
//          const productPrice = document.createElement("P");
//          productPrice.innerHTML = product.price;
//          const checkoutButton = document.createElement('a');
//
//          newdiv.appendChild(titleNode);
//          newdiv.appendChild(productNode);
//          newdiv.appendChild(productPrice);
//          newdiv.appendChild(checkoutButton)
//
//        }
//
//      });
//      }
//
//    }
//   }
//
// }

// function addAllItems(array){
// 	Shopify.queue = [];
// 	  var quantity = {{ cart.item_count }} ;
// 	  var newArray = array.split(',');
// 	  for (var i = 0; i < newArray.length; i++) {
// 	    product = newArray[i]
// 	    Shopify.queue.push({
// 	      variantId: product,
// 	    });
//           }
// 	  Shopify.moveAlong = function() {
// 	  // If we still have requests in the queue, let's process the next one.
// 	  if (Shopify.queue.length) {
// 	    var request = Shopify.queue.shift();
// 	    var data = 'id='+ request.variantId + '&quantity=1'
// 	    $.ajax({
// 	      type: 'POST',
//               url: '/cart/add.js',
// 	      dataType: 'json',
// 	      data: data,
// 	      success: function(res){
// 	        Shopify.moveAlong();
// 		  quantity += 1;
// 	     },
//              error: function(){
// 	     // if it's not last one Move Along else update the cart number with the current quantity
// 		  if (Shopify.queue.length){
// 		    Shopify.moveAlong()
// 		  } else {
// 		    $('#cart-number').replaceWith("<a href="/cart" id="cart-number">View cart (" + quantity + ")</a>")
// 		  }
// 	      }
//            });
//         }
// 	 // If the queue is empty, we add 1 to cart
// 	else {
// 	  quantity += 1;
// 	  addToCartOk(quantity);
// 	 }
//        };
//     Shopify.moveAlong();
//   };

//
