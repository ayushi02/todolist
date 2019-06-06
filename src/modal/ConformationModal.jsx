import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import {closeModal} from '../common/ModalAction.js';


class ConfirmationModal extends Component {
    /*onClose(){
      alert('close');
    }*/
    onConfirm(){
        this.props.onClose();
    }
    render() {
        const { id } = this.props.item;
        const { name } = this.props.item;
        const {show} = this.props;
        
        return (
          <Modal isOpen={show}>
            <ModalHeader>Delete Configuration</ModalHeader>
            <ModalBody>
              Are you sure you want to delete {name}?
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={()=>this.onConfirm()}>Delete</Button>
              <Button color="secondary" onClick={()=>this.props.onClose()}>Cancel</Button>
            </ModalFooter>
          </Modal>
        )
    }
  }
export class Modals extends Component {

    render() {
      const modals = <ConfirmationModal item={this.props.modals} show = {this.props.show} onClose = {() => this.props.closeModal()}/>
      console.log(this.props);
      return (
        <div>
            {modals}
        </div>
      );
    }

  }

export const showModal = Modals.prototype.showModal;
