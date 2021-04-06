// // import card1 from '../data/data.json';

// // console.log('sample.js', card1)

// window.onload = function () {
//     // console.log('sample.js', card1)
//     var chart = new CanvasJS.Chart('chartContainer', {
//       animationEnabled: true,
//       title: {
//         text: 'Company Revenue by Year'
//       },
//       axisY: {
//         title: 'Revenue in USD',
//         valueFormatString: '#0,,.',
//         suffix: 'mn',
//         prefix: '$'
//       },
//       data: [
//         {
//           type: 'splineArea',
//           color: 'rgba(54,158,173,.7)',
//           markerSize: 5,
//           xValueFormatString: 'YYYY',
//           yValueFormatString: '$#,##0.##',
//           dataPoints: [
//             { x: new Date(2000, 0), y: 3289000 },
//             { x: new Date(2001, 0), y: 3830000 },
//             { x: new Date(2002, 0), y: 2009000 },
//             { x: new Date(2003, 0), y: 2840000 },
//             { x: new Date(2004, 0), y: 2396000 },
//             { x: new Date(2005, 0), y: 1613000 },
//             { x: new Date(2006, 0), y: 2821000 },
//             { x: new Date(2007, 0), y: 2000000 },
//             { x: new Date(2008, 0), y: 1397000 },
//             { x: new Date(2009, 0), y: 2506000 },
//             { x: new Date(2010, 0), y: 2798000 },
//             { x: new Date(2011, 0), y: 3386000 },
//             { x: new Date(2012, 0), y: 6704000 },
//             { x: new Date(2013, 0), y: 6026000 },
//             { x: new Date(2014, 0), y: 2394000 },
//             { x: new Date(2015, 0), y: 1872000 },
//             { x: new Date(2016, 0), y: 2140000 }
//           ]
//         }
//       ]
//     })
//     var chart2 = new CanvasJS.Chart('chartContainer2', {
//       title: {
//         text: 'Books Issued from Central Library'
//       },
//       axisY: {
//         includeZero: false
//       },
//       axisX: {
//         valueFormatString: 'MMM',
//         interval: 1,
//         intervalType: 'month'
//       },
//       data: [
//         {
//           type: 'spline',
//           indexLabelFontColor: 'orangered',
//           dataPoints: [
//             { x: new Date(2012, 00, 1), y: 1352 },
//             { x: new Date(2012, 01, 1), y: 1514, indexLabel: 'Exams' },
//             { x: new Date(2012, 02, 1), y: 1321 },
//             { x: new Date(2012, 03, 1), y: 1163 },
//             {
//               x: new Date(2012, 04, 1),
//               y: 950,
//               indexLabel: 'Holiday Season'
//             },
//             { x: new Date(2012, 05, 1), y: 1201 },
//             { x: new Date(2012, 06, 1), y: 1186 },
//             {
//               x: new Date(2012, 07, 1),
//               y: 1281,
//               indexLabel: 'New Session'
//             },
//             { x: new Date(2012, 08, 1), y: 1438 },
//             { x: new Date(2012, 09, 1), y: 1305 },
//             { x: new Date(2012, 10, 1), y: 1480, indexLabel: 'Terms' },
//             { x: new Date(2012, 11, 1), y: 1391 }
//           ]
//         }
//       ]
//     })
//     var chart3 = new CanvasJS.Chart('chartContainer3', {
//       theme: 'light1', // "light2", "dark1", "dark2"
//       animationEnabled: false, // change to true
//       title: {
//         text: 'Basic Column Chart'
//       },
//       data: [
//         {
//           // Change type to "bar", "area", "spline", "pie",etc.
//           type: 'column',
//           dataPoints: [
//             { label: 'apple', y: 10 },
//             { label: 'orange', y: 15 },
//             { label: 'banana', y: 25 },
//             { label: 'mango', y: 30 },
//             { label: 'grape', y: 28 }
//           ]
//         }
//       ]
//     })
//     var chart4 = new CanvasJS.Chart('chartContainer4', {
//       theme: 'light1', // "light2", "dark1", "dark2"
//       animationEnabled: false, // change to true
//       title: {
//         text: 'Basic Column Chart'
//       },
//       data: [
//         {
//           // Change type to "bar", "area", "spline", "pie",etc.
//           type: 'column',
//           dataPoints: [
//             { label: 'apple', y: 10 },
//             { label: 'orange', y: 15 },
//             { label: 'banana', y: 25 },
//             { label: 'mango', y: 30 },
//             { label: 'grape', y: 28 }
//           ]
//         }
//       ]
//     })
//     chart2.render()
//     chart3.render()
//     chart4.render()
//     chart.render()


//     Highcharts.chart('container', {
//         chart: {
//           type: 'spline',
//           inverted: true
//         },
//         title: {
//           text: 'Atmosphere Temperature by Altitude'
//         },
//         subtitle: {
//           text: 'According to the Standard Atmosphere Model'
//         },
//         xAxis: {
//           reversed: false,
//           title: {
//             enabled: true,
//             text: 'Altitude'
//           },
//           labels: {
//             format: '{value} km'
//           },
//           accessibility: {
//             rangeDescription: 'Range: 0 to 80 km.'
//           },
//           maxPadding: 0.05,
//           showLastLabel: true
//         },
//         yAxis: {
//           title: {
//             text: 'Temperature'
//           },
//           labels: {
//             format: '{value}°'
//           },
//           accessibility: {
//             rangeDescription: 'Range: -90°C to 20°C.'
//           },
//           lineWidth: 2
//         },
//         legend: {
//           enabled: false
//         },
//         tooltip: {
//           headerFormat: '<b>{series.name}</b><br/>',
//           pointFormat: '{point.x} km: {point.y}°C'
//         },
//         plotOptions: {
//           spline: {
//             marker: {
//               enable: false
//             }
//           }
//         },
//         series: [{
//           name: 'Temperature',
//           data: [[0, 5], [5, 7], [10, 15], [14, 20], [18, 25],
//           [25, 35], [28, 34], [32, 45], [40, 10]]
//         }]
//       });
//   }