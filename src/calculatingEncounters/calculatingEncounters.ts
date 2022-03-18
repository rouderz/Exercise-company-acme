import {
    validatorRegexDays,
    validatorRegexDaysAndHours,
    validatorRegexFormat,
    validatorRegexHours,
    validatorRegexName
} from "../Utils/regex";
import {DaysInput} from "../global/type";


const CalculatingEncounters = (data: string) => {
    const array: { name: string; days: DaysInput[] }[] = [];
    const inputs = data.split('\n').filter(txt => txt !== "");

    inputs.map((res, i) => {
        if (!validatorRegexFormat.exec(res || "")) {
            console.log(`Line ${i + 1} is not in the correct format.`);
            return;
        }
        array.push({
            name: res.replace(validatorRegexName, ''),
            days: res.match(validatorRegexDaysAndHours)!.map((day: string) => {
                const dayInput: DaysInput = {
                    start: day.match(validatorRegexHours)![0],
                    end: day.match(validatorRegexHours)![0],
                    day: day.match(validatorRegexDays)![0]
                };
                return dayInput;
            })
        })
    })

    for (const item of array) {
        for (let j = 1; j < array.length; j++) {
            const nameCombination = [item.name, array[j].name].sort().join('-');
            if (item.name !== array[j].name && nameCombination !== item.name + '-' + array[j].name) {
                let quantity = 0;
                for (const item1 of item.days) {
                    for (const item2 of array[j].days) {
                        if (item1.day === item2.day) {
                            if (item1.start <= item2.start && item1.end >= item2.end) {
                                quantity++;
                            }
                        }
                    }
                }
                console.log(`${item.name + '-' + array[j].name +
                ' se encontraron una cantidad de veces: '
                + quantity
                }`);
            }
        }
    }

}

export default CalculatingEncounters;
