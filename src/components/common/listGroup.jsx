import React from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect
}) => {
    return (
        
    <ul className="list-group">
                {items.map(item => (
                    
                    <li
                        onClick={() => onItemSelect(item)}
                        key={item[valueProperty]}
                        className={
                            item[valueProperty] === selectedItem[valueProperty] ? "list-group-item cursor active" : "list-group-item cursor"
          }
                    >
                        {item[textProperty]}
        </li>
      ))}
            </ul>
            
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
