.PHONY: help build trivy

help: ## Show this help message
	@echo "Available targets:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  %-12s %s\n", $$1, $$2}'

install: ## Install project dependicies
	npm install

format: ## Formats react files using prettier
	npx prettier --write .

build: ## Build the project
	podman build -t portfolio-website:test .

start: ## Starts the image
	podman run --rm -p 0.0.0.0:8080:8080 portfolio-website:test

trivy: ## Run trivy vulnerability scan
	trivy image \
		--image-src podman \
		--severity HIGH,CRITICAL \
		--exit-code 1 \
		localhost/portfolio-website:test
