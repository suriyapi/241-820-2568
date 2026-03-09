const BASE_URL = "http://localhost:8000";

// 2. นำ user ที่โหลดมาแสดงในหน้าเว็บ

window.onload = async () => {
// 1. Load user data  จาก api
const response = await axios.get(`${BASE_URL}/users`);
console.log(response.data);
}


