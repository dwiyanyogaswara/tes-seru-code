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
                <font-awesome-icon icon="fa-solid fa-camera-retro" size="4x" />
              </div>
              <div class="col-7">
                <div
                  style="
                    color: white;
                    font-size: 40px;
                    font-weight: 600;
                    position: relative;
                    text-align: center;
                  "
                >
                  Foto Klaim
                </div>
              </div>
              <div class="col-3">
                <router-link
                  :to="'/display-klaim'"
                  class="btn btn-success"
                  style="float: right"
                  ><font-awesome-icon icon="fa-solid fa-circle-arrow-right"
                /></router-link>
                <router-link
                  :to="'/'"
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
                    aria-valuenow="66"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 66%; background-color: #d0a934"
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
          <div class="card" style="border: outset; border-width: thick">
            <div
              class="card-header"
              style="
                font-size: large;
                font-weight: 600;
                background-color: #0043ff;
                color: #ffffff;
              "
            >
              Foto Selfie
            </div>
            <div class="card-body">
              <input
                type="file"
                class="form-control-file"
                @change="onFileChangeSelfie"
              />
              <br />
              <button type="button" class="btn btn-outline-primary">
                <font-awesome-icon icon="fa-solid fa-upload" />
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="onDeleteSelfie"
              >
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
              <div id="preview">
                <img v-if="url_selfie" :src="url_selfie" />
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
          <div class="card" style="border: outset; border-width: thick">
            <div
              class="card-header"
              style="
                font-size: large;
                font-weight: 600;
                background-color: #0043ff;
                color: #ffffff;
              "
            >
              Foto KTP
            </div>
            <div class="card-body">
              <input type="file" @change="onFileChangeKTP" />
              <br />
              <button type="button" class="btn btn-outline-primary">
                <font-awesome-icon icon="fa-solid fa-upload" />
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="onDeleteKTP"
              >
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
              <div id="preview">
                <img v-if="url_ktp" :src="url_ktp" />
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
          <div class="card" style="border: outset; border-width: thick">
            <div
              class="card-header"
              style="
                font-size: large;
                font-weight: 600;
                background-color: #0043ff;
                color: #ffffff;
              "
            >
              Foto Bebas
            </div>
            <div class="card-body">
              <input type="file" @change="onFileChangeBebas" />
              <br />
              <button type="button" class="btn btn-outline-primary">
                <font-awesome-icon icon="fa-solid fa-upload" />
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="onDeleteBebas"
              >
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
              <div id="preview">
                <img v-if="url_bebas" :src="url_bebas" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <button
            type="button"
            class="btn btn-primary"
            style="float: right; margin-top: 15px"
            @click="onSubmit"
          >
            Submit
          </button>
        </div>
        <div class="col-1"></div>
      </div>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <router-link
            :to="'/'"
            class="btn btn-warning"
            style="float: left; margin-top: 5px"
            ><font-awesome-icon icon="fa-solid fa-circle-arrow-left"
          /></router-link>
          <router-link
            :to="'/display-klaim'"
            class="btn btn-success"
            style="float: right; margin-top: 5px"
            ><font-awesome-icon icon="fa-solid fa-circle-arrow-right"
          /></router-link>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FotoKlaim",
  data() {
    return {
      url_selfie: localStorage.getItem("url_selfie") || null,
      url_ktp: localStorage.getItem("url_ktp") || null,
      url_bebas: localStorage.getItem("url_bebas") || null,
    };
  },
  methods: {
    onFileChangeSelfie(e) {
      const file = e.target.files[0];
      this.url_selfie = URL.createObjectURL(file);
      localStorage.setItem("url_selfie", this.url_selfie);
    },
    onFileChangeKTP(e) {
      const file = e.target.files[0];
      this.url_ktp = URL.createObjectURL(file);
      localStorage.setItem("url_ktp", this.url_ktp);
    },
    onFileChangeBebas(e) {
      const file = e.target.files[0];
      this.url_bebas = URL.createObjectURL(file);
      localStorage.setItem("url_bebas", this.url_bebas);
    },
    onDeleteSelfie() {
      this.url_selfie = null;
      localStorage.removeItem("url_selfie");
    },
    onDeleteKTP() {
      this.url_ktp = null;
      localStorage.removeItem("url_ktp");
    },
    onDeleteBebas() {
      this.url_bebas = null;
      localStorage.removeItem("url_bebas");
    },
    onSubmit() {
      var collections = [];
      var newdata = {
        id: 0,
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
        biodata: localStorage.getItem("biodata"),
        provinsi: localStorage.getItem("provinsi"),
        kota: localStorage.getItem("kota"),
        kecamatan: localStorage.getItem("kecamatan"),
        kelurahan: localStorage.getItem("kelurahan"),
        url_selfie: localStorage.getItem("url_selfie"),
        url_ktp: localStorage.getItem("url_ktp"),
        url_bebas: localStorage.getItem("url_bebas"),
      };

      var need_review = ''
      Object.keys(newdata).forEach(function(key){
        if(newdata[key] == null){
          key = key.replace('firstName', 'first name ')
          key = key.replace('lastName', 'last name ')
          key = key.replace('url_', 'foto ')
          need_review += key + ", " 
        }
      })
      if (need_review != '') {
        alert(need_review + " masih kosong, mohon diisi dulu!");
      } else {
        var localcollections = localStorage.getItem("collections")
          ? JSON.parse(localStorage.getItem("collections"))
          : null;
        if (localcollections != null) {
          newdata.id = localcollections.length;
          localcollections.push(newdata);
          collections = localcollections;
        } else {
          collections.push(newdata);
        }
        localStorage.setItem("collections", JSON.stringify(collections));

        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
        localStorage.removeItem("biodata");
        localStorage.removeItem("provinsi");
        localStorage.removeItem("kota");
        localStorage.removeItem("kecamatan");
        localStorage.removeItem("kelurahan");
        localStorage.removeItem("url_selfie");
        localStorage.removeItem("url_ktp");
        localStorage.removeItem("url_bebas");

        this.url_selfie = null;
        this.url_ktp = null;
        this.url_bebas = null;

        alert("Submit data success!");
      }
    },
  },
};
</script>

<style>
body {
  background-color: #e4ecff;
}
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}
</style>

