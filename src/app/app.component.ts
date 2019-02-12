import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mathMLString = `<math id="math-1" xmlns="http://www.w3.org/1998/Math/MathML">
                    <mfrac id="math-2">
                      <mn id="math-3">1</mn>
                      <mn id="math-4">3</mn>
                    </mfrac>
                  </math>`

  onMathMLClick(e: Event):void {
    console.log(e.target['id']);
  }
}
