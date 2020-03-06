<template>
  <div class="student-show">
    <div class="container">
      <div>
        <h1>Bio</h1>
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
      </div>

      <div>
        <h1>experience</h1>
        <ul v-for="experience in student.experiences">
          <li>company name: {{experience.company_name}}</li>
          <li>start date: {{experience.start_date}}</li>
          <li>end date: {{experience.end_date}}</li>
          <li>title: {{experience.job_title}}</li>
          <li>details: {{experience.details}}</li>
          <li>current: {{experience.current}}</li>
        </ul>
      </div>

      <div>
        <h1>education</h1>
        <ul v-for="education in student.educations">
          <li>institution name: {{education.university_name}}</li>
          <li>start: {{education.start_date}}</li>
          <li>end: {{education.end_date}}</li>
          <li>degree: {{education.degree}}</li>
          <li>details: {{education.details}}</li>
        </ul>
      </div>

      <div>
        <h1>projects</h1>
        <ul v-for="project in student.projects">
          <li>name: {{project.name}}</li>
          <li>description: {{project.description}}</li>
          <li>url: {{project.url}}</li>
        </ul>
      </div>

      <div>
        <h1>skills</h1>
        <ul v-for="skill in student.skills">
          <li>skill: {{skill.skill_name}}</li>
        </ul>
      </div>

      <router-link v-bind:to="'/students/:id/edit'">Edit Profile</router-link>
    </div>
  </div>
</template>

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
      .get("/api/students/" + this.$route.params.id)
      .then(response => {
        console.log(response.data);
        this.student = response.data;
      });
  },
  methods: {}
};
</script>