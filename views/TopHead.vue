<template>
  <section id="header1">
    <div class="container">
      <div class="head">
        <div class="head_left">
          <p ><i class="fas fa-phone-volume"></i> (401)223-21479528</p>
        </div>
        <social-sharing>
        <div class="head_right">
          <ul>

            <li>
           <router-link to="https://www.facebook.com">
              <i class="fab fa-facebook-f"></i>
           </router-link>
            </li>
            <li>
              <network network="twitter">
                <i class="fab fa-twitter"></i>
              </network>
            </li>
            <li>
              <network network="linkedin">
                <i class="fab fa-linkedin-in"></i>
              </network>
            </li>
            <li>
              <network network="instagram">
                <i class="fab fa-instagram"></i>
              </network>
            </li>
          </ul>
        </div>
        </social-sharing>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "/sass/variable";
@import "/sass/global";

#header1{
  background-color: black;
}
.head{
  padding: 5px 0;
  display: flex;
  justify-content: space-between;

}
.head_left{
  color: $head1-color;
}
.head_left p{
  margin: 0 !important;
}
.fa-phone-volume{
  @include transform(rotate(-45deg));

}
.head_right ul{
  display: flex;
  margin: 0 !important;
}
.head_right ul li{
  padding-left: 15px;
  text-align: left;
}
i{
  color: $head1-color;
}

</style>
