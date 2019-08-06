import React, { Component } from 'react';
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../App.css'

import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';


class ShoppingList extends Component {
    componentDidMount(){
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item
        console.log(items)
        return (
            <Container>     
                    <ListGroup>
                        <TransitionGroup>
                            {items.map(({_id, name})=> (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                        >
                                        &times;
                                        </Button>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);