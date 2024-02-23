import axios from "axios"
require('dotenv').config()

export function Onsubmit(e){
e.preventdefault()
axios.post(`${process.env.mainlik}/admin/admin/login`,)


}