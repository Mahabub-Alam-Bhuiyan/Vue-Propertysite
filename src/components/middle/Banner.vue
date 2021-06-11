<template>
  <section id="banner">
    <div class="banner">
      <div class="banner1">
        <h1>Expert<span style="color:#ff5d5d"> Property</span> Management in<br>
          Rhode Island & Southern Massachusetts</h1>
        <p>"Built for investors, by investors"<br>
          — Justin Mann, Partner</p>
      </div>
      <div class="banner2">
        <button class="btn button1">View Pricing</button>
        <button class="btn button2">Contact Us</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner'
}

</script>

<style lang="scss">
@import "../../../sass/variable";
@import "../../../sass/global";

#banner{
  background-image: url(../../assets/banner_background.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  max-width: 100%;
  padding: 115px 0;
}
#banner::before{
  background-color: rgb(66, 196, 222);
}
.banner{
  color: $head1-color;
  max-width: 43%;
  margin: 0 auto;
  text-align: center;

}
.banner1{
  padding: 30px 0;
  background-color: rgb(8, 31, 45,.7);
}

.banner1 h1{
  font-size: 36px;
  line-height: 60px;
}
.banner1 p{
  font-size: 18px;
  line-height: 60px;
}
.banner2{
  display: flex;
  justify-content: space-evenly;
  padding: 30px 0;
}
.btn:focus{
  box-shadow: none;
}
.button1 {
  @extend %botton;
  background-color: $red-color ;

}
.button2 {
  @extend %botton;
  background-color: transparent;
}
.button2:hover{
  color: white;
}

</style>
