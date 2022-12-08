import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
// import ImgCrop from "antd-img-crop";
import addimageicon from "../assets/svg/addimageicon.svg";
import "./AddImage.css";

function AddImage({ setAddSmallImage }) {
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
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);

      return;
    }
    console.log(info);
    if (info.file.status === "done") {
      // console.log(info.file.status);
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
        setAddSmallImage(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? (
        <LoadingOutlined />
      ) : (
        <img
          className="h-[28px] w-[28px]"
          src={addimageicon}
          alt="addimageicon"
        />
      )}
    </div>
  );
  return (
    // <ImgCrop>
    <Upload
      name="avatar"
      listType="picture-card"
      className="small-boxes "
      style={{
        color: "red",
      }}
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
    // {/* </ImgCrop> */}
  );
}
export default AddImage;
