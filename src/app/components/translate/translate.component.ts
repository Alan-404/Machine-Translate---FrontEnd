import { Component, OnInit } from '@angular/core';
import { TranslateInput } from 'src/app/interfaces/translate';
import { TranslateService } from 'src/app/services/translate.service';
@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {

  constructor(
    private translateService: TranslateService
  ) { }

  inputData: TranslateInput = {input: ''}
  result: String = ''
  loading: Boolean = false

  ngOnInit(): void {
  }

  getData(event: Event){
    this.inputData.input = (event.target as HTMLInputElement).value
    console.log(this.inputData)
  }


  translate(){
    this.result = ""
    this.loading = true
    if (this.inputData.input == ""){
      this.loading = false
      return
    }
    this.translateService.translate(this.inputData).subscribe((response) => {
      this.loading = false
      this.result = response.result
    })
  }

}
