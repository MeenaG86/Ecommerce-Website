//Close offer bar
var offer=document.querySelector(".offer");
var closex=document.getElementById("close-X")

closex.addEventListener("click",function(){
    offer.style.display="none";
})
//sidenavbar
var sideNav = document.querySelector(".side-navbar-links");

function openNav() {
    sideNav.style.left = "0";
}

function closeNav() {
    sideNav.style.left = "-60%";
}

/*var productContainer = document.getElementById('products');
var searchInput = document.getElementById('searchInput');
var productlist=productContainer.querySelectorAll('.product-card');

searchInput.addEventListener('keyup', function() {
    var enteredText = event.target.value.toUpperCase();

    for (count= 0; count< productlist.length; count=count+1) {
        var productName = productlist[count].querySelector('h1').textContent;

        if(productName.toUpperCase().indexOf(enteredText) < 0) {
            productlist[count].style.display = 'none';
        }   else {  
            productlist[count].style.display = 'block';
        }
    }
});
    
// Select all checkboxes
var checkboxes = document.querySelectorAll("input[name='tags']")

// Select all product cards
var products = document.querySelectorAll(".product-card")

// Loop through checkboxes
checkboxes.forEach(function(box){

    box.addEventListener("change", function(){

        var activeFilters = []

        // collect checked values
        checkboxes.forEach(function(cb){
            if(cb.checked){
                activeFilters.push(cb.value.toUpperCase())
            }
        })

        // filter products
        products.forEach(function(product){

            var productName = product.querySelector("h1").textContent.toUpperCase()

            if(activeFilters.length === 0){
                product.style.display = "block"
            }
            else{
                var show = activeFilters.some(function(filter){
                    return productName.includes(filter)
                })

                if(show){
                    product.style.display = "block"
                }
                else{
                    product.style.display = "none"
                }
            }

        })

    })

})

var newCheck = document.querySelector("input[value='new']")
var oldCheck = document.querySelector("input[value='old']")

var products = document.querySelectorAll(".product-card")

newCheck.addEventListener("change", filterProducts)
oldCheck.addEventListener("change", filterProducts)

function filterProducts(){

    for(var i = 0; i < products.length; i++){

        var arrival = products[i].getAttribute("data-arrival")

        if(newCheck.checked && arrival === "new"){
            products[i].style.display = "block"
        }

        else if(oldCheck.checked && arrival === "old"){
            products[i].style.display = "block"
        }

        else if(!newCheck.checked && !oldCheck.checked){
            products[i].style.display = "block"
        }

        else{
            products[i].style.display = "none"
        }

    }

}*/

var productContainer = document.getElementById("products");
var searchInput = document.getElementById("searchInput");
var products = productContainer.querySelectorAll(".product-card");
var checkboxes = document.querySelectorAll("input[name='tags']");

// search event
searchInput.addEventListener("keyup", filterProducts);

// checkbox event
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", filterProducts);
}

function filterProducts(){

    var enteredText = searchInput.value.toUpperCase();

    // collect checked filters
    var activeFilters = [];

    for(var i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked){
            activeFilters.push(checkboxes[i].value.toUpperCase());
        }
    }

    for(var i=0;i<products.length;i++){

        var productName = products[i].querySelector("h1").textContent.toUpperCase();
        var arrival = products[i].getAttribute("data-arrival");

        var searchMatch = productName.indexOf(enteredText) > -1;
        var filterMatch = true;

        if(activeFilters.length > 0){
            filterMatch = false;

            for(var j=0;j<activeFilters.length;j++){

                if(productName.includes(activeFilters[j]) || arrival === activeFilters[j].toLowerCase()){
                    filterMatch = true;
                }
            }
        }

        if(searchMatch && filterMatch){
            products[i].style.display = "block";
        }
        else{
            products[i].style.display = "none";
        }

    }

}