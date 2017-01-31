class TicTacToe {
    constructor() {

       var myMatrix = function Matrix (row, col){
         var  arr = [];
            for (var i = 0; i < col; i++){
                arr[i] = [];
            for (var j = 0; j < row; j++){
                arr[i][j] = -5;
            }
        }
            return arr;
        };
        this.currentPlayer = 1;
        this.TikTakFields = myMatrix(3,3);
        this.freeCells = 9;
        this.playerSymbol = ['o', 'x'];
        this.indexWinner = null;

    }


    getCurrentPlayerSymbol() {
        return this.playerSymbol[this.currentPlayer];
    }

    nextTurn(rowIndex, columnIndex) {
        var sum = 0;
        var _root = this;

        if (this.TikTakFields[rowIndex][columnIndex] == -5){
            this.TikTakFields[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = (this.currentPlayer+1) % 2;
            this.freeCells--;
            this.indexWinner = isWinner();
        };

    function isWinner() {

        function CheckSum(sum){
            if ((sum == 0) || (sum == 3)) {
                return true;
            } else {
                return false;
            }

        };

        function Winner(sum){
                _root.indexWinner = _root.playerSymbol[sum/3];
                return _root.indexWinner;
        };

        function getSum(i,j){
                sum += _root.TikTakFields[i][j];
                return sum;
        };

        for (var i = 0; i < 3; i++){
            for (var j = 0; j < 3; j++){
                    sum = getSum(i,j);
                }
            if (CheckSum(sum)) {
                return Winner(sum)
            } else {
                sum = 0;
            }
        };


        for (var j = 0; j < 3; j++){
            for (var i = 0; i < 3; i++){
                sum = getSum(i,j);
            }
        if (CheckSum(sum)) {
                return Winner(sum);
            } else {
                sum = 0;
            }
        };


        for (var i = 0; i < 3; i++){
                   sum = getSum(i,i);
               };

        if (CheckSum(sum)) {
                return Winner(sum);
            } else {
                sum = 0;
            }

        for (var i = 2; i >= 0; i--){
                 sum = getSum(i,2-i);
               };
               
          if (CheckSum(sum)) {
                return Winner(sum);
            } else {
                sum = 0;
            }

    return _root.indexWinner;

    }




    }

    isFinished() {
        if ((this.freeCells == 0) || (this.indexWinner)) {
            return true;
        }
        else {
            return false;
        }

    }

    getWinner() { 
      return this.indexWinner;

    }

    
    noMoreTurns() {
        if (this.freeCells == 0){
            return true;
        } else {
            return false;
        }

    }

    isDraw() {
     if ((this.freeCells == 0) && (!this.indexWinner)) {
            return true;
        } else {
            return false;
        }

    }

    getFieldValue(rowIndex, colIndex) {
        var _root = this;
        var symbol = _root.TikTakFields[rowIndex][colIndex];
        if (symbol == -5) {
            this.playerSymbol[symbol] = null;
        }
            return this.playerSymbol[symbol];
        
    }
}
module.exports = TicTacToe;
