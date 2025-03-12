<script>
export default {
  name: "DownloadButton",
  props: {
    kettingVersion: {
      type: String,
      required: true
    },
    mcVersion: {
      type: String,
      required: true
    },
    version: {
      type: String,
      required: true
    },
    compareVersion: {
      type: String,
      required: false
    },
    detailsActive: {
      type: Boolean,
      required: true
    },
    latest: {
      type: Boolean,
      required: true
    },
    duplicate: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    buttonBorderRadius() {
      return this.detailsActive ? "15px 15px 0 0" : "15px";
    }
  }
}
</script>

<template>
  <div id="button-container">
    <div id="button" :style="{ borderRadius: buttonBorderRadius }">
      <div id="version">
        <p>{{ kettingVersion }}</p>
        <p id="forge-version" v-if="duplicate">Forge {{ version.split('-')[1] }}</p>
      </div>
      <div id="right">
        <a id="compare" v-if="compareVersion != null" :href="global.softwareUrl(mcVersion) + 'compare/' + compareVersion + '...' + version" target="_blank" tabindex=0 >What's new?</a>
        <p id="get" @click="this.$emit('toggle-details')" tabindex=0 role="note" aria-label="Get it">Get it</p>
      </div>
    </div>
    <div id="details" v-if="detailsActive">
      <h2>How to install</h2>
      <p>Step 1: Download <a :href="global.launcherUrl + 'releases'" target="_blank">kettinglauncher</a>.</p>
      <p>Step 2: Make a new folder and put the downloaded file in it.</p>
      <p>Step 3: Open a terminal of choice and execute the following command:</p>
      <div>
        <div id="terminal">
          <p>cd <i>path/to/folder</i></p>
          <p>java -jar kettinglauncher-X.X.X.jar -minecraftVersion {{ mcVersion + (latest ? '' : ' -kettingVersion ' + kettingVersion) }}{{ !latest && duplicate ? ' -forgeVersion ' + version.split('-')[1] : '' }}</p>
        </div>
        <p id="launch-arguments">For a more detailed guide on how to use launch arguments, check out our <a :href="global.launcherUrl + '?tab=readme-ov-file#arguments'" target="_blank">readme</a>.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#button {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--color-background-mute);
  padding: 7px 0;
  margin: 10px 0;
}

#version {
  font-size: 1.5em;
  margin-left: 10px;
}
#forge-version {
  font-size: .6em;
  font-style: italic;
  color: var(--color-text);
  opacity: 0.7;
}

#right {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
}

#compare,
#get {
  background-color: var(--color-background-soft);
  color: var(--color-text);
  border-radius: 15px;
  transition: background-color 0.2s, color 0.2s;
  font-size: 1em;
  user-select: none;
  cursor: pointer;
}
#compare:hover,
#get:hover {
  background-color: var(--color-link-hover);
  color: var(--color-background-soft);
}

#compare {
  margin-right: 25px;
  padding: 1px 10px;
}
#get {
  margin-right: 10px;
  padding: 2px 10px;
}

#details {
  display: flex;
  flex-direction: column;
  background-color: var(--color-background-mute);
  border-radius: 0 0 15px 15px;
  padding: 7px 10px;
  margin: -10px 0 10px 0;
}
#details p:not(:last-child) {
  margin-bottom: 10px;
}

#details a {
  color: var(--color-link-secondary);
}
#details a:hover {
  text-decoration: underline;
  color: var(--color-link-secondary-hover);
}

#terminal {
  display: inline-block;
  background-color: #111;
  color: #fff;
  font: 1em monospace;
  border-radius: 10px;
  padding: 10px;
  margin-top: 5px;
}
#terminal p:not(:last-child) {
  margin-bottom: 10px;
}

#launch-arguments {
  font-style: italic;
  font-size: 0.8em;
  margin-left: 5px;
}

@media (max-width: 768px) {
  #button {
    flex-direction: column;
    align-items: stretch;
  }

  #version {
    margin: 0 auto;
    text-align: center;
  }
  #forge-version {
    margin-bottom: 5px;
  }

  #right {
    margin: 0 auto;
    gap: 1em;
  }

  #compare,
  #get {
    margin: 0;
    border-radius: 10px;
    padding: 5px;
  }
}

@media (max-width: 400px) {
  #right {
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
  }

  #compare,
  #get {
    width: 100%;
    text-align: center;
  }
}
</style>
