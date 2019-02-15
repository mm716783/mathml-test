import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mathMLString = `<math id="math-1" xmlns="http://www.w3.org/1998/Math/MathML">
                    <mfrac id="math-2">
                      <mn id="math-3" my-select-attr>1</mn>
                      <mn id="math-4">3</mn>
                    </mfrac>
                  </math>`

  onMathMLClick(e: Event):void {
    console.log(e.target['id']);
    const idString = 'id="' + e.target['id'] + '"';
    // Clear all previous highlights
    this.mathMLString = this.mathMLString.replace("my-select-attr", "");
    console.log(this.mathMLString);
    // Highlight the selected node
    this.mathMLString = this.mathMLString.replace(idString, idString + " my-select-attr");
    console.log(this.mathMLString);
    // I imagine you might have a more robust way of finding which nodes to highlight since the
    // heirarchy of the MathML might not match that of the expression.
  }
}
