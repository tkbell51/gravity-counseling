<template>
  <div class="section__services--grid">
    <ServiceCard
      service-link="/services/individual-therapy"
      service-icon="couch"
      service-title="Individual Therapy"
      service-description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, voluptate!"
    />
    <ServiceCard
      service-link="/services/couples-therapy"
      service-icon="user-friends"
      service-title="Couples Therapy"
      service-description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, voluptate!"
    />
    <ServiceCard
      service-link="/services/teletherapy"
      service-icon="mobile-alt"
      service-title="Teletherapy"
      service-description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, voluptate!"
    />
    <ServiceCard
      service-link="/services/anger-management"
      service-icon="angry"
      service-title="Anger Management"
      service-description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, voluptate!"
    />
    <ServiceCard
      service-link="/services/support-groups"
      service-icon="users"
      service-title="Support Groups"
      service-description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, voluptate!"
    />
    <ServiceCard
      service-link="/services/workshops-presentations"
      service-icon="comment"
      service-title="Workshops &amp; Presentations"
      service-description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, voluptate!"
    />
  </div>
</template>

<script>
import ServiceCard from '@/components/ServiceCard'
export default {
  components: {
    ServiceCard
  }
}
</script>

<style lang="scss">
.section__services--grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
  grid-gap: 3rem;

  a,
  a:link,
  a:visited {
    text-decoration: none;
    color: $black;
  }
}
</style>
