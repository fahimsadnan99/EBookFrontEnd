import React, { useEffect, useState } from "react";

import apiAxios from "../../../../api/api";
import { imgUpdate, deleteImg, updateImg } from "../../../../Redux/Reducers/RoomReducer";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";

const ImageUploade = () => {
  const [active, setActive] = useState(false);
  let [arrayLength, setArrayLength] = useState(1);
  const { img } = useSelector((state) => state.room);


  const dispatch = useDispatch();

  let imgUpadeHandler = (file, ind) => {
 setActive(true);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
   
    apiAxios
      .post("/img", {img : reader.result})
      .then((res) => {
        setActive(false);
        dispatch(updateImg({ data: res.data, index: ind }));
      })
      .catch((err) => console.log(err));
    }
   
   
    
  };

  const handleDelete = (ind) => {
    dispatch(deleteImg(ind));

    if (arrayLength !== 1 ) {
      setArrayLength(arrayLength - 1);
    }
  };

  const handleUploadFile = (file) => {
   setActive(true);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
     
    apiAxios
      .post("/img", {img : reader.result})
      .then((res) => {
        setActive(false);
        dispatch(imgUpdate(res.data));
      })
      .catch((err) => console.log(err));
    }

 
   
  };

  return (
    <div>
      <h3 className="mt-4 text-center">Add Images</h3>
      <div className="photoAdd row">
        {Array(arrayLength)
          .fill(0)
          .map((el, index) => {
            return (
              <div className="col-3 mx-2 text-center mt-2" key={index}>
                {img[index] ? (
                  <div className="img1">
                    <img src={img[index]} alt="img" style={{ width: "250px" }} />

                    <div className="imgOverlay">
                      <label htmlFor={`photo${index}`} style={{ cursor: "pointer" }}>
                        <i class="fa fa-plus-square-o mt-5 " aria-hidden="true"></i>
                      </label>

                      <input
                        type="file"
                        name={`photo${index}`}
                        onChange={(e) => imgUpadeHandler(e.target.files[0], index)}
                        id={`photo${index}`}
                        className="photoVissability"
                      />

                      <label className="deleteIcon" onClick={() => handleDelete(index)}>
                        <i class="fa fa-trash mt-5 " aria-hidden="true"></i>
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4">
                    {active ? (
                      <Skeleton.Image active={active} />
                    ) : (
                      <>
                        <label htmlFor={`photo${index}`}>
                          <i
                            class="fa fa-plus-square-o"
                            aria-hidden="true"
                            style={{ fontSize: "100px", cursor: "pointer" }}
                          ></i>
                        </label>

                        <input
                          type="file"
                          name={`photo${index}`}
                          onChange={(e) => handleUploadFile(e.target.files[0])}
                          id={`photo${index}`}
                          className="photoVissability"
                        />
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}

        <div className="col-3 mx-2 mt-2">
          <button className="mt-5 btn btn-success" onClick={() => setArrayLength(img?.length + 1)}>
            Add More Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploade;
