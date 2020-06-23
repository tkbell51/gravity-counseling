<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true">
      <div
        v-for="(slide, index) in homeSlides"
        :id="`${slide.css}`"
        :key="index"
      >
        <div class="slide__text">
          <h2 class="heading-primary">{{ slide.title }}</h2>
          <p>{{ slide.text }}</p>
          <SimplePractice />
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import SimplePractice from '@/components/SimplePractice'

export default {
  components: {
    SimplePractice
  },
  data() {
    return {
      homeSlides: [
        {
          css: 'slide-help',
          title: 'Need Help?',
          text:
            "Having difficulty accepting mistakes and staying committed? Want to strengthen your connection? Let's do the work to create the relationship that is perfect for you."
        },
        {
          css: 'slide-lost',
          title: 'Lost?',
          text:
            'Mental health is complex. Become more self aware of your thoughts, feelings, and actions. Learn how they connect to create the life you are currently living.'
        },
        {
          css: 'slide-think',
          title: 'Overwhelmed?',
          text:
            'I am constantly thinking and analyzing every situation even if it seems all good. Capture greater peace as you l gain perspective.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
