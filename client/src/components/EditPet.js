import axios from "axios";
// import "./style.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EditPet = (props) => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [petSkills, setPetSkills] = useState("");

  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getOnePet/${id}`) //Make request
      .then((res) => {
        setPetName(res.data.petName);
        setPetType(res.data.petType);
        setPetDescription(res.data.petDescription);
        setPetSkills(res.data.petSkills);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/pet/${id}`, {
        petName,
        petType,
        petDescription,
        petSkills,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="">
      <div>
        <h1>Pet Shelter</h1>
        <Link className="link" to={"/"}>
          back to home
        </Link>
        <p>Know a pet needing a home?</p>

        <form
          className="form1 form-card border border-dark"
          onSubmit={handleSubmit}
        >
          <div className="row justify-content-between text-left mt-5">
            <div className="form-group col-sm-6 flex-column d-flex">
              <label className="form-control-label px-3">Pet Name:</label>{" "}
              <input
                onChange={(e) => setPetName(e.target.value)}
                value={petName}
                type="text"
                id="petName"
                name="petName"
              />
              {errors.petName && (
                <span className=" text-center text-danger">
                  {errors.petName.message}
                </span>
              )}
            </div>
            <div className="form-group col-sm-6 flex-column d-flex">
              {" "}
              <select
                className="skills form-control mt-4"
                onChange={(e) => setPetSkills(e.target.value)}
                value={petSkills}
              >
                <option>Select 3 Skills</option>
                <option value="Skill1">Skill#1</option>
                <option value="Skill2">Skill#2</option>
                <option value="Skill3">Skill#3</option>
              </select>
            </div>
          </div>
          <div className="row justify-content-between text-left">
            <div className="form-group col-sm-6 flex-column d-flex">
              
              <label className="form-control-label px-3">Pet Type:</label>
              <input
                onChange={(e) => setPetType(e.target.value)}
                value={petType}
                type="text"
                id="petType"
                name="petType"
              />
              {errors.petType && (
                <span className=" text-center text-danger">
                  {errors.petType.message}
                </span>
              )}
            </div>
          </div>

          <div className="row justify-content-between text-left">
            <div className="form-group col-sm-6 flex-column d-flex">
    
              <label className="form-control-label px-3">Pet Description</label>
              <input
                onChange={(e) => setPetDescription(e.target.value)}
                value={petDescription}
                type="text"
                id="PetDescription"
                name="PetDescription"
              />
              {errors.petDescription && (
                <span className=" text-center text-danger">
                  {errors.petDescription.message}
                </span>
              )}
            </div>
          </div>

          <div className="row justify-content-end">
            <div className="form-group col-sm-6 justify-baseline">
              
              <button type="submit" className="btn btn-primary">
                Update Pet
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPet;
