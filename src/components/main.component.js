import React, { Component } from 'react';
// import styles from '../../css/styles.css';
// import $ from "jquery"
// import "../test.js";
import "../visionboard.js";

import {activeTab, init, clickEventListener, getEmotionalState} from "../visionboard.js";

import $ from "jquery"

import * as externalFuncs from '../visionboard.js'


// import * as blockstack from 'blockstack';
// import * as blockstack from 'blockstack/lib/auth/appConfig.js';
// import Blockstack from 'blockstack'

class Main extends Component {
  componentWillMount() {
    // externalFuncs.init();
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.type = 'text/javascript';
    script.text = "var exports = {};"
    document.body.appendChild(script);
  }
  // componentDidMount() {
    // console.log("componentDidMount");   

    // init();
  //   const script = document.createElement("script");

  //   script.src = "./test.js";
  //   script.async = true;

  //   // document.body.appendChild(script);
  //   this.div.appendChild(script);    
  // }
    constructor(props){        
      super(props);            

      this.activeTab = this.activeTab.bind(this); 
      this.clickJournal = this.clickJournal.bind(this); 
      // this.getEmotionalState = this.getEmotionalState.bind(this); 
      // this.init = this.init.bind(this); 
      // this.clickEventListener = this.clickEventListener.bind(this); 

    }

    activeTab(){
      alert("Checked stuff");   
      activeTab(); 
      setTimeout($('#journal_tab').click(), 5000);
    }  

    clickJournal() {
     alert('on journal tab');
      // setTimeout($('#journal_tab').click(), 5000);
    }  

    // getEmotionalState() {
    //   getEmotionalState();
    // }

    init2() {
      console.log("initialized");   
      init();
      clickEventListener();
    } 

