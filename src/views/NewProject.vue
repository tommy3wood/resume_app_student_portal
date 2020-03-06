<template>
  <div class="new-project container">
    <div>
      <form class="col-sm-6 col-md-6 col-lg-12" v-on:submit.prevent="newProject()">
        <h1 class="text-center mb-5">New Project</h1>

        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="form-group">
          <label>Name: </label>
          <input class="form-control" type="text" v-model="name">
        </div>

        <div class="form-group">
          <label>Description: </label>
          <input class="form-control" type="text" v-model="description">
        </div>

        <div class="form-group">
          <label>URL: </label>
          <input class="form-control" type="text" v-model="url">
        </div>

        <input class="btn btn-info" type="submit" value="Add New Project!"> 
      </form> 
    </div>

  </div>
</template>

<style>
</style>

<script>
  
  var axios = require("axios");

  export default {
    data: function() {
      return {
        name: "",
        description: "",
        url: "",
        errors: []
        
      };
    },
    created: function() {},
    methods: {
      newProject: function() {
        var clientParams = {
          student_id: 1,
          name: this.name,
          description: this.description,
          url: this.url
        };

        axios
          .post(`/api/projects`, clientParams)
          .then(response => {
            this.$router.push("/students/1");
          }).catch(error => {
            this.errors = error.response.data.errors;
            this.status = error.response.status; 
          });
      }
    }
  };
</script>