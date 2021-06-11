<template>
  <section id="subscrive">
    <div class="container">
      <div class="sub_text text-center">
        <h1>For Get Our Latest News & luxury Apartment
          <span style="color: #ff5d5d;">Subscribe</span>  Our Newsletter</h1>

        <form  @submit.prevent="subscribe" class="sub_btn">
          <input v-model="email" type="email" name="email" class="group-item group-item2" placeholder="Email Address">
          <button class="btn btn5">subscrive</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Subscribe',
  data(){
    return{
      email: ''
    }
  },
  methods:{
    subscribe(){
     alert(this.email + " Has benn Sebscribed")
    }
  }
}

</script>

<style lang="scss">
@import "/sass/variable";
@import "/sass/global";

#subscrive{
  padding: 50px 20px;

}
.sub_text h1{
  font-size: 44px;
  font-weight: bold;
}
.sub_btn{
  display: flex;
  max-width: 500px;
  text-align: center;
  border: 1px solid black;
  margin: 30px auto;
}

.group-item2{
  margin: 0 !important;
  background-color: transparent !important;
  min-width: 70%;

}
.btn5{
  padding: 15px 12px;
  border-radius: 0 !important;
  text-align: center;
  background-color: $red-color;
  min-width: 30%;
}
</style>
