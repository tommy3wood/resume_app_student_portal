<template>
  <div class="student-show">
    <div class="container">
      <div class="edit-bio-form">
        <h1>Bio</h1>
        <ul style="list-style-type: none;">
          <li>
            First Name:
            <input type="text" v-model="student.first_name">
          </li>

          <li>
            Last Name: 
            <input type="text" v-model="student.last_name">
          </li>
          <li>
            Email: 
            <input type="text" v-model="student.email"> 
          </li>
          <li>
            Phone:
            <input type="text" v-model="student.phone_number">
         </li>
          <li>
            Bio: 
            <input type="text" v-model="student.short_bio">
          </li>
          <li>
            LinkedIn: 
            <input type="text" v-model="student.linkedin_url">
          </li>
          <li>
            Personal Site:
            <input type="text" v-model="student.personal_website_url">
          </li>
          <li>
            GitHub: 
            <input type="text" v-model="student.github_url">
          </li>
          <li>
            Location: 
            <input type="text" v-model="student.city_state">
          </li>
        </ul>
        <button @click="updateBio(student)">Update</button>
      </div>

      <div class="edit-experience-form">
        <h1>Experience</h1>
        <ul style="list-style-type: none;">
          <li>
            Company Name:
            <input type="text" v-model="experience.company_name">
          </li>
          <li>
            Start Date:
            <input type="date" v-model="experience.start_date">
          </li>
          <li>
            End Date:
            <input type="date" v-model="experience.end_date">
          </li>
          <li>
            Title:
            <input type="text" v-model="experience.job_title">
          </li>
          <li>
            Details:
            <input type="text" v-model="experience.details">
          </li>
          <li>
            Current: 
            <input type="text" v-model="experience.current">
          </li>
        </ul>
        <button @click="updateExperience(experience)">Update</button>
      </div>

      <div class="edit-education-form">
        <h1>Education</h1>
        <ul style="list-style-type: none;">
          <li>
            Institution Name:
            <input type="text" v-model="education.university_name">
          </li>
          <li>
            Start:
            <input type="date" v-model="education.start_date">
          </li>
          <li>
            End:
            <input type="date" v-model="education.end_time">
          </li>
          <li>
            Degree:
            <input type="text" v-model="education.degree">
          </li>
          <li>
            Details:
            <input type="text" v-model="education.details">
          </li>
        </ul>
        <button @click="updateEducation(education)">Update</button>
      </div>

      <div class="edit-projects-form">
        <h1>Projects</h1>
        <ul style="list-style-type: none;">
          <li>
            Name:
            <input type="text" v-model="project.name">
          </li>
          <li>
            Description: 
            <input type="text" v-model="project.description">
          </li>
          <li>
            Url:
            <input type="text" v-model="project.url">
          </li>
        </ul>
        <button @click="updateProject(project)">Update</button>
      </div>

      <div class="edit-skills-form">
        <h1>SKILLS</h1>
        <ul style="list-style-type: none;">
          <li>
            Skill:
            <input type="text" v-model="skill.skill_name">
          </li>
        </ul>
        <button @click="updateSkill(skill)">Update</button>
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
      first_name: "Rob",
      last_name: "Kondradowicz",
      email: "rob@gamil.com",
      phone_number: "708-777-7689",
      short_bio: "Eats his soup. Also, he codes.",
      linkedin_url: "https://www.linkedin.com/in/robkondratowicz",
      personal_website_url: "https://www.linkedin.com/in/robkondratowicz",
      github_url: "https://github.com/EatYourSoup7",
      city_state: "Chicago, IL"
      },
      experience: {
        company_name: "Litera Microsystems",
        start_date: "12-10-2018",
        end_date: "10-12-2019",
        job_title: "CGTFOO",
        current: false,
        details: "young cold brew king"
      },
      education: {
        start_date: "11-23-1991",
        end_date: "12-25-1995",
        university_name: "Ohio University",
        degree: "Math",
        details: "Varsity Math"
      },
      project: {
        name: "Full Measure",
        description: "community watchdog app",
        url: "www.reddit.com"
      },
      skill: {
        skill_name: "Walking backwards"
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
  methods: {
    updateBio: function(inputBio) {
      var clientParams = {
        first_name: inputBio.first_name,
        last_name: inputBio.last_name,
        email: inputBio.email,
        phone_number: inputBio.phone_number,
        short_bio: inputBio.short_bio,
        linkedin_url: inputBio.linkedin_url,
        personal_website_url: inputBio.personal_website_url,
        github_url: inputBio.github_url,
        city_state: inputBio.city_state
      };
    },
    updateExperience: function(inputExperience) {
      var clientParams = {
        company_name: inputExperience.company_name,
        start_date: inputExperience.start_date,
        end_date: inputExperience.end_date,
        job_title: inputExperience.job_title,
        current: inputExperience.current,
        details: inputExperience.details
      }
    },
    updateEducation: function(inputEducation) {
      var clientParams = {
        university_name: inputEducation.university_name,
        degree: inputEducation.degree,
        details: inputEducation.details
      }
    },
    updateProject: function(inputProject) {
      var clientParams = {
        name: inputProject.name,
        description: inputProject.description,
        url: inputProject.url
      }
    },
    updateSkill: function(inputSkill) {
      var clientParams = {
        skill: inputSkill.skill_name
      }
    },
  }
};
</script>