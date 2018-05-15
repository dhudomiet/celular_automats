export default class Rule {

    constructor(length, stateZero) {
        this.rowLength = length;
        this.rowNumber = length / 2;
        this.stateZero = stateZero;
    }

    calculateState(i) {
        const values = this.leftNeighborState(i) + '' + this.row[i] + '' + this.rightNeighborState(i);
        if (this.stateZero.includes(values)) {
            return 0;
        } else {
            return 1;
        }
    }

    leftNeighborState(i) {
        if (i - 1 < 0) {
            return this.row[this.rowLength - 1];
        } else {
            return this.row[i - 1];
        }
    }

    rightNeighborState(i) {
        if (i + 1 > this.rowLength - 1) {
            return this.row[0];
        } else {
            return this.row[i + 1];
        }
    }

    calculateGrid() {
        for (let j = 1; j < this.rowNumber; j++) {
            let row = this.row.slice();
            for (let i = 0; i < this.rowLength; i++) {
                row[i] = this.calculateState(i);
            }
            this.grid.push(row);
            this.row = row;
        }
        return this.grid.slice();
    }

    initialize() {
        this.grid = [];
        this.row = new Array(this.rowLength).fill(0);
        this.row[this.rowLength / 2] = 1;
        this.grid.push(this.row.slice());
    }
}