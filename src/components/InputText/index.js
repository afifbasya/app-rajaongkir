import React from 'react'

export default function InputText({ value, onChange }) {
    return (
        <div className='mt-4'>
            <label htmlFor="berat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Berat</label>
            <div className="flex">
                <input value={value} onChange={onChange} type="text" id="berat" className="rounded-none rounded-l-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 " placeholder="Masukkan Gram" />
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md ">
                    <p>gram</p>
                </span>
            </div>

        </div>
    )
}
