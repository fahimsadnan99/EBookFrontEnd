import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {extendMoment} from "moment-range";
import Moment from "moment"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from '../../api/api';


const Calender = ({roomPrice,getDate}) => {

  const {id} = useParams()

 
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [totalDay,setTotalday] = useState([]);
     const [allDay, setAllDay] = useState([])
     const [excludeDates,setExcludeDates] = useState([])
     

     

  const moment = extendMoment(Moment)
  const onChange = (dates) => {
 
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if(start && end) {
     let day = Math.floor(((new Date(end) - new Date(start)) / 86400000) + 1)

     const range = moment.range(moment(start), moment(end))
     const days = Array.from(range.by("day")).map(el =>{
       return moment(el).toISOString()
     })

     let allDates = []
     if(excludeDates.length && days.length){

       let formatedExecutedDate =  excludeDates.map(x => new Date(x).toDateString())
         days.forEach(e=>{
          let target = new Date(e).toDateString()
            if(!formatedExecutedDate.includes(target)){
              allDates.push(moment(target).format())
            }
         })

            
     }else{
      allDates = days
     }


        
    console.log("select", days);
    console.log("new", allDates);
    console.log("Data Base", excludeDates);

      setTotalday(allDates)
      setAllDay(days)
      getDate(days)
    }
  };

  
console.log(totalDay)

  useEffect(()=>{
    axios.get(`${BaseUrl}/confirm/${id}`)
    .then(res => setExcludeDates(res.data))

  },[])

  return (
    <div>
    <DatePicker
    selected={startDate}
    onChange={onChange}
    startDate={startDate}
    endDate={endDate}
    excludeDates={excludeDates.length > 0 ? excludeDates.map(item => new Date(item)) : null}
    selectsRange
    inline
  />
  <h5 className='my-3'>Total Tk : {totalDay.length * roomPrice} Tk</h5>
    </div>
  )
}

export default Calender