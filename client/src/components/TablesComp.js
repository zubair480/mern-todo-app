import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";

const TablesComp = () => {
  const [getUserData, setgetUserData] = useState([]);
  console.log(getUserData);
  const getdata = async (e) => {
    const res = await fetch("/getdata", {
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
      setgetUserData(data);
      console.log("Get data");
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  const deleteUser = async (id) => {
    const res2 = await fetch(`/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deleteData = await res2.json();
    console.log(deleteData);
    if (res2.status === 404 || !deleteData) {
      console.log("error");
    } else {
      console.log("User Deleted");
      getdata();
    }
  };
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <Link to="/register" className="btn btn-primary">
            Add data
          </Link>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr className="table-dark">
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {getUserData.map((element, id) => {
              return (
                <>
                  <tr>
                    <td>{id + 1}</td>
                    <td>{element.name}</td>
                    <td>{element.age}</td>
                    <td>{element.email}</td>
                    <td>{element.phoneNumber}</td>
                    <td className="d-flex justify-content-around">
                      <Link to={`/details/${element._id}`}>
                        <button className="btn btn-success">
                          <RemoveRedEyeIcon />
                        </button>
                      </Link>
                      <Link to={`/edit/${element._id}`}>
                        <button className="btn btn-primary">
                          <CreateIcon />
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          deleteUser(element._id);
                        }}
                        className="btn btn-danger"
                      >
                        <DeleteOutlineIcon />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TablesComp;
