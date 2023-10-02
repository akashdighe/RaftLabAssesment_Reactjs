import React from 'react'
import SideBar from './SideBar'
import ProfilePic from '../Icons/ProfilePic.jpg'
import ProfilePic1 from '../Icons/ProfilePic1.jpg'
import ProfilePic2 from '../Icons/ProfilePic2.jpg'
import { FiSearch } from 'react-icons/fi';
import { ResponsiveBar } from '@nivo/bar';
import { Button, Dropdown, message, Space } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { GrNotification } from 'react-icons/gr';
import { BiChevronDown } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import Calendar from './Calendar'
import Meeting from './Meeting'
import MonthlyRevenue from './MonthlyRevenue'

// table data 
const columns = [
    {
        title: 'Custmer',
        dataIndex: 'name',
    },
    {
        title: 'Status',
        dataIndex: 'age',
    },
    {
        title: 'Date',
        dataIndex: 'address',
    },
    {
        title: 'Invoice',
        dataIndex: 'address',
    }, {
        title: 'People',
        dataIndex: 'address',
    },
];
const dataTable = [
    {
        key: '1',
        name: 'Flyod johntosan',
        age: 'sucess',
        address: 'NLake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 'Pending',
        address: 'London No. 1 Lake Park',
    },

];
//   option data 
const data = [
    { country: '1-10 Aug', value: 30 },
    { country: '11-20 Aug', value: 60 },
    { country: '21-30 aug', value: 10 },
    { country: '1-10 Nov', value: 20 },

];

const customColorScale = (index) => (index % 2 === 0 ? 'red' : ' rgb(107, 107, 221)');

