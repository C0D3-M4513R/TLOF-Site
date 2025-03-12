<script>
export default {
  name: "About"
}
</script>

<template>
  <section class="about">
    <div class="content">
      <div id="info">
        <div id="text">
          <h2>What is The Land of Future?</h2>
          <p>
            The Land of Future does Parties in VRChat. We usually are in Club Orion and play Psytrance, Bigroom or Harstyle.
          </p>
          <p>
            The Land of Future started 2017 and has been active since today, except for a short break at the start of 2023.
            In the Start Angelshooter made Playlists for people to listen to.
            Over the time that evolved into mixing the tracks together.
            Eventually those Mixes became longer and better.
            During that time Angelshooter hosted Parties in VRChat.
            Over the Years the Parties have become more successful (within the usual fluctuations).
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
strong {
  font-weight: bold;
}

#info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#text {
  margin: 40px 0;
}

.content {
  max-width: 80rem;
  margin: 0 auto;
}

p:not(:last-child) {
  margin-bottom: 20px;
}
</style>
