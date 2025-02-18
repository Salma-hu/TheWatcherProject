import axios from 'axios';
const baseUrl = 'https://api.example.com';

export function scanScope(formData) {

const response = axios.post(baseUrl+'/data',formData);
const data = response.json();



}