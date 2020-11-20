<template>
  <div class="col-lg-12">
    <div class="col-lg-12 m-0 p-0" v-if="jobDetail && !loading">
      <img :src="`https://picsum.photos/300/150?id=${jobDetail.jobId}`" alt="">
      <div class="col-lg-12 mt-4">
          <h1>{{jobDetail.positionName}}</h1>
          <h5>{{jobDetail.companyName}}</h5>
          <h6>{{jobDetail.townName }}, {{jobDetail.cityName}} - {{jobDetail.countryName}}</h6>
      </div>
      <div class="col-lg-12 mt-4">
          <strong>Job Detail</strong>
          <p>{{jobDetail.description}}</p>
      </div>
    </div>
    <div class="spinner-border" role="status" v-if="loading">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      jobDetail: null,
      loading: true,
    };
  },
  methods: {
    ...mapActions([
      'getJobDetail',
    ]),
  },
  beforeMount() {
    this.getJobDetail(this.$route.params.id).then((res) => {
      this.jobDetail = res;
    }).then(() => {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
  },
};
</script>

<style>

</style>
