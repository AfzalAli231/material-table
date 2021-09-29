import React from 'react';
import MaterialTable from "material-table";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

export default function MterialTable({columns, data, setData}) {
    return (
      <MaterialTable
        title="Students Data"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setData([...data, newRow]);
              setTimeout(resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...data];
              updatedData[oldRow.data.id] = newRow;
              setData(updatedData);
              setTimeout(resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...data];
              updatedData.splice(selectedRow.data.id, 1);
              setData(updatedData);
              setTimeout(resolve(), 1000);
            }),
        }}
        actions={[
          {
            icon: () => <DeleteOutlinedIcon />,
            tooltip: "Delete Selected",
            onClick: (e, selectedRows) => {
              console.log(selectedRows);
              new Promise((resolve, reject) => {
                const updatedData = [...data];
                updatedData.splice(selectedRows, selectedRows.length);
                setData(updatedData);
                setTimeout(resolve(), 1000);
              });
            },
          },
        ]}
        options={{
          filtering: true,
          pageSizeOptions: [4, 8, 12, 16, 20],
          addRowPositon: "first",
          selection: true,
          actionsColumnIndex: -1,
          pageSize: 4,
          paginationType: "stepped",
          exportButton: true,
          exportAllData: true,
          exportFileName: "Students Data",
          grouping: true,
          columnsButton: true,
          rowStyle: (data, index) =>
            index % 2 === 0
              ? { background: "green", color: "white" }
              : { background: "#3ce496" },
          headerStyle: { background: "cyan", fontStyle: "italic" },
        }}
      />
    );
}
