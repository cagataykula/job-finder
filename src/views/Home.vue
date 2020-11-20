<template>
  <div class="home">
    <div class="col-lg-12">
      <div class="col-lg-12 row" v-if="jobs.total">
        <JobCard
          class="col-lg-4 col-md-3 col-sm-6 col-xs-12"
          v-for="job in jobs.items"
          :data="job" :key="job.jobId"
        />
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import JobCard from '@/components/JobCard.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    JobCard,
  },
  methods: {
    ...mapActions([
      'getJobs',
    ]),
  },
  computed: {
    ...mapGetters([
      'jobs',
    ]),
  },
  beforeMount() {
    this.getJobs();
  },
};
</script>
