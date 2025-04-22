import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Loader } from 'lucide-react';
import { FormikErrors, useFormik } from "formik";
import logoImg from "../assets/logo/logo.svg";
import SigninModel from '@/models/signin/Signin.model';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { loginCall, setStatus } from '@/slice/signin.slice';
import { LoginInfo } from '@/models/LoginInfo.model';
import { setLogined, setUser } from '@/slice/app.slice';
import { failed } from '@/utils/alert.util';
import { useNavigate } from 'react-router-dom';
import loading from "../assets/images/loading.gif";

const Signin: React.FC = () => {
    const dispatch = useAppDispatch();
    const signinState = useAppSelector((state) => state.signin);
    const [showPassword, setShowPassword] = useState(false);
    const [stickyLoad, setStickyLoading] = useState(false);
    const navigate = useNavigate();
    const formik = useFormik<SigninModel>({
        initialValues: SigninModel.initial(),
        validate: (data) => {
            const errors: FormikErrors<SigninModel> = {};

            if (!data.username) {
                errors.username = "* Username cannot be empty";
            }
            if (!data.password) {
                errors.password = "* Password cannot be empty";
            }
            else if (data.password.length < 8) {
                errors.password = "* Password cannot least than 8 characters";
            }
            return errors;
        },
        onSubmit: async (data) => {
            dispatch(loginCall(new LoginInfo(data.username, data.password, false)));
            // FAMI: 26.03.2025 by Kha 
            // Start loading
            setStickyLoading(true);
          
            // FAMI: 26.03.2025 by Kha 
            // Call API to login
            dispatch(
                loginCall(new LoginInfo(data.username, data.password, false))
            )
            .unwrap()
            .then((response:any) => {
                if (!response.code || response.code !== 200) {
                    failed("Invalid username or password!");
                } else {
                    navigate("/");
                }
            })
            .catch(() => {
                failed("Invalid username or password!");
            })
            .finally(() => {
                setTimeout(() => {
                    setStickyLoading(false);
                }, 1000);
            });
        },
    });

    useEffect(() => {
        switch (signinState.status) {
            case "completed":
                if (signinState.authoried) {
                    const localUser = localStorage.getItem('user');
                    const user = JSON.parse(localUser ?? '{}');
                    dispatch(setLogined(true));
                    dispatch(setUser(user));
                    window.location.replace('/');
                }
                break;
            case "failed":
                dispatch(setStatus("loading"));
                dispatch(setStatus("failed"));
                if (signinState.error !== 'Unauthorized') {
                    failed(signinState.error || "");
                }
                break;
        }
    }, [signinState.status])
    return (
        <div className="max-h-screen flex">
            <div className="w-full flex items-center justify-center h-screen">
                <div className="w-full max-w-sm mt-[-130px]">
                    <div className="flex justify-center">
                        <img src={logoImg} style={{ width: "230px", height: "230px" }} alt="Workflow"
                            className='text-xl font-bold text-gray-900 transition-all duration-300 origin-left scale-100 opacity-100' />
                    </div>
                    <h1 className="text-3xl font-bold text-left mb-2">Welcome back!</h1>
                    <p className="text-black font-semibold text-left mb-8">Please enter your credentials to sign in!</p>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="username"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="w-full px-3 py-3 border-none rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2785ff] focus:border-transparent bg-[#F5F5F5]"
                                    placeholder="Email"
                                />
                                {
                                    <div className="text-red-500 text-sm italic mt-2">
                                        {formik.touched.username && formik.errors.username && (
                                            <div className="text-red-500 text-sm italic mt-2">
                                                {formik.errors.username}
                                            </div>
                                        )}
                                    </div>
                                }
                            </div>
                            <div className='space-y-2'>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            id="password"
                                            name="password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className="w-full px-3 py-3 border-none rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2785ff] focus:border-transparent bg-[#F5F5F5]"
                                            placeholder="Password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                        >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                    {
                                        <div className="text-red-500 text-sm italic mt-2">
                                            {formik.touched.password && formik.errors.password && (
                                                <div className="text-red-500 text-sm italic mt-2">
                                                    {formik.errors.password}
                                                </div>
                                            )}
                                        </div>
                                    }
                                </div>
                            </div>
                            <button
                                disabled={signinState.status === 'loading'}
                                type="submit"
                                className="w-full bg-[#58dcc4] text-white font-semibold py-3 px-3 rounded-xl hover:bg-[#58dbb4] transition duration-200 justify-items-center"
                            >
                                {signinState.status === 'loading' ? <Loader className={`animate-spin ${signinState.status === 'loading' ? 'text-white' : 'text-transparent'}`} />
                                    : <span>Sign In</span>
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {
                (stickyLoad) && <div className="flex justify-center flex-col items-center w-full h-screen bg-[rgba(150,150,150,0.3)]" 
                    style={{position: "fixed", top: 0, left: 0}}>
                    <img src={loading} alt="Loading" width={70} />
                </div>
            }
        </div>
    );
}

export default Signin;