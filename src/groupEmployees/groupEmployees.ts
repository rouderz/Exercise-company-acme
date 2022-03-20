import { DayInput } from '../global/type';
import {
    findRegexHours,
    validatorRegexDays,
    validatorRegexDaysAndHours,
    validatorRegexFormat,
    validatorRegexName,
} from '../Utils/regex';
import calculatingEncounters from '../calculatingEncounters/calculatingEncounters';

const GroupEmployees = (data: string) => {
    const groups: { name: string; days: DayInput[] }[] = [];
    const inputs = data.split('\n').filter((txt) => txt !== '');

    inputs.map((employedTimeAndWeek, index) => {
        const schedule = employedTimeAndWeek.trim();
        if (!validatorRegexFormat.exec(schedule || '')) {
            console.log(`Line ${index + 1} is not in the correct format.`);
            return;
        }

        groups.push({
            name: schedule.replace(validatorRegexName, ''),
            days: schedule
                .match(validatorRegexDaysAndHours)!
                .map((time: string) => {
                    const dayInput: DayInput = {
                        start: time.match(findRegexHours)![0],
                        end: time.match(findRegexHours)![0],
                        day: time.match(validatorRegexDays)![0],
                    };
                    return dayInput;
                }),
        });
    });

    calculatingEncounters(groups);
};

export default GroupEmployees;