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
        <h1>Experience</h1>
        <ul v-for="experience in student.experiences">
          <li>Company name: {{experience.company_name}}</li>
          <li>Start date: {{experience.start_date}}</li>
          <li>End date: {{experience.end_date}}</li>
          <li>Title: {{experience.job_title}}</li>
          <li>Details: {{experience.details}}</li>
          <li>Current: {{experience.current}}</li>
        </ul>
      </div>

      <div>
        <h1>Education</h1>
        <ul v-for="education in student.educations">
          <li>Institution name: {{education.university_name}}</li>
          <li>Start Date: {{education.start_date}}</li>
          <li>End Date: {{education.end_date}}</li>
          <li>Degree: {{education.degree}}</li>
          <li>Details: {{education.details}}</li>
        </ul>
      </div>

      <div>
        <h1>Projects</h1>
        <ul v-for="project in student.projects">
          <li>Name: {{project.name}}</li>
          <li>Description: {{project.description}}</li>
          <li>URL: {{project.url}}</li>
        </ul>
      </div>

      <div>
        <h1>Skills</h1>
        <ul v-for="skill in student.skills">
          <li>Skill: {{skill.skill_name}}</li>
        </ul>
      </div>

      <router-link v-bind:to="'/students/1/edit'">Edit Profile</router-link>
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
      .get("/api/students/" + 1)
      .then(response => {
        // console.log(response.data);
        this.student = response.data;
      });
  },
  methods: {}
};
</script>