import './zodiac.css';

export default function zodiac(props) {
  return (<div className='zodiac'>
    <><img src={`${process.env.PUBLIC_URL}/symbols/${props.name}.png`} /><h2 className="name">{props.name}</h2><h3>{props.symbol}</h3><p className='dates'>{props.dates}</p></>
  </div>);
}