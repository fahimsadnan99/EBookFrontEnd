import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

const RoomType = ({ Option, title, Style }) => {
  return (
    <Dropdown as={ButtonGroup}>
      <Dropdown.Toggle
        variant="dark"
        id="dropdown-basic"
        className="custome"
        style={Style}
      >
        <span className=" uppercase pr-2 text-xs"> {title}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {Option?.map((item) => (
          <Dropdown.Item href="#" style={Style}>
            <span className=" uppercase pr-2 text-xs">{item.option}</span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default RoomType;
