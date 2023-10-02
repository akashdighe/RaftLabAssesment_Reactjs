import React from 'react'
import GoogleMeet1 from '../Icons/GoogleMeet1.jpg'
import GoogleMeet2 from '../Icons/GoogleMeet2.jpg'
import GoogleMeet3 from '../Icons/GoogleMeet3.jpg'
import { BsCameraVideo } from 'react-icons/bs';

export default function Meeting() {
    return (
        <div>
            <div className='d-flex mt-4 ContainerMeet  gap-4 align-items-center '>
                <div>
                    <img className='GoogleMeetImg' src={GoogleMeet1} alt=''></img>

                </div>
                <div className='w-100'>
                    <h6>Meeting With Client</h6>
                    <div className='d-flex flex-wrap gap-2 align-items-center justify-content-between '>
                        <div className='d-flex flex-wrap gap-2 align-items-center'>
                            <BsCameraVideo />
                            <span className='googleMeet'>Google Meet</span>
                        </div>
                        <span className='googleMeet'>
                            12 pm
                        </span>
                    </div>
                </div>
            </div>
            <div className='d-flex mt-4 ContainerMeet  gap-4 align-items-center '>
                <div>
                    <img className='GoogleMeetImg' src={GoogleMeet2} alt=''></img>

                </div>
                <div className='w-100'>
                    <h6>Meeting With Client</h6>
                    <div className='d-flex flex-wrap gap-2 align-items-center justify-content-between '>
                        <div className='d-flex flex-wrap gap-2 align-items-center'>
                            <BsCameraVideo />
                            <span className='googleMeet'>Weekly Report</span>
                        </div>
                        <span className='googleMeet'>
                            12 pm
                        </span>
                    </div>
                </div>
            </div>
            <div className='d-flex mt-4 ContainerMeet  gap-4 align-items-center '>
                <div>
                    <img className='GoogleMeetImg' src={GoogleMeet3} alt=''></img>

                </div>
                <div className='w-100'>
                    <h6>Meeting With Client</h6>
                    <div className='d-flex flex-wrap gap-2 align-items-center justify-content-between '>
                        <div className='d-flex flex-wrap gap-2 align-items-center'>
                            <BsCameraVideo />
                            <span className='googleMeet'>Daily scrum Meeting</span>
                        </div>
                        <span className='googleMeet'>
                            12 pm
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
