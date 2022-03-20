import { DayInput } from '../global/type';

const CalculatingEncounters = (
    groups: { name: string; days: DayInput[] }[] = [],
) => {
    for (const firstEmployed of groups) {
        for (let counter = 1; counter < groups.length; counter++) {
            const nameCombination = [firstEmployed.name, groups[counter].name]
                .sort()
                .join('-');
            const name = firstEmployed.name + '-' + groups[counter].name;
            if (
                firstEmployed.name !== groups[counter].name &&
                nameCombination !== name
            ) {
                let quantity = 0;
                for (const firstEmployedDateTime of firstEmployed.days) {
                    for (const secondEmployedDateTime of groups[counter].days) {
                        if (
                            firstEmployedDateTime.day ===
                            secondEmployedDateTime.day
                        ) {
                            if (
                                firstEmployedDateTime.start <=
                                    secondEmployedDateTime.start &&
                                firstEmployedDateTime.end >=
                                    secondEmployedDateTime.end
                            ) {
                                quantity++;
                            }
                        }
                    }
                }
                console.log(
                    `${name} se encontraron una cantidad de veces: ${quantity}`,
                );
            }
        }
    }
};

export default CalculatingEncounters;
