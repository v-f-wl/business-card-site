import '../../styles/portfolio-page/technologie-item.scss'
const TechnologieItem = ({
  color, label
}) => {
  return ( 
    <div className={`technologie-item ${color}`}>#{label}</div>
  )
}
 
export default TechnologieItem;