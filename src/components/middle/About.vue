<template>
  <section id="about">
    <div class="row no-gutters">
      <div class="col-md-5">
        <div class="about1">
          <img class="image1 img-fluid" src="../../assets/1.jpg">
        </div>
      </div>
      <div class="col-md-7">
        <div class="text">
          <h1>Who<span style="color: #ff5d5d;"> We Are</span></h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</h2>
          <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum. </h5>
          <button @click="viewall" class="btn button3">View All</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  methods : {
    viewall(){
      console.log('View ALl Text')
    }
  }
}
</script>

<style lang="scss">
@import "/sass/variable";
@import "/sass/global";

#about{
  padding: 40px 0;
}
.about1{
  padding: 37px 0;
  width: 80%;
  height: 500px;
  background-color: rgb(60, 72, 88);
}
.image1{
  max-width: 100%;
  margin-left: 60px;
}

.text{
  padding: 0px 20px;
  @include transform(translateY(30%));

}
.button3{
  @extend %botton;
  background-color: $red-color;
  margin: 15px 0;
}
</style>
