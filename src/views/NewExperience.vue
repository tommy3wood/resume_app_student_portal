<template>
  <div class="new-experience">
    <div>
      <form class="col-sm-6" v-on:submit.prevent="newWorkExperience()">
        <h1 class="text-center mb-5">New Work Experience</h1>

        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="form-group">
          <label>Company Name: </label>
          <input class="form-control" type="text" v-model="companyName">
        </div>

        <div class="form-group">
          <label>Start Date: </label>
          <input class="form-control" type="date" v-model="startDate">
        </div>

        <div class="form-group">
          <label>End Date: </label>
          <input class="form-control" type="date" v-model="endDate">
        </div>

        <div class="form-group">
          <label>Job Title: </label>
          <input class="form-control" type="text" v-model="jobTitle">
        </div>

        <div class="form-group">
          <label>Current [true or false]: </label> 
          <input class="form-control" type="text" v-model="current">
        </div>

        <input class="btn btn-info" type="submit" value="Add New Work Experience!">
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
        companyName: "",
        startDate: "",
        endDate: "",
        jobTitle: "",
        current: "",
        details: "",
        errors: []
        
      };
    },
    created: function() {},
    methods: {
      newWorkExperience: function() {
        var clientParams = {
          id: this.current_student.id,
          company_name: this.companyName,
          start_Date: this.startDate,
          end_Date: this.endDate,
          job_title: this.jobTitle,
          current: this.current,
          details: this.details
        };

        axios
          .post(`/api/students/${this.$route.params.id}/experiences/new`, clientParams)
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