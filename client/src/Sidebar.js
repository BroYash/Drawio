import React from 'react'
import './Sidebar.css'
import TimerIcon from '@material-ui/icons/Timer';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <TimerIcon/>
                <div className="sidebar__headerRight">
                    <h1 className="roundNumberText">Round 1 of 3</h1>
                </div>
            </div>
            <div className="sidebar__players">

            </div>
        </div>
    )
}

export default Sidebar
