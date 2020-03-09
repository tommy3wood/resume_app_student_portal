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

            <!-- modal start -->
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" >
              Add Experience
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add New Experience</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form class="col-sm-6 col-md-6 col-lg-12">

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

                      
                    </form> 
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button v-on:click="createExperience()" data-dismiss="modal" type="button" class="btn btn-primary">Save Experience</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- modal end -->

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
            <!-- modal start -->
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" >
              Add Education
            </button>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add New Education</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form class="col-sm-6 col-md-6 col-lg-12">
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

                      
                    </form> 
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button v-on:click="createEducation()" data-dismiss="modal" type="button" class="btn btn-primary">Save Education</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- modal end -->
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
            <!-- modal start -->
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" >
              Add Project
            </button>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add New Project</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form class="col-sm-6 col-md-6 col-lg-12">
                      <div class="form-group">
                        <label>Name: </label>
                        <input class="form-control" type="text" v-model="name">
                      </div>

                      <div class="form-group">
                        <label>Description: </label>
                        <input class="form-control" type="text" v-model="description">
                      </div>

                      <div class="form-group">
                        <label>URL: </label>
                        <input class="form-control" type="text" v-model="url">
                      </div>
                    </form> 
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button v-on:click="createProject()" data-dismiss="modal" type="button" class="btn btn-primary">Save Project</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- modal end -->
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
            <!-- modal start -->
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" >
              Add Skill
            </button>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add New Skill</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form class="col-sm-6 col-md-6 col-lg-12">
                     <div class="form-group">
                       <label>Skill: </label>
                       <input class="form-control" type="text" v-model="skill">
                     </div>
                    </form> 
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button v-on:click="createSkill()" data-dismiss="modal" type="button" class="btn btn-primary">Save Skill</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- modal end -->
          </p>
        </div>
      </div>

      <router-link class='btn btn-secondary' v-bind:to="'/students/' + student.id + '/edit'">Edit Profile</router-link>
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
      newExperience: {
        companyName: "",
        startDate: "",
        endDate: "",
        jobTitle: "",
        current: "",
        details: "",
        errors: []
      },
      newEducation: {
        startDate: "",
        endDate: "",
        universityName: "",
        degree: "",
        details: "",
        errors: []
      },
      newProject: {
        name: "",
        description: "",
        url: "",
        errors: []
      },
      newSkill: {
        skill: "",
        errors: []
      }
    };
  },
  created: function() {
    axios
      .get("/api/students/" + this.$route.params.id)
      .then(response => {
        // console.log(response.data);
        this.student = response.data;
      });
  },
  methods: {
    createExperience: function() {
      var clientParams = {
        student_id: 2,
        // this.current_student.id,
        company_name: this.companyName,
        start_date: this.startDate,
        end_date: this.endDate,
        job_title: this.jobTitle,
        current: this.current,
        details: this.details
      };

      axios
        .post(`/api/experiences`, clientParams)
        .then(response => {
          this.$router.push("/students/1");
        }).catch(error => {
          this.errors = error.response.data.errors;
          this.status = error.response.status; 
        });
    },
    createEducation: function() {
      var clientParams = {
        student_id: 2,
        start_date: this.startDate,
        end_date: this.endDate,
        university_name: this.universityName,
        degree: this.degree,
        details: this.details
      };

      axios
        .post(`/api/educations`, clientParams)
        .then(response => {
          this.$router.push("/students/1");
        }).catch(error => {
          this.errors = error.response.data.errors;
          this.status = error.response.status; 
        });
    },
    createProject: function() {
      var clientParams = {
        student_id: 2,
        name: this.name,
        description: this.description,
        url: this.url
      };

      axios
        .post(`/api/projects`, clientParams)
        .then(response => {
          this.$router.push("/students/1");
        }).catch(error => {
          this.errors = error.response.data.errors;
          this.status = error.response.status; 
        });
    },
    createSkill: function() {
      var clientParams = {
        student_id: 2,
        skill_name: this.skill
      };

      axios
        .post(`/api/skills`, clientParams)
        .then(response => {
          this.$router.push("/students/1");
        }).catch(error => {
          this.errors = error.response.data.errors;
          this.status = error.response.status; 
        });
    },
  }
};
</script>