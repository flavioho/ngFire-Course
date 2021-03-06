import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { SidenavService } from "src/app/navigation/sidenav.service";

@Component({
    selector: "app-layout",
    templateUrl: "./layout.component.html",
    styleUrls: ["./layout.component.css"],
})
export class LayoutComponent implements OnInit {
    @ViewChild("sidenav", { static: true }) public sidenav: MatSidenav;

    constructor(private sidenavService: SidenavService) {}

    ngOnInit(): void {
        this.sidenavService.get(this.sidenav);
    }

    toggle() {
        this.sidenavService.toggle();
    }
}
