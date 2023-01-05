import React, { useEffect, useState } from "react";
import FormData from "../model/schema_form";

// Define the columns for the table
const columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Branch",
    accessor: "branch",
  },
  {
    Header: "Roll No",
    accessor: "rollNo",
  },
  {
    Header: "CGPA",
    accessor: "cgpa",
  },
];

// Define the AdminTable component
const AdminTable = () => {
  // Use the useState hook to store the form data in the component's state
  const [formData, setFormData] = useState([]);

  // Use the useEffect hook to fetch the form data from the database
  useEffect(() => {
    const fetchData = async () => {
      const data = await FormData.find();
      setFormData(data);
    };
    fetchData();
  }, []);

  // Render the table
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th>{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {formData.map((row) => (
          <tr>
            {columns.map((column) => (
              <td>{row[column.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminTable;
