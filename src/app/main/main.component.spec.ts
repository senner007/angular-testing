import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LibraryService } from '../InjectableServices/library/library.service';
import { LibraryServiceMock } from '../InjectableServices/library/library.service.mock';


describe('mainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [MainComponent],
    }).compileComponents();

    TestBed.overrideComponent(MainComponent, {
      set: {
        providers: [{ provide: LibraryService, useClass: LibraryServiceMock }]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('main ngInit should call read method on library mock', () => {
    const libraryServiceMock = fixture.debugElement.injector.get<LibraryService>(LibraryService);
    const spy = spyOn(libraryServiceMock, 'read');
    component.ngOnInit();
    expect(libraryServiceMock instanceof LibraryServiceMock).toBe(true);
    expect(spy).toHaveBeenCalled();
  });
});
