let devInput = {};

devInput.tutti = {
  baseURL: "https://api.airtable.com/v0/appGkvqi0gbFKeGHa",
  apiToken: "patV7WvhkbUFrTCPK.19cde1b5475cb1e89127bdb2e1d9eb89e6a75dd4ba42feb6618b85fdec5adeec"
}

devInput.page = `
<!DOCTYPE html>
<html>
    <head>
        <title>Selection Details</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" href="/Content/favicon.ico"/>
        <meta charset="utf-8" />        
     
        <link href="/content/datatables-1.9.0/media/css/jquery.datatables.css" rel="stylesheet" type="text/css" />
        <link href="/Content/ColVis-1.0.7/media/css/ColVis.css" rel="stylesheet" type="text/css" />
        <link href="/Content/TableTools-2.0.2/media/css/TableTools.css" rel="stylesheet" type="text/css" />
        <link href="/Content/jquery-ui-1.9.1/themes/smoothness/jquery-ui-1.9.1.custom.css" rel="stylesheet" type="text/css" />
        <link href="/Content/media/css/1280grid.css" rel="stylesheet" type="text/css"/>

        <script src="/Scripts/jquery-1.8.3.min.js" type="text/javascript"></script>
        <script src="/Scripts/jquery-ui-1.9.1.min.js" type="text/javascript"></script>
        <script src="/Scripts/modernizr-1.7.min.js" type="text/javascript"></script>
        <script src="/Scripts/jquery.dataTables.min.js" type="text/javascript"></script>       
        <script src="/Scripts/jquery.dataTables.rowReordering.js" type="text/javascript"></script>   
        <script src="/Scripts/jquery.jeditable.js" type="text/javascript"></script>   
        <script src="/Scripts/jquery.dataTables.editable.js" type="text/javascript"></script>    
        <script src="/Scripts/jquery.dataTables.colVis.min.js" type="text/javascript"></script>      
        <script src="/Scripts/TableTools.min.js" type="text/javascript"></script>     
        <script src="/Scripts/jquery.validate.min.js" type="text/javascript"></script>
        <script src="/Scripts/jquery.validate.unobtrusive.min.js" type="text/javascript"></script>                
        <script src="/Scripts/site.js" type="text/javascript"></script>   
   
        
    <link href="/Content/jplayer/blue.monday/jplayer.blue.monday.css" rel="stylesheet" type="text/css"/>
    <script src="/Scripts/jquery.jplayer.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $("#attachments-table").dataTable({
               "sDom": '<"top">t<"bottom">',
               "bAutoWidth": false,
               "aoColumnDefs": [{ "bSortable": false, "aTargets": [0, 1, 2, 3] },
                                { "sWidth": "75px", "aTargets": [0]}],
               "iDisplayLength": 1000
           });
           $("#player").jPlayer({
                swfPath: "/Content/jplayer",
                supplied: "mp3",
                wmode: "window",
                nativeSupport:false
            });
        });
    </script>
   
    
        <link href="/Content/media/css/Site.css" rel="stylesheet" type="text/css" />
        <link href="/Content/media/css/Encore.css" rel="stylesheet" type="text/css" />  
        <META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
    </head>
<body class="selection-details">
    <div class="page">
        <header>
            <div id="title">
                <img src="/Content/media/images/mtc-organ-small-white.png" />
                <h1>Encore
                	
                </h1>
            </div>
            <div id="logindisplay">
                    Welcome <strong>Brian Mathias</strong>  
    [ <a href="/Account/LogOff">Log Off</a> ]

            </div>
            

            <nav>
                <ul id="menu">
                        <li class=""><a href="/">Calendar</a></li>
                        <li class=""><a href="/Events">Events</a></li>
                        <li class="selected"><a href="/Selections">Selections</a></li>
                        <li class=""><a href="/Library">Library</a></li>
                        <li class=""><a href="/Personnel">Personnel</a></li>
                        <li class=""><a href="/Admin">Admin</a></li>
                </ul>
            </nav>
        </header>
        <div id="main">            
            




<div class="page-title"><h2>Selection Details</h2></div>
<div class="container_12">

    <div class="grid_6">       
        <div class="display-wrap">
            <div class="display-label">Title</div>
            <div class="display-field">
                Hawak Kamay
            </div>
        </div>

        <div class="display-wrap">
            <div class="display-label">Notes</div>
            <div class="display-field">
                Philippines 2024
            </div>
        </div>
        <div class="display-wrap">
            <div class="display-label">Description</div>
            <div class="display-field">
                
            </div>
        </div>
        <div class="display-wrap">
            <div class="display-label">Selection Type</div>
            <div class="display-field">
                Choir
            </div>
        </div>
        <div class="display-wrap">
            <div class="display-label">Library Number</div>
            <div class="display-field">
                <a href='/Library/EditLibraryNumber/145762'>1896</a>
            </div>
        </div>
        <div class="display-wrap">
            <div class="display-label">Composer</div>
            <div class="display-field">
                Yeng Constantino
            </div>
        </div>
        <div class="display-wrap">
            <div class="display-label">Arranger</div>
            <div class="display-field">
                Ryan Murphy
            </div>
        </div>
        <div class="display-wrap">
            <div class="display-label">Organist</div>
            <div class="display-field">
                
            </div>
        </div>
        <div class="display-wrap">
            <div class="display-label">Voicing</div>
            <div class="display-field">
                SATB
            </div>
        </div>
        <div class="display-wrap">
            <div class="display-label">Accompaniment</div>
            <div class="display-field">
                Orch Own
            </div>
        </div>
        <p>
             <a class="ixf-button&#32;primary" href="/Selections">Back to List</a> 
        </p>
    </div>
    <div class="grid_6">


        <div class="display-wrap">
            <div class="display-label">Publisher</div>
            <div class="display-field">
                <a href="/Publishers/Details/329">Arrangement Unpublished</a>
            </div>
        </div>
        <div class="display-wrap">
            <div class="display-label">Licensing Entity</div>
            <div class="display-field">                               
                
            </div>
        </div>
        <div class="display-wrap">
            <div class="display-label">Collection</div>
            <div class="display-field">
                
            </div>
        </div>
        <div class="display-wrap">
            <div class="display-label">Lyricist</div>
            <div class="display-field">
                
            </div>
        </div>
        <div class="display-wrap">
            <div class="display-label">Replacement Cost</div>
            <div class="display-field">
                $5.00
            </div>
        </div>
        <div class="display-wrap">
            <div class="display-label">Number of Copies</div>
            <div class="display-field">
                450
            </div>
        </div>
        <div class="display-wrap">
            <span style="font-weight: bold; margin-right: 5px;">Keys:&nbsp;&nbsp;&nbsp;&nbsp;Beginning</span>
            Bb major
            <span style="font-weight: bold; margin-left: 12px; margin-right: 5px;">Ending</span>
            Bb major
        </div>
        <div class="display-wrap">
            <div class="display-label">Performance Time</div>
            <div class="display-field">
                
            </div>
        </div>
        <div class="display-wrap">
            <div class="display-label">Orchestration</div>
            <div class="display-field">
                
            </div>
        </div>
        <div class="display-wrap">
            <div class="display-label">Subjects</div>
            <div class="display-field">
                
            </div>
        </div>
    </div>
    <div class="clear"></div>
    <div class="grid_6">
        <h3>Attachments</h3>
        <table id="attachments-table">
            <thead>
                <tr>
                    <th></th>
                    <th>FileName</th>
                    <th>Size</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td><a href="/Attachment/Download/5456d389-dbed-4d77-bc59-8f5cb56f91dd" class="sprite download icon" title="Download" attachmentid="5456d389-dbed-4d77-bc59-8f5cb56f91dd" require-agreement="False" style="margin-right: 20px; margin-left: 12px;">Download</a>
                            <a href="/Attachment/Open/5456d389-dbed-4d77-bc59-8f5cb56f91dd" target="blank" class="sprite folder_open icon open-attachment" title="Open" mimetype="application/pdf" fileName="1896 Hawak Kamay SATB.pdf" attachmentId="5456d389-dbed-4d77-bc59-8f5cb56f91dd" require-agreement="False" >Open</a></td>
                        <td>1896 Hawak Kamay SATB.pdf</td>
                        <td>435.4kB</td>
                        <td></td>
                    </tr>
            </tbody>
        </table>
        <div id="player" class="jp-jplayer"></div>
        <div id="jp_container_1" class="jp-audio" style="display:none;">
            <div class="jp-type-single">
                <div class="jp-gui jp-interface">
                    <ul class="jp-controls">
                        <li><a href="javascript:;" class="jp-play" tabindex="1">play</a></li>
                        <li><a href="javascript:;" class="jp-pause" tabindex="1">pause</a></li>
                        <li><a href="javascript:;" class="jp-stop" tabindex="1">stop</a></li>
                        <li><a href="javascript:;" class="jp-mute" tabindex="1" title="mute">mute</a></li>
                        <li><a href="javascript:;" class="jp-unmute" tabindex="1" title="unmute">unmute</a></li>
                        <li><a href="javascript:;" class="jp-volume-max" tabindex="1" title="max volume">max volume</a></li>
                    </ul>
                    <div class="jp-progress">
                        <div class="jp-seek-bar">
                            <div class="jp-play-bar"></div>
                        </div>
                    </div>
                    <div class="jp-volume-bar">
                        <div class="jp-volume-bar-value"></div>
                    </div>
                    <div class="jp-time-holder">
                        <div class="jp-current-time"></div>
                        <div class="jp-duration"></div>
                        <ul class="jp-toggles">
                            <li><a href="javascript:;" class="jp-repeat" tabindex="1" title="repeat">repeat</a></li>
                            <li><a href="javascript:;" class="jp-repeat-off" tabindex="1" title="repeat off">repeat off</a></li>
                        </ul>
                    </div>
                </div>
                <div class="jp-title">
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div class="jp-no-solution">
                    <span>Update Required</span>
                    To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
                </div>
            </div>
        </div>    </div>
    <div class="grid_6">
        <h3>Last Performed</h3>

<table class="data-table-last-performed">
    <thead>
        <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Event</th>
            <th>Duration</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>    </div>
</div>
<div id="agreement-text" style="display: none;">The use of this attachment is limited.  I acknowledge that immediately after approved use of this item I will destroy it.</div>



        </div>
    </div>
    <p style="text-align:right;color:Black;padding-right:36px;font-style:italic;">Release 2.1.0.12</p>
</body>
</html>

`;


