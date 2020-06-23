<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-size: 62.5%;

  @include respond(tab-land) {
    font-size: 60%;
  }

  @include respond(tab-port) {
    font-size: 65%;
  }

  @include respond(big-desktop) {
    font-size: 75%;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  box-sizing: border-box;
  font-family: 'Open Sans';
  line-height: 1.6;
  position: relative;
}

.heading-primary {
  color: $white;
  text-transform: uppercase;
  backface-visibility: hidden;

  display: block;
  font-size: 6rem;
  font-weight: 400;

  @include respond(phone) {
    letter-spacing: 0.2rem;
    font-size: 4rem;
  }
}

.heading-secondary {
  font-size: 4rem;
  font-weight: 700;
  display: inline-block;
  color: $primary-color;
  letter-spacing: 3px;

  @include respond(tab-port) {
    font-size: 3rem;
  }
  @include respond(phone) {
    font-size: 2.5rem;
  }
}

.heading-tertiary {
  font-size: $default-font-size;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

p {
  font-size: $default-font-size;
  margin-bottom: 1rem;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: 'Nanum Myeongjo';
}

.btn {
  display: inline-flex;
  align-items: center;
  background: darken($accent-color, 5%);
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  height: 4rem;
  padding: 0 2.5rem;
  color: #fff;
  font-family: 'Open Sans';
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  will-change: transform;

  &:hover {
    background: darken($accent-color, 10%);
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.2);
    transform: translate3d(0, -2px, 0);
  }
  &:active {
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    transform: translate3d(0, 1px, 0);
  }

  &.btn-transparent {
    background: transparent;
    border: 1px solid $white;
    &:hover {
      background: darken($accent-color, 5%);
      border: 1px solid darken($accent-color, 5%);
    }
  }

  @include respond(tab-port) {
    height: 35;
  }
}
.page {
  position: relative;
  min-height: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

footer {
  flex-shrink: 0;
}

.main-content {
  flex: 1 0 auto;
  @include respond(tab-port) {
    margin-top: 5rem;
  }
}

section {
  padding: 7rem 0;
  @include respond(phone) {
    padding: 3rem 0;
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: rgba($black, 0.8);
  opacity: 0;
  visibility: hidden;
  &.show {
    opacity: 0.8;
    visibility: visible;
  }
}

.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding-left: 1.5625rem;
  padding-right: 1.5625rem;

  @include respond(phone) {
    max-width: 35em;
  }
  @include respond(small-tab) {
    max-width: 44em;
  }

  @include respond(tab-port) {
    max-width: 51em;
  }
  @include respond(tab-mid) {
    max-width: 59em;
  }
  @include respond(tab-land) {
    max-width: 100em;
  }

  @include respond(big-desktop) {
    max-width: 107em;
  }
}
::selection {
  background-color: $primary-color !important;
  color: $white;
}
.section__hero {
  .slick-prev,
  .slick-next {
    z-index: 1;
  }

  .slick-prev {
    left: 5% !important;
  }
  .slick-next {
    right: 5% !important;
  }
  .slick-dots {
    bottom: 2% !important;
    li button:before {
      color: $white;
    }
    li.slick-active button:before {
      color: $accent-color;
    }
  }
}
.section__quotes {
  .slick-dots {
    bottom: 2% !important;
  }
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
