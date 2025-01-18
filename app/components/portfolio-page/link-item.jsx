import ILink from '../icons/ILink';

const LinkItem = ({label, link}) => {
  return (  
    <a href={link} className="linkItem">
      <ILink/>
      <div className="">{label}</div>
    </a>
  );
}
 
export default LinkItem;