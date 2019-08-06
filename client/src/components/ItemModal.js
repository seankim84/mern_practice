import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Form, Label, Input } from 'reactstrap'

import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions'

class ItemModal extends Component {

    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = e => {
        this.setState({
            name : e.target.value  // input에서 입력한 값
        })
    }

    onSubmit = e => { 
        e.preventDefault();

        const newItem = {
            name: this.state.name
        }
        // 이전에 정의해둔 addItem으로 newItem을 담는다
        this.props.addItem(newItem)

        //Close the Modal
        this.toggle()
     }
    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}  
                >Add Item</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>
                        Shopping List
                    </ModalHeader>
                    <ModalBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="item">Item</Label>
                                    <Input 
                                        type="text"
                                        name="name"
                                        id="item"
                                        placeholder="Add shopping item"
                                        onChange={this.onChange} 
                                        />
                                </FormGroup>
                                <Button color="dark" style={{ marginTop: '2rem' }} block>Add Item</Button>
                            </Form>
                        </ModalBody>
                </Modal>
            </div>
        )
    }
}
    const mapStateToProps = state => ({
        item: state.item
    })

export default connect(mapStateToProps, {addItem})(ItemModal)
