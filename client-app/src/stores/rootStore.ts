import WordStore from "./wordStore";
import { createContext } from "react";
import { configure } from "mobx";
import ModalStore from "./modalStore";

//bunu yazmagin meqsedi odur ki mobx deyirki state i deyisen
//her funcsiya performans acisindan action in icinde yazilmalidir
//ama biz promise lerle isleyende then- funcsiyalari 
//basqa context yaradir ve biz actionin contexinden cixiriq
//buna gore enforceActins always edirikki @actionin cindeki then 
//funksialari runInAction funcsiyasi ile wrap olsun
//cun bu funcsiyanin icindeki her sey action funcsouasnin 
//contexine aid olur
configure({enforceActions: 'always'});


export class RootStore{
    wordStore:WordStore;
    modalStore:ModalStore;

    constructor() {
        this.wordStore = new WordStore(this);
        this.modalStore = new ModalStore(this);
    }



}

export const RootStoreContext = createContext(new RootStore());