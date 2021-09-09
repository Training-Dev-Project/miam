
import { TestBed , async} from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const title = "MIAM";
  it(`Mount component :`, () => {
    expect(AppComponent).toBeTruthy();
  });
});