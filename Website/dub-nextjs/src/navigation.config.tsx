import configuration from '~/configuration';
import { WrenchScrewdriverIcon, ClipboardDocumentListIcon} from '@heroicons/react/24/outline';

const NAVIGATION_CONFIG = {
  items: [
    {
      label: 'common:projectsTabLabel',
      path: configuration.paths.appHome,
      Icon: ({ className }: { className: string }) => {
        return <ClipboardDocumentListIcon className={className} />;
      },
    },
    {
      label: 'common:settingsTabLabel',
      path: '/settings',
      Icon: ({ className }: { className: string }) => {
        return <WrenchScrewdriverIcon className={className} />;
      },
    },
  ],
};

export default NAVIGATION_CONFIG;
