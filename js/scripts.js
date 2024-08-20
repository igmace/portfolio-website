/*Menu toggle*/
function menuToggle(x) {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }
function myFunction(x) { 
  x.classList.toggle('change'); 
} 
 
Highcharts.chart('container', {
  chart: {
      type: 'packedbubble',
      height: '600px'
  },
  title: {
      display: 'none'
  },
    tooltip: {
      enabled: false,
  },
  plotOptions: {
      packedbubble: {
          minSize: '50%',
          maxSize: '150%',
          zMin: 0,
          zMax: 2000,
          layoutAlgorithm: {
              splitSeries: false,
              gravitationalConstant: 0.02
          },
          dataLabels: {
              enabled: true,
              format: '{point.name}',
              filter: {
                  property: 'y',
                  operator: '>',
                  value: 50
              },
              style: {
                  color: 'black',
                  textOutline: 'none',
                  fontWeight: '400',
                  fontSize: 'auto'
              }
          }
      }
  },
  series: [{
      name: 'Proficient',
      color: '#6877dc',
      data: [{
          name: 'Wireframing',
          value: 800
      }, {
          name: 'Prototyping',
          value: 800
      },
      {
          name: 'Responsive Design',
          value: 800
      },
      {
          name: 'Adobe XD',
          value: 800
      },
      {
          name: 'Mobile Design',
          value: 800
      }]
  }, 
     {
      name: 'Competent',
      color: '#202020',
      data: [{
          name: 'User Psychology',
          value: 500
      },
      {
          name: 'UX Research',
          value: 500
      },
      {
          name: 'Usability Testing',
          value: 500
      },
      {
          name: 'Lean UX',
          value: 500
      },
      {
          name: 'Native Design',
          value: 500
      },
      {
          name: 'Figma',
          value: 500
      },
      {
          name: 'FigJam',
          value: 500
     }]
  }, {
      name: 'Advanced Beginner',
      color: 'silver',
      data: [{
          name: 'HTML',
          value: 250
      },
      {
          name: 'CSS',
          value: 250
      },
      {
          name: 'VS Code',
          value: 250
      },
      {
          name: 'GitHub',
          value: 250
      },
      {
          name: 'Javascript',
          value: 250
      }]
  }]
})