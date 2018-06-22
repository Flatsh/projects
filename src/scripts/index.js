import autocomplete from 'teleport-autocomplete';
import getWheatherDataFromCity from './lib/weatherManager';
import initMobileController from './lib/mobileController';
import getWeatherDataForCity from './lib/weatherManager';

document.addEventListener('DOMContentLoaded',() => {
    const weatherInput = new autocomplete({
        el: '#input-city',
        maxItems: 5,
    })
    //console.log(weatherInput);

    weatherInput.on('change', getWeatherDataForCity);
    initMobileController('left','right');
});

