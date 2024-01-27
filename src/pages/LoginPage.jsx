import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUserInfo } from "../utilis/redux/mainReducer";

import backimg from "../assets/background.png";
import logo from "../assets/logo.svg"


const Page = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hint, setHint] = useState('')
    const reduxStore = useSelector((state) => state.main)

    const onSubmit = (e) => {
        e.preventDefault();
        const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if( emailRegExp.test(email) == false ){
            setHint('Wrong email style.')
            return ;
        }
        if( password.length == 0 ){
            setHint('You must input your password');
            return ;
        }
        setHint('')
        axios.post(import.meta.env.VITE_API_URL+'/users/login', {email, password})
            .then(res => {
                setHint(res.data.msg)
                if( res.data.type == 'success' ){
                    console.log('rec',res.data.data)
                    dispatch(setUserInfo(res.data.data))
                    navigate('/dashboard')
                }
                else 
                    navigate('/')
            })
            .catch(err=>{
                console.log(err);
            })
    }
    return (
        <>
            <div className={`w-[100%] h-[100vh] bg-[#1F2937] relative`}>
                <img className={`w-[100%] h-[100%] bg-contain opacity-20`} src={backimg} />
                <div className="w-[100%] h-[100%] absolute top-0 flex flex-col justify-center items-center gap-y-[25.78px]">
                    <div className="w-[229px] h-[43.211px] flex justify-between items-center">
                        <img src={logo} className="w-[42.751px] h-[43.211px]" />
                        <h2 className="block text-center font-semibold text-white font-[Inter] text-[21px] leading-[36.725px]">Buzz Coworking</h2>
                    </div>
                    <form className="w-[535px] h-[490px] py-[40px] px-[32px] bg-white rounded-[16px] flex flex-col gap-y-[40px] shadow-md">
                        <h1 className="block text-center font-bold leading-[36px] text-[24px] font-[Inter]">Login</h1>
                        <div className="flex flex-col gap-y-[16px]">
                            <div className="inputField flex flex-col justify-between h-[76px]">
                                <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#344054]">Email Address</h3>
                                <div className="inputGroup">
                                    <input placeholder="olivia@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-[100%] py-[10px] px-[12px] rounded-[12px] border-solid border border-[#D0D5DD] outline-0"></input>
                                </div>
                            </div>
                            <div className="inputField flex flex-col justify-between gap-y-[6px]">
                                <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#344054]">Password</h3>
                                <div className="inputGroup">
                                    <input placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-[100%] py-[10px] px-[12px] rounded-[12px] border-solid border border-[#D0D5DD] outline-0"></input>
                                </div>
                                { hint.length != 0 && <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">{hint}</h3> }
                            </div>
                            <div className="inputField flex gap-x-[12px]">
                                <input type="checkbox" className="w-[24px] h-[24px] rounded-[8px] border-solid border border-[#D0D5DD] outline-0"></input>
                                <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#344054]">Remember Me</h3>
                            </div>
                        </div>
                        <button className="w-[100%] py-[18px] px-[24px] bg-[#6366F1] text-white shadow-md font-[Inter] rounded-[12px]" onClick={(e) => onSubmit(e)}>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Page;