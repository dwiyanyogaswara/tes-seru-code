<template>
  <div>
    <router-link :to="'/add-produk'" class="btn btn-primary">Add</router-link>   
    <b-table striped hover :items="data">
      <template #cell(Action)="data">
        <router-link :to="'/edit-produk/'+data.value" class="btn btn-warning">Edit</router-link> 
        <v-button :id="data.value" @close="onDelete" class="btn btn-danger">Delete</v-button>
      </template>
    </b-table>    
  </div>
</template>

<script>
import DataService from "../../services/DataService"
import ButtonComponent from '../../components/ButtonComponent.vue'

export default {
    name : 'ListPage',
     components: {
      'v-button': ButtonComponent
    },
    data() {
      return {
        data:[],
      }
    },
  methods: {
    getAllProduk(){
      DataService.getAll().then(res=>{
        this.data = res.data.map(e => ({...e, Action:e.id}))
        console.log(res.data)
      }).catch(e=>console.log(e))
    },
    saveData(){
            var data = {
                name: this.form.name,
                gender: this.form.gender
            }
            DataService.addData(data).then(
                res => {
                    console.log(res.data)
                }
            ).catch(e => {console.log(e)})
        },
      onDelete(id){
        // console.log("delete "+id)
        DataService.delData(id).then(
          res => {
            // alert("Delete id="+id+" failed!")
            alert("Delete id="+res.data+" success!")
            this.getAllProduk()
          }
        ).catch(e=> {
            console.log(e)
            alert("Delete id="+id+" failed!")
          })
      }
  },
  mounted(){
    this.getAllProduk()
  }
}
</script>
