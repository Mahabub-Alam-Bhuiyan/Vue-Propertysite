<template>
  <section id="anlysis">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-md-6">
          <div class="anlysis_text">
            <h2>Schedule a Free Portfolio Analysis</h2>
            <h6>
              <img src="../../assets/check.png"> Determine how much your rental property should earn monthly.</h6>
            <h6> <img src="../../assets/check.png"> Find out simple techniques to boost your earnings.</h6>
            <h6> <img src="../../assets/check.png"> Learn more about our property management model.
            </h6>
          </div>
        </div>
        <div class="col-md-6">
          <div class="anlysis_pic ml-auto">
            <img class="image2 img-fluid" src="../../assets/chart.jpg">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Analysis'
}

</script>

<style lang="scss">
@import "/sass/variable";
@import "/sass/global";

#anlysis{
  padding: 70px 0;
}
.anlysis_text{
  margin-top: 40%;
  @include transform(translateY(-50%));
}
.anlysis_pic{
  height: 392px;
  max-width: 80%;
  padding: 35px 0;
  background-color: rgb(60, 72, 88);
}
.image2{
  max-width: 100%;
  margin-left: -60px;
}

</style>
