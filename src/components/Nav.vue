<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container">
      <router-link to="/" class="navbar-brand" href="#"><img class="logo img-fluid" src="../assets/logo.png"></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/about" class="nav-link" >About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/propertymanagement" class="nav-link" >Property Management</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/liasingservices" class="nav-link">Liasing Services </router-link>
          </li>
           <li class="nav-item">
            <router-link to="/areasweservices" class="nav-link" >Areas We Services </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" >Contact</router-link>
          </li>
        </ul>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss">
@import "/sass/variable";
@import "/sass/global";

.navbar{
  background:$red-color ;
}
.nav-item{
  padding-left: 15px;
}
.nav-item a{
  color: $head1-color !important;
  font-weight: 700;
}
.logo{
  max-width: $img-size;
}
</style>
