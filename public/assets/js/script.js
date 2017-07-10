
google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Task ID');
      data.addColumn('string', 'Task Name');
      data.addColumn('string', 'Resource');
      data.addColumn('date', 'Start Date');
      data.addColumn('date', 'End Date');
      data.addColumn('number', 'Duration');
      data.addColumn('number', 'Percent Complete');
      data.addColumn('string', 'Dependencies');

      data.addRows([
        ['Statement of Work', 'Statement of Work', 'Purchase Domain',
         new Date(2017, 2, 22), new Date(2017, 5, 20), null, 100, null],
        ['Resource Gathering', 'Resource Gathering', 'Project Intake Form',
         new Date(2017, 5, 21), new Date(2017, 8, 20), null, 100, null],
        ['Planning1', 'Planning', 'Agile Methodology',
         new Date(2017, 8, 21), new Date(2017, 11, 20), null, 100, null],
        ['Coding1', 'Framework', 'Coding',
         new Date(2017, 11, 21), new Date(2018, 2, 21), null, 100, null],
        ['Coding2', 'Mock up', 'Coding',
         new Date(2017, 11, 28), new Date(2018, 5, 20), null, 50, null],
        ['Coding3', 'Minimum Viable Product', 'Coding',
         new Date(2017, 12, 16), new Date(2018, 8, 20), null, 20, null],
        ['Peer Review1', 'Peer Review', 'NIST Standard 800-53',
         new Date(2018, 4, 21), new Date(2018, 8, 20), null, 40, null]
      ]);

      var options = {
        height: 320,
        gantt: {
          trackHeight: 36
        }
      };

      var chart = new google.visualization.Gantt(document.getElementById('chart_div2'));

      function daysToMilliseconds(days) {
      return days * 24 * 60 * 60 * 1000;
    }

$( "#nextProject" ).click(function() {
  google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(drawChart);
  function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Task ID');
      data.addColumn('string', 'Task Name');
      data.addColumn('string', 'Resource');
      data.addColumn('date', 'Start Date');
      data.addColumn('date', 'End Date');
      data.addColumn('number', 'Duration');
      data.addColumn('number', 'Percent Complete');
      data.addColumn('string', 'Dependencies');

      data.addRows([
        ['Research', 'Project Kick Off', null,
         new Date(2017, 0, 1), new Date(2017, 0, 5), null,  100,  null],
        ['Write', ' Long Phase Stage Development', 'Development',
         null, new Date(2017, 0, 9), daysToMilliseconds(3), 25, 'Research,Outline'],
        ['Cite', 'Short Phase Development', 'Development',
         null, new Date(2017, 0, 7), daysToMilliseconds(1), 20, 'Research'],
        ['Complete', 'User Acceptance Testing', 'complete',
         null, new Date(2017, 0, 10), daysToMilliseconds(1), 0, 'Cite,Write'],
        ['Outline', 'Planning and Frameworking', 'Development',
         null, new Date(2017, 0, 6), daysToMilliseconds(1), 100, 'Research']
      ]);

      var options = {
        height: 275
      };

      var chart = new google.visualization.Gantt(document.getElementById('chart_div2'));

      chart.draw(data, options);
    }
});
    

      chart.draw(data, options);
    }