import FeatherIcon from 'feather-icons-react';

import React, { useMemo } from 'react';
import { Col, Form, InputGroup, ListGroup, Offcanvas, Row } from 'react-bootstrap';
import { useGlobalFilter, usePagination, useTable } from 'react-table';
import { Avatar } from '../components';
import { search } from '../data';
import { getStatusColor } from '../helpers';

export default function ModalSearch({ visible, onDismiss, ...props }) {
  const data = useMemo(() => search, []);

  const columns = useMemo(
    () => [
      {
        accessor: 'date',
      },
      {
        accessor: 'imgSrc',
      },
      {
        accessor: 'status',
      },
      {
        accessor: 'title',
      },
      {
        accessor: 'type',
      },
    ],
    []
  );

  const { page, prepareRow, setGlobalFilter } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  return (
    <Offcanvas show={visible} onHide={onDismiss} {...props}>
      <Offcanvas.Body>
        <form className="mb-3">
          <InputGroup className="input-group-merge input-group-rounded input-group-reverse">
            <Form.Control type="search" placeholder="Search" onChange={(e) => setGlobalFilter(e.target.value ? e.target.value : undefined)} />
            <InputGroup.Text>
              <FeatherIcon icon="search" size="1em" />
            </InputGroup.Text>
          </InputGroup>
        </form>
        <ListGroup className="list-group-flush list-groupfocus">
          {page.map((row, i) => {
            prepareRow(row);

            const [date, imgSrc, status, title, type] = row.cells.map((cell) => cell.value);
            return (
             <div></div>
            );
          })}
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
