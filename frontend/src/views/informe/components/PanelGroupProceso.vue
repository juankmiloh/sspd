<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="24" :sm="24" :lg="12" class="card-panel-col">
      <div class="card-panel" @click="handleSetPieChartData({item: 'servicio'})">
        <div class="card-panel-icon-wrapper icon-shopping">
          <svg-icon icon-class="people" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Clientes
          </div>
          <h2>{{ nombreServicio }}</h2>
        </div>
      </div>
    </el-col>
    <!-- en curso -->
    <!-- <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetPieChartData({item: 'fase', msg: 'en curso'})">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="form" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            En curso
          </div>
          <count-to :start-val="0" :end-val="countActivos" :duration="5000" class="card-panel-num" />
        </div>
      </div>
    </el-col> -->
    <!-- Completadas -->
    <el-col :xs="24" :sm="24" :lg="12" class="card-panel-col">
      <div class="card-panel" @click="handleSetPieChartData({item: 'fase', msg: 'completadas'})">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="skill" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Completadas
          </div>
          <count-to :start-val="0" :end-val="countTerminados" :duration="5000" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <!-- anuladas -->
    <!-- <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetPieChartData({item: 'fase', msg: 'anuladas'})">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="eye" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Anuladas
          </div>
          <count-to :start-val="0" :end-val="countEliminados" :duration="5000" class="card-panel-num" />
        </div>
      </div>
    </el-col> -->
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'
import { getListCantidadProcesos } from '@/api/unigrasas/informes'

export default {
  components: {
    CountTo
  },
  props: {
    servicio: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      countActivos: 0,
      countTerminados: 0,
      countEliminados: 0,
      nombreServicio: 'Todos'
    }
  },
  watch: {
    servicio: {
      deep: true,
      handler(val) {
        this.nombreServicio = val.nombre
        this.getCantidadProcesos(val.idservicio)
      }
    }
  },
  async created() {
    await this.initView()
  },
  methods: {
    initView() {
      this.getCantidadProcesos(0) // 0: Indica todos los servicios / 1: Indica servicio de energ??a / 2: Gas / 3: GLP
    },
    handleSetPieChartData(type) {
      this.$emit('handleSetPieChartData', type)
    },
    async getCantidadProcesos(idservicio) {
      // console.log('Servicio observable -> ', idservicio)
      await getListCantidadProcesos(idservicio).then((response) => {
        // console.log(response)
        this.countActivos = response['En curso'].cantidad
        this.countTerminados = response['Pagada'].cantidad
        this.countEliminados = response['Anulada'].cantidad
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
