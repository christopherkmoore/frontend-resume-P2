var bio = {
    "name": "Christopher Moore",
    "role": "Web Development",
    "contacts": {
        
            "mobile": "619 929 7446",
            "email": "Christopherkmoore1@gmail.com",
            "github": "christopherkmoore",
            "twitter": "crztopherkmoore",
            "location": "Seattle, WA"
    },
    "welcomeMessage": "Say wassup to my Resume.",
    "skills": [ "realness", "sporadic movement", "freshness" ],
    "biopic": "images/fry.jpg",
}

var work = {
    "jobs": [
        {
            "employer": "Showbox Market",
            "title": "barback",
            "location": "1426 1st Avenue, Seattle, WA 98101",
            "dates": "summer 2011 - Present",
            "description": "help put the drink in the cup"
        },
        {
            "employer": "Bottle House",
            "title": "server",
            "location": "1416 34th Avenue, Seattle, WA 98122",
            "dates": "Summer 2014 - Present",
            "description": "server and retail wine seller"
        },
        {
            "employer": "Rendezvous",
            "title": "barback",
            "location": "2322 2nd Avenue, Seattle, WA 98121",
            "dates": "Fall 2014 - Present",
            "description": "help put the drink in the cup"
        }
    ]
}

var education = {
    "schools": [
        {
            "name": "Seattle University",
            "location": "901 12th Avenue, Seattle, WA 98122",
            "degree": "Bachelors",
            "major": "English Literature",
            "dates": "2008-2012",
            "url": "http://example.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "HTML, CSS, and Javascript Nanodegree",
            "school": "Udacity",
            "dates": "Winter 2014 - Present",
            "url": "http://Udacity.com"
        }
    ]
}

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "Summer 14 - Winter 14",
			"description": "Completed first project, blah blah blah",
			"images": "images/197x148.gif"
		}
	]
}

bio.display = function(){

	var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
	var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedNameTitle = formattedHeaderName + formattedHeaderRole;
	$('#header').prepend(formattedNameTitle);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$('#header').append(formattedBioPic);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$('#header').append(formattedWelcomeMsg);


	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$('.flex-box').append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$('.flex-box').append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$('.flex-box').append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$('.flex-box').append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$('.flex-box').append(formattedLocation);
	
	$('#header').append(HTMLskillsStart);

	for (i in bio.skills) {

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
	$('#header').append(formattedSkills);

	}
}


work.display = function() {
	for (job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$('.work-entry:last').append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$('.work-entry:last').append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$('.work-entry:last').append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);
	}
}


projects.display = function() {
	for (i in projects.projects) {
		$('#projects').append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$('.project-entry:last').append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$('.project-entry:last').append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$('.project-entry:last').append(formattedProjectDescription);

		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
		$('.project-entry:last').append(formattedProjectImage);
	}
}


education.display = function() {
	for (i in education.schools) {
		$('#education').append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		var formattedSchoolNameTitle = formattedSchoolName + formattedDegree;
		$('.education-entry:last').append(formattedSchoolNameTitle);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$('.education-entry:last').append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$('.education-entry:last').append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
		$('.education-entry:last').append(formattedSchoolMajor);
	}
	for (i in education.onlineCourses) {
		$('.education-entry:last').append(HTMLonlineClasses);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		$('.education-entry:last').append(formattedOnlineTitle);

		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		$('.education-entry:last').append(formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
		$('.education-entry:last').append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		$('.education-entry:last').append(formattedOnlineURL);


	}
}

$('#mapDiv').append(googleMap);


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

bio.display();
work.display();
education.display();
projects.display();



