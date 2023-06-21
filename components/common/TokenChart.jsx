import React from "react";

export function TokenChart() {
  return <iframe width="100%" height="450" srcDoc={chart} />;
}

const chart = `
<html>
  <meta charset="utf-8" />
  <head>

    <title>elontix</title>
    <style type="text/css">
      @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');
      *{
        padding:0,
        margin:0
      }
      html, body {
        background-color: #0f0232;
      }
      #box {
        width: 100%;
        height: 460px;
        background-color: #0f0232;
      }
      *{
        overflow:hidden;
      }
    </style>
    <script src="https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
  </head>
  <body>
    <div id="box"></div>
  </body>
  <script>
    $(function () {
      Highcharts.setOptions({
        colors: ['#FB9902', '#0C47FE', '#66B032', '#FE2712']
      });
      $("#box").highcharts({
        chart: {
          plotBackgroundColor: "#0f0232",
          plotBorderColor:"#0f0232",
          plotBorderWidth: null,
          plotShadow: false,
          borderWidth:0,
          margin:0,
          padding:0,
          fontFamily: "'Josefin Sans', sans-serif",
        },
        title: {
          text: "",
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        plotOptions: {
          pie: {
            allowPointSelect: false,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %",
              distance:30,
              style: {
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight:"bold",
                fontSize:"16px",
                color: "white",
              },
            },
          },
        },
        series: [
          {
            type: "pie",
            name: "pool",
            data: [
              ["Cex Listing", 9],
              ["DEX Liquidity", 28],
              ["Pinksale Presale", 57.0],
              ["Eco Systems & Treasury", 6],
            ],
          },
        ],
      });
    });
  </script>
</html>

`;
