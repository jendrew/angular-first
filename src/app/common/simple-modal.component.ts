import { Component, ElementRef, Inject, Input, ViewChild } from "@angular/core";
import { JQUERY_TOKEN } from ".";

@Component({
    selector: 'simple-modal',
    template: `
    <div [id]="elementId" #modalContainer class="modal fade" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="close" type="button" data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-title">{{title}}</h4>
                </div>
                <div class="modal-body" (click)="closeModal()">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    </div>
    
    `,
    styles: [`
        .modal-body {
             height: 250px; overflow-y:scroll; 
        }

    `]
}) 
export class SimpleModalComponent {
    @Input() title: string; 
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;
    @ViewChild('modalContainer') containerElement: ElementRef;

    constructor(@Inject(JQUERY_TOKEN) private $: any){}

    closeModal() {
        if (this.closeOnBodyClick.toLocaleLowerCase() === "true") {
            this.$(this.containerElement.nativeElement).modal('hide');
        }
    }
}