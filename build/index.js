"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Report_1 = require("./Report");
const matchReader = MatchReader_1.MatchReader.FromCsv('football.csv');
matchReader.load();
const report = Report_1.Report.htmlWinsAnalysisReport('Man United');
report.bulidAndPrintReport(matchReader.matches);
