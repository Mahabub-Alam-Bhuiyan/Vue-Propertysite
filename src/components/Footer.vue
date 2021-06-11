<template>
  <section id="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <div class="fot1">
            <img class="logo img-fluid" src=".././assets/logo.png">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
            <p><b>Follow Us :</b></p>
            <div class="fot-link">
              <p><a href="facebook.com"><i class="fab fa-facebook-f"></i></a></p>
              <p><a href="facebook.com"><i class="fab fa-twitter"></i></a></p>
              <p><a href="facebook.com"><i class="fab fa-linkedin-in"></i></a></p>
              <p><a href="facebook.com"><i class="fab fa-instagram"></i></a></p>
            </div>


          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="fot2">
            <h3><b>Tenants</b></h3>
            <p>Tenants Portal</p>
            <p>Pay Rent</p>
            <p>Repair Request</p>
            <p>Rental Search</p>
            <p>Application Process</p>
          </div>

        </div>
        <div class="col-md-6 col-lg-3">
          <div class="fot3">
            <h3><b>Partners</b></h3>
            <p><img class="img fot_img" src=".././assets/partner1.png"></p>
            <p><img class="img fot_img" src=".././assets/partner2.png"></p>
            <p><img class="img fot_img" src=".././assets/partner3.png"></p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="fot4">
            <h3><b>Get in Touch</b></h3>
            <p>Blackstone Group<br>
              265 Wickenden Street, 2nd Fl<br>
              Providence, RI 02903<br>
              (401­) 223­-2838</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- footer area start -->
  <div class="footer-2">
    <p class="last_fot text-center">Copyright @ 2021  |  All Rights Reserved </p>
  </div>

</template>

<script>
export default {
  name: "Footer"
}

</script>

<style lang="scss">
@import "/sass/variable";
@import "/sass/global";

#footer{
  padding: 50px 0;
  background-color: rgb(32, 47, 67);
  color: white;
  border-bottom: 2px solid rgb(81, 92, 108);
}

.fot-link{
  display: flex;
}
.fot-link a{
  color: white;
  padding-right: 20px;
}
.fot2 p{
  margin-bottom: 0px !important;
}
.fot_img{
  width: 70px;
  height: auto;
}
.fot1, .fot2, .fot3, .fot4, h3{
  margin-bottom: 10px !important;
}
.footer-2{
  background-color: rgb(32, 47, 67);
  padding: 20px 0;
  color: white;
}


</style>
