// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});
// Set a callback to run when the Google Visualization API is loaded.
// $(function() {
// //     //------

    google.setOnLoadCallback( drawCharts );
    function drawCharts(){

        console.log( 'BOOM!' );

        // var dataSets = [];
        //
        var formatter = new google.visualization.NumberFormat({
            decimalSymbol: '.',
            groupingSymbol: ',',
            negativeParens: true,
            pattern: '£######'
        });
        var $fundingBreakdowns = $('.fundingBreakdown');
        console.log( $fundingBreakdowns );
        var $charts = new Array( $fundingBreakdowns.length );
        var options = {
            animation: {
                startup: 'true',
                duration: 1000,
                easing: 'out',
            },
            'width':300,
            'height':300,
            'legend': 'none',
            pieHole: 0.5,
            pieSliceTextStyle: {
                color: 'white',
                bold: true,
                fontSize: 18
            },
            chartArea: {
                backgroundColor: '#ccc',
                width: 260,
                height: 260,
                left: 20,
                top: 20
            },
            tooltip: { trigger: 'none' },
            pieSliceBorderColor: '#a1acb2',
            slices: [
                {
                    color: '#a1acb2',
                },
                {
                    color: '#005ea5',
                }
            ],
            pieSliceText: 'value'
        }

        for ( var i = 0; i < $charts.length; i++  ) {
            $fundingBreakdowns[ i ].text = '';
            $charts[ i ] = new google.visualization.PieChart( $fundingBreakdowns[ i ]  );
            var data = new google.visualization.arrayToDataTable( [ [ 'who', 'how much' ], [ 'you', 2000 ], [ 'gvt', 8000 ] ] );
            formatter.format(data, 1);
            $charts[ i ].draw(
                data,
                options
            )
        }
        // var data = new google.visualization.DataTable();
    };
    // drawCharts()

// });
