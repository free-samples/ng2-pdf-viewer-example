import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PDF Viewer Example';
  pdfSrc: any = '/assets/pdf-test.pdf';

  constructor(private http: HttpClient){}

  onFileSelected() {
	  let $img: any = document.querySelector('#file');

	  if (typeof (FileReader) !== 'undefined') {
	    let reader = new FileReader();

	    reader.onload = (e: any) => {
	      this.pdfSrc = e.target.result;
	    };

	    reader.readAsArrayBuffer($img.files[0]);
	  }
	}

	fetchPDF()
	{
  			this.http.get('http://localhost:9000/another-test.pdf', { responseType: 'arraybuffer' })
		    .subscribe((file: ArrayBuffer) => {
		      //this.pdfSrc = new Uint8Array(file);
		      // or directly passing ArrayBuffer
		      this.pdfSrc = file;
		    });
	}

}
