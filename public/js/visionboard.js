import { Calendar } from '../../node_modules/@fullcalendar/core';
import dayGridPlugin from '../../node_modules/@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import interactionPlugin from '@fullcalendar/interaction';
import timegridPlugin from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';

import '../../node_modules/@fullcalendar/core/main.css'
import '../../node_modules/@fullcalendar/daygrid/main.css'
import '../../node_modules/@fullcalendar/bootstrap/main.css'
import '../../node_modules/@fullcalendar/timegrid/main.css'

// import './calendar.js'

require('./calendar.js');

// var calendar = calendarSrc.calendarFunctions;


var quotes = [
	{quote: "Sometimes later becomes never. Do it now.", author: "Unknown"}, 
	{quote: "There are wounds that never show on the body that are deeper and more hurtful than anything that bleeds.", author: "Laurell K. Hamilton"},
	 {quote: "Keep yourself busy if you want to avoid depression. For me, inactivity is the enemy.",
	 author: "Matt Lucas"}, 
	 {quote: "It is never too late to be what you might have been.", author: "George Eliot"},
	 {quote: "If you want to conquer the anxiety of life, live in the moment, live in the breath.", author: "Amit Ray"},
	 {quote: "You must do the thing you think you cannot do.", author: "Eleanor Roosevelt"},
	 {quote: "But in the end one needs more courage to live than to kill himself.", author: "Albert Camus "},
	 {quote: "Imagine your life is perfect in every respect; what would it look like?", author: "Brian Tracy"},
	 {quote: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link"},
	 {quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt"},
	 {quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis"},
	 {quote: "Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality.", author: "Brian Tracy"},
	 {quote: "People think being alone makes you lonely, but I don't think that's true. Being surrounded by the wrong people is the loneliest thing in the world.", author: " Kim Culbertson"}
	 // {quote: "", author: ""},
];




// GLOBAL VARIABLES
// var navIDs = ['#goals', '#calendar', '#budget', '#journal', '#status', '#capsule'];

var navIDs = {
			  goals: '#goals', 
			  calendar: '#calendar', 
			  budget: '#budget', 
			  journal: '#journal', 
			  status: '#status', 
			  capsule: '#capsule'
			};

var goalsContent = $(`${navIDs.goals}Content`);
var calendarContent = $(`${navIDs.calendar}Content`);
var budgetContent = $(`${navIDs.budget}Content`);
var journalContent = $(`${navIDs.journal}Content`);
var statusContent = $(`${navIDs.status}Content`);
var capsuleContent = $(`${navIDs.capsule}Content`);

$(document).ready(function () {
	init();
	// setContentSize('85%', '100%');
	clickEventListener();

	setInterval(getQuotes(), 8000);

	$('#journal').click();
	
})

/* Start Calendar */

function renderCalendar() {
  var calendarEl = document.getElementById('calendarContent');

  let events = [
	  				
					{
						title: 'Go outside',
						start:  '2019-10-16'
					},					
					{
						title: 'Deadline 1',
						start:  '2019-11-04'
					},					
					{
						title: 'Declutter',
						start:  '2019-11-12'	
					},	  				
					{
						title: 'Deadline 2',
						start:  '2019-11-15'
					}, 
					{					
						title: 'Holiday',
						start:  '2019-11-28',
						end:  '2019-12-01',
						color: 'red',
						className: ['holiday', 'thanksgiving'],
						icon: "alert"
					},					

					{					
						title: 'Holiday',
						start:  '2019-12-25',
						end:  '2020-01-01',
						color: 'red',
						className: ['holiday', 'christmas'],
						icon: "alert"
					},
					{					
						title: 'Now',
						start:  '2019-12-22',
						color: 'yellow',
						icon: "alert",

					}
				]

	var holidayEvt = calendarContent.find('[data-event-id=' + events[4].id + ']');

	console.log(`holidayEvt id: ${events[4].id}`);





  //  calendarEl.fullCalendar( 'renderEvent', event, true);				

  var calendar = new Calendar(calendarEl, {
    plugins: [ dayGridPlugin, bootstrapPlugin, interactionPlugin, timegridPlugin, resourceTimeGridPlugin ],
    themeSystem: 'bootstrap',

    defaultView: 'dayGridMonth',
    displayEventTime: false,

	  views: {
	    // timeGridFourDay: {
	    //   type: 'timeGrid',
	    //   duration: { days: 5 },
	    //   buttonText: '5 days',
	    //   contentHeight: 60,
	    // },

	    dayGridWeek: { 
	    	height: 'auto',
	    	contentWidth: 300
	    },	    

	    dayGridMonth: { 
	    	contentHeight: 100,
	    	contentWidth: 300,
	    	showNonCurrentDates: false,
	    	fixedWeekCount: false
	    }
	  },

    header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth, dayGridWeek, dayGridDay'
    },

	eventSources: [
	    {
	    	events: events,

			// eventAfterAllRender: function(view) {
			// 	var thanksgiving = moment('2019-11-28','YYYY-MM-DD');

			// 	$("td[data-date=" + thanksgiving.format('YYYY-MM-DD') + "]").addClass('holiday');

			// 	if (view.name == 'month') {
			// 		$("td[data-date=" + thanksgiving.format('YYYY-MM-DD') + "]").addClass('holiday');
			// 	}
			// },

		    color: 'yellow',   
		  	textColor: 'black'
	  	}
  	],

	// eventRender: function(event, element, calEvent) {
	// 	$(".holiday .fc-title").prepend(`<i class='fa fa-bomb'></i> `);
	//      // if(event.icon){          

	//      // }
	//  },

  // eventRender: function(info) {
  //   var tooltip = new Tooltip(info.el, {
  //     title: info.event.extendedProps.description,
  //     placement: 'top',
  //     trigger: 'hover',
  //     container: 'body'
  //   });
  // },    

    height: 50,
    editable: true,
    contentHeight: 'auto',
    eventLimit: true,
    schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source'
  });

  calendar.render();
  // calendar.updateSize();	
}
/* End Calendar */


function getQuotes() {
	// $('#top').append(`<div id="nextQuote"> > </div>`);

	// $('#nextQuote').on('click', function() {
		// let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

		// let prevQuote;
		// let currentQuote = `<span id="quote_content">${randomQuote['quote']}</span></br> - <span id="author">${randomQuote['author']}</span>`

	     
	     
	 //     	$('#quote').html(currentQuote);
	 //     	prevQuote = currentQuote;
 //     })


    for (var i = 0; i < quotes.length; i++) {


          (function(i){
            setTimeout(function(){ 
                 	let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

		let currentQuote = `<span id="quote_content">${randomQuote['quote']}</span></br> - <span id="author">${randomQuote['author']}</span>`
				$('#quote').animate({'opacity': 0}, 1000, function () {
				   $('#quote').html(currentQuote);
				}).animate({'opacity': 1}, 1000);
            	
            // })  
          }, 8000 * i)
          

         })(i);
     }
 
 }

//          $('#quote').removeClass('fadeIn');
         
//          setInterval(wordLoop, 2000);
//         rollover.setAttribute('class', 'animated fadeIn'); 

//                     $('#quote').fadeOut("slow", function() {

//             })
//         rollover.innerHTML = words[i];
   
//     setInterval(function() {
    	
//     	setTimeout(getQuotes, x * quotes.length * 1000);
//     }, 8000);

// 	quotes.forEach(function(quote) {
// 		$('#top').append(quote);
// 	})
// }


function wordLoop() {
    var rollover = document.getElementById('description');
    x = 3;

    for (var i = 0; i < words.length; i++) {
          (function(i){
            setTimeout(function(){ 
              rollover.innerHTML = words[i];
          }, 2000 * i)
         })(i);
         // setInterval(wordLoop, 2000);
        // rollover.setAttribute('class', 'animated fadeIn'); 


        // rollover.innerHTML = words[i];
    }
    setTimeout(wordLoop, x * words.length * 1000);

}

//function to calculate window height
function getWindowHeight() {
      return $(window).height() - 30;
}



// nav link event listeners on mouse click
function clickEventListener() {
	let previousNavItem; // previousNavItemly clicked nav item

	$(`nav > ul > li`).on('click', function() {
		let navItem = $(this).attr('id');
		let contentID = '#' + $(this).attr('id') + 'Content';
		let content = $('#' + $(this).attr('id') + 'Content');

		$(this).css('color', 'cyan');
		
		// if user selected another nav item previousNavItemly
		if (previousNavItem) {
			let prevContent = $( '#' + previousNavItem.attr('id') + 'Content' );
			prevContent.removeClass('show');
			prevContent.addClass('noshow');

			previousNavItem.css('color', '#fff');
			// console.log(previousNavItem.attr('class'));

			// remove calendar from display if it was just shown
			if (previousNavItem.attr('id') === 'calendar') {
				removeCalendar();
			}
		}

		previousNavItem = $(this);

		console.log(`contentID: ${contentID}`);

		displayContent(content);

		console.log(`${navItem} clicked`);
	})
}

function displayContent(content) {
		switch (true) {
			case (content.is(calendarContent)):
				getCalendar();
				break;			

			case (content.is(budgetContent)):
				getDefault(content);
				calculateWorkDays();
				break;

			case (content.is(journalContent)):
				getDefault(content);
				activeTab();
				// printLoremIpsum();
				$('#journal_tab').click();
				break;

			case (content.is(statusContent)):
				getDefault(content);
				getEmotionalState();
				break;				

			case (content.is(capsuleContent)):
				getDefault(content);
				getCapsule();
				break;			

			default:
				getDefault(content);
				break;
		}
}

// set or reset to default
function getDefault(content) {
				addBorder();
				hideScrollbar();

				init();
				// clearContent();

				showContent(content);

				// $(contentID).removeClass('noshow');
				// $(contentID).addClass('show');
}

function getCalendar() {
			let holidayTitle = $(".holiday .fc-title");
			let exclamationIcon = `<i class='fa fa-exclamation-circle'></i> `;

			calendarContent.attr('style', 'display: block !important');
			if ($('.fc-toolbar').length < 1) {
				renderCalendar();	

			[ $('.fc-prev-button'), $('.fc-next-button') ].forEach(function(btn) {
		    		btn.on('click', function() {
		    			$(".holiday .fc-title").prepend(exclamationIcon);
		    		});				
				})

			}
			// clear content border
			$('#content').css('border', '0'); 

			// console.log(`childNodes: ${$('.thanksgiving .fc-content .fc-title')[0].childNodes.length}`); // 1

			if ($('.thanksgiving .fc-content .fc-title')[0].childNodes.length == 1) {
					console.log(`no icon`);
					holidayTitle.prepend(exclamationIcon);
			}	

			// $('#calendarContent').css('width', '100%');
	// $('#calendarContent').css('height', '100%');
	
			setContentSize('85%', '100%');
			// $('#content').css('margin-top', '8% !important');
			$('#calendarContent').css('margin-top', '8%');
}

// initialize values
function init() {
	// $('#content').css('margin-top', '0');
	setContentSize('70%', '570'); // (w, h)
	clearContent();
	$('#journalContent').css('margin-top', '0');
}

function setContentSize(w, h) {
	console.log(`width: ${$('#content').width()}`);
	console.log(`height: ${$('#content').height()}`);

	$('#content').css('width', w);
	$('#content').css('height', h);
}

// hide calendar from display
function removeCalendar() {
	calendarContent.attr('style', 'display: none');
}

// capitalize first letter
function capitalize(str) {
	let capitalized;
	str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    	capitalized = letter.toUpperCase();
	});

	return capitalized + str.slice(1);
}

