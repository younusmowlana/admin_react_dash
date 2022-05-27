import axios from "axios"

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = 
//     JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//      .accessToken || "";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGViN2VjM2M2MmMzMmI5MDljZDliMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzY2MTg4OCwiZXhwIjoxNjUzOTIxMDg4fQ.Rqvp2Ew-U7b8hXzBZMfzVR_KxTioa8XSMP8utjnGyps";
// console.log(TOKEN);
// console.log(
//     JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken

// )
// console.log(TOKEN)

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});