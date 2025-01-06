const NavigationItem = ({
  label,
  id,
  activeId,
  onClick
}) => {
  return ( 
    <div 
      onClick={() => onClick(id)}
      className={`
        ${activeId === id && 'navContainerItem--active'}
        navContainerItem 
      `}
    >
      {label}
    </div>
  );
}
 
export default NavigationItem;