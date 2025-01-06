import '../../styles/home-page/attributes-items.scss'
const AttributesItems = ({
  category,
  label
}) => {
  return ( 
    <div className="attribute">
      <div className="attributeCategory nunito-sans">{category}:</div>
      <div className="attributeLabel noto-sans">{label}</div>
    </div>
  );
}
 
export default AttributesItems;