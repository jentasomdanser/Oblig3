let altfylt = false;
let filmvalgt = false;
let biletterkjopt = false;
let fornavnfylt = false;
let etternavnfylt = false;
let telefonfylt = false;
let epostfylt = false;


let kjoptBiletter;
let innFilm;
let innAntall;
let innFornavn;
let innEtternavn;
let innTelefonnr;
let innepost;

function valederingavFelt() {
    innFilm = document.getElementById("film").value;
    innAntall = document.getElementById("antall").value;
    innFornavn = document.getElementById("forNavn").value;
    innEtternavn = document.getElementById("etterNavn").value;
    innTelefonnr = document.getElementById("telefonNr").value;
    innepost = document.getElementById("epost").value;

// lager en varslings melding at et eller flere av feltene er tomme
    if (innFilm === "") {
        document.getElementById("feilmeldingfilm").innerHTML = "<span style='color: red'>" + 'Ingen film valgt' + "</span>";
        innFilm = "";
        document.getElementById("film").value = "";
    } else {
        filmvalgt = true;
        document.getElementById("feilmeldingfilm").innerHTML = "";
    }

    if (isNaN(innAntall) || innAntall === '') {
        document.getElementById("feilmeldingantall").innerHTML = "<span style='color: red'>" + 'Velg antall biletter' + "</span>";
        innAntall = "";
        document.getElementById("antall").value = "";
    } else {
        innAntall = document.getElementById("antall").value;
        biletterkjopt = true;
        document.getElementById("feilmeldingantall").innerHTML = "";
    }

    if (innFornavn === '' || !isNaN(innFornavn)) {
        document.getElementById("feilmeldingfornavn").innerHTML = "<span style='color: red'>" + 'Skriv inn fornavn' + "</span>";
        innFornavn = "";
        document.getElementById("feilmeldingfornavn").value = "";
    } else {
        innFornavn = document.getElementById("forNavn").value;
        fornavnfylt = true;
        document.getElementById("feilmeldingfornavn").innerHTML = "";
    }

    if (innEtternavn === '' || !isNaN(innEtternavn)) {
        document.getElementById("feilmeldingetternavn").innerHTML = "<span style='color: red'>" + 'Skriv inn etternavn' + "</span>";
        innEtternavn = "";
        document.getElementById("feilmeldingetternavn").value = "";
    } else {
        innEtternavn = document.getElementById("etterNavn").value;
        etternavnfylt = true;
        document.getElementById("feilmeldingetternavn").innerHTML = "";
    }

    if (innTelefonnr === '' || !document.getElementById("telefonNr").value.match(/^[0-9]{4,13}$/)) {
        document.getElementById("feilmeldingtelefonnr").innerHTML = "<span style='color: red'>" + 'Skriv inn telefon nummer' + "</span>";
        innTelefonnr = "";
        document.getElementById("telefonNr").value = "";
    } else {
        innTelefonnr = document.getElementById("telefonNr").value;
        telefonfylt = true;
        document.getElementById("feilmeldingtelefonnr").innerHTML = "";
    }

    if (innepost === '' || !document.getElementById("epost").value.match(/^[A-Za-z._\-0-9]*[@][A-Za-z]*[.][a-z]{2,4}$/)) {
        document.getElementById("feilmeldingemail").innerHTML = "<span style='color: red'>" + 'Skriv inn email' + "</span>";
        innepost = "";
        document.getElementById("epost").value = "";

    } else {
        innepost = document.getElementById("epost").value;
        epostfylt = true;
        document.getElementById("feilmeldingemail").innerHTML = "";
    }
    if (filmvalgt && biletterkjopt && fornavnfylt && etternavnfylt && telefonfylt && epostfylt) {
        altfylt = true;
    }
}

function kjopBillett() {
    valederingavFelt();
    if (altfylt) {
        kjoptBiletter = {
            film: innFilm,
            antall: innAntall,
            forNavn: innFornavn,
            etterNavn: innEtternavn,
            telefonNr: innTelefonnr,
            epost: innepost
        }
        $.post("/lagre", kjoptBiletter, function () {
            getAll();
        });
        document.getElementById("film").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("forNavn").value = "";
        document.getElementById("etterNavn").value = "";
        document.getElementById("telefonNr").value = "";
        document.getElementById("epost").value = "";

        filmvalgt = false;
        biletterkjopt = false;
        fornavnfylt = false;
        etternavnfylt = false;
        telefonfylt = false;
        epostfylt = false;
        altfylt = false;
    }
}

function getAll() {
    $.get("/getAll", function (data) {
        printBillette(data);
    });
}

function printBillette(tickets) {
    let out = "<table><tr>" + "<th class='padding p-3'>Film</th> <th class='padding p-3'> Antall</th><th class='padding p-3'>Fornavn</th> <th class='padding p-3'>Etternavn</th>"
        + "<th class='padding p-3'>TelefonNr</th class='padding p-3'><th>Email</th>" +
        "</tr>"
    for (let i=0; i<tickets.length; i++){
        out += "<tr>";
        out += "<td class='padding p-3'>"+tickets[i].film+"</td><td class='padding p-3'>"+tickets[i].antall+"</td><td class='padding p-3'>"+tickets[i].forNavn+"</td>" +
            "<td class='padding p-3'>"+tickets[i].etterNavn+"</td><td class='padding p-3'>"+tickets[i].telefonNr+"</td><td class='padding p-3'>"+tickets[i].epost+"</td>";
        out += "</tr>";
    }
    document.getElementById("ordreListe").innerHTML = out;
}

altfylt = false;

function slettBilettene() {
    if ( document.getElementById("ordreListe").innerHTML !== "") {
        $.get("/slettAlt", function () {
            document.getElementById("ordreListe").innerHTML = "";

        });
    }
}