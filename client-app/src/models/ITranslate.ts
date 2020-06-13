export interface ITranslate{
    id?:string,
    locale:string
    translation :string
}

export class Translate implements ITranslate{
    id?: string | undefined;
    locale: string ='';
    translation: string = '';

}
