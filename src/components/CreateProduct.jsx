import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  addProduct
} from "../features/productSlice";
import { IoCloudUploadOutline } from "react-icons/io5";

const CreateProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const { user } = useSelector((state) => state.auth);
  // const { title, agenda, image, branch } = formData;
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // var branchId = localStorage.getItem("branchId");
    // console.log();
    // console.log();//
    const fullName = `${user.firstName} ${user.lastName}`;
    const branchId = Number(user.branchId);
    const userId = Number(user.id);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("branchId", branchId);
    formData.append("userId", userId);
    formData.append("image", image);
    formData.append("fullName", fullName);
    // dispatch(createProduct({ formData }))
    // setData([])
    // // setDescription('')
    // setImage(false)
    console.log(formData);
    // const response = await axios.post('http://localhost:5000/api/products', formData)
    dispatch(createContribution(formData));
    if (formData) {
      setData({
        title: "",
        description: "",
        image: "",
      });
      setImage(false);
    }
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const minutesData = {
  //     branch: props._id,
  //     title,
  //     description,
  //   };
  //   // console.log(minutesData);
  //   dispatch(createMinutes(minutesData));
  //   navigate("../profile");
  // };
  return (
    <div className="mt-[50px]">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputTitle">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Contribution's Title"
            onChange={onChange}
            name="title"
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        {/* <div className="branches"></div> */}
        <div className="form-group">
          <label htmlFor="exampleInputTitle">Payment for what?</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="What's did you pay for"
            onChange={onChange}
            name="description"
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="mb-6">
          <p>Upload Evidence of Payment</p>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                height={300}
                width={300}
              />
            ) : (
              <IoCloudUploadOutline className="size-[50px]" />
            )}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
       focus:outline-none focus:shadow-outline form-control"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            hidden
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </form>
      {/* <di>
          <h1>The Minutes so Far</h1>
          <p>{props.title}</p>
          <p>{props.amount}</p>
          <img src={props.image} height={50} width={50} />
        </di> */}
    </div>
  );
};

export default CreateProduct;