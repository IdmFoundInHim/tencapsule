<!DOCTYPE html>
<!-- The Ten Capsule (C) 2018
  Created as a division of Surprise Ministries by Isaac M.-->
<html lang="en-US">
  <head>
    <title>The Ten Capsule</title> 
    <link rel='stylesheet' href='css/home.css' />
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
    <link rel='shortcut icon' href='favicon.png'/>
    <meta charset='utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1'>
  </head>
  <body class='nojs'>
    <header id='header'>
      <a href='/'><img src='images/Logo.1.2.png' alt='Go to Homepage' style='border: 0;' class='logo'/></a>
      <span id='primary-show' class='showifjs mobileonly'>☰</span>
      <nav id='primary' class='headmenu'>
        <span class='hideifjs'>☰</span>
        <a href='iSeries.html' id='Ilink'>Intro to <br/>the Bible&nbsp;▼</a>
        <nav id='secondaryI' class='headmenu secondary'>
          <a href='capsule1/default.html'>Capsule 1</a>
          <a href='capsule2/default.html'>Capsule 2</a>
        </nav>
        <a href='capsule3/default.html'>Capsule 3</a>
        <a href='gospel/default.html'>The Gospel</a>
      </nav>
    </header>
    <div id='slogan'><h1 class='attention'>You are one step away from a new life</h1></div>
    <div id='carousel'>
      <div id='iSCont'><a href='capsule1/default.html'><div id='iSPic'>
        <div class='txtContain'>
          <h2 style='text-align: left;'>New to the Bible?</h2>
          <p>We can help.  Start our Intro to the Bible series today.</p>
        </div>
      </div></a></div>
      <div id='sSCont'><a href='gospel/default.html'><div id='sSPic'>
        <div class='txtContain'>
          <h2 style='text-align: left;'>Are you going to heaven?</h2>
          <p>If you are not sure, check out the Capsule view of the Gospel.</p>
        </div>
      </div></a></div>
      <div id='pSCont'><a href='capsule3/default.html'><div id='pSPic'>
        <div class='txtContain'>
          <h2 style='text-align: left;'>Want to know God better?</h2>
          <p>Reading the Bible is a great way to start.  Discover His Word with the God's Plan series.</p>
        </div>
      </div></a></div>
    </div>
    <div id='intro'>
      <p>The Ten Capsule is a program that guides you through the main points of the Bible. If you have little or no earlier experience with the Bible, <a href='http://www.biblica.com/en-us/bible/bible-faqs/what-is-the-bible/'>click here</a> for an explanation of what the Bible is and why it is important. In other words, it gives a &ldquo;capsule view&rdquo; of the Bible&rsquo;s message. You will read ten sections of the Bible and an interpretation of the passage in each &ldquo;capsule&rdquo; which is a set of lessons. You can always work through the capsules on your own time.</p>
      <p>Before you begin, I recommend you have a physical Bible with you or that you can access a Bible website like <a href='https://www.biblegateway.com/'>BibleGateway</a>. Certain capsules will have the Bible excerpt on the webpage. In that case, the verses may be in many different versions due to copyright requirements. I recommend the NIV or NIrV for readability. <!--The concept of different versions/translations of the Bible is explained here.--></p>
      <p>My disclaimer is this: The Bible is written by God and every chapter, verse, word, and letter is important. These capsules could never explain every point in the Bible. These capsules help you to understand the Bible&rsquo;s main purpose: to tell the world about how God deeply loves us.</p>
    </div>      
    <div id='query'>
      <div id='phase1'>
        <p class='showifjs'>If you aren't sure where to start, click here</p>
        <p class='hideifjs'>Enable JavaScript to get recommendations</p>
      </div>
    </div> 
    <div id='rec_storage' style='display:none;'>NONE</div> <!--Stores quiz results for jQuery retrieval-->
    <div id='curtain'></div>
    <div id='query-box'>  
      <div id='phase2'>
        <p>Do you believe Jesus has saved you from the punishment for your sins?  If you are not sure or want to be sure, <a href='gospel/default.html'>click here</a>.</p>
        <div id='p2y'>Yes</div> <!--To #saved-->
        <div class='c1r'>I have no idea what you said</div> <!--To #c1rec-->
        <div id='p2n'>No</div>    <!--To #search-->            
      </div>
      <div id='saved' class='phase3'>
        <p>Have you read your Bible at all (including at church or school) in the last two months?</p>
        <div id='p3y'>Yes</div> <!--To #wants-->
        <div class='c2r'>No, but I used to</div> <!--To #c2rec-->
        <div class='c1r'>No, I never have</div> <!--To #c1rec-->
      </div>
      <div id='search' class='phase3'>
        <p>Who is Jesus?</p>
        <div class='rsr'>God's Son who died to save the world and came back to life.</div> <!--To #rtsrec-->
        <div class='c2r'>People have told me he died and came back to life, but I don't fully believe that.</div> <!--To #c2rec-->
        <div class='c1r'>Someone Else</div> <!--To #c1rec-->
      </div>
      <div id='wants' class='phase4'>
        <p>What do you want to accomplish?</p>
        <div class='c1r'>Learn what the Bible is all about</div> <!--To #c1rec-->
        <div class='c2r'>Really Understand why the Bible is important</div> <!--To #c2rec-->
        <div class='c3r'>Start reading my Bible on my own</div> <!--To #c3rec-->
      </div>
      <div id='c1rec' class='result'>
        <p>I recommend starting at Capsule 1</p>
        <a href='capsule1/default.html'><div id='c1recbutton' class='button'>
          <h3>Capsule 1</h3>
        </div></a>
      </div>
      <div id='c2rec' class='result'>
        <p>I recommend starting at Capsule 2</p>
        <a href='capsule2/default.html'><div id='c2recbutton' class='button'>
          <h3>Capsule 2</h3>
        </div></a>
      </div>
      <div id='c3rec' class='result'>
        <p>I recommend starting at Capsule 3</p>
        <a href='capsule3/default.html'><div id='c3recbutton' class='button'>
          <h3>Capsule 3</h3>
        </div></a>
      </div>
      <div id='rtsrec' class='result'>
        <p>I recommend reading about the Gospel</p>
        <a href='gospel/default.html'><div id='rtsrecbutton' class='button'>
          <h3>The Gospel</h3>
        </div></a>
      </div>
      <div id='close-button' class='button interrupt'>
        X Close
      </div>
      <div id='reset-button' class='button interrupt'>
        ↺ Reset
      </div>
    </div>  
    <div id='links'>
      <h3 class='attention'>All Capsules</h3>
      <div id='introSeries'>
        <h2>Intro to the Bible</h2>
        <p>This is the Intro to the Bible Series.  It goes through the basic plotline of the Bible.</p>
        <div id='c1button' class='button'>
          <h3><a href='capsule1/default.html'>Capsule 1</a></h3>
        </div>
        <p>Capsule 1 is a brief summary of the Bible's main plot using short Scripture passages.</p>
        <div id='c2button' class='button'>
          <h3><a href='capsule1/default.html'>Capsule 2</a></h3>
        </div>
        <p>Capsule 2 is a basic summary of the Bible's highlights.</p>
      </div>
      <div id='specialSeries'>
        <h2>The Good News of Jesus Christ</h2>
        <p>The Bible exists to tell the gospel.  It is the message of God restoring this broken world to perfection and making life into what it was meant to be.   The capsule view of the gospel will explain the lifechanging power of Jesus in ten short passages.</p>
        <div id='rtsbutton' class='button'>
          <h3><a href='gospel/default.html'>The Gospel</a></h3>
        </div>
      </div>
      <div id='planSeries'>
        <h2>God's Plan</h2>
        <p>The God's Plan Series is made of three capsules.  The first focuses on God's first relationship with man.  The second focuses on the coming of Jesus to redeem the world.  The third focuses on how we can build a relationship with Him through Jesus</p>
        <div id='c3button' class='button'>
          <h3><a href='capsule3/default.html'>Capsule 3</a></h3>
        </div>
        <p>Capsule 3 is an overview of the history of the Israelite nation.  The Israelites are God's chosen people for first revealing the Savior to the world.</p>
        <!--<div id='c4button' class='button'>
          <h3><a href='capsule4/default.html'>Capsule 4</a></h3>
        </div>
        <p>Capsule 4 is...</p>
        <div id='c5button' class='button'>
          <h3><a href='capsule5/default.html'>Capsule 5</a></h3>
        </div>
        <p>Capsule 5 is...</p>-->
      </div>
      <h3 class='attention'>The God's Plan series will be completed with capsules 4 and 5 coming soon.</h4>         
    </div>
    <div id='disclaim'>
      <p>Another disclaimer:  This domain contains many external links.  I cannot make any guarantees on the content of other domains.  I also do not claim any official endorsements on these websites.</p>
    </div>
    <p style='font-size: 1rem; text-align: center;'><a href='http:/github.com/IdmFoundInHim/tencapsule'>Rebound Release (18.08.16) - See it on GitHub!</a></p>
    <script src='denoscript.js'></script>
    <script src='navbar.js'></script>
    <script src='home.js'></script>
  </body>
</html>