  render() {
    return (
      <div>
        {/* 	<meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'> */}
        <title />
        <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Courgette|Itim|Montserrat|Niconne" rel="stylesheet" />
        // <link href="src/styles2.css" rel="stylesheet" />
        {/* 	<link rel="stylesheet" type="text/css" href="./node_modules/@fullcalendar/core/main.css">
	<link rel="stylesheet" type="text/css" href="./node_modules/@fullcalendar/daygrid/main.css"> */}
        <div id="top" className="center"><span id="quote" /></div>
        <div id="content" className="blue_border">
          {/* Blockstack sign in */}


          {/* 		<div id="goalsContent" class="noshow">
			<h8 class="title"></h8> <br>
			<ul>
			<li>Empty</li>
			<li>Hopeless</li>
			<li></li>
			<li></li>
			</ul>		
			<p></p>

			<h8 class="title">Lifelong Goals</h8><br>
			<ul>
			<li>Financial independence</li>
			<li>Repay debt</li>
			<li>Fund retirement</li>
			<li>R.I.P</li>
			</ul>		
		</div> */}		
          <div id="goalsContent" className="noshow">
            <h8 className="title"><span id="thisYear">2020</span> Vision Board</h8> 
            <i className="fa fa-list-ul" aria-hidden="true" />
            <div className="container">
              <div className="row">
                <div id="newgoal" data-ph="cool" className="goal col-sm" contentEditable="true" placeholder="">
                  {/* <img class="tags-icon" src="imgs/tags-icon.png"/> */}
                  {/* <i class="fa fa-tags" aria-hidden="true"></i> */}
                  create vision board
                </div>
                <div className="goal col-sm">
                  <i className="fa fa-tags" aria-hidden="true" />
                  + new goal
                </div>		    
                <div className="goal col-sm">
                  <i className="fa fa-tags" aria-hidden="true" />
                  + new goal
                </div>		    
                <div className="goal col-sm">
                  <i className="fa fa-tags" aria-hidden="true" />
                  + new goal
                </div>		    
                {/* 		    <div class="goal col-sm">
		    	<i class="fa fa-tags" aria-hidden="true"></i>
		      + new goal
		    </div>		    
		    <div class="goal col-sm">
		    	<i class="fa fa-tags" aria-hidden="true"></i>
		      career 6
		    </div> */}
              </div>		  
              <div className="row">
                <div className="goal col-sm">
                  <i className="fa fa-tags" aria-hidden="true" />
                  + New Goal
                </div>
                <div className="goal col-sm">
                  <i className="fa fa-tags" aria-hidden="true" />
                  + small goal
                </div>		    
                <div className="goal col-sm">
                  <i className="fa fa-tags" aria-hidden="true" />
                  + small goal
                </div>	  	    
                <div className="goal col-sm">
                  <i className="fa fa-tags" aria-hidden="true" />
                  + New Goal
                </div>
                {/* 		    <div class="goal col-sm">
		    	<i class="fa fa-tags" aria-hidden="true"></i>
		     + new goal
		    </div>		    
		    <div class="goal col-sm">
		    	<i class="fa fa-tags" aria-hidden="true"></i>
		    + new goal
		    </div> */}
              </div>		  
              <div className="row">
                <div className="goal col">
                  + BIG GOAL
                </div>
                <div className="goal col">
                  + BIG GOAL
                </div>
              </div>
              {/* 		  <div class="row">
	  	    <div class="goal col">
		      + BIG GOAL
		    </div>
		    <div class="goal col">
		      + BIG GOAL
		    </div>
		  </div> */}
            </div>
            {/* 			<br/>
			<ul>
			<li>Save</li>
			<li>Get out</li>
			<li>Hustle</li>
			<li>Reassess life</li>
			</ul>

			<p></p>	

			<h8 class="title">Lifelong Goals</h8><br>
			<ul>
			<li>Work &middot; Save &middot; Invest</li>
			<li>F.I.</li>
			<li>Trust fund</li>
			<li>R.I.P</li>
			</ul> */}
          </div>
          {/* CALENDAR */}
          {/* Make every day count */}
          <div id="calendarContent">
            {/* <div id="#fc_calendar"></div> */}
          </div>
          {/* PERSONAL FINANCE */}
          <div id="budgetContent" className="noshow">
            <div id="financial">
              <div className="form-group">
                <h8>Short-Term Financial Goal</h8>
                <br />
                {/* <i class="fas fa-sort-up"> </i> */}
                {/* <i class="fas fa-sort-down"> </i> */}
                {/* <i class="fa fa-minus"> &nbsp; </i> */}
                <span className="md-font">(<span id="dailyWorkHrs"> 8</span>-hr work days) </span> 
                <p>Current balance: $50</p>
                <p>Target savings: 2000</p>
                <p>$1500</p>
                {/* <i class="fa fa-plus"> &nbsp;</i> */}
                <p />
                {/* 			        <label for="target_savings">Target Savings ($)</h8>
					<input type="text" id="target" class="form-control  " placeholder="xxxx" value="2000"/>   

			        <label for="amount_saved">Amount Saved ($)</label>
			        <input type="text" id="saved" class="form-control " placeholder="xxx"/>
			    
			         <label for="wage">Hourly Wage (USD)</label>

				        <input type="text" id="hourlyWage" class="form-control  " placeholder="xx" value="15"/>
		      
			        <button type="submit" id="calculateWorkDays" value="Calculate">Calculate</button>	 */}		        
              </div> 
              <i className="fa fa-edit" aria-hidden="true" />		    	           
              <p id="result" />
            </div>
          </div>
          {/* JOURNAL & DIARY */}
          {/* Track progress */}
          <div id="journalContent" className="noshow">
            <div className="btn_default btn_unclicked" id="journal_tab" onClick={activeTab}>Journal</div>
            <div className="btn_default btn_unclicked" id="dream_tab" onClick={activeTab}>Dreams</div>
            <div className="btn_sm round_border btn_unclicked" id="addEntry_btn"> <i className="fa fa-plus" /> </div>
            {/* Journal */}
            <div id="journal_log" className="newLine noshow">
              <div className="journal_entry">
                <span className="timeStamp">mm.dd.yy</span>
                <p className="newEntry" /> 
                <span className="tag round_border">productive</span>				
                <span className="tag round_border">sane</span>
                <span className="tag round_border">smallsteps</span>
              </div>
              <p />
              <div className="journal_entry">
                <span className="timeStamp">mm.dd.yy</span>
                <p className="newEntry" /> 
                <span className="tag round_border">trapped</span>
                <span className="tag round_border">stifled</span>
                <span className="tag round_border">anxious</span>
                {/* <span class="tag round_border"></span> */}
              </div>
              <p />
              <div className="journal_entry">
                <span className="timeStamp">mm.dd.yy</span>
                <p className="newEntry" />
                <span className="tag round_border">nocturnal</span>
                <span className="tag round_border">undisturbed</span>
                <span className="tag round_border">empty</span>
              </div>
            </div>
            {/* Dreams */}
            <div id="dream_log" className="darkBackground newLine noshow">
              <div className="dream_entry">
                <span className="timeStamp">mm.dd.yy - 11am</span>
                <p>Dream entry 1</p>
                <span className="tag round_border">neardeath</span> 
                <span className="tag round_border">relief</span> 
                <br />
              </div>
              <div className="dream_entry">
                <span className="timeStamp">mm.dd.yy - 1pm</span>
                <p>Dream entry 3</p>
                <span className="tag round_border">calm</span>
                <br />
              </div>					
              <div className="dream_entry">
                <span className="timeStamp">mm.dd.yy - 7pm</span>
                <p>Dream entry 2</p>
                <span className="tag round_border">noescape</span><br />
                <span className="tag round_border">despair</span>
                <span className="tag round_border">heartpounding</span>
                <br />			
              </div>
              <div className="dream_entry">
                <span className="timeStamp">mm.dd.yy - 5am</span>
                <p>Dream entry 4</p>
                <span className="tag round_border">trapped</span>
                <span className="tag round_border">crying</span><br />
                <span className="tag round_border">hardtobreathe</span>				
              </div>		
              <div className="dream_entry">
                <span className="timeStamp">mm.dd.yy - 2pm</span>
                <p>Dream entry 5</p>
                <span className="tag round_border">nostalgia</span>
              </div>
              <div className="dream_entry">
                <span className="timeStamp">mm.dd.yy - 4am</span>
                <p>Dream entry 6</p>	
              </div>
              <div className="dream_entry">
                <span className="timeStamp">mm.dd.yy - 5am</span>
                <p>Dream entry 7</p>
              </div>	
              <div className="dream_entry">
                <span className="timeStamp">mm.dd.yy - 6pm</span>
                <p>Dream entry 8</p>
              </div>
            </div>
            {/* Create new entry */}
            <div id="create_entry" className="noshow">
              <p />
              <textarea rows={8} cols={40} value defaultValue={""} /> 
              <p /> 
              <input type="radio" name="type" defaultValue="journal" /> Journal
              <input type="radio" name="type" defaultValue="dream" /> Dream
              <br />
              {/* 			 	<select>
					<option value="1">1</option>
					<option value="2">2</option>
				</select> */}
              <input className="btn-primary" type="submit" defaultValue="Save Log" />
              {/* <br>				 */}
            </div>
          </div>
          {/* HELP */}
          {/* current state */}
          <div id="statusContent" className="noshow">
            <h9 /><p />
            <h6 className="title pinkBorder">I am...</h6><br />
            <p />
            <button id="state_suicidal" className="btn_default btn_unclicked" onClick={getEmotionalState}>Struggling</button>	&nbsp;			
            <button id="state_fine" className="btn_default btn_unclicked" onClick={getEmotionalState}>Alright</button>
            <p />	
          </div>			
          {/* MOTIVATION */}
          {/* reasons to keep going */}
          <div id="motivationContent" className="noshow">	
            <h9 /><p />
            {/* <h6 class="title pinkBorder">Choose one:</h6><br> */}
            {/* 			<h9></h9><p></p>
			<h6 class="title pinkBorder">Feeling:</h6><br>
				<ul>
					<li>empty</li>
					<li>unmotivated</li>
					<li>lonely</li>
					<li>anxious</li>
					<li>hopeless</li>
					<li>trapped</li>
				</ul>
			<p></p>
			<button class="btn-primary">Help</button>	 */}
            <div className="btn_previous">
              <i className="fa fa-chevron-circle-left"><span /></i>
            </div> 
            <h6 className="title pinkBorder">Need Inspiration</h6>
            <p />
            <ul id="inspirationList">
              <li>
                {/* <img class="icon" src="imgs/lightbulb-icon.png"/> */}
                <a>Ideation</a>
              </li>
              <li>
                {/* <img class="icon" src="imgs/video-icon.png"/>		 */}
                <a>Media</a>
              </li>
              <li><a>Innovation</a></li>
              <li><a>People</a></li>	
              <li><a>Podcasts</a></li>	
            </ul><p />
            <h6 className="title pinkBorder">Bucket List</h6>
            <p />
            <ul>
              <li />
              <li />
              <li />
              <li> </li>	
            </ul>					
          </div>	
          <div id="capsuleContent" className="noshow">
            <div id="letter">
              <h6 className="title pinkBorder">An e-letter to my future self.</h6>
              <p /> 
              <div className="date" />
              <br /> 
              <textarea rows={8} cols={40} value defaultValue={""} /> 
              <p /> 
              <span id="verb">Receive</span> in 
              <input type="number" defaultValue={1} min={1} max={10} />
              <span id="nYears">year</span> 
              <p />
              <select>
                <option value="email">Email</option>
                <option value="desktop">Desktop Notification</option></select>
              <p />
              <label /> 
              <input className="btn-primary" type="submit" defaultValue="Lock Away" />			  	
            </div>
          </div>		
        </div>
        <nav> 
          {/* BADGES */}
          {/* NAV */}
          <ul onclick="clickJournal">
            {/* <ul class="memo">Memo</ul> */}
            <li id="goals">Plan</li>
            <li id="calendar">Days Ahead</li> {/* calendar */}
            {/* <ul class="getaway">Getaway</ul> */}
            <li id="budget">Budget</li>
            <li id="journal" onclick="clickJournal()">Journal / Dream Log</li>
            <li id="status">Keep Going</li>
            <li id="capsule">Time Capsule</li>
            <li id="notification">
              <i className="fa fa-bell" aria-hidden="true" />
            </li>
          </ul>
        </nav>
        {/*  */}
        {this.init2()}  
      </div>
    // <div className="App" ref={el => (this.div = el)}></div>      
    );
  }
}

export default Main;