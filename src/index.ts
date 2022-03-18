import * as fs from 'fs';
import path from 'path';
import { extractArguments } from './Utils/utils';

let data = '';
const args = extractArguments();

try {
    data = fs.readFileSync(path.join(args.path ? args.path : 'example.txt'), 'utf-8');
} catch (err) {
    console.log('No se encontro el archivo', err);
}

const inputs = data.split('\n').filter(txt => txt !== "");

const parseData = inputs.reduce((data: any, line, idx) => {
    let current;
    if((current = /(?<day>\w{2})(?<start>\d{2}:\d{2})-(?<end>\d{2}:\d{2})+/gm.exec(line)) != null) {
        const day = current.groups!.day;
        const daysAndHours = {
            start: current.groups!.start,
            end: current.groups!.end,
            day,
        }

        data[idx].push(daysAndHours);
    }
    console.log(data);
}, [[],[],[]])

