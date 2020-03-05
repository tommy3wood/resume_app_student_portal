<template>
  <div class="student-show">
    <div class="container">

      <ul>
        <li> {{ student.firstName }} </li>
        <li> {{ student.lastName }} </li>
        <li> {{ student.email }} </li>
        <li> {{ student.phoneNumber }} </li>
        <li> {{ student.shortBio }} </li>
        <li> {{ student.linkedinUrl }} </li>
        <li> {{ student.personalWebsite_url }} </li>
        <li> {{ student.githubUrl }} </li>
        <li> {{ student.cityState }} </li>
      </ul>

      <router-link v-bind:to="'/edit'" class="btn btn-primary">Edit Profile</router-link>
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
      }
    };
  },
  created: function() {
    // axios
    //   .get("/api/students/" + this.$route.params.id)
    //   .then(response => {
    //     console.log(response.data);
    //     this.marker = response.data;
    //   });
  },
};
</script>