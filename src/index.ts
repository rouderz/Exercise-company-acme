import * as fs from 'fs';
import path from 'path';
import { extractArguments } from './Utils/utils';
import GroupEmployees from './groupEmployees/groupEmployees';

let data = '';
const args = extractArguments();

try {
    data = fs.readFileSync(
        path.join(args.path ? args.path : 'example.txt'),
        'utf-8',
    );
} catch (err) {
    console.log('No se encontro el archivo', err);
}

GroupEmployees(data);


