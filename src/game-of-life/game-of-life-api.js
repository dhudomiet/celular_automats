export default class GameOfLifeApi {
    constructor(length) {
        this.length = length;
        this.grid = Array(length);
        this.initialize();
        this.setCellState.bind(this);
    }

    initialize() {
        for (let i = 0; i < this.length; i++) {
            this.grid[i] = Array(this.length).fill(0);
        }
    }

    setCellState(i, j, state) {
        this.grid[i][j] = state;
    }

    calculate() {
        let grid = this.copyGrid();
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.length; j++) {
                grid[i][j] = this.calculateState(i, j);
            }
        }
        this.grid = grid;
        return this.copyGrid();
    }

    calculateState(i, j) {
        let neighbors = this.getAliveNeighbors(i, j);
        if (this.grid[i][j] === 0) {
            if (neighbors === 3)
                return 1;
        } else {
            if (neighbors === 2 || neighbors === 3)
                return 1;
            return 0;
        }
        return 0;
    }

    getAliveNeighbors(i, j) {
        let aliveNeighborsCount = 0;
        for ( let row = this.getValue(i-1); row <= this.getValue(i+1) ; row++) {
            for (let cell = this.getValue(j-1) ; cell <= this.getValue(j+1) ; cell++) {
                if (row === i && cell === j)
                    continue;
                if (this.grid[row][cell] === 1) {
                    aliveNeighborsCount++;
                }
            }
        }
        return aliveNeighborsCount;
    }

    getValue(value) {
        if (value < 0) {
            return 0;
        } else if (value >= this.length) {
            return this.length - 1;
        }
        return value;
    }

    copyGrid() {
        let grid = this.grid.slice();
        for (let i = 0 ; i < this.length ; i++) {
            grid[i] = this.grid[i].slice();
        }
        return grid;
    }
}