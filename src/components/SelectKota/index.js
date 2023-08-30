import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function SelectKota({ provinsi, value, onChange }) {
    const [listKota, setKota] = useState([])



    useEffect(() => {
        if (provinsi) {

            const getKota = async () => {
                await axios.get(`http://localhost:3001/kota/${provinsi}`)
                    .then((response) => {
                        setKota(response.data?.rajaongkir?.results)
                    })
            }

            getKota(provinsi)
        }
    }, [provinsi])

    return (
        <div className='mt-4'>
            <label htmlFor="kota" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kota :</label>
            <select id="kota" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} value={value}>
                <option value="">Pilih Kota</option>
                {listKota && listKota?.map((kota) => (
                    <option key={kota.city_id} value={kota.city_id}>{kota.type} {kota.city_name}</option>
                ))}
            </select>
        </div>
    )
}
