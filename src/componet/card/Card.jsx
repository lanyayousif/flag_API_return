import './card.css'
import areaa from '../../assets/img/area.png'
import people from '../../assets/img/people-together.png'
function Card({name,region,flags,population,area}) {

  return (
    <div className='card'>
        <figure className='figure_card'>
             <img className='flagImg' src={flags.png} alt="flagimage" />
              <figcaption className='flag_caption'> 
              <h1 className="name">{name.common}</h1>
             <p className='region'> {region}</p>
              <p className="population">  <img src={people} alt="flag" /> {population}</p>
              <p className="area"> <img src={areaa} alt="flag" />{area}</p>
              </figcaption>
        </figure>

    </div>
  )
}

export default Card