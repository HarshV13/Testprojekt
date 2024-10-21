
// notizen anzeigen lassen
// ich brauche notizen 

let notes = [];

let trashNotes = [];

// eingabe anzeigen lassen
function renderNotes() {
    let contentRef = document.getElementById("content")


    // sorgt dafür dass es beim neu ausführen erstmal gelöscht wird
    contentRef.innerHTML = "";
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
        
    }
}

// fügt dem element des arrays ein plus zeichen am anfang 
function getNoteTemplate(indexNote){
                                // welche notiz muss gelöscht werden 
                                // wann muss die notiz gelöscht werden 
                                // onlick beim x button 
    return `<p>+ ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">X</button></p>`;
}

// ich muss definieren wo sie anzuzeigen ist 
// -> wann werden sie angezeigt?



// notizen hinzufügen 

function addNote(){
    // eingabe auslesen 
    let noteInputRef =  document.getElementById("note_input");
    let noteInput = noteInputRef.value;
    // eingabe speichern und den notizien hinzufügen

    notes.push(noteInput);
    renderNotes();

    noteInputRef.value = "";
}
// eingabe vom User --> im input in html 



function deleteNote(indexNote){
    // notizen löschen 
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote);
    // anzeige updaten 
    renderNotes();
    renderTrashNotes();
}



// notizen archivieren 
function renderTrashNotes(){
    let trashContentRef = document.getElementById("trash_content")

    trashContentRef.innerHTML = "";
    for (let indexNote = 0; indexNote < trashNotes.length; indexNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexNote);
        
    }

}

function getTrashNoteTemplate(indexNote){
    return `<p>+ ${trashNotes[indexNote]}<button onclick="deleteNote(${indexNote})">X</button></p>`;
}


// notizen anzeigen lassen

