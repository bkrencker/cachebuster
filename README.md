# cachebuster
Multiple ui5 Modules in CAP project using Cache-Buster

See
	o) https://launchpad.support.sap.com/#/incident/pointer/002075129500000470322020
	o) https://github.com/bkrencker/cachebuster

The app is working with following URLs:
	o) Protected App:
		/trialemmiui5/index.html
		/trialemmiui5-1.0.0/index.html
		
	o) Public App:
		/comemmitrialcachebusterui5_public/index.html
		/comemmitrialcachebusterui5_public-1.0.0/index.html
		
Learnings / Solution:
	1) Do not launch app with app-version in URL
	2) Do not put routes in central AppRouter 
	3) Do not use underscores in CAP module name because some times they make problems in xsuaa re-directs
		3a) When launching app from WebIDE the underscore will be omitted in the URL
	4) In ui5 manifest.json the data source must be relative to the browser url, otherwise the application name is lost in the data requests
	5) Cache-Buster is only active in deployed app (and not when launched locally via WebIDE)
	6) Even tough CacheBuster is officially supported on AS Netweaver and Cloud Portal only, it is also working for CAP projects
	7) It is not wise to use short routes like /public/ or /protected/ -> best thing is to have no routes at all (only for srv_api)