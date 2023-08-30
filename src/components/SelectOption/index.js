import React from 'react'

export default function SelectOption({ onChange, value }) {
    return (
        <div className='mt-4'>
            <label htmlFor="kurir" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kurir :</label>
            <select id="kurir" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} value={value}>
                <option value="">Pilih Pengiriman</option>
                <option value="jne">JNE</option>
                <option value="pos">POS</option>
                <option value="tiki">TIKI</option>
            </select>
        </div>
    )
}
