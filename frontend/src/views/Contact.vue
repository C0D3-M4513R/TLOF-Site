<script>
import {partners} from "@/data/partners/partners.js";
import Member from "@/components/team/Member.vue";

export default {
  name: "Team",
  head() {
    return {
      title: this.unhead.formattedTitle("Contact"),
      meta: [
        {
          property: 'og:title',
          content: this.unhead.formattedTitle("Contact The Land of Future"),
        },
        /*OpenGraph description. Mostly for Social Platforms*/
        {
          property: 'og:description',
          content: 'Contact The Land of Future'
        },
        /*Description for Search Engines*/
        {
          name: 'description',
          content: 'Contact The Land of Future'
        },
        {
          property: 'og:image',
          content: this.global.imageUrl
        },
        {
          property: 'og:url',
          content: this.global.url + 'contact/'
        },
        {
          name: 'theme-color',
          content: this.global.themeColor,
        },
      ],
      link: {
        rel: 'canonical',
        href: this.global.url + 'contact/'
      }
    };
  },
}
</script>

<template>
  <div id="content">
    <h1>Contact The Land of Future</h1>
    <p>Contact The Land of Future below. You can write in German and English.</p>
    <div class="container">
    <form method="post" action="/api/email">
      <label for="name-email-contact">Your Name: </label><input id="name-email-contact" type="text" name="name" pattern="[a-zA-Z0-9 ]*"><br>
      <label for="from-email-contact">Your Email: </label><input  id="from-email-contact" type="email" name="from"><br>
      <label for="subject-email-contact">Subject: </label><input id="subject-email-contact" type="text" name="subject" pattern="[a-zA-Z0-9 ]*"><br>
      <label for="message-email-contact">Message: </label><textarea id="message-email-contact" name="message" rows="4" cols="50"></textarea>
      <input type="submit" value="Send Message">
    </form>
    </div>
  </div>
</template>

<style scoped>
#content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  margin: 20px auto;
}

/* Style inputs with type="text", select elements and textareas */
input[type=text], input[type=email], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: var(--color-background-mute);
  padding: 20px;
}
</style>
