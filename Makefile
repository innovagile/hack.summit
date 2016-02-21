all: install bower-install gulp

install:
	npm install

bower-install:
	bower prune
	bower install

gulp:
	gulp default
