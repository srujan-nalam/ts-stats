import { MatchReader } from "./MatchReader";
import { Report } from "./Report";

const matchReader = MatchReader.FromCsv('football.csv');
matchReader.load()

const report = Report.htmlWinsAnalysisReport('Man United')

report.bulidAndPrintReport(matchReader.matches)