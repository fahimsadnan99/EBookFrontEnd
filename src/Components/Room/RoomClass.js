import React from 'react';
import { Select, Tag } from 'antd';
const options = [
  {
    value: 'Classic',
  },
  {
    value: 'Gold',
  },
  {
    value: 'Royel',
  }
];
const tagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginRight: 3,
      }}
    >
      {label}
    </Tag>
  );
};
const RoomClass = ({handleChange}) => (
  <Select
    mode="multiple"
    showArrow
    tagRender={tagRender}
    style={{
      width: '100%',
    }}
    
    options={options}
    onChange={handleChange}
  />
);
export default RoomClass;