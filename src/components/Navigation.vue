<script setup>
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faDiscord } from "@fortawesome/free-brands-svg-icons";
</script>

<template>
  <header class="nav-menu">
    <div class="mobile-button-group">
      <font-awesome-icon :icon="faBars" :class="{hidden: showMobileMenu}" id="mobile-button" @click="showMobileMenu = true" />
      <font-awesome-icon :icon="faBarsStaggered" :class="{hidden: !showMobileMenu}" id="mobile-button" @click="showMobileMenu = false" />
      <Logo id="logo-mobile" />
    </div>
    <div class="nav-content" :class="{closedMenu: !showMobileMenu, openMenu: showMobileMenu}">
      <Logo id="logo" />
      <nav class="nav-items" aria-label="Navigation Menu">
        <router-link class="nav-item" @click="showMobileMenu = false" to="/">Home</router-link>
        <router-link class="nav-item" @click="showMobileMenu = false" :to="{ name: 'FAQ' }">FAQ</router-link>
        <router-link class="nav-item" @click="showMobileMenu = false" :to="{ name: 'Team' }">Team</router-link>
      </nav>
      <div class="flex-grow-all"></div>
      <div class="navbar-icons" aria-label="Other Useful Links">
        <a class="navbar-icon" :href="global.discordUrl" target="_blank" aria-label="Discord Link">
          <font-awesome-icon :icon="faDiscord" />
        </a>
        <a class="navbar-icon" :href="global.tlofYoutubeUrl" target="_blank" aria-label="Youtube Link">
          <font-awesome-icon :icon="faYoutube" />
        </a>
        <a class="navbar-icon" :href="global.tlofVRChatUrl" target="_blank" aria-label="VRChat Group Link">
          <font-awesome-icon :icon="['fab', 'vrchat-short']" />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue';

export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
  components: {
    Logo,
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}

.flex-grow-all {
  flex-grow: 1
}

.nav-menu {
/*
  background: var(--logo-blue-dark);
  background: -moz-linear-gradient(90deg, var(--logo-yellow) 0%, var(--logo-yellow-dark) 30%, var(--logo-blue-dark) 65%, var(--logo-blue) 100%);
  background: -webkit-linear-gradient(90deg, var(--logo-yellow) 0%, var(--logo-yellow-dark) 30%, var(--logo-blue-dark) 65%, var(--logo-blue) 100%);
  background: linear-gradient(90deg, var(--logo-yellow) 0%, var(--logo-yellow-dark) 30%, var(--logo-blue-dark) 65%, var(--logo-blue) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#e1e829",endColorstr="#62f9e7",GradientType=1);
*/
  background: var(--color-background-soft);
}

.nav-content {
  display: flex;
  padding: 5px 15px;
  align-items: center;

  max-width: 80rem;
  margin: 0 auto;
}

.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-size: 1.2em;
}

.nav-item {
  margin: 0 20px;
  text-decoration: none;
  transition: color 0.2s;
  user-select: none;
}

.navbar-icon {
  padding: .9rem;
  font-size: x-large;
}

.mobile-button-group {
  display: none;
}

#mobile-button {
  color: var(--color-link);
}

@media screen and (max-width: 768px) {
  .openMenu {
    opacity: 1;
    pointer-events: auto;
  }

  .closedMenu {
    opacity: 0;
    height: 0;
    padding: 0;

    pointer-events: none;
  }

  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    align-items: normal;
  }

  .nav-items {
    flex-direction: column;
    margin-bottom: 10px;
    align-items: normal;

    padding: 0;
  }

  .nav-item {
    margin: 15px 0;
  }

  .mobile-button-group {
    display: flex;
    align-items: center;
  }

  #mobile-button {
    width: 23px;
    font-size: 1.5em;
    margin-left: 15px;
  }

  #logo-mobile {
    margin-left: 20px;
  }
  #logo {
    display: none;
  }

  .navbar-icons {
    border-top: 2px solid var(--color-link);
  }
}
</style>
