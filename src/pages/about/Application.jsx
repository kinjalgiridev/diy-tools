import React from 'react';
import settings from '../../settings';

export default function Application() {
  return (
    <div>
      <h2>About DIY Tools</h2>
      <p>
         DIY Tools is small festival of applications. It was built with strong respect to your privacy – you will never see ads
        and it does not include analytics services (or actually any services at all). You are highly
        encouraged to explore <a href={settings.repository}>source code</a> and use it in your
        projects.
      </p>
    </div>
  );
}
