import { Component, OnInit } from '@angular/core';
import { environment as env} from '../../src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'version-show';

  appVersion: string = ' ';

  ngOnInit() {
    this.appVersion = env.version;
  }

}
