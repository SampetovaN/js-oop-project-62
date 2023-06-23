run:
	bin/validator-package.js 10

install-deps:
	npm ci

test:
	npm test --test-reporter=spec

test-coverage:
	# TODO: set global flag --experimental-test-coverage
	npm test

lint-fix:
	npx eslint . --fix

publish:
	npm publish

.PHONY: test