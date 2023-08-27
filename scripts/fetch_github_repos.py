import os
import json
from github import Github, Auth

'''
Given a github token, fetch all or my public repos.
Writes data/repos.json.

GH_TOKEN=<replace me> python scripts/fetch_github_repos.py
'''

ME = "elh"

auth = Auth.Token(os.getenv('GH_TOKEN'))
g = Github(auth=auth)

repos = {}
for repo in g.get_user().get_repos():
    if repo.owner.login != ME:
        continue
    if repo.visibility != 'public':
        continue
    repos[repo.name] = {
        'name': repo.name,
        'description': repo.description,
        'homepage': repo.homepage,
        'language': repo.language,
        'owner_login': repo.owner.login,
        'owner_name': repo.owner.name,
    }

with open('data/repos.json', 'w') as f:
    json.dump(repos, f, indent=2)
