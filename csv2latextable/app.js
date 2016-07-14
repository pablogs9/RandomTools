fs = require('fs')
fs.readFile('data.csv', 'utf8', function(err, d) {

    var data = d
    var caption = "Test caption"

    var lines = data.split("\r\n");
    var tab = "|" + "c|".repeat(lines[0].split(",").length)

    var title = "\\hline"
    for (var i = 0; i < lines[0].split(",").length; i++) {
        title += " \\textbf{" + lines[0].split(",")[i] + "} " + ((i == lines[0].split(",").length - 1) ? "\\\\\n" : "&");
    }

    var body = ""
    for (var i = 1; i < lines.length; i++) {
        if (lines[i] != "") {
            body += "\\hline"
            for (var j = 0; j < lines[i].split(",").length; j++) {
                lines[i].split(",")[j]
                body += " " + lines[i].split(",")[j] + ((j == lines[i].split(",").length - 1) ? "\\\\\n" : "&");
            }
        }
    }

    var s = "\\begin{table}[h]\n\\centering\n\\scalebox{0.8}{\n\\begin{tabular}{" + tab + "}\n\\hline\n";
    s += title + body;
    s += "\\hline\n\\hline\n\\end{tabular}\n}\n\\caption{" + caption + "}\\label{tab:label}\n\\end{table}";

    console.log(s);
});