function resetContentSize() {
	goalsContent.attr('style', 'width: 80%');
}

function calculateWorkDays() {
	$('#calculateWorkDays').on('click', function() {

	let hourlyWage = $('#hourlyWage').val();
	let workDayHrs = 8;	
	// let target = parseFloat(target.replace(/,/g, $('#target').val()));
	let target = $('#target').val();

	let saved = $('#saved').val();
	let remaining = target - saved;


	let workDays = Math.ceil((remaining / hourlyWage) / workDayHrs);

	let reached = `<span class="md-font">${workDays} more work days till freedom</span>`

	$('#result').html(reached);
	// console.log(`hourlyWage: ${hourlyWage}`);
	// console.log(`remaining: ${remaining}`);

	})
}

function printDate() {
	let todayStr = new Date().toLocaleString();
	let formattedStr = todayStr.replace(", ", " ~ ");
	let timezone = ' (EST)';
	$('.date').html(formattedStr + timezone);
}

// determine the date from now
// function 

function addBorder() {
	$('#content').css('border', '2px solid cyan');
}

function getEmotionalState() {
	let statusContentId = `#${statusContent.attr('id')}`;
	// let motivationContent = $('#motivationContent');
	let struggling = $(statusContentId + ' button')[0];
	let fine = $(statusContentId + ' button')[1];
	let backBtn = $('#motivationContent .btn_previous')[0];

	let contentID;

	$(struggling).on('click', function() {
		contentID = '#motivationContent';

		console.log(`statusContent id: ${statusContentId}`);
		// console.log(``);

		hideContent(statusContent);
		showContent($('#motivationContent'))
	})

	// $(fine).on('click', function() {
	// })

	$(backBtn).on('click', function() {
		console.log(`go back`);
		clearContent();
		$('#status').click();
	})
}

