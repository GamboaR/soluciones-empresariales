import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public activeLang = 'es';

  title = 'client-soluc';


  constructor(private auth: AuthenticationService,
    private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang)

  }
  changeLang(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }


}
