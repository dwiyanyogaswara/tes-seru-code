<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          class="col-sm-1 bg-dark"
          style="margin-left: -9%; width: 17%"
        ></div>
        <div class="col-sm-10 bg-dark text-white">
          <div style="margin: 20px">
            <div class="row">
              <div class="col-2">
                <font-awesome-icon icon="fa-solid fa-id-card" size="4x" />
              </div>
              <div class="col-8">
                <div
                  style="
                    color: white;
                    font-size: 40px;
                    font-weight: 600;
                    position: relative;
                    /* top: -20px; */
                  "
                >
                  Display Klaim
                </div>
              </div>
              <div class="col-2">
                <router-link
                  :to="'/foto-klaim'"
                  class="btn btn-outline-warning"
                  style="float: right"
                  ><font-awesome-icon icon="fa-solid fa-circle-arrow-left"
                /></router-link>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="progress">
                  <div
                    class="
                      progress-bar progress-bar-striped progress-bar-animated
                    "
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 100%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-sm-1 bg-dark"
          style="margin-right: -9%; width: 17%"
        ></div>
      </div>
      <br />
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-5">
                  <label>No Polisi</label>
                </div>
                <div class="col-1" style="text-align: right">:</div>
                <div class="col-6">B 56799 EFG</div>
              </div>
              <div class="row">
                <div class="col-5">
                  <label>Nama Tertanggung</label>
                </div>
                <div class="col-1" style="text-align: right">:</div>
                <div class="col-6">Fajar Pribadi</div>
              </div>
              <div class="row">
                <div class="col-5">
                  <label>No Polis</label>
                </div>
                <div class="col-1" style="text-align: right">:</div>
                <div class="col-6">VCL 0909839849</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
      <br />
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <div class="card" v-for="item in collections" :key="item.id">
            <div class="card-body">
              {{ item.firstName }}
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="onDeleteCollection(item.id)"
                style="float: right"
              >
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayKlaim",
  data() {
    return {
      collections: JSON.parse(localStorage.getItem("collections")),
    };
  },
  methods:{
    onDeleteCollection(id){
      this.collections = this.collections.filter(el=>el.id!=id)
      localStorage.setItem('collections', JSON.stringify(this.collections))
    }
  }
};
</script>

<style>
body {
  background-color: #e4ecff;
}
</style>