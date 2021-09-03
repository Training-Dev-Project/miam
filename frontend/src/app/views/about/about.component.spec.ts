import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;

  it('should create', () => {
    component = new AboutComponent();
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
