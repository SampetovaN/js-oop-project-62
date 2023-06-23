#!/usr/bin/env

import validator from '../index.js';

console.log(validator(Number(process.argv[process.argv.length - 1])));
