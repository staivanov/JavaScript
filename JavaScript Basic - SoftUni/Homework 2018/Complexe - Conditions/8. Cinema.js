
let typeTicket = "Premiere";
let rows = 10;
let cols = 12;

function cinemaRevenue(typeTickets, usedRows, usedCols) {

    let revenue = 0, usedSeats = usedRows * usedCols;
    let discountTicket = 5, normalTicket = 7.5, premiereTicket = 12;

    switch (typeTickets) {
        case "Discount":
            revenue = usedSeats * discountTicket;
            break;
        case "Normal":
            revenue = usedSeats * normalTicket;
            break;
        case "Premiere":
            revenue = usedSeats * premiereTicket;
            break;
    }

    return console.log(revenue.toFixed(2) + " leva");
}

cinemaRevenue(typeTicket, rows, cols);