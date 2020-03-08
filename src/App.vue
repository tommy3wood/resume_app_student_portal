<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/logout">Logout</router-link> |
      <router-link to="/students/:id">Student Profile</router-link> |
      <router-link to="/students/:id/edit">Edit Student Profile</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body{
  background-image: url("/criss-cross.png");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

ul {
  list-style-type: none;
}
</style>
