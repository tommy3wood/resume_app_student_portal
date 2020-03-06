<template>
  <div class="student-show">
    <div class="container">
      <div>
        <h1>Bio</h1>
        <ul>
          <li>First Name: {{ student.firstName }} </li>
          <li>Last Name: {{ student.lastName }} </li>
          <li>Email: {{ student.email }} </li>
          <li>Phone: {{ student.phoneNumber }} </li>
          <li>Bio: {{ student.shortBio }} </li>
          <li>LinkedIn: {{ student.linkedinUrl }} </li>
          <li>Personal Site: {{ student.personalWebsite_url }} </li>
          <li>GitHub: {{ student.githubUrl }} </li>
          <li>Location: {{ student.cityState }} </li>
        </ul>
      </div>

      <div>
        <h1>Experience</h1>
        <ul>
          <li>Company Name: {{experience.companyName}}</li>
          <li>Start Date: {{experience.startDate}}</li>
          <li>End Date: {{experience.endDate}}</li>
          <li>Title: {{experience.jobTitle}}</li>
          <li>Details: {{experience.details}}</li>
          <li>Current: {{experience.current}}</li>
        </ul>
      </div>

      <div>
        <h1>Education</h1>
        <ul>
          <li>Institution Name: {{education.universityName}}</li>
          <li>Start: {{education.startDate}}</li>
          <li>End: {{education.endDate}}</li>
          <li>Degree: {{education.degree}}</li>
          <li>Details: {{education.details}}</li>
        </ul>
      </div>

      <div>
        <h1>Projects</h1>
        <ul>
          <li>Name: {{project.name}}</li>
          <li>Description: {{project.description}}</li>
          <li>Url: {{project.url}}</li>
        </ul>
      </div>

      <div>
        <h1>SKILLS</h1>
        <ul>
          <li>Skill: {{skill.skill_name}}</li>
        </ul>
      </div>

      <router-link v-bind:to="'/edit'">Edit Profile</router-link>
    </div>
  </div>
</template>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      student: {
      firstName: "Rob",
      lastName: "Kondradowicz",
      email: "rob@gamil.com",
      phoneNumber: "708-777-7689",
      shortBio: "Eats his soup. Also, he codes.",
      linkedinUrl: "https://www.linkedin.com/in/robkondratowicz",
      personalWebsite_url: "https://www.linkedin.com/in/robkondratowicz",
      githubUrl: "https://github.com/EatYourSoup7",
      cityState: "Chicago, IL"
      },
      experience: {
        companyName: "Litera Microsystems",
        startDate: "12-10-2018",
        endDate: "10-12-2019",
        jobTitle: "CGTFOO",
        current: false,
        details: "young cold brew king"
      },
      education: {
        startDate: "11-23-1991",
        endDate: "12-25-1995",
        universityName: "Ohio University",
        degree: "Math",
        details: "Varsity Math"
      },
      project: {
        name: "Full Measure",
        description: "community watchdog app",
        url: "www.reddit.com"
      },
      skill: {
        skillName: "Walking backwards"
      }
    };
  },
  created: function() {
    axios
      .get("/api/students/" + this.$route.params.id)
      .then(response => {
        console.log(response.data);
        this.student = response.data;
      });
    axios
      .get("/api/students/" + this.$route.params.id + "/experiences/" + this.$route.params.id)
      .then(response => {
        this.experiences = response.data;
      });
    axios
      .get("/api/students/" + this.$route.params.id + "/educations/" + this.$route.params.id)
      .then(response => {
        this.experiences = response.data;
      });
    axios
      .get("/api/students/" + this.$route.params.id + "/projects/" + this.$route.params.id)
      .then(response => {
        this.projects = response.data;
      });
    axios
      .get("/api/students/" + this.$route.params.id + "/skills/" + this.$route.params.id)
      .then(response => {
        this.skills = response.data;
      });
  },
  methods: {}
};
</script>