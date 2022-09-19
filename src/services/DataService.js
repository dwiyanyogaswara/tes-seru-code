// import url from "./EndPoint"
import axios from "axios";



var url = axios.create({
    baseURL: "http://localhost:8053"
});

  

class DataService {
    getAll(){
        return url.get("api/produk/get-produk-all")
    }

    getData(id){
        return url.post("api/produk/get-produk?id="+id)
    }

    addData(data){
        return url.post("api/produk/save-produk", data)
    }

    updateData(data){
        return url.post("api/produk/update-produk/", data)
    }

    delData(id){
        return url.delete("api/produk/delete-produk?id="+id)
    }

    // login(data){
    //     return url.post("/auth", data)
    // }
}

export default new DataService