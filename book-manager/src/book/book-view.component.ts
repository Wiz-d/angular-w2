import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';


@Component({
    selector   : 'book-book-view',
    standalone : true,
    templateUrl: './book-view.component.html',
    styleUrl   : 'book-view.component.css' ,
    imports    : [FormsModule,CommonModule]
})


export class BookComponent {

    public index              = 0;
    public rating             = 0;
    public modelTitle         = '';
    public modelDescription   = '';
    public modelAuthor        = '';
    public isUserDone:boolean = false;
    

    public BookCollection = [
        {
            title:'How to farm without dying',
            description: 'A compilation of different strategies used by pro players to not die',
            author:'Dendi',
            ratingList: [] as number[],
            averageRating: 0
        },
        {
            title:'Как да забогатеем бързо',
            description: 'Стратегии за забогатяване бързо чрез използване на власт',
            author:'Бойко Борисов',
            ratingList: [] as number[],
            averageRating: 0
        },
        {
            title:'This Bright Future: A Memoir',
            description: 'This Bright Future is a raw and unfiltered journey into the life and mind of Bobby Hall, who emerged from the wreckage of a horrifically abusive childhood to become an era-defining artist of our tumultuous age.',
            author:'Robert Bryson Hall',
            ratingList: [] as number[],
            averageRating: 0
        },
        {
            title:'Supermarket',
            description: 'A darkly funny psychological thriller, Supermarket is a gripping exploration into madness and creativity.',
            author:'Robert Bryson Hall',
            ratingList: [] as number[],
            averageRating: 0
        },
        {
            title:'Ultra 85',
            description: 'In the year 2115, when the Earth is no longer inhabitable, the remainder of humanity lives in Babel, a giant space station. Two pilots, Quentin and Kai, must find the planet Paradise',
            author:'Robert Bryson Hall',
            ratingList: [] as number[],
            averageRating: 0
        }

    ];

    public buttonOne(){
        this.UpdateRating(1)
        this.SaveBookDetails();
        this.CalculateAverageRating();
        this.index++;
        this.CheckForEndScreen()
    }
    public buttonTwo(){
        this.UpdateRating(2)
        this.SaveBookDetails();
        this.CalculateAverageRating();
        this.index++;
        this.CheckForEndScreen()
    }
    public buttonThree(){
        this.UpdateRating(3)
        this.SaveBookDetails();
        this.CalculateAverageRating();
        this.index++;
        this.CheckForEndScreen()
    }
    public buttonFour(){
        this.UpdateRating(4)
        this.SaveBookDetails();
        this.CalculateAverageRating();
        this.index++;
        this.CheckForEndScreen()
    }
    public buttonFive(){
        this.UpdateRating(5)
        this.SaveBookDetails();
        this.CalculateAverageRating();
        this.index++;
        this.CheckForEndScreen()
    }

    public ReviewAgain(){
        this.index = 0;
        this.isUserDone = false;
    }

    public CheckForEndScreen(){
        if(this.index >= this.BookCollection.length)
        {
            this.isUserDone=true;
        }
    }

    private SaveBookDetails(){
        if(this.modelTitle != '')
        this.BookCollection[this.index].title       = this.modelTitle;
        if(this.modelDescription != '')
        this.BookCollection[this.index].description = this.modelDescription;
        if(this.modelAuthor != '')
        this.BookCollection[this.index].author      = this.modelAuthor;
        console.log(this.BookCollection[this.index].title)
        this.ClearTempData();
    }

    private ClearTempData(){
        this.modelTitle       ='';
        this.modelDescription ='';
        this.modelAuthor      ='';
    }

    private UpdateRating(selectedRating:number){
        this.BookCollection[this.index].ratingList.push(selectedRating);
    }

    private CalculateAverageRating(){
        let sum = 0;

        for(let i = 0; i < this.BookCollection[this.index].ratingList.length;i++){
            sum = sum + this.BookCollection[this.index].ratingList[i]
        };

        let avg = sum/this.BookCollection[this.index].ratingList.length;
        this.BookCollection[this.index].averageRating = avg;
    }
    

}