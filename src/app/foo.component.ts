import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-foo',
    template: `
    <h1>Hello world!</h1>
    <p>My name is {{name}}</p>
    `
})
export class Foo {
    @Input() name: string = 'Foo';

    constructor() {
        console.log('Foo component loaded');
    }

}
