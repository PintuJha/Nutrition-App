// <!-- ACCORDIAN code START -->

const accordionTriggers = document.querySelectorAll('.accordion__item--trigger');

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener('click', expandAccordion);
});

function expandAccordion(event) {
    const { target: targetElement } = event;
    const isPanelExpanded = targetElement.getAttribute('aria-expanded');
    
    collapseAllAccordions();
    
    if (isPanelExpanded === "false") {
        targetElement.setAttribute('aria-expanded', true);
    } else {
        targetElement.setAttribute('aria-expanded', false);
    }
}

function collapseAllAccordions() {
    accordionTriggers.forEach((trigger) => {
        trigger.setAttribute('aria-expanded', false);
    });
}

// <!-- ACCORDIAN code END -->




// ========TAB SCROLL CODE START===============

    // hide all contents accept from the first div
    $('.GeneticReport-tab .tabContent div:not(:first)').toggle();

    // hide the previous button
    $('.GeneticReport-tab .previous').hide();

    $('.GeneticReport-tab .tabs li').click(function () {

        if ($(this).is(':last-child')) {
            $('.GeneticReport-tab .next').hide();
        } else {
            $('.GeneticReport-tab .next').show();
        }

        if ($(this).is(':first-child')) {
            $('.GeneticReport-tab .previous').hide();
        } else {
            $('.GeneticReport-tab .previous').show();
        }

        var position = $(this).position();
        var corresponding = $(this).data("id");

        // scroll to clicked tab with a little gap left to show previous tabs
        scroll = $('.GeneticReport-tab .tabs').scrollLeft();
        $('.GeneticReport-tab .tabs').animate({
            'scrollLeft': scroll + position.left - 30
        }, 200);

        // hide all content divs
        $('.GeneticReport-tab .tabContent div').hide();

        // show content of corresponding tab
        $('div.' + corresponding).toggle();

        // remove active class from currently not active tabs
        $('.GeneticReport-tab .tabs li').removeClass('active');

        // add active class to clicked tab
        $(this).addClass('active');
    });

$('.GeneticReport-tab div a').click(function(e){
    e.preventDefault();
    $('.GeneticReport-tab li.active').next('li').trigger('click');
});
$('.GeneticReport-tab .next').click(function(e){
    e.preventDefault();
    $('.GeneticReport-tab li.active').next('li').trigger('click');
});
$('.GeneticReport-tab .previous').click(function(e){
    e.preventDefault();
    $('.GeneticReport-tab li.active').prev('li').trigger('click');
});

// ========TAB SCROLL CODE END===============


// ========ACTIVE MENU  CODE START===============
$(document).ready(function(){
    $('.recipes-link div a').click(function(){
      $('div a').removeClass("active");
      $(this).addClass("active");
  });
  });
 // ========ACTIVE MENU  CODE END===============


 // on page load...
 moveProgressBar();
 // on browser resize...
 $(window).resize(function() {
     moveProgressBar();
 });

 // SIGNATURE PROGRESS
 function moveProgressBar() {
   console.log("moveProgressBar");
     var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
     var getProgressWrapWidth = $('.progress-wrap').width();
     var progressTotal = getPercent * getProgressWrapWidth;
     var animationLength = 2500;
     
     // on page load, animate percentage bar to data percentage length
     // .stop() used to prevent animation queueing
     $('.progress-bar').stop().animate({
         left: progressTotal
     }, animationLength);
 }



//  =========INCREMENT ITEMS CODE START=============

$(document).ready(function() {
    const minus = $('.quantity__minus');
    const plus = $('.quantity__plus');
    const input = $('.quantity__input');
    minus.click(function(e) {
      e.preventDefault();
      var value = input.val();
      if (value > 1) {
        value--;
      }
      input.val(value);
    });
    
    plus.click(function(e) {
      e.preventDefault();
      var value = input.val();
      value++;
      input.val(value);
    })
  });

  //  =========INCREMENT ITEMS CODE END=============


//   $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();   
//   });



// =============ONE RANGE SLIDER CODE START=================
const elements = document.querySelectorAll(['range-slider']);

elements.forEach(element => {
  element.insertAdjacentHTML('afterend', `
    <output>${element.value}</output>
  ` + '<span>ingrediantd</span>');
});

document.addEventListener('input', e => {
  const input = e.target;
  const output = input.nextElementSibling;
  if (output) {
    output.textContent = input.value;
  }
});



// =============RANGE SLIDER CODE START=================
// Requires jQuery

// Initialize slider:
$(document).ready(function() {
    $('.noUi-handle').on('click', function() {
      $(this).width(50);
    });
    var rangeSlider = document.getElementById('slider-range');
    var moneyFormat = wNumb({
      decimals: 0,
      thousand: ','
      // prefix: '$'
    });
    noUiSlider.create(rangeSlider, {
      start: [10, 30],
      step: 1,
      range: {
        'min': [0],
        'max': [100]
      },
      format: moneyFormat,
      connect: true
    });
    
    // Set visual min and max values and also update value hidden form inputs
    rangeSlider.noUiSlider.on('update', function(values, handle) {
      document.getElementById('slider-range-value1').innerHTML = values[0];
      document.getElementById('slider-range-value2').innerHTML = values[1];
      document.getElementsByName('min-value').value = moneyFormat.from(
        values[0]);
      document.getElementsByName('max-value').value = moneyFormat.from(
        values[1]);
    });
  });
 // ===============ToolTips CODE START=================
 $(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
  // ===============ToolTips CODE END=================

  function newDoc()
  {
  window.location.assign("create-meal-plan.html")
  
  }

