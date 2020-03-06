<template>
  <div class="new-skill">
    <div>
      <form class="col-sm-6" v-on:submit.prevent="newSkill()">
        <h1 class="text-center mb-5">New Skill</h1>

        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="form-group">
          <label>Skill: </label>
          <input class="form-control" type="text" v-model="skill">
        </div>

        <input class="btn btn-info" type="submit" value="Add New Skill!">
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
        skill: "",
        errors: []
        
      };
    },
    created: function() {},
    methods: {
      newSkill: function() {
        var clientParams = {
          student_id: 1,
          skill_name: this.skill
        };

        axios
          .post(`/api/skills`, clientParams)
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