import React from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import GlobalFilter from "./utils/GlobalFilter/GlobalFilter";
import * as S from "./CurrentEmployeesTable.styled";

export default function CurrentEmployeesTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const firstPageRows = rows.slice(0, 10);

  return (
    <S.Section>
      <GlobalFilter
        filterValue={state.globalFilter}
        setFilter={setGlobalFilter}
      />
      <S.Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </S.Table>
      <br />
      <S.ResultsIndicator>
        Showing the first 10 results of {rows.length} rows
      </S.ResultsIndicator>
    </S.Section>
  );
}

//Documentation react-table -> https://react-table.tanstack.com/docs/overview
