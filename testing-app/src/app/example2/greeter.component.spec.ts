import { TestBed, async } from '@angular/core/testing';
import { GreeterComponent} from './greeter.component';
import { GreeterService } from './greeter.service';

/* class DummyGreeter{
    greet(){
        return 'dummy message';
    }
} */

describe('Greeter Component', () => {
    const dummyGreeter = jasmine.createSpyObj('Greeter', { 'greet': 'dummy message' });
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                GreeterComponent
            ],
            /* providers : [ { provide : GreeterService , useValue : dummyGreeter} ] */
            providers : [ {provide : GreeterService, useClass : GreeterService }]
        }).compileComponents();
    }));

    it('Should generate a message when greeted', () => {
        //arrange
            

            const sut = new GreeterComponent(dummyGreeter),
                userName = 'Magesh',
                expectedResult = 'dummy message';
                
        //act
            sut.userName = userName;
            sut.onGreetClick();

        //assert
            expect(sut.message).toBe(expectedResult);
    });

    it('Should display the greet message', () => {
        const expectedResult = 'Hi Magesh, Have a nice day!';
        const fixture = TestBed.createComponent(GreeterComponent);
        //fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        const txtElement = compiled.querySelector('input[type="text"]');
        txtElement.value = 'Magesh';
        txtElement.dispatchEvent(new Event('keyup'));
        compiled.querySelector('input[value="Greet"]').click();
        fixture.detectChanges();
        expect(compiled.querySelector('div').textContent).toContain(expectedResult);
    })
})