import React from 'react'
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel} from '@syncfusion/ej2-react-schedule';


class Notification extends React.Component{

    localData: EventSettingsModel={
        dataSource:[{
            EndTime: new Date(2021,4,5,4,0),
            StartTime: new Date(2021,3,29,6,30),
        }]
    };

    render(){
        return( 
        <div className="notification">
            <ScheduleComponent currentView="Month" eventSettings={this.localData} >
            <Inject services={[Day,Week,WorkWeek,Month,Agenda]}/>
            </ScheduleComponent>
        </div>
        )
    }
}

export default Notification


