import { ITranslate } from "./ITranslate";

export interface IWord {
    id: string;
    phrase: string;
    translates: ITranslate[];
  }

  export interface IWordFormValues extends Partial<IWord> {
  }
  
  // export class ActivityFormValues implements IWordFormValues {
  //   id?: string = undefined;
  //   phrase: string = '';
  //   category: string = '';
  //   description: string = '';
  //   date?: Date = undefined;
  //   time?: Date = undefined;
  //   city: string = '';
  //   venue: string = '';
  
  //   constructor(init?: IWordFormValues) {
  //     if (init && init.date) {
  //       init.time = init.date;
  //     }
  //     Object.assign(this, init);
  //   }
  // }