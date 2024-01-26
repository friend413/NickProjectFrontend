import { useState } from "react";
import HeadbarCmp from "../components/HeadbarCmp";

import filters from "../assets/filters.svg";
import plus from "../assets/plus.svg";
import upArrow from "../assets/upArrow.svg";

const Page = () => {
    const [bodyHeight, setBodyHeight] = useState(100);
    return (
        <>
            <div className="w-[100%] relative">
                <HeadbarCmp title='Members'/>
                <div className="py-[104px] px-[32px] pb-[57px] bg-[#F5F5F5] h-[100vh] overflow-y-auto">
                    <div className="flex flex-col rounded-[12px] h-[100%] overflow-hidden w-[1096px] mx-auto">
                        <div className="flex py-[20px] px-[24px] items-center bg-white">
                            <div className="flex items-center gap-x-[16px]">
                                <h3 className="block font-[Inter] text-[18px] font-medium leading-[28px] w-[399px] text-[#101828]">All Members</h3>
                                <input placeholder="Search member" type="password" className="w-[340px] py-[10px] pl-[16px] font-[Inter] pr-[44px] rounded-[12px] text-[14px] leading-[24px] border-solid border border-[#D0D5DD] outline-0"></input>
                                <button className="py-[10px] px-[18px] bg-white border border-solid border-[#D0D5DD] rounded-[12px] flex items-center gap-x-[8px]">
                                    <img className="w-[20px] h-[20px]" src={filters} />
                                    <h3 className="block font-[Inter] text-[14px] font-semibold leading-[24px] text-[#344054]">Filters</h3>
                                </button>
                                <button className="py-[12px] px-[16px] bg-white border border-solid border-[#6366F1] bg-[#6366F1] rounded-[12px] flex items-center gap-x-[8px]">
                                    <img className="w-[20px] h-[20px]" src={plus} />
                                    <h3 className="block font-[Inter] text-[14px] font-semibold leading-[16px] text-white">Add member</h3>
                                </button>
                            </div>
                        </div>
                        <table className="">
                            <thead className="bg-gray-200 flex items-center border-y border-solid border-gray-200">
                                <th className="py-[18px] px-[24px]"><input type="checkbox" className="w-[20px] h-[20px] rounded-[8px] border-solid border border-[#D0D5DD] outline-0"></input></th>
                                <th className="py-[18px] px-[24px] w-[96px] h-[56px]"></th> 
                                <th className="py-[18px] px-[24px] w-[192px] h-[56px] flex gap-x-[4px] items-center">
                                    <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Name</h3>
                                    <img className="w-[16px] h-[16px]" src={upArrow} />
                                </th> 
                                <th className="py-[18px] px-[24px] w-[186px] h-[56px] flex gap-x-[4px] items-center">
                                    <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Desk Type</h3>
                                </th> 
                                <th className="py-[18px] px-[24px] w-[120px] h-[56px] flex gap-x-[4px] items-center">
                                    <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Size</h3>
                                    <img className="w-[16px] h-[16px]" src={upArrow} />
                                </th> 
                                <th className="py-[18px] px-[24px] w-[150px] h-[56px] flex gap-x-[4px] items-center">
                                    <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Rate</h3>
                                    <img className="w-[16px] h-[16px]" src={upArrow} />
                                </th> 
                                <th className="py-[18px] px-[24px] w-[168px] h-[56px] flex gap-x-[4px] items-center">
                                    <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Status</h3>
                                </th> 
                                <th className="py-[18px] px-[24px] w-[116px] h-[56px] flex gap-x-[4px] items-center">
                                    <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Actions</h3>
                                </th>
                            </thead>
                            <tbody className={`h-[${bodyHeight}px] overflow-hidden px-[50px]`}>
                                <tr className="bg-white flex items-center border-b border-solid border-gray-200">
                                    <td className="py-[18px] px-[24px]"><input type="checkbox" className="w-[20px] h-[20px] rounded-[8px] border-solid border border-[#D0D5DD] outline-0"></input></td>
                                    <td className="py-[18px] px-[24px] w-[96px] h-[56px]"></td> 
                                    <td className="py-[18px] px-[24px] w-[192px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Name</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[186px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Desk Type</h3>
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[120px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Size</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[150px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Rate</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[168px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Status</h3>
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[116px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Actions</h3>
                                    </td>
                                </tr>
                                <tr className="bg-white flex items-center border-b border-solid border-gray-200">
                                    <td className="py-[18px] px-[24px]"><input type="checkbox" className="w-[20px] h-[20px] rounded-[8px] border-solid border border-[#D0D5DD] outline-0"></input></td>
                                    <td className="py-[18px] px-[24px] w-[96px] h-[56px]"></td> 
                                    <td className="py-[18px] px-[24px] w-[192px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Name</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[186px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Desk Type</h3>
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[120px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Size</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[150px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Rate</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[168px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Status</h3>
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[116px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Actions</h3>
                                    </td>
                                </tr>
                                <tr className="bg-white flex items-center border-b border-solid border-gray-200">
                                    <td className="py-[18px] px-[24px]"><input type="checkbox" className="w-[20px] h-[20px] rounded-[8px] border-solid border border-[#D0D5DD] outline-0"></input></td>
                                    <td className="py-[18px] px-[24px] w-[96px] h-[56px]"></td> 
                                    <td className="py-[18px] px-[24px] w-[192px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Name</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[186px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Desk Type</h3>
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[120px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Size</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[150px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Rate</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[168px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Status</h3>
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[116px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Actions</h3>
                                    </td>
                                </tr>
                                <tr className="bg-white flex items-center border-b border-solid border-gray-200">
                                    <td className="py-[18px] px-[24px]"><input type="checkbox" className="w-[20px] h-[20px] rounded-[8px] border-solid border border-[#D0D5DD] outline-0"></input></td>
                                    <td className="py-[18px] px-[24px] w-[96px] h-[56px]"></td> 
                                    <td className="py-[18px] px-[24px] w-[192px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Name</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[186px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Desk Type</h3>
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[120px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Size</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[150px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Rate</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[168px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Status</h3>
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[116px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Actions</h3>
                                    </td>
                                </tr>
                                <tr className="bg-white flex items-center border-b border-solid border-gray-200">
                                    <td className="py-[18px] px-[24px]"><input type="checkbox" className="w-[20px] h-[20px] rounded-[8px] border-solid border border-[#D0D5DD] outline-0"></input></td>
                                    <td className="py-[18px] px-[24px] w-[96px] h-[56px]"></td> 
                                    <td className="py-[18px] px-[24px] w-[192px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Name</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[186px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Desk Type</h3>
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[120px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Size</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[150px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Rate</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[168px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Status</h3>
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[116px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Actions</h3>
                                    </td>
                                </tr>
                                <tr className="bg-white flex items-center border-b border-solid border-gray-200">
                                    <td className="py-[18px] px-[24px]"><input type="checkbox" className="w-[20px] h-[20px] rounded-[8px] border-solid border border-[#D0D5DD] outline-0"></input></td>
                                    <td className="py-[18px] px-[24px] w-[96px] h-[56px]"></td> 
                                    <td className="py-[18px] px-[24px] w-[192px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Name</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[186px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Desk Type</h3>
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[120px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Size</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[150px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Rate</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[168px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Status</h3>
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[116px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Actions</h3>
                                    </td>
                                </tr>
                                <tr className="bg-white flex items-center border-b border-solid border-gray-200">
                                    <td className="py-[18px] px-[24px]"><input type="checkbox" className="w-[20px] h-[20px] rounded-[8px] border-solid border border-[#D0D5DD] outline-0"></input></td>
                                    <td className="py-[18px] px-[24px] w-[96px] h-[56px]"></td> 
                                    <td className="py-[18px] px-[24px] w-[192px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Name</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[186px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Desk Type</h3>
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[120px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Size</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[150px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Rate</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[168px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Status</h3>
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[116px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Actions</h3>
                                    </td>
                                </tr>
                                <tr className="bg-white flex items-center border-b border-solid border-gray-200">
                                    <td className="py-[18px] px-[24px]"><input type="checkbox" className="w-[20px] h-[20px] rounded-[8px] border-solid border border-[#D0D5DD] outline-0"></input></td>
                                    <td className="py-[18px] px-[24px] w-[96px] h-[56px]"></td> 
                                    <td className="py-[18px] px-[24px] w-[192px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Name</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[186px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Desk Type</h3>
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[120px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Size</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[150px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Rate</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[168px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Status</h3>
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[116px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Actions</h3>
                                    </td>
                                </tr>
                                <tr className="bg-white flex items-center border-b border-solid border-gray-200">
                                    <td className="py-[18px] px-[24px]"><input type="checkbox" className="w-[20px] h-[20px] rounded-[8px] border-solid border border-[#D0D5DD] outline-0"></input></td>
                                    <td className="py-[18px] px-[24px] w-[96px] h-[56px]"></td> 
                                    <td className="py-[18px] px-[24px] w-[192px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Name</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[186px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Desk Type</h3>
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[120px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Size</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[150px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Rate</h3>
                                        <img className="w-[16px] h-[16px]" src={upArrow} />
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[168px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Status</h3>
                                    </td> 
                                    <td className="py-[18px] px-[24px] w-[116px] h-[56px] flex gap-x-[4px] items-center">
                                        <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#475467]">Actions</h3>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>

                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Page;