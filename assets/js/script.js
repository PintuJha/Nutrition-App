// ========AM CHART CODE STRAT=============


am5.ready(function() {
    
    // Define data for each year
  
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(am5percent.PieChart.new(root, {
      innerRadius: 100,
      layout: root.verticalLayout
    }));
    
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var series = chart.series.push(am5percent.PieSeries.new(root, {
      valueField: "size",
      categoryField: "sector"
    }));
    
    
    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll([
      { sector: "MUFA", size: 6.6 },
      { sector: "PUFA", size: 12 },
      { sector: "Saturated fats", size: 23.2 },
      { sector: "Carbohydrates", size: 2.2 },
      { sector: "Proteins", size: 4.5 }
    ]);
    
    
    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear(1000, 100);
    
    
    // Add label
    var label = root.tooltipContainer.children.push(am5.Label.new(root, {
      x: am5.p50,
      y: am5.p50,
      centerX: am5.p50,
      centerY: am5.p50,
      fill: am5.color(0x000000),
      fontSize: 50
    }));
    
    
    // Animate chart data
    var currentYear = 1670;
    function getCurrentData() {
      var data = chartData[currentYear];
    //   currentYear++;
    //   if (currentYear > 2014)
    //     currentYear = 1995;
    //   return data;
    }
    
    function loop() {
      label.set("text", currentYear);
      var data = getCurrentData();
      for(var i = 0; i < data.length; i++) {
        series.data.setIndex(i, data[i]);
      }
      chart.setTimeout( loop, 4000 );
    }
    
    loop();
    
    }); // end am5.ready()

    // ========AM CHART CODE END=============


    // ==========CALENDER CODE START==============

  //   jQuery('#datepicker').datepicker({
  //       changeMonth: true,
  //     changeYear: true
  // }).on('focus', function(){
  //     if(!jQuery('select').parent().hasClass('fake-select')){
  //         jQuery('select').wrap('<span class="fake-select"></span>');
  //     }
  // });

   // ==========CALENDER CODE END==============
  

  // ===============ToolTips CODE START=================
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });
    // ===============ToolTips CODE END=================

    function newDoc()
    {
    window.location.assign("create-meal-plan.html")
    }


    
  




    