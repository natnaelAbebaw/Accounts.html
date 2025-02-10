import className from "classnames";
import FeatherIcon from "feather-icons-react";
import React, { useMemo } from "react";
import {
  Alert,
  Badge,
  Button,
  Card,
  CloseButton,
  Col,
  Container,
  Dropdown,
  Form,
  InputGroup,
  ListGroup,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import {
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table";
import { Avatar } from "./index";
import { IndeterminateCheckbox, Select } from "./vendor";
import StatesDropdown from "../UIs/Dropdown";
import Modals from "../UIs/Modal";
import DeleteModal from "../UIs/DeleteModal";

export default function CRMContactsTable({
  contacts,
  leadScoreOptions,
  pagesOptions,
  titleOptions,
  ...props
}) {
  const data = useMemo(() => contacts, []);

  const columns = useMemo(
    () => [
      {
        id: "selection",
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <div>
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          </div>
        ),
        Cell: ({ row }) => (
          <div>
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          </div>
        ),
      },
      {
        Header: "Name",
        accessor: "Name",
        Cell: (props) => (
          <>
            <a className="text-reset text-start" href="/profile-posts">
              {props.value}
            </a>
          </>
        ),
      },
      {
        Header: "Email",
        accessor: "Email",
        Cell: ({ value }) => (
          <a className="text-reset" href={`mailto:${value}`}>
            {value}
          </a>
        ),
      },
      {
        Header: "Phone",
        accessor: "Phone",
        Cell: ({ value }) => (
          <a className="text-reset" href={`tel:${value}`}>
            {value}
          </a>
        ),
      },
      {
        Header: "Dealership",
        accessor: "Dealership",
      },
      {
        Header: "Last Access",
        accessor: "Last Access",
      },
      {
        id: "action",
        disableSortBy: true,
        Cell: () => (
          <button type="button" class="btn btn-light">
            Log in
          </button>
        ),
      },

      {
        id: "actions",
        disableSortBy: true,
        Cell: () => (
          <Dropdown align="end">
            <Dropdown.Toggle
              as="span"
              className="dropdown-ellipses"
              role="button"
            >
              <FeatherIcon icon="more-vertical" size="17" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Modals>
                <Dropdown.Item href="#!">Overview</Dropdown.Item>
              </Modals>
              <DeleteModal>
                <Dropdown.Item href="#!">Delete</Dropdown.Item>
              </DeleteModal>
            </Dropdown.Menu>
          </Dropdown>
        ),
      },
    ],
    []
  );

  const {
    canNextPage,
    canPreviousPage,
    getTableBodyProps,
    gotoPage,
    headerGroups,
    nextPage,
    page,
    pageOptions,
    prepareRow,
    previousPage,
    setGlobalFilter,
    state: { pageIndex, selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect
  );

  return (
    <Container className="custom-width pt-7 mb-6" fluid>
      <Card>
        <Card.Header eader>
          <Row className="align-items-center">
            <Col>
              <InputGroup className="input-group-merge input-group-flush input-group-reverse">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  onChange={(e) =>
                    setGlobalFilter(e.target.value ? e.target.value : undefined)
                  }
                />
                <InputGroup.Text>
                  <FeatherIcon icon="search" size="1em" />
                </InputGroup.Text>
              </InputGroup>
            </Col>
            {/* <Col xs="auto" className="me-n3">
              <Select options={pagesOptions} layout="flush" size="sm" />
            </Col> */}
            <Col xs="auto" className="me-n3">
              <StatesDropdown />
            </Col>

            {/* <Col xs="auto">
              <Dropdown align="right" className="dropdown-card">
                <Dropdown.Toggle variant="white" size="sm">
                  <FeatherIcon className="me-1" icon="sliders" size="1em" /> Filter
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-card">
                  <Card.Header>
                    <h4 className="card-header-title">Filters</h4>
                  </Card.Header>
                  <Card.Body>
                    <ListGroup className="list-group-flush mt-n4 mb-4">
                      <ListGroup.Item>
                        <Row>
                          <Col>
                            <small>Title</small>
                          </Col>
                          <Col xs="auto">
                            <Select options={titleOptions} size="sm" />
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>
                            <small>Lead score</small>
                          </Col>
                          <Col xs="auto">
                            <Select options={leadScoreOptions} size="sm" />
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    </ListGroup>
                    <Button className="w-100">Apply filter</Button>
                  </Card.Body>
                </Dropdown.Menu>
              </Dropdown>
            </Col> */}
          </Row>
        </Card.Header>
        <Table size="sm" className="card-table table-nowrap" hover responsive>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps({ role: null })}>
                {headerGroup.headers.map((column) => (
                  <th className="text-start">{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="fs-base" {...getTableBodyProps({ role: null })}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr className="text-start" {...row.getRowProps({ role: null })}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps({
                          className: cell.column.className,
                          role: null,
                        })}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Card.Footer className="d-flex justify-content-between">
          <Pagination className="card-pagination pagination-tabs">
            <Pagination.Item
              className="ps-0 pe-4 border-end"
              disabled={!canPreviousPage}
              onClick={() => previousPage()}
            >
              <FeatherIcon icon="arrow-left" size="1em" className="me-1" /> Prev
            </Pagination.Item>
          </Pagination>
          <Pagination className="card-pagination pagination-tabs">
            {pageOptions.map((option, index) => (
              <Pagination.Item
                key={index}
                active={option === pageIndex}
                onClick={() => gotoPage(option)}
              >
                {option + 1}
              </Pagination.Item>
            ))}
          </Pagination>
          <Pagination className="card-pagination pagination-tabs">
            <Pagination.Item
              className="ps-4 pe-0 border-start"
              disabled={!canNextPage}
              onClick={() => nextPage()}
            >
              Next{" "}
              <FeatherIcon icon="arrow-right" size="1em" className="ms-1" />
            </Pagination.Item>
          </Pagination>
        </Card.Footer>
      </Card>
      {Object.keys(selectedRowIds).length > 0 && (
        <Alert variant="dark" className="list-alert alert-dismissible border">
          <Row className="align-items-center">
            <Col>
              <Form.Check
                type="checkbox"
                label={`${Object.keys(selectedRowIds).length} deal(s)`}
                checked
                disabled
              />
            </Col>
            <Col xs="auto" className="me-n3">
              <Button
                variant={null}
                size="sm"
                className="bg-white text-white bg-opacity-20 bg-opacity-15-hover"
              >
                Edit
              </Button>
              <Button
                variant={null}
                size="sm"
                className="bg-white text-white bg-opacity-20 bg-opacity-15-hover ms-1"
              >
                Delete
              </Button>
            </Col>
          </Row>
          <CloseButton />
        </Alert>
      )}
    </Container>
  );
}
