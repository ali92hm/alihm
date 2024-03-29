.PHONY: clean, build, serve
.DEFAULT_GOAL:= serve

clean:
	./scripts/clean.sh

build:
	./scripts/build.sh

serve:
	hugo server --buildDrafts

serve-dist: clean build
	python -m http.server --directory dist

deploy:
	./scripts/deploy.sh

