import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Almundo_challenge';
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon("search", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/filters/search.svg"));
    this.matIconRegistry.addSvgIcon("star", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/filters/star.svg"));
    this.matIconRegistry.addSvgIcon("arrowup", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/filters/arrow_up.svg"));
    //Amenities
    this.matIconRegistry.addSvgIcon("bathrobes", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/amenities/bathrobes.svg"));
    this.matIconRegistry.addSvgIcon("bathtub", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/amenities/bathtub.svg"));
    this.matIconRegistry.addSvgIcon("beach", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/amenities/beach.svg"));
    this.matIconRegistry.addSvgIcon("beach-pool-facilities", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/amenities/beach-pool-facilities.svg"));
    this.matIconRegistry.addSvgIcon("business-center", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/amenities/business-center.svg"));
    this.matIconRegistry.addSvgIcon("children-club", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/amenities/children-club.svg"));
    this.matIconRegistry.addSvgIcon("coffe-maker", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/amenities/coffe-maker.svg"));
    this.matIconRegistry.addSvgIcon("deep-soaking-bathtub", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/amenities/deep-soaking-bathtub.svg"));
    this.matIconRegistry.addSvgIcon("fitness-center", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/amenities/fitness-center.svg"));
    this.matIconRegistry.addSvgIcon("garden", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/amenities/garden.svg"));
    this.matIconRegistry.addSvgIcon("kitchen-facilities", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/amenities/kitchen-facilities.svg"));
    this.matIconRegistry.addSvgIcon("newspaper", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/amenities/newspaper.svg"));
    this.matIconRegistry.addSvgIcon("nightclub", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/amenities/nightclub.svg"));
    this.matIconRegistry.addSvgIcon("restaurant", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/amenities/restaurant.svg"));
    this.matIconRegistry.addSvgIcon("safety-box", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/amenities/safety-box.svg"));
    this.matIconRegistry.addSvgIcon("separate-bredroom", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/amenities/separate-bredroom.svg"));
    this.matIconRegistry.addSvgIcon("sheets", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/amenities/sheets.svg"));
  }
}
