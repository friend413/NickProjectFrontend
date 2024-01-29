import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeadbarCmp from "../components/HeadbarCmp";
import axios from "axios";
import { setDataList, addDataToList } from "../utilis/redux/mainReducer";
import { useDispatch } from "react-redux";


import filters from "../assets/filters.svg";
import avatar from "../assets/avatar.svg";
import plus from "../assets/plus.svg";
import upArrow from "../assets/upArrow.svg";
import close from "../assets/close.svg";
import addMemberSvg from "../assets/addMember.svg";
import viewDetail from "../assets/viewDetail.svg";
import edit from "../assets/edit.svg";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow2.svg";
import ToastCmp from "../components/ToastCmp";

const Page = () => {
    const reduxStore = useSelector((state) => state.main)
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [searchWord, setSearchWord] = useState('');
    const [dispCnt, setDispCnt] = useState(10)
    // const [bodyHeight, setBodyHeight] = useState(window.innerHeight - 293);
    const bodyHeight = window.innerHeight - 293;
    console.log(bodyHeight);
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedItems, setSelectedItems] = useState({});

    const onAddMember = () => {
        setModalVisible( !modalVisible )
    }
    const onModalClick = (e) => {
        if( e.target.className.includes('mymodal') )
            onAddMember();
    }
    const onSubmit = (e) => {
        e.preventDefault()
        
        axios.post(import.meta.env.VITE_API_URL+'/users/createUser', {firstName, lastName, email, password:'', phoneNumber}, )
        .then(res => {
            if( res.data.type == 'success' ){
                console.log(res.data.data);
                dispatch( addDataToList(res.data.data) )
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhoneNumber('');
            }
            else ;
            
        })
        .catch(err=>{
            console.log(err);
        })
        onAddMember()
    }
    const filterFunc = (item) => {
        const realName = item.firstName + " " + item.lastName;
        if( realName.toLowerCase().includes(searchWord.toLowerCase()) ) return true;
        if( item.email.includes( searchWord.toLowerCase() ) ) return true;
        if( item.phoneNumber.includes( searchWord.toLowerCase() ) ) return true;
        return false
    }
    const fixSelectedItem = (id) => {
        selectedItems[ id ] = !selectedItems[id];
    }
    const selectAllItems = () => {
        let tmpList = {}
        reduxStore.dataList.forEach(item => {
            tmpList[ item._id ] = true;
        });
        setSelectedItems(tmpList)
    }
    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL+'/users/')
            .then(res => {
                if( res.data.type == 'success' ){
                    dispatch( setDataList(res.data.data) )
                }
                else{
                    res;
                }
            })
            .catch(err => {
                console.log( err )
            })
    }, []);

    useEffect(()=>{
        console.log(selectedItems);
    }, [selectedItems])
    return (
        <>
            <div className="w-[100%] relative">
                <HeadbarCmp title='Members'/>
                <div className="py-[104px] px-[32px] pb-[57px] bg-[#F5F5F5] h-[100vh]">
                    <div className="flex flex-col h-[100%] w-[1096px] mx-auto">
                        <div className="flex py-[20px] px-[24px] items-center bg-white rounded-t-[12px]">
                            <div className="flex items-center gap-x-[16px]">
                                <h3 className="block font-[Inter] text-[18px] font-medium leading-[28px] w-[399px] text-[#101828]">All Members</h3>
                                <input placeholder="Search member" type="text" className="w-[340px] py-[10px] pl-[16px] font-[Inter] pr-[44px] rounded-[12px] text-[14px] leading-[24px] border-solid border border-[#D0D5DD] outline-0" value={searchWord} onChange={(e)=>setSearchWord(e.target.value)}></input>
                                <button className="py-[10px] px-[18px] bg-white border border-solid border-[#D0D5DD] rounded-[12px] flex items-center gap-x-[8px]">
                                    <img className="w-[20px] h-[20px]" src={filters} />
                                    <h3 className="block font-[Inter] text-[14px] font-semibold leading-[24px] text-[#344054]">Filters</h3>
                                </button>
                                <button className="py-[12px] px-[16px] border border-solid border-[#6366F1] bg-[#6366F1] rounded-[12px] flex items-center gap-x-[8px]" onClick={onAddMember}>
                                    <img className="w-[20px] h-[20px]" src={plus} />
                                    <h3 className="block font-[Inter] text-[14px] font-semibold leading-[16px] text-white">Add member</h3>
                                </button>
                            </div>
                        </div>
                        <table className="w-[1096px]">
                            <thead className="bg-gray-200 flex items-center border-y border-solid border-gray-200">
                                <tr className="w-[1096px] h-[56px] flex ">
                                    <th className="py-[16px] px-[24px] w-[356px] h-[56px] flex gap-x-[12px] justify-start items-center w-[520px]">
                                        <input type="checkbox" className="w-[20px] h-[20px] rounded-[8px] border-solid border border-[#D0D5DD] outline-0" onClick={selectAllItems}></input>
                                        <div className="w-[60px] h-[24px] flex gap-x-[4px] items-center">
                                            <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Name</h3>
                                            <img className="w-[16px] h-[16px]" src={upArrow} />
                                        </div>
                                    </th> 
                                    <th className="py-[16px] px-[24px] w-[260px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Email Address</h3>
                                    </th> 
                                    <th className="py-[16px] px-[24px] w-[150px] h-[56px] flex gap-x-[4px] items-center w-[200px]">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Phone Number</h3>
                                    </th> 
                                    <th className="py-[16px] px-[24px] w-[116px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Actions</h3>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className={`h-[500px] overflow-y-auto overflow-x-hidden block w-[1096px]`}>
                                {
                                    reduxStore.dataList.filter(filterFunc).map((item) => <tr key={item._id} className="w-[1096px] h-[72px] flex items-center border-b">
                                        <td className="py-[16px] px-[24px] w-[356px] h-[56px] flex gap-x-[12px] justify-start items-center w-[520px]">
                                            <input type="checkbox" className="w-[20px] h-[20px] rounded-[8px] border-solid border border-[#D0D5DD] outline-0" value={selectedItems[item._id]} onClick={()=>fixSelectedItem(item._id)}></input>
                                            <img className="w-[40px] h-[40px]" src={avatar} />
                                            <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#101828]">{item.firstName + " " + item.lastName}</h3>
                                        </td> 
                                        <td className="py-[16px] px-[24px] w-[260px] h-[56px] flex gap-x-[4px] items-center">
                                            <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#101828]">{item.email}</h3>
                                        </td> 
                                        <td className="py-[16px] px-[24px] w-[150px] h-[56px] flex gap-x-[4px] items-center w-[200px]">
                                            <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#101828]">{item.phoneNumber}</h3>
                                        </td> 
                                        <td className="p-[16px] w-[116px] h-[72px] flex gap-x-[4px] items-center gap-x-[4px]">
                                            <img className="w-[40px] h-[40px]" src={viewDetail} />
                                            <img className="w-[40px] h-[40px]" src={edit} />
                                        </td>
                                    </tr>)
                                }
                                
                            </tbody>
                            <tfoot>
                                <tr className="block py-[20px] px-[24px] flex justify-between bg-white rounded-b-[12px]">
                                    <td className="block w-[295px] h-[40px] flex gap-x-[16px] items-center">
                                        <select className="w-[90px] py-[8px] px-[12px] outline-0 border border-[#98A2B3] border-solid  rounded-[12px] font-semibold font-[Inter]" value={dispCnt} onChange={(e)=>setDispCnt(e.target.value)}>
                                            <option value={5}>5</option>
                                            <option value={10}>10</option>
                                            <option value={15}>15</option>
                                            <option value={20}>20</option>
                                        </select>
                                        <h3 className="text-gray-700 text-[14px] leading-[24px] font-normal font-[Inter]">Showing 10 of 100 members</h3>
                                    </td>
                                    <td className="block h-[40px] border border-[#98A2B3] flex border-solid rounded-[12px] overflow-hidden justify-between p-[0px]">
                                        <button className="h-[40px] py-[10px] px-[16px] gap-x-[8px] border-r border-[#98A2B3] border-solid flex items-center">
                                            <img className="w-[20px] h-[20px]" src={ leftArrow } />
                                            <h3 className="text-gray-700 text-[14px] leading-[20px] font-semibold font-[Inter]">Previous</h3>
                                        </button>
                                        <button className="h-[40px] py-[10px] px-[16px] gap-x-[8px] border-[#98A2B3] border-solid flex items-center">
                                            <h3 className="text-gray-700 text-[14px] leading-[20px] font-semibold font-[Inter]">Next</h3>
                                            <img className="w-[20px] h-[20px]" src={ rightArrow } />
                                        </button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <div className={`absolute w-[100vw] h-[100vh] flex items-center justify-center ${modalVisible?'':'hidden'}`} onClick={(e)=>onModalClick(e)}>
                <div className="mymodal absolute w-[100vw] h-[100vh] top-0 left-0 bg-[#1F2937] opacity-80 "></div>
                <form className="w-[960px] py-[40px] px-[32px] bg-white rounded-[16px] flex flex-col gap-y-[32px] shadow-md z-10 relative">

                    <span className="absolute block top-[-16px] right-[-16px] w-[40px] h-[40px]  bg-[#E0E0FC] rounded-[90px] shadow-md p-[8px] flex items-center justify-center" onClick={onAddMember}>
                        <img className="w-[20px] h-[20px]" src={close} />
                    </span>
                        
                    <div className="w-[896px] h-[48px] flex gap-x-[16px] items-center">
                        <img className="w-[48px] h-[48px]" src={addMemberSvg}/>
                        <h1 className="block w-[832px] font-semibold leading-[32px] text-[20px] font-[Inter]">Add Member</h1>
                    </div>
                    <hr />
                    <div className="flex gap-x-[32px] w-[896px]">
                        <div className="w-[64px] h-[80px] py-[8px]">
                            <img className="w-[64px] h-[64px] rounded-[32px]" src={avatar}/>
                        </div>
                        <div className="h-[468px] w-[1px] border-l border-solid border-gray-800]"></div>
                        <div className="flex flex-col gap-y-[16px] w-[100%]">
                            <div className="flex flex-col w-[768px] h-[468px] gap-y-[40px]">
                                <div className="flex flex-col gap-y-[20px]">
                                    <h3 className="text-gray-900 text-[16px] leading-[26px] font-semibold font-[Inter]">Personal</h3>
                                    <div className="flex flex-col gap-y-[16px]">
                                        <div className="w-[372px] h-[76px] flex gap-x-[24px]">
                                            <div className="w-[372px] h-[76px] flex flex-col gap-y-[6px]">
                                                <h4 className="w-[173px] h-[24px] text-[14px] leading-[24px] font-medium font-[#344054]">First Name</h4>
                                                <input className="w-[372px] h-[46px] py-[10px] px-[12px] rounded-[12px] border-solid border border-[#D0D5DD] text-[16px] leading-[26px] font-[Inter]  outline-0" placeholder="Oliva" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                                            </div>
                                            <div className="w-[372px] h-[76px] flex flex-col gap-y-[6px]">
                                                <h4 className="w-[173px] h-[24px] text-[14px] leading-[24px] font-medium font-[#344054]">Last Name</h4>
                                                <input className="w-[372px] h-[46px] py-[10px] px-[12px] rounded-[12px] border-solid border border-[#D0D5DD] text-[16px] leading-[26px] font-[Inter]  outline-0" placeholder="Fhyre" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className="w-[372px] h-[76px] flex gap-x-[24px]">
                                            <div className="w-[372px] h-[76px] flex flex-col gap-y-[6px]">
                                                <h4 className="w-[173px] h-[24px] text-[14px] leading-[24px] font-medium font-[#344054]">Email Address</h4>
                                                <input className="w-[372px] h-[46px] py-[10px] px-[12px] rounded-[12px] border-solid border border-[#D0D5DD] text-[16px] leading-[26px] font-[Inter]  outline-0" placeholder="oliva@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                            </div>
                                            <div className="w-[372px] h-[76px] flex flex-col gap-y-[6px]">
                                                <h4 className="w-[173px] h-[24px] text-[14px] leading-[24px] font-medium font-[#344054]">Phone Number</h4>
                                                <input className="w-[372px] h-[46px] py-[10px] px-[12px] rounded-[12px] border-solid border border-[#D0D5DD] text-[16px] leading-[26px] font-[Inter]  outline-0" placeholder="(208) 555-0112" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-[20px]">
                                    <h3 className="text-gray-900 text-[16px] leading-[26px] font-semibold font-[Inter]">Business</h3>
                                    <div className="flex flex-col gap-y-[16px]">
                                        <div className="w-[372px] h-[76px] flex gap-x-[24px]">
                                            <div className="w-[372px] h-[76px] flex flex-col gap-y-[6px]">
                                                <h4 className="w-[173px] h-[24px] text-[14px] leading-[24px] font-medium font-[#344054]">Business Name</h4>
                                                <input className="w-[372px] h-[46px] py-[10px] px-[12px] rounded-[12px] border-solid border border-[#D0D5DD] text-[16px] leading-[26px] font-[Inter]  outline-0" placeholder="Olivia Source"/>
                                            </div>
                                            <div className="w-[372px] h-[76px] flex flex-col gap-y-[6px]">
                                                <h4 className="w-[173px] h-[24px] text-[14px] leading-[24px] font-medium font-[#344054]">Business Email</h4>
                                                <input className="w-[372px] h-[46px] py-[10px] px-[12px] rounded-[12px] border-solid border border-[#D0D5DD] text-[16px] leading-[26px] font-[Inter]  outline-0" placeholder="oliviasource@gmail.com"/>
                                            </div>
                                        </div>
                                        <div className="w-[372px] h-[76px] flex gap-x-[24px]">
                                            <div className="w-[372px] h-[76px] flex flex-col gap-y-[6px]">
                                                <h4 className="w-[173px] h-[24px] text-[14px] leading-[24px] font-medium font-[#344054]">Business Phone</h4>
                                                <input className="w-[372px] h-[46px] py-[10px] px-[12px] rounded-[12px] border-solid border border-[#D0D5DD] text-[16px] leading-[26px] font-[Inter]  outline-0" placeholder="(208) 555-0112"/>
                                            </div>
                                            <div className="w-[372px] h-[76px] flex flex-col gap-y-[6px]">
                                                <h4 className="w-[173px] h-[24px] text-[14px] leading-[24px] font-medium font-[#344054]">Notes</h4>
                                                <input className="w-[372px] h-[46px] py-[10px] px-[12px] rounded-[12px] border-solid border border-[#D0D5DD] text-[16px] leading-[26px] font-[Inter]  outline-0" placeholder="Input notes"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end w-[100%]"><button className="w-[140px] text-[14px] leading-[20px] py-[14px] px-[18px] bg-[#6366F1] text-white shadow-md font-[Inter] font-semibold rounded-[12px]" onClick={(e) => onSubmit(e)}>Save</button></div>
                </form>
            </div>
        </>
    )
}
export default Page;