import React from 'react'
import { useSelector } from 'react-redux';
import { numberWithCommas } from '../../utils';

export default function ListOngkos() {
    const { listOngkos } = useSelector((state) => state.rajaongkir);

    if (!listOngkos) {
        return null
    }

    return (
        <div className="mt-4 p-8 w-3/4 bg-white rounded-lg shadow dark:border">
            {listOngkos && listOngkos.map((kurir, index) => {
                return (
                    <div key={index}>
                        <h3 className='text-xl font-bold'>{kurir.name}</h3>
                        {kurir?.costs?.map((cost, index) => {
                            return (
                                <div className='border p-2 rounded mt-4 border-slate-600' key={index}>
                                    <p className='text-lg font-bold'>{cost.service}</p>
                                    <p>{cost.description}</p>
                                    {cost?.cost?.map((detail, index) => {
                                        return (
                                            <div key={index} className='mt-4'>
                                                <p className='text-sm'>Estimasi : <span className='font-bold'>{detail.etd} hari</span></p>
                                                <p className='text-sm'>Harga : <span className='font-bold'>Rp. {numberWithCommas(detail.value)}</span></p>
                                                {detail?.note !== "" && <p className='text-sm'>Note : <span className='font-bold'>{detail.note}</span></p>}
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}
