import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  cardData1 = [
    { x: new Date(2000, 0), y: 3289000 },
    { x: new Date(2001, 0), y: 2830000 },
    { x: new Date(2002, 0), y: 2009000 },
    { x: new Date(2003, 0), y: 5840000 },
    { x: new Date(2004, 0), y: 2396000 },
    { x: new Date(2005, 0), y: 1613000 },
    { x: new Date(2006, 0), y: 2821000 },
    { x: new Date(2007, 0), y: 2000000 },
    { x: new Date(2008, 0), y: 6397000 },
    { x: new Date(2009, 0), y: 2506000 },
    { x: new Date(2010, 0), y: 2798000 },
    { x: new Date(2011, 0), y: 4386000 },
    { x: new Date(2012, 0), y: 6704000 },
    { x: new Date(2013, 0), y: 6026000 },
    { x: new Date(2014, 0), y: 2394000 },
    { x: new Date(2015, 0), y: 1872000 },
    { x: new Date(2016, 0), y: 2140000 }
  ]

  cardData2 = [
    { x: new Date(2000, 0), y: 3189000 },
    { x: new Date(2001, 0), y: 3630000 },
    { x: new Date(2002, 0), y: 2006000 },
    { x: new Date(2003, 0), y: 2940000 },
    { x: new Date(2004, 0), y: 2406000 },
    { x: new Date(2005, 0), y: 1613000 },
    { x: new Date(2006, 0), y: 2821000 },
    { x: new Date(2007, 0), y: 2000000 },
    { x: new Date(2008, 0), y: 1397000 },
    { x: new Date(2009, 0), y: 2506000 },
    { x: new Date(2010, 0), y: 2798000 },
    { x: new Date(2011, 0), y: 3386000 },
    { x: new Date(2012, 0), y: 6704000 },
    { x: new Date(2013, 0), y: 6026000 },
    { x: new Date(2014, 0), y: 2394000 },
    { x: new Date(2015, 0), y: 1872000 },
    { x: new Date(2016, 0), y: 2140000 }
  ]

  cardData3 = [
    { x: new Date(2000, 0), y: 6189000 },
    { x: new Date(2001, 0), y: 3630000 },
    { x: new Date(2002, 0), y: 2006000 },
    { x: new Date(2003, 0), y: 4940000 },
    { x: new Date(2004, 0), y: 2406000 },
    { x: new Date(2005, 0), y: 2613000 },
    { x: new Date(2006, 0), y: 2821000 },
    { x: new Date(2007, 0), y: 3000000 },
    { x: new Date(2008, 0), y: 1397000 },
    { x: new Date(2009, 0), y: 2506000 },
    { x: new Date(2010, 0), y: 2798000 },
    { x: new Date(2011, 0), y: 3386000 },
    { x: new Date(2012, 0), y: 7704000 },
    { x: new Date(2013, 0), y: 5026000 },
    { x: new Date(2014, 0), y: 2394000 },
    { x: new Date(2015, 0), y: 1872000 },
    { x: new Date(2016, 0), y: 1140000 }
  ]

  cardData4 = [
    { x: new Date(2000, 0), y: 1189000 },
    { x: new Date(2001, 0), y: 3630000 },
    { x: new Date(2002, 0), y: 2006000 },
    { x: new Date(2003, 0), y: 2940000 },
    { x: new Date(2004, 0), y: 2406000 },
    { x: new Date(2005, 0), y: 3613000 },
    { x: new Date(2006, 0), y: 2821000 },
    { x: new Date(2007, 0), y: 2000000 },
    { x: new Date(2008, 0), y: 1397000 },
    { x: new Date(2009, 0), y: 2506000 },
    { x: new Date(2010, 0), y: 2798000 },
    { x: new Date(2011, 0), y: 3386000 },
    { x: new Date(2012, 0), y: 7704000 },
    { x: new Date(2013, 0), y: 6026000 },
    { x: new Date(2014, 0), y: 2394000 },
    { x: new Date(2015, 0), y: 1872000 },
    { x: new Date(2016, 0), y: 7140000 }
  ]
  cardData5 = [
    { x: new Date(2000, 0), y: 1189000 },
    { x: new Date(2001, 0), y: 3630000 },
    { x: new Date(2002, 0), y: 2006000 },
    { x: new Date(2003, 0), y: 2940000 },
    { x: new Date(2004, 0), y: 2406000 },
    { x: new Date(2005, 0), y: 3613000 },
    { x: new Date(2006, 0), y: 2821000 },
    { x: new Date(2007, 0), y: 2000000 },
    { x: new Date(2008, 0), y: 1397000 },
    { x: new Date(2009, 0), y: 2506000 },
    { x: new Date(2010, 0), y: 7798000 },
    { x: new Date(2011, 0), y: 3386000 },
    { x: new Date(2012, 0), y: 7704000 },
    { x: new Date(2013, 0), y: 5026000 },
    { x: new Date(2014, 0), y: 4394000 },
    { x: new Date(2015, 0), y: 3872000 },
    { x: new Date(2016, 0), y: 2140000 }
  ]

  cardData6 = [
    { x: new Date(2000, 0), y: 7189000 },
    { x: new Date(2001, 0), y: 6630000 },
    { x: new Date(2002, 0), y: 5006000 },
    { x: new Date(2003, 0), y: 4940000 },
    { x: new Date(2004, 0), y: 3406000 },
    { x: new Date(2005, 0), y: 2613000 },
    { x: new Date(2006, 0), y: 1821000 },
    { x: new Date(2007, 0), y: 2000000 },
    { x: new Date(2008, 0), y: 1397000 },
    { x: new Date(2009, 0), y: 2506000 },
    { x: new Date(2010, 0), y: 2798000 },
    { x: new Date(2011, 0), y: 3386000 },
    { x: new Date(2012, 0), y: 7704000 },
    { x: new Date(2013, 0), y: 6026000 },
    { x: new Date(2014, 0), y: 2394000 },
    { x: new Date(2015, 0), y: 1872000 },
    { x: new Date(2016, 0), y: 7140000 }
  ]
  cardData7 = [
    { x: new Date(2000, 0), y: 1189000 },
    { x: new Date(2001, 0), y: 3630000 },
    { x: new Date(2002, 0), y: 2006000 },
    { x: new Date(2003, 0), y: 2940000 },
    { x: new Date(2004, 0), y: 2406000 },
    { x: new Date(2005, 0), y: 1613000 },
    { x: new Date(2006, 0), y: 2821000 },
    { x: new Date(2007, 0), y: 3000000 },
    { x: new Date(2008, 0), y: 4397000 },
    { x: new Date(2009, 0), y: 5506000 },
    { x: new Date(2010, 0), y: 6798000 },
    { x: new Date(2011, 0), y: 7386000 },
    { x: new Date(2012, 0), y: 7704000 },
    { x: new Date(2013, 0), y: 6026000 },
    { x: new Date(2014, 0), y: 5394000 },
    { x: new Date(2015, 0), y: 4872000 },
    { x: new Date(2016, 0), y: 3140000 }
  ]
  constructor() { }
  ngOnInit(): void {

    var chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      title: {
        text: 'Unit Details'
      },
      axisY: {
        title: 'Revenue in USD',
        valueFormatString: '#0,,.',
        suffix: 'mn',
        prefix: '$'
      },
      data: [
        {
          type: 'splineArea',
          color: 'rgba(54,158,173,.7)',
          markerSize: 5,
          xValueFormatString: 'YYYY',
          yValueFormatString: '$#,##0.##',
          dataPoints: this.cardData1
        }
      ]
    })
    // var chart2 = new CanvasJS.Chart('chartContainer2', {
    //   title: {
    //     text: 'Books Issued from Central Library'
    //   },
    //   axisY: {
    //     includeZero: false
    //   },
    //   axisX: {
    //     valueFormatString: 'MMM',
    //     interval: 1,
    //     intervalType: 'month'
    //   },
    //   data: [
    //     {
    //       type: 'spline',
    //       indexLabelFontColor: 'orangered',
    //       dataPoints: [
    //         { x: new Date(2012, 00, 1), y: 1352 },
    //         { x: new Date(2012, 01, 1), y: 1514, indexLabel: 'Exams' },
    //         { x: new Date(2012, 02, 1), y: 1321 },
    //         { x: new Date(2012, 03, 1), y: 1163 },
    //         {
    //           x: new Date(2012, 04, 1),
    //           y: 950,
    //           indexLabel: 'Holiday Season'
    //         },
    //         { x: new Date(2012, 05, 1), y: 1201 },
    //         { x: new Date(2012, 06, 1), y: 1186 },
    //         {
    //           x: new Date(2012, 07, 1),
    //           y: 1281,
    //           indexLabel: 'New Session'
    //         },
    //         { x: new Date(2012, 08, 1), y: 1438 },
    //         { x: new Date(2012, 09, 1), y: 1305 },
    //         { x: new Date(2012, 10, 1), y: 1480, indexLabel: 'Terms' },
    //         { x: new Date(2012, 11, 1), y: 1391 }
    //       ]
    //     }
    //   ]
    // })
    var chart3 = new CanvasJS.Chart('chartContainer3', {
      theme: 'light1', // "light2", "dark1", "dark2"
      animationEnabled: false, // change to true
      title: {
        text: 'Basic Column Chart'
      },
      data: [
        {
          // Change type to "bar", "area", "spline", "pie",etc.
          type: 'column',
          dataPoints: [
            { label: 'apple', y: 10 },
            { label: 'orange', y: 15 },
            { label: 'banana', y: 25 },
            { label: 'mango', y: 30 },
            { label: 'grape', y: 28 }
          ]
        }
      ]
    })
    var chart4 = new CanvasJS.Chart('chartContainer4', {
      theme: 'light1', // "light2", "dark1", "dark2"
      animationEnabled: false, // change to true
      title: {
        text: 'Basic Column Chart'
      },
      data: [
        {
          // Change type to "bar", "area", "spline", "pie",etc.
          type: 'column',
          dataPoints: [
            { label: 'apple', y: 10 },
            { label: 'orange', y: 15 },
            { label: 'banana', y: 25 },
            { label: 'mango', y: 30 },
            { label: 'grape', y: 28 }
          ]
        }
      ]
    })
    chart.render()
    // chart2.render()
    chart3.render()
    chart4.render()

  }

  getCard1() {
    var chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      title: {
        text: 'Unit Space '
      },
      axisY: {
        valueFormatString: '#0,,.',
        suffix: 'mn',
        prefix: '$'
      },
      data: [
        {
          type: 'splineArea',
          color: 'rgba(54,158,173,.7)',
          markerSize: 5,
          xValueFormatString: 'YYYY',
          yValueFormatString: '$#,##0.##',
          dataPoints: this.cardData1
        }
      ]
    })
    chart.render()
    console.log('getCard1', this.cardData1)
  }

  getCard2() {
    var chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      title: {
        text: 'Revenue'
      },
      axisY: {
        valueFormatString: '#0,,.',
        suffix: 'mn',
        prefix: '$'
      },
      data: [
        {
          type: 'splineArea',
          color: 'rgba(54,158,173,.7)',
          markerSize: 5,
          xValueFormatString: 'YYYY',
          yValueFormatString: '$#,##0.##',
          dataPoints: this.cardData2
        }
      ]
    })
    chart.render()
    console.log('getCard2', this.cardData2)
  }
  getCard3() {
    var chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      title: {
        text: 'Fixed Issues'
      },
      axisY: {
        valueFormatString: '#0,,.',
        suffix: 'mn',
        prefix: '$'
      },
      data: [
        {
          type: 'splineArea',
          color: 'rgba(54,158,173,.7)',
          markerSize: 5,
          xValueFormatString: 'YYYY',
          yValueFormatString: '$#,##0.##',
          dataPoints: this.cardData3
        }
      ]
    })
    chart.render()
    console.log('getCard2', this.cardData3)
  }
  getCard4() {
    var chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      title: {
        text: 'Followers'
      },
      axisY: {
        valueFormatString: '#0,,.',
        suffix: 'mn',
        prefix: '$'
      },
      data: [
        {
          type: 'splineArea',
          color: 'rgba(54,158,173,.7)',
          markerSize: 5,
          xValueFormatString: 'YYYY',
          yValueFormatString: '$#,##0.##',
          dataPoints: this.cardData4
        }
      ]
    })
    chart.render()
    console.log('getCard2', this.cardData4)
  }
  getCard5() {
    var chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      title: {
        text: 'Statistics'
      },
      axisY: {
        valueFormatString: '#0,,.',
        suffix: 'mn',
        prefix: '$'
      },
      data: [
        {
          type: 'splineArea',
          color: 'rgba(54,158,173,.7)',
          markerSize: 5,
          xValueFormatString: 'YYYY',
          yValueFormatString: '$#,##0.##',
          dataPoints: this.cardData5
        }
      ]
    })
    chart.render()
    console.log('getCard5', this.cardData5)
  }
  getCard6() {
    var chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      title: {
        text: 'Unique visitors'
      },
      axisY: {
        valueFormatString: '#0,,.',
        suffix: 'mn',
        prefix: '$'
      },
      data: [
        {
          type: 'splineArea',
          color: 'rgba(54,158,173,.7)',
          markerSize: 5,
          xValueFormatString: 'YYYY',
          yValueFormatString: '$#,##0.##',
          dataPoints: this.cardData6
        }
      ]
    })
    chart.render()
    console.log('getCard6', this.cardData6)
  }
  getCard7() {
    var chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      title: {
        text: 'New Oders'
      },
      axisY: {
        valueFormatString: '#0,,.',
        suffix: 'mn',
        prefix: '$'
      },
      data: [
        {
          type: 'splineArea',
          color: 'rgba(54,158,173,.7)',
          markerSize: 5,
          xValueFormatString: 'YYYY',
          yValueFormatString: '$#,##0.##',
          dataPoints: this.cardData7
        }
      ]
    })
    chart.render()
    console.log('getCard7', this.cardData7)
  }
}
