import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailCoursesPage } from './detail-courses.page';

describe('DetailCoursesPage', () => {
  let component: DetailCoursesPage;
  let fixture: ComponentFixture<DetailCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCoursesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
