import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import './App.css';

import Add from './Add';









  const ModalExample = ({ modal, toggle, text }) => {



  
    // const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);
    
  
    // const toggle = () => setModal(!modal);
    const changeUnmountOnClose = e => {
        let value = e.target.value;
        setUnmountOnClose(JSON.parse(value));
    }
    
  

    
  return (
    
            <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Input value={text} type="textarea" placeholder="Input Data" rows={5} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
  );
}

export default ModalExample;
