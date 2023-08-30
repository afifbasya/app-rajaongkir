import React, { useEffect, useState } from 'react'
import { InputText, ListOngkos, SelectKota, SelectOption, SelectProvinsi } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { clearOngkos, getOngkos, getProvinsi, postKotaAsal, postKotaTujuan, postProvinsiAsal, postProvinsiTujuan } from '../../reducers/rajaongkir';
import { LogoGreen } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../reducers/auth';

export default function Dashboard() {
    const { token } = useSelector((state) => state.auth);
    const { provinsiAsal, provinsiTujuan, kotaAsal, kotaTujuan, loading } = useSelector((state) => state.rajaongkir);
    const [berat, setBerat] = useState("")
    const [kurir, setKurir] = useState("")
    const nav = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!token) {
            nav('/login')
        }
    }, [token, nav])

    useEffect(() => {
        dispatch(getProvinsi());
    }, [dispatch])

    const handleCheck = () => {

        dispatch(clearOngkos());

        if (loading) {
            return
        }

        if (kotaAsal === false || kotaTujuan === false || berat === "" || kurir === "") {
            alert("Mohon lengkapi data")
            return
        }

        const params = {
            asal: kotaAsal,
            tujuan: kotaTujuan,
            berat: berat,
            kurir: kurir
        }

        dispatch(getOngkos(params))
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className='flex flex-col items-end m-8'>
                <button onClick={() => handleLogout()} className=" text-white bg-slate-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5">Log Out</button>
            </div>

            <div className="flex flex-col items-center px-6 py-8 md:h-screen">

                <div href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img width={100} src={LogoGreen} alt="React Logo" />
                </div>
                <div className="p-8 w-3/4 bg-white rounded-lg shadow dark:border md:mt-0">
                    <h1 className="mb-4 text-2xl font-bold  text-gray-900">
                        App Cek Raja Ongkir
                    </h1>
                    <div className='grid md:grid-cols-2 grid-cols-1 mt-8 gap-5'>
                        <div className='w-full'>
                            <h1 className="mb-4 text-xl text-gray-900">
                                Asal
                            </h1>
                            <SelectProvinsi value={provinsiAsal} onChange={(event) => dispatch(postProvinsiAsal(event.target.value))} />
                            <SelectKota value={kotaAsal} provinsi={provinsiAsal} onChange={(event) => dispatch(postKotaAsal(event.target.value))} />

                            <InputText value={berat} onChange={(event) => setBerat(event.target.value)} />
                        </div>
                        <div className='w-full'>
                            <h1 className="mb-4 text-xl  text-gray-900">
                                Tujuan
                            </h1>
                            <SelectProvinsi value={provinsiTujuan} onChange={(event) => dispatch(postProvinsiTujuan(event.target.value))} />
                            <SelectKota value={kotaTujuan} provinsi={provinsiTujuan} onChange={(event) => dispatch(postKotaTujuan(event.target.value))} />

                            <SelectOption value={kurir} onChange={(event) => setKurir(event.target.value)} />
                        </div>
                    </div>

                    <button onClick={() => handleCheck()} className="mt-8 w-full text-white bg-slate-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cek Ongkir</button>
                </div>

                <ListOngkos />
            </div>


        </section>
    )
}
