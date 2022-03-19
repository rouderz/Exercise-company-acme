import {DaysInput} from "../global/type";
import {
    findRegexHours,
    removeSpace,
    validatorRegexDays,
    validatorRegexDaysAndHours,
    validatorRegexFormat,
    validatorRegexHours,
    validatorRegexName
} from "../Utils/regex";
import calculatingEncounters from "../calculatingEncounters/calculatingEncounters";

const GroupEmployees = (data: string) => {
    const groups: { name: string; days: DaysInput[] }[] = [];
    const inputs = data.split('\n').filter(txt => txt !== "");

    inputs.map((employedTimeAndWeek, index: number) => {
        const schedule = employedTimeAndWeek.replace(removeSpace, '');
        if (!validatorRegexFormat.exec(schedule || "")) {
            console.log(`Line ${index + 1} is not in the correct format.`);
            return;
        }

        groups.push({
            name: schedule.replace(validatorRegexName, ''),
            days: schedule.match(validatorRegexDaysAndHours)!.map((time: string) => {
                const dayInput: DaysInput = {
                    start: time.match(findRegexHours)![0],
                    end: time.match(findRegexHours)![0],
                    day: time.match(validatorRegexDays)![0]
                };
                return dayInput;
            })
        })
    });

    calculatingEncounters(groups);
}

export default GroupEmployees;