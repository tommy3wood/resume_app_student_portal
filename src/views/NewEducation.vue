<template>
    <div class="new-education">

      <div>
        <form class="col-sm-6" v-on:submit.prevent="addEducation()">
          <h1 class="text-center mb-5">New Education</h1>

          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>

          <div class="form-group">
            <label>Start Date: </label>
            <input class="form-control" type="date" v-model="startDate">
          </div>

          <div class="form-group">
            <label>End Date: </label>
            <input class="form-control" type="date" v-model="endDate">
          </div>

          <div class="form-group">
            <label>University Name: </label>
            <input class="form-control" type="text" v-model="universityName">
          </div>

          <div class="form-group">
            <label>Degree: </label>
            <input class="form-control" type="text" v-model="degree">
          </div>

          <div class="form-group">
            <label>Details: </label>
            <input class="form-control" type="text" v-model="details">
          </div>

          <input class="btn btn-info" type="submit" value="Add Education!">
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
          startDate: "",
          endDate: "",
          universityName: "",
          degree: "",
          details: "",
          errors: []
          
        };
      },
      created: function() {},
      methods: {
        addEducation: function() {
          var clientParams = {
            //student_id: 1,
            start_date: this.startDate,
            end_date: this.endDate,
            university_name: this.universityName,
            degree: this.degree,
            details: this.details
          };

          axios
            .post(`/api/educations`, clientParams)
            console.log('working')
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