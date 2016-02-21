all: install bower-install gulp

db_restore:
	sudo -u postgres -s /bin/bash -c "/usr/bin/dropdb --if-exists charity"
	sudo -u postgres -s /bin/bash -c "/usr/bin/createdb charity"
	sudo -u postgres -s /bin/bash -c "/usr/bin/dropuser --if-exists innovdb"
	sudo -u postgres -s /bin/bash -c "/usr/bin/createuser -s -P innovdb"
	psql -h 127.0.0.1 charity innovdb --password -f api/charity.sql

install:
	npm install

bower-install:
	bower prune
	bower install

gulp:
	gulp default
