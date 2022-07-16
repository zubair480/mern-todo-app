import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkIcon from "@mui/icons-material/Work";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useParams, Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams("");
  console.log(id);
  const [userData, setUserData] = useState([]);
  console.log(userData);
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
      setUserData(data);
      console.log("Get data");
    }
  };
  useEffect(() => {
    getuser();
  }, []);
  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: "400" }}>Welcome to my website</h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <h3 className="mt-3">
                Name: <span style={{ fontWeight: "300" }}>{userData.name}</span>
              </h3>
              <h3 className="mt-3">
                Age: <span style={{ fontWeight: "300" }}>{userData.age}</span>
              </h3>
              <p className="mt-3">
                <MailOutlineIcon />
                Email:
                <span style={{ fontWeight: "300" }}>{userData.email}</span>
              </p>
              <p className="mt-3">
                <WorkIcon />
                Occupition:
                <span style={{ fontWeight: "300" }}>{userData.profession}</span>
              </p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">
              <Link to={`/edit/${id}`}>
                <button className="btn btn-primary">
                  <CreateIcon />
                </button>
              </Link>
              <button className="btn btn-danger">
                <DeleteOutlineIcon />
              </button>
              <p className="mt-3">
                <PhoneAndroidIcon />
                Mobile: <span>{userData.phoneNumber}</span>
              </p>
              <p className="mt-3">
                <LocationOnIcon />
                Location: <span>Pakistan</span>
              </p>
              <p className="mt-3">
                Description:
                <span>{userData.description}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
