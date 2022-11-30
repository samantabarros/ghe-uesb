<template>
  <div class="gerenciamento-notas-item row">
    <div class="col-10">
      <div class="aluno">
        <span>{{ data.aluno }}</span>
        <button
          v-if="data.receipt"
          @click="openReceipt()"
          class="btn btn-sm btn-outline-primary"
        >
          <i class="fa fa-paperclip"></i>
          Ver Histórico
          <i class="fa fa-external-link-alt"></i>
        </button>
      </div>
      <small v-date-format="data.createdAt"/>
    </div>
    <div class="col-2" v-nota-format="data.value"/>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true }
  },
  methods: {
    openReceipt () {
      window.open(this.data.receipt, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">
  .gerenciamento-notas-item {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--dark-gray);
    .aluno {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>