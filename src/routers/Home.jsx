import { useContext, useState } from "react";
import { CountdownContext } from "../context/CountdownContext";
import { useNavigate } from "react-router-dom";

import "./Home.css";

function Home() {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const [info, setInfo] = useState();
  const [color, setColor] = useState();

  const { setEvent } = useContext(CountdownContext);

  const navigate = useNavigate();
  
  const handlerSubmit = (e) => {
     
         e.preventDefault();

         const eventObject = {
                  title,
                  date,
                  image,
                  info,
                  color
         }

         setEvent(eventObject);
         navigate("/countdown");
        
  }

  return (
    <div className="home">
      <h2>Monte a sua contagem regressiva!</h2>
      <form className="countdown-form" onSubmit={handlerSubmit}>
        <label>
          <span>Título:</span>
          <input type="text" name="title" 
            placeholder="Digite o título do evento"
            onChange={(e) => setTitle(e.target.value)}
            required 
          />
        </label>
        <label>
          <span>Data do evento:</span>
          <input type="date" name="date"
            onChange={(e) => setDate(e.target.value)}
            required 
          />
        </label>
        <label>
          <span>Imagem:</span>
          <input type="text" name="image" 
            placeholder="Insira a URL da imagem" 
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          <span>Informações sobre o evento:</span>
          <textarea name="info" rows="4" onChange={(e) => setInfo(e.target.value)}></textarea>
        </label>
        <label>
          <span>Cor do tema:</span>
          <input type="color" name="color" onChange={(e) => setColor(e.target.value)} />
        </label>
        <input type="submit" name="Enviar" />
      </form>
    </div>
  )
}

export default Home