<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          class="col-sm-1"
          style="margin-left: -9%; width: 17%; background-color: #0043ff"
        ></div>
        <div class="col-sm-10 text-white" style="background-color: #0043ff">
          <div style="margin: 20px">
            <div class="row">
              <div class="col-2">
                <font-awesome-icon icon="fa-solid fa-database" size="4x" />
              </div>
              <div class="col-8">
                <div
                  style="
                    color: white;
                    font-size: 40px;
                    font-weight: 600;
                    position: relative;
                    text-align: center;
                  "
                >
                  Display Klaim
                </div>
              </div>
              <div class="col-2">
                <router-link
                  :to="'/foto-klaim'"
                  class="btn btn-warning"
                  style="float: right"
                  ><font-awesome-icon icon="fa-solid fa-circle-arrow-left"
                /></router-link>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="progress" style="margin-top: 10px">
                  <div
                    class="
                      progress-bar progress-bar-striped progress-bar-animated
                    "
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 100%; background-color: #d0a934"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-sm-1"
          style="margin-right: -9%; width: 17%; background-color: #0043ff"
        ></div>
      </div>
      <br />
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <div
            style="
              border: outset;
              border-width: thick;
              border-radius: 15px;
              padding: 10px;
              background-color: #0043ff;
              color: #ffffff;
              font-size: small;
              font-weight: 600;
            "
          >
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
        <div class="col-1"></div>
      </div>
      <br />
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <div v-for="item in collections" :key="item.id">
            <div
              style="
                border: outset;
                border-width: thick;
                border-radius: 15px;
                padding: 10px;
                background-color: #0043ff;
                color: #ffffff;
                font-size: small;
                font-weight: 600;
              "
            >
              <div class="row">
                <div class="col-12">
                  <div
                    style="
                      border: outset;
                      border-width: thick;
                      border-radius: 15px;
                      padding: 10px;
                      width: fit-content;
                      background-color: #f50000;
                      color: #ffffff;
                      font-size: small;
                      font-weight: 600;
                    "
                  >
                    {{
                      (item.firstName != null ? item.firstName : "") +
                      " " +
                      (item.lastName != null ? item.lastName : "")
                    }}
                  </div>
                  <div
                    v-if="item.biodata != null"
                    style="
                      border: outset;
                      border-width: thick;
                      border-radius: 15px;
                      padding: 10px;
                      width: fit-content;
                      background-color: #f50000;
                      color: #ffffff;
                      font-size: small;
                      font-weight: 600;
                      margin-top: 5px;
                    "
                  >
                    {{ item.biodata != null ? item.biodata : "" }}
                  </div>
                  <div
                    v-if="item.provinsi != null"
                    style="
                      border: outset;
                      border-width: thick;
                      border-radius: 15px;
                      padding: 10px;
                      width: fit-content;
                      background-color: #f50000;
                      color: #ffffff;
                      font-size: small;
                      font-weight: 600;
                      margin-top: 5px;
                    "
                  >
                    {{
                      (item.kelurahan != null
                        ? item.kelurahan.split("-")[1] + ", "
                        : "") +
                      (item.kecamatan != null
                        ? item.kecamatan.split("-")[1] + ", "
                        : "") +
                      (item.kota != null
                        ? item.kota.split("-")[1] + ", "
                        : "") +
                      (item.provinsi != null ? item.provinsi.split("-")[1] : "")
                    }}
                  </div>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-4">
                  <div class="card" style="border: outset; border-width: thick">
                    <div
                      class="card-header"
                      style="
                        font-size: 9px;
                        font-weight: 600;
                        background-color: #f50000;
                        color: #ffffff;
                      "
                    >
                      Photo Selfie
                    </div>
                    <div class="card-body">
                      <img :src="item.url_selfie" />
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="card" style="border: outset; border-width: thick">
                    <div
                      class="card-header"
                      style="
                        font-size: 9px;
                        font-weight: 600;
                        background-color: #f50000;
                        color: #ffffff;
                      "
                    >
                      Photo KTP
                    </div>
                    <div class="card-body">
                      <img :src="item.url_ktp" />
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="card" style="border: outset; border-width: thick">
                    <div
                      class="card-header"
                      style="
                        font-size: 9px;
                        font-weight: 600;
                        background-color: #f50000;
                        color: #ffffff;
                      "
                    >
                      Photo Bebas
                    </div>
                    <div class="card-body">
                      <img :src="item.url_bebas" />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <button
                type="button"
                class="btn btn-danger"
                @click="onDeleteCollection(item.id)"
                style="float: right"
              >
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
              <br />
              <br />
            </div>
            <br />
          </div>
        </div>
        <div class="col-1"></div>
      </div>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <router-link
            :to="'/foto-klaim'"
            class="btn btn-warning"
            style="float: left;"
            ><font-awesome-icon icon="fa-solid fa-circle-arrow-left"
          /></router-link>
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
  methods: {
    onDeleteCollection(id) {
      this.collections = this.collections.filter((el) => el.id != id);
      localStorage.setItem("collections", JSON.stringify(this.collections));
    },
  },
};
</script>

<style>
body {
  background-color: #e4ecff;
}
img {
  max-width: 100%;
  max-height: 500px;
}
</style>