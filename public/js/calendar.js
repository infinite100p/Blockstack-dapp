// export functions
// module.exports.calendarFunctions = {
//   renderCalendar
// }

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

function renderCalendar() {
  var calendarEl = document.getElementById('calendar');

  let events = {
					title: 'Event with very Long Title',
					start: '2019-04-13T14:30:00'
				}

  var calendar = new Calendar(calendarEl, {
    plugins: [ dayGridPlugin, bootstrapPlugin, interactionPlugin, timegridPlugin, resourceTimeGridPlugin ],
    themeSystem: 'bootstrap',

    defaultView: 'dayGridWeek',
    displayEventTime: false,

	  views: {
	    timeGridFourDay: {
	      type: 'timeGrid',
	      duration: { days: 5 },
	      buttonText: '5 days'
	    },

	    dayGridWeek: { 
	    	height: 'auto',
	    	contentWidth: 300
	    }
	  },

    header: {
        // left: 'prev,next today',
        // center: 'title',
        right: 'dayGridMonth, dayGridWeek, dayGridDay, timeGridFourDay'
    },

    events: [events],

  eventRender: function(info) {
    var tooltip = new Tooltip(info.el, {
      title: info.event.extendedProps.description,
      placement: 'top',
      trigger: 'hover',
      container: 'body'
    });
  },    

    height: 50,
    editable: true,
    eventLimit: true,
    schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source'
  });

  calendar.render();
  // calendar.updateSize();	
}

// Make every day count
function getCalendar() {
	// let htmlStr = `<h2 id="title">Make every day count</h2></br>`;

	$('#content').html('');
	$('#calendar').attr('style', 'visibility: visible');
	// $('#calendar').html(`<div id="calendar"></div>`);

	if ($('.fc-toolbar').length < 1) {
		renderCalendar();	
	}
}