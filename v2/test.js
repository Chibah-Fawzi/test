function USTHB(note_general) {
    if (note_general >= 9.51) {
        console.log("bienvenue l'USTHB");
        if (9.51 <= note_general && note_general < 11) {
            console.log('Géologie');
        } else if (11 <= note_general && note_general < 15) {
            console.log('Géologie - SM - ST');
        } else if (note_general >= 15) {
            console.log('Géologie - SM - ST - MI');
        }
    } else {
        console.log('Ya khoya l3am ljay inshallah');
    }
}

USTHB(19)