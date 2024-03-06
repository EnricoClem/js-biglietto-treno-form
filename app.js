// Utilizzare un form per ottenere i dati del cliente

// Creare il form
// - inputp per sapere i km
// - inputp per sapere l'età
// - inputp bottone che avvia lo script

// Al clik del bottone calcolare il prezzo biglietto
// - recuperare il pulsante dal dom
const buttonElement = document.querySelector('[type="submit"]'); //element | null
console.log(buttonElement)

// - recuperare dal dom il numero dei km e sconto
const inputKmElement = document.getElementById('km'); //element
const inputDiscountElement = document.getElementById('discount'); //element

// - recuperare dal dom l'ID relativo alla stampa del biglietto completo
const ticketElement = document.getElementById('ticket')

// - agganciare il click sul bottone ad una funzione per ascoltare l'evento
buttonElement.addEventListener('click', function () {
    console.log('Calcolo prezzo')

    // Richiesta del numero dei kilometri e salvare il valore in numero
    const inputKmValue = inputKmElement.value; //element
    const travelLength = parseFloat(inputKmValue); //number
    console.log('Km:', travelLength);

    // Richiesta dell'età e salvare il valore in numero
    const selectDiscountValue = inputDiscountElement.value; //element
    console.log('Sconto:', selectDiscountValue);

    // Calcolare il prezzo base del biglietto
    // Ogni km equivale a 0,21 euro => nKm * costo per km = prezzo base
    const basePrice = travelLength * 0.21; //number
    console.log('Prezzo base:', basePrice.toFixed(2))

    // Calcolo dello sconto
    let discount = 0 //number

    // Se l'età è inferiore ai 18 applicare uno sconto del 20%
    if (selectDiscountValue === 'under') {
        discount = basePrice * 0.2 //number

    // Se l'età è superiore ai 65 applicare uno sconto del 40%
    } else if (selectDiscountValue === 'over') {
        discount = basePrice * 0.4 //number
    }

    // Calcolare il prezzo finale: prezzo base - sconto
    const finalPrice = basePrice - discount //number

    // Riportare in console il prezzo finale con massimo 2 decimali
    console.log('Prezzo finale:', finalPrice.toFixed(2))

    // Stampa del biglietto
    ticketElement.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>Km</th>
                <th>Sconto</th>
                <th>Prezzo base</th>
                <th>Prezzo scontato</th>                        
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${ travelLength }</td>
                <td>${ discount.toFixed(2) }</td>
                <td>${ basePrice.toFixed(2) }</td>
                <td>${ finalPrice.toFixed(2) }</td>
            </tr>
        </tbody>
    </table>
    `
})