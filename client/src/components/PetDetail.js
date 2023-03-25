import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PetDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getOnePet/${id}`) //Make request
      .then((res) => {
        setItem(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/deleteOnePet/${id}`) //Make request
      .then((res) => {
        // console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="detailDiv card">
      <div className="text-center ">
        <h1>Pet Shelter</h1>
        <Link className="link" to={"/"}>
          back to home
        </Link>
        <p>Details about: {item.petName}</p>
        <button
          className="adoptButton bg-danger text-white"
          onClick={handleDelete}
        >
          Adopt{" "}
        </button>
      </div>

      <div className="detailContainer d-block border border-dark card-body">
        <h2>Pet Type: {item.petName}</h2>
        <h2>Pet Description: {item.petDescription}</h2>
        <h2>Skill: {item.petSkills}</h2>
      </div>
    </div>
  );
};

export default PetDetail;
