import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import uploadimage from "../assets/svg/uploadimage.svg";
import plus from "../assets/svg/plus.svg";
import cameracircle from "../assets/svg/cameracircle.svg";
import "./AddItem.css";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must be smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
function AddBigImage() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    // console.log(info);
    if (info.file.status === "done") {
      // console.log(info.file.status);
      // I will get  this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? (
        <LoadingOutlined />
      ) : (
        <div className="flex flex-col items-center">
          <div className="h-[40px] w-[40px] relative">
            <img
              className="h-[100%] w-[100%]"
              src={uploadimage}
              alt="uploadImageIcon"
            />
            <img
              className="absolute h-[18px] w-[18px] top-[-4px] left-[-7px] "
              src={plus}
              alt="plusIcon"
            />
            <img
              className="absolute h-[14px] w-[14px] top-[15px] left-[13px]"
              src={cameracircle}
              alt="cameracircle"
            />
          </div>
          <p className="whitespace-nowrap">Add up to 7 images</p>
        </div>
      )}
    </div>
  );
  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatars"
      showUploadList={false}
      action="http://localhost:3004/items/"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
}
export default AddBigImage;
