import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReports";
import { HtmlReport } from "./reportTargets/HtmlReport";


export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Report {
    static htmlWinsAnalysisReport(team: string): Report {
        return new Report(new WinsAnalysis(team),new HtmlReport() )
    }

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
    
    bulidAndPrintReport(matches: MatchData[]): void{
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output)
    }
}

