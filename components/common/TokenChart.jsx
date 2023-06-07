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
      $("#box").highcharts({
        chart: {
          plotBackgroundColor: "#0f0232",
          plotBorderColor:"#0f0232",
          plotBorderWidth: null,
          plotShadow: false,
          borderWidth:0,
          margin:0,
          padding:0
        },
        title: {
          text: "",
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %",
              style: {
                color:
                  (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
                  "black",
              },
            },
            point: {
              events: {
                click: function () {},
                mouseOver: function (e) {
                  $(this.dataLabel).stop(true, true);
                  this.slice(true, true, true);

                  var translation = this.slicedTranslation || {
                    translateX: 0,
                    translateY: 0,
                  };
                  var dlTranslation = {
                    translateX:
                      this.dataLabel.translateX + translation.translateX,
                    translateY:
                      this.dataLabel.translateY + translation.translateY,
                  };
                  console.log(dlTranslation);
                  this.dataLabel.animate(dlTranslation);
                  this.connector.animate(translation);
                },
                mouseOut: function () {
                  $(this.dataLabel).stop(true, true);
                  this.slice(false, true, true);
                  var translation = this.slicedTranslation || {
                    translateX: 0,
                    translateY: 0,
                  };

                  var dlTranslation = {
                    translateX:
                      this.dataLabel.translateX - translation.translateX,
                    translateY:
                      this.dataLabel.translateY - translation.translateY,
                  };
                  console.log(dlTranslation);
                  translation = {
                    translateX: 0,
                    translateY: 0,
                  };
                  this.dataLabel.animate(dlTranslation);

                  this.connector.animate(translation);
                },
              },
            },
          },
        },
        series: [
          {
            type: "pie",
            name: "pool",
            data: [
              ["DEX Liquidity", 28],
              ["Cex Listing", 9],
              ["Pinksale Presale", 57.0],
              ["Partnerships", 6],
            ],
          },
        ],
      });
    });
  </script>
</html>

`;
