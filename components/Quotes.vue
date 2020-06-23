<template>
  <div>
    <section class="section__quotes">
      <VueSlickCarousel
        :dots="true"
        :fade="true"
        :autoplay="true"
        :autoplay-speed="15000"
      >
        <div
          v-for="(testimony, index) in testimonialSlide"
          :key="index"
          class="slide"
        >
          <p class="testimonial__quote">
            {{ testimony.quote }}
          </p>
          <!-- <QuoteMark class="end" /> -->
          <p class="testimonial__name">{{ testimony.name }}</p>
        </div>
      </VueSlickCarousel>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonialSlide: [
        {
          quote:
            "A lot of people you think you know, you don't know, until you find out you don't know then it may be too late to know.",
          name: 'Kenneth B. Clark'
        },
        {
          quote: 'There is more on the surface than what our eyes can see',
          name: 'Aaron T. Beck'
        },
        {
          quote:
            "For every problem there is a solution. The problem is...we don't like the solution.",
          name: 'Kervin K. Searles'
        },
        {
          quote:
            'It is not primarily our physical selves that limit us but rather our mindset about our physical limits.',
          name: 'Ellen J. Langer'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section__quotes {
  & > div {
    height: inherit;
    position: relative;
  }
  .tabs__header {
    position: absolute;
    display: flex;
    list-style: none;
    transform: translateX(-50%);
    font-size: $default-font-size;
    bottom: 10px;
    left: 50%;
    z-index: 10;

    cursor: pointer;
    li {
      cursor: pointer;
      display: inline-block;
      padding: 0.5rem 1rem;
      font-size: 0;
      border-radius: 5px;
      white-space: nowrap;
      transition: all 0.2s ease-in;
      color: transparent;
      &:before {
        content: '';
        height: 10px;
        width: 10px;
        background-color: $white;
        border-radius: 50%;
        display: inline-block;
      }

      &:not(:last-child) {
        margin-right: 2rem;
      }
      &:hover {
        background: rgba($white, 0.2);
      }
      &.tab__selected:before {
        background-color: $accent-color;
      }
    }
  }

  .slide {
    background: linear-gradient(19deg, #bdcfe2 0%, #0b4c9a 100%);
    padding: 0;
    height: 35rem;
    display: flex !important;
    transition: all 0.2s ease-in;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:before,
    &:after {
      position: absolute;
      font-family: sans-serif;
      font-size: calc(40rem + 1vw);
      color: rgba($white, 0.2);
    }
    &:before {
      content: '\201c';
      left: 1%;
      top: -13rem;
    }
    &:after {
      content: '\201d';
      right: 1%;
      top: -1rem;
    }

    &.active {
      opacity: 1;
    }
  }
  .testimonial {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    // padding: 0 15%;

    &__quote {
      text-align: center;
      font-family: 'Nanum Myeongjo';
      // width: 90%;
      font-size: calc(2rem + 1vw);
      margin: 0 auto;
      color: $white;
      padding: 0 10%;

      @include respond(phone) {
        padding: 0;
      }
    }
    &__name {
      font-size: $default-font-size;
      font-style: italic;
      text-align: center;
    }
  }
}
</style>
