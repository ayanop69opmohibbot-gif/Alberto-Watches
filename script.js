fetch('products.json')
            .then(res=>res.json())            
            .then(json=>{
            var products = "";
            for(var element of json){
                if(element.showmainhome === true) {
            products += `<div class="col-md-6 col-lg-3">

            <div class="card border-0 shadow-sm h-100">
                <img src="${element.image}" class="card-img-top" alt="${element.name}">

                <div class="card-body text-center">

                    <h5 class="fw-bold">${element.name}</h5>
                    <p class="text-muted">${element.description}</p>
                    <h6 class="fw-bold">${element.price}</h6>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal${element.id}" class="btn btn-dark mt-2">View Details</a>

                </div>
            </div>
        </div>

        

        <!-- Modal -->
<div class="modal fade" id="exampleModal${element.id}" tabindex="-1" aria-labelledby="exampleModalLabel${element.id}" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content" style="background:#151515; border:1px solid #c9a24a; border-radius:0; overflow:hidden;">

      <!-- Modal Header -->
      <div class="modal-header"style="background:#111; border-bottom:1px solid #2a2a2a; padding:18px 25px;">

        <h5 class="modal-title fw-bold" id="exampleModalLabel${element.id}" style="color:#c9a24a; letter-spacing:2px;">${element.name}</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>

      </div>

      <!-- Modal Body -->
      <div class="modal-body"style="padding:25px;">
        <div class="row align-items-center g-4">

          <!-- Product Image -->
          <div class="col-md-6">
            <div style="background:#111; border:1px solid #2a2a2a; text-align:center;">

              <img src="${element.image}" alt="${element.name}" style="width:100%; height:280px; object-fit:cover;">

            </div>
          </div>


  <!-- Product Details -->
          <div class="col-md-6">

            <h2 style="color:#c9a24a; font-weight:bold; letter-spacing:1px;">${element.name}</h2>
            <div style="width:60px; height:2px; background:#c9a24a; margin:15px 0;">

            </div>

            <p style="color:#bbbbbb; line-height:1.8; font-size:15px;">${element.description}</p>

            <!-- Price -->
            <h3 style="color:white; font-weight:bold; margin-top:20px;">${element.price}</h3>

            <!-- Product Information -->
            <div style="margin-top:20px; border-top:1px solid #2a2a2a; border-bottom:1px solid #2a2a2a; padding:15px 0;">

             <p style="color:#999;margin-bottom:8px;"><b style="color:#c9a24a;">Material:</b> Premium Quality</p>
             <p style="color:#999;margin-bottom:8px;"><b style="color:#c9a24a;">Design:</b> Luxury & Elegant</p>
             <p style="color:#999;margin-bottom:8px;"><b style="color:#c9a24a;">Movement:</b> Precision Movement</p>
             <p style="color:#999;margin-bottom:0;"><b style="color:#c9a24a;">Warranty:</b> Available</p>

            </div>


            <!-- Buttons -->
            <div class="d-flex gap-2 mt-4">

              <button type="button" class="btn" style="background:#c9a24a; color:#111; font-weight:bold; border-radius:0; padding:11px 20px;">
                <i class="fa-solid fa-cart-shopping me-2"></i>
                Add to Cart
              </button>

              <button type="button" class="btn" style="background:transparent; color:#c9a24a; border:1px solid #c9a24a; font-weight:bold; border-radius:0; padding:11px 25px;">
                <i class="fa-solid fa-bag-shopping me-2"></i>Buy Now
              </button>

            </div>
          </div>
        </div>
      </div>


      <!-- Modal Footer -->
      <div class="modal-footer" style="background:#111;border-top:1px solid #2a2a2a;padding:12px 20px;">
        <button type="button" class="btn" data-bs-dismiss="modal" style="background:#333; color:white; border-radius:0; padding:8px 20px;">Close</button>

      </div>
    </div>
  </div>
</div>

                      
        `

              }
            }
              document.getElementById("productslisting").innerHTML = products;
            })


