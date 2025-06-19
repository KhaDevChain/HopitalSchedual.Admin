import React, { useState } from 'react';
import { Eye, EyeOff, Loader } from 'lucide-react';
import { FormikErrors, useFormik } from "formik";
import logoImg from "../assets/logo/logo-main.png";
import loading from "../assets/images/loading.gif";
import { SigninRequest } from '@/models/dto/request/Signin.request';
import { useNavigate } from 'react-router-dom';
import AuthService from '@/services/Auth.service';
import { failed } from '@/utils/alert.util';

const Signin: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [stickyLoad, setStickyLoading] = useState(false);
    const navigate = useNavigate();
    const formik = useFormik<SigninRequest>({
        initialValues: SigninRequest.initial(),
        validate: (data) => {
            const errors: FormikErrors<SigninRequest> = {};

            if (!data.email) {
                errors.email = "* Email không được để trống";
            }
            if (!data.password) {
                errors.password = "* Mật khẩu không được để trống";
            }
            else if (data.password.length < 8) {
                errors.password = "* Mật khẩu phải có ít nhất 8 ký tự";
            }
            return errors;
        },
        onSubmit: async (data) => {
            setStickyLoading(true);

            try {
                const response = await AuthService.login(
                    new SigninRequest(null, data.email, data.password)
                );

                if (!response || response.code != 200) {
                    failed("Tài khoản không hợp lệ !");
                } else {
                    navigate("/");
                }
            } catch (error) {
                failed("Tài khoản không hợp lệ !");
            } finally {
                setTimeout(() => {
                    setStickyLoading(false);
                }, 1000);
            }
        },
    });
    return (
        <div className="max-h-screen flex p-[30px]">
            <div className="w-full flex items-center justify-center h-screen">
                <div className="w-full max-w-sm mt-[-100px]">
                    <div className="flex justify-center">
                        <img src={logoImg} style={{ width: "100px", height: "100px" }} alt="Workflow"
                            className='text-xl font-bold text-gray-900 transition-all duration-300 origin-left scale-100 opacity-100 mb-4' />
                    </div>
                    <h1 className="text-3xl font-bold text-left mb-2 text-center">Chào mừng bạn</h1>
                    <p className="text-black font-semibold text-left mb-8 text-center">Vui lòng nhập thông tin để đăng nhập</p>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    defaultValue={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="w-full px-3 py-3 border-none rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2785ff] focus:border-transparent bg-[#F5F5F5]"
                                    placeholder="* nhập email"
                                />
                                {
                                    <div className="text-red-500 text-sm italic mt-2">
                                        {formik.touched.email && formik.errors.email && (
                                            <div className="text-red-500 text-sm italic mt-2">
                                                {formik.errors.email}
                                            </div>
                                        )}
                                    </div>
                                }
                            </div>
                            <div className='space-y-2'>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                        Mật khẩu
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            id="password"
                                            name="password"
                                            defaultValue={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className="w-full px-3 py-3 border-none rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2785ff] focus:border-transparent bg-[#F5F5F5]"
                                            placeholder="* nhập mật khẩu"
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
                                disabled={stickyLoad}
                                type="submit"
                                className="w-full bg-[#58dcc4] text-white font-semibold py-3 px-3 rounded-xl hover:bg-[#58dbb4] transition duration-200 justify-items-center"
                            >
                                {stickyLoad ? <Loader className={`animate-spin ${stickyLoad ? 'text-white' : 'text-transparent'}`} />
                                    : <span>Đăng nhập</span>
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