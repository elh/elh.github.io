.PHONY: content
content:
	@python scripts/yaml_to_json.py -f data/content.yaml

.PHONY: fetch
fetch:
	@python scripts/fetch_github_repos.py
