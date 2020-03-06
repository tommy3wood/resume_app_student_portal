<template>
  <div class="new-project">
    <div>
      <form class="col-sm-6" v-on:submit.prevent="newProject()">
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
          <input class="form-control" type="date" v-model="description">
        </div>

        <div class="form-group">
          <label>URL: </label>
          <input class="form-control" type="date" v-model="url">
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
          id: this.current_student.id,
          name: this.name,
          description: this.description,
          url: this.url
        };

        axios
          .post(`/api/students/${this.$route.params.id}/educations/new`, clientParams)
          .then(response => {
            this.$router.push("/show");
          }).catch(error => {
            this.errors = error.response.data.errors;
            this.status = error.response.status; 
          });
      }
    }
  };
</script>