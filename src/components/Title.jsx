import "./Title.css";

function Title( {title, eventColor} ) {
  return (
    <h2 className="title" style={{color: eventColor}}>{title}</h2>
  )
}

export default Title