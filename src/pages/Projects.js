import React, { useState } from 'react';
import { MousePointerClick } from 'lucide-react';
import {isMobile} from 'react-device-detect';

import Title from '../components/Title';
import PageLayout from '../components/PageLayout';

function Projects({ projects, iframed }) {
  const [showQuestions, setShowQuestions] = useState(false);
  const ePhoneID = Math.floor(Math.random() * 10001); // random id to add to ePhone url

  const toggleShowQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  return (
    <PageLayout iframed={iframed}>
      <div>
        <Title text="Side Projects" />
        <div>
          Since <a href={"https://elh.github.io/gh-organizer/#/owners/elh/repo-timeline"} rel="noreferrer" className="link">2022</a>, I started tinkering with kooky pet projects as a resolution to share my thoughts more. I use these weeklong spikes to <button className="link decoration-2" onClick={toggleShowQuestions}>learn-by-doing<MousePointerClick size={16} strokeWidth={1.6} /></button> and be {isMobile ? <button className="tooltip" data-tip="Desktop only"><span className="underline decoration-wavy underline-offset-0 decoration-2 decoration-emerald-600">creative</span><MousePointerClick size={16} strokeWidth={1.6} /></button> : <a href={"https://elh.github.io/ePhone?url=https://elh.github.io/&id=" + ePhoneID}><span className="underline decoration-wavy underline-offset-0 decoration-2 decoration-emerald-600">creative</span><MousePointerClick size={16} strokeWidth={1.6} /></a>}. All projects are functional MVPs, documented, and runnable. Check them out!
        </div>
        {projects && projects.groups.map((group, i) =>
          <div className={i > 0 ? "mt-5" : "mt-10"}>
            <div className='font-bold project-header'>{group.name.toUpperCase()}</div>
            {group.repos && group.repos.map((repo, j) =>
              <div>
                { repo.repos
                  ? <span>
                    <span className=""></span>
                    {repo.repos.map((repo, k) =>
                      <span className=""><a href={`https://github.com/elh/`+repo} target={iframed ? "_blank": ""} rel="noreferrer" className="link">{repo}</a>{k > 0 ? "": ","}&nbsp;</span>
                    )}
                    </span>
                  : <span className=""><a href={`https://github.com/elh/`+repo.repo} target={iframed ? "_blank": ""} rel="noreferrer" className="link">{repo.repo}</a></span>
                }
                { repo.homepage &&
                  <span>
                    &nbsp;(<a href={repo.homepage} target={iframed && !repo.iframe_safe ? "_blank": ""} rel="noreferrer" className="link text-emerald-600">site ↗</a>)
                  </span>
                }
                { showQuestions
                  ? <span> - {repo.q}</span>
                  : <span> - {repo.desc}</span>
                }
              </div>
            )}
          </div>
        )}
      </div>
    </PageLayout>
  );
}

export default Projects;
