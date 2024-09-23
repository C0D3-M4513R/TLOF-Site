<script>
export default {
  name: "Logo"
}
</script>

<template>
  <div class="logo">
    <img class="logo-img" src="@/assets/tlof.webp" width="512" height="512" alt="TLOF Logo Image">
    <h2 class="logo-header" aria-label="TLOF Logo Text">TLOF</h2>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  user-select: none;
}

.logo-img {
  width: 1.5rem;
  height: 1.5rem;
}

.logo-header {
  font-size: 1.5rem;
  margin-left: 3px;

  color: var(--logo-blue-dark);
}

@media (prefers-color-scheme: dark) {
  .logo-header {
    color: var(--logo-blue);
  }
}
</style>