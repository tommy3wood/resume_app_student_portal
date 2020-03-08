<template>
  <div class="student-show">
    <div class="container">


      <div class="card text-left mb-4">
        <div class="card-header my-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <span class="nav-link active">Bio</span>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <p class="card-text">
            <ul>
              <li>First Name: {{ student.first_name }} </li>
              <li>Last Name: {{ student.last_name }} </li>
              <li>Email: {{ student.email }} </li>
              <li>Phone: {{ student.phone_number }} </li>
              <li>Bio: {{ student.short_bio }} </li>
              <li>LinkedIn: {{ student.linkedin_url }} </li>
              <li>Personal Site: {{ student.personal_website_url }} </li>
              <li>GitHub: {{ student.github_url }} </li>
              <li>Location: {{ student.city_state }} </li>
            </ul>
          </p>
        </div>
      </div>



      <div class="card text-left mb-4">
        <div class="card-header my-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <span class="nav-link active">Experience</span>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <p class="card-text">
            <ul v-for="experience in student.experiences">
              <li>Company name: {{experience.company_name}}</li>
              <li>Start date: {{experience.start_date}}</li>
              <li>End date: {{experience.end_date}}</li>
              <li>Title: {{experience.job_title}}</li>
              <li>Details: {{experience.details}}</li>
              <li>Current: {{experience.current}}</li>
            </ul>
          </p>
        </div>
      </div>

      <div class='card text-left mb-4'>
        <div class="card-header my-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <span class="nav-link active">Education</span>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <p class="card-text">
            <ul v-for="education in student.educations">
              <li>Institution name: {{education.university_name}}</li>
              <li>Start Date: {{education.start_date}}</li>
              <li>End Date: {{education.end_date}}</li>
              <li>Degree: {{education.degree}}</li>
              <li>Details: {{education.details}}</li>
            </ul>
          </p>
        </div>
      </div>

      <div class='card text-left mb-4'>
        <div class="card-header my-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <span class="nav-link active">Projects</span>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <p class="card-text">
            <ul v-for="project in student.projects">
              <li>Name: {{project.name}}</li>
              <li>Description: {{project.description}}</li>
              <li>URL: {{project.url}}</li>
            </ul>
          </p>
        </div>
      </div>

      <div class='card text-left mb-4'>
        <div class="card-header my-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <span class="nav-link active">Skills</span>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <p class="card-text">
            <ul v-for="skill in student.skills">
              <li>Skill: {{skill.skill_name}}</li>
            </ul>
          </p>
        </div>
      </div>

      <router-link class='router-link' v-bind:to="'/students/1/edit'"><strong><h3 class='link'>Edit Profile</h3></strong></router-link>
    </div>
  </div>
</template>

<style scoped>
  .link{
    background-color: #660066;
    font-color: white;
    
  }

  .router-link{
    text-decoration: none;
    color: white;
  }
  .card-header{
    background-color: #660066;
  }
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      student: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      short_bio: "",
      linkedin_url: "",
      personal_website_url: "",
      github_url: "",
      city_state: "",
      experience: [],
      education: [],
      project: [],
      skill: []
      },
    };
  },
  created: function() {
    axios
      .get("/api/students/" + 1)
      .then(response => {
        // console.log(response.data);
        this.student = response.data;
      });
  },
  methods: {}
};
</script>