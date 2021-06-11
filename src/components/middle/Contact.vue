<template>
  <section id="contact">
    <div class="layer">

      <div class="container">
        <div class="ser_text text-center">
          <h1 class="ser_text_1">Contact <span style="color: #ff5d5d;"> Us</span></h1>
          <div class="text_2"><p></p></div>
        </div>
        <form @submit.prevent="submit"  action="" class="form" method="dialog" enctype="multipart/form-data" novalidate autocomplete="on">
          <div class="row">
            <div class="col-sm-6">

              <input v-model="name" type="text" name="name" class="group-item" placeholder="Your Name">

            </div>
            <div class="col-sm-6">

              <input v-model="number" type="number" name="number" class="group-item" placeholder="Phone Number">

            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">

              <input v-model="email" type="email" name="email" class="group-item" placeholder="Email Address">

            </div>
            <div class="col-sm-6">

              <input v-model="address" type="text" name="address" class="group-item" placeholder="Address">

            </div>

          </div>
          <div class="row">
            <div class="col-sm-12">
              <textarea v-model="discription" name="discription" id="#" class="group-item massage" cols="60" rows="7" placeholder="Your Feedback"></textarea>
            </div>
            <button class="btn button4 btn4">Send Now</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data(){
    return{
      name: '',
      email: '',
      number: '',
      address: '',
      discription: ''

    }
  },
  methods:{
    submit(){
      confirm("Your Submission Done")
    }
  }

}

</script>

<style lang="scss">
@import "/sass/variable";
@import "/sass/global";

#contact{
  background-image: url(../../assets/contact_background.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: auto;
  color: white;

}
.layer{
  background-color: rgb(25, 36, 51,.9);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 40px 0;
}
.ser_text{
  padding-bottom: 20px;
}
.group-item{
  margin: 10px;
  width: 100%;
  padding: 15px 12px;
  border: 1px solid transparent;
  background-color: rgb(239, 242, 247);
}
.group-item:focus{
  outline: 0;
}
.massage{
  margin-bottom: 40px !important;
}
</style>
