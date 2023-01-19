import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "./style.css"

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { BaseUrl } from "../../../api/api";

const OrderRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [itemData, setItemData] = useState();
  const [images, setImages] = useState([]);

  useEffect(() => {
    let img = itemData?.roomId
    ?.img?.map((imte) => ({ original: imte, thumbnail: imte }));
    setImages(img);
  }, [itemData]);

  useEffect(() => {
    axios
      .get(`${BaseUrl}/user/room/${id}`)
      .then((res) => setItemData(res.data))
      .catch((err) => console.error(err));
  }, []);

  console.log(navigate);
  return (
    <div className="singleRoomWrapper">
       <button className="ml-4 btn btn-dark" style={{width : "150px", marginTop : "80px"}} onClick={() => navigate(-1)}><i class="fa fa-arrow-circle-left" aria-hidden="true"></i>Go back</button> 
      <div className="container">
      
        <div className="row">
       
          <div className="col-lg-8 offset-lg-2 text-center" style={{ marginTop: "20px" }}>
         
            {images && <ImageGallery items={images} />}
          </div>

          <div className="col-12">
            <div className="row">
              <div className=" my-4 col-lg-6 col-md-6 col-12 order-lg-0 col-md-1">
                <div className="singleRoomInfo">
                  <h4 className="responsiveText">City : {itemData?.roomId?.city}</h4>
                  <h5 className="responsiveText">Class : {itemData?.roomId?.class}</h5>
                  <h5 className="responsiveText">Hotel Name : {itemData?.roomId?.name}</h5>
                  <h5 className="responsiveText" style={{ color: "red" }}>Price : {itemData?.roomId?.price}$ Per Night</h5>
                  <p>Bed : {itemData?.roomId?.bedroom}</p>
                  <p>Rest Room : {itemData?.roomId?.toylet}</p>
                  <p>Ac :{itemData?.roomId?.ac}</p>
                  <p>Pet : {itemData?.roomId?.pet}</p>
                  <p>Breakfast : {itemData?.roomId?.breakfast}</p>
                  <p>Swimming Pool : {itemData?.roomId?.swimmingPool}</p>
                </div>
              </div>
              <div className=" my-4 col-lg-6 col-md-6 order-lg-1 col-md-0">
                <DatePicker
                  excludeDates={itemData?.date?.length > 0 ? itemData?.date?.map(item => new Date(item)) : null}

                  inline
                />

          <div style={{background : "#C42A09",color : "#fff", borderRadius : "10px", width: "fit-content",padding : "15px 19px"}}>
                <h5> Booking For {itemData?.date?.length} {itemData?.date?.length == 1 ? "Day" : "Days"}</h5>
                <h5>Total Amount is   {itemData?.date?.length * itemData?.roomId?.price} $</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderRoom;
