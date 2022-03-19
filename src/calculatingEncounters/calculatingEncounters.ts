import {DaysInput} from "../global/type";


const CalculatingEncounters = (groups: { name: string; days: DaysInput[] }[] = []) => {

    for (const item of groups) {
        for (let accountant = 1; accountant < groups.length; accountant++) {
            const nameCombination = [item.name, groups[accountant].name].sort().join('-');
            if (item.name !== groups[accountant].name &&
                nameCombination !== item.name + '-' + groups[accountant].name) {
                let quantity = 0;
                for (const item1 of item.days) {
                    for (const item2 of groups[accountant].days) {
                        if (item1.day === item2.day) {
                            if (item1.start <= item2.start && item1.end >= item2.end) {
                                quantity++;
                            }
                        }
                    }
                }
                console.log(`${item.name + '-' + groups[accountant].name +
                ' se encontraron una cantidad de veces: '
                + quantity
                }`);
            }
        }
    }

}

export default CalculatingEncounters;
