import React, { useState } from 'react';
import { Badge, Button, Card, Table } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';
import {  ModalMembers } from '../modals';


export default function Modals({ children,...props }) {
  const [modalMembersVisible, setModalMembersVisible] = useState(false);
  const [modalSearchVisible, setModalSearchVisible] = useState(false);

  return (
    <div id="modals" {...props}>
      <div onClick={() => setModalMembersVisible(true)}>{children}</div>
      <ModalMembers visible={modalMembersVisible} onDismiss={() => setModalMembersVisible(false)} />
    </div>
  );
}
