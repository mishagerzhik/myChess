document.onkeydown = function(e){
    if (e.keyCode == 32 || e.keyCode == 13) e.preventDefault();
};
let dragAndDrop = () => {
    let figures = document.querySelectorAll('.figures'),
        whiteFigures = document.querySelectorAll('.figures_white'),
        blackFigures = document.querySelectorAll('.figures_black'),
        cells = document.querySelectorAll('.deck__box'),
        figure,
        mode = document.querySelector('.mode'),
        deck = document.querySelector('.bg'),
        leftTable = document.querySelector('#left'),
        rightTable = document.querySelector('#right'),
        rotateDeck = document.querySelector('.rotate'),
        modal = document.querySelector('.won-modal'),
        whiteKing = document.querySelector('#whiteKing'),
        blackKing = document.querySelector('#blackKing'),
        disclaimer = document.querySelector('.modal-disclaimer'),
        disclaimerClose = document.querySelector('.modal_cancel'),
        disclaimerOk = document.querySelector('.modal_ok'),
        smile = document.querySelector('.sad-smile');

    function showDicsclaimer() {
        setTimeout(() => {
            disclaimer.style.display = 'block';
        }, 1000);
        disclaimerOk.addEventListener('click', () => {
            disclaimer.style.display = 'none';
        });
        disclaimerClose.addEventListener('click', () => {
            smile.style.display = 'block';
        });
    };
    showDicsclaimer();


    setTimeout(()=> {
        whiteKing.classList.add('whiteKing');
    },0);
    setTimeout(()=> {
        blackKing.classList.add('blackKing');
    },0);
    cells.forEach(item => {
        item.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        item.addEventListener('dragenter', function(e) {
            e.preventDefault();
            this.classList.add('hovered')
        });
        item.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.classList.remove('hovered')
        });
        item.addEventListener('drop', function(e) {
            e.preventDefault();
            this.append(figure);
            if (deck.classList.contains('rotated_on')) {
                figure.classList.add('rotated_on')
            }
            this.classList.remove('hovered');
            if (this.childNodes.length > 1 && this.firstChild.classList.contains('figures_black')) {
                this.firstChild.classList.remove('rotated_on');
                rightTable.appendChild(this.firstChild);
            } 

            if (this.childNodes.length > 1 && this.firstChild.classList.contains('figures_white')) {
                this.firstChild.classList.remove('rotated_on');
                leftTable.appendChild(this.firstChild)
            } 

            // if (this.firstChild.classList.contains('whiteKing') && this.childNodes.length > 1) {
            //     modal.style.display = 'block'
            //     setTimeout(() => {
            //         window.location.reload()
            //     }, 3000)
            // }

            // if (this.firstChild.classList.contains('blackKing') && this.childNodes.length > 1) {
            //     modal.style.display = 'block'
            //     setTimeout(() => {
            //         window.location.reload()
            //     }, 3000)
            // }
            
            // if (this.firstChild.classList.contains('whiteKing')) {
            //     modal.style.display = 'block'
            //     setTimeout(() => {
            //         window.location.reload()
            //     }, 3000)
            // } else if (this.firstChild.classList.contains('blackKing')) {
            //     modal.style.display = 'block'
            //     setTimeout(() => {
            //         window.location.reload()
            //     }, 3000)
            // }
            // this.replaceChild(figure, this.firstChild);
            
        });
    });
    
    figures.forEach(item => {
        item.addEventListener('dragstart', function() {
            setTimeout(() => {
                this.classList.add('hide')
            }, 0)
            
            return figure = item;
        });
        item.addEventListener('dragend', function() {
            this.classList.remove('hide')
        });
    });   
    
    function simulateMode() {
        // setTimeout(()=> {
        //     whiteKing.classList.add('whiteKing');
        // },10000);
        // setTimeout(()=> {
        //     blackKing.classList.add('blackKing');
        // },10000);
        
        whiteFigures.forEach(item => {
            leftTable.appendChild(item)
        });
        blackFigures.forEach(item => {
            rightTable.appendChild(item)
        });
        figures.forEach(item => {
            item.classList.remove('rotated_on')
        });
        rotateDeck.style.backgroundColor = '#FA5757	';
        rotateDeck.style.zIndex = '-1';
        // document.body.removeEventListener('keyup', (e) => {
        //     if (e.code == 'Space') {
        //         !rotate()
        //     }
        // });
        cells[4].appendChild(blackKing);
        cells[60].appendChild(whiteKing);
        deck.classList.remove('rotated_on');
    };
    mode.addEventListener('click', () => {
        simulateMode()
    });
    function rotate() {
        deck.classList.toggle('rotated_on');
        
        cells.forEach(item => {
            // let noEmptyCells = [];
            if (item.firstChild !=null) {
                // noEmptyCells.push(item.firstChild)
                // console.log(noEmptyCells)
                item.firstChild.classList.toggle('rotated_on')
            };
        });
        // if (deck.classList.contains('rotated_on')) {
        //     cells.forEach(item => {
        //         if (item.firstChild !=null) {
        //             item.firstChild.classList.add('rotated_on')
        //         }
        //     });
        // }
        // figures.forEach(item => {
        //     item.classList.toggle('rotated_on')
        //    });
    };

    
    setInterval(() => {
        if (!deck.contains(whiteKing)) {
            modal.style.display = 'block'
            setTimeout(() => {
                modal.style.display = 'none'
            }, 3000);
                // setTimeout(() => {
                //     window.location.reload()
                // }, 3000)
            let cellsArr = Array.from(cells);
            for(let i = 0; i < 16; i++) {
                cellsArr[i].appendChild(figures[i])
            };
            for(let i = 48; i < 64; i++) {
                cellsArr[i].appendChild(figures[i-32])
            };
            rotateDeck.style.backgroundColor = 'rgb(125, 220, 236)';
            rotateDeck.style.zIndex = '2';
        }
    }, 1000);
    setInterval(() => {
        if (!deck.contains(blackKing)) {
            modal.style.display = 'block'
            setTimeout(() => {
                modal.style.display = 'none'
            }, 3000);
                // setTimeout(() => {
                //     window.location.reload()
                // }, 3000)
            let cellsArr = Array.from(cells);
            for(let i = 0; i < 16; i++) {
                cellsArr[i].appendChild(figures[i])
            };
            for(let i = 48; i < 64; i++) {
                cellsArr[i].appendChild(figures[i-32])
            };
            rotateDeck.style.backgroundColor = 'rgb(125, 220, 236)';
            rotateDeck.style.zIndex = '2';
        }
    }, 1000);
    

    
    rotateDeck.addEventListener('click', () => {
        rotate()
    });
    // document.body.addEventListener('keyup', (e) => {
    //     if (e.code == 'Space') {
    //         rotate()
    //     }
    // });
    document.body.addEventListener('keyup', (e) => {
        
        if (e.code == 'Enter') {
            rotateDeck.style.backgroundColor = 'rgb(125, 220, 236)';
            rotateDeck.style.zIndex = '2';
            // document.body.addEventListener('keyup', (e) => {
            //     if (e.code == 'Space') {
            //         !rotate()
            //     }
            // });
            let cellsArr = Array.from(cells);
            for(let i = 0; i < 16; i++) {
                cellsArr[i].appendChild(figures[i])
            };
            for(let i = 48; i < 64; i++) {
                cellsArr[i].appendChild(figures[i-32])
            };
        }
    });

    
    
};

dragAndDrop();



