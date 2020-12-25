    var size = 0;
    function renderChess(){
        $('#size_error').html('')
        $('.sizetr').removeClass('error')
        size = parseInt($('#size').val())
        if (isNaN(size)) {
            $('.sizetr').addClass('error')
            $('#size_error').html('Invalid Size')
            return false
        }

        var html = "";
        var tds = "";
        for(j=1;j<=size;j++) {
                tds += `<td id="row_${j}"></td>`
            }
        for(i=1;i<=size;i++) { 
            html += `<tr class="${i%2 !=0 ? 'even': 'odd'}">${tds.replaceAll('row', i)}</tr>`
        }

        $('#chess').html(html)
    }
    
    function setCoordinates(){
        renderChess()
        $('#coord_error').html('')
        $('.coordtr').removeClass('error')
    	const coords = $('#knight_coord').val()
    	let [row = false, col = false] = coords.split(',')
        row = parseInt(row), col = parseInt(col)

        if (isNaN(row) || isNaN(col) || row > size || col > size) {
            $('.coordtr').addClass('error')
            $('#coord_error').html('Invalid Coordinates')
            return false
        }

    	$(`#${row}_${col}`).css({background: 'brown'})
        getPossibleMoves(row, col)
    }

    function getPossibleMoves(x, y) {
        let knightMoves = [
            {x:2, y:-1},{x:2, y:1},{x:1, y:-2},{x:1, y:2},
            {x:-2, y:-1},{x:-2, y:1},{x:-1, y:-2},{x:-1, y:2}
        ]
        for(let m of knightMoves) {
            let row = x + m.x
            let col = y+m.y

            if (row > size || col > size || row < 1 || col < 1) continue;
            $(`#${row}_${col}`).css({background: 'green'})
        }
    }