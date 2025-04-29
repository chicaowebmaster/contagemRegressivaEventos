import { useState } from "react";

const useCountdown = (date) => {

           const [day, setDay] = useState();
           const [hour, setHour] = useState();
           const [minutes, setMinutes] = useState();
           const [second, setSecond] = useState();
        
           const countDown = () => {
 
                const countDate = new Date(date).getTime();
                const now = new Date().getTime();
    
                const interval = countDate - now;
                
                const second = 1000;
                const minutes = second * 60;
                const hour = minutes * 60;
                const day = hour * 24;
    
                const dayNumber = Math.floor(interval / day);
                const hourNumber = Math.floor((interval % day) / hour);
                const minutesNumber = Math.floor((interval % hour) / minutes);
                const secondNumber = Math.floor((interval % minutes) / second);

                setDay(dayNumber);
                setHour(hourNumber);
                setMinutes(minutesNumber);
                setSecond(secondNumber);

           }

           setInterval(countDown, 1000);

           return [day, hour, minutes, second];

};

export default useCountdown;