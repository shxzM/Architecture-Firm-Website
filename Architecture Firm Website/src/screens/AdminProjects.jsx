import React from 'react'
import AdminHeader from "../components/AdminHeader"
import ProjectsList from '../components/ProjectsList';
import { useNavigate } from 'react-router-dom';
import AddProject from "../components/AddProject"

export default function AdminProjects() {
    const navigate = useNavigate()

    const ShowProject = (projectId) => {
        console.log(projectId);
        navigate(`/update/${projectId}`);
      }

  return (
    <div>
        <AdminHeader/>
        <ProjectsList onClick = {ShowProject}/>
        <AddProject/>
    </div>
  )
}
