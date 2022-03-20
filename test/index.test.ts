import GroupEmployees from '../src/groupEmployees/groupEmployees';

global.console.log = jest.fn();

describe('calculate meet', () => {
    it('should return the amount of encounters', () => {
        const data = `
        RICARDO=MO12:00-04:00,TH12:00-14:00,SU20:00-21:00,SA14:00-18:00
        PEDRO=MO10:00-12:00,TH12:00-14:00,FR20:00-21:00
        JONATHAN=MO10:00-12:00,TH12:00-14:00,FR20:00-21:00,SA14:00-18:00`;
        GroupEmployees(data);
        expect(global.console.log).toHaveBeenCalledWith("RICARDO-PEDRO se encontraron una cantidad de veces: 1");
        expect(global.console.log).toHaveBeenCalledWith("RICARDO-JONATHAN se encontraron una cantidad de veces: 2");
        expect(global.console.log).toHaveBeenCalledWith("PEDRO-JONATHAN se encontraron una cantidad de veces: 3");
    });

    it('should return the amount of encounters', () => {
        const data = `
        ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
        ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`;
        GroupEmployees(data);
        expect(global.console.log).toHaveBeenCalledWith("ASTRID-ANDRES se encontraron una cantidad de veces: 3")
    });

    it('should validate format', () => {
        const data = 'dadsa';
        GroupEmployees(data);
        expect(global.console.log).toHaveBeenCalledWith("Line 1 is not in the correct format.");
    });
});
