<template>
  <div class="resource__grid">
    <a
      v-for="(item, index) in items"
      :key="index"
      :href="`${item.link}`"
      class="resource__link"
      target="_blanky"
    >
      <img
        :src="require(`~/assets/img/mental-resources/${item.imgSrc}`)"
        :alt="`${item.imgAlt}`"
      />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          link: 'https://suicidepreventionlifeline.org/',
          imgSrc: 'NSPL_Logo.jpg',
          imgAlt: 'National Suicide Prevention Logo'
        },
        {
          link: 'https://www.veteranscrisisline.net/',
          imgSrc: 'veteranscrisisline-badge-phone-1.gif',
          imgAlt: 'Veterans Crisis Line'
        },
        {
          link: 'https://www.veteranscrisisline.net/',
          imgSrc: 'veteranscrisisline-badge-text-1.gif',
          imgAlt: 'Veterans Crisis Line'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.resource {
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 5rem;
  }
  &__link {
    img {
      width: 100%;
    }
  }
}
</style>
