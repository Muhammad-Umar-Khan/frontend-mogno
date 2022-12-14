//redux imports;

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//my imoprts;

import './SideBar.css';
import "../../App.css";
import { getAllProTasks } from "../../store/actions/projectActions";
import ProjectInput from "../projectComponents/ProjectInput";
import ListAllProTasks from "../taskComponents/ListALLTasks";
import isLoadingIcon from "../../assets/images/isLoading.gif";
import Navbar from "../taskComponents/Navbar";
//sidebar component;

const SideBar = () => {
  const [loading, setIsloading] = useState(true);
  const [selected, setSelected] = useState("");
  const [addP, setAddP] = useState("");

  const projects = useSelector((state) => state.projectReducer.projects);
  const dispatch = useDispatch();
  useEffect(() => {
    if(projects && projects.length > 1){
      const firstProject = projects[0];
      dispatch(getAllProTasks(firstProject._id));
      setIsloading(false);
    }
   
  }, [projects, dispatch])

  return (
    <div className="container">
      <div className="content">
        <div className="row justify-content-center">
          <div className="col-11">
            <div className="card">
              <div className="card-body" style={{padding: 0}}>
              <Navbar />
                <div  className="container-fluid">
    <div  className="row">
      <div
      id="bgcolor"
        style={{ width: 250 }}
        className="sideBarTextColor col-md-4 col-auto"
      >
          <h3>Projects</h3>
          <hr className="hrColor"></hr>
        <ul>
          {projects.map((project) => {
            return (
              <li                
              cursor="pointer"
                key={project._id}
                onClick={() => {
                  setSelected(project._id)
                  dispatch(getAllProTasks(project._id));
                  setIsloading(false)
                }}
              >
                <p style={{cursor: "pointer"}} className="nav-link">{project.text}</p>
              </li>
            );
          })}
        </ul>
        <ProjectInput addP={addP} setAddP={setAddP}/>
      </div>
      
      {loading ? <div className="spinner"><img alt="Spinner" style={{width: 200, height: 200}} src={isLoadingIcon}/></div> : <ListAllProTasks selected = {selected} loading={loading}/> }
      
    </div>      
  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default SideBar;
