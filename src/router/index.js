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
import Tag from '../components/tag/tag';

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/button', component: Button},
        {path: '/input', component: Input},
        {path: '/radio', component: Radio},
        {path: '/checkbox', component: Checkbox},
        {path: '/switch', component: Switch},
        {path: '/loading', component: Loading},
        {path: '/tooltip', component: Tooltip},
        {path: '/message', component: Message},
        {path: '/tag', component: Tag},
    ]
})
