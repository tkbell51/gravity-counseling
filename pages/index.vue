<template>
  <div>
    <HeroSlider />
    <section class="section__help">
      <div class="container">
        <div class="section__help--text">
          <h2 class="heading-secondary">It sounds like I can help.</h2>

          <p>
            I got you! It has been proven therapy can help someone like
            you...who may be going through a crisis, breakup, remembering past
            trauma, or just feeling anxious, sad, and angry. Finding the right
            therapist and having a great relationship with them is a vital
            component in reaching the goals that you have set. More important
            than orientation or technique is the therapeutic alliance that one
            creates with a therapist. My alliance with you will ensure there is
            a connection, an understanding of goals, and how we are going to go
            about trying to reach those goals. I will give you the upmost
            respect, provide a listening ear to gain understanding of your life,
            issue unbiased honesty, and share evidenced-based techniques you can
            implement daily. Starting today, book an appointment and take one
            hour each week to focus completely on yourself.
          </p>
          <SimplePractice />
        </div>
      </div>
    </section>
    <section class="section__logo-cta">
      <div class="container">
        <div class="logo-cta__box">
          <img
            src="../assets/img/gravity-counsel-full.svg"
            alt="Logo"
            class="logo-cta__logo"
          />
        </div>
      </div>
    </section>
    <section class="section__about">
      <div class="container">
        <div class="about__box">
          <div class="about__img--box">
            <img
              src="../assets/img/kervin-searles.png"
              alt="Kervin Searles smiling"
              class="about__img"
            />
          </div>
          <div class="about__text">
            <h3 class="heading-tertiary">Welcome Note</h3>
            <h2 class="heading-secondary">Kervin K. Searles, LPC-A</h2>

            <p>
              It is estimated that only about 17% of US adults are considered to
              be in a state of optimal mental health. Therapy happens when we
              address what is preventing us from reaching our goals. If you want
              to live your best life, sit with a therapist...the conversation is
              different.
            </p>
            <nuxt-link class="about__phone" to="tel:864-724-9187"
              ><Fas class="about__icon" i="phone" />(864) 724-9187</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
    <section class="section__services">
      <div class="container">
        <h2 class="heading-secondary">Services</h2>

        <ServicesGrid />

        <nuxt-link class="btn" to="services">View Services</nuxt-link>
      </div>
    </section>
    <Quotes />

    <section class="section__online-cta">
      <div class="container">
        <div class="online__box">
          <div class="online__text">
            <h2 class="heading-secondary">Online Mental Health Resources</h2>
            <MentalResourceGrid />
          </div>
        </div>
      </div>
    </section>

    <section class="section__gallery">
      <div class="container">
        <Gallery />
      </div>
    </section>
    <!-- <ContactForm /> -->
  </div>
</template>

<script>
import HeroSlider from '@/components/HeroSlider'
import Quotes from '@/components/Quotes'
import Fas from '@/components/Fas'
import SimplePractice from '@/components/SimplePractice'
// import ContactForm from '@/components/ContactForm'
import ServicesGrid from '@/components/ServicesGrid'
import Gallery from '@/components/Gallery'
import MentalResourceGrid from '@/components/MentalResourceGrid'

export default {
  components: {
    HeroSlider,
    Quotes,
    Fas,
    SimplePractice,
    // ContactForm,
    ServicesGrid,
    Gallery,
    MentalResourceGrid
  }
}
</script>

<style lang="scss">
.section {
  &__help {
    &--text {
      text-align: center;

      .heading-primary {
        color: $primary-color;
      }
      @include respond(tab-port) {
        width: 80%;
        margin: 0 auto;
      }
      @include respond(phone) {
        width: 100%;
      }
    }
  }
  &__logo-cta {
    position: relative;
    .logo-cta {
      &__box {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      &__logo-box {
      }
      &__logo {
        width: 75%;
        height: 100%;
        @include respond(phone) {
          width: 100%;
        }
      }
      &__text {
        position: relative;
        z-index: 20;

        .heading-tertiary {
          color: $white;
        }
        .heading-secondary {
          color: $accent-color;
        }
      }
    }
  }

  &__services {
    .heading-secondary,
    .btn {
      margin-top: 3rem;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &__about {
    .about {
      &__box {
        display: flex;
        justify-content: center;
        @include respond(phone) {
          flex-direction: column;
          text-align: center;
        }
      }
      &__img {
        width: 90%;
        @include respond(phone) {
          width: 100%;
        }
      }
      &__img--box {
        flex: 45%;
        text-align: right;
        margin-right: 5rem;
        @include respond(phone) {
          margin-right: 0;
        }
      }
      &__text {
        flex: 65%;
      }
      &__phone {
        font-size: 3rem;
        &,
        &:link,
        &:visited {
          text-decoration: none;
          color: $primary-color;
          font-weight: bold;
        }
        @include respond(phone) {
          font-size: $default-font-size;
        }
      }
      &__icon {
        color: $accent-color;
        margin-right: 1rem;
      }
    }
  }

  &__online-cta {
    background: #efefef;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    // height: 47rem;
    // padding-left: 10%;
    // padding-right: 10%;
    // display: flex;
    // align-items: center;
    text-align: center;

    .online__text {
      color: $white;

      .heading-secondary {
        // color: $white;
        margin-bottom: 2rem;
      }
      .btn {
        margin-top: 2rem;
      }
    }
  }
}
</style>
