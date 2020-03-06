<template>
  <div class="student-edit">
    <div class="container">
      <div class="edit-bio-form">
        <h1>Bio</h1>
          <form v-on:submit.prevent="updateBio()">
            <div>
              First Name:
              <input type="text" v-model="student.first_name">
            </div>

            <div>
              Last Name: 
              <input type="text" v-model="student.last_name">
            </div>
            <div>
              Email: 
              <input type="text" v-model="student.email"> 
            </div>
            <div>
              Phone:
              <input type="text" v-model="student.phone_number">
           </div>
            <div>
              Bio: 
              <input type="text" v-model="student.short_bio">
            </div>
            <div>
              LinkedIn: 
              <input type="text" v-model="student.linkedin_url">
            </div>
            <div>
              Personal Site:
              <input type="text" v-model="student.personal_website_url">
            </div>
            <div>
              GitHub: 
              <input type="text" v-model="student.github_url">
            </div>
            <div>
              Location: 
              <input type="text" v-model="student.city_state">
            </div>
          <input type="submit" value="update">
        </form>  
      </div>
      
      <div class="edit-experience-form">
        <h1>Experience</h1>
        <form v-for="experience in student.experiences" v-on:submit.prevent="updateExperience()">
            <div>
              Company Name:
              <input type="text" v-model="experience.company_name">
            </div>
            <div>
              Start Date:
              <input type="date" v-model="experience.start_date">
            </div>
            <div>
              End Date:
              <input type="date" v-model="experience.end_date">
            </div>
            <div>
              Title:
              <input type="text" v-model="experience.job_title">
            </div>
            <div>
              Details:
              <input type="text" v-model="experience.details">
            </div>
            <div>
              Current: 
              <input type="text" v-model="experience.current">
            </div>
          <input type="submit" value="update">
          <button @click="destroyExperience(experience)">Delete</button>
        </form>
      </div>

      <div class="edit-education-form">
        <h1>Education</h1>
        <form  v-for="education in student.educations" v-on:submit.prevent="updateEducation()">
            <div>
              Institution Name:
              <input type="text" v-model="education.university_name">
            </div>
            <div>
              Start:
              <input type="date" v-model="education.start_date">
            </div>
            <div>
              End:
              <input type="date" v-model="education.end_time">
            </div>
            <div>
              Degree:
              <input type="text" v-model="education.degree">
            </div>
            <div>
              Details:
              <input type="text" v-model="education.details">
            </div>
          <input type="submit" value="update">
          <button @click="destroyEducation(education)">Delete</button>
        </form>
      </div>

      <div class="edit-projects-form">
        <h1>Projects</h1>
        <form v-for="project in student.projects" v-on:submit.prevent="updateProject()">
          <div>
            Name:
            <input type="text" v-model="project.name">
          </div>
          <div>
            Description: 
            <input type="text" v-model="project.description">
          </div>
          <div>
            Url:
            <input type="text" v-model="project.url">
          </div>
           <input type="submit" value="update">
          <button @click="destroyProject(project)">Delete</button>
        </form>
      </div>

      <div class="edit-skills-form">
        <h1>SKILLS</h1>
        <form v-for="skill in student.skills" v-on:submit.prevent="updateSkills()">
          <div>
            Skill:
            <input type="text" v-model="skill.skill_name">
          </div>
          <input type="submit" value="update">
          <button @click="destroySkill(skill)">Delete</button>
        </form>
      </div>
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
      errors: []
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
  methods: {
    updateBio: function() {
      var clientParams = {
        first_name: this.student.first_name,
        last_name: this.student.last_name,
        email: this.student.email,
        phone_number: this.student.phone_number,
        short_bio: this.student.short_bio,
        linkedin_url: this.student.linkedin_url,
        personal_website_url: this.student.personal_website_url,
        github_url: this.student.github_url,
        city_state: this.student.city_state
      };
      axios
      .patch("/api/students/1", clientParams)
      .then(response => {
        this.student = response.data
        this.$router.push("/students/1")
        console.log(response.data);
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(errors.response.data)
      });
    },
    updateExperience: function() {
      console.log("test");
      console.log(this.experience);
      var clientParams = {
        company_name: this.experience.company_name,
        start_date: this.experience.start_date,
        end_date: this.experience.end_date,
        job_title: this.experience.job_title,
        current: this.experience.current,
        details: this.experience.details
      };
      axios
      .patch("/api/experiences/2", clientParams)
      .then(response => {
        this.$router.push("/students/" + 1)
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(errors.response.data)
      });
    },
    updateEducation: function() {
      var clientParams = {
        university_name: this.education.university_name,
        degree: this.education.degree,
        details: this.education.details
      };
      axios
      .patch("/api/educations/5", clientParams)
      .then(response => {
        this.$router.push("/students/" + 1)
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(errors.response.data)
      });
    },
    updateProject: function() {
      var clientParams = {
        name: inputProject.name,
        description: inputProject.description,
        url: inputProject.url
      };
      axios
      .patch("/api/projects/2" + this.inputProject.id, clientParams)
      .then(response => {
        this.$router.push("/students/" + 1)
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(errors)
      });
    },
    updateSkill: function() {
      var clientParams = {
        skill: inputSkill.skill_name
      }
    },
    destroyExperience: function(inputExperience) {
      axios
        .delete("/api/students/" + this.$route.params.id + "/experiences/" + inputExperience.id)
        .then(response => {

        })
    },
  }
};
</script>