import { useState } from "react";
import HeadbarCmp from "../components/HeadbarCmp";

const Page = () => {
    const [bodyHeight, setBodyHeight] = useState(100);
    return (
        <>
            <div className="w-[100%] relative">
                <HeadbarCmp title='Dashboard'/>
                <div className="py-[104px] px-[32px] pb-[57px] bg-[#F5F5F5] h-[100vh] overflow-y-auto">
                </div>
            </div>
        </>
    )
}
export default Page;