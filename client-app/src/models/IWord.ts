import { languages } from './../options/translateLanguages';
import { ITranslate,Translate } from "./ITranslate";
import { v4 as uuid } from 'uuid';


export interface IWord {
    id: string;
    phrase: string;
    translates: ITranslate[];
  }

  
  export class WordFormValues implements Partial<IWord> {
    phrase: string = '';
    translates: ITranslate[] = [];
  
    constructor(init?: IWord) { 

        if(!init){
          languages.map((lang)=>{
            let tr = new Translate();
            tr.id = uuid();
            tr.locale = lang.locale;
            tr.translation = lang.text
            this.translates.push(tr)
          })
        }else{
          Object.assign(this, init);
        }
    }
  }