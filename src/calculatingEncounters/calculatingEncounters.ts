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

    inputs.map((employedTimeAndWeek, index: number) => {
        const schedule = employedTimeAndWeek.replace(/(\r\n|\n|\r)/gm, '');
        if (!validatorRegexFormat.exec(schedule || "")) {
            console.log(`Line ${index + 1} is not in the correct format.`);
            return;
        }
        array.push({
            name: schedule.replace(validatorRegexName, ''),
            days: schedule.match(validatorRegexDaysAndHours)!.map((time: string) => {
                const dayInput: DaysInput = {
                    start: time.match(validatorRegexHours)![0],
                    end: time.match(validatorRegexHours)![0],
                    day: time.match(validatorRegexDays)![0]
                };
                return dayInput;
            })
        })
    })

    for (const item of array) {
        for (let accountant = 1; accountant < array.length; accountant++) {
            const nameCombination = [item.name, array[accountant].name].sort().join('-');
            if (item.name !== array[accountant].name && nameCombination !== item.name + '-' + array[accountant].name) {
                let quantity = 0;
                for (const item1 of item.days) {
                    for (const item2 of array[accountant].days) {
                        if (item1.day === item2.day) {
                            if (item1.start <= item2.start && item1.end >= item2.end) {
                                quantity++;
                            }
                        }
                    }
                }
                console.log(`${item.name + '-' + array[accountant].name +
                ' se encontraron una cantidad de veces: '
                + quantity
                }`);
            }
        }
    }

}

export default CalculatingEncounters;
