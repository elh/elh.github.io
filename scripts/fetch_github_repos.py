import os
import json
import datetime
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
    if repo.fork:
        continue
    repos[repo.name] = {
        'name': repo.name,
        'description': repo.description,
        'homepage': repo.homepage,
        'language': repo.language,
        'visibility': repo.visibility,
        'archived': repo.archived,
        'fork': repo.fork,
        'owner_login': repo.owner.login,
        'owner_name': repo.owner.name,
    }

out = {
    'fetched_at': str(datetime.datetime.now()),
    'repos': repos,
}

with open('data/repos.json', 'w') as f:
    json.dump(out, f, indent=2)