function getCapsule() {
	let placeholder = ' \n In this moment: \n \n In the future: \n'
	$('textarea').attr('placeholder', placeholder);

	togglePlaceholder(); // doesn't work - bug

	// current date & time
	setInterval(printDate, 1000);

	// print 'year' if n=1
	// or 'years' if n > 1
	$('input[type=number]').on('click', function() {
		let val = 'year';
		if ($(this).val() > 1) {
			val = 'years';
		}
		$('#nYears').html(val);
	})

	printVerb();
}

// detect when dropdown option changes
// print verb suited to selected value
function printVerb() {
	let word;

	$('#letter select').change(function() {
	    // let optionSelected = $("option:selected", this);
    	let valueSelected = this.value;
    	if (valueSelected === 'email') {
    		word = 'Receive';
    	} else { // desktop notification
    		word = 'Remind me';
    	}
    	$('#verb').html(word);	
	})
}

function togglePlaceholder() {
	$('textarea').focus(function(){
		console.log('in focus');
	    if($(this).val() === placeholder){
	        $(this).attr('placeholder', '');
	    }
	});

	$('textarea').blur(function(){
	    if($(this).val() ===''){
	        $(this).attr('placeholder', placeholder);
	    }    
	});		
}

function showContent(elmt) {
	elmt.removeClass('noshow');
	elmt.addClass('show');
}
function hideContent(elmt) {
	elmt.removeClass('show');
	elmt.addClass('noshow');
}

