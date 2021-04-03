import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";

const list: string[] = []

@Component({ template: '' })
export abstract class LifecycleAware implements OnChanges, OnInit, DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    abstract get comp(): string

    ngOnDestroy(): void {
        this.log("ngOnDestroy")
    }

    ngAfterViewChecked(): void {
        this.log("ngAfterViewChecked")
    }

    ngAfterViewInit(): void {
        this.log("ngAfterViewInit")
    }

    ngAfterContentChecked(): void {
        this.log("ngAfterContentChecked")
    }

    ngAfterContentInit(): void {
        this.log("ngAfterContentInit")
    }

    ngDoCheck(): void {
        this.log("ngDoCheck")
    }

    ngOnInit(): void {
        this.log("ngOnInit")
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.log("ngOnChanges")
        console.log(changes)
    }

    private log(event: string): void {
        const message = `${new Date().toLocaleTimeString()} : ${this.comp.padEnd(8, " ")} ${event}`
        console.log(message)
        list.push(message)
    }

    get logList(): string[] {
        return list.filter(a => true)
    }

}