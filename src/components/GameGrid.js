import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import OneHundredVh from './OneHundredVh';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  grid-template-rows: auto;
  height: calc(90vh - 170px);
  height: 100%;
  max-width: 600px;
  background-color: ${props => props.theme.white20};
  grid-gap: 10px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;

  > div {
    background-color: ${props => props.theme.white90};
    height: 100%;
    width: 100%;
    border-radius: 5px;

    &.on {
      background-color: ${props => props.theme.button};
      cursor: pointer;
      transition: all 0.15s ease-in-out;

      &:hover {
        background-color: ${props => props.theme.malibu};
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
      }
    }
  }
`;

class GameGrid extends Component {
  state = {
    grid: [
      { id: 1, on: false },
      { id: 2, on: false },
      { id: 3, on: false },
      { id: 4, on: false },
      { id: 5, on: false },
      { id: 6, on: false },
      { id: 7, on: false },
      { id: 8, on: false },
      { id: 9, on: false },
      { id: 10, on: false },
      { id: 11, on: false },
      { id: 12, on: false },
      { id: 13, on: false },
      { id: 14, on: false },
      { id: 15, on: false },
      { id: 16, on: false },
      { id: 17, on: false },
      { id: 18, on: false },
      { id: 19, on: false },
      { id: 20, on: false },
      { id: 21, on: false },
      { id: 22, on: false },
      { id: 23, on: false },
      { id: 24, on: false },
      { id: 25, on: false },
      { id: 26, on: false },
      { id: 27, on: false },
      { id: 28, on: false },
      { id: 29, on: false },
      { id: 30, on: false },
      { id: 31, on: false },
      { id: 32, on: false },
      { id: 33, on: false },
      { id: 34, on: false },
      { id: 35, on: false },
      { id: 36, on: false },
      { id: 37, on: false },
      { id: 38, on: false },
      { id: 39, on: false },
      { id: 40, on: false },
      { id: 41, on: false },
      { id: 42, on: false },
      { id: 43, on: false },
      { id: 44, on: false },
      { id: 45, on: false },
      { id: 46, on: false },
      { id: 47, on: false },
      { id: 48, on: false },
      { id: 49, on: false },
      { id: 50, on: false },
      { id: 51, on: false },
      { id: 52, on: false },
      { id: 53, on: false },
      { id: 54, on: false },
      { id: 55, on: false },
      { id: 56, on: false },
      { id: 57, on: false },
      { id: 58, on: false },
      { id: 59, on: false },
      { id: 60, on: false },
      { id: 61, on: false },
      { id: 62, on: false },
      { id: 63, on: false },
      { id: 64, on: false },
      { id: 65, on: false },
      { id: 66, on: false },
      { id: 67, on: false },
      { id: 68, on: false },
      { id: 69, on: false },
      { id: 70, on: false },
      { id: 71, on: false },
      { id: 72, on: false },
      { id: 73, on: false },
      { id: 74, on: false },
      { id: 75, on: false },
      { id: 76, on: false },
      { id: 77, on: false },
      { id: 78, on: false },
      { id: 79, on: false },
      { id: 80, on: false },
      { id: 81, on: false },
      { id: 82, on: false },
      { id: 83, on: false },
      { id: 84, on: false },
      { id: 85, on: false },
      { id: 86, on: false },
      { id: 87, on: false },
      { id: 88, on: false },
      { id: 89, on: false },
      { id: 90, on: false },
      { id: 91, on: false },
      { id: 92, on: false },
      { id: 93, on: false },
      { id: 94, on: false },
      { id: 95, on: false },
      { id: 96, on: false },
      { id: 97, on: false },
      { id: 98, on: false },
      { id: 99, on: false },
      { id: 100, on: false }
    ],
    numCells: 25,
    previousCell: null
  };

  clicked = cell => {
    if (cell.on) {
      this.props.addPoint();
      this.newCell();
    }
  };

  newCell = () => {
    const currentCell = this.state.grid.findIndex(cell => cell.on === true);

    this.setState(
      prevState => ({
        ...prevState,
        grid: prevState.grid.map(cell =>
          cell.on ? { ...cell, on: false } : cell
        ),
        previousCell: currentCell
      }),
      this.setNextCell
    );
  };

  setNextCell = () => {
    const random = this.randomNumber();
    const newGrid = this.state.grid.slice(0, this.state.numCells);
    newGrid[random] = { ...newGrid[random], on: true };

    this.setState({
      grid: newGrid
    });
  };

  randomNumber = () => {
    let newNumber = Math.floor(Math.random() * this.state.numCells) + 0;

    while (newNumber === this.state.previousCell) {
      newNumber = Math.floor(Math.random() * this.state.numCells) + 0;
    }

    return newNumber;
  };

  componentDidMount() {
    this.setNextCell();
  }

  render() {
    return (
      <>
        <OneHundredVh minus={200}>
          <Grid>
            {this.state.grid.slice(0, this.state.numCells).map(cell => (
              <div
                key={`GameGrid-cell-${cell.id}`}
                onClick={() => this.clicked(cell)}
                className={cell.on ? 'on' : null}
              />
            ))}
          </Grid>
        </OneHundredVh>
      </>
    );
  }
}

GameGrid.propTypes = {
  addPoint: PropTypes.func.isRequired
};

export default GameGrid;
