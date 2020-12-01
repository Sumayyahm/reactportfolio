import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const styles = {
    fontFamily:'Cambria', 
    backgroundColor: 'whitesmoke'
}

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      
        <Menu style= {styles}>
          
          <h1 style={{margin: 10, fontFamily: 'Cambria', color: "dimgray"}}>Sumayyah Mariam</h1>

          <Link to="/">
            <Menu.Item
            style={{margin: 10, fontFamily:'Cambria', color: 'dimgray'}}
            name='About'
            active={activeItem === 'About'}
            onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/portfolio">
            <Menu.Item
             style={{margin: 10, fontFamily:'Cambria', color: 'dimgray'}}
             name='Portfolio'
             active={activeItem === 'Portfolio'}
             onClick={this.handleItemClick} 
            />
          </Link>
        </Menu>

    )
  }
}