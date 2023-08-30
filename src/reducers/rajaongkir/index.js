import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const getProvinsi = createAsyncThunk("provinsi", () => {
    return axios.get(`http://localhost:3001/province`).then((response) => response.data?.rajaongkir?.results);
});

export const getOngkos = createAsyncThunk("ongkos", (data) => {
    return axios.get(`http://localhost:3001/ongkos/${data?.asal}/${data?.tujuan}/${data?.berat}/${data?.kurir}`).then((response) => response.data?.rajaongkir?.results);
});


export const rajaongkirSlice = createSlice({
    name: 'provinsi',
    initialState: {
        loading: false,
        provinsi: false,
        error: false,
        provinsiAsal: false,
        provinsiTujuan: false,
        listOngkos: false,
        kotaAsal: false,
        kotaTujuan: false,
    },
    reducers: {
        clearOngkos: (state, action) => {
            state.listOngkos = false;
        },
        postProvinsiAsal: (state, action) => {
            state.provinsiAsal = action.payload;
        },
        postProvinsiTujuan: (state, action) => {
            state.provinsiTujuan = action.payload;
        },
        postKotaAsal: (state, action) => {
            state.kotaAsal = action.payload;
        },
        postKotaTujuan: (state, action) => {
            state.kotaTujuan = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProvinsi.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getProvinsi.fulfilled, (state, action) => {
            state.loading = false;
            state.provinsi = action.payload;
            state.error = "";
        });
        builder.addCase(getProvinsi.rejected, (state, action) => {
            state.loading = false;
            state.provinsi = false;
            state.error = action.error.message;
        });
        builder.addCase(getOngkos.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getOngkos.fulfilled, (state, action) => {
            state.loading = false;
            state.listOngkos = action.payload;
            state.error = "";
        });
        builder.addCase(getOngkos.rejected, (state, action) => {
            state.loading = false;
            state.listOngkos = false;
            state.error = action.error.message;
        });
    }
})

export const { clearOngkos, postProvinsiAsal, postProvinsiTujuan, postKotaAsal, postKotaTujuan } = rajaongkirSlice.actions

export default rajaongkirSlice.reducer