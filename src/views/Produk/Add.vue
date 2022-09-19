<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Deskripsi:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.deskripsi"
          placeholder="Enter deskripsi"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Gambar:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.gambar"
          placeholder="Enter gambar"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Kategori:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.kategori"
          :options="kategori"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Stok:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.stok"
          placeholder="Enter stok"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
    import DataService from "../../services/DataService"

  export default {
    name : 'AddPage',
    data() {
      return {
        form: {
          name: '',
          deskripsi: '',
          gambar: '',
          kategori: null,
          stok: ''
        },
        kategori: [{ text: 'Select One', value: null }, '1', '2'],
        show: true
      }
    },
    methods: {
        saveData(){
            var data = {
                nama: this.form.name,
                deskripsi: this.form.deskripsi,
                gambar: this.form.gambar,
                id_kategori: this.form.kategori,
                stok: this.form.stok,
            }

            console.log(data)
            DataService.addData(data).then(
                res => {
                    console.log(res.data)
                }
            ).catch(e => {console.log(e)})
        },
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
        this.saveData()
        this.$router.push({path: '/list-produk'})
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.deskripsi = ''
        this.form.gambar = ''
        this.form.kategori = null
        this.form.stok = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>