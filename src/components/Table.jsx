import { useMemo } from "react";

import { useSortBy, useTable } from "react-table";

import { Table } from "react-bootstrap";

export default function Tables() {
  const data = useMemo(
    () => [
      {
        id: 1,
        first: "Mark",
        last: "Otto",
        handle: "@mdo",
      },
      {
        id: 2,
        first: "Jacob",
        last: "Thornton",
        handle: "@fat",
      },
      {
        id: 3,
        first: "Larry",
        last: "the Bird",
        handle: "@twitter",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "First",
        accessor: "first",
      },
      {
        Header: "Last",
        accessor: "last",
      },
      {
        Header: "Handle",
        accessor: "handle",
      },
    ],
    []
  );

  const { getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data },
    useSortBy
  );

  return (
    <Table size="sm" className="table-nowrap" responsive>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
