import React, { useState } from "react";
import Header from "./Components/Header/Header";
import MterialTable from "./Components/Material Table/MaterialTable";


const empList = [
  {
    id: 1,
    name: "Afzal",
    email: "afzal@gmail.com",
    age: 13,
    phonenumber: 213213221,
    gender: "M",
    city: "Karachi",
  },
  {
    id: 2,
    name: "Ammar",
    email: "ammar@gmail.com",
    age: 18,
    phonenumber: 12312475232,
    gender: "M",
    city: "Lahore",
  },
  {
    id: 3,
    name: "Ahsan",
    email: "ahsan@gmail.com",
    age: 19,
    phonenumber: 12789212321,
    gender: "M",
    city: "Peshawar",
  },
  {
    id: 4,
    name: "Ammar",
    email: "ammar@gmail.com",
    age: 18,
    phonenumber: 12312475232,
    gender: "M",
    city: "Shikarpur",
  },
  {
    id: 5,
    name: "Ahsan",
    email: "ahsan@gmail.com",
    age: 18,
    phonenumber: 12312475232,
    gender: "M",
    city: "Karachi",
  },
  {
    id: 6,
    name: "Afzal",
    email: "afal@gmail.com",
    age: 18,
    phonenumber: 12312475232,
    gender: "M",
    city: "Hyderabad",
  },
];

function App() {
  const [data, setData] = useState(empList);
  const columns = [
    {
      title: "ID",
      field: "id",
      emptyValue: () => <em>ID Not Defined</em>,
      type: "numeric",
      filtering: false,
    },
    {
      title: "Name",
      field: "name",
      emptyValue: () => <em>Name Not Defined</em>,
      filterPlaceholder: "Filter By Name",
    },
    {
      title: "Email",
      field: "email",
      emptyValue: () => <em>Email Not Defined</em>,
      searchale: "false",
      filtering: false,
    },
    {
      title: "Phone Number",
      field: "phonenumber",
      emptyValue: () => <em>Phone number Not Defined</em>,
      type: "numeric",
      searchale: "false",
      filtering: false,
    },
    {
      title: "Age",
      field: "age",
      emptyValue: () => <em>Age Not Defined</em>,
      defaultSort: "asc",
      type: "numeric",
      searchale: "false",
      filtering: false,
    },
    {
      title: "Gender",
      field: "gender",
      emptyValue: () => <em>Gender Not Defined</em>,
      lookup: { M: "Male", F: "Female" },
      searchale: "false",
      filtering: false,
    },
    {
      title: "City",
      field: "city",
      emptyValue: () => <em>City Not Defined</em>,
      searchale: "false",
      filterPlaceholder: "Filter By City",
    },
  ];

  return (
    <div className="App">
      <Header />
      <MterialTable columns={columns} data={data} setData={setData} />
    </div>
  );
}

export default App;
