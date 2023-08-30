import React, { useEffect, useState } from 'react'
import { LogoGreen } from '../../assets'
import { useDispatch, useSelector } from 'react-redux';
import { logout, postLogin } from '../../reducers/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { user, error } = useSelector((state) => state.auth);
    const [userForm, setUser] = useState({
        username: '',
        password: '',
    });
    const nav = useNavigate();
    const { password, username } = userForm
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userForm.password && userForm.username) {
            dispatch(postLogin(userForm));
        } else {
            alert("Mohon lengkapi data")
            return
        }


    }

    useEffect(() => {
        if (user) {
            nav('/dashboard')
        }
    }, [user, nav])

    useEffect(() => {
        if (error) {
            dispatch(logout());
            alert('Username atau Password salah')
        }
    }, [error, dispatch])

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img width={100} src={LogoGreen} alt="React Logo" />
                </div>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form onSubmit={(e) => handleSubmit(e)} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="name@company.com" required="" value={username} onChange={(e) => setUser({ ...userForm, username: e.target.value })} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" value={password} onChange={(e) => setUser({ ...userForm, password: e.target.value })} />
                            </div>
                            <button type="submit" className="w-full text-white bg-slate-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
