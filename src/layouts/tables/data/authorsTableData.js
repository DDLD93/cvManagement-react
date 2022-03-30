/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import React, { useEffect, useState, useContext } from "react";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Box } from "@mui/system";
import { Icon } from "@mui/material";
import {AlertDialog} from "components/dialouge";
import { ScrollDialog } from "components/dialouge";

export default function data() {
const [rows, setrows] = useState([])
function fetchUsers() {
  fetch("http://localhost:5000/getusers")
.then(res =>res.json())
.then(result=>{
  result.payload.map(user =>{
      console.log(user)
   
    let tempRow =  {
      author: <Author image={team3} name={user.fullName} email={user.email} />,
      function: <Job title={user.userRole} description={user.userRole} />,
      status: (
        <MDBox ml={-1}>
          <MDBadge badgeContent="online" color="dark" variant="gradient" size="sm" />
        </MDBox>
      ),
      employed: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {user.createdAt.split("T")[0]}
        </MDTypography>
      ),
      action: (
        <Box component="div" sx={{fontSize:"20px",display:"flex",gap:1 }}>
          <ScrollDialog
          email={user.email}
          />
          <AlertDialog
         icon={"block"}
         text={"Are are about to suspend this user ?"}
         id={user.id}
         />
          <AlertDialog
          icon={"delete"}
          text={"Are you sure you want to Parmanently delete this user ?"}
          id={user.id}
          />
      </Box>
      
      ),
    }
    setrows(prev =>[...prev,tempRow])
    return
  }
  )
})
.catch(err => console.log(err))
}
  

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );
  useEffect(() => {
  fetchUsers()
   
  }, [])
  

  return {
    columns: [
      { Header: "user", accessor: "author", width: "45%", align: "left" },
      { Header: "Role", accessor: "function", align: "left" },
      { Header: "Last Seen", accessor: "status", align: "center" },
      { Header: "Created At", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],
    rows
    // rows: [
    //   // {
    //   //   author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
    //   //   function: <Job title="Manager" description="Organization" />,
    //   //   status: (
    //   //     <MDBox ml={-1}>
    //   //       <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
    //   //     </MDBox>
    //   //   ),
    //   //   employed: (
    //   //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //   //       23/04/18
    //   //     </MDTypography>
    //   //   ),
    //   //   action: (
    //   //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //   //       Edit
    //   //     </MDTypography>
    //   //   ),
    //   // },
    //   // {
    //   //   author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
    //   //   function: <Job title="Programator" description="Developer" />,
    //   //   status: (
    //   //     <MDBox ml={-1}>
    //   //       <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
    //   //     </MDBox>
    //   //   ),
    //   //   employed: (
    //   //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //   //       11/01/19
    //   //     </MDTypography>
    //   //   ),;
    //   //   action: (
    //   //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //   //       Edit
    //   //     </MDTypography>
    //   //   ),
    //   // },
    //   // {
    //   //   author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
    //   //   function: <Job title="Executive" description="Projects" />,
    //   //   status: (
    //   //     <MDBox ml={-1}>
    //   //       <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
    //   //     </MDBox>
    //   //   ),
    //   //   employed: (
    //   //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //   //       19/09/17
    //   //     </MDTypography>
    //   //   ),
    //   //   action: (
    //   //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //   //       Edit
    //   //     </MDTypography>
    //   //   ),
    //   // },
    //   {
    //     author: <Author image={team3} name="Namuda Tanko" email="mudi@buk.edu.ng" />,
    //     function: <Job title="Staff" description="Lecturer II" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="online" color="dark" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     employed: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         24/12/08
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Edit
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     author: <Author image={team3} name="Richard Ibrahim" email="parker@buk.edu.ng" />,
    //     function: <Job title="Staff Manager" description="HOD Mathematics Department" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     employed: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         04/10/21
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Edit
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     author: <Author image={team4} name="Umar Jere" email="umar.jere@gmail.com" />,
    //     function: <Job title="SysAdmin" description="Admin" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     employed: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         14/09/20
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Edit
    //       </MDTypography>
    //     ),
    //   },
    // ],
  };
}
