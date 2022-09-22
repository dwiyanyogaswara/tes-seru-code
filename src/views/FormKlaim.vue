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
                  Form Klaim
                </div>
              </div>
              <div class="col-2">
                <router-link
                  :to="'/foto-klaim'"
                  class="btn btn-outline-success"
                  style="float: right"
                  ><font-awesome-icon icon="fa-solid fa-circle-arrow-right"
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
                    aria-valuenow="33"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 33%"
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
          <div class="bg-dark text-white">
            <h3><center>Registrasi Klaim</center></h3>
          </div>
        </div>
        <div class="col-1"></div>
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
              <div class="row">
                <div class="col-5">
                  <label>Periode</label>
                </div>
                <div class="col-1" style="text-align: right">:</div>
                <div class="col-6">1 Juli 2018 - 1 Juli 2023</div>
              </div>
              <div class="row">
                <div class="col-5">
                  <label>Nilai Pertanggungan</label>
                </div>
                <div class="col-1" style="text-align: right">:</div>
                <div class="col-6">Rp 50.000.000,-</div>
              </div>
              <div class="row">
                <div class="col-5">
                  <label>Buatan/Merk</label>
                </div>
                <div class="col-1" style="text-align: right">:</div>
                <div class="col-6">Jepang</div>
              </div>
              <div class="row">
                <div class="col-5">
                  <label>Tahun Pembuatan</label>
                </div>
                <div class="col-1" style="text-align: right">:</div>
                <div class="col-6">2008</div>
              </div>
              <div class="row">
                <div class="col-5">
                  <label>No. Mesin</label>
                </div>
                <div class="col-1" style="text-align: right">:</div>
                <div class="col-6">MK76736473</div>
              </div>
              <div class="row">
                <div class="col-5">
                  <label>No. Rangka</label>
                </div>
                <div class="col-1" style="text-align: right">:</div>
                <div class="col-6">MCM87342834</div>
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
          <div class="card">
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder="Enter firstname"
                    v-model="firstName"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder="Enter lastname"
                    v-model="lastName"
                  />
                </div>
                <div class="form-group">
                  <label for="comment">Biodata:</label>
                  <textarea
                    class="form-control"
                    rows="3"
                    id="biodata"
                    name="text"
                    v-model="biodata"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="sel1" class="form-label">Provinsi:</label>
                  <select
                    class="form-select"
                    id="provinsi"
                    v-model="selected_provinsi"
                  >
                    <option :value="null"></option>
                    <option
                      v-for="option in options_provinsi"
                      :value="option.id + '-' + option.nama"
                      :key="option.id"
                    >
                      {{ option.nama }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="sel1" class="form-label">Kota:</label>
                  <select
                    v-bind:disabled="selected_provinsi == null"
                    class="form-select"
                    id="kota"
                    v-model="selected_kota"
                  >
                    <option :value="null"></option>
                    <option
                      v-for="option in options_kota"
                      :value="option.id + '-' + option.nama"
                      :key="option.id"
                    >
                      {{ option.nama }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="sel1" class="form-label">Kecamatan:</label>
                  <select
                    v-bind:disabled="selected_kota == null"
                    class="form-select"
                    id="kecamatan"
                    v-model="selected_kecamatan"
                  >
                    <option :value="null"></option>
                    <option
                      v-for="option in options_kecamatan"
                      :value="option.id + '-' + option.nama"
                      :key="option.id"
                    >
                      {{ option.nama }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="sel1" class="form-label">Kelurahan:</label>
                  <select
                    v-bind:disabled="selected_kecamatan == null"
                    class="form-select"
                    id="kelurahan"
                    v-model="selected_kelurahan"
                  >
                    <option :value="null"></option>
                    <option
                      v-for="option in options_kelurahan"
                      :value="option.id + '-' + option.nama"
                      :key="option.id"
                    >
                      {{ option.nama }}
                    </option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10"></div>
        <div class="col-1"></div>
      </div>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10"></div>
        <div class="col-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "FormKlaim",
  data() {
    return {
      data: [{ id: 1, tes: "aja" }],
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
      biodata: localStorage.getItem("biodata"),
      options_provinsi: [],
      selected_provinsi: localStorage.getItem("provinsi") || null,
      options_kota: [],
      selected_kota: localStorage.getItem("kota") || null,
      options_kecamatan: [],
      selected_kecamatan: localStorage.getItem("kecamatan") || null,
      options_kelurahan: [],
      selected_kelurahan: localStorage.getItem("kelurahan") || null,
      kota_filled: true,
      kecamatan_filled: true,
    };
  },
  methods: {
    getAllProvinsi() {
      DataService.getAllProvinsi().then(
        (res) => (this.options_provinsi = res.data.provinsi)
      );
      if (this.selected_provinsi != null) {
        this.getKota(this.selected_provinsi);
      }
    },
    getKota(id) {
      id = id.split("-")[0];
      DataService.getKota(id).then(
        (res) => (this.options_kota = res.data.kota_kabupaten)
      );
      if (this.selected_kota != null) {
        this.getKecamatan(this.selected_kota);
      }
    },
    getKecamatan(id) {
      id = id.split("-")[0];
      DataService.getKecamatan(id).then(
        (res) => (this.options_kecamatan = res.data.kecamatan)
      );
      if (this.selected_kecamatan != null) {
        this.getKelurahan(this.selected_kecamatan);
      }
    },
    getKelurahan(id) {
      id = id.split("-")[0];
      DataService.getKelurahan(id).then(
        (res) => (this.options_kelurahan = res.data.kelurahan)
      );
    },
  },
  watch: {
    firstName(newText) {
      localStorage.setItem("firstName", newText);
    },
    lastName(newText) {
      localStorage.setItem("lastName", newText);
    },
    biodata(newText) {
      localStorage.setItem("biodata", newText);
    },
    selected_provinsi(newSelected) {
      if (newSelected != null) {
        this.getKota(newSelected);
        localStorage.setItem("provinsi", newSelected);
      } else {
        localStorage.removeItem("provinsi");
      }
      localStorage.removeItem("kota");
      localStorage.removeItem("kecamatan");
      localStorage.removeItem("kelurahan");
      this.selected_kota = null;
      this.selected_kecamatan = null;
      this.selected_kelurahan = null;
    },
    selected_kota(newSelected) {
      if (newSelected != null) {
        this.getKecamatan(newSelected);
        localStorage.setItem("kota", newSelected);
      } else {
        localStorage.removeItem("kota");
      }
      localStorage.removeItem("kecamatan");
      localStorage.removeItem("kelurahan");
      this.selected_kecamatan = null;
      this.selected_kelurahan = null;
    },
    selected_kecamatan(newSelected) {
      if (newSelected != null) {
        this.getKelurahan(newSelected);
        localStorage.setItem("kecamatan", newSelected);
      } else {
        localStorage.removeItem("kecamatan");
      }
      localStorage.removeItem("kelurahan");
      this.selected_kelurahan = null;
    },
    selected_kelurahan(newSelected) {
      localStorage.setItem("kelurahan", newSelected);
    },
  },
  mounted() {
    this.getAllProvinsi();
  },
};
</script>

<style>
body {
  background-color: #e4ecff;
}
</style>