export default function HomePage() {

    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };
    const items = [
        {
            label: 'option A',
            key: '1',
            icon: <UserOutlined />,
        },
        {
            label: 'option A',
            key: '2',
            icon: <UserOutlined />,
        },

    ];
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };


    return (
      
            <div className='row  hhh'>

                <div className='col-md-2 col-sm-12'>
                    {/* <SideBar /> */}
                    </div>
                

                <div className='col-md-7 col-sm-12 p-4'>
                    <div className='d-flex justify-content-between  align-items-center'>
                        <div className='d-flex gap-2 align-items-center'>
                            <div>
                                <img className='profilepicImg' src={ProfilePic} alt=''></img>

                            </div>
                            <div>
                                <div className='headingtext'>
                                    Good Evening Team!
                                </div>
                                <span className='headingSubText'>
                                    Those who say it can't be done are usually interrupted by others doing it.
                                </span>
                            </div>
                        </div>
                        <div>
                            <FiSearch />
                        </div>
                    </div>

                    {/* Below  Component showing MonthlyRevenue */}
                    <MonthlyRevenue />


                    <div className='ContainerCost  d-flex flex-wrap'>
                        <div>
                            <div className='totalSale'>Total Sales & Cost</div>
                            <div className='previousMonth'>Last 60 days</div>
                            <div className='mt-3'>
                                <span className='costDoller mt-1'>$956.82k</span>
                                <span className='costPersentage '>+5.4%</span>
                            </div>
                            <div>
                                <span className='monthPrevious'>+8.20k</span>
                                <span className='previousMonth'> vs prev 60 days</span>
                            </div>
                        </div>

                        <div>
                            <div className='AnalyticChart'>Analytic</div>
                            <div style={{ height: '200px', width: '350px' ,maxWidth:'350px'}}>
                                <ResponsiveBar
                                    data={data}
                                    keys={['value']}
                                    indexBy="country"
                                    margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
                                    padding={0.3}
                                    colors={customColorScale}
                                    axisTop={null}
                                    axisRight={null}
                                    axisBottom={{

                                        tickSize: 5,
                                        tickPadding: 5,
                                        tickRotation: 0,

                                        legendPosition: 'middle',
                                        legendOffset: 40,
                                    }}
                                    axisLeft={{
                                        tickSize: 5,
                                        tickValues: [0, 20, 40, 60],
                                        tickPadding: 5,
                                        tickRotation: 0,
                                        legendPosition: 'middle',
                                        legendOffset: -50,
                                    }}
                                    labelSkipWidth={12}
                                    labelSkipHeight={12}
                                    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                                    legends={[
                                        {
                                            dataFrom: 'keys',
                                            anchor: 'top-right',
                                            direction: 'column',
                                            justify: false,
                                            translateX: 120,
                                            translateY: 0,
                                            itemsSpacing: 2,
                                            itemWidth: 100,
                                            itemHeight: 20,
                                            itemDirection: 'left-to-right',
                                            itemOpacity: 0.85,
                                            symbolSize: 20,
                                            effects: [
                                                {
                                                    on: 'hover',
                                                    style: {
                                                        itemOpacity: 1,
                                                    },
                                                },
                                            ],
                                        },
                                    ]}
                                    animate={true}
                                    motionStiffness={90}
                                    motionDamping={15}
                                />
                            </div>
                        </div>


                    </div>
                    <div>
                        <div className='d-flex flex-wrap justify-content-between align-items-center'>
                            <h3 className='mt-4'>Transasyion History</h3>
                            <div>
                                <Dropdown menu={menuProps} >
                                    <Button>
                                        <Space>
                                            Month
                                            <DownOutlined />
                                        </Space>
                                    </Button>
                                </Dropdown>

                            </div>
                        </div>
                        <div className='d-flex flex-wrap  gap-3 mt-2'>
                            <div>
                                <Dropdown menu={menuProps} className='colll'>
                                    <Button>
                                        <Space>
                                            Recepient
                                            <DownOutlined />
                                        </Space>
                                    </Button>
                                </Dropdown>

                            </div>
                            <div>
                                <Dropdown menu={menuProps} className='colll'>
                                    <Button>
                                        <Space>
                                            Amount
                                            <DownOutlined />
                                        </Space>
                                    </Button>
                                </Dropdown>

                            </div>
                            <div>
                                <Dropdown menu={menuProps} className='colll'>
                                    <Button>
                                        <Space>
                                            Status
                                            <DownOutlined />
                                        </Space>
                                    </Button>
                                </Dropdown>

                            </div>
                        </div>
                    </div>

                    <div className='mt-4'>

                        <Table
                            columns={columns}
                            dataSource={dataTable}
                            size="small"
                            style={{ background: 'white' }}
                        />
                    </div>
                </div>







                {/* below code for right side bar  */}
                <div className='col-md-3 col-sm-12 p-4 RightSide"'>
                    <div className='d-flex mt-2 align-items-center justify-content-between flex-wrap'>
                        <div>
                            <GrNotification />
                        </div>
                        <div className='d-flex align-items-center gap-2 containerProfielSmall'>

                            <div>
                                <img className='profileSmall' src={ProfilePic} alt=''></img>
                            </div>
                            <h7 className="ProfilesmallName">Jhontoson</h7>
                            <div>
                                <BiChevronDown />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8 ContainerPrimium'>
                        <div className='PrimiumText'>Primium Access</div>
                        <div className='PrimiumBelowText'>
                            Take Back Your Creative Control

                        </div>
                    </div>
                    <div className='d-flex'>
                        <img className='profileSmall1' src={ProfilePic} alt=''></img>
                        <img className='profileSmall2' src={ProfilePic1} alt=''></img>
                        <img className='profileSmall3' src={ProfilePic2} alt=''></img>
                        <span className='ProfileCount'>+10</span>
                    </div>
                    <div className='d-flex mt-3 align-items-center gap-2'>
                        <span className='headingSubText'>The Profeshional Platform</span>
                        <span><BiChevronDown /></span>
                    </div>
                    <div className='d-flex UpgradeContianer'>
                        <div>Upgrade Now</div>
                        <div><BsArrowRight /></div>
                    </div>
                    <div className='mt-4'>
                        <Calendar />
                    </div>

                    {/* below Component Showing Meeting Times Component */}
                    <Meeting />

                </div>
            </div>
      
    )
}
