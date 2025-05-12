// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


function getEmailDomain(domein) {
    emailadres1 = 'n.eeken@novi-education.nl'
    emailadres2 = 't.mellink@novi.nl';
    emailadres3 = 'a.wiersma@outlook.com';

//     return emailadres1.substring(8) + '\n' + emailadres2.substring(10) + '\n' + emailadres3.substring(10);
// }


    return emailadres1.split(8) + '\n' + emailadres2.substring(10) + '\n' + emailadres3.substring(10);
}

const domainnaam = getEmailDomain()
console.log(domainnaam);


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"


function typeOfEmail(dominaaam) {
    emailadres1.endsWith('@novi-education.nl')
    return 'Student';
    emailadres2.endsWith('@novi.nl')
    return 'Medewerker';
    emailadres3.endsWith('@outlook.com')
    return 'Extern';

}

//     if (emailadres1.endsWith('@novi-education.nl')
//         && emailadres2.endsWith('@novi.nl')
//         && emailadres3.endsWith('@outlook.com'))
//
//         return 'Student' + '\n' + 'Medewerker' + '\n' + 'Extern';
// }

console.log(typeOfEmail('@novi-education.nl'));
console.log(typeOfEmail('@novi.nl'));
console.log(typeOfEmail('@outlook.com'));


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity(emailadres) {
    return(
    emailadres.includes('@') &&
    !emailadres.includes(',')&&
    !emailadres.endsWith('.')
    );

}

console.log(checkEmailValidity('n.eeken@novi-education.nl'));
console.log(checkEmailValidity('tessmellink@novi.nl'));
console.log(checkEmailValidity('n.eekenanovi.nl'));
console.log(checkEmailValidity('n.eeken@novinl.'));
