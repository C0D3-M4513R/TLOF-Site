<script>
export default {
  name: "UnderConstruction"
}
</script>

<template>
  <div id="content">
    <span class="warning"></span>
    <h1>Under Construction</h1>
    <p>This page is under construction. Content might be missing or incorrect. Styling might also change later on.</p>
  </div>
</template>

<style scoped>
#content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  margin-top: 10px;

  background-color: var(--color-background-mute);
}

.warning {
  background: repeating-linear-gradient(45deg, black, black 10px, yellow 10px, yellow 20px);
  padding: 10px 0;
}

h1 {
  font-size: 2em;
  margin: 0;
}

p {
  font-size: 1.5em;
}
</style>