// -------------------------------------------------------------------------
// Utility Functions -------------------------------------------------------
// -------------------------------------------------------------------------


const ANONYMOUS_REGEX = /(Spiritual|Traditional|Unknown|Various|[A-Za-z]* Melody|[A-Za-z]* Song)/;


function formatKey(key) {

  let regex = /([ABCDEFG])([b#])? (major|minor)/;
  let matches = key.match(regex);
  
  if (matches) {
    
    let letter = matches[1];
  
    let modifier = "";
    let modifierMatch = matches[2];
    if (modifierMatch === "#") { modifier = "-sharp"; }
    if (modifierMatch === "b") { modifier = "-flat"; }
  
    let mode = matches[3];
    if (mode === "major") { mode = "Major"; }
    if (mode === "minor") { mode = "Minor"; }
  
    return letter + modifier + " " + mode;

  } else {
    return "";   
  } 
}



// -------------------------------------------------------------------------
// Workflow ----------------------------------------------------------------
// -------------------------------------------------------------------------


let input = args.shortcutParameter || devInput;
let workflow = {};
workflow.tutti = input.tutti;
workflow.page = input.page;
workflow.pageFields = {};
workflow.composers = [];
workflow.arrangers = [];

// Replace HTML character entities
workflow.page = workflow.page.replace(/&quot;/g, '\"');
workflow.page = workflow.page.replace(/&#(\d+);/g, function(match, dec) {
  return String.fromCharCode(dec);
});

let AirConnector = importModule("AirConnector 17.0");
let Tutti = new AirConnector(input.tutti.baseURL, input.tutti.apiToken);


// Extract selection title
let title = workflow.page.match(/<div class="display-label">Title<\/div>\s*<div class="display-field">\s*([^\n<]*)\s*<\/div>/);

if (title) { 
  workflow.pageFields.title = title[1]; }
else { 
  workflow.error = "Error: No title field could be found on this page. Is this an Encore selection detail page?";
  return workflow;  
}


// Extract selection notes
let notes = workflow.page.match(/<div class="display-label">Notes<\/div>\s*<div class="display-field">\s*([^\n<]*)\s*<\/div>/);
if (notes) { workflow.pageFields.notes = notes[1]; }


// Extract selection Encore number
let encoreNumber = workflow.page.match(/<div class="display-label">Library Number<\/div>\s*<div class="display-field">\s*<a href='[^']*'>([^<]*)<\/a>/);

if (encoreNumber) { 
  
  workflow.pageFields.encoreNumber = encoreNumber[1]; 

  // Check to see if a record with this Encore number already exists in Tutti
  let existingRecords = await Tutti.getRecordsByFieldAsync("Repertoire", "Encore Number", [workflow.pageFields.encoreNumber]);

  if (existingRecords.records.length > 0) {
  
    for (let record of existingRecords.records) {
      
      if (record.fields.Title === workflow.pageFields.title) {
        
        workflow.error = "Error: a record with this Encore number and title already exists in Tutti";
        return workflow;      
      }
    }
  }
}


// Extract start and end keys
let keys = workflow.page.match(/<div class="display-wrap">\s*<span[^>]*>Keys:[^<]*<\/span>\s*([^\n]*)\s*<span[^>]*>Ending<\/span>\s*([^\n]*)\s*<\/div>/);
if (keys) {  
  if (keys[1]) { workflow.pageFields.startKey = formatKey(keys[1]); }
  if (keys[2]) { workflow.pageFields.endKey = formatKey(keys[2]); }  
}

// Extract selection type and change it to match Airtable instrumentation types
let type = workflow.page.match(/<div class="display-label">Selection Type<\/div>\s*<div class="display-field">\s*([^\n<]*)\s*<\/div>/);
if (type) {
  type = type[1];
  if (type === "Bells/Choir") { type = "Bells & Choir"; }
  if (type === "Organ") { type = "Organ Solo"; }
  if (type) { workflow.pageFields.instrumentation = type; }
}

// Extract composer name
let composerName = workflow.page.match(/<div class="display-label">Composer<\/div>\s*<div class="display-field">\s*([^\n<]*)\s*<\/div>/);

if (composerName) {
  
  workflow.pageFields.composer = composerName[1];
  let composerReview = "";
  
  // Separate multiple composer attributions
  let composerSplit = composerName[1].split(/(?:,? ?& ?| and |, ?)/);
  
  for (let composer of composerSplit) {
    
    // Check to see if the composer already exists in Tutti; 
    // If so, get ID, and if not, prepare for user review before adding
    
    let composerSearch = await Tutti.getRecordsByFieldAsync("Composers", "Name", composer);
    
    if (composerSearch.records.length > 0) {
      
      workflow.composers.push(composerSearch.records[0].id);
    
    } else {
    
      let firstName, lastName;
      
      // Check for anonymous attributions
      if (composer.match(ANONYMOUS_REGEX)) {
        firstName = composer;
        lastName = "";
      } else {
        let nameSplit = composer.lastIndexOf(" ");
        firstName = composer.substring(0, nameSplit);
        lastName = composer.substring(nameSplit + 1);
      }
      
      composerReview += "First Name: " + firstName + "\n";
      composerReview += "Last Name: " + lastName + "\n\n";
    
    }   
  }
  
  if (composerReview) { workflow.composerReview = composerReview; }
}


// Extract arranger name

let arrangerName = workflow.page.match(/<div class="display-label">Arranger<\/div>\s*<div class="display-field">\s*([^\n<]*)\s*<\/div>/);

if (arrangerName) {
  
  workflow.pageFields.arranger = arrangerName[1];
  let arrangerReview = "";
  
  // Separate multiple composer attributions
  let arrangerSplit = arrangerName[1].split(/(?:,? ?& ?| and |, ?)/);
  
  for (let arranger of arrangerSplit) {
    
    
    // Check to see if the composer already exists in Tutti; 
    // If so, get ID, and if not, prepare for user review before adding
    
    let arrangerSearch = await Tutti.getRecordsByFieldAsync("Composers", "Name", arranger);
    
    if (arrangerSearch.records.length > 0) {
      
      workflow.arrangers.push(arrangerSearch.records[0].id);
    
    } else {
    
      let firstName, lastName;
      
      // Check for anonymous attributions
      if (arranger.match(ANONYMOUS_REGEX)) {
        firstName = arranger;
        lastName = "";
      } else {
        let nameSplit = arranger.lastIndexOf(" ");
        firstName = arranger.substring(0, nameSplit);
        lastName = arranger.substring(nameSplit + 1);
      }
      
      arrangerReview += "First Name: " + firstName + "\n";
      arrangerReview += "Last Name: " + lastName + "\n\n";
    
    }   
  }
  
  if (arrangerReview) { workflow.arrangerReview = arrangerReview; }
}

console.log(workflow.pageFields);
return workflow;
Script.complete();
