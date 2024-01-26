import bar from '../assets/bar.svg';
import infoCircle from '../assets/infoCircle.svg';
import bell from '../assets/bell.svg';
import avatar from '../assets/avatar.svg';
import downArrow from '../assets/downArrow.svg';

const HeadbarCmp = ( props ) => {
    return (
        <div className="px-[32px] h-[72px] bg-white flex items-center w-[100%] justify-between absolute">
            <div className="flex h-[40px] items-center">
                <div className="w-[581px] flex gap-x-[24px] items-center"> 
                    <img className="w-[24px] h-[24px]" src={bar} />
                    <h2 className="block text-center font-semibold text-[#1D2939] font-[Inter] text-[20px] leading-[32px]">{props.title}</h2>
                </div>
            </div>
            <div className='flex gap-x-[16px] items-center'>
                <div className='flex'>
                    <div className='w-[40px] h-[40px] rounded-[6px] flex p-[10px]'>
                        <img className="w-[20px] h-[20px]" src={infoCircle} />
                    </div>
                    <div className='w-[40px] h-[40px] rounded-[6px] flex p-[10px]'>
                        <img className="w-[20px] h-[20px]" src={bell} />
                    </div>
                </div>
                <img className="w-[40px] h-[40px] rounded-[20px]" src={avatar} />
                <h3 className="block font-[Inter] text-[14px] font-medium leading-[24px] text-[#1D2939]">Elviro Anasta</h3>
                <div className='w-[20px] h-[40px] rounded-[6px] flex py-[10px]'>
                    <img className="w-[20px] h-[20px]" src={downArrow} />
                </div>
            </div>
        </div>
    )
}

export default HeadbarCmp;