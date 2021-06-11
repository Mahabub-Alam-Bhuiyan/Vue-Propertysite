<template>
  <section id="service">
    <div class="container">
      <div class="ser_text text-center">
        <h1 class="ser_text_1">Discover <span style="color: #ff5d5d;"> Our Services</span></h1>
        <div class="text_2"><p></p></div>
        <h4>We provide professional solutions for local property owners</h4>
      </div>
      <div class="row service2">
        <div v-for="item in items" :key="item" class="col-sm-6 col-md-4">
          <div class="circle text-center">
            <img class="" src="../../assets/house.png">
          </div>
          <h2 style="color: #ff5d5d;">{{ item.title }}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>
        </div>
<!--        <div class="col-sm-6 col-md-4">-->
<!--          <div class="circle">-->
<!--            <img class="" src="../../assets/man.png">-->
<!--          </div>-->
<!--          <h2 style="color: #ff5d5d;">Tenant Screening</h2>-->
<!--          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.-->
<!--            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>-->
<!--        </div>-->
<!--        <div class="col-sm-6 col-md-4">-->
<!--          <div class="circle">-->
<!--            <img class="" src="../../assets/maintain.png">-->
<!--          </div>-->
<!--          <h2 style="color: #ff5d5d;">Maintenance</h2>-->
<!--          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.-->
<!--            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>-->
<!--        </div>-->
<!--        <div class="col-sm-6 col-md-4">-->
<!--          <div class="circle">-->
<!--            <img class="" src="../../assets/coleection.png">-->
<!--          </div>-->
<!--          <h2 style="color: #ff5d5d;">Rent Collection</h2>-->
<!--          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.-->
<!--            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>-->
<!--        </div>-->
<!--        <div class="col-sm-6 col-md-4">-->
<!--          <div class="circle">-->
<!--            <img class="" src="../../assets/property.png">-->
<!--          </div>-->
<!--          <h2 style="color: #ff5d5d;">Property Inspections </h2>-->
<!--          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.-->
<!--            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>-->
<!--        </div>-->
<!--        <div class="col-sm-6 col-md-4">-->
<!--          <div class="circle">-->
<!--            <img class="" src="../../assets/finan.png">-->
<!--          </div>-->
<!--          <h2 style="color: #ff5d5d;">Financial Reporting</h2>-->
<!--          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.-->
<!--            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>-->
<!--        </div>-->
      </div>
      <div class="row">
        <div class="col-sm-12">
          <button class="btn button4">View All</button>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'Services',
  data() {
   return{
     items: [
       { title: 'Property Marketing' },
       { title: ' Tenant Screening' },
       { title: ' Maintenance' },
       { title: ' Rent Collection' },
       { title: ' Property Inspections' },
       { title: ' Financial Reporting' },


     ]
   }
  }

}

</script>

<style lang="scss">
@import "/sass/variable";
@import "/sass/global";


#service{
  padding: 20px 0 40px 0;
}
.ser_text_1{
  padding: 10px 0;
}
.text_2{
  border-top: 3px solid $red-color;
  width: 200px;
  margin: 0 auto;
}
.service2{
  text-align: center;
  padding: 30px 0 15px 0;
}
.service2 p{
  word-break: keep-all;
  padding: 10px 0;
}

.circle{
  margin: 15px auto;
  background-color: rgb(60, 72, 88);
  width: 100px;
  height: 100px;
  border-radius: 50% ;
  text-align: center;
  padding: 20px;
}
.button4{
  @extend %botton;
  text-align: center;
  background-color: $red-color;
  margin-left: 50%;
  @include transform(translateX(-50%));

}
</style>
