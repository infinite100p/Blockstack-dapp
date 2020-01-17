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



$(document).ready(function () {
	clickEventListener();

	setInterval(getQuotes(), 8000);

	$('.calendar').click();
	
})

/* Start Calendar */

function renderCalendar() {
  var calendarEl = document.getElementById('calendar');

  let events = [
	  				{
						title: 'Push Projects to GitHub',
						start:  '2019-10-28'
					},	  				
					{
						title: 'Go outside',
						start:  '2019-10-16'
					},					
					{
						title: 'Declutter',
						start:  '2019-10-29'
					},					{
						title: 'Apply for Jobs',
						start:  '2019-10-30'
					}
				]

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
        // left: 'prev,next today',
        // center: 'title',
        right: 'dayGridMonth, dayGridWeek, dayGridDay'
    },

	eventSources: [
	    {
	    	events: events,
		    color: 'yellow',   
		  	textColor: 'black'
	  	}
  	],

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
	let previous; // previously clicked

	$(`nav > li > ul`).on('click', function() {
		let navItem = $(this).attr('class');
		$(this).css('color', 'cyan');
		
		if (previous) {
			previous.css('color', '#fff');
			// console.log(previous.attr('class'));

			if (previous.attr('class') === 'calendar') {
				removeCalendar();
			}
		}

		previous = $(this);

		generateContent(navItem);

		console.log(`${navItem} clicked`);
	})
}

function generateContent(navItem) {
	clearContent();

	// get content for selected navItem
	let getContent = eval(`get${capitalize(navItem)}()`);
	// let getCal = eval(calendarSrc.`get${capitalize(navItem)}()`);
	// $('#content').html(getContent);

	// let resStr = '';

	// switch (navItem) {
	// 	case 'memo':
	// 		resStr = getMemo();
	// 		break;		
	// 	case 'journal':
	// 		// resStr = getJournal();
	// 		resStr = eval(`get${navItem}()`);
	// 		break;		
	// 	case 'calendar':
	// 		resStr = getCalendar();
	// 		break;
	// }

	// $('#content').html(resStr);
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
	$('#goalsContent').attr('style', 'width: 80%');
}

// Make every day count
function getCalendar() {
	// let htmlStr = `<h2 id="title">Make every day count</h2></br>`;

	$('#calendar').attr('style', 'visibility: visible');
	// $('#calendar').html(`<div id="calendar"></div>`);

	if ($('.fc-toolbar').length < 1) {
		renderCalendar();
		// calendarSrc.calendarFunctions.renderCalendar();	
	}

	$('#content').css('border', '0'); // clear content border

	// $('#content').append(`<div class="wrapper"><div class="rotateTxt"><h5>Make every day count</h5></div></div>`)
}

// hide calendar from visibility
function removeCalendar() {
	$('#calendar').attr('style', 'visibility: hidden');
}

// stay motivated, make progress
function getJournal() {
	let htmlStr = `<h8>Stay motivated</h8></br>`;

	let tab1 = `<div class="btn_default btn_unclicked" id="journal_tab">Journal</div>`;
	let tab2 = `<div class="btn_default btn_unclicked" id="dream_tab">Dreams</div>`;
	let words = `<div class="darkBackground newLine"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>`;

	let content = [tab1, tab2, words];

	addBorder();
	displayHTML(content, '');
	activeTab();
	// $('#content').html(htmlStr);
}

function getGoals() {
	let open = `<h4>`;
	let close = `</h4>`;

	$('#content').html(`<div id="goalsContent"></div>`);

	$('#goalsContent').attr('style', 'position:relative, top:-10% !important');
	$('#goalsContent h4').attr('style', 'display: block, position: absolute, top:-10%');

	$('#goalsContent').html(`<h8>2020 Actionable Goals</h8>`);

	// $('#goalsContent').html(`${open}Save up.${close}${open} Get out. ${close}${open} Find myself. ${close}${open} Find my people. ${close} ${open} Reassess life. ${close}`);

	addBorder();
}

// let kelly = `<img src="https://media1.tenor.com/images/90bb22e5413999cfa1961b5cd903af55/tenor.gif?itemid=11240688">`

// reasons to live
// personally curated artists / albums
function getMotivation() {  
	let header = `<h6 class="title">Why keep going</h6>`
	let reasons = `<p><li class="md-font"><ul>Ideation</ul><ul> Music</ul><ul> Innovation</ul></li></p>`
	let header2 = `<h6 class="title">Inspiration</h6>`
	let header3 = `<h7 class="title">If you're dead then </h7>`
	// let people = `<p><li class="md-font"><ul>Kelly Clarkson</ul><ul> </ul><ul> </ul></li></p>`
	// let people = `<li><ul>${kelly}</ul></li>`
	addBorder();
	// $('#content').html(header);
	// $('#content').append(reasons);
	// $('#content').append(header2);
	// $('#content').append(people);

	displayHTML([header, reasons, header2], '');

	 // creating: apps, song covers

}

function getBudget() {
	let goal = `<h8 class="minTarget">Minimum Target Savings: </h8> <input type="text" id="targetSaving" name="target" /> <input type="submit" value="submit" /> <p></p>`

	let form = `<div id="financial">
	    <div class="form-group">
	        <h8>Short-Term Financial Goal</h8><br/><span class="md-font">(8-hr work days)</span><p></p>
	        <label for="target_savings">Target Savings ($)</h8>
			<input type="text" id="target" class="form-control  " placeholder="xxxx"/>   

	        <label for="amount_saved">Amount Saved ($)</label>
	        <input type="text" id="saved" class="form-control " placeholder="xxx"/>
	    
	         <label for="wage">Hourly Wage ($)</label>

		        <input type="text" id="hourlyWage" class="form-control  " placeholder="xx" />
      
	        <input type="submit" id="calculateWorkDays" value="Calculate" />
	    </div>            
	</div>`

	addBorder();
	$('#content').html(form);
	
	calculateWorkDays();
}

function calculateWorkDays() {
	$('#calculateWorkDays').on('click', function() {

	let hourlyWage = $('#hourlyWage').val();
	let workDayHrs = 8;
	let target = $('#target').val();
	let saved = $('#saved').val();
	let remaining = target - saved;

	let workDays = Math.ceil((remaining / hourlyWage) / workDayHrs);

	let reached = `<span class="md-font">${workDays} more days of work till freedom</span>`

	$('#content').append(reached);
	console.log(`hourlyWage: ${hourlyWage}`);
	console.log(`remaining: ${remaining}`);

	})
}

function addBorder() {
	$('#content').css('border', '2px solid cyan');
}

function getCapsule() {
	let content = `<div id="letter"><h8 class="title">An e-letter to my future self.</h8><p></p> </br> <textarea rows="8" cols="40"></textarea> <p></p> <label>Lock & Countdown </label> <input type="submit" value="Done" /> </br> Remind me in 1 year: <select>
  <option value="email">Email</option>
  <option value="desktop">Desktop Notification</option></select></div>`

  addBorder();

  $('#content').append(content);
}

function clearContent() {
	$('#content').html('');
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
	$('.btn_unclicked').on('click', function() {
		let elmt = $(this).attr('id');

		$('.btn_clicked').addClass('btn_unclicked');
		$('.btn_clicked').removeClass('btn_clicked');

		// $(this).css('background-color', 'pink !important');
		// $(this).css('border', 'red !important');
		$(this).removeClass('btn_unclicked');
	$(this).addClass('btn_clicked');



	console.log('run activeTab')
	})
}