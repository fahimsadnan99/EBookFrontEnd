import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getHomePageRoom } from "../../Redux/utilsFunc/Room";

const RoomSearch = () => {
  const dispatch = useDispatch();

  const [cityAndBed, setCityAndBed] = useState({
    city: "",
    bedroom: "",
  });

  const handleChange = (e) => {
    setCityAndBed({
      ...cityAndBed,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoomSearch = () => {
    if (cityAndBed.city && cityAndBed.bedroom) {
      let arg = {
        city: cityAndBed.city,
        bedroom: [Number(cityAndBed.bedroom)],
        page: 1,
        limit: 6,
      };

      dispatch(getHomePageRoom(arg));
    }
  };


  return (
    <div className="container text-center">
      <div className="roomSearchWrapper">
        <div className="d-flex marginOption">
          <select
            className=" roomOption mt-1 ml-2"
            value={cityAndBed?.city}
            name="city"
            onChange={(e) => handleChange(e)}
          >
            <option value=""> Select City</option>
            <option value="Dhaka"> Dhaka</option>
            <option value="Chittagong"> Chittagong</option>
        
            <option value="Shylate"> Shylate</option>
           
          </select>

          <select
            className=" roomOption mt-1 ml-2"
            value={cityAndBed?.bedroom}
            name="bedroom"
            onChange={(e) => handleChange(e)}
          >
            <option value=""> Select Bed</option>
            <option value={1}> 1</option>
            <option value={2}> 2</option>
            <option value={3}> 3</option>
            <option value={4}> 4</option>
          </select>

          <button
            className="srcBtn"
            disabled={cityAndBed?.city.length && cityAndBed?.bedroom.length ? false : true}
            onClick={handleRoomSearch}
          >
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomSearch;
