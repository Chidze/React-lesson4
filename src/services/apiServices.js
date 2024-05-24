import { Endpoints } from "../api/endpoints";
import axios from "axios";
const { REACT_APP_BASEURL } = process.env;
const instance = axios.create({
    baseURL : REACT_APP_BASEURL,
})

export const AuthService = {
  handleUser : (data) => {
    instance({
        method: 'post',
        url: Endpoints.USER,
        body: data
    })
    }
}
export const PostService = {
    handleComment : (data) => {
        instance({
            method: 'post',
            url: Endpoints.COMMENT,
            body: data
        })
    }
} 