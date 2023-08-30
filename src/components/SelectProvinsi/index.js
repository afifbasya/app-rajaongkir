import React from 'react'
import { useSelector } from 'react-redux';

export default function SelectProvinsi({ onChange, value }) {
    const { provinsi } = useSelector((state) => state.rajaongkir);
    return (
        <div>
            <label htmlFor="provinsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provinsi :</label>
            <select id="provinsi" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} value={value}>
                <option value="">Pilih Provinsi</option>
                {provinsi && provinsi?.map((prov) => (
                    <option key={prov.province_id} value={prov.province_id}>{prov.province}</option>
                ))}

            </select>
        </div>
    )
}
