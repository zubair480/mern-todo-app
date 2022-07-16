import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function Edit() {
  const history = useNavigate("");
  const [inpVal, setinpVal] = useState({
    name: "",
    email: "",
    age: "",
    phoneNumber: "",
    profession: "",
    address: "",
    description: "",
  });
  const setData = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setinpVal((preVal) => {
      return { ...preVal, [name]: value };
    });
  };
  const { id } = useParams("");

  console.log(id);
  // const [userData, setUserData] = useState([]);
  // console.log(userData);
  const getuser = async () => {
    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      console.log("error");
    } else {
      setinpVal(data);
      console.log("Get data");
    }
  };
  useEffect(() => {
    getuser();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    const { name, email, age, phoneNumber, profession, address, description } =
      inpVal;

    const res2 = await fetch(`/updateuser/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        age,
        phoneNumber,
        profession,
        address,
        description,
      }),
    });
    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("Fill the data");
    } else {
      alert("Data added successfully");
      history.pushState("/");
    }
  };
  return (
    <div className="container">
      <Link to="/">Home</Link>
      <Form className="mt-5">
        <div className="row">
          <Form.Group
            className="mb-3 col-lg-6 col-md-6 col-12"
            controlId="formBasicEmail"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={setData}
              value={inpVal.name}
              name="name"
              type="text"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 col-lg-6 col-md-6 col-12"
            controlId="formBasicEmail"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={setData}
              value={inpVal.email}
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group
            className="mb-3 col-lg-6 col-md-6 col-12"
            controlId="formBasicEmail"
          >
            <Form.Label>Age</Form.Label>
            <Form.Control
              onChange={setData}
              value={inpVal.age}
              name="age"
              type="number"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 col-lg-6 col-md-6 col-12"
            controlId="formBasicEmail"
          >
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              onChange={setData}
              value={inpVal.phoneNumber}
              name="phoneNumber"
              type="number"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 col-lg-6 col-md-6 col-12"
            controlId="formBasicEmail"
          >
            <Form.Label>Work</Form.Label>
            <Form.Control
              onChange={setData}
              value={inpVal.profession}
              name="profession"
              type="text"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 col-lg-6 col-md-6 col-12"
            controlId="formBasicEmail"
          >
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={setData}
              value={inpVal.address}
              name="address"
              type="text"
              placeholder="Enter email"
            />
          </Form.Group>
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label className="formLabel">Description</label>
            <textarea
              onChange={setData}
              value={inpVal.description}
              name="description"
              id=""
              cols="30"
              rows="5"
              className="form-control"
            ></textarea>
          </div>

          <Button variant="primary" type="submit" onClick={updateUser}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Edit;
