import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const LandingPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getAllPets") //Make request
      .then((res) => {
        setItems(res.data.pet);
        console.log(res.data.pet);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mainContainerLP">
      <h1>Pet Shelter</h1>
      <h6>These pets are looking for a good home</h6>

      <Link className="link" to={"/addPet"}>
        add a pet to the shelter
      </Link>

      <table className="table table-striped table-bordered border border-dark">
        <thead className="">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item._id}>
                <th scope="row">
                  <Link to={`/petDetail/${item._id}`}>{item.petName}</Link>
                  <br></br> <br></br>{" "}
                  <th>
                    <Link to={`/editPet/${item._id}`}>Update Pet</Link>
                  </th>
                </th>
                <td>{item.petType}</td>
                <td>{item.petSkills}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LandingPage;
