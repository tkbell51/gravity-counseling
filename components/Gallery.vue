<template>
  <div class="gallery">
    <figure
      v-for="(image, index) in gallery"
      :key="index"
      :class="`gallery__item gallery__item--${image.num}`"
    >
      <img
        :src="require(`~/assets/img/gallery/gallery-${image.num}.jpg`)"
        :alt="`${image.alt}`"
        class="gallery__img"
      />
    </figure>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallery: [
        {
          num: '3',
          alt:
            'You never asked me how I was doing. And for your information I was doing terribly.'
        },
        { num: '4', alt: "If it doesn't evolve me, it doesnt't involve me." },
        { num: '17', alt: 'There is no health without mental health.' },
        { num: '5', alt: 'Things that help with depression days' },
        { num: '15', alt: 'On average it takes 66 days to form a habit' },
        {
          num: '18',
          alt:
            'The one thing you are always responsible for is how you act, no matter how you feel.'
        },
        { num: '7', alt: 'You are only as needy as your unmet needs' },
        {
          num: '6',
          alt:
            "If we don't change, we don't grow. If we don't grow, we aren't really living."
        },
        {
          num: '8',
          alt:
            "20 things that women should stop wearing after the age of 30: 1-20 The weight of other people's expectations & judgements."
        },
        { num: '2', alt: 'You are enough' },
        {
          num: '11',
          alt:
            "You don't have to have all the answers. You don't have to fix it all by yourself. You don't have to pretend to be ok."
        },
        { num: '10', alt: 'you need to start somewhere' },
        {
          num: '9',
          alt:
            "Seeing a therapist doesn't mean there's something wrong with you."
        },
        {
          num: '1',
          alt:
            'You can develop any habit or thought or behavior that you consider desirable or necessary.'
        },
        { num: '12', alt: "Q's to check-in with yourself" },
        {
          num: '13',
          alt: 'No everybody is built like you. Not everyone is built for you.'
        },
        {
          num: '14',
          alt:
            'Follow your calling. Trust your talent. Chase your dream. Believe in yourself.'
        },
        {
          num: '16',
          alt:
            'When we open up enough to share the darkest parts of ourselves with someone else, we let a little light in.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  grid-gap: 1rem;
  @include respond(phone) {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__item {
    transition: all 0.2s ease-in;
    // &:hover {
    //   transform: scale(1.5);
    // }
    &--1 {
      grid-column: span 2;
      grid-row: span 2;
      @include respond(phone) {
        grid-column: span 1;
        grid-row: span 1;
      }
    }
    &--2 {
      grid-column: span 2;
      grid-row: span 2;
      @include respond(phone) {
        grid-column: span 1;
        grid-row: span 1;
      }
    }
    // &--3 {
    //   grid-column: 1/3;
    //   grid-row: 7/9;
    // }
    // &--4 {
    //   grid-column: 7/9;
    //   grid-row: 1/3;
    // }
    // &--5 {
    //   grid-column: 3/5;
    //   grid-row: 5/7;

    // }
    // &--6 {
    //   grid-column: 7/9;
    //   grid-row: 7/9;
    // }

    // &--7 {
    //   grid-column: 5/7;
    //   grid-row: 1/3;
    // }

    // &--8 {
    //   grid-column: 5/7;
    //   grid-row: 5/7;
    // }
    // &--9 {
    //   grid-column: 3/5;
    //   grid-row: 9/11;
    // }
    // &--10 {
    //   grid-column: 3/5;
    //   grid-row: 7/9;
    // }
    // &--11 {
    //   grid-column: 1/3;
    //   grid-row: 1/3;
    // }
    // &--12 {
    //   grid-column: 1/3;
    //   grid-row: 3/5;
    // }
    // &--13 {
    //   grid-column: 5/7;
    //   grid-row: 7/9;
    // }

    // &--14 {
    //   grid-column: 7/9;
    //   grid-row: 5/7;
    // }
    // &--15 {
    //   grid-column: 5/7;
    //   grid-row: 9/11;
    // }
    // &--16 {
    //   grid-column: 1/3;
    //   grid-row: 9/11;
    // }
    &--17 {
      grid-column: span 2;
      grid-row: span 2;
      @include respond(phone) {
        grid-column: span 1;
        grid-row: span 1;
      }
    }
    &--18 {
      grid-column: span 2;
    }
  }
}
</style>
