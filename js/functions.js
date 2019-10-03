function renderMonths( data ) {
let HTML =  '';

for ( let i=0; i<12; i++ ) {
    HTML += '<div class="table-row">\
    <div class="cell">1</div>\
    <div class="cell">'+ data[i][0] +'</div>\
    <div class="cell">150.00 Eur</div>\
    <div class="cell">-</div>\
    <div class="cell">150.00 Eur</div>\
</div>';
}
return document.getElementById('months').innerHTML = HTML;
}