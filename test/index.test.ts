import CalculatingEncounters from '../src/calculatingEncounters/calculatingEncounters'
global.console.log = jest.fn();

test('calculate meet three user', () => {
    const data = "RICARDO=MO12:00-04:00,TH12:00-14:00,SU20:00-21:00,SA14:00-18:00\n" + "PEDRO=MO10:00-12:00,TH12:00-14:00,FR20:00-21:00\n" + "JONATHAN=MO10:00-12:00,TH12:00-14:00,FR20:00-21:00,SA14:00-18:00";
    const result = CalculatingEncounters(data);
    console.log(result);
    expect(global.console.log).toHaveBeenCalledWith("RICARDO-PEDRO se encontraron una cantidad de veces: 1");
    expect(global.console.log).toHaveBeenCalledWith("RICARDO-JONATHAN se encontraron una cantidad de veces: 2");
    expect(global.console.log).toHaveBeenCalledWith("PEDRO-JONATHAN se encontraron una cantidad de veces: 3");
});


test('calculate meet two user', () => {
    const data = 'ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00\n' + 'ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'
    const result = CalculatingEncounters(data);
    console.log(result);
    expect(global.console.log).toHaveBeenCalledWith("ASTRID-ANDRES se encontraron una cantidad de veces: 3")
});

test('failed', () => {
    const data = 'dadsa';
    const result = CalculatingEncounters(data);
    console.log(result);
    expect(global.console.log).toHaveBeenCalledWith("Line 1 is not in the correct format.");
});
