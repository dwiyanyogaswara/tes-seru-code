// import url from "./EndPoint"
import axios from "axios";



var url = axios.create({
    baseURL: "http://dev.farizdotid.com/"
});

  

class DataService {
    getAllProvinsi(){
        return url.get("api/daerahindonesia/provinsi")
    }

    getProvinsi(id){
        return url.get("api/daerahindonesia/provinsi/"+id)
    }

    getKota(id){
        return url.get("api/daerahindonesia/kota?id_provinsi="+id)
    }

    getKecamatan(id){
        return url.get("api/daerahindonesia/kecamatan?id_kota="+id)
    }

    getKelurahan(id){
        return url.get("api/daerahindonesia/kelurahan?id_kecamatan="+id)
    }
}

export default new DataService