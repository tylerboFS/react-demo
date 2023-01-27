import React, { useState } from "react";
import Cake from "./Cake"

class CakeList extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedFlavor: "No Cake Selected"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(flavor) {
        this.setState({ selectedFlavor: flavor });
    }

    render() {
        return (
            <>
                <h2>{this.props.owner} has selected: {this.state.selectedFlavor}</h2>
                <ul>
                    <Cake setSelectedFlavor={this.handleClick} flavor="German Chocolate" />
                    <Cake setSelectedFlavor={this.handleClick} flavor="Carrot" />
                    <Cake setSelectedFlavor={this.handleClick} flavor="Tiramisu" />
                    <Cake setSelectedFlavor={this.handleClick} flavor="Ice Cream" />
                </ul>
            </>
        );
    }
}

export default CakeList;