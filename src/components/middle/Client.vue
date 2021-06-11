<template>
  <section id="client">
    <div class="container">
      <div class="ser_text text-center">
        <h1 class="ser_text_1">What <span style="color: #ff5d5d;"> clients say</span></h1>
        <div class="text_2"><p></p></div>
        <h4>We get unbeatable results for those who partner with us</h4>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="client">
            <div class="row">
              <div class="col-sm-4">
                <img class="img img_client" src="../../assets/client.png">
                <div class="client_name text-center">
                  <p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
                  <h4>Matthew Patty</h4>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="client_text">
                  <h5>“It is a long established fact that a
                    reader will be distracted by the readable
                    content of a page when looking at its
                    layout. The point of using Lorem Ipsum
                    is that it has a more-or-less normal”</h5>
                  <div class="link">
                    <span><a href="facebook.com"><i class="fab fa-facebook-f"></i></a></span><span><a href="facebook.com"><i class="fab fa-twitter"></i></a></span>
                    <span><a href="facebook.com"><i class="fab fa-linkedin-in"></i></a></span><span><a href="facebook.com"><i class="fab fa-instagram"></i></a></span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="client">
            <div class="row">
              <div class="col-sm-4">
                <img class="img img_client" src="../../assets/client.png">
                <div class="client_name text-center">
                  <p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
                  <h4>Matthew Patty</h4>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="client_text">
                  <h5>“It is a long established fact that a
                    reader will be distracted by the readable
                    content of a page when looking at its
                    layout. The point of using Lorem Ipsum
                    is that it has a more-or-less normal”</h5>
                  <div class="link">
                    <span><a href="facebook.com"><i class="fab fa-facebook-f"></i></a></span><span><a href="facebook.com"><i class="fab fa-twitter"></i></a></span>
                    <span><a href="facebook.com"><i class="fab fa-linkedin-in"></i></a></span><span><a href="facebook.com"><i class="fab fa-instagram"></i></a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: 'Client'
}
</script>

<style lang="scss">
@import "/sass/variable";
@import "/sass/global";

#client{
  background-color: rgb(60, 72, 88);
  padding: 30px;
  color: white;
}
.client{
  padding: 30px 0;
}
.img_client{
  width: 100%;
// text-align: center;
// padding-left: 10px;
  padding-bottom: 10px;
}
.client_name p{
  color: yellow;
  margin-bottom: 0px !important;
}
.client_text h5 {
  padding: 20px 10px;
}
.link{
  text-align: center;
}
.link a{
  padding:0 20px;
  color: white;
}
</style>
