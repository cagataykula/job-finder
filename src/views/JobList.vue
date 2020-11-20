<template>
  <div class="home">
    <div class="col-lg-12">
      <div class="col-lg-12 row" v-if="jobs.total && !loading">
        <JobCard
          class="col-lg-4 col-md-3 col-sm-6 col-xs-12"
          v-for="job in jobs.items"
          :data="job" :key="job.jobId"
        />
      </div>
      <div class="spinner-border" role="status" v-if="loading">
        <span class="sr-only">Loading...</span>
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
  data() {
    return {
      loading: true,
    };
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
    this.loading = true;
    this.getJobs()
      .finally(() => {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      });
  },
};
</script>
