import React from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { GlobalFilter } from "../index";
import PropTypes from "prop-types";
import * as S from "./EmployeesTable.styled";

/**
 * Hook react-table
 * Documentation -> https://react-table.tanstack.com/docs/overview
 * @name CurrentEmployeesTable
 * @param {object|array} columns head of the table
 * @param {object|array} data list of employees
 * @returns {ReactElement}
 */
export default function CurrentEmployeesTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    pageCount,
    gotoPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <S.Section>
      <h2 className="sr-only">list of employees</h2>
      <S.SearchAndPageSize>
        <S.SelectPageSize
          name="pageSize"
          value={state.pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 25, 50, 100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </S.SelectPageSize>
        <GlobalFilter
          filterValue={state.globalFilter}
          setFilter={setGlobalFilter}
        />
      </S.SearchAndPageSize>
      <S.Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <S.Th
                  active={column.isSorted}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </S.Th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
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
      <S.TableFooter>
        <p>Total employees: {rows.length}</p>
        <S.Pagination>
          <S.GoToPage>
            Go to page:{" "}
            <input
              type="number"
              defaultValue={state.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "6.45rem" }}
            />
          </S.GoToPage>
          <S.BtnWrapper>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              ⏪
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              ◀️
            </button>
            <span>
              {state.pageIndex + 1} of {pageOptions.length}
            </span>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              ▶️
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              ⏩
            </button>
          </S.BtnWrapper>
        </S.Pagination>
      </S.TableFooter>
    </S.Section>
  );
}

CurrentEmployeesTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array,
};
