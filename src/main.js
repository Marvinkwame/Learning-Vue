import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDiaolog from './components/UI/BaseDialog.vue';

const app = createApp(App);

//Global Components
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDiaolog);


app.mount('#app');
