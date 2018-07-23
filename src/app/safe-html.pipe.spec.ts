import { SafeHtmlPipe } from './safe-html.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed, async, inject } from '@angular/core/testing';

describe('SafeHtmlPipe', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
      
      ],
      declarations: [
      ],
      providers: [
        DomSanitizer,
        SafeHtmlPipe
       
      ]
    }).compileComponents();
  }));

  it('should be created', inject([SafeHtmlPipe], (pipe: SafeHtmlPipe) => {
    expect(pipe).toBeTruthy();
  }));
 
});
