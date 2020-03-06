<template>
  <div class="student-show">
    <div class="container">
      <div class="edit-bio-form">
        <h1>Bio</h1>
          <form>
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
          <
          <button @click="updateBio(student)">Update</button>
        </form>  
      </div>
      
      <div class="edit-experience-form">
        <h1>Experience</h1>
        <form v-for="experience in student.experiences">
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
          <button @click="updateExperience(experience)">Update</button>
          <button @click="destroyExperience(experience)">Delete</button>
        </form>
      </div>

      <div class="edit-education-form">
        <h1>Education</h1>
        <form v-for="education in student.educations">
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
          <button @click="updateEducation(education)">Update</button>
          <button @click="destroyEducation(education)">Delete</button>
        </form>
      </div>

      <div class="edit-projects-form">
        <h1>Projects</h1>
        <form v-for="project in student.projects">
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
          <button @click="updateProject(project)">Update</button>
          <button @click="destroyProject(project)">Delete</button>
        </form>
      </div>

      <div class="edit-skills-form">
        <h1>SKILLS</h1>
        <form v-for="skill in student.skills">
          <div>
            Skill:
            <input type="text" v-model="skill.skill_name">
          </div>
          <button @click="updateSkill(skill)">Update</button>
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
    destroyExperience: function(inputExperience) {
      axios
        .delete("/api/students/" + this.$route.params.id + "/experiences/" + inputExperience.id)
        .then(response => {

        })
    },
  }
};
</script>