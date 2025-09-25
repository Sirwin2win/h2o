// src/features/products/productAPI.js

import axios from 'axios';

const API_BASE = 'https://api.buywaterh2o.com/send-email';


export const createMailAPI = (mail) => axios.post(API_BASE, mail);