// highlight tab clicked
// remove highlight from inactive tab
function highlightTab(thisBtn) {
	let clickedBtn = $('.btn_clicked');
	let unclickedBtn = $('.btn_unclicked');

	clickedBtn.addClass('btn_unclicked');
	clickedBtn.removeClass('btn_clicked');

	thisBtn.removeClass('btn_unclicked');
	thisBtn.addClass('btn_clicked');	
}

// hide any content that is visible
function clearContent() {
	$('#content').find('[id$="Content"]').each(function () {
			if ($(this).hasClass('show')) {
				hideContent($(this));
			}
           // $(this).removeClass('show');
           // $(this).addClass('noshow');
    });
}

/**
 * display all html elements in content area
 * @param  {[array]} elmtsArr [html elements to be added]
 * @param  {[ID]} id       [div ID]
 * @return {[]}          []
 */
function displayHTML(elmtsArr, id) {
	elmtsArr.forEach(function(elmt) {
		$('#content').append(elmt);
	})
}

function activeTab() {
	let journal = $('#journal_log');
	let dream = $('#dream_log');
	let create_entry = $('#create_entry');

	let otherLogs;

	$('#journalContent .btn_unclicked').on('click', function() {
		let tabID = $(this).attr('id'); // selected
		let otherTabID; // tab not selected
		let log;

		switch (tabID) {
			case 'journal_tab':
				log = journal;
				otherLogs = [dream, create_entry];
				printLoremIpsum();
				break;			

			case 'dream_tab':
				log = dream;
				otherLogs = [journal, create_entry];
				break;

			case 'addEntry_btn':				
				log = create_entry;
				otherLogs = [journal, dream];
				$('#journalContent').css('margin-top', '3em');
				break;
		}	

		// highlight tab clicked
		highlightTab($(this));

		// show log
		showContent(log);

		// hide previously shown log
		otherLogs.forEach(function(log) {
			hideContent(log);
		}) 
	})

	showScrollbar();
}

function hideScrollbar() {
	$('#content').css('overflow', 'hidden');
}

function showScrollbar() {
	$('#content').css('overflow', 'auto');
}

function printLoremIpsum() {
	let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

	$('.newEntry').html(str);

}