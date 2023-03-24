import axios from "axios"

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = 
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGViN2VjM2M2MmMzMmI5MDljZDliMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODIwODc4MiwiZXhwIjoxNjU4NDY3OTgyfQ.QcA0_CIiVYiXQa9WnWYfP7BZvH01hRAzkQh8MVzbsSo"
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGViN2VjM2M2MmMzMmI5MDljZDliMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTQ2ODM1NiwiZXhwIjoxNjc5NzI3NTU2fQ.U9VSxJRXEdc8n90RgNtFZ_Is4zXUe_ZLJ2xWPcnYf7s";
// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";
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