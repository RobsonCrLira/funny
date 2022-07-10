/* eslint-disable no-undef */
import fs from 'fs';
import xlsx from 'xlsx';
import { IReadFile } from '../interfaces/IReadfile';

export class ReadFile implements IReadFile {
    // async load(filePath: string) {
    //     return new Promise((resolve, reject) => {
    //         const buffers: any[] = [];
    //         const stream = fs.createReadStream(filePath);
    //         stream.on('data', (data) => buffers.push(data));
    //         stream.on('end', () => {
    //             const buffer = Buffer.concat(buffers);
    //             const workbook = xlsx.read(buffer, { type: 'buffer' });
    //             const [sheetTransform]: string[][] | string[] = Object.keys(
    //                 workbook.Sheets,
    //             ).map((name) => {
    //                 const sheet = workbook.Sheets[name];
    //                 return xlsx.utils.sheet_to_json(sheet);
    //             });
    //             resolve(sheetTransform);
    //         });
    //     });
    // }

    async load2(filePath: string): Promise<any> {
        console.log(filePath);

        const stream = fs.createReadStream(filePath);
        let sum = 0;
        let unprocessed = '';
        stream.on('data', (chunk) => {
            const chunkString = unprocessed + chunk.toString();
            unprocessed = '';
            let startIndex = 0;
            for (let ch = startIndex; ch < chunkString.length; ch + 1) {
                console.log(chunkString[ch]);
                if (chunkString[ch] === '\n') {
                    const line = chunkString.slice(startIndex, ch);
                    console.log(line);
                    const idx = line.indexOf(',');
                    const cost = line.slice(idx + 1);
                    sum += parseFloat(cost);
                    startIndex = ch + 1;
                }
            }
            if (chunkString[chunkString.length - 1] !== '\n') {
                unprocessed = chunkString.slice(startIndex);
            }
        });
        stream.on('end', () => {
            console.log('fin', sum);
        });
    }
}
