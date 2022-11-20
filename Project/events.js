"use strict";

const getMonthText = currentMonth => {
    if (currentMonth === 0) { return "January"; }
    else if (currentMonth === 1) { return "February"; }
    else if (currentMonth === 2) { return "March"; }
    else if (currentMonth === 3) { return "April"; }
    else if (currentMonth === 4) { return "May"; }
    else if (currentMonth === 5) { return "June"; }
    else if (currentMonth === 6) { return "July"; }
    else if (currentMonth === 7) { return "August"; }
    else if (currentMonth === 8) { return "September"; }
    else if (currentMonth === 9) { return "October"; }
    else if (currentMonth === 10) { return "November"; }
    else if (currentMonth === 11) { return "December"; }
};

const getLastDayofMonth = currentMonth => {
    const dt = new Date();
    dt.setMonth(currentMonth + 1);
    dt.setDate(0);
    return dt.getDate();
};

$(document).ready(() => {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    $("#month_year").text(`${getMonthText(month)} ${year}`);

    const lastDay = getLastDayofMonth(month);
    let rows = $("#calendar").html();

    for (let i = 0; i < lastDay; i++) {
        today.setDate(i + 1);

        const date = today.getDate();
        const day = today.getDay();

        if (date === 1 || day === 0) {
            rows += "<tr>";
        }

        let start = 0;
        if (date === 1) {
            while (start < day) {
                rows += "<td></td>";
                start++;
            }
        }

        rows += `<td>${date}</td>`;

        if (date === lastDay) {
            start = day;
            while (start < 6) {
                rows += "<td></td>";
                start++;
            }
        }

        if (date === lastDay || day === 6) {
            rows += "</tr>";
        }
    }

    $("#calendar").html(rows);
});