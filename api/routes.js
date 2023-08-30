const express = require('express')
const router = express.Router()
const axios = require('axios')

// Config Defaults Axios dengan Detail Akun Rajaongkir
axios.defaults.baseURL = 'https://api.rajaongkir.com/starter'
axios.defaults.headers.common['key'] = 'ffbbdb88326a25452e95f95ae4141a72'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Router GET province
router.get('/province', (req, res) => {
  axios.get('/province')
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
})

// Router GET city by province_id
router.get('/kota/:provId', (req, res) => {
  const id = req.params.provId
  axios.get(`/city?province=${id}`)
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
})

// Router GET costs
router.get('/ongkos/:asal/:tujuan/:berat/:kurir', (req, res) => {
  const param = req.params
  axios.post('/cost', {
    origin: param.asal,
    destination: param.tujuan,
    weight: param.berat,
    courier: param.kurir
  })
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
})

router.post('/login', (req, res) => {
  const form = req.body;
  if (form.username == 'admin' && form.password == 'admin') {
    res.send({ status: 'Berhasil', code: 200, token: 'token-admin', user: form.username });
  } else {
    res.status(400).send({
      message: 'Login Gagal!'
    });
  }
});

module.exports = router;