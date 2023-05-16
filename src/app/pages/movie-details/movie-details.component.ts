import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceComponent } from 'src/app/service/movie-api-service/movie-api-service.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  searchPage: boolean = false;

  constructor(private service: MovieApiServiceComponent, private router: ActivatedRoute) { }

  getMovieDetailResult: any;
  getMovieVideoResult: any;
  getMovieCastResult: any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }

  
  closeSearchPage(){
    this.searchPage = true;
    // return window.close();
  }
  
  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      this.getMovieDetailResult = result;
    })
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      result.results.forEach((element:any) => {
        if(element.type === "Trailer"){
          this.getMovieVideoResult = element.key;
          // console.log(this.getMovieVideoResult);
        }
      });
      console.log(this.getMovieVideoResult);
      // // this.getMovieVideoResult = result;
      // console.log(this.getMovieVideoResult);
    });
  }

  getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      this.getMovieCastResult = result.cast;
    });
  }
}
