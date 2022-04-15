import { v4 as uuidv4 } from 'uuid'

export function generatedIdUser(){
    let localId = window.sessionStorage.getItem('Id');

    if((!localId || !window.name) ) {
        localId = uuidv4()
        console.log(localId);
        
        window.sessionStorage.setItem('Id', localId);
    }

    window.name = localId;
    return localId;
}

export function getIdUser(){
    let localId = window.sessionStorage.getItem('Id');
    return localId;
}