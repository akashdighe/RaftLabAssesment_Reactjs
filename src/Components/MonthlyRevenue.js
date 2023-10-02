import React from 'react'
import MoneyImg from '../Icons/MoneyImg.svg'


export default function MonthlyRevenue() {
  return (
    <div>
       <div className='ContanerPriceAction d-flex justify-content-between '>
                        <div className='d-flex gap-2 align-items-center'>
                            <div>
                                <img className='profilepicImg' src={MoneyImg} alt=''></img>
                            </div>
                            <div >
                                <div className='monethlyRevenue'>Monthly Revenue</div>
                                <div className='mt-1'>
                                    <span className='Doller  mr-2'>$6.750</span>
                                    <span className='dollerPersentage'>+1.4%</span>
                                </div>
                                <div className='mt-1'>
                                    <span className='previousMonth'>Previous month </span>
                                    <span className='previousDoller'>$3.1k</span>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <div>
                                <img className='profilepicImg' src={MoneyImg} alt=''></img>
                            </div>
                            <div >
                                <div className='monethlyRevenue'>Monthly Revenue</div>
                                <div className='mt-1'>
                                    <span className='Doller  mr-2'>$6.750</span>
                                    <span className='dollerPersentage'>+1.4%</span>
                                </div>
                                <div className='mt-1'>
                                    <span className='previousMonth'>Previous month </span>
                                    <span className='previousDoller'>$3.1k</span>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <div>
                                <img className='profilepicImg' src={MoneyImg} alt=''></img>
                            </div>
                            <div >
                                <div className='monethlyRevenue'>Monthly Revenue</div>
                                <div className='mt-1'>
                                    <span className='Doller  mr-2'>$6.750</span>
                                    <span className='dollerPersentage'>+1.4%</span>
                                </div>
                                <div className='mt-1'>
                                    <span className='previousMonth'>Previous month </span>
                                    <span className='previousDoller'>$3.1k</span>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  )
}
