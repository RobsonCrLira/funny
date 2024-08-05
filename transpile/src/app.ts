import fs from 'fs';
import moment from 'moment';
import dbJson from './db.json';
import { values } from './info';

const typedata = (data: string) =>
    moment(data, ['DD-MM-YYYY HH:mm:ss', 'YYYY-MM-DD HH:mm:ss']).format(
        'YYYY-MM-DD HH:mm:ss',
    );
type Query = {
    post_author: any;
    post_date: any;
    post_date_gmt: any;
    post_content: any;
    post_title: any;
    post_excerpt: any;
    post_status: any;
    comment_status: any;
    ping_status: any;
    post_password: any;
    post_name: any;
    to_ping: any;
    pinged: any;
    post_modified: any;
    post_modified_gmt: any;
    post_content_filtered: any;
    post_parent: any;
    guid: any;
    menu_order: any;
    post_type: any;
    post_mime_type: any;
    comment_count: any;
};

const insertLine = (line: Query) => {
    return `INSERT INTO wp_posts (post_author, post_date, post_date_gmt, post_content, post_title, post_excerpt, post_status, comment_status, ping_status, post_password, post_name, to_ping, pinged, post_modified, post_modified_gmt, post_content_filtered, post_parent, guid, menu_order, post_type, post_mime_type,  comment_count) VALUES (${
        line.post_author
    }, "${typedata(line.post_date)}", "${typedata(line.post_date_gmt)}", "${
        line.post_content
    }", "${line.post_title}", "${line.post_excerpt}", "${line.post_status}", "${
        line.comment_status
    }", "${line.ping_status}", "${line.post_password}", "${line.post_name}", "${
        line.to_ping
    }", "${line.pinged}", "${typedata(line.post_modified)}", "${typedata(
        line.post_modified_gmt,
    )}", "${line.post_content_filtered}", ${line.post_parent}, "${
        line.guid
    }", ${line.menu_order}, "${line.post_type}", "${line.post_mime_type}",${
        line.comment_count
    });`;
};
const teste = async () => {
    const mapdb = dbJson.map((item) => {
        const { ID, ...data } = item;
        const { post_parent } = item;
        return {
            ...data,
            post_author: 1,
            post_parent: values[post_parent.toString()],
        };
    });
    return mapdb;
};
const lista = async (data: any) => {
    const files = data.reduce((acc: any, item: any) => {
        if (typeof item.post_parent === 'number') {
            const value = item.guid.split('/wp-content/uploads/');
            if (value.length > 1)
                return [...acc, `${item.post_parent}, ${value[1]}`];
        }
        return acc;
    }, []);
    fs.writeFileSync('files.csv', files.join('\n'));
};
const insert = async () => {
    const data = await teste();
    lista(data);
    const insertValues = data.reduce((acc: any, item) => {
        if (typeof item.post_parent === 'number') {
            return [...acc, insertLine(item)];
        }
        return acc;
    }, []);
    const titles = data.reduce((acc: any, item) => {
        if (typeof item.post_parent === 'number') {
            return [...acc, item.guid];
        }
        return acc;
    }, []);
    fs.writeFileSync('titles.txt', titles.join("' , '"));
    fs.writeFileSync('insert.sql', insertValues.join('\n'));
};
insert();
