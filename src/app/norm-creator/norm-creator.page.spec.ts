import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NormCreatorPage } from './norm-creator.page';

describe('NormCreatorPage', () => {
  let component: NormCreatorPage;
  let fixture: ComponentFixture<NormCreatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormCreatorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NormCreatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
