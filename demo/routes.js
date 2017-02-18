import App from './src/App';

import Home from './src/Home/Home';
import InputDemo from './src/InputDemo/InputDemo';
import SelectDemo from './src/SelectDemo/SelectDemo';
import AutocompleteDemo from './src/AutocompleteDemo/AutocompleteDemo';
import PreloaderDemo from './src/PreloaderDemo/PreloaderDemo';
import SwitchDemo from './src/SwitchDemo/SwitchDemo';
import ChipDemo from './src/ChipDemo/ChipDemo';
import ButtonDemo from './src/Button/ButtonDemo';
import CardDemo from './src/Card';
import ModalDemo from './src/Modal';
import CheckboxDemo from './src/Checkbox';
import PaginationDemo from './src/Pagination';
import DropdownDemo from './src/Dropdown';

const routes = {
  path: '',
  component: App,
  childRoutes: [
    { path: '/', component: Home },
    { path: '/input', component: InputDemo },
    { path: '/select', component: SelectDemo },
    { path: '/autocomplete', component: AutocompleteDemo },
    { path: '/preloader', component: PreloaderDemo },
    { path: '/switch', component: SwitchDemo },
    { path: '/chip', component: ChipDemo },
    { path: '/button', component: ButtonDemo },
    { path: '/card', component: CardDemo },
    { path: '/modal', component: ModalDemo },
    { path: '/checkbox', component: CheckboxDemo },
    { path: '/pagination', component: PaginationDemo },
    { path: '/dropdown', component: DropdownDemo },
  ]
}

export { routes };
