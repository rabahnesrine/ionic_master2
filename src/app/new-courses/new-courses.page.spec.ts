import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewCoursesPage } from './new-courses.page';

describe('NewCoursesPage', () => {
  let component: NewCoursesPage;
  let fixture: ComponentFixture<NewCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCoursesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
