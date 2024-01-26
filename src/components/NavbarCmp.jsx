import { Link } from "react-router-dom";
import { useState } from "react";

import logo from '../assets/logo.svg';
import reactsvg from '../assets/react.svg';
import helpDesk from '../assets/helpDesk.svg';
import rightArrow from '../assets/rightArrow.svg';
import updownArrow from '../assets/updownArrow.svg';
import menuicon1 from '../assets/menuicon1.svg';
import menuicon2 from '../assets/menuicon2.svg';
import menuicon3 from '../assets/menuicon3.svg';
import menuicon4 from '../assets/menuicon4.svg';
import menuicon5 from '../assets/menuicon5.svg';
import menuicon6 from '../assets/menuicon6.svg';
import menuicon7 from '../assets/menuicon7.svg';
import menuicon8 from '../assets/menuicon8.svg';
import menuicon9 from '../assets/menuicon9.svg';

const NavbarCmp = () => {

    const [menuList, setMenuList] = useState(['Dashboard', 'Members', 'Spaces', 'Message Center', 'Tickets', 'Calendar', 'Files', 'Finances', 'Settings']);

    return (
        <>
            <div className="h-[100vh] bg-[#1F2937] w-[280px] pt-[40px] flex flex-col-reverse justify-between">
                <div className="flex gap-[11px] py-[16px] px-[24px] bg-[#344054]">
                    <img className="w-[24px] h-[24px]" src={helpDesk} />
                    <h3 className="block w-[160px] leading-[24px] text-[14px] font-[Inter] font-semibold text-gray-300">Helpdesk</h3>
                    <img className="w-[24px] h-[24px]" src={rightArrow} />
                </div>
                <div className="flex flex-col gap-y-[40px] px-[16px]">
                    <div className="flex gap-[11px] py-[12px] px-[16px] items-center bg-[#374151] rounded-[8px]">
                        <img src={logo} alt="logo" className="w-[24px] h-[24px]"/>
                        <div className="w-[179px] h-[48px] flex items-center justify-between">
                            <div className="flex flex-col w-[147px]">
                                <h3 className="block leading-[24px] text-[14px] font-[Inter] font-semibold text-gray-300">Buzz Coworking</h3>
                                <h3 className="block leading-[24px] text-[14px] font-[Inter] font-semibold text-gray-400">123 Main Street</h3>
                            </div>
                            <img className="w-[24px] h-[24px]" src={updownArrow} />
                        </div>
                    </div>
                    <ul className="flex flex-col gap-y-[8px]">
                        <li className="py-[12px] px-[16px] flex items-center gap-x-[12px]">
                            <img className="w-[24px] h-[24px]" src={menuicon1} />
                            <h3 className="block leading-[24px] text-[14px] font-[Inter] font-semibold text-gray-400"><Link to={`/${menuList[0].toLowerCase()}`}>{menuList[0]}</Link></h3>
                        </li>
                        <li className="py-[12px] px-[16px] flex items-center gap-x-[12px]">
                            <img className="w-[24px] h-[24px]" src={menuicon2} />
                            <h3 className="block leading-[24px] text-[14px] font-[Inter] font-semibold text-gray-400"><Link to={`/${menuList[1].toLowerCase()}`}>{menuList[1]}</Link></h3>
                        </li>
                        <li className="py-[12px] px-[16px] flex items-center gap-x-[12px]">
                            <img className="w-[24px] h-[24px]" src={menuicon3} />
                            <h3 className="block leading-[24px] text-[14px] font-[Inter] font-semibold text-gray-400"><Link to={`/${menuList[2].toLowerCase()}`}>{menuList[2]}</Link></h3>
                        </li>
                        <li className="py-[12px] px-[16px] flex items-center gap-x-[12px]">
                            <img className="w-[24px] h-[24px]" src={menuicon4} />
                            <h3 className="block leading-[24px] text-[14px] font-[Inter] font-semibold text-gray-400"><Link to={`/${menuList[3].toLowerCase()}`}>{menuList[3]}</Link></h3>
                        </li>
                        <li className="py-[12px] px-[16px] flex items-center gap-x-[12px]">
                            <img className="w-[24px] h-[24px]" src={menuicon5} />
                            <h3 className="block leading-[24px] text-[14px] font-[Inter] font-semibold text-gray-400"><Link to={`/${menuList[4].toLowerCase()}`}>{menuList[4]}</Link></h3>
                        </li>
                        <li className="py-[12px] px-[16px] flex items-center gap-x-[12px]">
                            <img className="w-[24px] h-[24px]" src={menuicon6} />
                            <h3 className="block leading-[24px] text-[14px] font-[Inter] font-semibold text-gray-400"><Link to={`/${menuList[5].toLowerCase()}`}>{menuList[5]}</Link></h3>
                        </li>
                        <li className="py-[12px] px-[16px] flex items-center gap-x-[12px]">
                            <img className="w-[24px] h-[24px]" src={menuicon7} />
                            <h3 className="block leading-[24px] text-[14px] font-[Inter] font-semibold text-gray-400"><Link to={`/${menuList[6].toLowerCase()}`}>{menuList[6]}</Link></h3>
                        </li>
                        <li className="py-[12px] px-[16px] flex items-center gap-x-[12px]">
                            <img className="w-[24px] h-[24px]" src={menuicon8} />
                            <h3 className="block leading-[24px] text-[14px] font-[Inter] font-semibold text-gray-400"><Link to={`/${menuList[7].toLowerCase()}`}>{menuList[7]}</Link></h3>
                        </li>
                        <li className="py-[12px] px-[16px] flex items-center gap-x-[12px]">
                            <img className="w-[24px] h-[24px]" src={menuicon9} />
                            <h3 className="block leading-[24px] text-[14px] font-[Inter] font-semibold text-gray-400"><Link to={`/${menuList[8].toLowerCase()}`}>{menuList[8]}</Link></h3>
                        </li>
                        {/* {
                            menuList.map((item, index) => <li key={index} className="py-[12px] px-[16px] flex items-center gap-x-[12px]">
                                <img className="w-[24px] h-[24px]" src={menuicon1} />
                                <h3 className="block leading-[24px] text-[14px] font-[Inter] font-semibold text-gray-400">
                                    <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                                </h3>
                            </li>)
                        } */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavbarCmp;