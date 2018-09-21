import Vue from 'vue'
import Router from 'vue-router'

import Button from '../components/button/button';
import Input from '../components/input/input';
import Radio from '../components/radio/radio';
import Checkbox from '../components/checkbox/checkbox';
import Switch from '../components/switch/switch';
import Loading from '../components/loading/loading';
import Tooltip from '../components/tooltip/tooltip';
import Message from '../components/message/message';
import Alert from '../components/alert/alert';
import Tag from '../components/tag/tag';
import FullPage from '../components/fullpage/fullpage';
import Slider from '../components/slider/slider';
import ScrollBar from '../components/scrollBar/scrollBar';
import Select from '../components/select/select';
import TimeLine from '../components/timeLine/timeLine';
import DotRun from '../components/dotRun/dotRun';
import Tree from '../components/tree/tree';
import Page from '../components/page/page';
import Modal from '../components/modal/modal';

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', redirect: '/button'},
        {path: '/button', component: Button},
        {path: '/input', component: Input},
        {path: '/radio', component: Radio},
        {path: '/checkbox', component: Checkbox},
        {path: '/switch', component: Switch},
        {path: '/loading', component: Loading},
        {path: '/tooltip', component: Tooltip},
        {path: '/message', component: Message},
        {path: '/alert', component: Alert},
        {path: '/tag', component: Tag},
        {path: '/fullpage', component: FullPage},
        {path: '/slider', component: Slider},
        {path: '/scrollBar', component: ScrollBar},
        {path: '/select', component: Select},
        {path: '/timeLine', component: TimeLine},
        {path: '/dotRun', component: DotRun},
        {path: '/tree', component: Tree},
        {path: '/page', component: Page},
        {path: '/modal', component: Modal},
    ]
})
