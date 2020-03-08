<template>
  <div class="student-edit">
    <div class="container">
      <div class="edit-bio-form">
        <div class="container card border-secondary">
          <h1 class="m-3">Bio</h1>
            <div class="card-body">
              <form v-on:submit.prevent="updateBio()">
                <div class="form-group">
                  <h4 class="text-left">First Name:</h4>
                  <input type="text" class="form-control" v-model="student.first_name">
                </div>
                <div class="form-group">
                  <h4 class="text-left">Last Name:</h4> 
                  <input type="text" class="form-control" v-model="student.last_name">
                </div>
                <div class="form-group">
                  <h4 class="text-left">Email:</h4>
                  <input type="text" class="form-control" v-model="student.email"> 
                </div>
                <div class="form-group">
                  <h4 class="text-left">Phone:</h4>
                  <input type="text" class="form-control" v-model="student.phone_number">
               </div>
                <div class="form-group">
                  <h4 class="text-left">Bio:</h4>
                  <input type="text" class="form-control" v-model="student.short_bio">
                </div>
                <div class="form-group">
                  <h4 class="text-left">LinkedIn:</h4> 
                  <input type="text" class="form-control" v-model="student.linkedin_url">
                </div>
                <div class="form-group">
                  <h4 class="text-left">Personal Site:</h4>
                  <input type="text" class="form-control" v-model="student.personal_website_url">
                </div>
                <div class="form-group">
                  <h4 class="text-left">GitHub:</h4> 
                  <input type="text" class="form-control" v-model="student.github_url">
                </div>
                <div class="form-group">
                  <h4 class="text-left">Location:</h4>
                  <input type="text" class="form-control" v-model="student.city_state">
                </div>
              <input type="submit" class="btn btn-primary" value="update">
            </form>  
          </div>
        </div>
      </div>

      <br>

      <div class="edit-experience-form">
        <div class="container card border-secondary">
          <h1 class="m-3">Experience</h1>
          <form v-for="experience in student.experiences" class="card border-secondary m-3" v-on:submit.prevent="updateExperience(experience)">
            <div class="card-body">
              <div>
                <h4 class="text-left">Company Name:</h4>
                <input type="text" class="form-control" v-model="experience.company_name">
              </div>
              <br>
              <div>
                <h4 class="text-left">Start Date:</h4>
                <input type="date" class="form-control" v-model="experience.start_date">
              </div>
              <br>
              <div>
                <h4 class="text-left">End Date:</h4>
                <input type="date" class="form-control" v-model="experience.end_date">
              </div>
              <br>
              <div>
                <h4 class="text-left">Title:</h4>
                <input type="text" class="form-control" v-model="experience.job_title">
              </div>
              <br>
              <div>
                <h4 class="text-left">Details</h4>
                <input type="text" class="form-control" v-model="experience.details">
              </div>
              <br>
              <div>
                <h4 class="text-left">Current:</h4> 
                <input type="text" class="form-control" v-model="experience.current">
              </div>
              <input type="submit" class="btn btn-primary m-3" value="update">
              <button @click="destroyExperience(experience)" class="btn btn-danger m-3">Delete</button>
            </div>
          </form>
        </div>
      </div>
      <br>
      <div class="edit-education-form">
        <div class="container card border-secondary">
          <h1 class="m-3">Education</h1>
          <form  v-for="education in student.educations" class="card border-secondary m-3" v-on:submit.prevent="updateEducation(education)">
            <div class="card-body">    
                <div>
                  <h4 class="text-left">Institution Name:</h4>
                  <input type="text" class="form-control" v-model="education.university_name">
                </div>
                <br>
                <div>
                  <h4 class="text-left">Start Date:</h4>
                  <input type="date" class="form-control" v-model="education.start_date">
                </div>
                <br>
                <div>
                  <h4 class="text-left">End Date:</h4>
                  <input type="date" class="form-control" v-model="education.end_time">
                </div>
                <br>
                <div>
                  <h4 class="text-left">Degree:</h4>
                  <input type="text" class="form-control" v-model="education.degree">
                </div>
                <br>
                <div>
                  <h4 class="text-left">Details:</h4>
                  <input type="text" class="form-control" v-model="education.details">
                </div>
              <input type="submit" class="btn btn-primary m-3" value="update">
              <button @click="destroyEducation(education)" class="btn btn-danger m-3">Delete</button>
            </div>      
          </form>  
        </div>  
      </div>
      <br>
      <div class="edit-projects-form">
        <div class="container card border-secondary">
          <h1 class="m-3">Projects</h1>
          <form v-for="project in student.projects" class="card border-secondary m-3" v-on:submit.prevent="updateProject(project)">
            <div class="card-body">
              <div>
                <h4 class="text-left">Name:</h4>
                <input type="text" class="form-control" v-model="project.name">
              </div>
              <br>
              <div>
                <h4 class="text-left">Description:</h4> 
                <input type="text" class="form-control" v-model="project.description">
              </div>
              <br>
              <div>
                <h4 class="text-left">URL:</h4>
                <input type="text" class="form-control" v-model="project.url">
              </div>
               <input type="submit" class="btn btn-primary m-3" value="update">
              <button @click="destroyProject(project)" class="btn btn-danger m-3">Delete</button>
            </div>
          </form>
        </div>
      </div>
      <br>
      <div class="edit-skills-form">
        <div class="container card border-secondary">
          <h1 class="m-3">SKILLS</h1>
          <form v-for="skill in student.skills" class="card border-secondary m-3" v-on:submit.prevent="updateSkill(skill)">
            <div class="card-body">
              <div>
                <h4 class="text-left">Skill:</h4>
                <input type="text" class="form-control" v-model="skill.skill_name">
              </div>
              <input type="submit" class="btn btn-primary m-3" value="update">
              <button @click="destroySkill(skill)" class="btn btn-danger m-3">Delete</button>
            </div>
          </form>
        </div>
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
      experiences: [],
      educations: [],
      projects: [],
      skills: []
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
      .patch("/api/students/" + this.student.id, clientParams)
      .then(response => {
        this.student = response.data
        this.$router.push("/students/1")
        console.log(response.data);
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(errors.response.data)
      });
    },
    updateExperience: function(inputExperience) {
      var clientParams = {
        company_name: inputExperience.company_name,
        start_date: inputExperience.start_date,
        end_date: inputExperience.end_date,
        job_title: inputExperience.job_title,
        current: inputExperience.current,
        details: inputExperience.details
      };
      axios
      .patch("/api/experiences/" + inputExperience.id, clientParams)
      .then(response => {
        this.$router.push("/students/" + this.student.id)
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(errors.response.data)
      });
    },
    updateEducation: function(inputEducation) {
      var clientParams = {
        university_name: inputEducation.university_name,
        degree: inputEducation.degree,
        details: inputEducation.details
      };
      axios
      .patch("/api/educations/" + inputEducation.id, clientParams)
      .then(response => {
        this.$router.push("/students/" + this.student.id)
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(errors.response.data)
      });
    },
    updateProject: function(inputProject) {
      var clientParams = {
        name: inputProject.name,
        description: inputProject.description,
        url: inputProject.url
      };
      axios
      .patch("/api/projects/" + inputProject.id, clientParams)
      .then(response => {
        this.$router.push("/students/" + this.student.id)
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(errors)
      });
    },
    updateSkill: function(inputSkill) {
      var clientParams = {
        skill_name: inputSkill.skill_name
      };
      console.log(clientParams);
      axios
      .patch("/api/skills/" + inputSkill.id, clientParams)
      .then(response => {
        this.$router.push("/students/" + this.student.id)
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(errors)
      });
    },
    destroyExperience: function(inputExperience) {
      axios
        .delete("/api/experiences/" + inputExperience.id)
        .then(response => {
          console.log("success", response.data);
          var index = this.experiences.indexOf(inputExperience.id);
          this.experiences.splice(index, 1);
        });
    },
    destroyEducation: function(inputEducation) {
      axios
        .delete("/api/educations/" + inputEducation.id)
        .then(response => {
          console.log("success", response.data);
          var index = this.educations.indexOf(inputEducation.id);
          this.educations.splice(index, 1);
        });
    },
    destroyProject: function(inputProject) {
      axios
        .delete("/api/projects/" + inputProject.id)
        .then(response => {
          console.log("success", response.data);
          var index = this.projects.indexOf(inputProject.id);
          this.projects.splice(index, 1);
        });
    },
    destroySkill: function(inputSkill) {
      axios
        .delete("/api/skills/" + inputSkill.id)
        .then(response => {
          console.log("success", response.data);
          var index = this.skills.indexOf(inputSkill.id);
          this.skills.splice(index, 1);
        });
    },
  }
};
</script>