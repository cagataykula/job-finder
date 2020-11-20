<template>
  <div class="home">
    <div class="col-lg-12">
      <div class="col-lg-12 p-5">
        <form class="form-inline my-2 my-lg-0">
          <div class="col-md-6 row">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="search.text"
            >
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </div>
          <div class="col-md-6 row">
            <span>Province: </span>
            <div class="input-group">
              <select class="custom-select" v-model="search.city">
                <option value="" selected>All</option>
                <option value="istanbul">Istanbul</option>
                <option value="ankara">Ankara</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div class="col-lg-12 row" v-if="jobData && jobData.total && !loading">
        <JobCard
          class="col-lg-4 col-md-3 col-sm-6 col-xs-12"
          v-for="job in jobData.items"
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
      jobData: null,
      search: {
        text: '',
        city: '',
      },
    };
  },
  methods: {
    ...mapActions([
      'getJobs',
    ]),
    searchFunc() {
      let result = this.jobs.items
        .filter((item) => (
          item.cityName.toLocaleLowerCase('tr').includes(this.search.city.toLocaleLowerCase('tr'))
        ));

      result = result
        .filter((item) => (
          item.positionName.toLocaleLowerCase('tr').includes(this.search.text.toLocaleLowerCase('tr'))
        ));
      this.jobData = { items: result, total: result.length };
    },
  },
  computed: {
    ...mapGetters([
      'jobs',
    ]),
  },
  beforeMount() {
    this.loading = true;
    this.getJobs()
      .then((res) => {
        this.jobData = res;
      })
      .finally(() => {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      });
  },
  watch: {
    // eslint-disable-next-line func-names
    'search.text': function (oldVal, newVal) {
      if (oldVal === newVal) return;
      this.searchFunc();
    },
    // eslint-disable-next-line func-names
    'search.city': function (oldVal, newVal) {
      if (oldVal === newVal) return;
      this.searchFunc();
    },
  },
};
</script>
