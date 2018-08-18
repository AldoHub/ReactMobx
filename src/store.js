import {
    configure, 
    observable,
    flow,
    decorate,
    runInAction,
} from "mobx";

//useStrict
//enforcing our state changes to be inside our actions
configure({enforceActions: true});

//class for our store
class Store {
    //observable
    forecastInfo = ""; //state
    
    //API call
    //action
    getForecastFlow = flow(
        function*(city){
           
            const response = yield fetch(`http://api.apixu.com/v1/current.json?key=<API_KEY>&q=${city}`); 
                const weatherInfo = yield response.json(); 
                console.log(weatherInfo);     
                //this is changing the state
                //we would need to wrap it inside runInAction            
                this.forecastInfo = weatherInfo;
              
            }
      

    );
    
  
}//Store Class

//Mobx will decorate the variables
decorate(Store, {
    forecastInfo: observable
});

const store = new Store();

export default store;