import * as fs from 'fs';
import path from 'path';
import {extractArguments} from './Utils/utils';
import CalculatingEncounters from "./calculatingEncounters/calculatingEncounters";

let data = '';
const args = extractArguments();

try {
    data = fs.readFileSync(path.join(args.path ? args.path : 'example.txt'), 'utf-8');
} catch (err) {
    console.log('No se encontro el archivo', err);
}

CalculatingEncounters(data);


