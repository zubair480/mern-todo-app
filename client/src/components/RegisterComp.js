import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function RegisterComp() {
  const [inpVal, setINP] = useState({
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
    setINP((preval) => {
      return { ...preval, [name]: value };
    });
  };

  const addInpData = async (e) => {
    e.preventDefault();
    const { name, email, age, phoneNumber, profession, address, description } =
      inpVal;
    const res = await fetch("/register", {
      method: "POST",
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
    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      alert("Error: ");
      console.log("error");
    } else {
      alert("Data added successfully ");
      console.log("data added successfully");
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
              placeholder="Enter your Full Name"
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
              placeholder="Enter your age"
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
              placeholder="Enter your Mobile number"
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
              placeholder="Enter your work details"
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
              placeholder="Enter your Address"
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
              placeholder="Enter your description"
            ></textarea>
          </div>

          <Button variant="primary" type="submit" onClick={addInpData}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default RegisterComp;
