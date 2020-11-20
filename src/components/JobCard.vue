<template>
  <div>
    <b-card
      title="Gerber Operatörü"
      :img-src="`https://picsum.photos/300/150?id=${data.jobId}`"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 23rem;"
      class="mb-2"
    >
      <b-card-text>
        <div class="descriptionLine">
          <span class="value">{{data.companyName}}</span>
        </div>
        <div class="descriptionLine">
          <span class="value">{{`${data.townName}, ${data.cityName}`}}</span>
        </div>
        <div class="descriptionLine">
          <span class="value">{{data.distance}}</span>
        </div>
      </b-card-text>
      <b-button
        href="#"
        variant="primary"
      >İncele</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
.descriptionLine {
  font-size: 14px;
  .title {
    font-weight: bold;
    font-size: 15px;
  }
}
</style>
