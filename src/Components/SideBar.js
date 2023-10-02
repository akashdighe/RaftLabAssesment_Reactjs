import React, { useState } from 'react'
import './HomePage.css'
import HeadingIcon from '../Icons/HeadingIcon.png';
import { AiOutlineHome } from 'react-icons/ai';
import { CiAlignBottom } from 'react-icons/ci';
import { MdOutlineExplore } from 'react-icons/md';
import { AiOutlineShopping } from 'react-icons/ai';
import { AiOutlineMessage } from 'react-icons/ai';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { AiOutlineFolder } from 'react-icons/ai';


export default function SideBar({ textVisible, toggleTextVisibility }) {
    const [sideMenuActive, setSideMenuActive] = useState('')

    return (
        <div>
            <div>

                <div className='sideBarContainer p-4'>
                    <div className='d-flex justify-content-between flex-wrap'>
                        <div className='d-flex gap-2 align-items-center'>
                            <div>
                                <img className='w-8' src={HeadingIcon} alt=''></img>
                            </div>
                            <div>
                                <h5 className='pt-1'>Omoi</h5>
                            </div>
                        </div>
                        <button onClick={toggleTextVisibility}>
                            {textVisible ? 'X' : ''}
                        </button>
                    </div>

                    <div>
                        <div className='mt-3'>

                            <div className={sideMenuActive === 'Home' ? 'd-flex flex-wrap gap-2 align-items-center mt-2 ContainerMenuTxtActive' : ' d-flex flex-wrap gap-2 mt-2 align-items-center ContainerMenuTxt'} onClick={(e) => setSideMenuActive('Home')}>
                                <div className='pl-1'>
                                    <AiOutlineHome />
                                </div>
                                <div >Home</div>
                            </div>
                            <div className={sideMenuActive === 'Analytic' ? 'd-flex flex-wrap gap-2 align-items-center mt-2 ContainerMenuTxtActive' : ' d-flex flex-wrap gap-2 mt-2 align-items-center ContainerMenuTxt'} onClick={(e) => setSideMenuActive('Analytic')}>
                                <div className='pl-1'>
                                    <CiAlignBottom />
                                </div>
                                <div>Analytic</div>
                            </div>
                            <div className={sideMenuActive === 'Explore' ? 'd-flex flex-wrap gap-2 align-items-center mt-2 ContainerMenuTxtActive' : ' d-flex flex-wrap gap-2 mt-2 align-items-center ContainerMenuTxt'} onClick={(e) => setSideMenuActive('Explore')}>
                                <div className='pl-1'>
                                    <MdOutlineExplore />
                                </div>
                                <div>Explore</div>
                            </div>

                        </div>
                        <div className={sideMenuActive === 'Shop' ? 'd-flex flex-wrap gap-2 align-items-center mt-2 ContainerMenuTxtActive' : ' d-flex flex-wrap gap-2 mt-2 align-items-center ContainerMenuTxt'} onClick={(e) => setSideMenuActive('Shop')}>
                            <div className='pl-1'>
                                <AiOutlineShopping />
                            </div>
                            <div>Shop</div>
                        </div>
                        <div className={sideMenuActive === 'Inbox' ? 'd-flex flex-wrap gap-2 align-items-center mt-2 ContainerMenuTxtActive' : ' d-flex flex-wrap gap-2 mt-2 align-items-center ContainerMenuTxt'} onClick={(e) => setSideMenuActive('Inbox')}>
                            <div className='pl-1' >
                                <AiOutlineMessage />
                            </div>
                            <div>Inbox</div>
                        </div>

                        <div className='mt-4'>
                            <div className='Tools' >Tools</div>

                            <div className={sideMenuActive === 'Setting' ? 'd-flex flex-wrap gap-2 align-items-center mt-2 ContainerMenuTxtActive' : ' d-flex flex-wrap gap-2 mt-2 align-items-center ContainerMenuTxt'} onClick={(e) => setSideMenuActive('Setting')}>
                                <div className='pl-1' >
                                    <AiOutlineSetting />
                                </div>
                                <div>Setting</div>
                            </div>
                            <div className={sideMenuActive === 'Help' ? 'd-flex flex-wrap gap-2 align-items-center mt-2 ContainerMenuTxtActive' : ' d-flex flex-wrap gap-2 mt-2 align-items-center ContainerMenuTxt'} onClick={(e) => setSideMenuActive('Help')}>
                                <div className='pl-1' >
                                    <BiHelpCircle />
                                </div>
                                <div>Help</div>
                            </div>

                        </div>
                        <div className='mt-4'>
                            <div className='Tools' >Project</div>

                            <div className={sideMenuActive === 'Amazon' ? 'd-flex flex-wrap gap-2 align-items-center mt-2 ContainerMenuTxtActive' : ' d-flex flex-wrap gap-2 mt-2 align-items-center ContainerMenuTxt'} onClick={(e) => setSideMenuActive('Amazon')}>
                                <div className='pl-1' >
                                    <AiOutlineFolder />
                                </div>
                                <div>Amazon</div>
                            </div>
                            <div className={sideMenuActive === 'Invinity' ? 'd-flex flex-wrap gap-2 align-items-center mt-2 ContainerMenuTxtActive' : ' d-flex flex-wrap gap-2 mt-2 align-items-center ContainerMenuTxt'} onClick={(e) => setSideMenuActive('Invinity')}>
                                <div className='pl-1' >
                                    <AiOutlineFolder />
                                </div>
                                <div>Invinity HQ</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
