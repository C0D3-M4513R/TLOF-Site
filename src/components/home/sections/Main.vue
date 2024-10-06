<script>
export default {
  name: "Main"
}
</script>

<template>
  <section class="main">
    <div class="content">
      <div id="info">
        <h1>The Land of Future</h1>
        <h2>Psytrance, Bigroom and Harstyle VRChat Parties</h2>

        <div class="button-group">
          <a :href="global.discordUrl" class="button primary">Discord</a>
          <router-link :to="{ name: 'FAQ' }" class="button" id="faq">FAQ</router-link>
        </div>
      </div>

      <div id="terminal-container">
        <picture>
          <source media="(max-width: 1000px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
          <img src="@/assets/tlof.webp" height="512" width="512" alt="Terminal" id="terminal" />
        </picture>
      </div>
    </div>
  </section>
</template>

<style scoped>
.main {
  display: flex;
  min-height: 60vh;
  align-content: center;
}
#faq {
  color: var(--color-link);
}
#info {
  justify-content: center;
  width: 75%;
}
.button-group {
  display: flex;
  gap: 10px;
}
.button {
  padding: 7px 20px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  background-color: var(--color-background-soft);
  color: var(--color-link);
  transition: background-color 0.2s;
  user-select: none;
}
.button:hover {
  background-color: var(--color-background);
  color: var(--color-link-hover);
}
.button.primary {
  background-color: var(--color-primary);
  color: var(--light-color-link);
}
.button.primary:hover {
  background-color: var(--color-primary-dark);
}

#terminal-container {
  justify-content: center;
  align-items: center;
}
#terminal {
  border-radius: 10px;
/*  box-shadow: 0 0 15px black;*/
  margin: 20px 20px 20px 80px;
}

.content {
  display: flex;
  justify-content: center;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 15px;
}
#heading .content {
  max-width: 80rem;
}

.content > div {
  display: flex;
  flex-direction: column;
}

@media (max-width: 1000px) {
  #terminal-container {
    display: none;
  }
  #info {
    width: 100%;
  }
}

@media (prefers-color-scheme: light) {
  #terminal {
    background-color: var(--dark-color-background);
    padding: 1em;
    box-shadow: 0 0 2em var(--color-border);
  }
}
</style>
