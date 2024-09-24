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
            Please come up with more text for here. Please come up with more text for here. Please come up with more text for here. Please come up with more text for here. Please come up with more text for here. Please come up with more text for here. Please come up with more text for here. Please come up with more text for here.
          </p>
          <p>
            And maybe even more here.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#magma {
  color: #970000;
}
#magma:hover {
  color: #ab0000;
}

@media (prefers-color-scheme: dark) {
  #magma {
    color: #ffb300;
  }
  #magma:hover {
    color: #ffcb00;
  }
}

#team {
  color: var(--color-link-secondary)
}
#team:hover {
  color: var(--color-link-secondary-hover)
}

#magma, #team {
  text-decoration: underline;
}

strong {
  font-weight: bold;
}

#info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#calculation {
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

#sum {
  display: flex;
  align-items: center;
}

#calculation img {
  width: 150px;
  height: 150px;
  object-fit: contain;

  background-color: var(--color-background-mute);

  border-radius: 10px;
  box-shadow: 0 0 10px var(--color-border);
  margin: 0 20px;
  padding: 10px;
}
#calculation img[alt="Ketting"] {
  padding: 20px; /* Give the Ketting logo a bit more padding */
}

#plus-icon,
#equals-icon {
  font-size: 4em;
  margin: 0 40px;
}

#text {
  margin: 40px 0;
}

p:not(:last-child) {
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  #sum {
    flex-direction: column;
    align-items: center;
  }

  #calculation img {
    width: 100px;
    height: 100px;
  }

  #calculation img[alt="Ketting"] {
    padding: 10px;
  }

  #plus-icon,
  #equals-icon {
    font-size: 2em;
    margin: 0 10px;
  }
}
</style>
