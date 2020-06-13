import {bar , foo} from './math';
import data from './data/test.json';
import './css/test.css';

document.write('你好！'+'<br/>');
document.write(foo(10)+'<br/>');
document.write(bar(11)+'<br/>');
document.write(JSON.stringify(data)+'<br/>');