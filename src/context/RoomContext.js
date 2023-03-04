import React, {createContext, useEffect, useState} from 'react';

// date
import {roomData} from '../data';

// create context
export const RoomContext =  createContext();

const RoomProvider = ({children}) => {
  const [rooms, setRooms] =  useState(roomData);
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 Kid');
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setTotal(Number(adults[0]) + Number(kids[0]))
  })
  console.log(total)

  const handleClick = (e) =>{
    e.preventDefault();
    setLoading(true);
    // filter rooms based on total (persons)
    const newRooms = roomData.filter(room => {
      return total <= room.maxPerson
    });

    setTimeout(()=> {
      setRooms(newRooms);
      setLoading(false);
    }, 3000)

    
  }

  return  <RoomContext.Provider value={{rooms, adults, setAdults, kids, setKids,handleClick, loading}}>
    {children}
  </RoomContext.Provider>;
};

export default RoomProvider;
