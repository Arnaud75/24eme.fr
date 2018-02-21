all: site fonts

site:
	jekyll b

fonts:
	cd css/24emefonts/ ; fontcustom compile
