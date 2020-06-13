import { IWord } from './../models/IWord';
import { RootStore } from "./rootStore";
import { observable, action, runInAction, computed } from "mobx";
import agent from '../api/agent';


export default class WordStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @observable test = "test";
    // @observable words : IWord[] = [];
    @observable wordsRegistry = new Map();
    @observable selectedWord:IWord|null = null;
    @observable editMode:boolean = false;

    // @observable wordsRegistry = new Map();

    @computed get words() {
        // return this.words(
          return Array.from(this.wordsRegistry.values())
        // );
      }

    @action setEditMode = (mode:boolean) => {
        
        this.editMode = mode;

        if(!mode){
            this.selectedWord = null;
        }
    }


    @action loadWords = async() => {

        try {
            this.test = "request send"

            const words = await agent.Words.list();
            runInAction(()=>{
                words.forEach(word => {
                    // this.words.push(word);
                    this.wordsRegistry.set(word.id,word)
                });
            })
        } catch (error) {
            console.log(error);
        }
    }

    @action deleteWord = async(id:string) => {

        try {
            await agent.Words.delete(id);      
            runInAction(()=>{
                this.wordsRegistry.delete(id);
            })  
        } catch (error) {
            console.log(error);
        }
    }

    @action updateWord = async(word:IWord) => {
        console.log(word);

        try {
            await agent.Words.update(word);
            runInAction('editing word', () => {
              this.wordsRegistry.set(word.id, word);
              this.rootStore.modalStore.modal.open = false;
            //   this.activity = activity;
            //   this.submitting = false;
            });
            // history.push(`/activities/${activity.id}`);
          } catch (error) {
            runInAction('edit word error', () => {
            //   this.submitting = false;
            });
            // toast.error('Problem submitting data');
            console.log(error);
          }
    }

    @action createWord = async(word:IWord) => {
        console.log(word);

        try {
            await agent.Words.create(word);
            runInAction('creating word', () => {
                // console.log(a)
              this.wordsRegistry.set(word.id, word);
              this.rootStore.modalStore.modal.open = false;
            //   this.activity = activity;
            //   this.submitting = false;
            });
            // history.push(`/activities/${activity.id}`);
          } catch (error) {
            runInAction('creating word error', () => {
            //   this.submitting = false;
            });
            // toast.error('Problem submitting data');
            console.log(error);
          }
    }

    @action selectWord = async(id:string) => {
        this.selectedWord = this.wordsRegistry.get(id);
    }




}