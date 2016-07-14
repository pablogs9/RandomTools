# CSV to Latex table
Convert CSV sheet from Google SpreadSheets to Latex tables

Generated Latex table:
![latextable](https://raw.githubusercontent.com/pablogs9/RandomTools/master/csv2latextable/result.png)

Generated Latex code:
```
\begin{table}[h]
\centering
\scalebox{0.8}{
\begin{tabular}{|c|c|c|c|c|c|}
\hline
\hline \textbf{Elemento} & \textbf{Consumo (mA)} & \textbf{Cantidad} & \textbf{Voltaje (V)} & \textbf{Total (mA)} & \textbf{Potencia (mW)} \\
\hline RPi& 350.00& 1& 5.00& 350.00& 1750\\
\hline Buzzer& 0.00& 1& 3.30& 0.00& 0\\
...
\hline RTC& 1.00& 1& 3.30& 1.00& 3.3\\
\hline TOTAL& 810.75& & & 835.75& 3854.482\\
\hline
\hline
\end{tabular}
}
\caption{Test caption}\label{tab:label}
\end{table}
```
