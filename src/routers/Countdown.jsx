import Count from '../components/Count';
import Title from '../components/Title';
import Information from '../components/Information';

import { Navigate } from 'react-router-dom';
import { CountdownContext } from '../context/CountdownContext';
import { useContext } from 'react';

import useCountdown from '../hooks/useCountdown';

function Countdown() {
   const { event } = useContext(CountdownContext);

   if(!event) return <Navigate to="/" />;

   const [day, hour, minutes, second] = useCountdown(event.date);  

   const eventTitle = event.title;
   const eventColor = event.color;

   console.log(event);

  return (
    <>
    <Title title={eventTitle} eventColor={eventColor} />
    <div className="countdown-container">
        <Count title="Dias" number={day} eventColor={eventColor} />
        <Count title="Horas" number={hour} eventColor={eventColor} />
        <Count title="Minutos" number={minutes} eventColor={eventColor} />
        <Count title="Segundos" number={second} eventColor={eventColor} />
    </div>
    <div className="information">
         <h3>Informações sobre o evento:</h3>
         <Information information={event.info} />
    </div>
    </>
  )
}

export default Countdown