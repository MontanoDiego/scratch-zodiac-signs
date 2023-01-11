import './zodiac.css';

export default function Zodiac(props) {
  return (<div className='zodiac'>
    <>
      <img className='image' src={`${process.env.PUBLIC_URL}/symbols/${props.name}.png`} />
      <h2 className="name">{props.name}</h2>
      <h3 className='symbol'>{props.symbol}</h3>
      <p className='dates'>{props.dates}</p>
    </>
  </div>);
}