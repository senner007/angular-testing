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

  it('main ngInit should call read method on adapter', () => {
    const someMockService = fixture.debugElement.injector.get<LibraryService>(LibraryService);
    const spy = spyOn(someMockService, 'read');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('library service read method should return value from mock method', () => {
    const someMockService = fixture.debugElement.injector.get<LibraryService>(LibraryService);
    const readValue = someMockService.read();
    component.ngOnInit();
    expect(readValue).toBe('library service mock read method');
  });
});
